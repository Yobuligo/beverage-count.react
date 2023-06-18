import { IHaveId } from "../types/IHaveId";
import { readLocalStorage } from "../utils/localStorage/readLocalStorage";
import { writeLocalStorage } from "../utils/localStorage/writeLocalStorage";
import { SnapshotDAO } from "./SnapshotDAO";

export abstract class LocalStorageDAO<T extends IHaveId> {
  constructor(private needsSnapshot: boolean) {}

  add(dataObject: T): Promise<boolean> {
    return new Promise(async (resolve) => {
      const items = await this.findAll();
      items.push(dataObject);
      writeLocalStorage(this.className, items);
      await this.createSnapshot();
      resolve(true);
    });
  }

  create(dataObject: Omit<T, "id">): T {
    return { ...dataObject, id: crypto.randomUUID() } as T;
  }

  findAll(): Promise<T[]> {
    return new Promise((resolve) => {
      resolve(readLocalStorage<T[]>(this.className) ?? []);
    });
  }

  delete(dataObject: T): Promise<boolean> {
    return new Promise(async (resolve) => {
      const items = await this.findAll();
      const index = items.findIndex((element) => element.id === dataObject.id);
      items.splice(index, 1);
      writeLocalStorage(this.className, items);
      await this.createSnapshot();
      resolve(true);
    });
  }

  update(dataObject: T): Promise<boolean> {
    return new Promise(async (resolve) => {
      const items = await this.findAll();
      const index = items.findIndex((element) => element.id === dataObject.id);
      items.splice(index, 1, dataObject);
      writeLocalStorage(this.className, items);
      await this.createSnapshot();
      resolve(true);
    });
  }

  private createSnapshot(): Promise<boolean> {
    return new Promise(async (resolve) => {
      if (this.needsSnapshot) {
        resolve(await SnapshotDAO.createSnapshot());
      }
      resolve(true);
    });
  }

  private get className(): string {
    return this.constructor.name;
  }
}

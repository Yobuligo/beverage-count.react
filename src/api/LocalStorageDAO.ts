import { IHaveId } from "../types/IHaveId";
import { readLocalStorage } from "../utils/localStorage/readLocalStorage";
import { writeLocalStorage } from "../utils/localStorage/writeLocalStorage";

export abstract class LocalStorageDAO<T extends IHaveId> {
  constructor(private snapshotter?: () => void) {}

  add(dataObject: T): Promise<boolean> {
    return new Promise(async (resolve) => {
      const items = await this.findAll();
      items.push(dataObject);
      writeLocalStorage(this.className, items);
      this.snapshotter?.();
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
      this.snapshotter?.();
      resolve(true);
    });
  }

  update(dataObject: T): Promise<boolean> {
    return new Promise(async (resolve) => {
      const items = await this.findAll();
      const index = items.findIndex((element) => element.id === dataObject.id);
      items.splice(index, 1, dataObject);
      writeLocalStorage(this.className, items);
      this.snapshotter?.();
      resolve(true);
    });
  }

  private get className(): string {
    return this.constructor.name;
  }
}

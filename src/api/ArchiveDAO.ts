import { IArchive } from "../model/IArchive";
import { LocalStorageDAO } from "./LocalStorageDAO";

class ArchiveDefaultDAO extends LocalStorageDAO<IArchive> {}
export const ArchiveDAO = new ArchiveDefaultDAO();

import { EntityType } from "./entities";
import { NotionPage } from "./page";

/**
 * Common client interface for interacting with entities.
 * @category Client Setup
 */
export interface Client {
  search<T = NotionPage>(query: string, type: EntityType): Promise<T[]>;
  get<T = NotionPage>(id: string, type: EntityType): Promise<T>;
}

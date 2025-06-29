import { EntityType } from "./entities";

/**
 * Common client interface for interacting with entities.
 * @category Client Setup
 */
export interface Client {
  search: (query: string, type: EntityType) => Promise<any>;
  list: (type: EntityType) => Promise<any>;
  get: (id: string, type: EntityType) => Promise<any>;
}

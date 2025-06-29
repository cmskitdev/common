import { Entity, EntityData, EntityType } from "../entities";

/**
 * Type for the response of the get operation.
 * @document ../../../../../docs/docs/clients/operations/get.md
 * @document ../../../../../docs/docs/clients/operations/response.md
 * @type T - The type of the entity to infer from the response.
 */
export type Response<T extends EntityData = EntityData> = {
  type: EntityType;
  next?: string;
  results: Array<Entity<T>>;
};

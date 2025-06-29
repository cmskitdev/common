/**
 * Entity class for representing objects from data sources.
 *
 * @category Entities
 * @group Entity Class
 */
export class Entity<T extends EntityData = EntityData> {
  /**
   * The id of the entity so cmskit knows how to find it.
   *
   * This is typically a string that is unique to the entity such as
   * a uuid (`123e4567-e89b-12d3-a456-426614174000`).
   *
   * @example
   * ```ts
   * const entity = new Entity({
   *   id: "123e4567-e89b-12d3-a456-426614174000", // <-- This is the id of the entity.
   *   type: EntityType.Content,
   *   data: "My Page"
   * });
   * ```
   */
  id: string;

  /**
   * The type of the entity so cmskit knows how to handle it.
   *
   * @example
   * ```ts
   * const entity = new Entity({
   *   id: "123e4567-e89b-12d3-a456-426614174000",
   *   type: EntityType.Content, // <--- This is the type of the entity.
   *   data: "My Page"
   * });
   * ```
   */
  type: EntityType;

  /**
   * The data of the entity such as a string or object.
   *
   * @example
   * ```ts
   * const entity = new Entity({
   *   id: "123e4567-e89b-12d3-a456-426614174000",
   *   type: EntityType.Content,
   *   data: "My Page" // <--- This is the data of the entity.
   * });
   * ```
   *
   * @example
   * ```ts
   * const entity = new Entity({
   *   id: "123e4567-e89b-12d3-a456-426614174000",
   *   type: EntityType.Content,
   *   data: { customTitle: "My Page", customData: { foo: "bar" } } // <--- This is the data of the entity.
   * });
   * ```
   */
  data: T;

  /**
   * When creating a new entity, you can pass in an existing entity to copy the id, type, and data.
   *
   * @param v - The entity to copy the id, type, and data from.
   *
   * @example
   * ```ts
   * const entity = new Entity({
   *   id: "123e4567-e89b-12d3-a456-426614174000",
   *   type: EntityType.Content,
   *   data: "My Page"
   * });
   *
   * console.log(entity.id); // "123e4567-e89b-12d3-a456-426614174000"
   * console.log(entity.type); // EntityType.Content
   * console.log(entity.data); // "My Page"
   */
  constructor(v: Entity<T>) {
    this.id = v.id;
    this.type = v.type;
    this.data = v.data;
  }
}

/**
 * Represents the type of object that can be retrieved from the client.
 * Allows for custom types while preserving default "page" and "record" types.
 *
 * @category Entities
 */
export enum EntityType {
  /**
   * Indicates that this entity is to be treated as a database.
   */
  Database = "database",
  /**
   * Indicates that this entity is to be treated as a content object.
   */
  Content = "content",
  /**
   * Indicates that this entity is to be treated as a block.
   */
  Block = "block",
}

/**
 * Type for the data of an entity.
 *
 * The generic type parameter T defaults to 'never', which means if no type is provided,
 * T will be excluded from the union type. This effectively makes the type
 * `string | number | boolean | object` when used without a type parameter.
 * When a type parameter is provided, it will be included in the union.
 *
 * @type T @optional Type to include in the union of allowed data types.
 * @category Entities
 */
export type EntityData<T = never> = string | number | boolean | object | T;

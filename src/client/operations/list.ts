import { EntityData } from "../entities";
import { Response } from "./response";

/**
 * List operation function type.
 * @document ../../../../../docs/docs/clients/operations/list.md
 * @type T - The type of the entities to infer from the response.
 * @category Clients
 * @group List Operation
 * @example
 * ```ts
 * const myLister: List.Operation = async (args) => {
 *   const response = await notion.databases.query({
 *     database_id: "database_id",
 *     start_cursor: args.cursor,
 *     page_size: args.size
 *   });
 *   return response;
 * };
 * console.log(myLister<{ title: string[] }>({ size: 10 }));
 * ```
 */

/**
 * Type for the arguments of the list operation.
 * @summary List Args
 * @category Types
 */
export type Args = {
  cursor?: string;
  size?: number;
};

/**
 * List operation function type.
 * @type T - The type of the entity to infer from the response.
 * @category Types
 */
export type Operation = <T extends EntityData = EntityData>(
  args: Args
) => Promise<Response<T>>;

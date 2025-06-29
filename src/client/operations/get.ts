import { EntityData } from "../entities";
import { Response } from "./response";

/**
 * Get operation function type.
 * @document ../../../../../docs/docs/clients/operations/get.md
 * @type T - The type of the entities to infer from the response.
 * @category Clients
 * @group Get Operation
 * @example
 * ```ts
 * const myGetter: Get.Operation = async (args) => {
 *   const response = await notion.pages.retrieve({ id: args.id });
 *   return response;
 * };
 * console.log(myGetter<{ title: string[] }>({ id: "page_id" }));
 * ```
 */
export namespace Get {
  /**
   * Type for the arguments of the get operation.
   * @summary Get Args
   * @category Types
   */
  export type Args = {
    id: string;
  };

  /**
   * Get operation function type.
   * @type T - The type of the entity to infer from the response.
   * @category Types
   */
  export type Operation = <T extends EntityData = EntityData>(
    args: Args
  ) => Promise<Response<T>>;
}

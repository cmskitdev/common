import { EntityData } from "../entities";
import { Response } from "./response";

/**
 * Search operation function type.
 *
 * @category Clients
 * @document ../../../../../docs/docs/clients/operations/search.md
 * @type T - The type of the entities to infer from the response.
 * @example
 * ```ts
 * const mySearcher: Search.Operation = async (args) => {
 *   const response = await notion.pages.search({ query: args.query });
 *   return response;
 * };
 * console.log(mySearcher<{ title: string[] }>({ query: "page_id" }));
 * ```
 */
export namespace Search {
  /**
   * Type for the arguments of the search operation.
   * @summary Search Args
   * @category Types
   */
  export type Args = {
    query: string;
  };

  /**
   * Search operation function type.
   * @type T - The type of the entity to infer from the response.
   * @category Types
   */
  export type Operation = <T extends EntityData = EntityData>(
    args: Args
  ) => Promise<Response<T>>;

  export interface SearchParams {
    ancestorId: string;
    query: string;
    filters?: {
      isDeletedOnly: boolean;
      excludeTemplates: boolean;
      isNavigableOnly: boolean;
      requireEditPermissions: boolean;
    };
    limit?: number;
    searchSessionId?: string;
  }

  export interface SearchResults {
    recordMap: RecordMap;
    results: SearchResult[];
    total: number;
  }

  export interface SearchResult {
    id: string;
    isNavigable: boolean;
    score: number;
    highlight: {
      pathText: string;
      text: string;
    };
  }
}

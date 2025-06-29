import { Get } from "./get";
import * as List from "./list";
import { Search } from "./search";

/**
 * Operations namespace containing get, list, and search operations.
 * @category Clients
 */
export namespace operations {
  export import get = Get;
  export import list = List;
  export import search = Search;
}

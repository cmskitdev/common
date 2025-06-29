/**
 * aaa
 * @packageDocumentation vvvv
 * @categoryDescription asdfasdfasdf
 * @category Clients
 * @group Get Operation
 * @group List Operation
 * @memberof Get
 * @memberof List
 * @memberof Clients
 * @memberof Operations
 * React Components -- This description is added with the `@categoryDescription` tag
 * on the entry point in src/index.ts
 *
 * @document documents/external-markdown.md
 * @document documents/markdown.md
 * @document documents/syntax-highlighting.md
 * @document documents/include.md
 */
import { Get } from "./get";
import * as List from "./list";

/**
 * Operations namespace containing get and list operations.
 * @category Clients
 */
export namespace operations {
  export import get = Get;
  export import list = List;
}

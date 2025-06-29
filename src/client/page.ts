export interface PageBase<T> {
  metadata: {
    id: string;
  };
  frontmatter: {
    title: string;
    description: string;
    url: string;
    created: Date;
    updated: Date;
    author: string;
  };
  properties: Map<string, string | number | boolean | Date>;
  children: PageBase<T>[];
  content: string;
}

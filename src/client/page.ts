import { User, FileObject, PagePropertyValue } from "../properties/property";

/**
 * Comprehensive interface for Notion pages based on the official Notion API.
 */
export interface NotionPage {
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  cover: FileObject | null;
  icon: FileObject | { type: "emoji"; emoji: string } | null;
  parent: { type: "database_id"; database_id: string } | { type: "page_id"; page_id: string };
  archived: boolean;
  properties: Record<string, PagePropertyValue>;
  url: string;
}

/**
 * @deprecated Use NotionPage instead
 */
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

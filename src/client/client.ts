import { Client as NotionClient } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

export type GetType = "page" | "database";

export interface CommonClient {
  search: (query: string, type: GetType) => Promise<any>;
  get: (id: string, type: GetType) => Promise<any>;
}

export class Client implements CommonClient {
  private notion: NotionClient;

  constructor() {
    this.notion = new NotionClient({
      auth: process.env.NOTION_API_KEY,
    });
  }

  async search(query: string, type: GetType) {
    return this.notion.search({
      query,
      filter: {
        property: "object",
        value: type,
      },
    });
  }

  async get(id: string, type: GetType) {
    switch (type) {
      case "page":
        return this.notion.pages.retrieve({
          page_id: id,
        });
      case "database":
        return this.notion.databases.retrieve({
          database_id: id,
        });
    }
  }
}

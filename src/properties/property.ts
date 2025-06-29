/**
 * Enum representing all supported property types for Notion-like properties.
 * This enum provides a type-safe and descriptive way to refer to property types throughout the codebase.
 *
 * @enum
 */
export enum PropertyType {
  Title = "title",
  RichText = "rich_text",
  Number = "number",
  Select = "select",
  MultiSelect = "multi_select",
  Date = "date",
  Checkbox = "checkbox",
  Url = "url",
  Email = "email",
  PhoneNumber = "phone_number",
  Formula = "formula",
  Relation = "relation",
  Rollup = "rollup",
  CreatedBy = "created_by",
  CreatedTime = "created_time",
  LastEditedBy = "last_edited_by",
  LastEditedTime = "last_edited_time",
  Status = "status",
  Verification = "verification",
  UniqueId = "unique_id",
  Files = "files",
  People = "people",
}

/**
 * Represents a multi-select option value.
 */
export class PropertyMultiSelectValue {
  id: string;
  name: string;
}

/**
 * User object for created_by, last_edited_by, people properties.
 */
export interface User {
  object: "user";
  id: string;
  name?: string;
  avatar_url?: string | null;
  type: "person" | "bot";
  person?: { email?: string };
  bot?: {};
}

/**
 * File object for files property.
 */
export interface FileObject {
  name: string;
  type: "file" | "external";
  file?: { url: string; expiry_time?: string };
  external?: { url: string };
}

/**
 * Select/Multi-select option.
 */
export interface SelectOption {
  id: string;
  name: string;
  color: string;
}

/**
 * Formula result types.
 */
export interface FormulaResult {
  type: "boolean" | "date" | "number" | "string";
  boolean?: boolean;
  date?: DateProperty;
  number?: number;
  string?: string;
}

/**
 * Rollup result types.
 */
export interface RollupResult {
  type: "array" | "date" | "incomplete" | "number" | "unsupported";
  function: string;
  array?: PropertyValue[];
  date?: DateProperty;
  number?: number;
}

/**
 * Rich text object (simplified).
 */
export interface RichTextObject {
  type: "text" | "mention" | "equation";
  text?: { content: string; link?: { url: string } | null };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href?: string | null;
}

/**
 * Discriminated union type for all Notion page property values.
 * Uses the `type` field as discriminator for maximum type safety.
 */
export type PagePropertyValue = 
  | { id: string; type: "title"; title: RichTextObject[] }
  | { id: string; type: "rich_text"; rich_text: RichTextObject[] }
  | { id: string; type: "number"; number: number | null }
  | { id: string; type: "select"; select: SelectOption | null }
  | { id: string; type: "multi_select"; multi_select: SelectOption[] }
  | { id: string; type: "date"; date: DateProperty | null }
  | { id: string; type: "checkbox"; checkbox: boolean }
  | { id: string; type: "url"; url: string | null }
  | { id: string; type: "email"; email: string | null }
  | { id: string; type: "phone_number"; phone_number: string | null }
  | { id: string; type: "formula"; formula: FormulaResult }
  | { id: string; type: "relation"; relation: Array<{ id: string }>; has_more: boolean }
  | { id: string; type: "rollup"; rollup: RollupResult }
  | { id: string; type: "created_by"; created_by: User }
  | { id: string; type: "created_time"; created_time: string }
  | { id: string; type: "last_edited_by"; last_edited_by: User }
  | { id: string; type: "last_edited_time"; last_edited_time: string }
  | { id: string; type: "status"; status: SelectOption | null }
  | { id: string; type: "verification"; verification: { state: "verified" | "unverified"; verified_by: User | null; date: DateProperty | null } }
  | { id: string; type: "unique_id"; unique_id: { number: number; prefix: string | null } }
  | { id: string; type: "files"; files: FileObject[] }
  | { id: string; type: "people"; people: User[] };

/**
 * Union type representing all possible property values.
 */
export type PropertyValue =
  | string
  | number
  | boolean
  | Date
  | string[]
  | number[]
  | PropertyMultiSelectValue[]
  | User
  | User[]
  | FileObject[]
  | SelectOption
  | SelectOption[]
  | FormulaResult
  | RollupResult
  | RichTextObject[];

/**
 * Base interface that all property implementations must satisfy.
 * This provides a consistent structure for working with Notion properties.
 *
 * @interface
 */
export interface Property<T> {
  id: string;
  type: PropertyType;
  original: T;

  get value(): PropertyValue;
}

export interface DateProperty {
  start: string;
  end?: null | string;
  timezone?: null | string;
}

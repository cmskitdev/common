import { Metadata } from "../content/metadata";
import { Property, PropertyType } from "./property";

/**
 * Represents a multi-select property.
 *
 * @class
 * @implements Property
 */
export class PropertyMultiSelect<T> implements Property<T> {
  id: string;
  type: PropertyType.MultiSelect;
  original: T;
  metadata: Metadata;
  value: PropertyMultiSelectValue[];

  constructor(v: PropertyMultiSelect<T>) {
    this.metadata = new Metadata(v.metadata);
    this.value = v.value;
  }
}

export class PropertyMultiSelectValue {
  id: string;
  name: string;
}

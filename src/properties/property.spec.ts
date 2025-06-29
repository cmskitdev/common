import { test } from "vitest";
import { Properties } from "./properties";
import { Property, PropertyType } from "./property";
var inspect = require("object-inspect");

test("PropertyMultiSelect", () => {
  const map = new Map<string, Property<any>>();
  map.set("Tags", {
    id: "tags",
    type: PropertyType.MultiSelect,
    original: {
      id: "tags",
      name: "Tags",
      color: "blue",
    },
    value: [],
  });
  const properties = new Properties(map);
  console.log(inspect(properties, { indent: "\t" }));
});

import { inspect } from "util";
import { expect, test } from "vitest";
import { Client } from "./client";

const client = new Client();

test(`get database by id`, async () => {
  const response = await client.get(
    "16ad7342-e571-80c4-a065-c7a1015871d3",
    "database"
  );
  // console.log(inspect(response, { depth: null, colors: true, compact: false }));
  expect(response.id).toEqual("16ad7342-e571-80c4-a065-c7a1015871d3");
});

test(`get database entry by id`, async () => {
  const response = await client.get(
    "1e5d7342-e571-804b-9fd2-d97fd12ae897",
    "page"
  );
  console.log(inspect(response, { depth: null, colors: true, compact: false }));
  expect(response.id).toEqual("1e5d7342-e571-804b-9fd2-d97fd12ae897");
});

import {
  app,
  HttpRequest,
  HttpResponseInit,
  // InvocationContext,
} from "@azure/functions";
import { PRODUCTS } from "../data/products";

export async function GetProducts(
  request: HttpRequest,
  // context: InvocationContext,
): Promise<HttpResponseInit> {
  return {
    body: JSON.stringify(PRODUCTS),
  };
}

app.http("GetProducts", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: GetProducts,
});

import { app, HttpRequest, HttpResponseInit } from "@azure/functions";

export async function CreateOrder(
  request: HttpRequest,
): Promise<HttpResponseInit> {
  const body = await request.json();

  return {
    body: JSON.stringify({ message: "Cart created Succesfully", data: body }),
    status: 201,
  };
}

app.http("CreateOrder", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: CreateOrder,
});

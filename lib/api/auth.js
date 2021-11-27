import client from "./client";

export const login = async (user) =>
  await client.post("/login", user).then((res) => res.data);

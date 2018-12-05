/*
This function mimics a login request.

Don't edit this file. It is here in
case you would like to reference it.
*/
export default async function(email, password) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email !== "skippy@io.com" || password !== "password")
    throw new Error("not authorized");

  return {
    id: "123",
    email,
    password,
    name: "Skippy"
  };
}

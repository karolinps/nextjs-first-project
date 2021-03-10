import instance from "../instance";
export default {
  login: (email, password) =>
    instance.post("/login", {
      email,
      password,
    }),
};

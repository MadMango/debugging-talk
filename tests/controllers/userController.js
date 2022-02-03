const test = require("ava");
import { getAllUsers } from "../../controllers/userController";

test("should return some users", (t) => {
  const users = getAllUsers();
  t.truthy(users);
});

/*

DO NOT CHANGE THIS FILE

*/
require("dotenv").config();
const bcrypt = require("bcrypt");
const faker = require("faker");
const client = require("../../db/client");
const {
  getUserById,
  createUser,
  getUser,
  getUserByUsername,
} = require("../../db");
const { createFakeUser } = require("../helpers");

describe("DB Users", () => {
  describe("createUser({ username, password })", () => {
<<<<<<< HEAD
    it("Creates and returns the user", async () => {
=======
    xit("Creates and returns the user", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUserData = {
        username: "Horace",
        password: faker.internet.password(),
      };
      const user = await createUser(fakeUserData);
      expect(user.username).toBe(fakeUserData.username);
    });

<<<<<<< HEAD
    it("Does NOT return the password", async () => {
=======
    xit("Does NOT return the password", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUserData = {
        username: faker.internet.userName(),
        password: faker.internet.password(),
      };
      const user = await createUser(fakeUserData);
      expect(user.password).toBeFalsy();
    });
  });

  describe("getUserByUsername", () => {
<<<<<<< HEAD
    it("Gets a user based on the username", async () => {
=======
    xit("Gets a user based on the username", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUserData = {
        username: "Sean",
        password: faker.internet.password(),
      };
      await createUser(fakeUserData);
      const user = await getUserByUsername(fakeUserData.username);
      expect(user).toBeTruthy();
      expect(user.username).toBe(fakeUserData.username);
    });

<<<<<<< HEAD
    it("Does return the password", async () => {
=======
    xit("Does return the password", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUserData = {
        username: "Brittany",
        password: faker.internet.password(),
      };
      await createUser(fakeUserData);
      const user = await getUserByUsername(fakeUserData.username);
      expect(user.password).toBeTruthy();
    });
  });

  describe("getUser({ username, password })", () => {
<<<<<<< HEAD
    it("Returns the user when the password verifies", async () => {
=======
    xit("Returns the user when the password verifies", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUserData = {
        username: "Nicole",
        password: faker.internet.password(),
      };
      await createUser(fakeUserData);
      const user = await getUser(fakeUserData);
      expect(user).toBeTruthy();
      expect(user.username).toBe(fakeUserData.username);
    });

<<<<<<< HEAD
    it("Does Not return the user if the password doesn't verify", async () => {
=======
    xit("Does Not return the user if the password doesn't verify", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUserData = {
        username: "Issac",
        password: faker.internet.password(),
      };
      await createUser(fakeUserData);
      const user = await getUser({
        username: "Issac",
        password: "Bad Password",
      });
      expect(user).toBeFalsy();
    });

<<<<<<< HEAD
    it("Does NOT return the password", async () => {
=======
    xit("Does NOT return the password", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUserData = {
        username: "Michael",
        password: faker.internet.password(),
      };
      await createUser(fakeUserData);
      const user = await getUser(fakeUserData);
      expect(user.password).toBeFalsy();
    });
  });

  describe("getUserById", () => {
<<<<<<< HEAD
    it("Gets a user based on the user Id", async () => {
=======
    xit("Gets a user based on the user Id", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUser = await createFakeUser("Jacob");
      const user = await getUserById(fakeUser.id);
      expect(user).toBeTruthy();
      expect(user.id).toBe(fakeUser.id);
    });

<<<<<<< HEAD
    it("Does NOT return the password", async () => {
=======
    xit("Does NOT return the password", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUser = await createFakeUser("Jonathan");
      const user = await getUserById(fakeUser.id);
      expect(user.password).toBeFalsy();
    });
  });

  describe("EXTRA CREDIT: Hashing Passwords", () => {
<<<<<<< HEAD
    it("EXTRA CREDIT: Does not store plaintext password in the database", async () => {
=======
    xit("EXTRA CREDIT: Does not store plaintext password in the database", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUserData = {
        username: "Harry",
        password: faker.internet.password(),
      };
      const user = await createUser(fakeUserData);
      const queriedUser = await getUserByUsername(user.username);
      expect(queriedUser.password).not.toBe(fakeUserData.password);
    });

<<<<<<< HEAD
    it("EXTRA CREDIT: Hashes the password (salted 10 times) before storing it to the database", async () => {
=======
    xit("EXTRA CREDIT: Hashes the password (salted 10 times) before storing it to the database", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUserData = {
        username: "Nicky",
        password: faker.internet.password(),
      };
      const user = await createUser(fakeUserData);
      const {
        rows: [queriedUser],
      } = await client.query(
        `
        SELECT * from users
        WHERE id = $1
        `,
        [user.id]
      );
      const hashedVersion = await bcrypt.compare(
        fakeUserData.password,
        queriedUser.password
      );
      expect(hashedVersion).toBe(true);
    });
  });
});

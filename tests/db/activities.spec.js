/*

DO NOT CHANGE THIS FILE

*/
require("dotenv").config();
const client = require("../../db/client");
const {
  getAllActivities,
  createActivity,
  updateActivity,
  getActivityById,
  getActivityByName,
} = require("../../db");
const { createFakeActivity } = require("../helpers");

describe("DB Activities", () => {
  describe("createActivity({ name, description })", () => {
<<<<<<< HEAD
    it("Creates and returns the new activity", async () => {
=======
    xit("Creates and returns the new activity", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const activityToCreate = {
        name: "Marathon",
        description: "Run all the miles",
      };
      const createdActivity = await createActivity(activityToCreate);
      expect(createdActivity.name).toBe(activityToCreate.name);
      expect(createdActivity.description).toBe(activityToCreate.description);
    });
  });

  describe("getAllActivities", () => {
<<<<<<< HEAD
    it("Selects and returns an array of all activities", async () => {
=======
    xit("Selects and returns an array of all activities", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      await createFakeActivity("Sit ups", "Do 100 reps");
      const activities = await getAllActivities();
      const { rows: activitiesFromDatabase } = await client.query(`
        SELECT * FROM activities;
      `);
      expect(activities).toEqual(activitiesFromDatabase);
    });
  });

  describe("getActivityById", () => {
<<<<<<< HEAD
    it("Gets activities by their id", async () => {
=======
    xit("Gets activities by their id", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeActivity = await createFakeActivity("Crunches", "Do 40 reps");
      const activity = await getActivityById(fakeActivity.id);
      expect(activity.id).toEqual(fakeActivity.id);
      expect(activity.name).toEqual(fakeActivity.name);
      expect(activity.description).toEqual(fakeActivity.description);
    });
  });

  describe("getActivityByName", () => {
<<<<<<< HEAD
    it("Gets an activity by it's name", async () => {
=======
    xit("Gets an activity by it's name", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeActivity = await createFakeActivity(
        "Power Walking",
        "At the mall"
      );
      const activity = await getActivityByName(fakeActivity.name);
      expect(activity.id).toEqual(fakeActivity.id);
    });
  });

  describe("updateActivity", () => {
<<<<<<< HEAD
    it("Updates name without affecting the ID. Returns the updated Activity.", async () => {
=======
    xit("Updates name without affecting the ID. Returns the updated Activity.", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeActivity = await createFakeActivity(
        "Baseball",
        "Run the bases"
      );
      const name = "Softball";
      const updatedActivity = await updateActivity({
        id: fakeActivity.id,
        name,
      });
      expect(updatedActivity.id).toEqual(fakeActivity.id);
      expect(updatedActivity.name).toEqual(name);
      expect(updatedActivity.description).toEqual(fakeActivity.description);
    });

<<<<<<< HEAD
    it("Updates description without affecting the ID. Returns the updated Activity.", async () => {
=======
    xit("Updates description without affecting the ID. Returns the updated Activity.", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeActivity = await createFakeActivity("Soccer", "After school");
      const description = "Football is life!";
      const updatedActivity = await updateActivity({
        id: fakeActivity.id,
        description,
      });
      expect(updatedActivity.id).toEqual(fakeActivity.id);
      expect(updatedActivity.name).toEqual(fakeActivity.name);
      expect(updatedActivity.description).toEqual(description);
    });
  });
});

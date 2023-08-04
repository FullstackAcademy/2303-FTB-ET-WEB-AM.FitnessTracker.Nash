/*

DO NOT CHANGE THIS FILE

*/
require("dotenv").config();
const client = require("../../db/client");
const faker = require("faker");

const {
  addActivityToRoutine,
  updateRoutineActivity,
  destroyRoutineActivity,
  getRoutineActivityById,
  getRoutineActivitiesByRoutine,
  canEditRoutineActivity,
} = require("../../db");
const {
  createFakeActivity,
  createFakePublicRoutine,
  createFakeRoutineActivity,
  createFakeUser,
} = require("../helpers");

describe("DB Routine Activities", () => {
  let fakeActivity;
  let fakeRoutine;
  let routineActivityData;

  beforeAll(async () => {
    const fakeUser = await createFakeUser("Tom");
    fakeActivity = await createFakeActivity("Hockey", "On the ice");
    fakeRoutine = await createFakePublicRoutine(
      fakeUser.id,
      "Every night",
      "Until I make the team"
    );

    routineActivityData = {
      routineId: fakeRoutine.id,
      activityId: fakeActivity.id,
      count: faker.random.number(),
      duration: faker.random.number(),
    };
  });

  describe("addActivityToRoutine({ routineId, activityId, count, duration })", () => {
<<<<<<< HEAD
    it("creates a new routine_activity, and return it", async () => {
=======
    xit("creates a new routine_activity, and return it", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const routineActivity = await addActivityToRoutine(routineActivityData);

      expect(routineActivity.routineId).toBe(routineActivityData.routineId);
      expect(routineActivity.activityId).toBe(routineActivityData.activityId);
      expect(routineActivity.count).toBe(routineActivityData.count);
      expect(routineActivity.duration).toBe(routineActivityData.duration);
    });
  });

  describe("getRoutineActivityById", () => {
<<<<<<< HEAD
    it("should return the routine activity by id", async () => {
=======
    xit("should return the routine activity by id", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeRoutineActivity = await createFakeRoutineActivity();
      const routineActivity = await getRoutineActivityById(
        fakeRoutineActivity.id
      );
      expect(routineActivity.id).toBe(fakeRoutineActivity.id);
    });
  });

  describe("getRoutineActivitiesByRoutine", () => {
<<<<<<< HEAD
    it("should return the routine activities for a routine", async () => {
=======
    xit("should return the routine activities for a routine", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUser = await createFakeUser("Timmy");
      const fakeActivity = await createFakeActivity(
        "Fortnite",
        "I know it's not exercise"
      );
      const fakeRoutine = await createFakePublicRoutine(
        fakeUser.id,
        "Every waking hour",
        "Until my mom yells at me"
      );
      const fakeRoutineActivity = await createFakeRoutineActivity(
        fakeRoutine.id,
        fakeActivity.id
      );
      const [routineActivity] = await getRoutineActivitiesByRoutine(
        fakeRoutine
      );
      expect(routineActivity.id).toEqual(fakeRoutineActivity.id);
    });
  });

  describe("updateRoutineActivity({ id, count, duration })", () => {
<<<<<<< HEAD
    it("Finds the routine with id equal to the passed in id. Updates the count or duration as necessary.", async () => {
=======
    xit("Finds the routine with id equal to the passed in id. Updates the count or duration as necessary.", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeRoutineActivity = await createFakeRoutineActivity();

      const newRoutineActivityData = {
        id: fakeRoutineActivity.id,
        count: faker.random.number(),
        duration: faker.random.number(),
      };
      const updatedRoutineActivity = await updateRoutineActivity(
        newRoutineActivityData
      );

      expect(updatedRoutineActivity.id).toBe(fakeRoutineActivity.id);
      expect(updatedRoutineActivity.count).toBe(newRoutineActivityData.count);
      expect(updatedRoutineActivity.duration).toBe(
        newRoutineActivityData.duration
      );
    });
  });

  describe("destroyRoutineActivity(id)", () => {
<<<<<<< HEAD
    it("removes routine_activity from database, and returns it", async () => {
=======
    xit("removes routine_activity from database, and returns it", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeRoutineActivity = await createFakeRoutineActivity();

      const deletedRoutine = await destroyRoutineActivity(
        fakeRoutineActivity.id
      );
      expect(deletedRoutine.id).toBe(fakeRoutineActivity.id);
      const { rows } = await client.query(`
          SELECT * FROM routine_activities
          WHERE id = ${deletedRoutine.id}
        `);
      expect(rows.length).toBe(0);
    });
  });

  describe("canEditRoutineActivity", () => {
<<<<<<< HEAD
    it("should return true if routine activity can be edited by user", async () => {
=======
    xit("should return true if routine activity can be edited by user", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUser = await createFakeUser("Jay");
      const fakeRoutine = await createFakePublicRoutine(
        fakeUser.id,
        "At 3pm",
        "Forever"
      );
      const fakeRoutineActivity = await createFakeRoutineActivity(
        fakeRoutine.id
      );
      const canEdit = await canEditRoutineActivity(
        fakeRoutineActivity.id,
        fakeUser.id
      );
      expect(canEdit).toBeTruthy();
    });

<<<<<<< HEAD
    it("should return false if routine activity can not be edited by user", async () => {
=======
    xit("should return false if routine activity can not be edited by user", async () => {
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
      const fakeUser = await createFakeUser("Kevin");
      const anotherUser = await createFakeUser("Kyle");
      const fakeRoutine = await createFakePublicRoutine(
        fakeUser.id,
        "At 6pm",
        "Forever"
      );
      const fakeRoutineActivity = await createFakeRoutineActivity(
        fakeRoutine.id
      );
      const canEdit = await canEditRoutineActivity(
        fakeRoutineActivity.id,
        anotherUser.id
      );
      expect(canEdit).toBeFalsy();
    });
  });
});

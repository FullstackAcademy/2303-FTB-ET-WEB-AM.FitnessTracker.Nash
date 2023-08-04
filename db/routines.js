const client = require("./client");

<<<<<<< HEAD
async function createRoutine({ creatorId, isPublic, name, goal }) {
  // console.log('called createRoutine')
  try {
    const {rows: [routine]} = await client.query(`
        INSERT INTO routines ("creatorId", "isPublic", "name", "goal")
        VALUES($1, $2, $3, $4)
        RETURNING *;`, [creatorId, isPublic, name, goal]);
        // console.log('Finished createRoutine()')
    return routine;
  } catch (error) {
    // console.log('Error createRoutine()')
    throw error;
  }

}

async function getRoutineById(id) {}

async function getRoutinesWithoutActivities() {
  // console.log('Called getRoutineWithoutActivites()')
  try {
    const {rows} = await client.query(`
    SELECT * FROM routines;
    `);
    // console.log('Finished getRoutinesWithoutActivites()')
    return rows;
  } catch (error) {
    // console.log('Error getRoutineWithoutActivites()')
    throw error
  }
}
=======
async function createRoutine({ creatorId, isPublic, name, goal }) {}

async function getRoutineById(id) {}

async function getRoutinesWithoutActivities() {}
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7

async function getAllRoutines() {}

async function getAllPublicRoutines() {}

async function getAllRoutinesByUser({ username }) {}

async function getPublicRoutinesByUser({ username }) {}

async function getPublicRoutinesByActivity({ id }) {}

async function updateRoutine({ id, ...fields }) {}

async function destroyRoutine(id) {}

module.exports = {
  getRoutineById,
  getRoutinesWithoutActivities,
  getAllRoutines,
  getAllPublicRoutines,
  getAllRoutinesByUser,
  getPublicRoutinesByUser,
  getPublicRoutinesByActivity,
  createRoutine,
  updateRoutine,
  destroyRoutine,
};

const client = require("./client");

async function addActivityToRoutine({
  routineId,
  activityId,
  count,
  duration,
}) {
  // console.log('Called addActivityToRoutine()')
  try {
    const { rows: [routineActivity] } = await client.query(`
    INSERT INTO routine_activities ( "routineId", "activityId", count , duration)
    VALUES($1, $2, $3, $4)
    ON CONFLICT ("routineId", "activityId") DO NOTHING
    RETURNING *;
    `, [ routineId, activityId, count, duration]);
    // console.log('Finished addActivityToRoutine()')
    return routineActivity;
  } catch (error) {
    //console.log('Error addActivityToRoutine()')
    throw error;
  }
}

async function getRoutineActivityById(id) {}

async function getRoutineActivitiesByRoutine({ id }) {}

async function updateRoutineActivity({ id, ...fields }) {}

async function destroyRoutineActivity(id) {}

async function canEditRoutineActivity(routineActivityId, userId) {}

module.exports = {
  getRoutineActivityById,
  addActivityToRoutine,
  getRoutineActivitiesByRoutine,
  updateRoutineActivity,
  destroyRoutineActivity,
  canEditRoutineActivity,
};

<<<<<<< HEAD
const { tr } = require('faker/lib/locales');
const client = require('./client');
const { getUserById } = require('./users');

// database functions

async function createActivity({ name, description }) { //Loops through the activities array, and returns multiple new activities.
  // return the new activity
  // console.log('Called createActivity()')
  try {
    const {rows: [activity]} = await client.query(`
      INSERT INTO activities(name, description) 
      VALUES ($1, $2)
      ON CONFLICT (name) DO NOTHING 
      RETURNING * `, [name, description]);


    // console.log('Activity Created')
    return activity;
  } catch (error) {
    // console.log('Error Creating Activity')
    throw error;
  }
=======
const client = require('./client');

// database functions
async function createActivity({ name, description }) {
  // return the new activity
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
}

async function getAllActivities() {
  // select and return an array of all activities
<<<<<<< HEAD
  // console.log('Called getAllActivites')
  try {
    const {rows} = await client.query(`
      SELECT * FROM activities;
    `);
    //console.log('Finished getAllActivites')
    return rows;
  } catch (error) {
    // console.log('Error getAllActivites')
    throw error;
  }

}

async function getActivityById(id) {
  try {
    const {rows: [activity]} = await client.query(`
      SELECT * FROM activities
      WHERE id = $1
    `, [id]);
    return activity;
  } catch (error) {
    throw error;
  }
}

async function getActivityByName(name) {
  try {
    const {rows: [activity]} = await client.query(`
      SELECT * FROM activities
      WHERE name = $1
    `, [name]);
    return activity;
  } catch (error) {
    throw error;
  }
}

// used as a helper inside db/routines.js
async function attachActivitiesToRoutines(routines) {

}
=======
}

async function getActivityById(id) {}

async function getActivityByName(name) {}

// used as a helper inside db/routines.js
async function attachActivitiesToRoutines(routines) {}
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7

async function updateActivity({ id, ...fields }) {
  // don't try to update the id
  // do update the name and description
  // return the updated activity
}

module.exports = {
  getAllActivities,
  getActivityById,
  getActivityByName,
  attachActivitiesToRoutines,
  createActivity,
  updateActivity,
};

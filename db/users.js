const client = require("./client");

// database functions
<<<<<<< HEAD
const bcrypt = require('bcrypt')
SALT_COUNT = 10
// user functions
async function createUser({ username, password }) { //Called 3 times, after mapping through all the users.
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT); 
  try{
    const {rows: [user] } = await client.query(`
    INSERT INTO users(username, password)
    VALUES($1, $2)
    ON CONFLICT (username) DO NOTHING
    RETURNING Id, username;`, [username, hashedPassword])
    return user //Returns the user to be stored in a table.
  }catch(error){
    console.log('Error in createUser()')
  }
=======

// user functions
async function createUser({ username, password }) {
  
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7
}

async function getUser({ username, password }) {

}

async function getUserById(userId) {
<<<<<<< HEAD
  try {
    const {rows: [user]} = await client.query(`
      SELECT *
      FROM users
      WHERE id = $1;
    `, [userId]);
    
    if (!user) return null;
    delete user.password; 
    return user;  
  } catch (error) {
    throw error;
  }
=======
>>>>>>> 35259c8a1f355576745986fa934d63c4012b5ef7

}

async function getUserByUsername(userName) {

}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}

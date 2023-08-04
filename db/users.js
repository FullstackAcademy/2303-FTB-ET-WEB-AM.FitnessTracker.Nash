const client = require("./client");

// database functions
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
}

async function getUser({ username, password }) {

}

async function getUserById(userId) {
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

}

async function getUserByUsername(userName) {

}

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByUsername,
}

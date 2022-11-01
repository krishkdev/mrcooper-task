const knex = require("./knex");

const insertUser = (user) => {
  return knex("users").insert(user);
};

const showUsers = () => {
  return knex("users").select("*");
};

const showUserById = (id) => {
  return knex("users")
    .select("*")
    .where("id", id)
    .then((res) => {
      console.log("users.js:" + res);
      return res;
    })
    .catch((err) => console.log(err));
};

const showUserByEmail = (email) => {
  return knex("users")
    .select("*")
    .where("email", email)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const updateUser = (id, user) => {
  return knex("users").where("id", id).update(user);
};

const updatePassword = async (id, password) => {
  console.log(id, password);
  console.log("THISINAOABFAOBO AIOFOIHEIA");
  return await knex("users")
    .where({ id })
    .update({ password })
    .then((rows) => {
      //   if (!rows) {
      //     return { success: false };
      //   }
      //   return { success: true };
      console.log(rows);
      return rows;
    })
    .catch((e) => console.log(e));
};

const deleteUser = (id) => {
  return knex("users").where("id", id).del();
};

module.exports = {
  insertUser,
  showUsers,
  showUserById,
  showUserByEmail,
  updateUser,
  updatePassword,
  deleteUser,
};
const mysql = require('promise-mysql');

const getData = async (mode, params = {}) => {

  let connection;
  const config = {
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
  console.log(config);
  try {

    connection = await mysql.createConnection(config);
    console.log(connection);
    let result;

    if (mode == 'questions') result = await connection.query(`
      SELECT
        questions.question_id,
        questions.question_title,
        questions.question_body,
        questions.question_chapter,
        questions.question_group,
        questions.question_createdAt,
        groups.group_teacher,
        groups.group_id
      FROM questions
      INNER JOIN groups
        ON questions.question_group = groups.group_id
      ORDER BY question_chapter ASC
    `);
    else if (mode == 'statistics') result = await connection.query(`
      SELECT
        MAX(question_createdAt) AS latest_update,
        (SELECT COUNT(question_id) AS question_count) AS question_count,
        (SELECT COUNT(question_id) FROM questions WHERE DATE(question_createdAt) = CURRENT_DATE()) AS added_today
      FROM questions
      ORDER BY question_createdAt DESC LIMIT 1
    `);
    else if (mode == 'groups') result = await connection.query(`
      SELECT
        group_id,
        group_teacher
      FROM groups
    `);
    console.log(result);
    return result;

  }
  catch (error) {
    return error;
  }
  finally {
    if (connection && connection.end) connection.end();
  }

};

module.exports = getData;
const mysql = require('promise-mysql');

const addData = async (mode, { titleIn, bodyIn, chapterIn, groupIn }) => {

  let connection;
  const config = {
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };

  try {

    connection = await mysql.createConnection(config);
    let result;

    if (mode == 'question') {

      bodyIn = JSON.stringify(bodyIn);

      result = await connection.query(`
        INSERT INTO questions
          (
            question_title,
            question_body,
            question_chapter,
            question_group
          )
        VALUES
          (
            '${titleIn}',
             ${bodyIn},
             ${chapterIn},
             ${groupIn}
          )
      `);
    }

    return { code: 0 };

  }
  catch (error) {
    return error;
  }
  finally {
    if (connection && connection.end) connection.end();
  }

};

module.exports = addData;
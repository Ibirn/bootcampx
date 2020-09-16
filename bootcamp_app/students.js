const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2)

pool.query(`
SELECT students.id, students.name AS stud_name, cohorts.name
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${args[0]}%'
LIMIT ${args[1]};
`)
.then(res => {
  for (const elem in res.rows) {
    console.log(`${res.rows[elem]["stud_name"]} has an ID of ${res.rows[elem]["id"]} and was in the ${res.rows[elem]["name"]} cohort.` )
  }
})
.catch(err => console.error('query error', err.stack));
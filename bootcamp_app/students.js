const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const values = [`%${cohortName}%`, limit];


const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;
  
pool.query(queryString, values)
.then(res => {
  for (const elem in res.rows) {
    console.log(`${res.rows[elem]["name"]} has an ID of ${res.rows[elem]["student_id"]} and was in the ${res.rows[elem]["cohort"]} cohort.` )
  }
})
.catch(err => console.error('query error', err.stack));
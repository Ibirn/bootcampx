SELECT SUM(duration) AS cohort_total_duration
FROM students
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name ='FEB12';
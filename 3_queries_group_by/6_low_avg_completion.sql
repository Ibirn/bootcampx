SELECT students.name AS student, AVG(assignment_submissions.duration) AS avg_assignment_duration, AVG(assignments.duration) AS avg_recommended_duration
FROM students
JOIN assignment_submissions ON student_id = students.id
JOIN assignments ON assignment_id = assignments.id
WHERE students.end_date IS NULL
GROUP BY student
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration)
ORDER BY AVG(assignment_submissions.duration);
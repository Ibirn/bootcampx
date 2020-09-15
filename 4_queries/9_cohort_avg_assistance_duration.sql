SELECT AVG(durations) AS avg_duration
FROM (
  SELECT SUM(completed_at - started_at) AS durations
  FROM assistance_requests
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  GROUP BY cohorts.name
) AS totals;

--GROUP BY cohorts.name
--ORDER BY total_duration;
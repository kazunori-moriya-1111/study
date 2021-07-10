SELECT address , COUNT(*)
FROM address
GROUP BY address
HAVING COUNT(*) = 1
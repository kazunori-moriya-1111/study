SELECT
	emp_name,
	MAX(team) as team
from
	Employees
group by
	emp_name
HAVING
	COUNT(*) = 1
UNION 
SELECT
	emp_name ,
	'2つを兼務' as team
from
	Employees
group by
	emp_name
HAVING
	COUNT(*) = 2
UNION 
SELECT
	emp_name ,
	'3つ以上を兼務' as team
from
	Employees
group by
	emp_name
HAVING
	COUNT(*) >= 3
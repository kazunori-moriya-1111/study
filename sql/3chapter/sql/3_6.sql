SELECT
	emp_name,
	case
		when count(*) = 1 then max(team)
		when count(*) = 2 then '2つを兼務'
		when count(*) >= 3 then '3つを以上を兼務'
	end as team
from
	Employees
group by
	emp_name

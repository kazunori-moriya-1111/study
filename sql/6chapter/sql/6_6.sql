SELECT
	E.emp_id ,
	E.emp_name ,
	E.dept_id ,
	D.dept_name
from
	Departments D
left outer join Employees E
	on
	D.dept_id = E.dept_id
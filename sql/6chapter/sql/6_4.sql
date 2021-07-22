SELECT
	E.emp_id ,
	E.emp_name ,
	E.dept_id ,
	D.dept_name
from
	Employees E
inner join Departments D 
	ON
	E.dept_id = D.dept_id

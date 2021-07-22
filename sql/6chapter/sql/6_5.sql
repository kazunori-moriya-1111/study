SELECT
	E.emp_id ,
	E.emp_name ,
	E.dept_id ,
	(
	select
		D.dept_name
	from
		Departments D
	where
		E.dept_id = D.dept_id ) as dept_name
from
	Employees E

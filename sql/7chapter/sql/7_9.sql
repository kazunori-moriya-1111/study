SELECT
	C.co_cd ,
	MAX(C.district),
	sum(emp_nbr) AS sum_emp
from
	Companies C
inner join Shops S on
	C.co_cd = S.co_cd
where
	main_flag = 'Y'
group by
	C.co_cd
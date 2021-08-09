SELECT
	C.co_cd ,
	C.district,
	sum_emp
from
	Companies C
inner join(
	select
		co_cd,
		sum(emp_nbr) as sum_emp
	from
		Shops
	where
		main_flag = 'Y'
	group by
		co_cd 
	) CSUM
	on
	C.co_cd = CSUM.co_cd
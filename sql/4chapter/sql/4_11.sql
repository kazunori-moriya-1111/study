select
	name,
	age,
	case
		when age < 20 then '子供'
		when age between 20 and 69 then '成人'
		when age >= 70 then '老人'
		else null
	end as age_class,
	rank() over(PARTITION by
	case
		when age < 20 then '子供'
		when age between 20 and 69 then '成人'
		when age >= 70 then '老人'
		else null
	end
order by
	age) as age_rank_in_class
from
	Persons
order by
	age_class,
	age_rank_in_class
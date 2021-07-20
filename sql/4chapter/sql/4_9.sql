select
	case
		when age < 20 then '子供'
		when age between 20 and 69 then '成人'
		when age >= 70 then '老人'
		else null
	end as age_class,
	count(*)
from
	Persons
group by
	age_class
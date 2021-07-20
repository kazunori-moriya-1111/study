select
	case
		when weight / POWER(height / 100, 2) < 18.5 then 'やせ'
		when 18.5 <= weight / POWER(height / 100, 2)
		and weight / POWER(height / 100, 2) < 25 then '標準'
		when 25 <= weight / POWER(height / 100, 2) then '肥満'
		else null
	end as bmi,
	count(*)
from
	Persons
group by
	bmi
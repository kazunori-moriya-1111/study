SELECT
	SUBSTRING(name, 1, 1) as lebel,
	count(*)
from
	Persons
group by
	SUBSTRING(name, 1, 1)

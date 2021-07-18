SELECT
	prefecture,
	sum(pop_men) as pop_men,
	sum(pop_wom) as pop_wom
from
	(
	select
		prefecture,
		pop as pop_men,
		null as pop_wom
	from
		Population
	where
		gender = 1
union
	SELECT
		prefecture,
		null as pop_men,
		pop as pop_wom
	from
		Population
	WHERE
		gender = 2) tmp
GROUP BY
	prefecture
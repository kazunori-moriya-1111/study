SELECT
	prefecture,
	SUM(CASE when gender = 1 then pop else 0 end) as pop_men,
	SUM(CASE when gender = 2 then pop else 0 end) as pop_wom
from
	Population
group by
	prefecture
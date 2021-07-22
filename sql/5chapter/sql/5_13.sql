select
	name,
	pcode
from
	PostalHistory2 ph1
where
	name = 'A'
	and not EXISTS (
	SELECT
		*
	from
		PostalHistory2 ph2
	where
		ph2.name = 'A'
		and ph1.lft > ph2.lft 
)
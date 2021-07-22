SELECT
	pcode,
	district
from
	PotalCode
where 
	CASE
		when pcode = '4130033' then 0
		when pcode like '413003%' THEN 1
		when pcode like '41300%' THEN 2
		when pcode like '4130%' THEN 3
		when pcode like '413%' THEN 4
		when pcode like '41%' THEN 5
		when pcode like '4%' THEN 6
		else null
	end = (
	SELECT
		min(
	CASE
		when pcode = '4130033' then 0
		when pcode like '413003%' THEN 1
		when pcode like '41300%' THEN 2
		when pcode like '4130%' THEN 3
		when pcode like '413%' THEN 4
		when pcode like '41%' THEN 5
		when pcode like '4%' THEN 6
		else null end)
	from
		PotalCode)

SELECT
	pcode,
	district
from
	(
	select
		pcode,
		district,
		CASE
			when pcode = '4130033' then 0
			when pcode like '413003%' THEN 1
			when pcode like '41300%' THEN 2
			when pcode like '4130%' THEN 3
			when pcode like '413%' THEN 4
			when pcode like '41%' THEN 5
			when pcode like '4%' THEN 6
			else null
		end as hit_code,
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
		over (
		order by
		CASE
			when pcode = '4130033' then 0
			when pcode like '413003%' THEN 1
			when pcode like '41300%' THEN 2
			when pcode like '4130%' THEN 3
			when pcode like '413%' THEN 4
			when pcode like '41%' THEN 5
			when pcode like '4%' THEN 6
			else null
		end)
		as min_code
	from
		PotalCode) pc 
where hit_code = min_code
	 
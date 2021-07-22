with recursive Explosion (name,
pcode,
new_pcode,
depth)
as 
(
SELECT
	name,
	pcode,
	new_pcode,
	1
from
	PostalHistory
where
	name = 'A'
-- 	現住所はnew_pcodeがnull
	and new_pcode is NULL
union ALL
SELECT
	Child.name,
	Child.pcode ,
	Child.new_pcode ,
	depth + 1
from
	Explosion as Parent,
	PostalHistory as Child
where
	Parent.pcode = Child.new_pcode
	and Parent.name = Child.name) 
select
	name,
	pcode,
	new_pcode
from
	Explosion
where
	depth = (
	SELECT
		MAX(depth)
	from
		Explosion)
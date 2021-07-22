INSERT
	into
	Sales2 
select
	company ,
	year,
	sales ,
	CASE sign(sales - MAX(sales)
	over (PARTITION by company
order by
	year ROWS BETWEEN 1 PRECEDING and 1 PRECEDING))
	WHEN 0 then '='
	WHEN 1 then '+'
	WHEN -1 THEN '-'
	else null
end as var
from
Sales
select
	company ,
	year,
	sales ,
	MAX(company)
	over (PARTITION by company
order by
	year ROWS BETWEEN 1 PRECEDING and 1 PRECEDING) as pre_company,
	MAX(sales)
	over (PARTITION by company
order by
	year ROWS BETWEEN 1 PRECEDING and 1 PRECEDING ) as pre_sales
from
	Sales
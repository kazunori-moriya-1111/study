INSERT
	into
	Stocks2 
select
	brand ,
	sale_date ,
	price,
	case sign(
	price - (
	SELECT
		price
	from
		Stocks S1
	where
		brand = Stocks.brand
		and sale_date = (
		select
			MAX(sale_date)
		from
			Stocks S2
		where
			brand = Stocks.brand
			and sale_date < Stocks.sale_date)))
	when -1 then '↓'
	when 0 then '→'
	when 1 then '↑'
	else NULL
end
from
Stocks
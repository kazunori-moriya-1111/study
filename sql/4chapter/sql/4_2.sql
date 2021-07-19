SELECT
	product_id
from
	PriceByAge
group by
	product_id
HAVING
	SUM(high_age - low_age + 1) = 101
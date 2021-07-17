SELECT item_name, YEAR , price_tax_ex as price 
from Items
where year <= 2001
union ALL 
SELECT item_name, YEAR , price_tax_in as price 
from Items
where year >= 2002

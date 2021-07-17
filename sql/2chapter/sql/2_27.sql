SELECT address,
count(*) over(PARTITION by address)
from address
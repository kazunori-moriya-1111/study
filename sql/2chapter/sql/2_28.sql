SELECT name,
age,
rank() over(order by age desc) as rnk
from address
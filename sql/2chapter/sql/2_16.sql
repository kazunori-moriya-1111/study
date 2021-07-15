CREATE VIEW CountAddress (v_address, cnt)
AS
select address, count(*)
from address
group by address 
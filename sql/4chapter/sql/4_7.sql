SELECT
	room_nbr,
	SUM(end_date - start_date) as working_days
from
	HotelRooms
group by
	room_nbr
HAVING
	SUM(end_date - start_date) >= 10

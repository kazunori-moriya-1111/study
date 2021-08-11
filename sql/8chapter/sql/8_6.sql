SELECT
	class ,
	student_id ,
	ROW_NUMBER () OVER (
	PARTITION BY class order by student_id) as seq
from
	Weights2
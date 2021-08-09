SELECT
	student_id ,
	ROW_NUMBER () OVER (
	order by student_id) as seq
from
	Weights
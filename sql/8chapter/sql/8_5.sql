SELECT
	student_id ,
	ROW_NUMBER () OVER (
	order by class,student_id) as seq
from
	Weights2
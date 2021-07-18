SELECT
	id ,
	MAX( CASE when data_type = 'A' THEN data_1 else null end) as data_1,
	MAX( CASE when data_type = 'A' THEN data_2 else null end) as data_2,
	MAX( CASE when data_type = 'B' THEN data_3 else null end) as data_3,
	MAX( CASE when data_type = 'B' THEN data_4 else null end) as data_4,
	MAX( CASE when data_type = 'B' THEN data_5 else null end) as data_5,
	MAX( CASE when data_type = 'C' THEN data_6 else null end) as data_6
from
	NonAggTbl
group by
	id
UPDATE
	ScoreRows
set
	score = (
	SELECT
		case
			ScoreRows.subject
				when '英語' then score_en
			when '国語' then score_nl
			when '数学' then score_mt
			else null
		end
	from
		ScoreCols
	where
		student_id = ScoreRows.student_id)
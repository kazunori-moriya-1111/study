--mysqlではエラー
UPDATE
	OmitTbl
set
	val = (
	SELECT
		val
	from
		OmitTbl OT1
	WHERE
		OT1.keycol = OmitTbl.keycol
		AND OT1.seq = (
		SELECT
			MAX(seq)
		from
			OmitTbl OT2
		WHERE
			OT2.keycol = OmitTbl.keycol
			AND OT2.seq < OmitTbl.seq
			AND OT2.val IS NOT NULL))
WHERE
	val IS NULL
SELECT
	cust_id ,
	seq ,
	price
FROM
	(
	select
		cust_id,
		seq,
		price,
		ROW_NUMBER ()
	over (PARTITION by cust_id
	order by
		seq) as row_seq
	from
		Receipts ) work
where
	work.row_seq = 1
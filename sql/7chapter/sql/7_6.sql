SELECT
	cust_id ,
	sum(case when min_seq = 1 then price else 0 end) -
	sum(case when max_seq = 1 then price else 0 end) as diff
FROM
	(
	select
		cust_id,
		price,
		ROW_NUMBER ()
	over (PARTITION by cust_id
	order by
		seq) as min_seq,
		ROW_NUMBER ()
	over (PARTITION by cust_id
	order by
		seq desc) as max_seq
	from
		Receipts ) work
where
	work.min_seq = 1
	or work.max_seq = 1
group by
	cust_id
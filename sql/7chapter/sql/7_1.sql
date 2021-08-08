SELECT
	R1.cust_id ,
	R1.seq ,
	R1.price
FROM
	Receipts R1
inner join (
	select
		cust_id,
		MIN(seq) as min_seq
	from
		Receipts
	group by
		cust_id) as R2
on
	R1.cust_id = R2.cust_id
	and R1.seq = R2.min_seq
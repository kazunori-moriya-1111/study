SELECT
	O.order_id ,
	MAX(O.order_name) ,
	MAX(ORC.delivery_date - O.order_date) as max_diff_days
FROM
	Orders O
inner join OrdersReceipts ORC 
on
	O.order_id = ORC.order_id
where
	ORC.delivery_date - O.order_date >= 3
group by
	O.order_id
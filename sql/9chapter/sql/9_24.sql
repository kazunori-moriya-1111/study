SELECT
	O.order_id ,
	order_name ,
	order_date ,
	COUNT(*) over (PARTITION by O.order_id) AS item_count 
FROM
	Orders O
inner join OrdersReceipts ORC 
on
	O.order_id = ORC.order_id
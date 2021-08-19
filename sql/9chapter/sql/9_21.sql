SELECT
	O.order_id ,
	O.order_name ,
	ORC.delivery_date - O.order_date
FROM
	Orders O
inner join OrdersReceipts ORC 
on
	O.order_id = ORC.order_id
where
	ORC.delivery_date - O.order_date >= 3
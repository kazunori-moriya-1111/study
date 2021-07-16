SELECT * from address
where name not in (select name FROM address2)
SELECT * from address
where name in (select name FROM address2)
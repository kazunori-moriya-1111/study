SELECT name from address
where name in (SELECT name from address2)
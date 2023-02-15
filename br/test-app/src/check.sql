with race_count as (
	select count(*) as rc from result
	where popular != 0 
	and boatrace_filed = '戸田'
	and ((yyyymmdd between '20210101' and '20210331') or (yyyymmdd between '20220101' and '20220331'))
),
base as(
select "first" , "second" , third , count(*) as count, round(avg(price)) as price, (select * from race_count) as rc from result
where popular != 0  
and boatrace_filed = '戸田'
and ((yyyymmdd between '20210101' and '20210331') or (yyyymmdd between '20220101' and '20220331'))
group by first, second, third 
order by price
)
select *, round((count * price) /rc) as kitaichi from base
where round((count * price) /rc) > 100
order by kitaichi
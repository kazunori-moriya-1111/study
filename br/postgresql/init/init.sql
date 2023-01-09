-- テーブル作成
create table result
(
    yyyymmdd DATE not null,
    boatrace_filed varchar(4) not null,
    race_number smallint not null,
    race_grade varchar(4) not null,
    race_time_zone varchar(15),
    race_date varchar(4) not null,
    race_series varchar(15),
    first smallint,
    second smallint,
    third smallint,
    price	integer,
    popular	smallint,
    url	text not null
);

-- 複合キー設定
ALTER TABLE result
ADD PRIMARY KEY(yyyymmdd, boatrace_filed, race_number);
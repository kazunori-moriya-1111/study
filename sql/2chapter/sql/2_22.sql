SELECT name, address,
CASE when address = '東京都' THEN '関東'
	 when address = '千葉県' THEN '関東'
	 when address = '福島県' THEN '東北'
	 when address = '三重県' THEN '中国'
	 when address = '和歌山県' THEN '関西'
	 ELSE null end as district
from address
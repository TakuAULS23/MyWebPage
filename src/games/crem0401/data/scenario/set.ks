;初期設定
;(first.ks で読み込み)

;立ち絵設定
[chara_config pos_mode="false"]

;立ち絵設定
[chara_new  name="crem" storage="def.png"]

;ポーズ登録
[chara_layer name="crem" part="body" id="1" storage="pose01.png" zindex=10]
[chara_layer name="crem" part="body" id="2" storage="pose02.png" zindex=10]
[chara_layer name="crem" part="eyebrows" id="1" storage="eyebrows01.png" zindex=20]
[chara_layer name="crem" part="eyebrows" id="2" storage="eyebrows02.png" zindex=20]
[chara_layer name="crem" part="eye" id="1" storage="eye01.png" zindex=30]
[chara_layer name="crem" part="eye" id="2" storage="eye02.png" zindex=30]
[chara_layer name="crem" part="eye" id="3" storage="eye03.png" zindex=30]
[chara_layer name="crem" part="eye" id="4" storage="eye04.png" zindex=30]
[chara_layer name="crem" part="eye" id="5" storage="eye05.png" zindex=30]
[chara_layer name="crem" part="mouth" id="1" storage="mouth01.png" zindex=40]
[chara_layer name="crem" part="mouth" id="2" storage="mouth02.png" zindex=40]
[chara_layer name="crem" part="mouth" id="3" storage="mouth03.png" zindex=40]
[chara_layer name="crem" part="mouth" id="4" storage="mouth04.png" zindex=40]

;キャラ移動
[macro name="左移動"]
[anim name=%name opacity="0" time="0"]
[anim name=%name opacity="255" left="-=250" time=%time|1000 wait=%wait|true]
[endmacro]
[macro name="右移動"]
[anim name=%name opacity="0" time="0"]
[anim name=%name opacity="255" left="+=250" time=%time|1000 wait=%wait|true]
[endmacro]
[macro name="上移動"]
[anim name=%name opacity="0" time="0"]
[anim name=%name opacity="255" top=%top|-100 time=%time|1000 wait=%wait|true]
[endmacro]
[macro name="指定移動"]
[anim name=%name left=%left top=%top time=%time|500 wait=%wait|true]
[endmacro]

;キャラ退場
[macro name="退場"]
[anim name=%name opacity="255" time="0"]
[anim name=%name opacity="0" time="%time|1000" wait=%wait|true]
[chara_hide name=%name time=10]
[endmacro]

[macro name="くりむ退場"]
[退場 name="crem" time="500"]
[endmacro]

;アクション
;ぴょん
[macro name="ぴょん"]
[anim name=%name top="+=0" time=100]
[anim name=%name top="-=50" time=200]
[anim name=%name top="+=50" time=100]
[endmacro]

;ぴょんぴょん
[macro name="ぴょんぴょん"]
[ぴょん name=%name]
[ぴょん name=%name]
[endmacro]

;おじぎ
[macro name="おじぎ"]
[anim name=%name top="+=50" time=700]
[anim name=%name top="-=50" time=300]
[endmacro]

;いいえ
[macro name="いいえ"]
[anim name=%name left="-=50" time=100]
[anim name=%name left="+=100" time=200]
[anim name=%name left="-=100" time=200]
[anim name=%name left="+=100" time=200]
[anim name=%name left="-=50" time=100]
[endmacro]

;うん
[macro name="うん"]
[anim name=%name top="+=50" time=200]
[anim name=%name top="-=50" time=200]
[endmacro]


;キャラ表示マクロ
[macro name="くりむ"]

;キャラの大きさ
;立ち絵大 878 1000
[eval exp="tf.wid = 878"]
[eval exp="tf.hei = 1000"]
[eval exp="tf.top = 30"]
[eval exp="tf.left = 220"]

;立ち絵大 1054 1200
[if exp="mp.サイズ === '大'"]
[eval exp="tf.wid = 1054"]
[eval exp="tf.hei = 1200"]
[eval exp="tf.top = -20"]
[eval exp="tf.left = 163"]
[endif]

;通常
[eval exp="tf.pose = 1"]
[eval exp="tf.eyebrows = 1"]
[eval exp="tf.eye = 1"]
[eval exp="tf.mouth = 1"]

;ポーズ
[eval exp="tf.pose = 1"]
[if exp="mp.ポーズ === '2'"]
[eval exp="tf.pose = 2"]
[endif]

;眉
[eval exp="tf.eyebrows = 1"]
[if exp="mp.眉 === '2'"]
[eval exp="tf.eyebrows = 2"]
[endif]

;目
[eval exp="tf.eye = 1"]
[if exp="mp.目 === 'ジト目'"]
[eval exp="tf.eye = 2"]
[elsif exp="mp.目 === 'かざり目'"]
[eval exp="tf.eye = 3"]
[elsif exp="mp.目 === '笑い目'"]
[eval exp="tf.eye = 4"]
[elsif exp="mp.目 === '椎茸目'"]
[eval exp="tf.eye = 5"]
[endif]

;口
[eval exp="tf.mouth = 1"]
[if exp="mp.口 === '困り口'"]
[eval exp="tf.mouth = 2"]
[elsif exp="mp.口 === '犬口'"]
[eval exp="tf.mouth = 3"]
[elsif exp="mp.口 === 'への字口'"]
[eval exp="tf.mouth = 4"]
[endif]

;表情差分決定
[chara_part name="crem" body=&tf.pose eyebrows=&tf.eyebrows eye=&tf.eye mouth=&tf.mouth]

[if exp="mp.出 === '上'"]

[chara_show name="crem" width=&tf.wid height=&tf.hei top="800" left=&tf.left page=fore time="10"]
;[trans layer="0" time="1000"]
[上移動 name="crem" top="&tf.top" time="1000"]

[else]

[chara_show name="crem" width="&tf.wid" height=&tf.hei top=&tf.top left=&tf.left]

[endif]

[endmacro]

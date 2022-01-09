;マクロ

;ネームウィンドウ設定
[macro name="name_tag"]
;キャラクターの名前が表示される文字領域
[layopt layer=message1 visible=false]
[position layer="message1" left=0 top=400 width=220 height=80 page=fore visible=true opacity="200" color="0xffc0cb"]
[position layer="message1" margint="100" marginl="80" marginr="80" marginb="30"]
[ptext name="chara_name_area" layer="message1" color="0x555555" size=48 x=30 y=410]
;上記で定義した領域がキャラクターの名前表示であることを宣言（これがないと#の部分でエラーになります）
[chara_config ptext="chara_name_area"]
[endmacro]

;BGM調整
[macro name="BGMvoldn"]
[bgmopt volume=10]
[endmacro]
[macro name="BGMvolup"]
[bgmopt volume=50]
[endmacro]

;SE調整
[macro name="SEvoldn"]
[seopt volume=30]
[endmacro]

[macro name="name_hide"]
[layopt layer=message1 visible=false]
[BGMvolup]
[endmacro]

[macro name="name_show"]
[layopt layer=message1 visible=true]
[BGMvoldn]
[endmacro]

;BGM再生
[macro name="BGM"]
[playbgm storage=%storage volume=%volume|100]
[endmacro]

;BGMフェードストップ
[macro name="BGMfadestop"]
[fadeoutbgm time=%time|1000]
[endmacro]

;SE再生
[macro name="SE"]
[playse storage=%storage volume=%volume|100]
[endmacro]

;	演出関連

[macro name="レイヤ開放"]
[freeimage layer=0]
[wait time=1000]
[endmacro]

;カメラ操作
;カメラリセット
;カメラ操作後には必ず行うこと
[macro name="カメラリセット"]
[reset_camera time=%time|0]
[endmacro]

;カメラズーム
[macro name="カメラズーム"]
[camera zoom=1.3 y=50 time=%time|0]
[endmacro]
[macro name="カメラズーム左"]
[camera layer=0 zoom=%zoom|1.3 y=%y|50 x=-250 time=%time|0 wait=%wait|true]
[endmacro]
[macro name="カメラズーム右"]
[camera layer=0 zoom=%zoom|1.3 y=%y|50 x=250 time=%time|0 wait=%wait|true]
[endmacro]

;スクロール
;スクロール大
[macro name="スクロール大"]
[camera layer=base zoom=1.3 from_zoom=1.3 y=100 from_y=100 time=13000 x=-100 from_x=100 wait=false ease_type=linear]
[endmacro]

;場面転換
;(「場面転換閉」「場面転換開」で１セット)
[macro name="場面転換閉"]
;背景画像表示
[mask effect=%effect|fadeInLeftBig time=%time|500]
[bg storage=%haikei time="100"]
[endmacro]
[macro name="場面転換開"]
[mask_off effect=%effect|fadeOutRightBig time=%time|1000]
[endmacro]


;暗転
;(「暗転閉」「暗転開」で１セット)
[macro name="暗転閉"]
;背景画像表示
[mask graphic=%grp|black.png time=%time|2000]
;暗転時は全キャラを削除
[chara_hide_all time=0]
;[bg storage=%haikei time="100"]
[endmacro]
[macro name="暗転開"]
[mask_off time=%time|2000]
[endmacro]


;回想シーンマクロ
;(「回想」「回想閉」「回想開」で１セット)
;回想シーン開始
[macro name="回想"]
;背景レイヤをセピア調にする
[filter layer=base sepia=100]
[endmacro]
;回想シーン終了
[macro name="回想閉"]
[mask time=2000]
;暗転時は全キャラを削除
[chara_hide_all time=0]
;BGM ストップ
[stopbgm]
;背景レイヤのフィルター解除
[free_filter layer=base]
[bg storage=%haikei time="100"]
[endmacro]
[macro name="回想開"]
[mask_off time=2000]
[endmacro]

;日記画面の全レイヤ開放
[macro name="diary_free"]
[stop_keyconfig]
[mask effect="fadeIn" time=2000]
[bg storage="black.png" time=500]
[cm]
[clearfix]
[freeimage layer=0]
[mask_off]
[start_keyconfig]
[endmacro]

;	ゲームシステム関連

;シナリオ開始時初期化マクロ
[macro name="scenario_init"]
;初期化
[cm]
[clearfix]
[start_keyconfig]

;背景画像表示
[mask time=1000]
[bg storage=%haikei time="10"]

;メッセージウィンドウの設定
[position layer=message0 left=0 top=480 width=1280 height=200 page=fore visible=true opacity="200" color="0xffa500"]
[position layer=message0 margint="15" marginl="80" marginr="80" marginb="30"]
;[font size="40" color="0x222222"]
[deffont size="40" color="0x000000"]
[resetfont]
[layopt layer=message0 visible=true]

;キャラクターの名前が表示される文字領域
[name_tag]
#

[mask_off time=1000]
[endmacro]

;日記表示マクロ
[macro name="diary_show"]
[cm]
[freeimage layer=0]
[bg storage=%str time="300"]
[endmacro]

;ナゾ表示マクロ
[macro name="quiz_show"]
[cm]
[freeimage layer=0]
[bg storage=%str time="300"]
[endmacro]

;ムービー再生
[macro name="動画再生"]
[movie storage=%str skip=true volume=100]
[endmacro]

[return]
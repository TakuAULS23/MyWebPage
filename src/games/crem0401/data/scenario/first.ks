;一番最初に呼び出されるファイル

[title name="くりむ自己紹介"]

[stop_keyconfig]


;ティラノスクリプトが標準で用意している便利なライブラリ群
;コンフィグ、CG、回想モードを使う場合は必須
@call storage="tyrano.ks"

;初期設定読み込み
[call storage="set.ks"]

;マクロ読み込み
[call storage="macro.ks"]

;ゲームで必ず必要な初期化処理はこのファイルに記述するのがオススメ

;メッセージボックスは非表示
@layopt layer="message" visible=false

;最初は右下のメニューボタンを非表示にする
[hidemenubutton]

;画像のプリロード
[call storage="preload.ks"]

;タイトル画面へ移動
@jump storage="title.ks"

[s]



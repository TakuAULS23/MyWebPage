;画像のプリロード
;(first.ks で読み込み)

;ローディング画像の表示
;[bg storage ="loading.gif"]

[iscript]
f.preload_images = [

"data/fgimage/def.png",
"data/fgimage/eye01.png",
"data/fgimage/eye02.png",
"data/fgimage/eye03.png",
"data/fgimage/eye04.png",
"data/fgimage/eye05.png",
"data/fgimage/eyebrows01.png",
"data/fgimage/eyebrows02.png",
"data/fgimage/mouth01.png",
"data/fgimage/mouth02.png",
"data/fgimage/mouth03.png",
"data/fgimage/mouth04.png",
"data/fgimage/pose01.png",
"data/fgimage/pose02.png"

];
[endscript]

[preload storage="&f.preload_images" wait=true]

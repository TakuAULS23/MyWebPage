
[cm]

/*
@clearstack
@bg storage ="white.png" time=100
@wait time = 10
*/

*start 

;[button x=100 y=250 graphic="title/button_start.png" target="gamestart"]
;[button x=100 y=320 graphic="title/button_load.png"  role="load" ]
;[button x=100 y=390 graphic="title/button_cg.png" storage="cg.ks" ]
;[button x=100 y=460 graphic="title/button_replay.png" storage="replay.ks" ]
;[button x=100 y=530 graphic="title/button_config.png" role="sleepgame" storage="config.ks" ]

;[s]

スタート[p]

*gamestart
;一番最初のシナリオファイルへジャンプする
@jump storage="story.ks"




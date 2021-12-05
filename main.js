
var gms = new GameManager();

var gamemessage = {
    template : '<b id="massages">{{getmassage}}</b>',

    computed : {
        getmassage : () => {
        gms.Update();
        if(gms.GameState === 0){
            return  "게임오버! - 무승부";
         }
        else if(gms.GameState === 1){
            return  "게임오버! - O 승리";
        }
        else if(gms.GameState === 2){
            return  "게임오버! - X 승리";
        }
        else if(gms.GameState === 3){
            return  "O 턴";
        }
        else if(gms.GameState === 4){
            return  "X 턴";
        }
        }
    }
}

var player1view = {
    template : '<p>{{showplayer1name}} : {{showplayer1wincount}} , {{showplayer1lostcount}} , {{showplayer1drowcount}}</p>',

    computed : {
        showplayer1name : function(){
            return gms.player1.name;
        },
        showplayer1wincount : function () {
            return gms.player1.winCount;
        },
        showplayer1lostcount : function () {
            return gms.player1.lostCount;
        },
        showplayer1drowcount : function () {
            return gms.player1.drawCount;
        }
    }
}
var player2view = {
    template : '<p>{{showplayer2name}} : {{showplayer2wincount}} , {{showplayer2lostcount}} , {{showplayer2drowcount}}</p>',

    computed : {
        showplayer2name : function(){
            return gms.player2.name;
        },
        showplayer2wincount : function () {
            return gms.player2.winCount;
        },
        showplayer2lostcount : function () {
            return gms.player2.lostCount;
        },
        showplayer2drowcount : function () {
            return gms.player2.drawCount;
        }
    }
}

var rankview = {
    template : '<center><div @click = "showrank" id="gamerankview" ><p>랭킹</p></div></center>',

    methods : {
        showrank : function () {
            console.log("랭킹");
            document.querySelector(".background").className = "background show";
        }
    }
}

var app = new Vue({

    el : "#gameApp",
    data : gms,
            
    components : {
        
        'game-message' : gamemessage,
        'game-rank' : rankview,
        'game-player1' : player1view,
        'game-player2' : player2view
    },

    computed: {
        massage : function(){
            gms.Update();
            if(gms.GameState === 0){
                return  "게임오버! - 무승부";
            }
            else if(gms.GameState === 1){
                return  "게임오버! - O 승리";
            }
            else if(gms.GameState === 2){
                return  "게임오버! - X 승리";
            }
            else if(gms.GameState === 3){
                return  "O 턴";
            }
            else if(gms.GameState === 4){
                return  "X 턴";
            }
            
        }
    },
    methods : {
        oxinput : function(event){
            gms.input([].indexOf.call(event.target.parentElement.children, event.target));
        },
        isgameview : function () {
            return gms.gameview;
        },
        closepopup : function() {
            document.querySelector(".background").className = "background";
        },
        closepopup1 : function() {
            console.log("종료시켜줘");
            document.querySelector(".background1").className = "background1";
        },
        isgameover : function(){
            if(gms.GameOver == false){
                document.querySelector(".background1").className = "background1 show1";
            }
            return gms.GameOver;
        }
    },

    BeforeCreate : function(){
        console.log("게임 객체 생성 중");
    },

    created : function(){
        console.log("GameState " + gms.GameState);
        console.log("게임 객체 생성완료");         
    },

    mounted : function(){

    },

    updated : function(){

            
    }
})

var app2 = new Vue({
    el : "#gamemain",
    data : {
        name : "hi",
        texttest1 : null,
        texttest2 : null,
        isname : false
    },
    methods : {
        inputtext : function () {
            if(this.texttest1 != null && this.texttest2 != null){
                console.log("내용입력 완료");
                this.isname = true;
                gms.player1.name = this.texttest1;
                gms.player2.name = this.texttest2;
                gms.gameview = true;
            } 
            else if(this.texttest1 == null || this.texttest2 == null){
                console.log("둘다 입력 X");
                alert("닉네임을 입력해주세요");
                
            }
        },
        getGameState : function(){
            return gms.GameState;
        }
    }
})
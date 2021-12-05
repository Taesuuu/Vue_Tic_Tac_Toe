
/* 

 1. 9개의 놓을 수 있는 공간을 제공하고 9개의 게임 판에서만 돌을 놓을 수 있다.
 2. 선공 후공을 정한 후 순서대로 9개의 공간 중 하나의 돌을 놓는다. - 선공이 O 후공이 X
 3. 플레이어가 놓은 돌이 가로, 세로, 대각선 중 하나와 일치하면 승리한다. 


 자신의 돌 좌 우 대각선에 자신의 돌과 똑같은 돌이 2가지 놓여있다면 플레이어가 승리

 처음 돌을 놓았을 경우부터 9개 확인해서 bool 값으로 게임이 끝났는지 확인하는 경우

 0 1 2, 
 0 3 6,
 0 4 8
 1 4 7,  
 2 5 8, 
 2 4 6
 3 4 5,
 6 7 8,  
 
 < 승리 조건 배열에 이럴 때 같은 데이터가 있다면 같은 데이터가 있는 플레이어가 승리
        // 선택 시 1번 플레이어는 1을 저장 2번 플레이어는 2를 저장해서 MAP에 들어있는 배열 값이 1 혹은 2라면 1이라면 O를 표시 2라면 X를 표시해준다.
        // 위에 적은 조건을 승리조건으로 두고 조건이 같다면 해당 플레이어의 승리
        // 승리 조건에 맞지 않다면 알람창을 띠우고 다시 init 함수를 실행해서 처음으로 돌아갈 수 있도록 구성

        // 0 1 2
        // 3 4 5
        // 6 7 8

        // 0 : 게임오버 - 무승부 -  9개의 MAP이 전부 데이터가 들어있고 한 줄을 완성 못하는 상황일 때 무승부
        // 1 : 게임오버 - O 승리 - 
        // 2 : 게임오버 - X 승리 - 
        // 3 : 게임 플레이 중 - O 턴 - bool을 이용해서 true일 때 O만 입력 가능
        // 4 : 게임 플레이 중 - X 턴 - bool을 이용해서 false일 때 X만 입력 가능

    처음 시작 할 때 라디오 버튼으로 O X 선공 후공 정할 수 있도록 설정?


    하나 입력시 자동으로 1 2 3 중 하나를 선택해서 입력한다면 그게 AI지 않을까? 

    원래 승부가 나는 조건에서 들어있는 부분의 value를 null로 바꾸고 imglink를 다시 null로 바꾸고 없어진 부분보다 높은 곳이 있다면 그 위에 있는걸 아래로 내리고 점수를 + 1점 해주는 방식?
    배열 순서가 
    0
    1
    2 니까 2에서 걸렸다면 그 위에 있는 부분의 값을 내껄로 가지고 오고 그 위에 있는 부분도 그 위에 부분으로 가지고 오는 방식
    점수 ++ 해주고 사라지고 value = null / imglink = null 

    게임 종료 시 랭킹 띠우는 것처럼 띠우는 방법?


*/

class GameManager {
    constructor(){
        
        this.GameOver = true;
        this.turn = GameManager.O;
        this.GameState = 0;
        this.count = 0;

        this.GameMap = new Array(9).fill().map(s => new maptile() );

        this.player1 = new player();
        this.player2 = new player();
        
        this.gameview = false;

    }

    init(){
        this.GameOver = true;
        this.turn = GameManager.O;
        this.GameState = 0;
        this.count = 0;
        this.GameMap = new Array(9).fill().map(s => new maptile() );
    }

    input(i){
        if(this.GameOver){
            if(!this.GameMap[i].value && this.GameOver){
                this.GameMap[i].value = this.turn;
                this.GameMap[i].isshow = true;
                this.GameMap[i].showimg();
                this.count++;            
                this.turn = (this.turn === GameManager.O) ? GameManager.X : GameManager.O;
            }
        }
    }
     
    Update(){

        if(this.GameOver == false){
            return;
        }

        if(this.turn === GameManager.O){
            this.GameState = 3;
        }else{
            this.GameState = 4;            
        }

        if(this.GameMap[0].value == "O" && this.GameMap[1].value == "O" && this.GameMap[2].value == "O"){
            this.GameState = 1;
            this.GameOver = false;
            this.GameMap[0].isHighlighted = true;
            this.GameMap[1].isHighlighted = true;
            this.GameMap[2].isHighlighted = true;
            this.player1.winCount++;
            this.player2.lostCount++;
        }
        else if(this.GameMap[0].value == "O" && this.GameMap[3].value == "O" && this.GameMap[6].value =="O"){
            this.GameState = 1;
            this.GameOver = false;
            this.GameMap[0].isHighlighted = true;
            this.GameMap[3].isHighlighted = true;
            this.GameMap[6].isHighlighted = true;
            this.player1.winCount++;
            this.player2.lostCount++;
        }
        else if(this.GameMap[0].value =="O" && this.GameMap[4].value == "O" && this.GameMap[8].value == "O"){
            this.GameState = 1;
            this.GameOver = false;
            this.GameMap[0].isHighlighted = true;
            this.GameMap[4].isHighlighted = true;
            this.GameMap[8].isHighlighted = true;
            this.player1.winCount++;
            this.player2.lostCount++;
        }
        else if(this.GameMap[1].value == "O" && this.GameMap[4].value == "O" && this.GameMap[7].value == "O"){
            this.GameState = 1;
            this.GameOver = false;
            this.GameMap[1].isHighlighted = true;
            this.GameMap[4].isHighlighted = true;
            this.GameMap[7].isHighlighted = true;
            this.player1.winCount++;
            this.player2.lostCount++;
        }
        else if(this.GameMap[2].value == "O" && this.GameMap[5].value == "O" && this.GameMap[8].value =="O"){
            this.GameState = 1;
            this.GameOver = false;
            this.GameMap[2].isHighlighted = true;
            this.GameMap[5].isHighlighted = true;
            this.GameMap[8].isHighlighted = true;
            this.player1.winCount++;
            this.player2.lostCount++;
        }
        else if(this.GameMap[2].value == "O" && this.GameMap[4].value == "O" && this.GameMap[6].value == "O"){
            this.GameState = 1;
            this.GameOver = false;
            this.GameMap[2].isHighlighted = true;
            this.GameMap[4].isHighlighted = true;
            this.GameMap[6].isHighlighted = true;
            this.player1.winCount++;
            this.player2.lostCount++;
        }
        else if(this.GameMap[3].value == "O" && this.GameMap[4].value == "O" && this.GameMap[5].value == "O"){
            this.GameState = 1;
            this.GameOver = false;
            this.GameMap[3].isHighlighted = true;
            this.GameMap[4].isHighlighted = true;
            this.GameMap[5].isHighlighted = true;
            this.player1.winCount++;
            this.player2.lostCount++;
        }
        else if(this.GameMap[6].value == "O" && this.GameMap[7].value == "O" && this.GameMap[8].value == "O"){
            this.GameState = 1;
            this.GameOver = false;
            this.GameMap[6].isHighlighted = true;
            this.GameMap[7].isHighlighted = true;
            this.GameMap[8].isHighlighted = true;
            this.player1.winCount++;
            this.player2.lostCount++;
        } 
        else if(this.GameMap[0].value == "X" && this.GameMap[1].value == "X" && this.GameMap[2].value == "X"){
            this.GameState = 2;
            this.GameOver = false;
            this.GameMap[0].isHighlighted = true;
            this.GameMap[1].isHighlighted = true;
            this.GameMap[2].isHighlighted = true;
            this.player2.winCount++;
            this.player1.lostCount++;
        }
        else if(this.GameMap[0].value == "X" && this.GameMap[3].value == "X" && this.GameMap[6].value == "X"){
            this.GameState = 2;
            this.GameOver = false;
            this.GameMap[0].isHighlighted = true;
            this.GameMap[3].isHighlighted = true;
            this.GameMap[6].isHighlighted = true;
            this.player2.winCount++;
            this.player1.lostCount++;
        }
        else if(this.GameMap[0].value == "X" && this.GameMap[4].value == "X" && this.GameMap[8].value == "X"){
            this.GameState = 2;
            this.GameOver = false;
            this.GameMap[0].isHighlighted = true;
            this.GameMap[4].isHighlighted = true;
            this.GameMap[8].isHighlighted = true;
            this.player2.winCount++;
            this.player1.lostCount++;
        }
        else if(this.GameMap[1].value == "X" && this.GameMap[4].value == "X" && this.GameMap[7].value == "X"){
            this.GameState = 2;
            this.GameOver = false;
            this.GameMap[1].isHighlighted = true;
            this.GameMap[4].isHighlighted = true;
            this.GameMap[7].isHighlighted = true;
            this.player2.winCount++;
            this.player1.lostCount++;
        }
        else if(this.GameMap[2].value == "X" && this.GameMap[5].value == "X" && this.GameMap[8].value == "X"){
            this.GameState = 2;
            this.GameOver = false;
            this.GameMap[2].isHighlighted = true;
            this.GameMap[5].isHighlighted = true;
            this.GameMap[8].isHighlighted = true;
            this.player2.winCount++;
            this.player1.lostCount++;
        }
        else if(this.GameMap[2].value == "X" && this.GameMap[4].value == "X" && this.GameMap[6].value == "X"){
            this.GameState = 2;
            this.GameOver = false;
            this.GameMap[2].isHighlighted = true;
            this.GameMap[4].isHighlighted = true;
            this.GameMap[6].isHighlighted = true;
            this.player2.winCount++;
            this.player1.lostCount++;
        }
        else if(this.GameMap[3].value == "X" && this.GameMap[4].value == "X" && this.GameMap[5].value == "X"){
            this.GameState = 2;
            this.GameOver = false;
            this.GameMap[3].isHighlighted = true;
            this.GameMap[4].isHighlighted = true;
            this.GameMap[5].isHighlighted = true;
            this.player2.winCount++;
            this.player1.lostCount++;
        }
        else if(this.GameMap[6].value == "X" && this.GameMap[7].value == "X" && this.GameMap[8].value == "X"){
            this.GameState = 2;
            this.GameOver = false;
            this.GameMap[6].isHighlighted = true;
            this.GameMap[7].isHighlighted = true;
            this.GameMap[8].isHighlighted = true;
            this.player2.winCount++;
            this.player1.lostCount++;
        } 
        if(this.count === 9){
            if(this.GameOver == false){
                return;
            }else {
                this.GameOver = false;
                this.GameState = 0;
                this.player1.drawCount++;
                this.player2.drawCount++;
            }
            
        }
        

    }
   
}

GameManager.O = 'O';
GameManager.X = 'X';


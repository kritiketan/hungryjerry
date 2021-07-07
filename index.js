
let rows=0;
let cols=0;
let grid = []
let stepsTakenByJerry = 0;
let remainingCheese = 0;
let currentPosition = [0,0] //[row,col]
let oldPosition = [0,0]

let init  = function(){
    rows = prompt('Number of rows?',rows)
    cols = prompt('Number of cols?',cols)

    

    
    remainingCheese = parseInt(rows)
    let gridTable = document.getElementById("gridTable");
    for(let i=0;i<rows;i++){
        let row = gridTable.insertRow();
        for(let j=0;j<cols;j++){
            let cell = row.insertCell();
            cell.innerHTML='🕳';
            cell.id = 'col'+i+j
            
        }

        let cheeseSpot = Math.floor(Math.random() * cols);
        let cheese = document.getElementById('col'+ i + cheeseSpot);
        cheese.innerText = '🧀'
    }

    
    
}

document.addEventListener('keydown', function (event) {
    
    if(remainingCheese > 0){
        oldPosition = [...currentPosition];
        switch(event.key){
            //Row Change
            case "ArrowDown":
                if(currentPosition[0] == (rows-1)){//at the bottom of the grid
                    alert("You can only move up from here.")
                    return;
                }
                currentPosition[0] += 1
                break;
            case "ArrowUp":
                if(currentPosition[0] == 0){//at the top of the grid
                    alert("You can only move down from here.")
                    return;
                }
                currentPosition[0] -= 1
                break;
            
            //Column change
            case "ArrowRight":
                if(currentPosition[1] == (cols-1)){//at the top of the grid
                    alert("You can only move left from here.")
                    return;
                }
                currentPosition[1] += 1
                break;
            case "ArrowLeft":
                if(currentPosition[1] == 0){//at the top of the grid
                    alert("You can only move right from here.")
                    return;
                }
                currentPosition[1] -= 1
                break;
    
            default:
                // alert("Use arrow keys (↑↓←→) to move jerry around the grid.")
                break;
            
        }
        updateCurrentPositionView()
    }
    
  });


let updateCurrentPositionView = function(){
    stepsTakenByJerry+=1;
    let oldPositionCell = 'col'+oldPosition[0]+oldPosition[1];
    let oldPosCellValue = document.getElementById(oldPositionCell);
    oldPosCellValue.innerText = '✅'

    let newPositionCell = 'col'+currentPosition[0]+currentPosition[1];
    let newPosCellValue = document.getElementById(newPositionCell);
    let crrVal = newPosCellValue.innerText;
    newPosCellValue.innerText = '🐭';
    if(crrVal == '🧀'){
        remainingCheese-=1;
    }
    
    let cheeseLeft = document.getElementById("cheeseLeft");
    cheeseLeft.innerText = remainingCheese
    if(remainingCheese == 0){
        let cheeseDone = document.getElementById("cheeseDone");
        cheeseDone.innerText = 'I am full. It took you '+ stepsTakenByJerry
        +' steps to collect all hidden cheese blocks in the grid.';
    }
}

let start = function(){
    init()
    
    let startPos = document.getElementById('col00')
    startPos.innerText = '🐭'

}

let reset = function(){
    location.reload()
}



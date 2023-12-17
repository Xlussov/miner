// const canvas = document.querySelector('#canvas')
// const context = canvas.getContext('2d')

// const countBlock = 20
// const sizeBlock = 40
// const cb = 0.1

// let game = false
// let block = []

// canvas.width = countBlock * sizeBlock
// canvas.height = countBlock * sizeBlock

// function plusOne(h,w){
//    if(h >= 0 && h <= countBlock - 1 && w >= 0 && w < countBlock -1){
//       if(block[h][w].number != 9){
//          block[h][w].number++
//       }
//    }
// }

// function start(sh,sw){

//    block = []

//    for(h = 0; h < countBlock; h++){
//       let whline = []

//       if(h == sh && w == sw){
//          whline.push({number: 9, show: 0})
//          continue
//       }
//       for(w = 0; w < countBlock; w++){
//          if(Math.random() < cb){
//             whline.push({number: 9, show: 0})
//          }else {
//             whline.push({number: 0, show: 0})
//          }
//       }
//       block.push(whline)
//    }
//    for(h = 0; h < countBlock; h++){
//       for(w = 0; w < countBlock; w++){
//          if(block[h][w].number == 9){
//             plusOne(h,w-1)
//             plusOne(h,w+1)
//             plusOne(h-1,w)
//             plusOne(h+1,w)
//             plusOne(h-1,w-1)
//             plusOne(h+1,w-1)
//             plusOne(h+1,w+1)
//          }
//       }
//    }
//    game = true
// }

// // start()
// console.log(block);

// setInterval(drawPlace,25)

// canvas.addEventListener('mousedown', (e)=>{

//    let h = Math.floor(e.clientY/sizeBlock)
//    let w = Math.floor(e.clientX/sizeBlock)

//    if(!game){
//       start(h,w)
//    }

//    if(block[h][w].number == 9){
//       game = false
//       console.log('False');
//    }
//    showBlock(h,w)
// })

// function drawPlace(){
//    context.fillStyle = '#222'
//    context.fillRect(0,0,canvas.width,canvas.height)


//    for(h = 0; h < block.length; h++){
//       for(w = 0; w < block[h].length; w++){
//          if(block[h][w].show){
//             if(block[h][w].number == 9){
//                context.beginPath()
//                context.fillStyle = '#f00'
//                context.arc(w*sizeBlock + sizeBlock /2,h*sizeBlock + sizeBlock /2, sizeBlock /3,0,2 * Math.PI,true)
//                context.fill()
//                continue
//             }
//             context.fillStyle = '#555'
//             context.fillRect(w*sizeBlock,h*sizeBlock, sizeBlock,sizeBlock)

//             if(block[h][w].number){
//                context.font = '32 serif'
//                context.fillStyle = '#ddd'
//                context.fillText(block[h][w].number, w * sizeBlock +10,(h+1) * sizeBlock)
//             }
//          }
//       }
//    }


//    for(t = 0; t < countBlock; t++){
//       context.strokeStyle = '#fff'
//       context.beginPath()
//       context.moveTo(0, t * sizeBlock)
//       context.lineTo(canvas.width, t * sizeBlock)
//       context.stroke()

//       context.beginPath()
//       context.moveTo(t * sizeBlock, 0)
//       context.lineTo(t * sizeBlock, canvas.height)
//       context.stroke()
//    }
// }


// function showBlock(h,w){
//    block[h][w].show = 1
//    if(block[h][w].number != 1){
//       return
//    }
//    checkZero(h,w-1)
//    checkZero(h,w+1)
//    checkZero(h-1,w)
//    checkZero(h+1,w)


// }

// function checkZero(h,w){
//    if(h >= 0 && h <= countBlock - 1 && w >= 0 && w < countBlock -1){
//       if(!block[h][w].show){
//          showBlock(h,w)
//       }
//    }
// }


//!==========================================================================

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// let countBlock = 20;
// let sizeBlock = 40;
// let CB = 0.1;
// let game = false;

// let blocks = Array();

// canvas.width = countBlock * sizeBlock;
// canvas.height = countBlock * sizeBlock;

// function plusOne(h,w) {

//     if(h >=0 && h <= countBlock - 1 && w >= 0 && w < countBlock - 1) {

//         if(blocks[h][w].number != 9) {
           
//             blocks[h][w].number++;
            
//         }
//     }
    
// }


// function start(sh,sw) {
    
//     blocks = Array();
    
//     for(let h = 0; h < countBlock; h++) {
        
//         let wline = Array();
//         for(let w = 0; w < countBlock; w++) {
            
//             if(h == sh && w == sw) {
               
//                 wline.push({number:0, show:0});
//                 continue;
                
//             }
            
//             if(Math.random() < CB) {
//                wline.push({number:9, show:0});
//             } else {
//                 wline.push({number:0, show:0});
//             }
            
//         }
        
//         blocks.push(wline);
        
//     }
    
//     for(let h = 0; h < countBlock; h++) {
//         for(let w = 0; w < countBlock; w++) {
//             if(blocks[h][w].number == 9) {
               
//                 plusOne(h,w-1);
//                 plusOne(h,w+1);
//                 plusOne(h-1,w);
//                 plusOne(h+1,w);
//                 plusOne(h-1,w-1);
//                 plusOne(h-1,w+1);
//                 plusOne(h+1,w-1);
//                 plusOne(h+1,w+1);
                
//             }
//         }
//     }
    
//     game = true;
    
// }

// function draw() {
    
//     ctx.fillStyle = "#222";
//     ctx.fillRect(0,0,canvas.width,canvas.height);
    
//     for(let h = 0; h < blocks.length; h++) {
//         for(let w = 0; w < blocks[h].length; w++) {
        
//             if(blocks[h][w].show) {
                
//                 if(blocks[h][w].number == 9) {
//                     ctx.beginPath();
//                     ctx.fillStyle = "#f00";
//                     ctx.arc(w*sizeBlock+sizeBlock/2,h*sizeBlock+sizeBlock/2,sizeBlock/3,0,2*Math.PI,true);
//                     ctx.fill();
//                     continue;
                    
//                 }
                
//                 ctx.fillStyle = "#555";
//                 ctx.fillRect(w*sizeBlock,h*sizeBlock,sizeBlock,sizeBlock);
                
//                 if(blocks[h][w].number) {
                    
//                     ctx.font = "32px serif";
//                     ctx.fillStyle = "#ddd";
//                     ctx.fillText(blocks[h][w].number, w*sizeBlock + 10, (h+1)*sizeBlock - 10);
                    
                   
//                 }
               
//             }
            
//         }
//     }
    
//     for(let t = 0; t < countBlock + 1; t++) {
//         ctx.strokeStyle = "#fff";
//         ctx.beginPath();
//         ctx.moveTo(0,t * sizeBlock);
//         ctx.lineTo(canvas.width,t * sizeBlock);
//         ctx.stroke();
        
//         ctx.beginPath();
//         ctx.moveTo(t * sizeBlock,0);
//         ctx.lineTo(t * sizeBlock,canvas.height);
//         ctx.stroke();
//     }
// }
// setInterval(draw,25);

// canvas.addEventListener('mousedown',function(event){
    
    
    
//     let h = Math.floor((event.clientY/sizeBlock));
//     let w = Math.floor((event.clientX/sizeBlock));
    
//     if(!game) {
//        start(h,w);
//     }
    
//     if (blocks[h][w].number == 9) {
//         console.log('lose');
//         game = false;
        
//     }
    
//     showBLock(h,w);
    
    
// });

// function showBLock(h,w) {
    
//     blocks[h][w].show = 1;
    
//     if (blocks[h][w].number != 0) {
//         return;
//     }
    
//     checkZero(h,w-1);
//     checkZero(h,w+1);
//     checkZero(h-1,w);
//     checkZero(h+1,w);
    
// }

// function checkZero(h,w) {
    
//     if(h >=0 && h <= countBlock - 1 && w >= 0 && w < countBlock - 1) {
//         if(!blocks[h][w].show) {
//            showBLock(h,w);
//         }   
//     }
    
// }


//!==========================================================================

// let areaConst = []
// const areaSize = 30
// const CB = 0.3
// let game = false
// class StartGame {
//    constructor(area){
//       this.area = area
//    }  
//    start(){

//    }
// }


// class Area {
//    constructor(area){
//       this.area = area
//    }
//    newArea() {
//       const container = document.querySelector('.container');
//       const table = document.createElement('table');
//       container.insertAdjacentElement('afterbegin', table);
//       for (let h = 0; h < areaSize; h++) {
//          const tr = document.createElement('tr');
//          table.appendChild(tr); 
//          areaConst.push([]);
//          for (let w = 0; w < areaSize; w++) {
//             const td = document.createElement('td');
//             tr.appendChild(td); 
//             td.classList.add(`x${w}`, `y${h}`);
//             areaConst[h].push(0);
//          }
//       }
//    }
//    creatBomb(){
//       let f = 1
//       const thisElement = document.querySelectorAll('td')
//       thisElement.forEach(el =>{
//          el.addEventListener('click', () => {
//             if(f === 1){
//                const x = el.classList[0].replace(/\D/g, '')
//                const y = el.classList[1].replace(/\D/g, '')
//                areaConst[y][x] = 9
//                for(let h = 0; h < areaSize; h++){
//                   for(let w = 0; w < areaSize; w++){
//                      if(CB > Math.random() && areaConst[h][w] != 9){
//                         areaConst[h][w] = 1
//                      }
//                   }
//                }
//                areaConst[y][x] = 0
//                return f--
//             }
//          })
//       })
//    }
//    getPosition(element, callback){
//       const thisElement = document.querySelectorAll(element)
//       thisElement.forEach(item =>{
//          item.addEventListener('click', () => {
//             callback(item)
//          })
//       })
//    }
//    getValue(element,callback){
//       this.getPosition(element, (ctx)=>{
//          callback(ctx.textContent)
//       })
//    }
//    click(el){
//       const x = parseInt(el.classList[0].replace(/\D/g, ''))
//       const y = parseInt(el.classList[1].replace(/\D/g, ''))
//       if(areaConst[y][x] !== 1){
//          // el.innerHTML = `<span>${this.getNeighbours(areaConst, x, y, el)}</span>`
//          // el.style.backgroundColor = '#f1f1f1'
//          // if(this.getNeighbours(areaConst, x, y) < 4){
//          //    this.getNeighbours(areaConst, x+1, y+1)
//          // }
//          this.getNeighbours(areaConst, x, y, el)
//          // this.getb(areaConst, x, y, el)
//       }else {
//          alert('YOU LOSE')
//          location.reload();
//       }
//       // this.plusOne(x,y)
//       // this.plusOne(x-1,y)
//       // this.plusOne(x,y-1)
//       // this.plusOne(x-1,y-1)
//       // this.plusOne(x+1,y)
//       // this.plusOne(x,y+1)
//       // this.plusOne(x+1,y+1)
//    }

//    // plusOne(x,y){
//    //    console.log(x);
//    //    console.log(y);
//    //    if(x != -1 && y != -1 && x <= areaSize -1 && y <= areaSize -1 && areaConst[y][x] != 1){
//    //       console.log('s');
//    //    }
//    // }
//    getNeighbours(matrix, x, y, el) {
//       const neighbours = [];
//       for (let i = -1; i <= 1; i++) {
//          for (let j = -1; j <= 1; j++) {
//             if (i === 0 && j === 0) continue;
//             const neighborX = x + i;
//             const neighborY = y + j;
//             if (
//                neighborX >= 0 &&
//                neighborX < matrix[0].length &&
//                neighborY >= 0 &&
//                neighborY < matrix.length
//             ) {
//                neighbours.push(matrix[neighborY][neighborX]);
//             }
//          }
//       }
//       el.innerHTML = `<span>${neighbours.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</span>`
//       el.style.backgroundColor = '#f1f1f1'
//       return neighbours.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//    }
//    // getb(matrix, x, y,el) {
//    //    const neighbours = [];
//    //    const loc = []
//    //    for (let i = -1; i <= 1; i++) {
//    //       for (let j = -1; j <= 1; j++) {
//    //          if (i === 0 && j === 0) continue;
//    //          const neighborX = x + i;
//    //          const neighborY = y + j;
//    //          if (
//    //             neighborX >= 0 &&
//    //             neighborX < matrix[0].length &&
//    //             neighborY >= 0 &&
//    //             neighborY < matrix.length
//    //          ) {
//    //             neighbours.push(matrix[neighborY][neighborX]);
//    //             loc.push(`x${neighborX}-y${neighborY}`);
//    //             this.getNeighbours(areaConst,parseInt(neighborX),parseInt(neighborY),el)
//    //          }
//    //       }
//    //    }
//    //    console.log(loc);
//    // }
// }


// document.addEventListener('DOMContentLoaded', ()=>{
//    const Game = new Area(areaConst)
//    Game.newArea()
//    Game.creatBomb()
//    game = true
//    const click = document.querySelectorAll('td')
//    click.forEach(el =>{
//       el.addEventListener('click', ()=>{
//          Game.click(el)
//          console.log(areaConst);
//       })
//    })
// })



//!=================================================================`~~
let areaConst = [];
let areaSize = 10;
let CB = 0.15;
let game = false;
let flagCount = 0
let flagCountConst = 0
let close = areaSize * areaSize
let seconds = 0;
const interval = 1000; 

class Area {
   constructor(area) {
      this.area = area;
   }
   areaSetings(){
      const flag = document.querySelectorAll('td')
      flag.forEach(el =>{
         el.addEventListener('contextmenu', event => {
            if (event.target.classList[0] !== 'container') {
               event.preventDefault();
               if(el.classList.contains('open') !== true && el.classList.contains('flag') !== true && flagCount > 0){
                  el.innerHTML = `<img class='flag' src="../img/flag.png" alt="flag">`
                  el.classList.toggle('flag')
                  flagCount--
               }else if(el.classList.contains('flag') === true){
                  el.innerHTML = ``
                  el.classList.toggle('flag')
                  flagCount++
               }
               if(flagCount === 0 && (close - flagCountConst) <= 0){
                  alert('YOU WIN')
                  location.reload();
               }
               document.querySelector(".flagCount").textContent = flagCount
            }
            console.log(flagCount);
         })
      })
   }
   newArea() {
      const container = document.querySelector('.container');
      const table = document.createElement('table');
      container.insertAdjacentElement('afterbegin', table);
      for (let h = 0; h < areaSize; h++) {
         const tr = document.createElement('tr');
         table.appendChild(tr);
         areaConst.push([]);
         for (let w = 0; w < areaSize; w++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.classList.add(`x${w}`, `y${h}`);
            areaConst[h].push(0);
         }
      }
   }
   creatBomb() {
      let f = 1;
      const thisElement = document.querySelectorAll('td');
      thisElement.forEach(el => {
         el.addEventListener('click', () => {
            if (f === 1) {
               setInterval(this.updateTimer, interval);
               const x = el.classList[0].replace(/\D/g, '');
               const y = el.classList[1].replace(/\D/g, '');
               areaConst[y][x] = 9;
               for (let h = 0; h < areaSize; h++) {
                  for (let w = 0; w < areaSize; w++) {
                     if (CB > Math.random() && areaConst[h][w] != 9) {
                        areaConst[h][w] = 1;
                        console.log();
                        const mine = document.getElementsByClassName(`x${w} y${h}`)
                        mine[0].classList.add('mine')
                        flagCount++
                        flagCountConst++
                     }
                  }
               }
               areaConst[y][x] = 0;
               return (f--);
            }
         });
      });
   }
   getPosition(element, callback) {
      const thisElement = document.querySelectorAll(element);
      thisElement.forEach(item => {
         item.addEventListener('click', () => {
            callback(item);
         });
      });
   }
   getValue(element, callback) {
      this.getPosition(element, ctx => {
         callback(ctx.textContent);
      });
   }
   click(el) {
      const x = parseInt(el.classList[0].replace(/\D/g, ''));
      const y = parseInt(el.classList[1].replace(/\D/g, ''));
      if(flagCount === 0 && (close - flagCountConst) === 0){
         alert('YOU WIN')
         location.reload();
      }
      if (areaConst[y][x] !== 1) {
         this.revealCell(areaConst, x, y);
      } else if(el.classList.contains('flag') !== true){
         const mine = document.querySelectorAll('.mine')
         mine.forEach(item =>{
            item.innerHTML = '<img src="../img/bombe.png" alt="bomb">'
         })
         setTimeout(()=>{
            alert('YOU LOSE');
            location.reload();
         },200)
      }
   }

   revealCell(matrix, x, y) {
      if (matrix[y][x] === 0) {
         const revealed = new Set();
         this.revealNeighbors(matrix, x, y, revealed);
         this.updateUI(revealed);
      } else {
         alert('Cell already revealed!');
      }
   }

   revealNeighbors(matrix, x, y, revealed) {
      if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length || revealed.has(`${x},${y}`) || matrix[y][x] === 1) {
         return;
      }

      revealed.add(`${x},${y}`);
      const neighbors = this.getNeighbours(matrix, x, y);
      if (neighbors === 0) {
         this.revealNeighbors(matrix, x - 1, y - 1, revealed);
         this.revealNeighbors(matrix, x, y - 1, revealed);
         this.revealNeighbors(matrix, x + 1, y - 1, revealed);
         this.revealNeighbors(matrix, x - 1, y, revealed);
         this.revealNeighbors(matrix, x + 1, y, revealed);
         this.revealNeighbors(matrix, x - 1, y + 1, revealed);
         this.revealNeighbors(matrix, x, y + 1, revealed);
         this.revealNeighbors(matrix, x + 1, y + 1, revealed);
      }
   }

   updateUI(revealed) {
      revealed.forEach(pos => {
         const [x, y] = pos.split(',').map(Number);
         const cell = document.querySelector(`.x${x}.y${y}`);
         if(cell.classList.contains('flag') === true && this.getNeighbours(areaConst,x,y) !== 0){return}
         cell.innerHTML = `<span>${this.getNeighbours(areaConst, x, y) !== 0 ? this.getNeighbours(areaConst, x, y) : ''}</span>`;
         cell.style.backgroundColor = '#f1f1f1';
         cell.classList.add('open')
         cell.classList.remove('flag')
         close--
      });
   }

   getNeighbours(matrix, x, y) {
      const neighbours = [];
      for (let i = -1; i <= 1; i++) {
         for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const neighborX = x + i;
            const neighborY = y + j;
            if (
               neighborX >= 0 &&
               neighborX < matrix[0].length &&
               neighborY >= 0 &&
               neighborY < matrix.length
            ) {
               neighbours.push(matrix[neighborY][neighborX]);
            }
         }
      }
      return neighbours.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   }

   updateTimer() {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      document.querySelector('.second').innerHTML = remainingSeconds
      document.querySelector('.minut').innerHTML = minutes
      console.log(`${minutes}:${remainingSeconds}`);
  }
}


const startGame = (Game) =>{
   Game.newArea();
   Game.areaSetings()
   Game.creatBomb();
   const click = document.querySelectorAll('td');
   click.forEach(el => {
      el.addEventListener('click', () => {
         Game.click(el);
         console.log(areaConst);
         console.log(close);
         document.querySelector(".flagCount").textContent = flagCount
         if(flagCount === 0 && (close - flagCountConst) <= 0){
            alert('YOU WIN')
            location.reload();
         }
      })
   })
   document.querySelector('.reload').addEventListener('click',()=>{
      location.reload();
   })
}

document.addEventListener('DOMContentLoaded', () => {
   const Game = new Area(areaConst);
   const selection = document.querySelector('#levl')
   selection.addEventListener('change', ()=>{
      document.querySelector('.container').innerHTML =''
      areaConst = []
      if(selection.value === 'light'){
         areaSize = 10;
         CB = 0.15;
      }else if(selection.value === 'medium'){
         areaSize = 15;
         CB = 0.15;
      }else if(selection.value === 'hard'){
         areaSize = 20;
         CB = 0.2;
      }else if(selection.value === 'ultraHard'){
         areaSize = 30;
         CB = 0.2;
      }
      startGame(Game)
   })
   startGame(Game)
})


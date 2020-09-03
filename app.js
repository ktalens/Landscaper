var dollars = 4;
var scissors =false;
var toolbox = ["teeth"];

let moneyItem = document.getElementById("money");
let moneyLog = document.createElement("p");
moneyLog.textContent= dollars;
moneyItem.appendChild(moneyLog);

const moneyUpdate = ()=>{
    moneyLog.innerHTML=dollars;
    //console.log(dollars);
};

teeth.onclick = function(){
    dollars++;
    moneyUpdate();
    status()//
    //storeUpdate();
};
const toolboxUpdate = () => 
    {
        toolbox.forEach
        (
            (toolboxTool,index) =>
        {
            console.log(toolbox);
            if (index>0)
                {
                    let toolSheet=document.getElementById("toolbox");
                    let tool=document.createElement("button");
                    tool.textContent=("Use "+toolboxTool);
                    toolSheet.appendChild(tool);
                    tool.onclick=function()
                        {
                            dollars+= store[index-1].earningPower;
                            moneyUpdate();
                        }
                }
        }
        )
    };



const store = [
    {
        item: "rusty scissors",
        price: 5,
        quantity: 1,
        earningPower: 5
    },
    {
        item: "push lawnmower",
        price: 25,
        quantity: 1,
        earningPower: 50
    }
];

const status = () =>
    {
        if (dollars >= 5) 
        {
            console.log("You can buy a pair of rusty scissors!");
             
        } else {
            console.log("You only have $"+dollars);
        }
    };

let storeShelf = document.getElementById("storeShelf");
const storeUpdate = ()=>{
    store.forEach
    (
        (thing,index)=>
        {if(thing.quantity>0)
            {
                let storeLog = document.createElement("li");
                //console.log(thing.item);
                storeLog.textContent=thing.item;
                storeShelf.appendChild(storeLog);
                let stockItem = document.createElement("button");
                stockItem.innerHTML = "Buy Me";
                stockItem.onclick=function()
                    {
                    if (dollars>= thing.price&&thing.quantity>0) {
                        console.log("Hi");
                        thing.quantity -=1;
                        toolbox.push(thing.item);
                        dollars -= thing.price;
                        moneyUpdate();
                        toolboxUpdate();
                        let soldOut=document.getElementById(thing.item);
                        soldOut.style.display = "none";
                    }
                    else {
                        console.log("You only have $"+dollars)
                    }
                    };
                stockItem.setAttribute("id",thing.item);
                stockItem.setAttribute("class","buyme");
                storeLog.appendChild(stockItem);
                storeShelf.appendChild(storeLog);
            } else if(item.quantity===0)
            {
                console.log(item.quantity);
                //let soldOut=document.getElementById("rusty scissors");
                //storeShelf.parentNode.removeChild(soldOut);
            } else {
                return
            } 
        }
    )
};
storeUpdate();



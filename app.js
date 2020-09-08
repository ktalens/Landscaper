var dollars = 0;
var toolbox = ["teeth"];

let moneyItem = document.getElementById("money");
let moneyLog = document.createElement("p");
moneyLog.textContent= dollars;
moneyItem.appendChild(moneyLog);

const moneyUpdate = ()=>{
    moneyLog.innerHTML="$ "+dollars;
};

const answer = prompt ("What's your name?", "Lawnardo DaVinctree");
let messageName = document.querySelector("#prompt h3");
messageName.innerHTML= "Hello, "+answer+"...";

teeth.onclick = function(){
    dollars++;
    moneyUpdate();
    status()//
    //storeUpdate();
};

existingTools=[]
let purchased=toolbox.forEach(
    (purchasedTools,index)=>
        {existingTools.push(purchasedTools);
            console.log("Purchased: "+purchasedTools)}
        );

const toolboxUpdate = () => 
    {
        toolbox.forEach
        (
            (toolboxTool,index) =>
        {
         console.log("Current tool: "+toolboxTool)   ;
            if (index>0 && (existingTools.includes(toolboxTool)===false)) 
                {
                    let toolSheet=document.getElementById("toolbox");
                    let tool=document.createElement("button");
                    tool.textContent=("Use "+toolboxTool);
                    toolSheet.appendChild(tool);
                    existingTools.push(toolboxTool);
                    tool.onclick=function()
                        {
                            dollars+= store[index-1].earningPower;
                            moneyUpdate();
                            status();
                        }
                } else {
                    return
                }
        }
        )
    };



const store = [
    {
        item: "pair of rusty scissors",
        price: 5,
        quantity: 1,
        earningPower: 5
    },
    {
        item: "push lawnmower",
        price: 25,
        quantity: 1,
        earningPower: 50
    },
    {
        item: "fancy battery lawnmower",
        price: 250,
        quantity: 1,
        earningPower: 100
    },
    {
        item: "team of starving students",
        price: 500,
        quantity: 1,
        earningPower: 250
    }
];

const status = () =>
    {
        let remainingTools=[]
        store.forEach((thing,index) =>
            {
                if (thing.quantity >0)
                {
                    remainingTools.push(" "+thing.item)
                }
            }
            );   
        let remainingQuantities=[]
        store.forEach((thing,index) =>
            {
                remainingQuantities.push(thing.quantity)
            }
        );
        availableTools=remainingQuantities.reduce(
                (total,value) =>
                {
                    return total-value;             //I did not use this right looking at each value, but the end result still gives me the 0 I wanted so I kept it
                }
            );
        let promptItem = document.querySelector("#prompt p");
        if (availableTools !== 0 && dollars ===0) 
            {
            alert("Looks like you've treated yourself to a "+toolbox[toolbox.length-1]+"! Use your new tool to earn money faster!");
                promptItem.innerHTML="Keep working! You have $"+dollars+" and you still need to buy these items from the store: "+remainingTools;
            }
            else if (availableTools !== 0 && dollars >0) 
            {
            promptItem.innerHTML="Keep working! You have $"+dollars+" and you still need to buy these items from the store: "+remainingTools;
            }
            else if (dollars>=1000 && availableTools===0)
            {
                alert("CONGRATULATIONS, YOU MADE IT!");
                promptItem.innerHTML="You've earned $"+dollars+" and you have won the game! I knew you'd kick some <i>SERIOUS GRASS!</i>";
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
                storeLog.setAttribute("id",thing.item);
                storeLog.setAttribute("class","buyme");
                storeLog.textContent=thing.item;
                storeShelf.appendChild(storeLog);
                let stockItem = document.createElement("button");
                stockItem.innerHTML = "Buy Me for $"+thing.price;
                stockItem.onclick=function()
                    {
                    if (dollars>= thing.price&&thing.quantity>0) {
                        thing.quantity -=1;
                        toolbox.push(thing.item);
                        dollars -= thing.price;
                        moneyUpdate();
                        toolboxUpdate();
                        status();
                        let soldOut=document.getElementById(thing.item);
                        soldOut.style.display = "none";
                    }
                    else {
                        alert("Life is TERF- You only have $"+dollars+"! Better get back to work... ")
                    }
                    };
                storeLog.appendChild(stockItem);
                storeShelf.appendChild(storeLog);
            } else {
                return
            } 
        }
    )
};
storeUpdate();



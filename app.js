var dollars = 0;
var scissors =false;
var toolbox = [];

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



const store = [
    {
        item: "rusty scissors",
        price: 5,
        quantity: 1
    },
    {
        item: "push lawnmower",
        price: 25,
        quantity: 1
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
                console.log(thing.item);
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
                    } else {
                        console.log("You only have $"+dollars)
                    }
                    };
                stockItem.setAttribute("id",thing.item);
                stockItem.setAttribute("class","buyme");
                storeLog.appendChild(stockItem);
                storeShelf.appendChild(storeLog);
            } else {
                return
            } 
        }
    )
};
storeUpdate();



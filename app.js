var dollars = 0;
var scissors =false;

let moneyItem = document.getElementById("money");
let moneyLog = document.createElement("p");
moneyLog.textContent= dollars;
moneyItem.appendChild(moneyLog);

const moneyUpdate = ()=>{
    console.log(moneyLog.innerHTML=dollars)
};

teeth.onclick = function(){
    dollars ++;
    moneyUpdate()
};

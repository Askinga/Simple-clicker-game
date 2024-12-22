let Currencies = {
 	  clicks: 0
}
let ResetCurrencies = {
    PPts: 0
}
let elements = {
    clickButton: document.getElementById("ClickButton")
}
function Click(){
   Currencies.clicks = Currency.clicks.add(1)
}
function GEBI(id){
    return document.getElementById(id+"Div")
}
let divs = [
    GEBI("Click")
]
function ShowUI(){
    document.getElementById('TierStroke').style.display = reset2 >= 1 ? "block" : "none"
    document.getElementById('tierLabel').style.display = document.getElementById('TierStroke').style.display
    document.getElementById('UpgOpenDiv').style.display = document.getElementById('TierStroke').style.display
}
setInterval(ShowUI,1000);
divs.forEach((div) => {
    div.style.display = "none";
});
tier2Divs.forEach((div) => {
    div.style.display = "none";
});
let buttons = [elements.ClickButton]
let ttlXp = document.getElementById('Clicks')

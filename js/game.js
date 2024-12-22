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

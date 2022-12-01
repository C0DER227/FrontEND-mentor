 let cardName= document.getElementById('cardName')
 cardName.addEventListener('change',(e)=>{
    if(e.target.value=""){
        cardName.style.backgroundColor='red'
    }else{
        cardName.style.color='green'
    }
 })
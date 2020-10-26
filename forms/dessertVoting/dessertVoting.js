var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keylime Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
  for (i = 0; i <= dessertList.length -1; i++)
    drpDesserts.addItem(dessertList[i])
}

drpDesserts.onclick=function(s){
   
    if (typeof(s) == "object")   
    
        drpDesserts.value = s
        lblResult.value = `You Picked ${drpDesserts.selection}- that is a great choice!`
}


btnNext.onclick=function(){
  ChangeForm(describeYou)
}

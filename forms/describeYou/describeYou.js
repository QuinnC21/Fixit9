radYou.onchange=function(){
  lblOut.value = `I agree you are a very ${$("input[name=radYou]:checked").prop("value")} person!`
}

btnNextII.onclick=function(){
  ChangeForm(favExercises)
}





var number = document.form.textview;



function insert(num){
  return number.value += num;
  }
  
  function equals(){
  number.value = eval(number.value)
  }
  
  function clean(){
  number.value = ""
  }
  
  function back(){
    number.value = number.value.substring(0, number.value.length - 1);
  }
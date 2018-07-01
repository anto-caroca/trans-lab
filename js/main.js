let password= document.getElementById('password');


 function validatePassword(){

			let exp = /^[0-9]{4,8}$/;
			let result = exp.test(password.value);
      
      if(!result){
        alert( 'la contraseña solo admite números (min 4 máx 8)');
        return false;
        
			}else{
        return true;
      }
    }
    

//window.onload = () => {  
  
  const renderBipBalance = document.getElementById("renderBipBalance");
  let storeBipBalance;
  const boton= document.getElementById("btn-consultar-saldo");

boton.addEventListener("click", event=>{
  let numBip = document.getElementById('number').value;

  async function fetchBip(){
  const bip = await fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numBip}`)
  const dataBip = await bip.json()
  console.log(dataBip);
  let arrBip = Object.entries(dataBip)
  console.log(arrBip[2][1])
  storeBipBalance = arrBip[2][1];
  renderBipBalance.innerHTML = "su saldo es: "+storeBipBalance;

  }
  fetchBip();

})

/*function validateTarifa(){

const btnTarifa = document.getElementById("calcular-tarifa"); 
let tarifa = document.getElementById('render-cost');
let selectTarifa = document.getElementById('tarifa');

  if(selectTarifa.selectedIndex = 0){
    tarifa.innerHTML = storeBipBalance - 760;
  }else if(selectTarifa.selectedIndex = 1){
    tarifa.innerHTML = storeBipBalance - 680;
  }else if(selectTarifa.selectedIndex = 2){
    tarifa.innerHTML = storeBipBalance - 630;
  }
}*/
      

//}

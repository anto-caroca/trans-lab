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
    
      
window.onload = () => {  
      
  const url =  'http://www.psep.cl/api/Bip.php?&numberBip=14760348';
  const renderSaldo = document.getElementById("renderSaldo");
  let storeBipBalance;

async function fetchApi(){
  const bip = await fetch(`${url}`)
  const dataBip = await bip.json();
  
  let arrBip = Object.entries(dataBip)
  console.log(arrBip[2][1])
  storeBipBalance = arrBip[2][1];
  renderSaldo.innerHTML = "su saldo es: "+storeBipBalance;

  }
  fetchApi();

}


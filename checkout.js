

function submit(){
    let name=document.getElementById("name").value;
    let hno=document.getElementById("hno").value;
    let dis=document.getElementById("district").value;
    let state=document.getElementById("State").value;
    let pin=document.getElementById("pin").value;
    let mobile=document.getElementById("mobile").value;
    
 

      setTimeout(function(){
        if(name!=""&&hno!=""&&district!=""&&state!=""&&pin!=""&&mobile!=""){
           alert("Your order is Sucessfully Placed")
        }
      },5000)

       
   
}
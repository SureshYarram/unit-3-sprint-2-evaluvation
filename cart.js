
let cartarr=JSON.parse(localStorage.getItem("cartarr"));
        console.log(cartarr);
     cartdisplay(cartarr);
   
     let carttotal=0;
function cartdisplay(arr){
    document.querySelector("h1").innerHTML="";
    document.querySelector("h1").textContent="cart items: "+cartarr.length;
     document.querySelector(".cartcontainer").innerHTML=null;
    arr.map(function(elem,index){
        let div1=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.strCategoryThumb;
        let name=document.createElement("p");
        name.textContent="Dish name: "+elem.strCategory;
        name.style.color="blue"
        let price=document.createElement("p");
        price.textContent="Rs  "+Math.floor(Math.random()*500+100);
        // carttotal=carttotal+price;
        // console.log(carttotal);
        let button=document.createElement("button");
        button.textContent="Remove";
        button.addEventListener("click",function(){
         arr.splice(index,1);
       localStorage.setItem("cartarr",JSON.stringify(arr));
            cartdisplay(arr);
            
        });
        let place=document.createElement("button");
        place.textContent="Place Order";
        place.style.display="block";
        place.style.marginTop="3%"
        place.addEventListener("click",function(){

            setTimeout(function(){
              alert("your order is accepted");
              window.location.href="checkout.html"
            },2000)
           
        })
        console.log(cartarr.length)
        div1.append(img,name,price,button,place);
        document.querySelector(".cartcontainer").append(div1);
         

        
    })
}




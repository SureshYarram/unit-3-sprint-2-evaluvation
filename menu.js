async function getDishes(){
    try{let res =await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let data =await res.json();
    console.log(data.categories);
    let dishes=data.categories;
    appendDishes(dishes);
}
    catch(error){
        alert("dishes not found");
    }

}
getDishes();


function appendDishes(arr){
    arr.map(function(elem){
       // console.log(elem);
        let div1=document.createElement("div");
        let img=document.createElement("img");
        img.src=elem.strCategoryThumb;
        let name=document.createElement("p");
        name.textContent="Dish name: "+elem.strCategory;
        let price=document.createElement("p");
        price.textContent="Rs:  "+Math.floor(Math.random()*500+100);
        let button=document.createElement("button");
        button.textContent="Add to Cart";
        // button.setAttribute("onclick","addtocart()");
        // console.log(button);

        button.addEventListener("click",function(){
            let cartarray=JSON.parse(localStorage.getItem("cartarr"))||[];
               console.log(elem);
             cartarray.push(elem);
             localStorage.setItem("cartarr",JSON.stringify(cartarray));
        })
        
        div1.append(img,name,price,button);
        document.querySelector(".dishcontainer").append(div1);
    })
    
}






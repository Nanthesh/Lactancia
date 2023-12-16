

document.getElementById("button").addEventListener("click", () => {

    const emailOrPhone = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    
    const userDataJSON = localStorage.getItem("userData");
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        if ((userData.email === emailOrPhone || userData.number ===emailOrPhone) && userData.password === password) {

            window.location.href = "../cart/index.html";
        } else {
           
            alert("Authentication failed. Please check your credentials.");
        }
    } else {
       
        alert("Authentication failed. User not found.");
    }
});

document.getElementById("submit").addEventListener("click", () => {

            window.location.href = "../cart/index.html";
});


function showCart(){
    document.getElementById('cart').style.right='0px';
    document.getElementById('cart').style.transition='all 0.5s';
    showToCart();
  }
  
  function showToCart(){


    var carthtml='';
    
    var storedData = localStorage.getItem("new-cart");
    
    var num=0;
      if (storedData) {
        
        var userData = JSON.parse(storedData);
        //console.log(userData.length);
    
        if(userData.length==0){
            carthtml='<p style="text-align:center;font-weight:bold;margin-top:25px;">There is no item in the cart.</p>';
            num=0;
        }
        else{
            num=userData.length;
            userData.map((product)=>{
          carthtml+='<div class="p-3 mb-1"  style="position: relative;"><div class="row  border"><div class="col-4">'+
      ' <img src="'+product.img+'" style="width: 100%;" /></div><div class="col-8"><h5>'+product.name+'</h5>'+
        '<p class="m-0">Price: CAD 4</p><p class="m-0">Quantity: '+product.quantity+'</p>  </div></div></div>'
        })
        }
    
       
      }
      else{
        carthtml='<p style="text-align:center;font-weight:bold;margin-top:25px;">There is no item in the cart.</p>';
        num=0;
    }
    
      document.getElementById('cart-box').innerHTML=carthtml;
      document.getElementById("cart-number").innerHTML=num;
    
    }
s    
  
  function hideCart(){
    document.getElementById('cart').style.right='-350px';
    document.getElementById('cart').style.transition='all 0.5s';
  
  }
  
  
  showToCart();
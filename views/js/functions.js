//yahan pr saare fetch krne wale functions aayenge

function fetchmenu(done) {
  $.get("/api/menu", function (done) {
    done(data);
  });
}

function fetchmenuitembyid(id, done) {
  $.get("/api/menu", function (data) {
    let temp = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        temp = data[i];
      }
    }
    done(temp);
  });
}

function fetchmenubystartend(start, end, done) {
  $.get("/api/menu", function (data) {
    let temp = [];
    for (let i = start; i < end; i++) {
      temp.push(data[i]);
    }
    done(temp);
  });
}

// function fetchbreakfast(done){
//   $.get('/api/menu',function(data){
//     let temp=0;
//     for(let i=0;i<5;i++){
//       temp=data[]
//     }
//   })
// }

function fetchcontact(done) {
  $.get("/api/contact", function (data) {
    done(data);
  });
}

function fetchreservation(done) {
  $.get("/api/reservation", function (data) {
    done(data);
  });
}

function fetchtestimonial(done) {
  $.get("/api/testimonial", function (data) {
    done(data);
  });
}

function fetchpostrecipe(done) {
  $.get("/api/postrecipe", function (data) {
    done(data);
  });
}

function fetchcartitems(done) {
  $.get("/api/cart", function (data) {
    done(data);
  });
}

//yahan se saare post wale functions aayenge

function addcontact(name, email, phone, message, done) {
  $.post(
    "/api/contact",
    {
      name: name,
      email: email,
      phone: phone,
      message: message,
    },
    function (data) {
      done(data);
    }
  );
}

function addreservation(
  name,
  email,
  phonenumber,
  date,
  time,
  noofpersons,
  instructions,
  done
) {
  $.post(
    "/api/reservation",
    {
      name: name,
      email: email,
      phonenumber: phonenumber,
      date: date,
      time: time,
      noofpersons: noofpersons,
      instructions: instructions,
    },
    function (data) {
      done(data);
    }
  );
}

function addpostrecipe(name, phone, email, recipe, recipeimage, done) {
  $.post(
    "/api/postrecipe",
    {
      name: name,
      phone: phone,
      email: email,
      recipe: recipe,
      recipeimage: recipeimage,
    },
    function (data) {
      done(data);
    }
  );
}

function createreview(product) {
  return $(`
  
  
            <div class="mySlides">
              <div class="user-img">
                <img src="${product.image}" alt="" />
                <span class="symbol"><i class="fas fa-quote-left" style="color: white;"></i></span>
              </div>
              <div class="textofreview">
              ${product.comment}
              </div>
              <div>
                <h3><b>${product.name}</b></h3>
                <h5>${product.designation}</h5>
              </div>
            </div>
  
  `);
}

function createmenuitem(product) {
  return $(
    `
    <div class="menus d-flex">
          <div class="image">
            <img
              src="${product.image}"
              alt=""
              style="height: 100px; width: 100px; border-radius: 50%;"
            />
          </div>
          <div class="text">
            <div class="d-flex">
              <div class="one-half">
                <h3>${product.dishname}</h3>
              </div>
              
            </div>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="one-forth">
                <span class="price">₹${product.price}</span>
                <span style="margin-left: 50px;"
              ><button onclick="buying(event)" class="btn btn-primary">Buy Now</button></span
            >
              </div>
            
          </div>
        </div>
    `
  );
}

function buying(event) {
  console.log(event.target.id);
  fetchmenuitembyid(event.target.id, createcart);
}

// function createproduct(product) {
//   return $(`
//     <div class="menus d-flex">
//           <div class="image">
//             <img
//               src="${product.image}"
//               alt=""
//               style="height: 100px; width: 100px; border-radius: 50%;"
//             />
//           </div>
//           <div class="text">
//             <div class="d-flex">
//               <div class="one-half">
//                 <h3>${product.dishname}</h3>
//               </div>
//               <div class="one-forth">
//                 <span class="price">&#8377 ${product.price}</span>
//               </div>
//             </div>
//             <span style="margin-left: 50px;"
//               ><button onclick="myclick(${product.id})" class="btn btn-primary">Buy Now</button></span
//             >
//           </div>
//         </div>
//     `);
// }

// function myclick(id) {
//   console.log(id);
//   fetchmenuitembyid(id, createcart);
// }

function createcart(product) {
  $.post(
    "/api/cart",
    {
      dishname: product.dishname,
      price: product.price,
      image: product.image,
      dishdescription: product.dishdescription,
    },
    function (cartadded) {
      window.alert("Successfully added item" + cartadded.dishname + " to cart");
    }
  );
}



function addcart(product) {
  return $(`
  <div class="row bg-white text-info m-2">
  <div class="col-4">
 <img src="${product.image}" width="200px" height="300px"> 
 </div>
  <div class="col d-flex justify-content-center">
 <div id=${product.id} class="cart_details p-3">
<br>
<div class="font-weight-bolder text-center p-2">${product.dishname}</div>
<br>
 <div class="font-weight-bolder text-center p-2">${product.dishdescription}</div>
<br>
<div class="font-weight-bolder text-center p-2" style="color:blue;">&#8377 ${product.price}</div>
<br>
<button onclick="deletemenuitembyid(event)" class="btn btn-danger">Remove From Cart</button>
</div>
</div>
  </div>
  `);
}

// function buying(event){
//   console.log(event.target.parentElement.id);
//   fet
// }

function fetchCartDone(cart_list, carts) {
  for (cart of carts) {
    cart_list.append(addcart(cart));
  }
}


function deletemenuitembyid(event) {
  $.get("/api/cart/delete", {_id: event.target.parentElement.id }, (data) => {
    refreshcart();
    window.alert(data.message);
  });
}

function refreshcart() {
  let cart_list = $("#cart_list");
  cart_list.empty();
  fetchcartitems((carts) => {
    fetchCartDone(cart_list, carts);

  });
}
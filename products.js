const products=
 [
  {
    "id": 1,
    "name": "Electric Toothbrush",
    "category": "Oral Care",
    "price": 3500,
    "currency": "PKR",
    "image": "assets/images/products1.jpg",
    "description": "Rechargeable electric toothbrush for effective daily cleaning.",
    "inStock": true

  },
  {
    "id": 2,
    "name": "Whitening Toothpaste",
    "category": "Toothpaste",
    "price": 850,
    "currency": "PKR",
    "image": "assets/images/products2.png",
    "description": "Toothpaste designed to help remove surface stains and brighten teeth.",
    "inStock": true
  },
  {
    "id": 3,
    "name": "Dental Floss",
    "category": "Oral Care",
    "price": 450,
    "currency": "PKR",
    "image": "assets/images/product3.png",
    "description": "Gentle dental floss for cleaning between teeth and along the gumline.",
    "inStock": true
  },
  {
    "id": 4,
    "name": "Mouthwash",
    "category": "Oral Care",
    "price": 950,
    "currency": "PKR",
    "image": "assets/images/product4.png",
    "description": "Refreshing mouthwash for maintaining fresh breath and oral hygiene.",
    "inStock": true
  },
  {
    "id": 5,
    "name": "Soft Bristle Toothbrush",
    "category": "Toothbrush",
    "price": 300,
    "currency": "PKR",
    "image": "assets/images/product5 .png",
    "description": "Soft-bristle toothbrush suitable for gentle daily brushing.",
    "inStock": true
  },
  {
    "id": 6,
    "name": "Interdental Brush",
    "category": "Oral Care",
    "price": 650,
    "currency": "PKR",
    "image": "assets/images/product6.png",
    "description": "Small interdental brushes designed to clean hard-to-reach spaces.",
    "inStock": true
  },
  {
    "id": 7,
    "name": "Teeth Whitening Kit",
    "category": "Whitening",
    "price": 4500,
    "currency": "PKR",
    "image": "assets/images/product7.png",
    "description": "Professional-style teeth whitening kit for a brighter smile.",
    "inStock": true
  },
  {
    "id": 8,
    "name": "Orthodontic Wax",
    "category": "Braces Care",
    "price": 550,
    "currency": "PKR",
    "image": "assets/images/product8.png",
    "description": "Dental wax designed to reduce irritation caused by braces.",
    "inStock": true
  },
  {
    "id": 9,
    "name": "Kids Dental Care Kit",
    "category": "Kids",
    "price": 1200,
    "currency": "PKR",
    "image": "assets/images/product9.png",
    "description": "Child-friendly dental care kit including toothbrush and toothpaste.",
    "inStock": true
  },
  {
    "id": 10,
    "name": "Tongue Cleaner",
    "category": "Oral Care",
    "price": 400,
    "currency": "PKR",
    "image": "assets/images/product10.png",
    "description": "Reusable tongue cleaner for maintaining a fresh and clean mouth.",
    "inStock": true
  },

  {
    "id": 11,
    "name": "Kids Electric Toothbrush",
    "category": "Kids",
    "price": 2800,
    "currency": "PKR",
    "image": "assets/images/product11.png",
    "description": "Gentle electric toothbrush designed specifically for children.",
    "inStock": true
  },
  {
    "id": 12,
    "name": "Sensitive Teeth Toothpaste",
    "category": "Toothpaste",
    "price": 900,
    "currency": "PKR",
    "image": "assets/images/product12.png",
    "description": "Toothpaste formulated for people with sensitive teeth.",
    "inStock": true
  },

]



const container = document.getElementById("product")


function all(){



container.innerHTML=  ``




    for (let i=0;  i < products.length; i++) {
        

    let cat = products[i].category
    let name = products[i].name
    let price = products[i].price
    let desc = products[i].description
    let img = products[i].image
   





        container.innerHTML += `<div class="product-card">
    <div class="product-image">
      <img src="${img}" alt="${name}">
    </div>

    <div class="product-content">
        <span class="product-category">${cat}</span>

        <h3>${name}</h3>

        <p>
           ${desc}
        </p>
         
         

        <div class="product-bottom">
            <span class="product-price">${price}</span>
            <button class="buy-btn">Buy Now</button>
        </div>
    </div>
</div>`
        
    }



}


all()




function filtration(product){


  

container.innerHTML=  ``






   for (let i=0;  i < products.length; i++) {
        

  // product === products.category


    let cat = products[i].category
    let name = products[i].name
    let price = products[i].price
    let desc = products[i].description
    let img = products[i].image
    

if(product === "All" || product === cat){


   container.innerHTML +=`
   





        <div class="product-card">
    <div class="product-image">
      <img src="${img}" alt="${name}">
    </div>

    <div class="product-content">
        <span class="product-category">${cat}</span>

        <h3>${name}</h3>

        <p>
           ${desc}
        </p>
         
         

        <div class="product-bottom">
            <span class="product-price">${price}</span>
            <button class="buy-btn">Buy Now</button>
        </div>
    </div>
</div>`
        
   }}
  }

  all()

  function sortProducts(sortPro){


   
    
    

if(sortPro === "low"){


  products.sort(function(a,b){

    return a.price - b.price


  })


}

if(sortPro === "high"){



  products.sort(function(a,b){

    return b.price - a.price
  })
}


    
  all()




  }


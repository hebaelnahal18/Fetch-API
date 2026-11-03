
// Fetch Api
fetch("https://forkify-api.jonas.io/api/v2/recipes?search=pizza")
  .then((response) => response.json())
  .then((result) => {
    let recipes = result.data.recipes;
    let data = "";
    recipes.forEach((recipe) => {
      data += `
             <div class="md:col-4  text-center mb-1">
        <img src="${recipe.image_url}" alt="" class="w-100 h-75">
        <h4>${recipe.title}</h4>
        <h6>${recipe.publisher}</h6>
      </div>
          `;
    });
    document.querySelector(".row").innerHTML = data;
  });


// Async Await Fetch Api
// let ALLproducts;
// (async function getData() {
//   let response = await fetch("https://dummyjson.com/products");
//   let result = await response.json();
//   ALLproducts = result.products;
//   let data = "";
//   ALLproducts.forEach((product) => {
//     data += `
//              <div class="md:col-4  text-center mb-1 ">
//         <img src="${product.images[0]}" alt="" class="w-100 h-75">
//         <h4>${product.title}</h4> 
//         <h6>${product.price}$</h6>
//       </div>
//           `;
//   });
//   document.querySelector(".row").innerHTML = data;
// })();

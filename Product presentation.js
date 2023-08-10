let newDate = JSON.parse(localStorage.getItem("dataForEdit"));
let id = JSON.parse(localStorage.getItem("idForPresentation"));

console.log(newDate);
object = {};
newDate.forEach((item) => {
if (item.id === id) {
    
    object = item;
}
});

console.log(object)
let Title = document.getElementById('Title')
Title.innerText = object.title
let Discrubtion = document.getElementById('Discrubtion')
Discrubtion.innerText = object.description
let Category = document.getElementById('Category')
Category.innerText = object.category
let Price = document.getElementById('Price')
Price.innerText = object.Price
let Quantity = document.getElementById('Quantity')
let img = document.getElementById('img')
img.src = object.image

localStorage.setItem("productsUpdate", '');
localStorage.setItem("productsUpdate", JSON.stringify(newDate));
let newDate = JSON.parse(localStorage.getItem("dataForEdit"));
let id = JSON.parse(localStorage.getItem("idForEdit"));
object = {};


newDate.forEach((item) => {
  if (item.id === id) {
    console.log(item);
    object = item;
  }
});
console.log(object)
let title = document.getElementById("title");
let category = document.getElementById("category");
let price = document.getElementById("price");
let imgUrl = document.getElementById("imgUrl");
title.value = object.title;
category.value = object.category;
price.value = object.price;
imgUrl.value = object.image;
description.value = object.description;

let Add = document.getElementById("enter");
Add.addEventListener("click", () => {

  // let quantity = document.getElementById('quantity')
  let description = document.getElementById("description");
  newDate.forEach((item) => {
    if (item.id === id) {
      console.log(item);
      item.title = title.value;
      item.category = category.value;
      item.price = price.value;
      item.image = imgUrl.value;
      item.description = description.value;
    }
  });
  localStorage.setItem("productsUpdate", '');
  localStorage.setItem("productsUpdate", JSON.stringify(newDate));
});
console.log(newDate)

let newDate = []

if (localStorage.getItem("products")) {
    let a = JSON.parse(localStorage.getItem("products"));
    newDate.push(...a);
  }



let Add = document.getElementById('enter')
Add.addEventListener('click', () => {
    var object = {
        id: 0,
        title: "",
        price: 0,
        description: '',
        category: "",
        image: '',
        rating: {}
    }
    let id = Number(localStorage.getItem('id'))
    let title = document.getElementById('title')
    let category = document.getElementById('category')
    let price = document.getElementById('price')
    let imgUrl = document.getElementById('imgUrl')
    // let quantity = document.getElementById('quantity')
    let description = document.getElementById('description')
    object.id = id
    object.title = title.value
    object.category = category.value
    object.price = price.value
    object.image = imgUrl.value
    object.description = description.value
    newDate.push(object)
    localStorage.setItem('products', JSON.stringify(newDate))
    console.log(JSON.parse(localStorage.getItem('products')))
})

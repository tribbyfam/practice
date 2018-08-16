let ul = document.getElementsByTagName("ul")[0]

//container class
class myProducts{
 constructor(){
   this.all = []
 }

//adds an item to the end of Products array
  add(items) {
    this.all.push(items);
  }
}

//individual class
class Product{
  constructor(id, name){
    this.id = id;
    this.name = name;
  }
}

//getting data
axios.get('https://www.redbullshopus.com/products.json')
.then(function (response) {
  let title = response.data.products;

  console.log(response.data.products)
  // let image = response.products.images;
  // let items = new myProducts;

  // //looping
 response.data.products.forEach((item) => {
    console.log(item)
    console.log(item.images[0].src);
    console.log(item.options[0])
    console.log(item.tags[0]);
   
    let li = document.createElement("li")

  
    li.innerHTML = `<img src = ${item.images[0].src}> <p> Choose ${item.options[0]} </p> <p> ${item.tags[0]} </p>  `
    // li.innerHTML = item.title

    ul.append(li)
  })
}).catch(function (error) {
    console.log(error); 
})
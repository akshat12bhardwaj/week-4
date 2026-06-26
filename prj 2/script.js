let bread_arr = [
  {
    name: "Chesse Bread",
    price: 4.5,
    src: "https://assets.nicepagecdn.com/d2cc3eaa/3256687/images/cheese-bread2.jpg",
    alt: "bread-1",
  },
  {
    name: "French Bread",
    price: 7.25,
    src: "https://assets.nicepagecdn.com/d2cc3eaa/3256687/images/jhjhjh.jpg",
    alt: "bread-2",
  },
  {
    name: "Milk Bread",
    price: 4.75,
    src: "https://assets.nicepagecdn.com/d2cc3eaa/3256687/images/hg.jpg",
    alt: "bread-3",
  },
  {
    name: "Mixed Grain Bread",
    price: 4.25,
    src: "https://assets.nicepagecdn.com/d2cc3eaa/3256687/images/j.jpg",
    alt: "bread-4",
  },
  {
    name: "Farming Bread",
    price: 5.5,
    src: "https://assets.nicepagecdn.com/d2cc3eaa/3256687/images/hh.jpg",
    alt: "bread-5",
  },
  {
    name: "Baguette",
    price: 4.5,
    src: "https://assets.nicepagecdn.com/d2cc3eaa/3256687/images/r1.jpg",
    alt: "bread-6",
  },
];

let breads = document.querySelectorAll(".product");
let price_selector = document.querySelector("#price");

let main_el = document.querySelector("main");

bread_arr.forEach(bread=>{
    product_card(bread)
})

function product_card(bread) {
  const div_el = document.createElement("div");
  const img_el = document.createElement("img");
  const p_el = document.createElement("p")
  const sub_text = document.createElement("p")
  const button =document.createElement("button")
  button.textContent="Add to cart"
  sub_text.classList.add('sub-text')
  sub_text.textContent = bread.price
  p_el.textContent=bread.name
  div_el.classList.add("product");
  main_el.append(div_el);

  img_el.src = bread.src;
  img_el.alt = bread.alt;

  div_el.append(img_el);
  div_el.append(p_el)
  div_el.append(sub_text)
  div_el.append(button)
}


price_selector.addEventListener("change", (event) => {
  let val = event.target.value;
  if (val == "under-$5") {
    let filter_bread = bread_arr.filter((bread) => bread.price < 5);
    main_el.innerHTML=""
    filter_bread.forEach(bread=>{
      product_card(bread)
    })
  }
  if (val=="all-product") {
    main_el.innerHTML=""
     bread_arr.forEach(bread=>{
      product_card(bread)
    })
  }
  if (val=="above-$6") {
    let filter_bread = bread_arr.filter((bread) => bread.price>6);
    main_el.innerHTML=""
    filter_bread.forEach(bread=>{
      product_card(bread)
    })
  }
  if (val=="5-to-6") {
     let filter_bread = bread_arr.filter((bread) => bread.price<=6 && bread.price>=5);
    main_el.innerHTML=""
    filter_bread.forEach(bread=>{
      product_card(bread)
    })
  }
});


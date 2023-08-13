let products = {
    data: [
        // {
        //     productName: "",
        //     price: "35",
        //     image: "",
        // },
        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
        },

        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
            price: "34",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
            price: "35",
            image: "data:image/jpeg;base64,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"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ BLACK",
            price: "22",
            image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
            price: "38",
            image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
        },

        {
            productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
            price: "42",
            image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
        },

        {
            productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
            price: "37",
            image: "https://product.hstatic.net/1000378196/product/z3381587303453_5842f45eb417f8a1c428e660ed766cd4_5a355bb37d2e4c429e8778030c0e8b14_master.jpg"
        },

        {
            productName: "LEVENTS® EARTH TEE/ PURPLE",
            price: "36",
            image: "https://product.hstatic.net/1000378196/product/z3370728736105_b355c87d43431b4afd035723f521e029_0ac53717a2ae4855a9d4411ecc9b7f3b_master.jpg"
        },

        {
            productName: "LEVENTS® PLAY LOGO TEE/ PINK",
            price: "29",
            image: "https://product.hstatic.net/1000378196/product/z3393717676595_70abb4322642acaa3572b7f19d4814f4_3fe4f78e891b4443a017966addcb462e_master.jpg"
        },
    ]
}


for (let i of products.data) 
{

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);

}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productsName = document.querySelectorAll(".product-name")
    let price = document.querySelectorAll('h6')

    productsName.forEach((items, index) => 
    {
        if (items.innerText.includes(searchInput)){
            cards[index].classList.remove("hide")
        } else{
            cards[index].classList.add("hide")
        }
    }
    )
}

)
  
  

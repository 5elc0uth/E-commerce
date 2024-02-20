const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        prce: 119,
        colors: [
            {
                code: "black",
                img: "images/nike air force 1 high hyperfuse1.webp",
            },
            {
                code: "lightgreen",
                img: "images/nike air force 1 high hyperfuse2.jpeg",
            },
            {
                code: "lightgray",
                img: "images/nike air force 1 high hyperfuse3.jpg",
            },
            {
                code: "lightgray",
                img: "images/nike air force 1 high hyperfuse4.jpg",
            },
            {
                code: "lightgray",
                img: "images/nike air force 1 high hyperfuse5.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 150,
        colors: [
            {
                code: "lightgray",
                img: "images/jay's1.webp",
            },
            {
                code: "green",
                img: "images/jay's2.jfif",
            },
            {
                code: "black",
                img: "images/jay's3.jpg",
            },
            {
                code: "blue",
                img: "images/jay's4.jpeg",
            },
            {
                code: "yellow",
                img: "images/jay's5.webp",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "Images/blazer.webp",
            },
            {
                code: "red",
                img: "Images/blazer2.jpg",
            },
            {
                code: "black",
                img: "Images/blazer3.webp",
            },
            {
                code: "blue",
                img: "Images/blazer4.jpg",
            },
            {
                code: "green",
                img: "Images/blazer5.webp",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            { 
                code: "black",
                img: "Images/crater.jpg",
            },
            {
                code: "lightgray",
                img: "Images/crater2.jpg",
            },
            {
                code: "blue",
                img: "Images/crater3.jpg",
            },
            {
                code: "purple",
                img: "Images/crater4.png",
            },
            {
                code: "pink",
                img: "Images/crater5.webp",
            }, 
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            { 
                code: "gray",
                img: "Images/hippie.webp",
            },
            {
                code: "black",
                img: "Images/hippie2.jpg",
            },
            {
                code: "purple",
                img: "Images/hippie3.jpg",
            },
            {
                code: "green",
                img: "Images/hippie4.jfif",
            },
            {
                code: "blue",
                img: "Images/hippie5.jpg",
            }, 
        ],
    },
    {
        id: 6,
        title: "Puma",
        price: 75,
        colors: [
            { 
                code: "black",
                img: "Images/puma.jpg",
            },
            {
                code: "blue",
                img: "Images/puma2.webp",
            },
            {
                code: "green",
                img: "Images/puma3.webp",
            },
            {
                code: "gray",
                img: "Images/puma4.jpg",
            },
            {
                code: "pink",
                img: "Images/puma5.jpg",
            }, 
        ],
    },
    {
        id: 7,
        title: "Addidas",
        price: 125,
        colors: [
            { 
                code: "gray",
                img: "Images/addidas.jpg",
            },
            {
                code: "yellow",
                img: "Images/addidas2.jpg",
            },
            {
                code: "green",
                img: "Images/addidas3.jpg",
            },
            {
                code: "blue",
                img: "Images/addidas4.jpg",
            },
            {
                code: "black",
                img: "Images/addidas5.jpg",
            }, 
        ],
    },
    {
        id: 8,
        title: "Converse",
        price: 100,
        colors: [
            { 
                code: "red",
                img: "Images/all star.png",
            },
            {
                code: "green",
                img: "Images/all star2.jpg",
            },
            {
                code: "blue",
                img: "Images/all star3.jpg",
            },
            {
                code: "black",
                img: "Images/all star4.jpg",
            },
            {
                code: "purple",
                img: "Images/all star5.png",
            }, 
        ],
    },
    {
        id: 9,
        title: "Yeezys",
        price: 999,
        colors: [
            { 
                code: "black",
                img: "Images/yeezys.jpg",
            },
            {
                code: "gray",
                img: "Images/yeezys2.jpg",
            },
            {
                code: "orange",
                img: "Images/yeezys3.webp",
            },
            {
                code: "red",
                img: "Images/yeezys4.jpg",
            },
            {
                code: "multicolor",
                img: "Images/yeezys5.jpg",
            }, 
        ],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color, .color2, .color3, .color4, .color5");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        
        //change the current slide
        wrapper.style.transform = `translateX(${-50 * index}vw)`;

        //change the chosen product
        chosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        //assigning new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
}); 

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});


currentProductSizes.forEach((size,index) => {
    size.addEventListener("click",() => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor="black"
        size.style.color="white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display="flex"
})

close.addEventListener("click", ()=>{
    payment.style.display="none"
})
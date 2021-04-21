
let images = document.querySelector(".shop-item-image")

function loop_over_img(){
    for (image in images){
        `
        <img class="shop-item-image" id="Album 1" src="./Images/Album1.png" >
        `
    }
}

const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];

const clickable_image1 = document.getElementById('Album 1')
const clickable_image2 = document.getElementById('Album 2')
const clickable_image3 = document.getElementById('Album 3')
const clickable_image4 = document.getElementById('Album 4')
const cartListDiv = document.querySelector('.cart')

clickable_image1.addEventListener('click',()=>{
    
    const div = document.createElement('div')

    div.classList.add('img-in-cart')
    
    div.innerHTML = `
    <img src="./Images/Album1.png" class = 'cartimg'>
    <p class='name'> Album 1</p>
    <p> 12.99</p>
    `
    cartListDiv.append(div)

})

clickable_image2.addEventListener('click',()=>{
    
    const div = document.createElement('div')

    div.classList.add('img-in-cart')
    
    div.innerHTML = `
    <img src="./Images/Album2.png" class = 'cartimg'>
    <p class='name'> Album 2</p>
    <p> 14.99</p>
    `
    cartListDiv.append(div)
})

clickable_image3.addEventListener('click',()=>{
    
    const div = document.createElement('div')

    div.classList.add('img-in-cart')
    
    div.innerHTML = `
    <img src="./Images/Album3.png" class = 'cartimg'>
    <p class='name'> Album 3</p>
    <p> 9.99</p>
    `
    cartListDiv.append(div)
})

clickable_image4.addEventListener('click',()=>{
    
    const div = document.createElement('div')

    div.classList.add('img-in-cart')
    
    div.innerHTML = `
    <img src="./Images/Album4.png" class = 'cartimg'>
    <p class='name'> Album 4</p>
    <p> 19.99</p>
    `
    cartListDiv.append(div)
})

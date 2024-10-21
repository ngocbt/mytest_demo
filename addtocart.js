const product = [
    {
        id: 0,
        image: 'images/huyenchaubosua.jpg',
        title: 'Trà sữa hồng đào',
        price: 120, 
    },
    {
        id: 1,
        image: 'images/cf.jpeg',
        title: 'Cà phê đen',
        price: 60, 
    },
    {
        id: 2,
        image: 'images/olongbala.jpg',
        title: 'Ô long ba lá',
        price: 230, 
    },
    {
        id: 3,
        image: 'images/coccoc.jpg',
        title: 'Cóc cóc đác thơm',
        price: 100, 
    }
];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src="${image}" />
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>₫ ${price.toLocaleString()}.000</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Giỏ hàng của bạn đang trống";
        document.getElementById("total").innerHTML = "₫ 0.000";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items, index) => { // Pass index here
            var { image, title, price } = items;
            total += price; // Tính tổng giá
            document.getElementById("total").innerHTML = "₫ " + total.toLocaleString() + ".000"; // Định dạng hiển thị tổng giá
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src="${image}" />
                    </div>
                    <p style='font-size: 20px;'>${title}</p>
                    <h2 style='font-size: 20px;'>₫ ${price.toLocaleString()}.000</h2>
                    <button style='width: 6px; font-size: 12px; cursor: pointer;' onclick='delElement(${index})'>Xóa</button> <!-- Nút xóa sản phẩm -->
                </div>`
            );
        }).join('');
    }
}

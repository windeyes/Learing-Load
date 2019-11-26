//展示的图片
let showImg = $('.preview-img img');
let Id = location.search.substring(4);
//找到点击的这个手机对象
let arr = phoneData.find(e => {
    return e.pID == Id;
});
showImg.attr('src', arr.imgSrc)
//设置标题
$('.sku-name').text(arr.name);
// 设置价格
$('.dd em').text(arr.price);
let count = 1;
// 设置数量加
$('.choose-btns .add').on('click', function () {
    $('.choose-number').attr('value', ++count);
    $('.reduce').css('cursor','pointer') ;
})
//设置数量减
$('.reduce ').on('click',function(){
    if(count > 1){
        $('.choose-number').attr('value', --count);
    }
   else{
    $('.reduce').css('cursor','') ;
   }
})

//加入购物车
let shopCarBtn = $('.addshopcar');
// 点击按钮时操作
// 用于存储数据
let cardata = JSON.parse(localStorage.getItem('cardata')) || [];
shopCarBtn.on('click', function () {
    //判断是否存在
    let flag = false;
    allcount = parseInt($('.choose-number').val());
    cardata.forEach(element => {
        if (element.shopid == arr.pID) {
            element.count += allcount ;
            flag = true;
        }

    });
    if (!flag) {
        let obj = {
            shopid: arr.pID,
            img: arr.imgSrc,
            name: arr.name,
            price: arr.price,
            count:allcount,
            checked:true,
        }
        // push到数组中去
        cardata.push(obj);
    }
    // 存储数据
    localStorage.setItem('cardata', JSON.stringify
        (cardata));
    location.href='cart.html'
})


$(() => {
    let img = $('.preview-img img');
    let sku_name = $('.sku-name');
    let price = $('.dd em');
    // 获数量
    let choose_num = $('.choose-number');
    let id = location.search.substring(4);
    //得到当前商品的数据
    let target = phoneData.find(e => {
        return id == e.pID;
    })

    img.attr('src', target.imgSrc);
    sku_name.text(target.name);
    price.text(target.price);
    let arr = JSON.parse(localStorage.getItem('shopCarData')) || [];
    // 添加购物车
    $('.addshopcar').click(() => {
        let number;
        number = $('.choose-number').val();
        number = parseInt(number)
        // 判断是否本来就已经存在
        let exit = arr.find(e => {
            return e.pID == id;
        })
        if (exit) {
            console.log(exit)
            exit.number +=  number;
            
        } else {
            let obj = {
                pID: target.pID,
                img: target.imgSrc,
                name: target.name,
                number: number,
                price: target.price,
                isChecked:true
            }
            arr.push(obj);
        }
        // let json = JSON.parse(arr)
        localStorage.setItem('shopCarData', JSON.stringify(arr));
        location.href = 'cart.html';
    })
    // 点击加1
    $('.choose-amount .add').click(() => {
        let currentValue = $('.choose-number').attr('value');
        $('.choose-number').attr('value', ++currentValue);
        $('.reduce').css('cursor', 'pointer');
    })
    // 点击减1
    $('.reduce').on('click', () => {
        let currentValue = $('.choose-number').attr('value');
        if (currentValue > 1) {
            console.log(13);
            $('.choose-number').attr('value', --currentValue);
            $('.reduce').css('cursor', 'pointer');

        }
        else {
            $('.reduce').css('cursor', 'not-allowed');

            alert('不能小于1');
            return;
        }

    })

})
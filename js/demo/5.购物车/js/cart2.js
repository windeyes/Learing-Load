let cardata = JSON.parse(localStorage.getItem('cardata'));
//若其中有数据
if (cardata) {
  $('.empty-tip').hide();
  $('.cart-header').show();
  $('.total-of').show();
}
let htmlrow = '';
// 添加对象到页面中
cardata.forEach(e => {
  htmlrow += `<div class="item" data-id="${e.shopid}">
    <div class="row">
      <div class="cell col-1 row">
        <div class="cell col-1">
          <input type="checkbox" class="item-ck" ${e.checked ? 'checked' : ""}>
        </div>
        <div class="cell col-4">
          <img src="${e.img}" alt="">
        </div>
      </div>
      <div class="cell col-4 row">
        <div class="item-name">${e.name}</div>
      </div>
      <div class="cell col-1 tc lh70">
        <span>￥</span>
        <em class="price">${e.price}</em>
      </div>
      <div class="cell col-1 tc lh70">
        <div class="item-count">
          <a href="javascript:void(0);" class="reduce fl ">-</a>
          <input autocomplete="off" type="text" class="number fl" value="${e.count}">
          <a href="javascript:void(0);" class="add fl">+</a>
        </div>
      </div>
      <div class="cell col-1 tc lh70">
        <span>￥</span>
        <em class="computed">${e.count * e.price}</em>
      </div>
      <div class="cell col-1">
        <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
      </div>
    </div>
  </div>`;
})
$('.item-list').append(htmlrow);

//算出总价
function total() {
  // 找出选中的值
  let totalShoping = 0;
  let totalMoney = 0;
  cardata.forEach(e => {
    if (e.checked) {
      totalShoping += e.count;
      totalMoney += e.count * e.price;
    }
  })
  $('.selected').text(totalShoping);
  $('.total-money').text(totalMoney);
}
total();
//判断全选是否需要勾选
$('.item-ck').length == $('.item-ck:checked').length ? 
$('.pick-all').prop('checked',true)
:$('.pick-all').prop('checked',false);

//add
$('.add ').on('click', function () {
  let prev = $(this).prev();
  let value = prev.val();
  prev.attr('value', ++value);
  // 找到点击产品
  let id = $(this).parents('.item').attr('data-id');
  let thisshop = cardata.find(e => {
    return e.shopid == id;
  })
  thisshop.count++;
  let json = JSON.stringify(cardata);
  localStorage.setItem('cardata', json);
  total();
})
//reduce
$('.reduce').on('click', function () {
  //当小于1时return

  let next = $(this).next();
  let value = next.val();
  if (value == 1) {
    alert('商品数量不能小于1');
    return;
  }
  next.attr('value', --value);
  //找到产品
  // let id = $(this).parents('.item').attr('data-id');
  // let thisshop = cardata.find(e => {
  //   return e.shopid == id;
  // })
  // thisshop.count--;
  let thisshop = findObj($(this));
  thisshop.count--;
  let json = JSON.stringify(cardata);
  localStorage.setItem('cardata', json);
  total();
})
//设置点击选择商品
$('.item-ck').click(function () {
  // $('.itme-ck').length == $('.itme-ck:checked').length && $('.pick-all').prop('checkded',true);
  $('.item-ck').length == $('.item-ck:checked').length ? 
  $('.pick-all').prop('checked',true)
  :$('.pick-all').prop('checked',false);

  let thisShop = findObj($(this));
  console.log(thisShop)
  thisShop.checked = !thisShop.checked;
  let json = JSON.stringify(cardata);
  localStorage.setItem('cardata',json);
  total();
})

//完成全选按钮的功能
$('.pick-all').click(function(){
  let pickAllResult =  $('.pick-all').prop('checked');
  $('.item-ck').prop('checked', pickAllResult);
  cardata.forEach((e)=>{
    e.checked = pickAllResult;
  })
  let json = JSON.stringify(cardata);
  localStorage.setItem('cardata',json);
  total();
})
//鼠标聚焦的时候保留原来的数字
let current_num;
$('.number').focus(function(){
  current_num = $(this).val();
})

//鼠标失去焦点的时候计算总和并存储数据值到本地
$('.number').blur(function(){
 
  let value = parseInt($(this).val());
  if(((typeof value) != 'number') || value <1){
    alert('请输入一个大于零的数字');
    this.value = current_num;
    return;
  }
  let thisShop = findObj($(this));
  thisShop.count = value;
  let json = JSON.stringify(cardata);
  localStorage.setItem('cardata',json);
  total();

})


//返回当前的jq对象
function findObj(jqObj) {
  let id = jqObj.parents('.item').attr('data-id');
  let thisshop = cardata.find(e => {
    return e.shopid == id;
  })
  return thisshop;
}
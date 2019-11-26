/* 根据得到的数据，创建出商品列表 */
// console.log(phoneData);
// 一个一个的把商品创建出来，放到结构中
/* $(()=>{
  // 准备一个字符串，用于把所有的商品结构以字符串的形式先表达出来
  let html = ``;
  // 遍历数组，生成商品列表
  phoneData.forEach(e=>{
    // 生成结构
    html += `<li class="goods-list-item">
    <a href="detail.html?id=1">
      <div class="item-img">
        <img src="${e.imgSrc}" alt="">
      </div>
      <div class="item-title">${e.name}</div>
      <div class="item-price">
        <span class="now">¥${e.price}</span>
      </div>
      <div class="sold">
        <span> 已售 <em>${e.percent}% </em></span>
        <div class="scroll">
          <div class="per" style="width:${e.percent}%"></div>
        </div>
        <span>剩余<i>${e.left}</i>件</span>
      </div>
    </a>
    <a href="#" class="buy">
      查看详情
    </a>
  </li>`
  })

  $('.goods-list > ul').append(html);
}); */
$(()=>{
  let goods_list_item = '';
  let id;
  phoneData.forEach(e=>{
    goods_list_item += `<li class="goods-list-item">
    <a href="detail.html?id=${e.pID}">
      <div class="item-img">
        <img src="${e.imgSrc}" alt="">
      </div>
      <div class="item-title">${e.name}</div>
      <div class="item-price">
        <span class="now">¥${e.price}</span>
      </div>
      <div class="sold">
        <span> 已售 <em>${e.percent}% </em></span>
        <div class="scroll">
          <div class="per" style="width:${e.percent}%"></div>
        </div>
        <span>剩余<i>${e.left}</i>件</span>
      </div>
    </a>
    <a href="#" class="buy">
      查看详情
    </a>
  </li>`
  })
  // 用来存放li
  let good_list = $('.goods-list');
  good_list.append(goods_list_item);

})
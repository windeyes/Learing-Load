// 将所有data数据加载过来
let arr = phoneData;
// 放到这其中的ul中
let goods_list = $('.goods-list ul');
let html = "";
arr.forEach(e => {
    html += `
    <li class="goods-list-item">
    <a href="detail.html?id=${e.pID}">
      <div class="item-img">
        <img src="${e.imgSrc}" alt="">
      </div>
      <div class="item-title">${e.name}</div>
      <div class="item-price">
        <span class="now">${e.price}</span>
      </div>
      <div class="sold">
        <span> 已售 <em>${e.percent}% </em></span>
        <div class="scroll">
          <div class="per" style="width:69%"></div>
        </div>
        <span>剩余<i>${e.left}</i>件</span>
      </div>
    </a>
    <a href="#" class="buy">
      查看详情
    </a>
  </li>
    `
});
    goods_list.append(html)

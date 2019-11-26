$(()=>{
    let htmlrow ='';
    let arr = JSON.parse(localStorage.getItem('shopCarData'));
    arr.forEach(e => {
        htmlrow += `<div class="item" data-id="${e.pID}">
        <div class="row">
          <div class="cell col-1 row">
            <div class="cell col-1">
              <input type="checkbox" class="item-ck" ${e.isChecked ? 'checked':""}>
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
              <input autocomplete="off" type="text" class="number fl" value="${e.number}">
              <a href="javascript:void(0);" class="add fl">+</a>
            </div>
          </div>
          <div class="cell col-1 tc lh70">
            <span>￥</span>
            <em class="computed">${e.number * e.price}</em>
          </div>
          <div class="cell col-1">
            <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
          </div>
        </div>
      </div>`;
    });
    $('.item-list').append(htmlrow);
    $('.cart-header').removeClass();
    $('.empty-tip').hide();
    $('.total-of ').show();
    // 勾选时判断是否全选  注意 这是一个大坑
    // $('.item-list .item-ck').click();
    // let isChekcAll = $('.item-list .item-ck:checked').length == $('.item-list .item-ck').length;
    let isChekcAll = arr.find(e=>{
      return !e.isChecked;
    })
    $('.pick-all').prop('checked',!isChekcAll);
    $('.item-list').on('click','.item-ck',function(){
      console.log(123);
        let isChekcAll = $('.item-list .item-ck:checked').length == $('.item-list .item-ck').length;
        $('.pick-all').prop('checked',isChekcAll);
    })
    // 计算总和
    function totalchoice(){
      let total = 0;
      let totalMoney = 0
      arr.forEach(e=>{
        if(e.isChecked){
          total += parseInt(e.number) ;
          totalMoney += e.number*e.price;
        }
      })
      $('.selected').text(total) ;
      $('.total-money').text(totalMoney);
    }
    totalchoice();
    //点击勾选
    $('.item .item-ck').click(function(){
      // 找到点击的数据e
      let id = $(this).parents('.item').attr('data-id');
      //找到这个值，设置isChecked属性
      let changeValue = arr.find(e=>{
        return e.pID == id;
      })
      // 计算总数
      changeValue.isChecked = $(this).prop('checked');
      localStorage.setItem('shopCarData',JSON.stringify(arr))
      totalchoice();
    })
    //全选按钮
    $(".pick-all").click(function(){
      //  和按钮一起选中一起不选中
        $(".item-ck").prop('checked',$(this).prop('checked'));
        arr.forEach(e=>{
            e.isChecked = $(this).prop('checked');
        })
        localStorage.setItem('shopCarData',JSON.stringify(arr));
        totalchoice();
    })
    // 操作数量减
    $('.reduce').click(function(){
      let id = $(this).parents('.item').attr('data-id');
      let currentcount = $(this).parent().children('.number').val();
      if(currentcount == 1){
        return 0;
      }
      $(this).parent().children('.number').val(--currentcount);
      // 找出被改变了值的本地数据
      let changeNum = arr.find(e=>{
        return e.pID == id;
      })
      console.log(id);
      changeNum.number = currentcount;
      
      localStorage.setItem('shopCarData',JSON.stringify(arr))
      totalchoice();
    })
    //操作数量加
    $('.add').click(function(){
      let id = $(this).parents('.item').attr('data-id');
      let currentcount = $(this).parent().children('.number').val();
      $(this).parent().children('.number').val(++currentcount);
      // 找出被改变了值的本地数据
      let changeNum = arr.find(e=>{
        return e.pID == id;
      })
      changeNum.number = currentcount;
      localStorage.setItem('shopCarData',JSON.stringify(arr))
      totalchoice();
    })
    // 失去焦点时候添加
    // 获取焦点时候存取数据
    let currentNum;//获取焦点时候存取的d数据
    $('.number ').focus(function(){
      currentNum = $(this).val();
    })
    // 失去焦点的时候获取这个值
    $('.number').blur(function(){
      if(isNaN($(this).val()) || $(this).val().trim() == "" || parseInt($(this).val())<= 0){
        $(this).val(currentNum);
        alert('请输入一个有效的阿拉伯数字。例如：12')
        return;
      }
      let target = arr.find(e=>{
       
        return e.pID == $(this).parents('.item').attr('data-id')
        ;
       
      })
      target.number =  $(this).val();
      localStorage.setItem('cartListData',arr);
      totalchoice();
    })

})

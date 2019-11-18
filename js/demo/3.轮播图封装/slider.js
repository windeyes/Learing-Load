/**
 * 
 * @param {Number} width 轮播图区域的宽度
 * @param {Number} height 轮播图区域的高度
 * @param {Number} transitionTime 过度动画使用的时间
 * @param {Number} SpendTime 每张照片的切换时间
 */
function slider(width,height,transitionTime, SpendTime,color,choiceColor) {
    //为各个值设置默认值
    width = (width || 900) + 'px';
    height = (height || 400) + 'px';
    transitionTime = (transitionTime  || 1000) +  'ms';
    SpendTime = SpendTime || 1500;
    color = color || "pink";
    choiceColor = choiceColor || "white";
    function $(cl) {
        return document.querySelector(cl);
    }
    let rightBtn = $(".right");
    let leftBtn = $(".left");
    let ul = $(".box .imgul");
    let box = $(".box");
    box.style.width = width ;
    transitionTime = transitionTime ;
    ul.style.transform = `translate(-${box.clientWidth}px)`;
    //注意此处设置为0 避免第一次动画
    ul.style.transitionDuration = '0s';
    SpendTime = SpendTime ;
    let count = 1;
    //克隆最后一张照片放到第一个位置
    let lilast = ul.children[ul.children.length - 1];
    let cloneOne = lilast.cloneNode(true);
    ul.insertBefore(cloneOne, ul.children[0]);
    //克隆第二张图片到最后一个位置
    let lisecond = ul.children[1];
    let cloneTwo = lisecond.cloneNode(true);
    ul.appendChild(cloneTwo);
    // 注意此处的clientWidth值设了没有效果
    let lis = document.querySelectorAll(".box .imgul li");
    ul.style.width = 100 * ul.children.length + '%';
    lis.forEach(function (e) {
        e.style.width = `${ul.clientWidth / ul.children.length}px`;
        e.style.height = height ;
    });
    //右
    rightBtn.addEventListener('click', function () {
        clearInterval(timer);
        count++;
        //恢复时间
        ul.style.transitionDuration = transitionTime;
        if (count > ul.children.length - 1) {
            count = ul.children.length - 1;
        }
        ul.style.transform = `translate(-${count * box.clientWidth}px)`;
        // 切换btn的样式
        count > 0 && count < 7 && choiceBtn();
        setTimeout(function () {
            timer = setInterval(function () {
                rightBtn.click();
            }, SpendTime);
        }, 10);
    });
    // 自动
    let timer = setInterval(function () {
        rightBtn.click();
    }, SpendTime);

    //左
    leftBtn.addEventListener('click', function () {
        clearInterval(timer);
        count--;
        //恢复时间
        ul.style.transitionDuration = transitionTime;
        if (count < 0) {
            count = 0;
        }
        ul.style.transform = `translate(-${count * box.clientWidth}px)`;
        count > 0 && count < 7 && choiceBtn();
        setTimeout(function () {
            timer = setInterval(function () {
                rightBtn.click();
            }, SpendTime);
        }, 10);
    });

    // 判断是否到了最后
    ul.addEventListener('transitionend', function () {

        if (count == ul.children.length - 1) {
            count = 1;
            ul.style.transitionDuration = '0s';
            ul.style.transform = `translate(-${count * box.clientWidth}px)`;
            count > 0 && count < 7 && choiceBtn();
            setTimeout(function () {
                ul.style.transitionDuration = transitionTime;
            }, 10);
        }
        if (count == 0) {
            count = ul.children.length - 2;
            ul.style.transitionDuration = '0s';
            ul.style.transform = `translate(-${count * box.clientWidth}px)`;
            count > 0 && count < 7 && choiceBtn();
            setTimeout(function () {
                ul.style.transitionDuration = transitionTime;
            }, 10);
        }
    })

    //按钮部分
    let btnul = $(".box .btnul");
    for (let i = 0; i < lis.length - 2; i++) {
        let createBtnulLi = document.createElement("li");
        btnul.appendChild(createBtnulLi);
    }
    
    let btnulLi = document.querySelectorAll(".box .btnul li");
    btnulLi.forEach(function(e){
        e.style.backgroundColor = color || "pink";
    });
    btnulLi[0].style.backgroundColor = choiceColor ;
   
    function choiceBtn() {
         btnulLi.forEach(function(e){
            e.style.backgroundColor = color;
        });
        btnulLi[count - 1].style.backgroundColor = choiceColor; 
    }
    //   图片索引 0 1 2 3 4 5 6 7
    //   按钮索引   0 1 2 3 4 5
    for(let i = 0;i < btnulLi.length;i++){
        btnulLi[i].onmouseover = function(){
            count = i;
        }
    }

}

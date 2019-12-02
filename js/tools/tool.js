function MyTools() {
    //一个ajax
    this.myajax= function (obj){
        obj.url = obj.url || '';
        obj.type = obj.type || 'get';
        //遍歷data返回url編碼格式的字符串
        let arr = [];
        for(let key in obj.data){
            arr.push(key+'='+obj.data[key]);
        }
        obj.data = arr.join('&');
    
        let xhr = new XMLHttpRequest();
        //如果是get將數據放到url中去
        obj.type == 'get' && (obj.url += '?' + obj.data)
        xhr.open(obj.type,obj.url);
        if(obj.type == 'post'){
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(obj.data);
        }else{
            xhr.send();
        }
        
        xhr.onreadystatechange = function(){
            if(xhr.status == 200 && xhr.readyState == 4){
                let response = xhr.responseText;
                if(xhr.getResponseHeader('Content-Type').indexOf('json')!==-1){
                    response = JSON.parse(xhr.responseText);
                }
                obj.callback && obj.callback(response);
            }
            
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*    function myajax(obj) {
       let xhr = new XMLHttpRequest();
       obj=obj||{};
       obj.type = obj.type || 'get';
       obj.data = obj.data || {};
       let arr = [];
       // 若使用get方法将data对象转换为url编码格式
       if (obj.type == 'get') {
           for (let key in obj.data) {
               arr.push(`${key}=${obj.data[key]}`)
           }
           obj.url += "?" + arr.join('&');
       }
       xhr.open(obj.type, obj.url);
       if(obj.type=='get'){
           xhr.send();
       }else{
           //加个请求头
           //再在send里面加需要的键值对
           xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
           let arr = [];
           for (let key in obj.data) {
               arr.push(`${key}=${obj.data[key]}`)
           }
           xhr.send(arr.join('&'));
       }
       xhr.onreadystatechange = function () {
           if (xhr.status == 200 && xhr.readyState == 4) {
               //调用回调
               let rsText = JSON.parse(xhr.responseText)
               obj.callback && obj.callback(rsText);
           }
    
       }
    } */
  
    //深度拷贝

    //一个sort的实现
    Array.prototype.mysort = function (fn) {
        if (fn) {
            let num = this.length - 1;
            let nownum;
            for (let i = 0; i < this.length - 1; i++) {
                let flag = true;
                for (let j = 0; j < num; j++) {
                    let item;
                    if (fn(this[j], this[j + 1]) > 0) {
                        item = this[j];
                        this[j] = this[j + 1];
                        this[j + 1] = item;
                        flag = false;
                        nownum = j + 1;
                    }
                }
                num = nownum;
                if (flag) {
                    break;
                }
            }
        } else {
            let num = this.length - 1;
            let nownum;
            for (let i = 0; i < this.length - 1; i++) {
                let flag = true;
                for (let j = 0; j < num; j++) {
                    let item;
                    if (this[j].toString() > this[j + 1].toString()) {
                        item = this[j];
                        this[j] = this[j + 1];
                        this[j + 1] = item;
                        flag = false;
                        nownum = j + 1;
                    }
                }
                num = nownum;
                if (flag) {
                    break;
                }
            }


        }
        return this;

    }

    //判断时闰年还是平年
    this.knowYear = function (year) {
        /* 判断一个年份是闰年还是平年 */
        let year = year;
        // 2 使用if判断
        /* 闰年
            - 可以被400整除 2000年
            - 可以被4整除但是不能被100整除 2008年
        */
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            alert('输入的年份是闰年');
        } else {
            alert('输入的年份不是闰年');
        }
    }


    // 最小到做大的随机不重复整数
    this.norepeatRandomNum = function (min, max) {
        // 从最小到最大的整数数列
        let arr = [];
        let brr = [];
        for (let i = min; i <= max; i++) {
            arr.push(i);
        }
        do {
            let r = Math.floor(Math.random() * arr.length);
            // 打乱随机排列后push到brr
            brr.push(arr[r]);
            arr.splice(r, 1);
        } while (arr.length > 0)
        return brr;

    }

    //获得随机数值(左臂右开区间)
    this.randomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //封装放大镜  参数：预览框、预览悬浮块，大图显示区间，大图
    this.Zoom = function (small, mask, big, bigImg) {
        // 鼠标位置减去small的左边，减去mask的一半
        small.onmousemove = function (e) {
            big.style.display = "block";
            mask.style.display = "block"
            let maskLeft = e.pageX - small.offsetLeft - mask.offsetWidth / 2;
            let maskTop = e.pageY - small.offsetTop - mask.offsetHeight / 2;
            maskLeft = maskLeft > 0 ? maskLeft : 0;
            maskTop = maskTop > 0 ? maskTop : 0;
            //  判断是否超界 判断左边距是否大于大盒子减去照片  宽度  
            maskLeft = maskLeft < small.offsetWidth - mask.offsetWidth ? maskLeft : small.offsetWidth - mask.offsetWidth;
            maskTop = maskTop < small.offsetHeight - mask.offsetHeight ? maskTop : small.offsetHeight - mask.offsetHeight;
            mask.style.left = maskLeft + 'px';
            mask.style.top = maskTop + 'px';
            bigImg.style.top = -mask.offsetTop / (small.offsetHeight - mask.offsetHeight) * (bigImg.offsetHeight - big.offsetHeight) + 'px';
            bigImg.style.left = -mask.offsetLeft / (small.offsetWidth - mask.offsetWidth) * (bigImg.offsetWidth - big.offsetWidth) + 'px';
            //  (gun.style.top)
        }
        small.onmouseout = function () {
            big.style.display = "none";
            mask.style.display = "none";
        }
    }

    //驼峰命名
    this.TFName = function (name) {
        // 每个单词
        let name2 = name.split("-");
        // 新构成的每个单词
        let every;
        // 最后合成的单词
        let get = name2[0];
        for (let i = 1; i < name2.length; i++) {
            // 每个字母
            let everyletter = name2[i].split("");
            everyletter[0] = everyletter[0].toUpperCase();
            // 新构成的每个单词
            every = everyletter.join("");
            //最后合成的单词
            get = get + every;
        }
        return get;
    }

    //数组冒泡_从大到小
    this.maopao_BigToSmall = function (arr) {
        //  设置一个数字记录当前已经排号的序号
        let nownum = arr.length - 1;
        let nownum_item;
        for (let i = 0; i < arr.length; i++) {
            // 假设已经拍好了顺序
            let flag = true;
            for (let j = 0; j < nownum; j++) {
                if (arr[j] < arr[j + 1]) {
                    let item = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = item;
                    /*用来记录下最后一个需要交换的值*/
                    nownum_item = j + 1;
                    flag = false;
                }

            }
            // 将记录下来的值传回for循环
            nownum = nownum_item;
            if (flag) {
                break;
            }
        }
        return arr;
    }

    // 从小到大
    this.maopao_SmallToBig = function (arr) {
        for (let i = 0; i < arr.length; i++) {
            let nownum = arr.length - 1;
            let nownum_item;
            // 假设已经拍好了顺序
            let flag = true;
            for (let j = 0; j < nownum; j++) {
                if (arr[j] > arr[j + 1]) {
                    let item = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = item;
                    nownum_item = j + 1;
                    flag = false;
                }
            }
            nownum = nownum_item;
            if (flag) {
                break;
            }
        }
        return arr;
    }

    // 存储到本地
    //参数为要存入的  value  和  键
    this.setLocalStorage = function (value, key) {
        // 转为json
        json = JSON.stringify(value);
        // 存储到本地
        localStorage.setItem(key, json);
    }
    //拿取本地存储的值
    this.getLocalStorage = function (key) {
        let getValue = localStorage.getItem(key);
        getValue ? arr = JSON.parse(getValue) : arr = [];
        return arr;
    }

}



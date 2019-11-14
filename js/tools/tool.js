function MyTools() {
    //获得随机数值(左臂右开区间)
    this.randomNum = function(min,max){
        return Math.floor( Math.random()*(max-min)+min);
    }


    //驼峰命名
    this.TFName = function(name){
        // 每个单词
        let name2 = name.split("-");
        // 新构成的每个单词
        let every;
        // 最后合成的单词
        let get = name2[0];
        for(let i = 1;i < name2.length;i++)
        {
            // 每个字母
            let everyletter = name2[i].split("");
            everyletter[0] =everyletter[0].toUpperCase();
            // 新构成的每个单词
            every = everyletter.join("");
            //最后合成的单词
            get =  get + every; 
        }
        return get;
    }

    //数组冒泡_从大到小
    this.maopao_BigToSmall = function(arr){
         //  设置一个数字记录当前已经排号的序号
         let nownum = arr.length - 1;
         let nownum_item;
        for(let i = 0;i < arr.length;i++){
            // 假设已经拍好了顺序
             let flag = true; 
            for(let j=0;j < nownum;j++)
            {
                if(arr[j] < arr[j+1]){
                    let item = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = item;
                    /*用来记录下最后一个需要交换的值*/ 
                    nownum_item = j+1;
                    flag = false; 
                }
                
            }
            // 将记录下来的值传回for循环
            nownum = nownum_item;
             if(flag)
            {
                break;
            } 
        }
        return arr;
    }

    // 从小到大
    this.maopao_SmallToBig = function(arr){
        for(let i = 0;i < arr.length;i++){
            let nownum = arr.length-1;
            let nownum_item ;
            // 假设已经拍好了顺序
             let flag = true; 
            for(let j=0;j < nownum;j++)
            {
                if(arr[j] > arr[j+1]){
                    let item = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = item;
                    nownum_item = j+1;
                    flag = false; 
                }
            }
            nownum = nownum_item;
             if(flag)
            {
                break;
            } 
        }
        return arr;
    }


    // 存储到本地
    //参数为要存入的  value  和  键
    this.setLocalStorage = function(value, key) {
        // 转为json
        json = JSON.stringify(value);
        // 存储到本地
        localStorage.setItem(key, json);
    }

    //拿取本地存储的值
    this.getLocalStorage = function(key) {
        let getValue = localStorage.getItem(key);
        getValue ? arr = JSON.parse(getValue) : arr = [];
        return arr;
    }

}



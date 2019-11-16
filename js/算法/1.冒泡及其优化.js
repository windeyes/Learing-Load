
  
    let crr = [88,44,664,520,44,45,87,88,740,54,0,5210,520,408,57,475,1358,78,787,447,440,5978,10,205,305,580,784,40,50,5814,242,5445,481,1446,5487,7125,5445,878,545,57,79,985,952,354,9999,10000];
    // 冒泡
    function maopao1(arr) {
        for (let i = 0; i < arr.length; i++) {
            let item;
            for (j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    item = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = item;
                }
            }
        }
        return arr;
    }

    function maopao2(arr) {
        //优化第一版
        for (let i = 0; i < arr.length; i++) {
            let item;
            // 假设已经完成了排序
            let flag = true;
            for (j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    item = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = item;
                    flag = false;
                }
            }
            if (flag)
                break;
        }
        return arr;
    }

    // 优化第二版
    function maopao3(arr) {
        let now = 0;
        let nowNum = arr.length-1;
        for (let i = 0; i < arr.length; i++) {
            let item;
            // 记录现在冒泡冒到了哪里
            let flag = true;
            for (j = 0; j < nowNum; j++) {
                if (arr[j] > arr[j + 1]) {
                    item = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = item;
                    now = j + 1;  
                    flag = false;
                }
            }
            nowNum = now;
            if(flag){
                break;
            }
           
        }
    }

   

   

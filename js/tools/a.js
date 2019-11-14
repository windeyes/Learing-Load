function MyTools() {



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



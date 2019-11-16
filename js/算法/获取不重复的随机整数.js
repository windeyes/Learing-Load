// 最小到做大的随机不重复整数
function norepeatRandomNum(min, max) {
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
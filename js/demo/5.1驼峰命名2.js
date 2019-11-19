let arr = 'get-element-by-id';
//拆分成一个个单词
let word = arr.split('-');
//要输出的一个单词
let outWords = word[0];
let firstLetter;
for(let i = 1;i <word.length;i++){
    // 首字母大写
    firstLetter =  word[i].toString().charAt(0).toUpperCase();
    // 取出word中除了第一个字符的所有剩下的字母并累加赋值给outWords
    outWords += firstLetter+word[i].substring(1)
   
}
console.log(outWords);
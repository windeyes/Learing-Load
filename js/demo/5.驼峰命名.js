
    // 将如下字符串'get-element-by-id'修改为驼峰表示法'getElementById'
    let name = 'get-element-by-id'
    name = name.split("-");
    // 每个字母
    let every_letter;
    // 首字母
    let first_letter;
    let new_name;
    
    new_name = name[0];
    for(let i =1;i < name.length;i++){
        every_letter = name[i].split("");
        first_letter = every_letter[0].toString().toUpperCase();
        every_letter[0] = first_letter;
        name[i] = every_letter.join("");
        // name[i] =
        new_name += name[i] ;
        
    }

    console.log(new_name);
   
    

//基本打印
console.log("console.log打印");

//定义对象
let book = {
    author: "岸本齐史",
    age: 32,
};

//也可以这样打印对象里面的属性值
console.log("book中name的值为：",book.author)
//使用[]可以访问对象数据
console.log("book中age的值为：",book["age"])


//添加空的属性
book.content = {
    name: "旗木卡卡西",
};

console.log(book.content.name)
//这里没有other，就会打印undefined
console.log(book.content.other)

//更改对象数据值名字，然后打印
book.content.name = "漩涡鸣人"
console.log(book.content.name)
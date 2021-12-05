let numbers=[1,2,3,4,5,6,7,8,9,10]
// numbers.push(11)
// numbers.pop()
// numbers.indexOf(3)
numbers.map((ele)=>{
    console.log(ele*ele)
})


let names=["kirti","priyanka","sonali"]
names.map((ele)=>{
    console.log(ele + "patil")
})


let names=["kirti","priyanka","sonali"]
names.map((ele)=>{
    console.log("<h1>"+ele+"</h1>")
})


let names=["kirti","priyanka","sonali"]
names.map((ele,index)=>{
    console.log(ele + "patil")
    console.log(`index of element is ${index}`)
})


let family={
    name:"kirti",
    roll_no:20,
    college:"KLS Gogte College of Commerce",
    phone:7022301076
}
console.log(family)
//console.log(family['roll_no'])


//list of object
let fruits=[{name:"apple",color:"green"},{name:"banana",color:"yello"},{name:"orange",color:"orange"}]
console.log(fruits)


for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

//fruits[0]['color']


//array destructing
let [a,b]= [2,4]
console.log(a,b)

//object destructing
let {bookname,code}={
    bookname:"xyz",
    code:"E-01"
}
console.log(bookname,code)


//rest and spread operators
let arr=["kirti","priyanka","sonali"]
console.log(...arr)//spread operator


//rest operator
function sumOf3Nums(a,b,c){
    return a+b+c
}
let sum=sumOf3Nums(2,4,6)
console.log(sum)


//rest operator
function sumOf3Nums(...args){
    console.log(args)
    //return a+b+c
}
sumOf3Nums(a=2,b=4,c=6)




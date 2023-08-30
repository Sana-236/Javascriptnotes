console.log("Hello")

//variable should be declared using let and variables can be changed
let num=4
console.log(num)

//string should be used in quotes
let user="sana"
console.log(user)

//constants cannot be changed
let r=8
const pi=3.14 //value of pi is constant
let area
area= pi*r*r
console.log(area)

//know the type of data you use
let data=8
let moya="vs"
console.log(typeof data)
console.log(typeof (moya))

//boolean
let bool=5<6
console.log(bool, typeof bool)

//type conversion
let nums=String(9)
console.log(nums,typeof nums)

//arithmetic operation(+,-,/,%,*,++,--,)
let num1=9
let num2=4
console.log(num1+num2)
console.log(num1-num2)
console.log(num1/num2)
console.log(num1*num2)
console.log(num1%num2)

//relational operation(<,>,<=,>=,==,!=)
//logical operation(&&,||,!)
//ternary operator(exp1 ? exp2 : exp3)  if exp1 true then execute to exp2 else execute exp3

//conditional statements(if ,if-else)

/*switch  switch(condition){
    case 1: expression
             break;
    case 2: expression
             break;
    defult:expression
             break
}*/

//template literal is using ` ` back ticks
let a=2
let b=3
let re=a+b
console.log(`the addition of ${a} and ${b} is ${re}`)
console.log(`my name is
Sana`)

// loops(initialize,condition,increment or decrement)
//while loop
let i=1
 while(i<=6){
     console.log(i)
     i++
 }

 //do while loop
 let h=10
 do{
     console.log(h)
     h++
 }while(h<=5)


 //for loop
 for(let u=1;u<=5;u++){
     console.log(u)
 }

 //if you know start and end point then use for loop


 //objects represent real object in virtual world
let alien = {name :'Sana',
             age:23,
             tech:'spring_boot'
}
console.log(alien)
console.log(alien.tech)
console.log(alien['name'])
//to fetch one value of the object you can use  . operator or the [] 

//to get input from the user
let input='name'
console.log(alien['name'])//if user is mentioned it as input then you should be using [] to get the value


//complex object
let vs={
    name:'vr',
    techn:'angular',
    lap:{
        cpu:'i7',
        ram:4,
        brand:'mac'
    }
}
console.log(vs)
console.log(vs.lap)
console.log(vs.lap.brand)//to fetch property of inside property
console.log(vs.lap.brand.length)
//delete vs.techn (to delete property)


//for-in loop
let stu={
    peru:'apsara',
    learnt:{
        fi:'java',
        se:'junit'
    }
}
for (let key in stu){
  //  console.log(key)  for only key 
  console.log(key, stu[key])
}

//functions
function greet()
{
    console.log('morning')
}
greet()

//return and parameters of function
function hi(jk){
    return `hi ${jk}`
}
let jk='sana'
let sh= hi(jk)
console.log(sh)

//arrow function
//arrow is used when you need not specify the name of the function
//you can also mention one line code when you have one line of code inside the function
//let gr=(user1,user2)=>user1 + user2
let gr= (user)=>{
    console.log('hi '+ user)
    return 1
}
console.log(gr('Halsu'))

//this means current object. it will help to get the property of your choice

//constructor
//
function Alien2(name1,tech1){
    this.name1=name1
    this.tech1=tech1

}
let alien1=new Alien2('farru','15') //constructor creation
console.log(alien1)

//array
let arr=[8,9,10]
console.log(arr)
console.log(arr.length)
arr.push(7)
arr[5]='sana'
console.log(arr)
console.log(arr[1]) //to get one value from array


//array methods
arr.push(4)
console.log(arr)
arr.pop()//removes element from last
console.log(arr)
arr.shift() //removes element from first of the array
console.log(arr)
arr.unshift(1) //adds element in the first of array
console.log(arr)



/*for-of loop
let nums1=[]
nums1[0]=5
nums1[99]=8
for (let e of nums1){
    console.log(e)
}*/


//split
let words="my name is sana nazeer".split( ' ')

let [x,y,z,...v]=words
console.log(v)
console.log(x,y,z,v) // dots is used to print all the words even if don't assign it to a variable


//for each method
//takes one value at a time
let hell=[56,78,90,34,27,69]
hell.forEach(ni=>{
     console.log(ni)
})
console.log(hell.filter(k=>k%2==0))// to return even numbers from array


//set-will have only unique values and unordered list
let rim=new Set("BOOKKEEPER")
console.log(rim)




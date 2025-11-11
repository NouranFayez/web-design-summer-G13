// while , do-while ==> search


// function funName(){
//     code ..
// }

// funName()


// function sum(num1 , num2){
//     // var num1 = 10
//     // var num2 = 20
//     // console.log(num1 + num2)
//     console.log(num2)

//     return num1 + num2
// }

// // var result = sum(100 , 6)
// // var result = sum(36 , 6)
// var result = sum(40)

// console.log(result*10)




// 102-305

// function getUserID(part2 , part1 = "102"){
//     return `${part1}-${part2}`
// }

// var userID = getUserID('305' , '202')

// console.log(userID)



// function looping(start , end){
//     for(var i = start ; i <= end ; i++){
//         console.log(i)
//     }
// }

// looping(5 , 10)
// looping(40 , 50)
// alert('please enter all numbers')





// looping ==> start , end , breakNum , contineNum


var fullName // undefined
function getFullName() {
    var fisrtName = prompt('enter your first name')
    var lastName = prompt('enter your last name')
    fullName = `${fisrtName} ${lastName}`
    userName = `${fisrtName} ${lastName}`
    // return `${fisrtName} ${lastName}`
}

// getFullName()
// console.log(userName) //

// function statment
// function getUserName(){
//     console.log('js')
//     return userName
// }

// var user = getUserName()

// console.log(user) 

// function expression
// var fullUserName = function(){
//     return "Tamer fayez"
// }

// console.log(fullUserName())

// arrow function 
// var compOperator = (num)=>{
//     return num > 20
// }

// var compOperator = (num)=> num > 20


// console.log(compOperator(10))


// //////////// Array Methods

var firstName = "Nouran"
var lastName = "Fayez"
var age = 31
var nationality = "Egyptian"
var isGraduated = true

var userInfo = ["Nouran", "Fayez", 31, "Egyptian", true]

// console.log(userInfo[2])
userInfo[5] = "Nasr city"

// console.log(userInfo.length)

userInfo[userInfo.length] = "developer"



userInfo.push("maadi", true, 10)
userInfo.unshift("engineer", false)

// console.log(userInfo)

// var courses = ["html" , "css" , "Bootsrap" , "Js"]

// courses.pop()
// courses.pop()
// courses.shift()

// console.log(courses)
// console.log(courses.includes('html'))


/// splice(index , deletedCount , item/s) ==> add / remove


var courses = ["html", "css", "Bootsrap", "Js"]


courses.splice(2, 0, "typescript", "angular") // add

courses.splice(3, 1) // remove

courses.splice(1, 2, 'JS', "React") // add/ remove

// console.log(courses)


// console.log(courses[0])
// console.log(courses[1])
// console.log(courses[2])
// console.log(courses[3])
// console.log(courses[4])


for (var i = 0; i < courses.length; i++) {
    // console.log(courses[i])
}


courses.forEach((item, ind, arr) => {
    // console.log("index =" + ind + ", element= "+ item)
    // template string
    // console.log(`index = ${ind} , element = ${item}`)
})






var nums = [4, 10, 20, 5, 3, 1]

nums.forEach((ele) => {
    // if(ele > 4) console.log(`element = ${ele}`)
})


// nums.find((ele)=>{
//     return ele > 4
// })
var element = nums.find((ele) => ele > 4) // element
// var element = nums.find((ele)=> ele > 40) // undefined
// console.log(element)

if (!element) {
    nums.push(41)
}

// console.log(nums)
var ind = nums.findIndex(item => item > 4) // index
var ind = nums.findIndex(item => item > 50) // -1

// console.log(ind)

var newArray = nums.filter(item => item > 4) // array
var newArray = nums.filter(item => item > 400) // empty array
// console.log(newArray)


var coursesList = ["html", "css", "js", "ts", 'Angular']




// var firstName = "Nouran"
// var lastName = "Fayez"
// var age = 31
// var nationality = "Egyptian"
// var isGraduated = true

// var userInfo = ["Nouran" , "Fayez" ,31 , "Egyptian" , true  ]


var userObj = {
    firstName: "Nouran",
    lastName: "Fayez",
    isGraduated: true,
    age: 30

}

userObj.age = 31
userObj.address = "Nasr city"

var userObj2 = {
    firstName: "Tamer",
    lastName: "Fayez",
    isGraduated: true,
    age: 40

}
var userObj3 = {
    firstName: "Marwa",
    lastName: "Mohamed",
    isGraduated: true,
    age: 40

}

/// array of objects
var usersList = [
    {
        firstName: "Nouran",
        lastName: "Fayez",
        isGraduated: true,
        age: 30

    },
    {
        firstName: "Tamer",
        lastName: "Fayez",
        isGraduated: true,
        age: 40

    },
    {
        firstName: "Marwa",
        lastName: "Mohamed",
        isGraduated: true,
        age: 40

    }

]

console.log(usersList)
console.log(userObj)

usersList.forEach(item=>{
    console.log(item)
})


var userInd = usersList.findIndex(ele => ele.firstName == 'Tamer')
usersList.findIndex((item , i , arr)=>{
    console.log(item)
    console.log(i)
    console.log(arr)
})
console.log(userInd)



/////// function adduser() // id , name , balance 

/////// function editUserBalanceById () // id , newBalance

/////// function deleteUserById() // id
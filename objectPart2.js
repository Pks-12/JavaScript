//  const tindeUser = new Object()  //  Singleton
//  Object.create

const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "ramesh";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "someOne@hotmail.com",
    fullname: {
      userfullname: {
          firstname: "ramesh",
        lastname: "singh"
      }

    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a",6: "b"}
//  const obj3 = {obj1,obj2}
//  const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email: "p@gmail.com"
    },
    {
        id:1,
        email: "p@gmail.com"
    },
    {
        id:1,
        email: "p@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "python in english",
    price: "500",
    courseInstructor: "ramesh"
}

//  course.courseInstructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "ramesh",
//     "coursename": "python in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

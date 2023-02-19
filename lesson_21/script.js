// function calcAge(){
//     console.log(2023 - l[0]);
//     console.log(2023 - l[1]);
//     console.log(2023 - l[2]);
//     console.log(2023 - l[3]);
//     console.log(2023 - l[4]);
//     console.log(2023 - l[l.length - 1]);
// }

// let l = [1920, 2013, 2020, 1996, 1630];
// calcAge();

// let l = ["Егор", 25.12, true];
// l.push("Хорошее число");
// console.log(l);
// console.log(l.pop());
// console.log(l);
// console.log(l.unshift("Хорошее настроение"));
// console.log(l);
// console.log(l.shift());
// console.log(l);
// console.log(l.indexOf(25.12));

// let names = ["nubik228", "admin", "админ", "user", "popino000"];
// let names1 = names.unshift(prompt("Введите ник для регистрации"));
// console.log(names.includes(names1))
// if(
//     names.includes(names1) != true
//     names2 = names.unshift(prompt("Попробуй ещё раз"))
// )


// function tw(){
//     let name = prompt(`Введите ник для регистрации`)
//     if(names.includes(name)==false){
//         names.push(name)
//     }else{
//         tw()
//     }
// }

// let names = ["karamochek", "karascik", "nubik228", "admin"];
// tw();

// const teacher = {
//     firstName: "Рома",
//     age: 2023-1990,
//     job: "учитель веб-разработки",
//     students: ["Лиза", "Миша", "Ясинбек", "Артём", "Тимур"]
// };
// console.log(teacher["students"]);
// console.log(teacher.students);

// teacher.location = "Новосибирск"
// teacher["workPlace"] = "Movavi"

// console.log(teacher["location"]);
// console.log(teacher.students);

// console.log("location" in teacher)

// const teacher = {
//     firstName: "Диана",
//     lastName: "Середа",
//     hasDriverLicense: false,
//     calcAge: function(birthYear) {
//         return 2023 - birthYear;
//     },
// };

// console.log(teacher.calcAge(1996))

const person1 = {
    name: "Артём",
    vess: 78,
    vs: 1.69,
    IMT: function(){
        return this.vess / (this.vs ** 2)
    },
};

const person2 = {
    name: "Олег",
    vess: 92,
    vs: 1.95,
    IMT: function(){
        return this.vess / (this.vs ** 2)
    },
};

console.log(person1.IMT())
console.log(person2.IMT())

if(person1.IMT() > person2.IMT()){
    console.log("Первый будет толще")
}
else(){
    console.log("Второй будет толще")
}

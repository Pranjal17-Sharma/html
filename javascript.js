//questions
//1

// let length=5;
// let width=7;
// console.log("length of rec is=", length);
// console.log("width of rec is", width);
// console.log("area of rec is", length*width);
// console.log("perimeter of rec is", 2*(length*width));

//2

// let radius=7;
// console.log("radius of circle is", radius);
// const pi = 3.14;
// console.log("area of circle is",3.14*radius**2);
// console.log("perimeter of circle is",2*3.14*radius);

//3

// let num=18;
// if(num>=20){
//     console.log("number is grater");
    
// }else if(num ==18){
//     console.log("this is a number"); 
// }
// else{
//     console.log("not a number");
// }

//1

// let length=prompt("Enter length of rectangle")
// let breadth=prompt("Enter breadth of rectangle")
// if(length==breadth){
//     console.log("The rectangle is square");   
// }
// else{
//     console.log("The rectangle is not square");   
// }

//2

// let value1=prompt("Enter value of first number ")
// let value2=prompt("Enter value of second number")
// if(value1>value2){
//     console.log("value first is greatest");   
// }
// else{
//     console.log("value second is greatest");   
// }
  
//3
// let unit=100;
// let quantity=prompt("Enter quantity")
// let total=unit*quantity;
// if(quantity>1000){
//     console.log("you will get 10% discount"); 
// }
// else{
//     console.log("you will not get discount");
// }

//4
// let service=prompt("Enter service")
// let salary=prompt("Enter salary")
// let bonus=salary*5/100;
// let total=salary-bonus;
// if(service>5){
//     console.log("you will get bonus",bonus,total); 
// }
// else{
//     console.log("you will not get bonus");
// }

//5
// let marks=prompt("Enter your marks")
// if(marks<25){
//     console.log("your grade is F"); 
// }
// else if(marks>25 && marks<45){
//     console.log("your grade is E");
// }
// else if(marks>45 && marks<50){
//     console.log("your grade is D");
// }
// else if(marks>50 && marks<60){
//     console.log("your grade is C");
// }
// else if(marks>60 && marks<80){
//     console.log("your grade is B");
// }
// else{
//     console.log("your grade is A");
// }


// for(let a=0;a<=20;a++){
//     console.log(a);

// }

// for (let q=20;q>=0;q--){
//     console.log(q);
    
// }

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++
// }
// let z=50;
// do{
//     console.log(z);
//     z++
    
// }while(z<=100)


// for loop
//question 1

// for(let a=1;a<=30;a++){
//     console.log(a);
// }

//question 2
// for(let a=30;a>=0;a--){
//     console.log(a);
// }
 
//question 4
// for(let a=1;a<100;a++)
//     if(a%2==0)
// {
//     console.log(a);
// }


//while loop
//question 5
// let a=1;
// while(a<=100){
//     if(a%2!==0){
//         console.log(a);
//     }
//     a++;
// }


// let arrey=[14,2,5,2,5,2,5,"nikhil",'hello',true]
// let a2=[4,7,2,arrey]
// arrey.pop()
// arrey.push(45)
// arrey.splice(5)
// console.log(a2);


//question 1
// let arrey=[]
// arrey.push(1)
// arrey.push(2)
// arrey.push(3)
// arrey.push(4)
// arrey.push(5)
// arrey.push(6)
// arrey.push(7)
// arrey.push(8)
// arrey.push(9)
// arrey.push(10)
// arrey==5,arrey.pop();
// console.log(arrey);

// function add(a,h){
//     console.log(a*h);
    
// }
// add(8,6)

// function add(a,u){
//     return a+u
// }
// const plus=add(4,9)
// console.log(plus);

// const add=()=>{
//     console.log("hrllo");
    
// }
// add()


// const obj={
//     name:"nikhil",
//     age:20,
//     city:"ujjain",
//     a:[1,45,78,12],
//     f: function add(){
      
//     }
// }
// console.log(obj);


// function questions

// function add(length,width){
//     console.log(length*width);
//     console.log(2*(length+width));
// }
// add(10,10)


// function add(radius){
//     console.log(3.14*(radius*radius));
//     console.log(2*3.14*radius);
// }
// add(10)

// function add(a){
//     return (a%2==0)
// }
// const plus=add(1)
// console.log(plus);
// console.log(odd);

// function add(age){
//     if(age>=18)
//     {
//         console.log("you are eligible to vote");
//     }
//     else{
//         console.log("you are not eligible to vote");
//     }
// }
// add(21)


// const obj={
//     name:"pranjal",
//     age:19,
//     city:"ratlam",
//     a:[1,2,3,4,5,6,7,8,9,10],
//     f: function add(){
//     }
// }

//   let a=document.getElementById("mi").innerHTML="pranjal"
//   document.getElementById("mi").style.color="blue"
//   console.log(a);
  
// let c=document.getElementsByClassName("mine")
// console.log(c);

// let c=document.getElementsByTagName("h2")
// console.log(c);

// let c= document.querySelector(".mine")
// console.log(c);
  

// let c= document.querySelector("#mi")
// console.log(c);
 

//PRACTICE

// let a=document.getElementById("mi").innerHTML="pranjal sharma"
// document.getElementById("mi").style.color="brown"
// console.log(a);


// let b=document.getElementsByClassName("mine")
// console.log(b);

// let d= document.getElementsByTagName("h1")
// console.log(d);

// let e= document.querySelector("#mi")
// console.log(e);
   
// let f= document.querySelector(".mine")
// console.log(f);

// let p=document.getElementById("pi")
// console.log(p);

// let a=document.createElement("div").innerHTML="green"
// console.log(a);
// p.appendChild(a)


//LOCAL STORAGE

// localStorage.setItem("name","hello") 
// localStorage.setItem("name1","hello23456778") 
// localStorage.setItem("name34","helloghfhygjhjh") 
// localStorage.setItem("name5","hello") 
// localStorage.setItem("name6","hello") 
// localStorage.setItem("name","hello8765") 

// let a=localStorage.getItem("name34")
// console.log(a);
// localStorage.removeItem("name")
// localStorage.clear()


//LOCAL STORAGE PRACTICE
// localStorage.setItem("name1","age 11")
// localStorage.setItem("name2","age 13")
// localStorage.setItem("name3","age 15")
// localStorage.setItem("name4","age 17")
// localStorage.setItem("name5","age 21")
// localStorage.setItem("name6","age 23")

// let pranjal=localStorage.getItem("name1")
// console.log(pranjal);
// localStorage.removeItem("name4")
// localStorage.clear("clear")




// let obj= {
//     name:"pranjal",
//     age:10,
//     city:"ratlam",
//     course:"fullstack"
// }
// console.log(obj);

// let convert=JSON.stringify(obj)
// console.log(convert);

// localStorage.setItem("user",convert)
// let p1=localStorage.getItem("user")
// const con1=JSON.parse(p1)
// console.log(con1);


// let obj={
//     name:"pranjal sharma",
//     age:19,
//     class:"BCA 2year"
// }
// console.log(obj);

// let convert=JSON.stringify(obj)
// console.log(convert);

// localStorage.setItem("user",convert)
// let p1=localStorage.getItem("user")
// const con1=JSON.parse(p1)
// console.log(con1);


// let a=document.getElementById("btn")


// events
// document.getElementById("btn").addEventListener('click',function(){
//     alert("button is clicked")
//     console.log("clicked on me");
    
// })
// document.getElementById("myform").addEventListener("submit",function(e){
//     e.preventDefault()
//     console.log("form is submitted");
    
// })
// document.getElementById("btn").addEventListener("click",function(b){
//     alert("button is clicked")
//     console.log("clicked on me"); 
// })



//fetch








 const form=document.getElementById("myform").addEventListener('submit',function(e){
    e.preventDefault();

   const name= document.getElementById("log").value
   const number= document.getElementById("log2").value
   const email= document.getElementById("log3").value
   const password= document.getElementById("log4").value

   if(name==""||number==""||password==""||email==""){
    console.log("signup faild");
    alert("error in data")
    
   }else{
    console.log("signup sucessfull");
    alert("signup successfull")
    
   }
    
   localStorage.setItem("sname",name)
   localStorage.setItem("snumber",number)
   localStorage.setItem("semail",email)
   localStorage.setItem("spassword",password)

})

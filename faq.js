const faq= document.querySelectorAll(".faq");
const open = document.querySelectorAll(".show_btn");
const close = document.querySelectorAll(".close_btn");
const hidden = document.querySelectorAll(".hidden");


faq.forEach((eachLine,index)=>{
   close[index].style.display="none"
   eachLine.addEventListener("click",()=>{
     const result= eachLine.classList.toggle("active");
     if(result){
        close[index].style.display= "block";
      open[index].style.display= "none";
     }
     else{
        close[index].style.display= "none";
      open[index].style.display= "block";
     }
   })
})
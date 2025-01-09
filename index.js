let userinput=document.getElementById('from-d');
let userinput1=document.getElementById('to-d');
let result=document.getElementById('result');
  
function calculateage(){

    let birthdate= new Date(userinput.value);
    let d1=birthdate.getDate();
    let m1=birthdate.getMonth()+1;
    let y1=birthdate.getFullYear();

    let todate=new Date(userinput1.value);
    let d2=todate.getDate();
    let m2=todate.getMonth()+1;
    let y2=todate.getFullYear();


    let d3,m3,y3;
    
    y3=y2-y1;
     if(m2>=m1){
        m3=m2-m1;
     }
     else{
        y3--;
        m3=12+m2-m1;
     }

     if(d2>=d1){
        d3=d2-d1;
     }
     else{
        m3--;
        d3=getDaysInMonth(y1,m1)+d2-d1;


     }
     if(m3<0){
        m3=11;
        y3--;
     }
     result.innerHTML=` You are ${y3} Years ${m3} Months ${d3} Days old.`;
    


}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
 }
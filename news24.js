document.addEventListener("DOMContentLoaded",firstNews);
async function firstNews() {
let header=document.getElementById("newsheader");
let header2=document.getElementById("newsheader2");
let header3=document.getElementById("newsheader3");
let header4=document.getElementById("newsheader4");
let header5=document.getElementById("newsheader5");
let fullNews=document.getElementById("news");
let type=document.getElementById("type");
let type2=document.getElementById("type2");
let type3=document.getElementById("type3");
let type4=document.getElementById("type4");
let type5=document.getElementById("type5");
let link=document.getElementById("link");
let link2=document.getElementById("link2");
let link3=document.getElementById("link3");
let link4=document.getElementById("link4");
let link5=document.getElementById("link5");
let random=Math.floor(Math.random()*200);
   try{
   let apiurl=` https://content.guardianapis.com/search?page=${random}&api-key=7b468596-624c-4b59-b409-e0b207a3e725`
       const response=await fetch(apiurl);
       if(response.ok) {
         let data=await response.json();
        header.innerHTML=data.response.results[0].webTitle;
        type.innerHTML=data.response.results[0].sectionName;
        
        header2.innerHTML=data.response.results[1].webTitle;
        type2.innerHTML=data.response.results[1].sectionName;   
        
     header3.innerHTML=data.response.results[2].webTitle;
        type3.innerHTML=data.response.results[2].sectionName;
    
        header4.innerHTML=data.response.results[3].webTitle;
        type4.innerHTML=data.response.results[3].sectionName;
    
    header5.innerHTML=data.response.results[4].webTitle;
        type5.innerHTML=data.response.results[4].sectionName;
    
    link.innerHTML=data.response.results[0].webUrl;
    link2.innerHTML=data.response.results[1].webUrl;
    link3.innerHTML=data.response.results[2].webUrl;
    link4.innerHTML=data.response.results[3].webUrl;
    link5.innerHTML=data.response.results[4].webUrl;
               
       }else {
           alert("There was an error, please try again");
       }
   }catch(error){
       alert("To display current news, please connect to the internet or check your internet settings");
   }
   
    
}
function readMore() {
    document.getElementById("more").style.display="block";
}
function readMore2() {
    document.getElementById("more2").style.display="block";
}
function readMore3() {
    document.getElementById("more3").style.display="block";
}
function readMore4() {
    document.getElementById("more4").style.display="block";
}
function readMore5() {
    document.getElementById("more5").style.display="block";
}
function readLess() {
    document.getElementById("more").style.display="none";
}
function readLess2() {
    document.getElementById("more2").style.display="none";
}
function readLess3() {
    document.getElementById("more3").style.display="none";
}
function readLess4() {
    document.getElementById("more4").style.display="none";
}
function readLess5() {
    document.getElementById("more5").style.display="none";
}

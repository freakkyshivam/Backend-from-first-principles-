 

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const err = document.getElementById('err')
const response = document.getElementById('response')
const btn3 = document.getElementById('btn3');
 
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');


btn1.addEventListener('click',()=>{
     
    fetch('http://localhost:3000/api/data',{
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        
            
              document.getElementById('so').innerHTML = `
            <span>Name : ${data.name}</span>
            <br/>
            <span>Age : ${data.age}</span>
            `
         
        
    })
    .catch(error =>{
        console.error(error)
        err.innerText =error.message 
    })
})

btn2.addEventListener('click',()=>{

    fetch('http://localhost:3000/api/data',{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },

        body : JSON.stringify({
            name : "Shivam",
            age : 19,
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error=>{
        console.error(error)
        err.innerText = error.message
    })
})

btn4.addEventListener('click',()=>{

    fetch('http://localhost:3000/api/data',{    
        method : "POST",    
        headers : {
            "Content-Type" : "application/json"
        },

        body : JSON.stringify({         
            name : "Shivam",
            age : 19,
        })
    })
    .then(response => response.json())      
    .then(data => {
        console.log(data)
    })
    .catch(error=>{
        console.error(error)
        err.innerText = error.message
    })      
})

btn5.addEventListener('click',()=>{     
    fetch('http://localhost:3000/unknown')
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }           
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error =>{
        console.error(error)
        err.innerText = error.message
    })  
})

btn3.addEventListener('click',()=>{ 
    fetch('http://localhost:3000/api/data',{

        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    })  
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }   
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error =>{
        console.error(error)
        err.innerText = error.message
    })
})
 
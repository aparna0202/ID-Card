const api_url = 'https://randomuser.me/api/';

const populate = (data)=>{
    console.log(data);
    const element = document.getElementById("info");
    element.innerHTML = `
    <div id="photo"><img src= '${data.picture.large}'/><div>
    <li id="name"><b>Name : </b>${data.name.title+" "+data.name.first +" "+data.name.last }</li> 
    <li id="dob"><b>DOB : </b>${data.dob.date}</b></li>
    <li id="age"><b>Age : </b>${data.dob.age}</li>
    <li id="gender"><b>Gender : </b>${data.gender}</li>
    <li id="cell"><b>Contact No. : </b>${data.cell}</li>
    <li id="email"><b>Email : </b>${data.email}</li>
    `
};

fetch(api_url)
.then((res)=> res.json())
.then((data)=>populate(data.results[0]));


















/*fetch('https://randomuser.me/api/')
<li id="dob">DOB :</li> 
    <li id="class">Class :</li> 
    <li id="section">Section :</li>
                    
.then((res)=> res.json())
.then((data)=>{
    let data1="";
    data.map((values)=>{
        data1=`<div class="info">
                    <li class="photo"><img src=${values.results[0].cell} id="photo"></li>
                    <li class="rollno">${values.data.results[0].cell}</li>
                    <li class="name">${values.data.results[0].cell}</li>
                    <li class="dob">${values.data.results[0].cell}</li>
                    <li class="class">${values.data.results[0].cell}</li>
                    <li class="section">${values.data.results[0].cell}</li>
                </div>`
    } );
    document.getElementById("info").innerHTML=data1;


})
.catch(error => {console.log('ERROR');
})*/
import DataContact from '../assets/data/DataContact.js'

window.addEventListener('DOMContentLoaded',function(){

  // [ people 등록 ]
  const people = document.querySelector('.content-people');
  let peopleCode = ``;
  
  for(let ele of DataContact){
    peopleCode += /* html */`
    <div class="people-ele">
      <h5 class="name">${ele.name}</h5>
      <p class="number">${ele.number}</p>
      <p class="email">${ele.email}</p>
    </div>
    `;
  }
  people.innerHTML = peopleCode;
})

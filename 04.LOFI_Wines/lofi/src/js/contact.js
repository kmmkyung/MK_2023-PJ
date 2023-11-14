import DataContact from '../assets/data/DataContact.js'
const contact = [
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

  window.addEventListener('resize',function(){
    if(window.innerWidth>990){
      document.querySelector('.title h2').textContent = 'Contact'
    }
    else{
      document.querySelector('.title h2').textContent = ''
    }
  }) 
})
]

export default contact
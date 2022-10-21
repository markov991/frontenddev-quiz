const modal = document.getElementById('question_pop')
const btnsOpenModalHTML = document.getElementById('q_html').getElementsByTagName("button");
const questionsHTML = [
    'What does HTML stands for?',
    'What is the biggest Heading tag?',
    'What is DIV?',
    'what is ...3?',
    'What is ....4?',

];



const openModal = function (i) {
    modal.classList.remove('hidden');
var pitanje = document.getElementById("pitanje");
pitanje.textContent = questionsHTML[i]
  };

const closeModal = function () {
    modal.classList.add('hidden');
    
  };



  for (let i = 0; i < btnsOpenModalHTML.length; i++){
    document.getElementById(`htmlQ--${[i]}`).addEventListener('click', ()=>{
      openModal(i)
    });

};



document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

      
    
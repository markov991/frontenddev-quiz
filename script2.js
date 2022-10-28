

const modal = document.getElementById('question_pop')
const allBtns = document.querySelector('.questions').getElementsByTagName("button");
const btnsOpenModalHTML = document.getElementById('q_html').getElementsByTagName("button");
const btnsOpenModalCSS = document.getElementById('q_css').getElementsByTagName("button");
const btnsOpenModalJS = document.getElementById('q_js').getElementsByTagName("button");
const modalQuestion = document.querySelector('#question');
const posibleAnswers= document.querySelector('.input_value')
const btnSubmit = document.getElementById('btnSubmit')
const percOfCorrAnsw = document.getElementById('percentage');
const loadBar= document.getElementById('loadbar');
const resetBtn = document.getElementById('reset')

const globalHtmlQuestions= [];
const globalCssQuestions= [];
const globalJsQuestions= [];

let selectedQuestion;
let butnClicked;




let score=0;



class Questions  {
    
    

    constructor(type, question, answ, corAnsw){
        this.type = type;
        this.question= question;
        this.answ=answ;
        this.corAnsw=corAnsw;
        if(this.type==='HTML') {globalHtmlQuestions.push(this)}
        if(this.type==='Css'){globalCssQuestions.push(this)}
        if(this.type==='Js'){globalJsQuestions.push(this)}

    }
};


const openModal = function(){


    for (let i = 0; i < btnsOpenModalHTML.length; i++){
        btnsOpenModalHTML[i].addEventListener('click', ()=>{
            
            modal.classList.remove('hidden')    
            
            
            modalQuestion.textContent = globalHtmlQuestions[i].question;
            selectedQuestion=globalHtmlQuestions[i];
            butnClicked=btnsOpenModalHTML[i];
            

            
        renderquestion()
        
        
            
    });


  };

    for (let i = 0; i < btnsOpenModalCSS.length; i++){
        btnsOpenModalCSS[i].addEventListener('click', ()=>{
        
            modal.classList.remove('hidden')    
        
           
            modalQuestion.textContent = globalCssQuestions[i].question;
            selectedQuestion = globalCssQuestions[i]
            butnClicked=btnsOpenModalCSS[i];
            

            
    
        renderquestion()
    
    
        
});

};

    for (let i = 0; i < btnsOpenModalJS.length; i++){
        btnsOpenModalJS[i].addEventListener('click', ()=>{
    
            modal.classList.remove('hidden')    
    
            
            modalQuestion.textContent = globalJsQuestions[i].question;
            selectedQuestion = globalJsQuestions[i]
            butnClicked=btnsOpenModalJS[i];
            

            

        renderquestion()


    
});

};
}

const submitingAnsw = function(){
    btnSubmit.addEventListener('click', function () {

        if ( !modal.classList.contains('hidden')) {

            for(let i =0 ;  i < posibleAnswers.getElementsByTagName('input').length; i++){
               if (posibleAnswers.getElementsByTagName('input')[i].checked && i=== selectedQuestion.corAnsw){ 
                score++
                butnClicked.style.background='#10c53e'
                console.log('it is correct');
                // butnClicked.classList.add("correctAnswer")
                break
               }else {
                // butnClicked.classList.add("incorectAnswer")
                console.log('it is not correct',);
                butnClicked.style.background='red'
                
               }
            }

            butnClicked.style.color='white'
            console.log(score);

            modal.classList.add('hidden')
            butnClicked.disabled = true
            posibleAnswers.innerHTML=``

            percOfCorrAnsw.innerHTML=`${score/allBtns.length*100}%`;

            loadBar.style.width= `${score/allBtns.length*100}%`;
            console.log(loadBar.style.width);


            
        }
      });
}


const renderquestion= function(){
    posibleAnswers.insertAdjacentHTML( 'afterbegin' ,`
                    <input type="radio" name="answers" value="1">${selectedQuestion.answ[0]}<br>
                    <input type="radio" name="answers" value="2">${selectedQuestion.answ[1]}<br>
                    <input type="radio" name="answers" value="3">${selectedQuestion.answ[2]}<br>
                    <input type="radio" name="answers" value="4">${selectedQuestion.answ[3]}<br>
                `) 
    
}

const resetQuiz = function() {
    resetBtn.addEventListener('click', function(){
    for(let i =0; i<allBtns.length; i++){
       allBtns[i].disabled = false;
       allBtns[i].style.background='#fff';
       allBtns[i].style.color='#444';
       loadBar.style.width='0%'
       percOfCorrAnsw.innerHTML='0%'
    }

    score=0;
})}

// resetBtn.addEventListener('click', console.log('hello'))

openModal()
submitingAnsw()
resetQuiz()

const htmlQuestion1= new Questions('HTML', 
    'What does HTML stands for?', 
    ['Hyper Text Markup Lenguage', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language','Not important'], 
    0);

const htmlQuestion2= new Questions('HTML', 
    'Who is making the Web standards', 
    ['The world Wide Web Consortium', 'Mozilla', 'Google', 'Microsoft'],
    0);

const htmlQuestion3 = new Questions('HTML', 
    'Who is the father of HTML?', 
    ['Rasmus Lerdorf', 'Tim Berners-Lee', 'Brendan Eich', 'Sergey Brin'], 
    1);

const htmlQuestion4 = new Questions('HTML', 
    'Which tag is used for inserting the largest heading in HTML?',  
    ['head', 'h1', 'h6', 'heading'], 
    1);

const htmlQuestion5 = new Questions('HTML', 
    'HTML program is saved using ___ extension.', 
    ['.htmn', '.html', '.htnl', '.hmark'], 
    1);

const cssQuestion1= new Questions('Css', 'How can you created rounded corners using CSS3?', ['border[round]: 30px', 'corner-effect: round', 
    'border-radius: 30px', 'alpha-effect: round-corner'], 
    2);
const cssQuestion2 = new Questions('Css', 'How do you add shadow to elements in CSS3?', ['box-shadow: 10px 10px 5px grey', 'shadow-right: 10px shadow-bottom: 10px', 
    'shadow-color: grey', 'alpha-effect[shadow]: 10px 10px 5px grey'], 
    0);

const cssQuestion3= new Questions('Css', 'How to resize a background image using CSS3?', ['background-size: 80px 60px', 'bg-dimensions: 80px 60px',
    'background-proportion: 80px 60px', 'alpha-effect: bg-resize 80px 60px'], 
    0);

const cssQuestion4 = new Questions('Css', 'How to rotate objects using CSS3?', ['object-rotation: 30deg', 'transform: rotate(30deg)', 'rotate-object: 30deg', 
    'transform: rotate-30deg-clockwise'], 
    1);

const cssQuestion5 = new Questions('Css', 'What does the a stand for in RGBa?', ['aqua', 'Apple', 'about', 'alpha'], 
    3);

const jsQuestion1 = new Questions('Js', 'Inside which HTML element do we put the JavaScript?', ['<script>', '<scripting>', '<javascript>', 'js'],
    0);

const jsQuestion2 = new Questions('Js', ' Which attribute needs to be changed to make elements invisible?', ['visible', 'invisibility', 'visibilty ', 'invisible'],
    2);

const jsQuestion3 = new Questions('Js', 'Which of the ways below is incorrect of instantiating a date?', ['new Date(dateString)', 'new Date(seconds)', 'new Date()',
    'new Date(year, month, day, hours, minutes, seconds, milliseconds)'],
    1);

const jsQuestion4 = new Questions('Js', 'Which of the following is the tainted property of a window object in Java Script?', ['Pathname', 'Protocol', 'Defaultstatus', 'Host'],
    2);

const jsQuestion5 = new Questions('Js', 'Which of the following is used to capture all click events in a window?', ['window.captureEvents(Event.CLICK)', 'window.routeEvents(Event.CLICK )',
    'window.handleEvents (Event.CLICK)', 'window.raiseEvents(Event.CLICK )'], 
    0);

const jsQuestion6 = new Questions('Js', 'What language defines the behavior of a web page?', ['HTML', 'CSS', 'XML', 'Java Script'], 
    3);

const jsQuestion7 = new Questions('Js', 'What is the alternate name for Java script?', ['LimeScript', 'Both a and d', 'ECMScript', 'ECMAScript'], 
    3);    

const jsQuestion8 = new Questions('Js', 'How to append a value to an array of Java Script?', ['arr[arr.length] = value', 'arr[arr.length+1] = new Arrays()',
    'arr[arr.length-1] = value', 'arr[arr.length*1] = value'], 
    0); 

const jsQuestion9 = new Questions('Js', 'Why so Java and JavaScript have similar name?', ['Java Script is a stripped-down version of Java', 'The syntax of JavaScript is loosely based on Java syntax',
    'They both support Object Oriented Programming', 'None of the above'], 
    1); 

const jsQuestion10 = new Questions('Js', 'Which of the following is not a valid JavaScript variable name?', ['_java_and_ java _names','2java', 'javaandjava', 'None of the above'], 
    1);
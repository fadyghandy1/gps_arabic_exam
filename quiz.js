var wrong_counter=0;

var l2 =document.getElementById("l2")

const quizdata = [
  {
    question: "قال تعالى: ﴿وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ",
    a: "في الناس",
    b: "بالحج",
    c: "يأتوك",
    d: "رجالًا",
    correct: "c",
  },
  {
    question: "ميز الجملة التي يصحُّ جزم المضارع في جواب طلبها من بين الجمل التالية:",
    a: "تمتع بحديقة تمتلئ بالأزهار الجميلة ",
    b: "اقرأ ما شئت تستفد",
    c: "أحسن إلى بائس يضجُّ بالشكوى",
    d: "لا تتخلَّ عن حرٍّ ينزلُ به الضرُّ",
    correct: "b",
  },
  {
    question: "يتكون الانسان من كام عضو",
    a: "۱",
    b: "٥ ",
    c: "٧ ",
    d: "۹",
    correct: "b",
  },
  {
      question: "قال تعالى: ﴿وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ",
      a: "في الناس",
      b: "بالحج",
      c: "يأتوك",
      d: "رجالًا",
      correct: "c",
    },
    {
      question: "ميز الجملة التي يصحُّ جزم المضارع في جواب طلبها من بين الجمل التالية:",
      a: "تمتع بحديقة تمتلئ بالأزهار الجميلة ",
      b: "اقرأ ما شئت تستفد",
      c: "أحسن إلى بائس يضجُّ بالشكوى",
      d: "لا تتخلَّ عن حرٍّ ينزلُ به الضرُّ",
      correct: "b",
    },
    {
      question: "يتكون الانسان من كام عضو",
      a: "۱",
      b: "٥ ",
      c: "٧ ",
      d: "۹",
      correct: "b",
    },
];
var yy = window.localStorage.getItem('numOfQuesion');
console.log(yy , "fffffffffffffff");
String.prototype.toIndiaDigits= function(){
  var id= ['۰','۱','۲','۳','٦','٥','٤','۷','۸','۹'];
  return this.replace(/[0-9]/g, function(w){
   return id[+w]
  });
 }

let submitbtn = document.getElementById("submit");
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let question = document.getElementById("question");
let answer = document.querySelectorAll(".answer")
// options
let opt_a = document.getElementById("a_value");
let opt_b = document.getElementById("b_value");
let opt_c = document.getElementById("c_value");
let opt_d = document.getElementById("d_value");
// submit btn

let next = document.getElementById("next");
let prev = document.getElementById("prev");
var qno = 0;
var score = 0;
// function gonext() {
//   if( qno <2){qno ++;}
  
//   console.log(qno)
//   question.innerHTML = quizdata[qno].question;
//   opt_a.innerHTML = quizdata[qno].a;
//   opt_b.innerHTML = quizdata[qno].b;
//   opt_c.innerHTML = quizdata[qno].c;
//   opt_d.innerHTML = quizdata[qno].d;
// }
// function goback() {
//   if( qno > 0){qno --;}
//   console.log(qno)
//   question.innerHTML = quizdata[qno].question;
//   opt_a.innerHTML = quizdata[qno].a;
//   opt_b.innerHTML = quizdata[qno].b;
//   opt_c.innerHTML = quizdata[qno].c;
//   opt_d.innerHTML = quizdata[qno].d;
// }
// next.addEventListener("click",gonext)
// prev.addEventListener("click",goback)

loadQuiz();

function loadQuiz() {
 // deselect();
 
  question.innerHTML = quizdata[yy].question;
  opt_a.innerHTML = quizdata[yy].a;
  opt_b.innerHTML = quizdata[yy].b;
  opt_c.innerHTML = quizdata[yy].c;
  opt_d.innerHTML = quizdata[yy].d;
}

function deselect() {
  answer.forEach((answer) => (answer.checked = false));
  answer.forEach((answer) => (answer.disabled = true));
}

function select() {
  answer.forEach((answer) => (answer.checked = true));
  answer.forEach((answer) => (answer.disabled = false));
}


submitbtn.addEventListener("click", () => {
  let selection;
  // gonext()
  answer.forEach((answer) => {
    if (answer.checked) {
      selection = answer.id;
      
    }
  });

  if (selection == quizdata[yy].correct) {
    score += 1;
    console.log(quizdata[yy].correct)
    
    modal.style.display = "block";
    document.getElementById('corr').innerHTML=`اجابه صحيحه`
  }
  else{

    modal.style.display = "block";
    document.getElementById('corr').innerHTML=`اعد المحاولة  `
    console.log(qno)
        wrong_counter +=1;

    if (wrong_counter ==2) {
      modal.style.display = "block";
      document.getElementById('corr').innerHTML=`خطأ  `
      document.getElementById("submit").innerHTML = "خطأ!!  تعرف على الاجابة" ;
       deselect()
    }
    if (wrong_counter >=3) {


      for (const [key, value] of Object.entries(quizdata[qno])) {
          console.log(qno)
          console.log(`${key} ${value}`)
        if(quizdata[qno].correct==key){
        
          modal.style.display = "block";
          document.getElementById('corr').innerHTML=`the correct Answer is :  ${quizdata[yy].correct} `
          
          document.getElementById('submit').innerHTML="تأكيد"
         
          wrong_counter= 0
          select()
        }
        else{
          console.log(" errr")
        }
      }


    }
  }


  if (qno == quizdata.length) {
    next.style.display='none'
    prev.style.display='none'
    document.getElementById(
      "quizdiv"
    ).innerHTML = `<h3> لقد جاوبت ${score} صحيحة من  ${quizdata.length} </h3>`;
  } else {
    loadQuiz();
  }
});

var progressbar = document.getElementById("progressbar");

 function pro(){
  if (yy >=quizdata.length){ return; }
  
   progressbar.style.width= (Math.round(100 * yy / quizdata.length)) + "%";
};
pro()
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
  //var bt = getElementById("btn1")

 
 function load(qnum, qno){
  let codeBlock = ` <div class="main">
      <div class="logo">
      <img src="1.svg">
          </div>
          <div class="two">
          <div class="question">
              <h4 id="question">`+ qnum + `</div>
              <div class="bt">
                  <button class="sub" id ="`+qno+`">` + "مشاهدة السؤال"+ `
                  </button>
              </div>
              </div>
          </div>
         
   </div> `

 
            
              var x = document.createElement("div")
             x.innerHTML = codeBlock;
              document.getElementById("cont").appendChild(x)
            }

            for ( let qno = 0; qno < quizdata.length; qno++) {
               
                load(quizdata[qno].question,qno)
                document.getElementById(qno).addEventListener("click",  function(){
                  // console.log(qno)
                   var y =window.localStorage.setItem('numOfQuesion', qno);
                     var yy = window.localStorage.getItem('numOfQuesion');
                     console.log(yy) 
                     location.href = "quiz.html";
                    
                });

            }
    

           
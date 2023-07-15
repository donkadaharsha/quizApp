const options = document.querySelectorAll('.options')

const map = new Map([
  ["C:\\Users\\vardh\\OneDrive\\Documents\\study\\PersonalBlog\\quizApp\\placepics\\TajMahal.jpeg", "Taj Mahal"],
  ["C:\\Users\\vardh\\OneDrive\\Documents\\study\\PersonalBlog\\quizApp\\placepics\\Colosseum.jpeg", "Colosseum"],
  ["C:\\Users\\vardh\\OneDrive\\Documents\\study\\PersonalBlog\\quizApp\\placepics\\Eiffel Tower.jpg", "Eiffel Tower"],
  ["C:\\Users\\vardh\\OneDrive\\Documents\\study\\PersonalBlog\\quizApp\\placepics\\Machu_Picchu,_Peru.jpg", "Macchu Picchu"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/The-Great-Wall-of-China-Legend-of-the-Falls-2.jpg","Great wall of China"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/Egypt.jpg","Egypt"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/germany.jpg","Germany"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/golden-gate-bridge.jpg","Golden gate bridge"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/Jatayu_earths_center.jpg","Jatayu Earth's center"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/merlion_singapore.jpeg","Singapore"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/Modus_nov21_burjkhalifa_header_v2.jpg","Burj Khalifa"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/Mount_Rushmore_detail_view_(100MP).jpg","Mount Rushmore"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/rio_de_jenerio_christ.jpg","Rio De Jenerio"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/spain.jpg","Spain"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/statueofliberty.jpeg","Statue of Liberty"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/800px-The_Golden_Temple_of_Amrithsar_7.jpg"
  ,"Golden Temple, Amritsar"],
  ["C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/placepics/3Falls_Niagara.jpg","Niagra Falls"]
]);
let final_score = document.getElementById('score');
let restart = document.getElementById('restart')
let x=0;
  

  let i = 0;
  let n=0;
  let j=0;
  var keys = [...map.keys()];
  let values = [...map.values()]
  const imageid = document.getElementById('image');
  const option1 = document.getElementById('option1')
  const option2 = document.getElementById('option2')
  const option3 = document.getElementById('option3')
  const option4 = document.getElementById('option4')

  const choices = ["Taj Mahal","Italy","Denmark","Ibiza",
  "Brazil","Colosseum","France","India",
  "Sri Lanka","Bermuda","Eiffel Tower","Latehar",
  "Macchu Picchu","Vizag","Banglore","Hyderabad"
  ,"Great wall of China","Santorini","Sagrada Familia","Singapore"
  ,"Machu Picchu","Taj Mahal","Egypt","Christ the Redeemer"
  ,"Eiffel Tower","Germany","Colosseum","Pyramids of Giza"
  ,"Demolished bridge","London Bridge","Red Cable bridge","Golden gate bridge"
  ,"Sydney Opera House","Petra","Jatayu Earth's center","Angkor Wat"
  ,"Cappadocia","Santorini","Sagrada Familia","Singapore"
  ,"The Louvre","Burj Khalifa","Neuschwanstein Castle","Iguazu Falls"
  ,"Egypt","Stonehenge","Mount Everest","Mount Rushmore"
  ,"Eco Park","Stonehenge","Statue of Liberty","Rio De Jenerio"
  ,"Canada","France","Brazil","Spain"
  ,"Statue of Liberty","Hollywood Sign","Statue of Unity","Potala Palace"
  ,"Golden Temple, Amritsar","Sistine Chapel","Mesa Verde National Park","Mount Everest"
,"Great falls","Niagra Falls","Lake Thuderbird","Eco Park"]



function startGame(){
  document.getElementById('container').style.display = 'block';
  let timer = document.getElementById('Timer')
  let k= 30
  
    
    setInterval(function(){
      k--;
    timer.innerText = k;
  },1000);

  imageid.src = keys[0];
  option1.innerText = choices[0];
  option2.innerText = choices[1];
  option3.innerText = choices[2];
  option4.innerText = choices[3];
}

options.forEach(option => option.addEventListener('click',function(e){

    
 
    
  disable();
 
    let value = values[i];
    const id = e.target.id;
   
    const searchText = value; // Replace with the inner text you want to find

const divElements = Array.from(document.getElementsByTagName("div")); // Convert NodeList to an array

const correct_option = divElements.find(element => element.textContent === searchText);


    const selected_option = document.getElementById(id);
   
    
    if(selected_option.innerText === value){
      
      disable();
      
    selected_option.style.backgroundColor = 'green';
    x=x+1;   
        setTimeout(function(){
          
        imageid.src = keys[j];
        
        },1000);
        i+=1;
        j+=1
        n=n+4
        setTimeout(function(){
          changeOptions(n);
          enable();
      }, 1000);
      setTimeout(function(){
        selected_option.style.removeProperty("background-color");
        },1000);
        
    } 
    else{
        disable();
        selected_option.style.backgroundColor = '#C72828'
        correct_option.style.backgroundColor = 'green'
        setTimeout(function(){
          imageid.src = keys[j];
          },1000);
          i+=1;
          j+=1
          n=n+4
        setTimeout(function(){
        changeOptions(n);
        enable();
        },1000);
        setTimeout(function(){
          selected_option.style.removeProperty("background-color");
          },1000);
        setTimeout(function(){
          correct_option.style.removeProperty("background-color");
          },1000);
        
    }
    
   
       
     
}))

function changeOptions(n){
  
 
    option1.innerText = choices[n];
    option2.innerText = choices[n+1];
    option3.innerText = choices[n+2];
    option4.innerText = choices[n+3];
  
}

function disable(){
  document.getElementById('option1').style.pointerEvents = 'none';
  document.getElementById('option2').style.pointerEvents = 'none';
  document.getElementById('option3').style.pointerEvents = 'none';
  document.getElementById('option4').style.pointerEvents = 'none';
}

function enable(){
  document.getElementById('option1').style.pointerEvents = 'auto';
  document.getElementById('option2').style.pointerEvents = 'auto';
  document.getElementById('option3').style.pointerEvents = 'auto';
  document.getElementById('option4').style.pointerEvents = 'auto';
}
setTimeout(function(){
  if(startbutton.style.display === 'none'){
  final_score.innerText = `SCORE: ${x}`;
  final_score.style.display = 'block';
  imageid.style.display = 'none';
  document.getElementById('container').style.display = 'none';
  restart.style.display = 'block'}
  
  },30000);

  restart.addEventListener('click',function(){
    window.location.href = "C:/Users/vardh/OneDrive/Documents/study/PersonalBlog/quizApp/play.html"
  })
// countdown()

const startbutton = document.getElementById('start');
startbutton.addEventListener('click',function(){
  startbutton.style.display = 'none'
  startGame()
})



// countdown()
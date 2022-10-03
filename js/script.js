var tasks = [
    "Enact any of your friends or teacher.",
  "Sing a Song or dance.",
  "Tell your Favourite song without actually singing it.",
  "Blind folded Drawing",
  "Cry like a Baby or do a dramatic crying scene",
  "Introduce yourself through a song.(preferably Hindi or English)",
  "Your Future Plans in 5 words.",
  "Your Current Situation in a Movie Name",
  "Say the Alphabets in the reverse order.",
  "Tell any 5 coordinators name, which coordinator did you like the most  !! and Whyy? ",
  "Tell a nursery Rhyme.",
  "Don't Use the Internet For a Week",
  "Lets see if you can solve some Riddles :)",
  "Tell all the subjects name of your current semester.",
  "tell ur college name.",
  "5 things about yourself, which you don't like much.",
  "First impression of College.",
  "Do a headstand for 10 sec.",
  "Mission and Vision of Department :) ",
  "if you were to Shoot 3 idiots with your class, who would be the actors?",
  "Quick Questions, answer in 5 sec !!",
  "Are you a Techie ? Lets find out.",
  "Think about things diffrently for getting new ideas.",
  "If you met a genie, what would your three wishes be?",
  "If you could write anyone on Earth in for President of the United States, who would it be and why?",
  "Keep three ice cubes in your mouth until they melt",
  "Write an autobiography",
  "Tell a funny incident that happened to you!",
  "Tell 5 of your favourite games!",
  "Talk to yourself!",
  "Change your work way every problem has a solution",
  "Drink some water, hydrate yourself",
  "Stretch those muscles and joints, posture check",
  "Drink some milk, Make yourself stronger 💪",
  "Go workout for sometime to make yourself fit!",
  "Go out for sometime and interact with the nature!",
  "In act your best friend!",
  "Purpose of your life is to be happy"
];

function getTask() {
  var randNum = Math.floor(Math.random() * tasks.length);
  document.getElementById('task').innerHTML = tasks[randNum];
}
var counter="green";
function changeTheme(){
  var b=document.getElementById("btn");
  const c=document.querySelectorAll(".output");
  const o=document.querySelector(".overlay");
  const bt=document.querySelector("#btn");
  if(counter=="green")
  {
    document.body.style.color='#cb141d';
    document.body.style.textShadow=" 0 0 1ex #ff3333,0 0 2px #ffffffcc;";
    document.body.style.backgroundImage="radial-gradient(#581111, #041607);"
    c.forEach(e=>{
      e.style.setProperty("--output-color","#e21818cc")
      e.style.setProperty("--output-primary","#ff333366")
    }
    )
    b.style.border="solid red 1px";
    o.style.setProperty("--overlay-primary","#80202033")
    o.style.setProperty("--overlay-secondary","#802020cc")
    bt.style.setProperty("--btn-primary","#9b0000")
    bt.style.setProperty("--btn-secondary","#ff0000")
    counter="red";
  }
  else{
    document.body.style.color="#80ff80cc";
    document.body.style.textShadow=" 0 0 1ex #33ff33,0 0 2px #ffffffcc;";
    document.body.style.backgroundImage="radial-gradient(#11581E, #041607);"
    c.forEach(e=>{
      e.style.setProperty("--output-color","#80ff80cc")
      e.style.setProperty("--output-primary","#33ff3366")
    }
    )
    b.style.border="solid green 1px";
    o.style.setProperty("--overlay-primary","#20802033")
    o.style.setProperty("--overlay-secondary","#208020cc")
    bt.style.setProperty("--btn-primary","#009b27")
    bt.style.setProperty("--btn-secondary","#00ff0d")
    counter="green";
  }
}

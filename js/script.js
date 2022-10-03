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
  "Are you a Techie ? Lets find out."
];

function getTask() {
  var randNum = Math.floor(Math.random() * tasks.length);
  document.getElementById('task').innerHTML = tasks[randNum];
}

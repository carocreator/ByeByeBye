// 1. VARIABLES AND FUNCTION DEFINITIONS

var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 2. RAW TEXT STRINGS

var storyText = "Title: :insertx: // :inserty: // :insertz:";

var insertX = [
  "You might been hurt",
  "Babe",
  "No man, no cry",
  "I'm not like them",
  "You've got no choice",
  "Is not enough for you",
  "You may hate me",
  "Baby come on",
  "Bye bye",
  "I feel it too",
  "Why we can't be lovers",
  "You hit me with the truth",
  "Give me one good reason",
  "Why we can't be lovers",
  "It's tearin' up my heart",
  "I loved you endlessly",
  "I feel the pain",
  "Baby I don't understand",
  "Why we can't be lovers",
  "I am down, on my knees",
  "With or without you",
  "You're all I ever wanted",
  "Yeah",
  "It's hard to say I'm sorry",
  "You're the one I want",
  "Hey baby come on",
  "Oh, oh",
  "It's a miracle",
  "Your love is like a river",
  "Your soul is like a secret",
  "Saigon, shit",
  "Stand at ease",
  "Do you want a cigarette?",
  "I wanna go to Vietnam",
  "I wanna kill a Vietcong",
  "I watched a small snail",
  "It's my nightmare",
  "Crawling, slithering",
  "And surviving",
  "But we must kill them",
  "Pig after pig",
  "Cow after cow",
  "Village after village",
  "Army after army",
  "Your mission",
  "This mission does not exist",
  "The crew were mostly kids",
  "To look at him",
  "Wrapped too tight for Vietnam",
  "Arc light",
  "B-52 strike",
  "Smoke! Secondary burning",
  "Don't look at the camera",
  "Johnny from Malibu",
  "We're pretty solid surfers"
];

var insertY = [
  "And now I'm left with all this pain",
  "Don't want to be a fool for you",
  "You confessed your love",
  "If you want me girl, let me know",
  "It feels like we're running out of time",
  "It's hard to make the things undone",
  "Don't hang up the phone now",
  "I'm going crazy without you",
  "Promises never last forever",
  "I said that everything would be all right",
  "When I look into your eyes",
  "I will take you in my arms",
  "If you want me girl, let me know",
  "This is a battle we've won",
  "I know you like this dirty pop",
  "You confessed your love",
  "Now I cry alone in the dark",
  "You confessed your love",
  "What's the deal with this pop life",
  "And the music's all you got",
  "He doesn't even know you're there",
  "'Cause he don't love your eyes",
  "And he don't love your smile",
  "Won't you be my girlfriend",
  "'Cause if you were my girlfriend",
  "I was going to the worst place in the world",
  "No way to tell his story without telling my own",
  "Captain, I don't know how you feel about this shrimp",
  "Crawling on the edge of a straight razor",
  "Up the Nung River in a navy patrol boat",
  "How many people had I already killed?",
  "Close enough to blow their last breath in my face",
  "Rock 'n' rollers with one foot in their graves",
  "Controlled by the Vietcong and North Vietnamese",
  "The smell of napalm in the morning",
  "How hard it is to find a board that you like",
  "I'm done with this goddamn fucking shit",
  "You can kiss my ass on the county square",
  "I didn't get on the goddamn A train for this kind of shit",
  "My mission is to make it up to Cambodia",
  "I'm an American. An American civilian",
  "Don't try to escape, you'll be shot",
  "Would they still want me to kill hm?",
  "You must make a friend of horror",
  "Horror and moral terror are your friends",
  "The whole hill smelled like victory",
  "That's the colonel's surfboard",
  "And he don't love your smile",
  "Almost got eaten by a fucking tiger",
  "And he don't love your smile",
  "This colonel guy, he's wacko, man",
  "You must make a friend of horror",
  "'if' is the middle word in 'life'",
  "No right to call me a murderer"
];

var insertZ = [
  "I'm fucking bugging out",
  "Really un-fucking believable",
  "Destination classified",
  "Why we can't be lovers",
  "I'm supposed to kill him",
  "Hi, Yanks. Hi",
  "Why we can't be lovers",
  "It smelled like slow death",
  "Malaria and nightmares",
  "I'm a soldier",
  "I've seen horrors",
  "Horrors that you've seen",
  "You have a right to kill me",
  "No right to judge me",
  "Horror",
  "Horror has a face",
  "The horror, the horror",
  "I've seen horrors",
  "Horrors that you've seen",
  "Horror",
  "Horror has a face",
  "The horror, the horror",
  "I've seen horrors",
  "Horrors that you've seen",
  "Horror",
  "Horror has a face",
  "The horror, the horror",
  "The warmth of your smile",
  "This I promise you",
  "I've loved you forever",
  "I give you my heart",
  "Lying in your arms",
  "So close together",
  "Where was my heart?",
  "I lie awake",
  "I drive myself crazy",
  "Thinking of you",
  "Made a mistake",
  "I was such a fool",
  "Come on now",
  "Man I'm tired of singing",
  "Dirty, dirty, dirty pop",
  "I loved you endlessly",
  "Why we can't be lovers",
  "Your love is like a river",
  "I've loved you forever",
  "I loved you endlessly",
  "Why we can't be lovers",
  "Your love is like a river",
  "I've loved you forever",
  "I loved you endlessly",
  "I loved you endlessly",
  "I loved you endlessly",
  "I loved you endlessly",
  "Why we can't be lovers",
  "Your love is like a river",
  "I've loved you forever",
  "Why we can't be lovers",
  "Why we can't be lovers",
  "Why we can't be lovers",
  "Why we can't be lovers",
  "Why we can't be lovers",
  "Why we can't be lovers"
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory
    .replace(/:insertx:/g, xItem)
    .replace(/:inserty:/g, yItem)
    .replace(/:insertz:/g, zItem);

  if (customName.value !== "") {
    var name = customName.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name);
    newStory = newStory.replace(/Title/g, name);
  }

  if (document.getElementById("uk").checked) {
    var weight = "horror";
    newStory = newStory.replace("love", weight);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}

randomize.addEventListener("click", result);

// Image change:

/*

});


function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("story", 3);

var test = "hallo";
console.log(test.repeat([10]));

*/

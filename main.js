console.log('welcome to javascript revision');

//increment and decrement a variable
var count=0;
console.log(count);
count++;
console.log(count);
count=count+7;
console.log(count);
count--;
console.log(count);
count=count-4;
console.log(count);


var count=2
console.log(count);//2
count--;
console.log(count);//1
count=count+9;
console.log(count);//10

//String
var fav_flower_01 = "Jasmine";
var fav_flower_02 = "Lavender";

//joining a string 
var fav_flowers = fav_flower_01+ " & " + fav_flower_02;
console.log(fav_flowers);

//finding length of a string
var fav_flowers_ka_length = fav_flowers.length;
console.log(fav_flowers_ka_length);

//getting a single character from string
var fav_flowers_char = fav_flowers.charAt(2);
console.log(fav_flowers_char);

//cutting up string
var fav_flowers_slice = fav_flowers.slice(3,7);
console.log(fav_flowers_slice);

var fav_flowers_slice2 = fav_flowers.slice(12,18);
console.log(fav_flowers_slice2);

//change string to all capital 
var fav_flowers_1_uppercase = fav_flowers.toUpperCase();
console.log(fav_flowers_1_uppercase);
//change string ti lower case
var fav_flowers_1_lowercase = fav_flowers.toLowerCase();
console.log(fav_flowers_1_lowercase);

//Boolean
var is20equalto20 = Boolean(20 != 20);
console.log(is20equalto20);
var is20equalto21 = 20 !=21;
console.log(is20equalto21);
var is9GreaterThan15 = 9 > 15;
console.log(is9GreaterThan15);

//&& and
var final_decision_1 =is20equalto20  && is20equalto21 ;
console.log(final_decision_1);

// || or

var final_decision_2 = is20equalto20 || is20equalto21;
console.log(final_decision_2);





//Arrays(special variable which can hold more than one value);
const animals = ["rabbit","giraffe","cat","elephant"];
console.log(animals);

//accessing some array element
var second_fav_animal = animals[1];
console.log(second_fav_animal);

//length of array
var no_of_animals = animals.length;
console.log(no_of_animals);

//print second last fav animal
var second_last_fav_animals = animals[no_of_animals - 2];
console.log(second_last_fav_animals);

//print second last character of last fav animals string
var last_fav_animal = animals[no_of_animals-1];
console.log(last_fav_animal);

var len_last_fav_animal = last_fav_animal.length;
console.log(len_last_fav_animal);

var sec_last_char_last_fav_animal = last_fav_animal.charAt(len_last_fav_animal-2);
console.log(sec_last_char_last_fav_animal);

//print 4th last character of third last fav flower string
var third_last_fav_animal = animals[no_of_animals-3];
console.log(third_last_fav_animal);

var len_third_last_fav_animal = third_last_fav_animal.length;
console.log(len_third_last_fav_animal);

fourth_last_char = third_last_fav_animal.charAt(len_third_last_fav_animal-4);
console.log(fourth_last_char);

//slice of fourth last fav animal 
//rabbit ...slice = "bit"

var fourth_last_fav_animal = animals[no_of_animals-4];
console.log(fourth_last_fav_animal);

var len_fourth_last_fav_animal = fourth_last_fav_animal.length;
console.log(len_fourth_last_fav_animal);

var slice_fourth_last_fav_animal = fourth_last_fav_animal.slice(3,6);
console.log(slice_fourth_last_fav_animal);

//ARRAY operations
//Push i.e add element from last
animals.push("sheep");
console.log(animals);

animals.pop();
console.log(animals);

animals.shift();
console.log(animals);

animals.unshift("panda");
console.log(animals);

animals.splice(1,2,"lion","tiger");
console.log(animals);



//if else OPERATOR
//USE CASE 1
var age = 17

if(age<18){
  console.log("Not an Adult");
}else{
  console.log("Adult");
}


//if else ladder
var age2 = 17;

if(age2<=14){
  console.log("children");
}else if(age2>=15 && age2<=19){
  console.log("youth");
}else if(age2>=20 && age2<=64){
  console.log("adult");
}else{
  console.log("senior"); 
}


//loop 
for(i=0;i<5;i++){
  console.log("hello");
}




//USE CASE 2
const names = ["Radha", "Diksha", "Khushi", "Sheetal", "Rukhmini"];

const admins = ["Radha", "Diksha"];

for (var i = 0; i < names.length; i++) {
  var current_names = names[i];
  var IsAdmin = false;

  for (var j = 0; j < admins.length; j++) {
    var admins_jth_index = admins[j];
    if (current_names === admins_jth_index) {
      IsAdmin = true;
    }
  }

  console.log(names[i]);

  if (IsAdmin) {
    console.log("She is an Admin");
  } else {
    console.log("She is not an Admin");
  }
}
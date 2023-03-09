/* ---------------   constante pour les exercices  -------------------- */

const listeAnimaux = ['caniche', 'persan', 'canari', 'saumon'];

const animaux = [
  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'caniche',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'persan',
  },

  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'canari',
  },

  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'saumon',
  },
];

/* ---------------   EXERCICE 1  -------------------- */

/* écrivez votre code ici */

function listingAnimals(){
  for(let i = 0; i < listeAnimaux.length; i++){
  console.log(listeAnimaux[i]);
  }
}

listingAnimals();


/* ---------------   EXERCICE 2  -------------------- */

let arrayAnimals = [];
let finalSentence;

function listingAnimalsImproved(){
  for(let i = 0; i < animaux.length; i++){
    arrayAnimals.push(`Je suis un ${animaux[i].race} `);
  }
  finalSentence = arrayAnimals.join('');
  console.log(finalSentence);
}

listingAnimalsImproved();


/* ---------------   EXERCICE 3  -------------------- */

arrayAnimals = [];
finalSentence;

function listingAnimalsExo3(){
  for(let i = 0; i < animaux.length; i++){
    arrayAnimals.push(`Je suis un ${animaux[i].race}, `);
    arrayAnimals.push(`je possède ${animaux[i].patte} pattes `);
    if(animaux[i].poils == true){
      arrayAnimals.push(`et j'ai des poils `);
    } else {
      arrayAnimals.push(`et je n'ai pas de poils `); 
    }
  }
  finalSentence = arrayAnimals.join('');
  console.log(finalSentence);
}

listingAnimalsExo3();




/* ---------------   EXERCICE 4  -------------------- */

arrayAnimals = [];
finalSentence;

function listingAnimalsExo4(){
  for(let i = 0; i < animaux.length; i++){
    arrayAnimals.push(`Je suis un ${animaux[i].race}, `);
    arrayAnimals.push(`je possède ${animaux[i].patte} pattes `);
    if(animaux[i].poils == true){
      arrayAnimals.push(`et j'ai des poils `);
    } else {
      switch (animaux[i].famille){
        case "chat" :
          arrayAnimals.push(`et je n'ai pas de poils `); 
          break;
        case "chien" :
          arrayAnimals.push(`et je n'ai pas de poils `); 
          break;
        case "oiseau" :
          arrayAnimals.push(`et j'ai des plumes `); 
          break;
        case "poisson" :
          arrayAnimals.push(`et j'ai des écailles `); 
          break;
      }
    }
  }
  finalSentence = arrayAnimals.join('');
  console.log(finalSentence);
}

listingAnimalsExo4();











/* ---------------   BONUS  -------------------- */

const animaux2 = [
  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'dalmatien',
  },

  {
    famille: 'chien',
    patte: 4,
    poils: true,
    race: 'dobermann',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'siberien',
  },

  {
    famille: 'chat',
    patte: 4,
    poils: true,
    race: 'chartreux',
  },

  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'rouge gorge',
  },
  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'perroquet',
  },
  {
    famille: 'oiseau',
    patte: 2,
    poils: false,
    race: 'faisan',
  },

  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'thon',
  },
  {
    famille: 'poisson',
    patte: 0,
    poils: false,
    race: 'bar',
  },
];


arrayAnimals = [];
finalSentence;

function listingAnimalsBonus1(){
  for(let i = 0; i < animaux.length; i++){
    arrayAnimals.push(`Je suis un ${animaux[i].race}, `);
    arrayAnimals.push(`je possède ${animaux[i].patte} pattes `);
    if(animaux[i].poils == true){
      arrayAnimals.push(`et j'ai des poils `);
    } else {
      switch (animaux[i].famille){
        case "chat" :
          arrayAnimals.push(`et je n'ai pas de poils `); 
          break;
        case "chien" :
          arrayAnimals.push(`et je n'ai pas de poils `); 
          break;
        case "oiseau" :
          arrayAnimals.push(`et j'ai des plumes `); 
          break;
        case "poisson" :
          arrayAnimals.push(`et j'ai des écailles `); 
          break;
      }
    }
  }
  finalSentence = arrayAnimals.join('');
  console.log(finalSentence);
}

listingAnimalsBonus1();


arrayAnimals = [];
finalSentence;

function listingAnimalsBonus2(){
  for(let i = 0; i < animaux2.length; i++){
    arrayAnimals.push(`Je suis un ${animaux2[i].race}, `);
    arrayAnimals.push(`je possède ${animaux2[i].patte} pattes `);
    if(animaux2[i].poils == true){
      arrayAnimals.push(`et j'ai des poils `);
    } else {
      switch (animaux2[i].famille){
        case "chat" :
          arrayAnimals.push(`et je n'ai pas de poils `); 
          break;
        case "chien" :
          arrayAnimals.push(`et je n'ai pas de poils `); 
          break;
        case "oiseau" :
          arrayAnimals.push(`et j'ai des plumes `); 
          break;
        case "poisson" :
          arrayAnimals.push(`et j'ai des écailles `); 
          break;
      }
    }
  }
  finalSentence = arrayAnimals.join('');
  console.log(finalSentence);
}

listingAnimalsBonus2();


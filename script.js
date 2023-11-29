const characters = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};

const content_ = document.getElementById("content_html");
const button_content = document.getElementById("my-button");
const content2_ = document.getElementById("content_html2");
const element = document.getElementById("my-button");

const homeworldsRaw = []; //Home world array that is raw

//This 'for' loop pushes all of the homeworld  in the characters object into the raw array (in lower case) that created earlier
for (const character of characters.characters) {
  const homeworld_ = character.homeworld ?? "other";
  homeworldsRaw.push(homeworld_.toLowerCase());
}

//Creating another array and deleting the duplicates by using set method
const homeworlds = [...new Set(homeworldsRaw)];

//This function is for generating radio in form by given homeworld
function generateRadio(homeworld) {
  return `
      <div class="form-check mt-3">
        <input class="form-check-input" type="radio" name="myRadios" id="homeworld-${homeworld}" value="${homeworld}">
        <label class="form-check-label" for="homeworld-${homeworld}">${homeworld}</label>
      </div>`;
}

//This 'for' loop is for calling generating radio function for every array element in the homeworlds array
for (const homeworld of homeworlds) {
  content2_.innerHTML += generateRadio(homeworld);
}

//This function is for generating character card for given character
function generateCharacter(character) {
  return `
      <div class="col mb-3 d-flex justify-content-center">
        <div class="card" style="width: 18rem">
          <img src="${character.pic}" style="height: 400px;" class="img-fluid card-img-top" alt="Star Wars Character ${character.name} picture" />
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">${character.homeworld}</p>
          </div>
        </div>
      </div>`;
}

//This function is for reaching the selected radio and getting its value and calling show function to show character card
function getSelectedRadioButton() {
  let rad = content2_.myRadios;
  let i = 0;
  while (i < rad.length) {
    rad[i].addEventListener("change", function () {
      let filteredHomeworld = this.value;
      show(filteredHomeworld);
    });
    i++;
  }
}

//Calling the function
getSelectedRadioButton();

function show(filteredHomeworld) {
  hide(); // Clearing content that already shown
  if (filteredHomeworld != null) {
    //if filteredHomeworld is not null
    const filteredCharacters = characters.characters.filter(
      (
        character //Filtering the character
      ) =>
        (character.homeworld && //if character homeworld is not null and
          character.homeworld.toLowerCase() === filteredHomeworld) || //if it equals to the homeworld in array that is being turning into lower case //or
        (!character.homeworld && filteredHomeworld.toLowerCase() === "other") //if its undefined or null and checks if filtered one is equal to other
    );
    //generates character for character cards for each of the character that is filtered
    filteredCharacters.forEach((character) => {
      content_.innerHTML += generateCharacter(character);
    });
  } else {
    // Show all characters if no homeworld is selected
    characters.characters.forEach((character) => {
      content_.innerHTML += generateCharacter(character);
    });
  }
}

//Hides all the character cards
function hide() {
  content_.innerHTML = "";
}

//Letting toggle_button to false
let toggle_button = false;

function myFunction() {
  toggle_button = !toggle_button; //and equaling the toggle button to opposite every time its pressed
  element.classList.toggle("red-button"); //and toggling with the red-button class name that changes the color of the button
  if (toggle_button) {
    //if its true
    show(); //show the all of the characters
    button_content.innerHTML = "Hide Characters"; //and changing button text
  } else {
    hide(); //Hides all the characters
    button_content.innerHTML = "Show Characters"; //and changing button text
  }
}

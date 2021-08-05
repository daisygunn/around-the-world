/*jshint esversion: 6 */
/* globals $ */

// Game controls
const startButton = document.getElementById('start-button');
const quitButton = document.getElementById('quit-button');
const mainHeading = document.getElementById('main-heading');
const gameContainer = document.getElementById('game-container');
const nextQuestion = document.getElementById('next-question');

// Global variable so that it can be accessed from within functions
let isCorrectQuestionAnswer = '';

let currentScore = 0;
let questionCount = 0;

const scoreOutput = document.getElementById('score-total');
let questionCountOutput = document.getElementById('question-count');

// Array used to generate questions
const countriesList = [{
        country: 'Afghanistan',
        capital: 'Kabul'
    },
    {
        country: 'Albania',
        capital: 'Tirana'
    },
    {
        country: 'Algeria',
        capital: 'Algiers'
    },
    {
        country: 'Andorra',
        capital: 'Andorra la Vella'
    },
    {
        country: 'Angola',
        capital: 'Luanda'
    },
    {
        country: 'Antigua & Barbuda',
        capital: 'Saint John"s'
    },
    {
        country: 'Argentina',
        capital: 'Buenos Aires'
    },
    {
        country: 'Armenia',
        capital: 'Yerevan'
    },
    {
        country: 'Australia',
        capital: 'Canberra'
    },
    {
        country: 'Austria',
        capital: 'Vienna'
    },
    {
        country: 'Azerbaijan',
        capital: 'Baku'
    },
    {
        country: 'Bahamas',
        capital: 'Nassau'
    },
    {
        country: 'Bahrain',
        capital: 'Manama'
    },
    {
        country: 'Bangladesh',
        capital: 'Dhaka'
    },
    {
        country: 'Barbados',
        capital: 'Bridgetown'
    },
    {
        country: 'Belarus',
        capital: 'Minsk'
    },
    {
        country: 'Belgium',
        capital: 'Brussels'
    },
    {
        country: 'Belize',
        capital: 'Belmopan'
    },
    {
        country: 'Benin',
        capital: 'Porto-Novo'
    },
    {
        country: 'Bhutan',
        capital: 'Thimphu'
    },
    {
        country: 'Bolivia',
        capital: 'La Paz'
    },
    {
        country: 'Bosnia & Herzegovina',
        capital: 'Sarajevo'
    },
    {
        country: 'Botswana',
        capital: 'Gaborone'
    },
    {
        country: 'Brazil',
        capital: 'Brasilia'
    },
    {
        country: 'Brunei',
        capital: 'Bandar Seri Begawan'
    },
    {
        country: 'Bulgaria',
        capital: 'Sofia'
    },
    {
        country: 'Burkina Faso',
        capital: 'Ouagadougou'
    },
    {
        country: 'Burundi',
        capital: 'Gitega'
    },
    {
        country: 'Cabo Verde',
        capital: 'Praia'
    },
    {
        country: 'Cambodia',
        capital: 'Phnom Penh'
    },
    {
        country: 'Cameroon',
        capital: 'Yaounde'
    },
    {
        country: 'Canada',
        capital: 'Ottawa'
    },
    {
        country: 'Chad',
        capital: "N'Djamena"
    },
    {
        country: 'Chile',
        capital: 'Santiago'
    },
    {
        country: 'China',
        capital: 'Beijing'
    },
    {
        country: 'Colombia',
        capital: 'Bogotá'
    },
    {
        country: 'Comoros',
        capital: 'Moroni'
    },
    {
        country: 'Democratic Republic of the Congo',
        capital: 'Kinshasa'
    },
    {
        country: 'Republic of the Congo',
        capital: 'Brazzaville'
    },
    {
        country: 'Costa Rica',
        capital: 'San Jose'
    },
    {
        country: "Cote d'Ivoire",
        capital: 'Yamoussoukro'
    },
    {
        country: 'Croatia',
        capital: 'Zagreb'
    },
    {
        country: 'Cuba',
        capital: 'Havana'
    },
    {
        country: 'Cyprus',
        capital: 'Nicosia'
    },
    {
        country: 'Czechia',
        capital: 'Prague'
    },
    {
        country: 'Denmark',
        capital: 'Copenhagen'
    },
    {
        country: 'Djibouti',
        capital: 'Djibouti (city)'
    },
    {
        country: 'Dominica',
        capital: 'Roseau'
    },
    {
        country: 'Dominican Republic',
        capital: 'Santo Domingo'
    },
    {
        country: 'Ecuador',
        capital: 'Quito'
    },
    {
        country: 'Egypt',
        capital: 'Cairo'
    },
    {
        country: 'El Salvador',
        capital: 'San Salvador'
    },
    {
        country: 'Equatorial Guinea',
        capital: 'Oyala'
    },
    {
        country: 'Eritrea',
        capital: 'Asmara'
    },
    {
        country: 'Estonia',
        capital: 'Tallinn'
    },
    {
        country: 'Eswatini',
        capital: 'Mbabane or Lobamba'
    },
    {
        country: 'Ethiopia',
        capital: 'Addis Ababa'
    },
    {
        country: 'Fiji',
        capital: 'Suva'
    },
    {
        country: 'Finland',
        capital: 'Helsinki'
    },
    {
        country: 'France',
        capital: 'Paris'
    },
    {
        country: 'Gabon',
        capital: 'Libreville'
    },
    {
        country: 'Gambia',
        capital: 'Banjul'
    },
    {
        country: 'Georgia',
        capital: 'Tbilisi'
    },
    {
        country: 'Germany',
        capital: 'Berlin'
    },
    {
        country: 'Ghana',
        capital: 'Accra'
    },
    {
        country: 'Greece',
        capital: 'Athens'
    },
    {
        country: 'Grenada',
        capital: "Saint George's"
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City'
    },
    {
        country: 'Guinea',
        capital: 'Conakry'
    },
    {
        country: 'Guinea-Bissau',
        capital: 'Bissau'
    },
    {
        country: 'Guyana',
        capital: 'Georgetown'
    },
    {
        country: 'Haiti',
        capital: 'Port-au-Prince'
    },
    {
        country: 'Honduras',
        capital: 'Tegucigalpa'
    },
    {
        country: 'Hungary',
        capital: 'Budapest'
    },
    {
        country: 'Iceland',
        capital: 'Reykjavik'
    },
    {
        country: 'India',
        capital: 'New Delhi'
    },
    {
        country: 'Indonesia',
        capital: 'Jakarta'
    },
    {
        country: 'Iran',
        capital: 'Tehran'
    },
    {
        country: 'Iraq',
        capital: 'Baghdad'
    },
    {
        country: 'Ireland',
        capital: 'Dublin'
    },
    {
        country: 'Israel',
        capital: 'Jerusalem'
    },
    {
        country: 'Italy',
        capital: 'Rome'
    },
    {
        country: 'Jamaica',
        capital: 'Kingston'
    },
    {
        country: 'Japan',
        capital: 'Tokyo'
    },
    {
        country: 'Jordan',
        capital: 'Amman'
    },
    {
        country: 'Kazakhstan',
        capital: 'Nur-Sultan'
    },
    {
        country: 'Kenya',
        capital: 'Nairobi'
    },
    {
        country: 'Kiribati',
        capital: 'Tarawa'
    },
    {
        country: 'Kosovo',
        capital: 'Pristina'
    },
    {
        country: 'Kuwait',
        capital: 'Kuwait City'
    },
    {
        country: 'Kyrgyzstan',
        capital: 'Bishkek'
    },
    {
        country: 'Laos',
        capital: 'Vientiane'
    },
    {
        country: 'Latvia',
        capital: 'Riga'
    },
    {
        country: 'Lebanon',
        capital: 'Beirut'
    },
    {
        country: 'Lesotho',
        capital: 'Maseru'
    },
    {
        country: 'Liberia',
        capital: 'Monrovia'
    },
    {
        country: 'Libya',
        capital: 'Tripoli'
    },
    {
        country: 'Liechtenstein',
        capital: 'Vaduz'
    },
    {
        country: 'Lithuania',
        capital: 'Vilnius'
    },
    {
        country: 'Luxembourg',
        capital: 'Luxembourg (city)'
    },
    {
        country: 'Madagascar',
        capital: 'Antananarivo'
    },
    {
        country: 'Malawi',
        capital: 'Lilongwe'
    },
    {
        country: 'Malaysia',
        capital: 'Kuala Lumpur'
    },
    {
        country: 'Maldives',
        capital: 'Male'
    },
    {
        country: 'Mali',
        capital: 'Bamako'
    },
    {
        country: 'Malta',
        capital: 'Valletta'
    },
    {
        country: 'Marshall Islands',
        capital: 'Majuro'
    },
    {
        country: 'Mauritania',
        capital: 'Nouakchott'
    },
    {
        country: 'Mauritius',
        capital: 'Port Louis'
    },
    {
        country: 'Mexico',
        capital: 'Mexico City'
    },
    {
        country: 'Micronesia',
        capital: 'Palikir'
    },
    {
        country: 'Moldova',
        capital: 'Chisinau'
    },
    {
        country: 'Monaco',
        capital: 'Monaco'
    },
    {
        country: 'Mongolia',
        capital: 'Ulaanbaatar'
    },
    {
        country: 'Montenegro',
        capital: 'Podgorica'
    },
    {
        country: 'Morocco',
        capital: 'Rabat'
    },
    {
        country: 'Mozambique',
        capital: 'Maputo'
    },
    {
        country: 'Myanmar',
        capital: 'Naypyidaw'
    },
    {
        country: 'Namibia',
        capital: 'Windhoek'
    },
    {
        country: 'Nauru',
        capital: 'Yaren District'
    },
    {
        country: 'Nepal',
        capital: 'Kathmandu'
    },
    {
        country: 'Netherlands',
        capital: 'Amsterdam'
    },
    {
        country: 'New Zealand',
        capital: 'Wellington'
    },
    {
        country: 'Nicaragua',
        capital: 'Managua'
    },
    {
        country: 'Niger',
        capital: 'Niamey'
    },
    {
        country: 'Nigeria',
        capital: 'Abuja'
    },
    {
        country: 'North Korea',
        capital: 'Pyongyang'
    },
    {
        country: 'North Macedonia',
        capital: 'Skopje'
    },
    {
        country: 'Norway',
        capital: 'Oslo'
    },
    {
        country: 'Oman',
        capital: 'Muscat'
    },
    {
        country: 'Pakistan',
        capital: 'Islamabad'
    },
    {
        country: 'Palau',
        capital: 'Ngerulmud'
    },
    {
        country: 'Palestine',
        capital: 'Jerusalem (East)'
    },
    {
        country: 'Panama',
        capital: 'Panama City'
    },
    {
        country: 'Papua New Guinea',
        capital: 'Port Moresby'
    },
    {
        country: 'Paraguay',
        capital: 'Asunción'
    },
    {
        country: 'Peru',
        capital: 'Lima'
    },
    {
        country: 'Philippines',
        capital: 'Manila'
    },
    {
        country: 'Poland',
        capital: 'Warsaw'
    },
    {
        country: 'Portugal',
        capital: 'Lisbon'
    },
    {
        country: 'Qatar',
        capital: 'Doha'
    },
    {
        country: 'Romania',
        capital: 'Bucharest'
    },
    {
        country: 'Russia',
        capital: 'Moscow'
    },
    {
        country: 'Rwanda',
        capital: 'Kigali'
    },
    {
        country: 'Saint Kitts & Nevis',
        capital: 'Basseterre'
    },
    {
        country: 'Saint Lucia',
        capital: 'Castries'
    },
    {
        country: 'Saint Vincent & the Grenadines',
        capital: 'Kingstown'
    },
    {
        country: 'Samoa',
        capital: 'Apia'
    },
    {
        country: 'San Marino',
        capital: 'San Marino'
    },
    {
        country: 'Sao Tome & Principe',
        capital: 'São Tomé'
    },
    {
        country: 'Saudi Arabia',
        capital: 'Riyadh'
    },
    {
        country: 'Senegal',
        capital: 'Dakar'
    },
    {
        country: 'Serbia',
        capital: 'Belgrade'
    },
    {
        country: 'Seychelles',
        capital: 'Victoria'
    },
    {
        country: 'Sierra Leone',
        capital: 'Freetown'
    },
    {
        country: 'Singapore',
        capital: 'Singapore'
    },
    {
        country: 'Slovakia',
        capital: 'Bratislava'
    },
    {
        country: 'Slovenia',
        capital: 'Ljubljana'
    },
    {
        country: 'Solomon Islands',
        capital: 'Honiara'
    },
    {
        country: 'Somalia',
        capital: 'Mogadishu'
    },
    {
        country: 'South Africa',
        capital: 'Pretoria, Cape Town & Bloemfontein'
    },
    {
        country: 'South Korea',
        capital: 'Seoul'
    },
    {
        country: 'South Sudan',
        capital: 'Juba'
    },
    {
        country: 'Spain',
        capital: 'Madrid'
    },
    {
        country: 'Sri Lanka',
        capital: 'Colombo'
    },
    {
        country: 'Sudan',
        capital: 'Khartoum'
    },
    {
        country: 'Suriname',
        capital: 'Paramaribo'
    },
    {
        country: 'Sweden',
        capital: 'Stockholm'
    },
    {
        country: 'Switzerland',
        capital: 'Bern'
    },
    {
        country: 'Syria',
        capital: 'Damascus'
    },
    {
        country: 'Taiwan',
        capital: 'Taipei'
    },
    {
        country: 'Tajikistan',
        capital: 'Dushanbe'
    },
    {
        country: 'Tanzania',
        capital: 'Dodoma'
    },
    {
        country: 'Thailand',
        capital: 'Bangkok'
    },
    {
        country: 'Timor-Leste',
        capital: 'Dili'
    },
    {
        country: 'Togo',
        capital: 'Lomé'
    },
    {
        country: 'Tonga',
        capital: 'Nukuʻalofa'
    },
    {
        country: 'Trinidad & Tobago',
        capital: 'Port of Spain'
    },
    {
        country: 'Tunisia',
        capital: 'Tunis'
    },
    {
        country: 'Turkey',
        capital: 'Ankara'
    },
    {
        country: 'Turkmenistan',
        capital: 'Ashgabat'
    },
    {
        country: 'Tuvalu',
        capital: 'Funafuti'
    },
    {
        country: 'Uganda',
        capital: 'Kampala'
    },
    {
        country: 'Ukraine',
        capital: 'Kiev'
    },
    {
        country: 'United Arab Emirates',
        capital: 'Abu Dhabi'
    },
    {
        country: 'United Kingdom',
        capital: 'London'
    },
    {
        country: 'USA',
        capital: 'Washington, D.C.'
    },
    {
        country: 'Uruguay',
        capital: 'Montevideo'
    },
    {
        country: 'Uzbekistan',
        capital: 'Tashkent'
    },
    {
        country: 'Vanuatu',
        capital: 'Port Vila'
    },
    {
        country: 'Vatican City',
        capital: 'Vatican City'
    },
    {
        country: 'Venezuela',
        capital: 'Caracas'
    },
    {
        country: 'Vietnam',
        capital: 'Hanoi'
    },
    {
        country: 'Yemen',
        capital: "Sana'a"
    },
    {
        country: 'Zambia',
        capital: 'Lusaka'
    },
    {
        country: 'Zimbabwe',
        capital: 'Harare'
    },
];
// Used to store values generated by getRandomNumber
let randomQuestionsArray = [];

// Add event listeners to game controls
startButton.addEventListener('click', startGame);
quitButton.addEventListener('click', quitGame);
nextQuestion.addEventListener('click', getNextQuestion);

const maxQuestions = 10;
const scoreValue = 10;

// Start game
function startGame() {
    startButton.classList.add('hidden');
    mainHeading.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    questionCount = 0;
    currentScore = 0;
    generateQuestion();
}

// Quit Game
function quitGame() {
    if (window.confirm('Are you sure you want to quit?')) {
        gameContainer.classList.add('hidden');
        mainHeading.classList.remove('hidden');
        startButton.classList.remove('hidden');
    }
}

// Function for the 'Next Question' button
function getNextQuestion(event) {
    generateQuestion();
}

/**
 * Function to generate each question
 * Questions and their answer buttons are generated dynamically each time.
 */
function generateQuestion() {

    /** If questionCount is more than the specified max questions go to end-page
     * and store the score in local storage
     */
    if (questionCount >= maxQuestions) {
        localStorage.setItem('recentScore', currentScore);

        return window.location.assign(`end-page.html`);
    }

    // Increment question count by 1 each time
    questionCount++;
    questionCountOutput.innerText = `${questionCount}`;

    let countriesCount = countriesList.length;
    let randomNumber = getRandomInt(0, countriesCount);

    console.log(randomNumber);

    // Prevent same number from being used twice
    do {
        randomNumber++;
        console.log('Already found');
    } while (randomQuestionsArray.includes(randomNumber));

    console.log(randomNumber);

    // Add the number generated to an array so it can be used in the above do-while loop
    randomQuestionsArray.push(randomNumber);

    let chosenCountry = countriesList[randomNumber].country; // Generate random country from array 
    let correctAnswer = countriesList[randomNumber].capital; // Generate the correct capital city from array 

    randomQuestionsArray.push(randomNumber);
    console.log(randomQuestionsArray);

    console.log(chosenCountry);
    console.log(correctAnswer);

    // Define correct answer to compare against
    isCorrectQuestionAnswer = {
        question: chosenCountry,
        option: correctAnswer
    };


    // Generate 3 random cities from capitalListOptions to act as other answer options
    let answerOption1 = countriesList[getRandomInt(0, countriesList.length)].capital;
    randomQuestionsArray.push(getRandomInt(0, countriesList.length));
    console.log(randomQuestionsArray);

    let answerOption2 = countriesList[getRandomInt(0, countriesList.length)].capital;
    // Compare answer options and generate new option if there is a duplication
    if (answerOption2 === answerOption1) {
        answerOption2 = countriesList[getRandomInt(0, countriesList.length)].capital;
        console.log('Number changed1');
        randomQuestionsArray.push(getRandomInt(0, countriesList.length));
        console.log(randomQuestionsArray);
    } else {
        randomQuestionsArray.push(getRandomInt(0, countriesList.length));
        console.log(randomQuestionsArray);
    }

    let answerOption3 = countriesList[getRandomInt(0, countriesList.length)].capital;
    // Compare answer options and generate new option if there is a duplication
    if (answerOption3 === answerOption2 || answerOption1) {
        answerOption3 = countriesList[getRandomInt(0, countriesList.length)].capital;
        console.log('Number changed2');
        randomQuestionsArray.push(getRandomInt(0, countriesList.length));
        console.log(randomQuestionsArray);
    } else {
        randomQuestionsArray.push(getRandomInt(0, countriesList.length));
        console.log(randomQuestionsArray);
    }

    // Answer buttons options
    let optionOutputs = [{
            'question': chosenCountry,
            'option': correctAnswer
        },
        {
            'question': chosenCountry,
            'option': answerOption1
        },
        {
            'question': chosenCountry,
            'option': answerOption2
        },
        {
            'question': chosenCountry,
            'option': answerOption3
        }
    ];

    // Randomise the outputs so the correct answer isn't in the same place all the time 
    let randomOptionOutputs = optionOutputs.sort(() => Math.random() - 0.5);

    // Create the answer buttons and the questionText
    document.getElementById('country-name').innerHTML = chosenCountry;
    document.getElementById('answers-container').innerHTML = renderOptions(randomOptionOutputs);

    // Add onclick event listener to each button
    addButtonsEventListener();
}

// Function to render the answer 
function renderOptions(options) {
    let buttonOutputs = '';

    // Loop through the options and retrieve their key values
    Object.keys(options).forEach(function (key, i) {
        // Code to define the html for the buttons 
        const item = options[key];
        buttonOutputs += `<button id="answer-${i}" data-answer="${item.option}"
            data-country="${item.question}" class="answer-btn">${item.option}</button>`;
    });

    return buttonOutputs;
}

function addButtonsEventListener() {
    // Loop through the buttons that have been created and add click event listeners to them
    Array.from(document.getElementsByClassName("answer-btn")).forEach(button => {
        button.addEventListener("click", e => checkAnswer(e));
    });
}

// Generate random number to use as array index to generate questions and answers 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Checks if the answer selected is right, increments the score if it is, then moves on the to the next question
function checkAnswer(e) {

    /** retrieve the data-answer for the button clicked and 
     * compare this with the isCorrectQuestionAnswer object 'option'
     */
    let clickedButtonAnswer = e.target.getAttribute('data-answer');
    if (clickedButtonAnswer === isCorrectQuestionAnswer.option) {
        playCorrectSound();
        $(e.target).addClass("correct");
        incrementScore(scoreValue);
    } else {
        playIncorrectSound();
        $(e.target).addClass("incorrect");
    }
    // Loop through the remaining buttons and set them to disabled so they can't be cicked again
    for (let i = 0; i < 4; i++) {
        document.getElementById("answer-" + i).setAttribute('disabled', true);
    }
    // Show the nextQuestion button
    nextQuestion.classList.remove('hidden');
}

// Increment the score by 1
function incrementScore(num) {
    currentScore += num;
    scoreOutput.innerText = `${currentScore}`;
}

// Set variables for sound effects & sound buttons
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');
let muteButton = document.getElementById('mute-button');
let unmuteButton = document.getElementById('unmute-button');

// Add click event listeners to the sound icons
muteButton.addEventListener('click', muteSound);
unmuteButton.addEventListener('click', unmuteSound);

// Function to mute the audio files
function muteSound() {
    correctSound.muted = true;
    incorrectSound.muted = true;
    muteButton.classList.add('hidden');
    unmuteButton.classList.remove('hidden');
    console.log('Sound muted');
}

// Function to unmute the audio files
function unmuteSound() {
    correctSound.muted = false;
    incorrectSound.muted = false;
    unmuteButton.classList.add('hidden');
    muteButton.classList.remove('hidden');
    console.log('Sound unmuted');
}

// Function to play sound when the answer is correct
function playCorrectSound() {
    correctSound.play();
    console.log('sound played');
}

// Function to play sound when the answer is incorrect
function playIncorrectSound() {
    incorrectSound.play();
    console.log('sound played');
}
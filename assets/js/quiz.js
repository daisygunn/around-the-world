// Game controls
const startButton = document.getElementById('start-button');
const quitButton = document.getElementById('quit-button');
const gameContainer = document.getElementById('game-container');
const randomQuestion = document.getElementById('random-question');

var chosenAnswer = function reply_click() {};

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
        country: 'Antigua and Barbuda',
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
        capital: 'La Paz (seat of government)'
    },
    {
        country: 'Bosnia and Herzegovina',
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
        country: 'Central African Republic',
        capital: 'Bangui'
    },
    {
        country: 'Chad',
        capital: 'N"Djamena'
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
        country: 'Congo, Democratic Republic of the',
        capital: 'Kinshasa'
    },
    {
        country: 'Congo, Republic of the',
        capital: 'Brazzaville'
    },
    {
        country: 'Costa Rica',
        capital: 'San Jose'
    },
    {
        country: 'Cote d"Ivoire',
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
        capital: 'Malabo (de jure) or Oyala (seat of government)'
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
        country: 'Eswatini (formerly Swaziland)',
        capital: 'Mbabane (administrative), Lobamba (legislative, royal)'
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
        capital: 'Saint George"s'
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
        country: 'Myanmar (formerly Burma)',
        capital: 'Naypyidaw'
    },
    {
        country: 'Namibia',
        capital: 'Windhoek'
    },
    {
        country: 'Nauru',
        capital: 'Yaren District (de facto)'
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
        country: 'North Macedonia (formerly Macedonia)',
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
        country: 'Saint Kitts and Nevis',
        capital: 'Basseterre'
    },
    {
        country: 'Saint Lucia',
        capital: 'Castries'
    },
    {
        country: 'Saint Vincent and the Grenadines',
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
        country: 'Sao Tome and Principe',
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
        capital: 'Pretoria (administrative) Cape Town (legislative), Bloemfontein (judicial)'
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
        capital: 'Sri Jayawardenepura Kotte'
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
        country: 'Trinidad and Tobago',
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
        capital: 'Kyiv (also known as Kiev)'
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
        country: 'United States of America',
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
        country: 'Vatican City (Holy See)',
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

startButton.addEventListener('click', startGame);
quitButton.addEventListener('click', quitGame);
randomQuestion.addEventListener('click', getRandomQuestion);

// Start game
function startGame(event) {
    startButton.classList.add('hidden')
    gameContainer.classList.remove('hidden')
    generateQuestion()
};

// Quit Game
function quitGame(event) {
    if (window.confirm('Are you sure you want to quit?')) {
        gameContainer.classList.add('hidden')
        startButton.classList.remove('hidden')
    }
};

// Used for testing 
function getRandomQuestion(event) {
    generateQuestion();
};

// // Choose question difficulty
// // if function loop
// function chooseDifficulty() {

// }

// Question 1 is generated
// 'What is the capital city of ______?' the blank is populated using the array countries - 
// each question is dynamically created using a random country from the index of the array.
function generateQuestion() {
    let countriesCount = countriesList.length;
    let randomNumber = getRandomInt(0, countriesCount);
    let chosenCountry = (countriesList[randomNumber].country); // Generate random country from array 
    let correctAnswer = (countriesList[randomNumber].capital); // Generate the correct capital city from array 

    // Define correct answer
    let isCorrectQuestionAnswer = {
        question: chosenCountry,
        option: correctAnswer
    };

    // To do: Need to prevent correct answer being generated in the random answers
    // generate 3 random cities from capitalListOptions
    let answerOption1 = (countriesList[getRandomInt(0, countriesList.length)].capital);
    let answerOption2 = (countriesList[getRandomInt(0, countriesList.length)].capital);
    let answerOption3 = (countriesList[getRandomInt(0, countriesList.length)].capital);

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
    randomOptionOutputs = optionOutputs.sort(() => Math.random() - 0.5);
    let buttonOutputs = '';
    let i = 0;
    
    // Loop through 
        Object.keys(randomOptionOutputs).forEach(function (key) {

        console.log(randomOptionOutputs[key]);
        // Code to define the html for the buttons 
        buttonOutputs += '<button id="answer-' + i + '" data-answer="' + randomOptionOutputs[key]['option'] + '" data-country="' + randomOptionOutputs[key]['question'] + '" class="answer-btn" onClick="reply_click(this.id)">' + randomOptionOutputs[key]['option'] + '</button>';
        i++;
    });
    // Create the answer buttons and the questionText
    document.getElementById('country-name').innerHTML = chosenCountry;
    document.getElementById('answers-container').innerHTML = buttonOutputs;

    for (let i = 0; i < 4; i++) {
        document.getElementById("answer-" +i).addEventListener("click", function(){
            checkAnswer(isCorrectQuestionAnswer)
        });
        
    };
};



// Generate random number to use as array index to generate questions and answers 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};



// Checks if the answer is right
function checkAnswer(isCorrectQuestionAnswer, chosenAnswer) {

    function reply_click(clicked_id)
    {
    console.log(clicked_id)

      return clicked_id.getAttribute('data-answer');
      
    };
    
    console.log(chosenAnswer);
    // Depending on button pressed, check data-country value against countriesList
    // get correct capital name and then check if this matches the data-answer
    
    console.log(isCorrectQuestionAnswer)
    
    if (chosenAnswer === isCorrectQuestionAnswer["option"]) {
        console.log('Correct')
    } else {
        console.log('Incorrect')
    };

    // Gives an alert if it is right or wrong
    // Next question is generated

    // repeat x 10 in total
};
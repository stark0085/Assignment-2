let score = document.getElementById("cans")
let timeleft = document.getElementById("timeleft")
let quesleft = document.getElementById("quesleft")
let startQuiz = document.getElementById("startQuiz")
let question = document.getElementById("question")
let options = document.getElementsByClassName("options")
let nextques = document.getElementById("nextques")
let restart = document.getElementById('restart')
let totques = 19;
let yourScore = 0;
let index = 0;

const arrQuestions = [
    {
        "category": "General Knowledge",
        "id": "6239f80e9129041bf3925cc2",
        "correctAnswer": "Foxtrot",
        "incorrectAnswers": [
            "Forget",
            "Fail",
            "Felicity"
        ],
        "question": "What word is used in the NATO Phonetic Alphabet for the letter F?",
        "tags": [
            "words",
            "general_knowledge",
            "language"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Society & Culture",
        "id": "622a1c367cc59eab6f950137",
        "correctAnswer": "Helios",
        "incorrectAnswers": [
            "Apollo",
            "Hermes",
            "Perseus"
        ],
        "question": "In Greek mythology, who drove the sun across the sky in his chariot?",
        "tags": [
            "mythology",
            "ancient_greece",
            "society_and_culture"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Geography",
        "id": "622a1c387cc59eab6f950af4",
        "correctAnswer": "Ireland",
        "incorrectAnswers": [
            "Kingdom of the Netherlands",
            "Belgium",
            "France"
        ],
        "question": "Which of these countries borders United Kingdom?",
        "tags": [
            "geography"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Film & TV",
        "id": "622a1c377cc59eab6f9507b6",
        "correctAnswer": "Clint Eastwood",
        "incorrectAnswers": [
            "Christopher Lee",
            "James Dean",
            "Marlon Brando"
        ],
        "question": "Which actor starred in The Good, the Bad and the Ugly?",
        "tags": [
            "acting",
            "film",
            "film_and_tv"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Geography",
        "id": "625e9ec6796f721e95543f6b",
        "correctAnswer": "Iceland",
        "incorrectAnswers": [
            "France",
            "Uruguay",
            "Luxembourg"
        ],
        "question": "Which country's flag can be described as 'Blue with a red cross outlined in white extending to the edges.'?",
        "tags": [
            "flags",
            "geography"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Film & TV",
        "id": "622a1c347cc59eab6f94fb55",
        "correctAnswer": "The Godfather",
        "incorrectAnswers": [
            "Cabaret",
            "Deliverance",
            "The Emigrants"
        ],
        "question": "Which film won the Academy Award for Best Picture in 1972?",
        "tags": [
            "academy_awards",
            "film",
            "film_and_tv"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Society & Culture",
        "id": "622a1c367cc59eab6f950116",
        "correctAnswer": "Sikhism",
        "incorrectAnswers": [
            "Buddhism",
            "Judaism",
            "Hinduism"
        ],
        "question": "What religion was founded by Guru Nanak ?",
        "tags": [
            "society_and_culture"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Sport & Leisure",
        "id": "62417d910f96c4efe8d773d4",
        "correctAnswer": "Pittsburgh Penguins",
        "incorrectAnswers": [
            "Pittsburgh Lions",
            "Pittsburgh Canucks",
            "Pittsburgh Flames"
        ],
        "question": "Which of these is a hockey team based in Pittsburgh?",
        "tags": [
            "sport"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Geography",
        "id": "622a1c357cc59eab6f94fe30",
        "correctAnswer": "Dollar",
        "incorrectAnswers": [
            "Pound",
            "Rino",
            "Sing"
        ],
        "question": "What is the basic unit of currency for Singapore?",
        "tags": [
            "currency",
            "southeast_asia",
            "geography"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Geography",
        "id": "622a1c387cc59eab6f9507fa",
        "correctAnswer": "Oceania",
        "incorrectAnswers": [
            "South America",
            "Europe",
            "Asia"
        ],
        "question": "The country of Vanuatu is on which continent?",
        "tags": [
            "geography"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Science",
        "id": "622a1c3a7cc59eab6f9510d0",
        "correctAnswer": "Mangrove",
        "incorrectAnswers": [
            "Wetlands",
            "Marsh",
            "Everglades"
        ],
        "question": "Dense seawater swamps along coasts of hot countries are called ________.",
        "tags": [
            "names",
            "science"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Geography",
        "id": "625e9e25796f721e95543f42",
        "correctAnswer": "Chile",
        "incorrectAnswers": [
            "Guatemala",
            "Estonia",
            "India"
        ],
        "question": "Which of these countries has red on its flag?",
        "tags": [
            "flags",
            "geography"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Geography",
        "id": "623384cf62eaad73716a8c31",
        "correctAnswer": "The Amazon",
        "incorrectAnswers": [
            "The Ganges",
            "The Loire",
            "The Mekong"
        ],
        "question": "What is the world's widest river?",
        "tags": [
            "rivers",
            "bodies_of_water",
            "records",
            "geography"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Society & Culture",
        "id": "622a1c367cc59eab6f95030c",
        "correctAnswer": "Wise Men",
        "incorrectAnswers": [
            "Musicians",
            "Revolutionary Leaders",
            "Terrorists"
        ],
        "question": "Who were Balthazar, Melchior and Caspar?",
        "tags": [
            "people",
            "society_and_culture"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Film & TV",
        "id": "622a1c3c7cc59eab6f9517df",
        "correctAnswer": "Saruman",
        "incorrectAnswers": [
            "Gandalf",
            "Radagast",
            "Merlin"
        ],
        "question": "Which wizard was portrayed by Christopher Lee in The Lord Of The Rings?",
        "tags": [
            "lord_of_the_rings",
            "fantasy",
            "film",
            "acting",
            "film_and_tv"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Sport & Leisure",
        "id": "622a1c367cc59eab6f95003a",
        "correctAnswer": "Larry Holmes",
        "incorrectAnswers": [
            "George Foreman",
            "Mike Tyson",
            "Sugar Ray Robinson"
        ],
        "question": "Who was the only boxer to knock out Mohammed Ali?",
        "tags": [
            "sport",
            "boxing",
            "people"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Film & TV",
        "id": "622a1c377cc59eab6f9507b5",
        "correctAnswer": "Nicole Kidman",
        "incorrectAnswers": [
            "Natalie Portman",
            "Kate Winslet",
            "Maggie Smith"
        ],
        "question": "Which actress has featured in films including Batman Forever and Moulin Rouge!?",
        "tags": [
            "film",
            "acting",
            "film_and_tv"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Science",
        "id": "622a1c3e7cc59eab6f952249",
        "correctAnswer": "Ultraviolet light",
        "incorrectAnswers": [
            "Radio waves",
            "Gamma rays",
            "Infrared"
        ],
        "question": "In the electomagnetic spectrum, what comes between X-rays and visible light?",
        "tags": [
            "science",
            "physics"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Geography",
        "id": "622a1c387cc59eab6f950805",
        "correctAnswer": "Africa",
        "incorrectAnswers": [
            "South America",
            "Oceania",
            "Europe"
        ],
        "question": "The country of The Gambia is on which continent?",
        "tags": [
            "geography"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    },
    {
        "category": "Science",
        "id": "622a1c377cc59eab6f9504ca",
        "correctAnswer": "fossils of ancient life",
        "incorrectAnswers": [
            "the kidneys and their diseases, a branch of medicine",
            "enzymes",
            "ants"
        ],
        "question": "What is Paleontology the study of?",
        "tags": [
            "science"
        ],
        "type": "Multiple Choice",
        "difficulty": "medium",
        "regions": [],
        "isNiche": false
    }
]

startQuiz.addEventListener("click", () => {
    document.getElementById('onstartup').style.display = "none";
    document.getElementsByClassName("container")[0].style.display = "block";
    printData(0);
    Array.from(document.getElementsByClassName("quizCard")).forEach(element => {
        element.style.width = "12vw";
        element.style.height = "8vw";
    });
});

const checkans = (ctext) => {
    let flag = true;
    Array.from(options).forEach(element => {
        element.addEventListener("click", (e) => {
            if (e.target.innerHTML === ctext) {
                yourScore++;
                if (flag) {
                    element.classList.add("green");
                    score.innerHTML = "Score : " + yourScore;
                    flag = false;
                }
            } else {
                if (flag) {
                    element.classList.add("red");
                }
                flag = false;
            }
            clearInterval(timer);
        });
    });
};

const fillData = (q, arrOp, ctext) => {
    question.innerHTML = q;
    let check = Math.floor(Math.random() * 4);
    options[check].innerHTML = ctext;
    let i = 0;
    let optionindex = 0;
    Array.from(options).forEach(element => {
        if (i !== check) {
            element.innerHTML = arrOp[optionindex];
            optionindex++;
        }
        i++;
    });
    quesleft.innerHTML = "Questions Left = " + totques;
    totques--;
};

const calctime = () => {
    let t = 30;
    console.log("Index at calct " + index);
    timeleft.innerHTML = t;
    timer = setInterval(() => {
        t--;
        timeleft.innerHTML = t;
        if (t <= 0) {
            clearInterval(timer);
            index++;
            printData(index);
        }
    }, 1000);
};

const printData = (index) => {
    if (index < arrQuestions.length) {
        let element = arrQuestions[index];
        fillData(element.question, element.incorrectAnswers, element.correctAnswer);
        calctime();
        console.log("Index at fx " + index);

        checkans(element.correctAnswer);
    }
    if (index >= arrQuestions.length) {
        let arrImg = document.getElementsByClassName("quizCard");
        Array.from(arrImg).forEach(element => {
            element.classList.remove("animation-rotate-right");
            element.classList.remove("animation-rotate-left");
        });
        setTimeout(() => {
            alert("Congrats! Quiz Ended")
        }, 300);
    }
};

nextques.addEventListener("click", () => {
    console.log("Index at nextq " + index);
    Array.from(options).forEach(element => {
        element.classList.remove('green');
        element.classList.remove('red');
    });
    clearInterval(timer);
    index++;
    printData(index);
});

restart.addEventListener("click",() => {
    clearInterval(timer);
    yourScore = 0;
    index = 0;
    totques = 19;
    score.innerHTML = "Score : " + yourScore;
    timeleft.innerHTML = "30";
    quesleft.innerHTML = "Questions Left = " + totques;
    Array.from(options).forEach(element => {
        element.classList.remove('green');
        element.classList.remove('red');
        element.innerHTML = "";
    });
    question.innerHTML = "";
    document.getElementById('onstartup').style.display = "flex";
    document.getElementsByClassName("container")[0].style.display = "none";
    Array.from(document.getElementsByClassName("quizCard")).forEach(element => {
        element.style.width = "20vw";
        element.style.height = "14vw";
    });
});
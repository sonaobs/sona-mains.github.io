const questions = [
    
{
question: "What is Sona’s last name?",
optionA: "Laurent",
optionB: "Buvelle",
optionC: "Crownguard",
optionD: "Lightshield",
correctOption: "optionB"
    },

    {
question: "What is the name of Sona’s adoptive mother?",
optionA: "Augatha",
optionB: "Tianna",
optionC: "Lestara",
optionD: "Halla Ice-in-her-soul",
correctOption: "optionC"
    },

    {
question: "What is the name of Sona’s adoptive father?",
optionA: "Barrett",
optionB: "Jarvan III",
optionC: "Lars",
optionD: "Eldred",
correctOption: "optionA"
    },

    {
question: "What is the name of Sona’s adoptive sister?",
optionA: "Kahina",
optionB: "Audrey",
optionC: "Tedric",
optionD: "Giselle",
correctOption: "optionA"
    },

    {
question: "Sona was born in Ionia. What province does she come from?",
optionA: "Navori",
optionB: "Shon-Xan",
optionC: "Galrin",
optionD: "Bahrl",
correctOption: "optionC"
    },

    {
question: "Why did Sona initially leave Ionia?",
optionA: "To explore the world",
optionB: "The Noxian Invasion of Ionia",
optionC: "She was adopted in to Demacia",
optionD: "To find out about her instrument",
correctOption: "optionB"
    },

    {
question: "What is the name of Sona’s instrument?",
optionA: "Chalicar",
optionB: "Svellsongur",
optionC: "Etwahl",
optionD: "Boneshiver",
correctOption: "optionC"
    },

    {
question: "Sona would return to Ionia for a time. What prompted this?",
optionA: "The death of her adoptive father",
optionB: "The increased influence of the Mageseekers",
optionC: "Attacks from the Winter’s Claw",
optionD: "A desire to go on holiday in her homeland",
correctOption: "optionA"
    },

    {
question: "Who did Sona go back to Ionia with?",
optionA: "No one",
optionB: "Kahina",
optionC: "Lestara",
optionD: "Jarvan IV",
correctOption: "optionC"
    },

    {
question: "While in Ionia, Sona helped another champion to find a dangerous magical tool. Who was this champion?",
optionA: "Irelia",
optionB: "Shen",
optionC: "Yasuo",
optionD: "Ryze",
correctOption: "optionD"
    },

    {
question: "The prior question was depicted in a cinematic. What was the name of this cinematic?",
optionA: "Irelia: The Defiant Blade",
optionB: "Tales of Runeterra: Ionia - The Lesson",
optionC: "Ryze: Call of Power",
optionD: "The Climb",
correctOption: "optionC"
    },

    {
question: "Last we heard from Sona, she was forced to flee in to the Demacian countryside. Why was this?",
optionA: "She was attacked by Fiddlesticks",
optionB: "Mageseekers tried to arrest her for using magic",
optionC: "Noxians chased her in to the countryside",
optionD: "She was chased by Vayne",
correctOption: "optionB"
    },

    {
question: "The tale of how Sona had to flee was told us in a short story. What was the name of this short story?",
optionA: "One Last Show",
optionB: "Voices",
optionC: "Demacian Heart",
optionD: "Aftermath",
correctOption: "optionA"
    },

    {
question: "Sona’s adoptive sister is connected to another Demacian champion. Who specifically?",
optionA: "Garen",
optionB: "Lux",
optionC: "Poppy",
optionD: "Fiora",
correctOption: "optionB"
    },

    {
question: "Sona’s family sponsors a specific Demacian champion. Who is this champion?",
optionA: "Quinn",
optionB: "Poppy",
optionC: "Galio",
optionD: "Lux",
correctOption: "optionA"
    },

    {

question: "(Odyssey) When Sona was captured from Kayn, she was helped by someone who died so she could escape. Who was this?",
optionA: "Ziggs",
optionB: "Twisted Fate",
optionC: "Yone",
optionD: "Aatrox",
correctOption: "optionC"
    },

    {
question: "(Odyssey) What is the name of the organization that Sona hails from?",
optionA: "The Demaxian Empire",
optionB: "The Templars",
optionC: "Locus Armada",
optionD: "The Wildcard Crew",
correctOption: "optionB"
    },

    {
question: "(Odyssey) What other champion is part of the organization Sona hails from?",
optionA: "Karma",
optionB: "Yasuo",
optionC: "Sivir",
optionD: "Kha’Zix",
correctOption: "optionA"
    },

    {
question: "(Pentakill) In the original lore of Pentakill, who did Sona found the band alongside?",
optionA: "Kayle",
optionB: "Olaf",
optionC: "Karthus",
optionD: "Mordekaiser",
correctOption: "optionD"
    },

    {
question: "(PsyOps) What is the name of the operation undergone by PsyOps to rescue Sona?",
optionA: "Sona-Retrieval-Taskforce",
optionB: "Operation Songbird",
optionC: "Operation Black Rose",
optionD: "VALORANT Protocol",
correctOption: "optionB"
}
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 20 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 19) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 7) {
        remark = "You've struck a bad chord! Feel free to dive deeper into Sona's lore, and try again."
        remarkColor = "red"
    }
    else if (playerScore >= 8 && playerScore < 13) {
        remark = "Adagio! Your understanding of Sona's lore is remarkable."
        remarkColor = "orange"
    }
    else if (playerScore >= 13) {
        remark = "Crescendo! You're a true Sona lore afficinado, great work."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 20) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

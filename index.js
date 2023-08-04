function Quiz(questions){
    this.questions = questions;
    this.score = 0
    this.questionIndex = 0;
}

Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(userAnswer){
    if(this.getQuestionByIndex().isCorrectAnswer(userAnswer)){
        this.score++;
    }
    this.questionIndex++;
}

 function Question(questionText,choices,answer){
    this.questionText=questionText;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.isCorrectAnswer = function(userAnswer){
    return this.answer===userAnswer;
}

// function loadQuestions(){
//     ...if quiz.isEnded... 
//             showScores()
//     else
//         ...
//         //where to put the question
//             question = quiz.getQuestionByIndex()
//             document.getElementId("question").innerText= question.questionText;
        
//             questionChoices= question.choices;
//             for each of the questionChoice
//                  document.getElementId("choice"+i).innerText= questionChoices[i];
//                  handleOptionButton("btn"+i,questionChoices[i])
//             showProgress()
// }

function loadQuestions() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        let question = quiz.getQuestionByIndex();
        var element = document.getElementById("question");
        element.innerHTML = question.questionText;
  
        // show options
        var choices = question.choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            handleOptionButton("btn" + i, choices[i]);
        }
  
        showProgress();
    }
}
  
function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores(){
    let quizOverHTML = "<h1>Result</h1>";
    quizOverHTML+= "<h2> Your score: " + quiz.score + ". & mark percentage is: " + (quiz.score*100/quiz.questions.length) +"% </h2>";
    document.getElementById("quiz").innerHTML = quizOverHTML;
}   


let questions = [
    new Question("Which AWS service is primarily used for scalable and cost-effective storage of objects like images, videos, backups, and logs?", ["a) Amazon S3 ", "b) Amazon RDS","c) Amazon EC2 ", "d) Amazon SQS"], "a) Amazon S3"),
    new Question("What AWS service is designed for serverless computing, allowing you to run code without provisioning or managing servers?", ["a) Amazon DynamoDB", "b) AWS Lambda", "c) Amazon Redshift", "d) Amazon Route 53"], "b) AWS Lambda"),
    new Question("Which AWS service is used to distribute content globally and improve the performance and availability of web applications?", ["a) Amazon S3", "b) Amazon CloudFront","c) Amazon RDS", "d) AWS Elastic Beanstalk"], "b) Amazon CloudFront"),
    new Question("What AWS service provides virtual servers in the cloud, allowing users to deploy and manage applications easily?", ["a) Amazon EC2 ", "b) Amazon ECS ", "c) AWS Elastic Beanstalk", "d) AWS Lambda"], "a) Amazon EC2"),
    new Question("Which AWS service is a fully-managed message queuing service used for decoupling application components and microservices?", ["a) Amazon S3 ", "b) Amazon SQS", "c) AWS SNS", "d) AWS Glue"], "b) Amazon SQS")
  ];

let quiz = new Quiz(questions);

loadQuestions();

// question1 = new Question("who is father of computer",["1","2"],"1")
// question1.isCorrectAnswer("2");
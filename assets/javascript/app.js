var time = 20;
var correctAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var temp;
var temp2;
var questions = [
    {
        question: "Question 1", 
        answerOne: "Answer 1", 
        answerTwo: "Answer 2", 
        answerThree: "Answer 3",
        correctAnswer: "Answer 3"
    },
    {
        question: "Question 2", 
        answerOne: "Answer 4", 
        answerTwo: "Answer5", 
        answerThree: "Answer6",
        correctAnswer: "Answer6"
    },
    {
        question: "Question 3",
        answerOne: "Answer 7",
        answerTwo: "Answer8",
        answerThree: "Answer9",
        correctAnswer: "Answer9"
    },
    {
        question: "Question 4",
        answerOne: "Answer 10",
        answerTwo: "Answer2",
        answerThree: "Answer3",
        correctAnswer: "Answer3"
    },
    {
        question: "Question 5",
        answerOne: "Answer 1",
        answerTwo: "Answer2",
        answerThree: "Answer3",
        correctAnswer: "Answer3"
    }];
var numQuestions = questions.length;
var i = 0;

$("#contentBox").hide();
$("#score").hide();

// function Timer()
// {
//     $("#timer").html(time);
//     if(time > 0)
//     {
//         time--;
//     }
//     else
//     {
//         $("#timer").html("Time's Up!");
//         clearTimeout(temp);
//         revealAnswer();
//     }    
// }

$(document).on("click","#startButton",function()
{
    $("#contentBox").show();
    $("#startButton").hide();
    $("#timer").html(time);  
    temp = setInterval(function()
        {
            time--;
            $("#timer").html(time);    
            if(time == 0)
            {
                clearInterval(temp);
                revealAnswer();
            }
        },1000);
});

function revealAnswer()
{
    $("#contentBox").hide();
    $("#score").show();
    // check which value radio button is checked
    var selValue, corValue;
    for(var i = 1; i < 11; i++)
    {
        selValue = $("#answerChoices"+i+" input[name=choices]:checked").val(); 
        corValue = $("#answerChoices"+i+" input[status=correct]").val();
        console.log(selValue);
        console.log(corValue);
        if(selValue == undefined)
        {
            noAnswer++;     
        }
        else if(selValue != corValue)
        {
            
            wrongAnswer++;
        }
        else
        {
            correctAnswer++;
        }
        //display numbers
        console.log(correctAnswer);
        $("#correct").html(correctAnswer);
        console.log(wrongAnswer);
        $("#wrong").html(wrongAnswer);
        $("#unanswered").html(noAnswer);
    }
    
}

$("#submit").click(function ()
{
    clearInterval(temp);
    revealAnswer();
})
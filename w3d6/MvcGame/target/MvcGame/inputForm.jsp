<%@ taglib uri ="http://java.sun.com/jsp/jstl/core" prefix ="c" %>

<!DOCTYPE html>
<html lang="utf-8">

<head>
    <title>NumberQuiz</title>
</head>

<body>
    <form method='POST' action='process'>
        <h3>Have fun with NumberQuiz!</h3>
        <p>Your current score is:
            ${sesquiz.numCorrect} </p>
        <p>Guess the next number in the sequence!
            ${sesquiz.currentQuestion} </p>
        </br>
        <p>Your answer:<input type='text' name='txtAnswer' value='' /></p>

        <c:if test="${validator == false}">
            <p style='color:red'>Your last answer was not correct! Please try again</p>
        </c:if>

        <p><input type='submit' name='btnNext' value='Next' /></p>
        <p><input type='submit' name='btnRestart' value='Restart' /></p>

    </form>
</body>

</html>
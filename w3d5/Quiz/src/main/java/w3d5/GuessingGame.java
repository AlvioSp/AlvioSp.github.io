package w3d5;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/GuessingGame")
public class GuessingGame extends HttpServlet {

  private void genQuizPage(
    Quiz sessQuiz,
    PrintWriter out,
    String currQuest,
    boolean error,
    String answer
  ) {
    out.print("<html>");
    out.print("<head>");
    out.print("	<title>NumberQuiz</title>");
    out.print("</head>");
    out.print("<body>");
    out.print("	<form method='post'>");
    out.print("		<h3>Have fun with NumberQuiz!</h3>");
    out.print("<p>Your current score is: ");
    out.print(sessQuiz.getNumCorrect() + "</br></br>");
    out.print("<p>Guess the next number in the sequence! ");
    out.print(
      currQuest.replace("?", "<font style=\"color:red\"><b> ? </b></font> ") +
      "</p>"
    );

    out.print(
      "<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> "
    );

    /* if incorrect, then print out error message */
    if (error && (answer != null)) { //REFACTOR?-- assumes answer null only when first open page
      out.print(
        "<p style='color:red'>Your last answer was not correct! Please try again</p> "
      );
    }
    out.print("<p><input type='submit' name='btnNext' value='Next' /></p> ");
    out.print("<p><input type='submit' name='btnRestart' value='Restart' /></p> ");

    out.print("</form>");
    out.print("</body></html>");
  }

  private void genQuizOverPage(PrintWriter out) {
    out.print("<html> ");
    out.print("<head >");
    out.print("<title>NumberQuiz is over</title> ");
    out.print("</head> ");
    out.print("<body> ");
    out.print("<p style='color:red'>The number quiz is over!</p>	</body> ");
    out.print("</html> ");
  }

  protected void doPost(
    HttpServletRequest request,
    HttpServletResponse response
  )
    throws ServletException, IOException {
    PrintWriter out = response.getWriter();
    HttpSession session = request.getSession();

    Quiz quiz = (Quiz) session.getAttribute("SessionQuiz");

    if (request.getParameter("btnNext") != null) {
    
      if (quiz.getNumCorrect() == quiz.getNumQuestions() - 1) {
        genQuizOverPage(out);
      } else {
        String answer = request.getParameter("txtAnswer");
        boolean correct = quiz.isCorrect(Integer.parseInt(answer));

        if (correct) quiz.scoreAnswer();
        genQuizPage(quiz, out, quiz.getCurrentQuestion(), !correct, answer);
      }
    } else if (request.getParameter("btnRestart") != null) {
      session.invalidate();
      doGet(request, response);
    }
  }

  protected void doGet(
    HttpServletRequest request,
    HttpServletResponse response
  )
    throws ServletException, IOException {
    HttpSession session = request.getSession(); 
    Quiz quiz = new Quiz();
    String currQuestion = quiz.getCurrentQuestion();
    session.setAttribute("SessionQuiz", quiz);
    genQuizPage(quiz, response.getWriter(), currQuestion, false, null);
  }
}

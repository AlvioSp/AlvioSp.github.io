package w3d6;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/process")
public class process extends HttpServlet {

  @Override
  protected void doPost(
    HttpServletRequest request,
    HttpServletResponse response
  )
    throws ServletException, IOException {
    PrintWriter out = response.getWriter();
    HttpSession session = request.getSession();

    if (session.getAttribute("sesquiz") == null) {
      session.setAttribute("sesquiz", new Quiz());
    }

    Quiz quiz = (Quiz) session.getAttribute("sesquiz");
    String answer = request.getParameter("txtAnswer");

    if (answer != null && answer != "") {
      boolean correct = quiz.isCorrect(Integer.parseInt(answer));
      String valida = "false";
      if (correct) {
        quiz.scoreAnswer();
        valida = "true";
      }
      session.setAttribute("validator", valida);
    }
    /*//request.setAttribute("sesquiz", quiz);
    request.setAttribute("numcorrect", quiz.getNumCorrect());
    request.setAttribute("currentquestion", quiz.getCurrentQuestion());  */

    if (quiz.getNumCorrect() > 4) {
      session.invalidate();
      response.sendRedirect("outputForm.jsp");
    } else {
      request.getRequestDispatcher("inputForm.jsp").forward(request, response);
    }

    if (request.getParameter("btnRestart") != null) {     
      session.invalidate();      
      request.getRequestDispatcher("inputForm.jsp").forward(request, response);
    }    
  }
}

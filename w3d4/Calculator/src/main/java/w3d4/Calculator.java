package w3d4;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Calculator extends HttpServlet {

  protected void doGet(
    HttpServletRequest request,
    HttpServletResponse response
  )
    throws ServletException, IOException {
    PrintWriter out = response.getWriter();

    int num1 = Integer.parseInt(request.getParameter("num1"));
    int num2 = Integer.parseInt(request.getParameter("num2"));
    int num3 = Integer.parseInt(request.getParameter("num3"));
    int num4 = Integer.parseInt(request.getParameter("num4"));
    int sum = num1 + num2;
    int mul = num3 * num4;

    out.print(
      "<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" +
      "<title>ServLet Calculator</title></head><body><form>"
    );
    out.print(
      "<input type=number value=" + num1 +
      ">+<input type=number value=" + num2 +
      ">=<input type=number value=" + sum +
      "><br><br>"
    );

    out.print(
      "<input type=number value=" + num3 +
      ">*<input type=number value=" + num4 +
      ">=<input type=number value=" + mul +
      "><br><br>"
    );
    out.print("<button>Submit</button>");
    out.print("</form></body></html>");
  }

  protected void doPost(
    HttpServletRequest request,
    HttpServletResponse response
  )
    throws ServletException, IOException {
    PrintWriter out = response.getWriter();
    int num1 = Integer.parseInt(request.getParameter("num1"));
    int num2 = Integer.parseInt(request.getParameter("num2"));
    int num3 = Integer.parseInt(request.getParameter("num3"));
    int num4 = Integer.parseInt(request.getParameter("num4"));
    int sum = num1 + num2;
    int mul = num3 * num4;

    out.print(
      "<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" +
      "<title>ServLet Calculator</title></head><body><form>"
    );
    out.print(
      "<input type=number value=" + num1 +
      ">+<input type=number value=" + num2 +
      ">=<input type=number value=" + sum +
      "><br><br>"
    );

    out.print(
      "<input type=number value=" + num3 +
      ">*<input type=number value=" + num4 +
      ">=<input type=number value=" + mul +
      "><br><br>"
    );
    out.print("<button>Submit</button>");
    out.print("</form></body></html>");
  }
}

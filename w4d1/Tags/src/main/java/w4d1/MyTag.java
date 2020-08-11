package w4d1;

import javax.servlet.jsp.tagext.SimpleTagSupport;
import javax.servlet.jsp.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MyTag extends SimpleTagSupport{
    
    SimpleDateFormat ft;
    Date dNow;
    String color;
    String size;

    public MyTag() {
        dNow = new Date();
        ft = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        System.out.println("Current Date: " + ft.format(dNow));
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }

    StringWriter sw = new StringWriter();

    @Override
    public void doTag() throws JspException, IOException {
        if(color != null && size != null){
            JspWriter out = getJspContext().getOut();
            out.write(String.format("<span style = 'color:%s; font-size:%s'>%s</span>", color, size, ft.format(dNow)));
        }
    }
}
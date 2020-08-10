package w3d6;

public class Question {
	String question;
	int answer;

	public Question(String question, int answer) {
		this.question = question;
		this.answer = answer;
	}
	
	public String getQuestion(){
		return question.replace("?", "<font style=\"color:red\"><b> ? </b></font> ");
    }
    public int getAnswer(){
		return answer;
	}
}

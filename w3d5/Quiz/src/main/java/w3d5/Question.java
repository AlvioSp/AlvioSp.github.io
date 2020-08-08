package w3d5;

public class Question {
	String question;
	int answer;

	public Question(String question, int answer) {
		this.question = question;
		this.answer = answer;
	}
	
	public String getQuestion(){
		return question;
    }
    public int getAnswer(){
		return answer;
	}
}

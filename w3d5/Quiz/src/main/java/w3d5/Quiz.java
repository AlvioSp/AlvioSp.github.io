package w3d5;

import java.util.ArrayList;
import java.util.List;

public class Quiz {
  List<Question> questions = new ArrayList<>(5);
  int score = 0;
  int index = 0;

  public Quiz() {
    questions.add(new Question("[3, 1, 4, 1, 5, ?]", 9));
    questions.add(new Question("[1, 1, 2, 3, 5, ?]", 8));
    questions.add(new Question("[1, 4, 9, 16, 25, ?]", 36));
    questions.add(new Question("[2, 3, 5, 7, 11, ?]", 13));
    questions.add(new Question("[1, 2, 4, 8, 16, ?]", 32));
  }

  // gives a number to check if it is correct
  public boolean isCorrect(int answer) {
    int aCorrect = questions.get(index).getAnswer();   
    if (aCorrect == answer) {
      index++;     
      return true;
    }  
    return false;
  }

  // returns how many questions there are (5)
  public int getNumQuestions() {
    return questions.size();
  }

  // returns how many numbers the user has correctly guessed so far
  public int getNumCorrect() {
    return score;
  }

  // returns the index of the current question the user should answer
  public int getCurrentQuesitionIndex() {
    return index;
  }

  public String getCurrentQuestion() {
    return questions.get(index).getQuestion();
  }

  // increments the score and the current question number
  public void scoreAnswer(){
		score++;
	}
}

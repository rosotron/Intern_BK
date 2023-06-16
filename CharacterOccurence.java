
import java.util.*;
public class CharacterOccurence{
  static void counter(String s) {

    HashMap < Character, Integer > tracker = new HashMap < > ();

    for (char c: s.toCharArray()) {
      if (tracker.containsKey(c)) {

        tracker.put(c, tracker.get(c) + 1);
      }
      else {
        tracker.put(c, 1);
      }
    }

    for (Map.Entry < Character, Integer > entry: tracker.entrySet()) {
      System.out.println("'" + entry.getKey() + "' occurs " + entry.getValue() + " times");
    }
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a string: ");
    String input = scanner.nextLine();

    counter(input);
  }
}

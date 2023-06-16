
import java.util.Scanner;

public class LongestPalindrome {
    public String longestPalindrome(String s) {
        String ans = new String();
        int left, right;
        for (int i = 0; i < s.length(); i++) {
            left = i;
            right = i;
            while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
                if (right - left + 1 > ans.length()) {
                    ans = s.substring(left, right + 1);
                }
                left -= 1;
                right += 1;
            }
            left = i;
            right = i + 1;
            while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
                if (right - left + 1 > ans.length()) {
                    ans = s.substring(left, right + 1);
                }
                left -= 1;
                right += 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        LongestPalindrome result = new LongestPalindrome();
        String longestPalindrome = result.longestPalindrome(input);

        System.out.println("Longest Palindrome: " + longestPalindrome);
    }
}

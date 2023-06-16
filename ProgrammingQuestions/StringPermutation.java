import java.util.*;
public class StringPermutation {
   
     static void recursive(String s, String a) {
        if (s.length() == 0) {
            System.out.print(a + "  ");
            return;
        }

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            String lstr = s.substring(0, i);
            String rstr = s.substring(i + 1);
            String rem = lstr + rstr;
            recursive(rem, a + ch);
        }
    }

     static void iterative(String s) {
        int len =s.length();
        int[] ind = new int[len];
        char[] curr = s.toCharArray();
        int i = 0;

        Set<String> perm = new HashSet<>();

        while (i < len) {
            perm.add(new String(curr));

            if (ind[i] < i) {
                swap(curr, i % 2 == 0 ? 0 : ind[i], i);
                ind[i]++;
                i = 0;
            } else {
                ind[i] = 0;
                i++;
            }
        }

        for (String p : perm) {
            System.out.print(p + "  ");
        }
    }

    static void swap(char[] a, int i, int j) {
        char temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        System.out.println("\nPermutations using Recursion: ");
        recursive(input,"");

        System.out.println("\nPermutations using Iteration: ");
        iterative(input);
    }
}

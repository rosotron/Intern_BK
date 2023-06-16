import java.util.*;
public class MissingNumber {
    public static void main(String[] args) {
        int[] n = randomArray();
        System.out.println("Generated Array: " + Arrays.toString(n));
        int missingNumber = missing(n);
        System.out.println("Missing Number: " + missingNumber);
    }

   static int[] randomArray() {    //Random Array generator with a number missing
        Random random = new Random();
        int missingNumber = random.nextInt(100) + 1; 
        int[] n = new int[99];
        int index = 0;
        for (int i = 1; i <= 100; i++) {
            if (i != missingNumber) {
                n[index] = i;
                index++;
            }
        }
        return n;
    }

    static int missing(int[] n) {
        int indexSum = 0;
        int arraySum = 0;
        for (int i = 1; i <= n.length+1; i++) {
            indexSum += i;
        }
        for (int j = 0; j < n.length; j++) {
            arraySum += n[j];
        }
        return indexSum - arraySum;
    }
}

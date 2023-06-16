import java.util.*;

public class MultipleDuplicate {
    public static void main(String[] args) {
        int[] n = randomArray();
        System.out.println("Generated Array: " + Arrays.toString(n));
    
        HashMap<Integer, Integer> occurence = new HashMap<>();
        for (int num : n) {
            if (occurence.containsKey(num)) {
                occurence.put(num, occurence.get(num) + 1);
            } else {
                occurence.put(num, 1);
            }
        }

        System.out.print("Duplicate numbers: ");
        for (Map.Entry<Integer, Integer> entry : occurence.entrySet()) {
            if (entry.getValue() > 1) {
                System.out.print(entry.getKey() + " ");
            }
        }
    }

    static int[] randomArray() {  //Random Array
        int[] n = new int[100];
        Random random = new Random();
        
        for (int i = 0; i < 100; i++) {
            n[i] = random.nextInt(100) + 1;
        }
        
        return n;
    }
}

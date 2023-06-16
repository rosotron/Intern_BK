
import java.util.*;
public class MissingNumberInArray {
    public static void main(String[] args) {
        int[] array1 = {1, 2, 3, 4, 5};
        int[] array2 = {2, 3, 1, 0, 5};

        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        
        for(int i=0;i<array1.length;i++)
        {
            set1.add(array1[i]);
            set2.add(array2[i]);
        }
        set1.removeAll(set2);
        if(set1.isEmpty()) 
            System.out.println("No number is missing");
        else
        {
            System.out.print("The numbers missing in second array are ");
            for(int n:set1)
                System.out.print(n+" ");
        }  
    }
}

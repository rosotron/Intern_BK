import java.util.*;

class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
        left = right = null;
    }
}

class BinaryTree {
    Node root;

    public BinaryTree() {
        root = null;
    }

    private Node insertNode(Node root, int data) {
        if (root == null) {
            root = new Node(data);
            return root;
        }

        Random rand = new Random();
        if (rand.nextBoolean()) {
            root.left = insertNode(root.left, data);
        } else {
            root.right = insertNode(root.right, data);
        }
        return root;
    }

    void randomTree(int n) {
        Random rand = new Random();
        for (int i = 0; i < n; i++) {
            int data = rand.nextInt(100);
            root = insertNode(root, data);
        }
    }

    int count(Node root) {
        if (root == null) {
            return 0;
        }

        if (root.left == null && root.right == null) {
            return 1;
        }

        int leftLeafNodes = count(root.left);
        int rightLeafNodes = count(root.right);

        return leftLeafNodes + rightLeafNodes;
    }
}

public class NumberOfLeafNodes {
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        Scanner input = new Scanner(System.in);
        System.out.print("Enter number of nodes in tree: ");
        int n = input.nextInt();
        tree.randomTree(n);
        System.out.println("Number of leaf nodes: " + tree.count(tree.root));
    }
}

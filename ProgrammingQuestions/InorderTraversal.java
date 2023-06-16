import java.util.*;

class Node {
    int data;
    Node left, right;
    public Node(int data) {
        this.data = data;
        left = right = null;
    }
}

 class BinaryTree {
    Node root;
    public BinaryTree() {
        root = null;
    }
    Node insertNode(Node root, int data) {
        if (root == null) {
            root = new Node(data);
            return root;
        }
        //BST to check if we are getting correct inorder as its sorted for BST
        if (data < root.data) {
            root.left = insertNode(root.left, data);
        } else {
            root.right = insertNode(root.right, data);
        }
        return root;
    }

    public void randomTree(int n) {
        Random rand = new Random();
        for (int i = 0; i < n; i++) {
            int data = rand.nextInt(20); 
            if (root == null) {
                root = new Node(data);
            } else {
                insertNode(root, data);
            }
        }
    }

     void inorderTraversal(Node root) {
        if (root != null) {
            inorderTraversal(root.left);
            System.out.print(root.data + " ");
            inorderTraversal(root.right);
        }
    }
}

public class InorderTraversal {
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        Scanner input=new Scanner(System.in);
        System.out.print("Enter number of nodes in tree: ");
        int n=input.nextInt();
        tree.randomTree(n); 
      
        System.out.println("Inorder Traversal:");
        tree.inorderTraversal(tree.root);
    }
}

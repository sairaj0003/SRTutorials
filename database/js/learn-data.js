const navbarData = {
  columns: [
    { name: 'Data Structures', id: 'ds' },
    { name: 'Command Prompt', id: 'cmd' },
  ],



  ds: [
    { name: 'Introduction', data: `
      <h1>Introduction</h1>

      <div class="section">
  <div class="data-box wrap">
In the modern world, data and its information is an essential part, where data is just collection of facts or set of values that are in particular format and the information is the processed data.

If the data is not organized effectively, it is very difficult to perform any task on large amount of data. If it is organized effectively then any operation can be performed easily on that data.

If the data is stored in a well-organized way on storage media and in computer's memory then it can be accessed quickly for processing that further reduces the latency and the user is provided a fast response.

A data structure is a particular way of organizing a large amount of data more efficiently in a computer so that any operation on that data becomes easy.

In other words, Data structure is a way of collecting and organizing data in such a way that we can perform operations on these data in an effective way.

Data structures is about rendering data elements in terms of some relationship, for better performance, organization and storage.

The logical or mathematical model for a particular organization of data is termed as a data structure.

In simple words, Data structures are structures programmed to store ordered data, so that various operations can be performed on it easily.

It represents the knowledge of data to be organized in memory. It should be designed and implemented in such a way that it reduces the complexity and increases the efficiency.

Data Structure is useful in representing the real world data and its operations in the computer program.
  </div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('ds', 'Types')" class="nav-button next">Next &gt;</button>
</div>
      ` 
    },
    { name: 'Types', data: `
      <h1>Types of Data Structures</h1>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/types.png" class="data-img">

      <div class="section">
  <div class="data-box wrap">
Based on the organizing method of a data structure, data structures are divided into two types:

    1. Primitive Data Structures (Built-In Data Structures)
    2. Non-primitive Data Structures (User-defined Data Structures)
  </div>
</div>

      <div class="section">
        <h2>Primitive Data Structures</h2>
  <div class="data-box wrap">
Primitive data structures are those which are the predefined way of storing data by the system. And the set of operations that can be performed on these data are also predefined.

Primitive data structures are char, int, double and float.

Most of the programming languages have built-in support for the primitive data structures.
  </div>
</div>

      <div class="section">
        <h2>Non-primitive Data Structures</h2>
  <div class="data-box wrap">
Non-primitive data structures are more complicated data structures and they are derived from primitive data structures.

Non-primitive data structures are used to store large and connected data. Some example of non-primitive data structures are: Linked List, Tree, Graph, Stack and Queue.

The non-primitive data structures are sub categorized into two ways: <b>Linear data structures</b> and <b>Non-linear data structures</b>.
    <li>If a data structure is organizing the data in sequential order then that data structure is called a linear data structure.
Some of the examples are Arrays, Linked Lists, Stacks and Queues.</li><li>If a data structure is organizing the data in random order or hierarchical order, not in sequential order, then that data structure is called as non-linear data structure.
Some of the examples are Trees, Graphs, Dictionaries and Heaps.</li>
  </div>
</div>


<div class="nav-buttons">
  <button onclick="navPage('ds', 'Introduction')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('ds', 'Characteristics')" class="nav-button">Next &gt;</button>
</div>

      ` 
    },
    { name: 'Characteristics', data: `
      <h1>Data Structure Characteristics</h1>

<table>
    <thead>
        <tr style="padding: 10px;">
            <td><center><b>Characteristic</b></center></td>
            <td><center><b>Explanation</b></center></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Linear Data Structures</td>
            <td>In linear data structures, all the data items are stored in a linear sequence. Example : <b>Arrays </b></td>
        </tr>
        <tr>
            <td>Non-Linear Data Structures</td>
            <td>In Non-Linear data structures, all the data items are stored in random order or hierarchical order. The data Items are not stored in a linear sequence. Example : <b>Trees, Dictionaries, Graphs and Heaps</b></td>
        </tr>
        <tr>
            <td>Homogeneous Data Structures</td>
            <td>In Homogeneous data structure, all the data items are of same type. Example : <b>Arrays </b></td>
        </tr>
        <tr>
            <td>Non-Homogeneous Data Structures</td>
            <td>In Non-Homogeneous data structures, all the data items may or may not be of same type Example : <b>Structures</b></td>
        </tr>
        <tr>
            <td>Static Data Structures</td>
            <td>In Static data structures, the size and structure's associated memory locations are fixed during compile time. Example : <b>Arrays </b></td>
        </tr>
        <tr>
            <td>Dynamic Data Structures</td>
            <td>Dynamic data structures can expand or shrink depending upon the program need and its execution. This expansion and shrinking happens during the program runtime. Also, their associated memory locations can change during program runtime. Example : <b>Linked Lists, Stack using Linked Lists, Queues using Linked List, Trees, Heaps etc.</b></td>
        </tr>
    </tbody>
</table>

      <div class="section">
  <div class="data-box wrap">
All the data structures allow us to perform different operations on data.

Each data structure has advantages and disadvantages compared to other data structures.

One should be able to select the best data structures based on which type of operations are required.
  </div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('ds', 'Types')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('ds', 'Algorithm')" class="nav-button">Next &gt;</button>
</div>
      ` 
    },
    { name: 'Algorithm', data: `
      <h1>Algorithm</h1>

      <div class="section">
  <div class="data-box wrap">
An <b>Algorithm</b> is a finite set of instructions or logic, written in order, to accomplish a certain predefined task.

An <b>Algorithm</b> is independent of the programming language. An Algorithm is the core logic to solve a given problem.

An <b>Algorithm</b> is expressed generally as <b>flow chart</b> or as an informal high level description called as <b>pseudocode</b>

<b>Algorithm</b> can be defined as &#8220;a sequence of steps to be performed for getting the desired output for a given input.&#8221;

The sequence of steps of an <b>algorithm</b> can be stated in human readable English statements or <a class="extLink" href="https://en.wikipedia.org/wiki/Pseudocode" target="_blank">pseudo-code</a> (meaning - a notation resembling a simplified programming language).

After the <b>analysis</b> stage, producing an <b>algorithm</b> is the first step in arriving at the solution process.

There may be more than one way to solve a problem, hence there may be more than one <b>algorithms</b> for a given problem.

Before attempting to write an <b>algorithm</b>, one should find out what the expected inputs and outputs are for the given problem.
  </div>
</div>

<div class="section">
  <h2>Properties</h2>
  <div class="data-box">
<ol>
  <li><b>Input</b>: Algorithm should be accepting 0 or more inputs supplied externally.</li>
  <li><b>Output</b>: Algorithm should be generating at least one output.</li>
  <li><b>Definiteness</b>: Each step of an algorithm must be precisely 
  defined. Meaning the step should perform a clearly defined task without 
  much complication.</li>
  <li><b>Finiteness</b>: An algorithm must always terminate after a finite number of steps.</li>
  <li><b>Effectiveness</b>: The efficiency of the steps and the accuracy of the output determine the effectiveness of the algorithm.</li>
  <li><b>Correctness</b>: Each step of the algorithm must generate a correct output.&nbsp;</li>
</ol>
 </div>
</div>

<div class="section">
  <h2>Efficiency </h2>
  <div class="data-box wrap">
An algorithm is said to be efficient and fast, if it takes less time to execute and consumes less memory space.

The performance of an algorithm is measured on the basis of following properties:
<ul><li>Time complexity</li><li>Space complexity</li></ul>
Time complexity is a way to represent the amount of time required by the program to run till its completion.

The amount of time taken by the program depends on lot of things like hardware, operating system, number of processors, processor architecture etc.

We do not consider all these factors when analyzing the algorithms, we only consider the number of operations to be executed for the completion of the algorithm.

The reason is very simple because we want the algorithm analysis to be system independent.

Space complexity is the amount of memory space that is required by the algorithm for its execution.

Space complexity is very useful to identify the best algorithm in situations where limited memory is available for the program to run.

An algorithm generally requires space for following:
<ul><li><b>Instruction space</b>: Space required to store the executable version (Also known as Binary Code) of the program. This space is fixed and depends on the number of instructions in the algorithm.</li><li><b>Data space</b>: Space required to store all the program variables (Constants, Variables, Temporary Variables etc.).</li><li><b>Environment space</b>: Space required to store the environment information needed to resume the suspended function.<b>One heap and one stack is maintained during the program execution.</b></li><li>Heap is the segment where dynamic memory allocation usually takes place.</li><li>Stack is a segment where automatic variables and function call stack is stored.</li></ul>
When we are measuring the space complexity analysis of an algorithm, we consider only the data space of the algorithm and ignore the instruction space and environmental space.

That is we will calculate only the memory required to store variables, constants and structures.
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('ds', 'Characteristics')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('ds', 'Array')" class="nav-button">Next &gt;</button>
</div>
      ` 
    },
    { name: 'Array', data: `
      <h1>ARRAY</h1>
      <p>Array is a fundamental and linear data structure which is a collection of same type elements that are stored at contiguous memory locations where the elements are identified / accessed by their indexes. Array index starts from 0.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array1.png" class="data-img">

      <div class="section">
        <h2>Types of Arrays</h2>
        <div class="data-box">
          <div><b>1. One Dimensional Array</b>: An Array represented as a row, where elements are stored one after the other.</div>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array2.png" class="data-img">
        </div>

        <div class="data-box">
          <b>2. Multi-Dimensional Array</b>: An array with more than one dimension. It is used to store complex data in the form of tables. <br />
          <div class="indented">
            <li><div><b>Two-Dimensional Array</b>: An Array which can be considered as an array of arrays or as a matrix containing rows and columns.</div>
              <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array3.png" class="data-img">
            </li>
            
            <li><div><b>Three-Dimensional Array</b>: An Array which can be considered an array of two-dimensions containing three dimensions.</div>
              <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array4.png" class="data-img">
            </li>
          </div>
        </div>
      </div>
  
      <div class="section">
        <h2>Syntax</h2>
        <div class="data-box">
          <code><pre class="java-code">
dataType[] arrayName = new dataType[size]; // 1D

dataType[][] arrayName = new dataType[size1][size2]; // 2D

dataType[][][] arrayName = new dataType[size1][size2][size3]; // 3D
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>

      <div class="section">
        <h2>Initialization of Array</h2>
        <div class="data-box">
          <code><pre class="java-code">
int arrayName[] = {1, 2, 3};

char arrayName[] = {'a', 'b', 'c'};

float arrayName[] = {1.0f, 2.0f, 3.0f};
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>

      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
          <li><b>Random Access</b> - Elements can be accessed in a random fashion.</li>
          <li><b>Cache Friendliness</b> - All items are stored at contiguous locations.</li>
          <li>Stores the elements of the same type(Homogeneous).</li>
          <li>Index always starts from 0.</li>
          <li>Has a fixed storage.
        </div>
      </div>

      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
          <li><b>update()</b>: Used to update an element in an array.</li>
          <li><b>display()</b>: Used to traverse through all the elements of an array and display them.</li>
          <li><b>get()</b>: Used to retrieve a value using an index.</li>
        </div>
      </div>
  
      <div class="section">
        <h2>Implementation</h2>
        <div class="tabs">
          <button class="tab-button active" onclick="showTabContent(event, 'tab1')">One Dimensional Array</button>
          <button class="tab-button" onclick="showTabContent(event, 'tab2')">Two Dimensional Array</button>
          <button class="tab-button" onclick="showTabContent(event, 'tab3')">Three Dimensional Array</button>
        </div>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

public class OneDimensionalArray {
    private int[] array;

    // Constructor to initialize the array
    public OneDimensionalArray(int size) {
        array = new int[size];
        Scanner scanner = new Scanner(System.in);
        System.out.println("\\nEnter elements");

        for (int i = 0; i < size; i++) {
            System.out.print("Index " + i + ": ");
            array[i] = scanner.nextInt();
        }
    }

    // Method to update an element at a specified index
    public void update(int index, int value) {
        if (index >= 0 && index < array.length) {
            array[index] = value;
        } else {
            System.out.println("Index out of bounds.");
        }
    }

    // Method to display all elements of the array
    public void display() {
        System.out.println();
        for (int element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }

    // Method to retrieve a value at a specified index
    public void get(int index) {
        System.out.println();
        if (index >= 0 && index < array.length) {
            System.out.println("Value at index " + index + ": " + array[index]);
        } else {
            System.out.println("Index out of bounds.");
        }
    }

    public static void main(String[] args) {
        int op, index, value;
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();
        OneDimensionalArray myArray = new OneDimensionalArray(size);

        do {
            System.out.println("\\nOperations");
            System.out.println("1. Update");
            System.out.println("2. Get");
            System.out.println("3. Display");
            System.out.println("4. Exit");
            System.out.print("Select an operation: ");
            op = scanner.nextInt();

            switch (op) {
                case 1:
                    System.out.print("\\nEnter Index: ");
                    index = scanner.nextInt();
                    System.out.print("Enter Value: ");
                    value = scanner.nextInt();
                    myArray.update(index, value);
                    break;

                case 2:
                    System.out.print("\\nEnter Index: ");
                    index = scanner.nextInt();
                    myArray.get(index);
                    break;

                case 3:
                    myArray.display();
                    break;

                case 4:
                    System.out.println("Exiting the program.");
                    System.exit(0);
                    break;

                default:
                    System.out.println("\\nPlease enter a valid option.");
            }
        } while (op != 4);

        scanner.close();
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">

<pre>
/*
OUTPUT:
Enter the size of the array: 5

Enter elements
Index 0: 20
Index 1: 32
Index 2: 45
Index 3: 2
Index 4: 66

Operations
1. Update
2. Get
3. Display
4. Exit
Select an operation: 1

Enter Index: 5
Enter Value: 34
Index out of bounds.

Operations
1. Update
2. Get
3. Display
4. Exit
Select an operation: 1

Enter Index: 2
Enter Value: 421

Operations
1. Update
2. Get
3. Display
4. Exit
Select an operation: 3

20 32 421 2 66

Operations
1. Update
2. Get
3. Display
4. Exit
Select an operation: 2

Enter Index: 8

Index out of bounds.

Operations
1. Update
2. Get
3. Display
4. Exit
Select an operation: 2

Enter Index: 4

Value at index 4: 66

Operations
1. Update
2. Get
3. Display
4. Exit
Select an operation: 4
Exiting the program.
*/</pre>
          </div>

          <div class="tab-content data-box hidden" id="tab2"><pre class="java-code">
import java.util.Scanner;

public class TwoDArray {
    public static void main(String[] args) {
        int i, j;
        Scanner scanner = new Scanner(System.in);
        
        // Prompt user for row and column sizes
        System.out.print("Enter the number of rows: ");
        int rowSize = scanner.nextInt();
        
        System.out.print("Enter the number of columns: ");
        int colSize = scanner.nextInt();
        
        // Initialize the 2D array
        int[][] array = new int[rowSize][colSize];
        
        // Input elements for the array
        System.out.println("Enter the elements:");
        for (i = 0; i < rowSize; i++) {
            for (j = 0; j < colSize; j++) {
                System.out.printf("Element [%d][%d]: ", i, j);
                array[i][j] = scanner.nextInt();
            }
        }

        int choice;
        do {
            // Display operations menu
            System.out.println("\\nAvailable operations:");
            System.out.println("1. Update an Element");
            System.out.println("2. Access an Element");
            System.out.println("3. Display the Array");
            System.out.println("4. Exit");
            
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    // Update an element in the array
                    System.out.println("\\nEnter indices to update a value:");
                    System.out.print("Row index: ");
                    i = scanner.nextInt();
                    System.out.print("Column index: ");
                    j = scanner.nextInt();
                    
                    if (i < rowSize && j < colSize) {
                        System.out.print("Enter the new value: ");
                        int value = scanner.nextInt();
                        array[i][j] = value;
                        System.out.println("Value updated successfully.");
                    } else {
                        System.out.println("Invalid indices provided.");
                    }
                    break;

                case 2:
                    // Access an element in the array
                    System.out.println("\\nEnter indices to access a value:");
                    System.out.print("Row index: ");
                    i = scanner.nextInt();
                    System.out.print("Column index: ");
                    j = scanner.nextInt();
                    
                    if (i < rowSize && j < colSize) {
                        System.out.printf("The value at [%d][%d] is: %d%n", i, j, array[i][j]);
                    } else {
                        System.out.println("Invalid indices provided.");
                    }
                    break;

                case 3:
                    // Display the entire array
                    System.out.println("\\nElements in the array:");
                    for (i = 0; i < rowSize; i++) {
                        for (j = 0; j < colSize; j++) {
                            System.out.print(array[i][j] + " ");
                        }
                        System.out.println(); // New line after each row
                    }
                    break;

                case 4:
                    System.out.println("Exiting...");
                    System.exit(4);
                    break;

                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        } while (choice != 4);  // Continue the loop until the user chooses to exit

        scanner.close();
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
Output:
Enter the number of rows: 3
Enter the number of columns: 2
Enter the elements:
Element [0][0]: 1
Element [0][1]: 2
Element [1][0]: 3
Element [1][1]: 4
Element [2][0]: 5
Element [2][1]: 6

Available operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 3

Elements in the array:
1 2
3 4
5 6

Available operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 2

Enter indices to access a value:
Row index: 1
Column index: 0
The value at [1][0] is: 3

Available operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 1

Enter indices to update a value:
Row index: 1
Column index: 0
Enter the new value: 9
Value updated successfully.

Available operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 3

Elements in the array:
1 2
9 4
5 6

Available operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 4
Exiting...
*/
</pre>
          </div>
          <div class="tab-content data-box hidden" id="tab3"><pre class="java-code">
import java.util.Scanner;

public class ThreeDimensionalArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int i, j, k;

        // Prompt user for dimensions of the 3D array
        System.out.print("Enter the number of layers: ");
        int layer = scanner.nextInt();
        System.out.print("Enter the number of rows: ");
        int row = scanner.nextInt();
        System.out.print("Enter the number of columns: ");
        int col = scanner.nextInt();

        // Initialize the 3D array
        int[][][] array = new int[layer][row][col];

        // Input elements for the 3D array
        System.out.println("Enter the elements:");
        for (i = 0; i < layer; i++) {
            System.out.println("Layer " + (i + 1) + ":");
            for (j = 0; j < row; j++) {
                for (k = 0; k < col; k++) {
                    System.out.printf("Element [%d][%d][%d]: ", i, j, k);
                    array[i][j][k] = scanner.nextInt();
                }
            }
        }

        int choice;
        do {
            // Display operations menu
            System.out.println("\\nOperations:");
            System.out.println("1. Update an Element");
            System.out.println("2. Access an Element");
            System.out.println("3. Display the Array");
            System.out.println("4. Exit");

            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    // Update an element in the array
                    System.out.println("\\nEnter indices to update a value:");
                    System.out.print("Layer index: ");
                    i = scanner.nextInt();
                    System.out.print("Row index: ");
                    j = scanner.nextInt();
                    System.out.print("Column index: ");
                    k = scanner.nextInt();
                    
                    if (i < layer && j < row && k < col) {
                        System.out.print("Enter the new value: ");
                        int value = scanner.nextInt();
                        array[i][j][k] = value;
                        System.out.println("Value updated successfully.");
                    } else {
                        System.out.println("Invalid indices provided.");
                    }
                    break;

                case 2:
                    // Access an element in the array
                    System.out.println("\\nEnter indices to access a value:");
                    System.out.print("Layer index: ");
                    i = scanner.nextInt();
                    System.out.print("Row index: ");
                    j = scanner.nextInt();
                    System.out.print("Column index: ");
                    k = scanner.nextInt();
                    
                    if (i < layer && j < row && k < col) {
                        System.out.printf("The value at [%d][%d][%d] is: %d%n", i, j, k, array[i][j][k]);
                    } else {
                        System.out.println("Invalid indices provided.");
                    }
                    break;

                case 3:
                    // Display the entire 3D array
                    System.out.println("\\nElements in the 3D array:");
                    for (i = 0; i < layer; i++) {
                        System.out.println("Layer " + (i + 1) + ":");
                        for (j = 0; j < row; j++) {
                            for (k = 0; k < col; k++) {
                                System.out.print(array[i][j][k] + " ");
                            }
                            System.out.println(); // New line after each row
                        }
                        System.out.println(); // New line after each layer
                    }
                    break;

                case 4:
                    System.out.println("Exiting...");
                    break;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 4); // Continue the loop until the user chooses to exit

        scanner.close();
    }
}

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
Output:
Enter the number of layers: 2
Enter the number of rows: 3
Enter the number of columns: 2
Enter the elements:
Layer 1:
Element [0][0][0]: 1
Element [0][0][1]: 2
Element [0][1][0]: 3
Element [0][1][1]: 4
Element [0][2][0]: 5
Element [0][2][1]: 6
Layer 2:
Element [1][0][0]: 7
Element [1][0][1]: 8
Element [1][1][0]: 9
Element [1][1][1]: 10
Element [1][2][0]: 11
Element [1][2][1]: 12

Operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 2

Enter indices to access a value:
Layer index: 1
Row index: 1
Column index: 1
The value at [1][1][1] is: 10

Operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 3

Elements in the 3D array:
Layer 1:
1 2
3 4
5 6

Layer 2:
7 8
9 10
11 12


Operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 1

Enter indices to update a value:
Layer index: 1
Row index: 1
Column index: 1
Enter the new value: 100
Value updated successfully.

Operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 3

Elements in the 3D array:
Layer 1:
1 2
3 4
5 6

Layer 2:
7 8
9 100
11 12


Operations:
1. Update an Element
2. Access an Element
3. Display the Array
4. Exit
Enter your choice: 4
Exiting...
*/
</pre>
          </div>
        </code>
      </div>

      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Implementation of static data structures such as stacks, queues, Hash Tables, Linked Lists, Array Lists, Heaps, Vectors, Matrices, Trees, Graphs, etc.</li>
<li>Database records are usually implemented as arrays.</li>
<li>Used in lookup tables by the computer.</li>
        </div>
      </div>
      
      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Have a fixed size(Static array).</li>
<li>Cannot store Heterogeneous elements.</li>
<li>Cannot be used where we have operations like insert in middle, delete from middle or search in unsorted data.</li>
        </div>
      </div>

      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box"><li><b>Time Complexity</b></li>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array5.png" class="data-img">
        </div>
        <div class="data-box"><li><b>Space  Complexity</b></li>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array6.png" class="data-img">
        </div>
      </div>

      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
          <li>ArrayIndexOutOfBoundsException</li>
          <li>NullPointerException</li>
          <li>ArrayStoreException</li>
        </div>
      </div>

<div class="nav-buttons">
  <button onclick="navPage('ds', 'Algorithm')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('ds', 'Lists')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'Lists', data: `
      <h1>Lists in Data Structures</h1>

      <div class="section">
  <div class="data-box wrap">
A list is any information displayed or organized in a logical or linear formation.

In computer science, a <b>list</b> or <b>sequence</b> is an abstract data type that represents a countable number of ordered values, where the same value may occur more than once.

The name <b>list</b> is also used for several concrete data structures that can be used to implement abstract lists, especially linked lists.

<b>Lists</b> are typically implemented either as linked lists or as arrays.

Array is a basic abstract data type that holds an ordered collection of items accessible by an integer index.

All the elements of the <b>array</b> are stored at contiguous locations.

Linked list is a data structure that can be used to store linear data of similar types.

Unlike <b>arrays</b> the memory allocation is not continuous.

In <b>linked lists</b>, the memory allocation is <b>dynamic</b> i.e., the memory is allocated when it is needed.

Because of the <b>size</b> of the <b>linked list</b> is never fixed, we can increase or decrease the size of the list at any point in time.

Whereas in <b>array</b>, the memory is statically allocated based on the size of array mentioned in the declaration.

Most of the times the memory allocated to the array is under utilized. The size of the arrays is fixed, so we must know the upper limit on the number of elements in advance.

Also, generally, the allocated memory is equal to the upper limit irrespective of the usage, and in practical uses, the upper limit is rarely reached.
  </div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('ds', 'Array')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('ds', 'Linked List')" class="nav-button">Next &gt;</button>
</div>
      ` 
    },
    { name: 'Linked List', data: 'Linked List' },
    { name: 'Lists Vs Arrays', data: `
      <h1>Lists Vs Arrays</h1>

      <div class="section">
  <div class="data-box">
Differences between <b>arrays</b> and <b>lists</b>:
<ol>
<li>Fixed Size:</li>
  <ul><li>In an <b>array</b>, the memory is allocated at once based on the size mentioned during the array declaration.</li>
  <li>For example, int a [200]; A total memory of <b>200 * 2 = 400</b> bytes of memory is allocated at once (Assuming size of int data type is 2 bytes).</li>
  <li>Where as in a <b>list</b> the memory allocation is <b>dynamic</b>. The size of the list increases as the elements are added to the list.</li>
  </ul>
<li>Insertion and Deletion Operations:</li>
  <ul><li>In an <b>array</b>, inserting an element into the existing group of elements is expensive as a room should be created for the new element by shifting most of the existing elements.</li>
  <li>In a <b>list</b>, inserting and deleting elements at any is very easy and these operations can be done with in three steps.</li>
  </ul>
<li>Cache Locality:</li>
  <ul><li><b>Arrays</b> have a better cache locality. Cache locality of the data can make an significant advantage in performance and efficiency.</li>
  </ul>
<li>Random Access:</li>
  <ul><li>In <b>arrays</b>, random access to the elements is possible through index as the elements are stored in continuous locations.</li>
  <li>In <b>lists</b>, random access is not possible. The elements can only be accessed sequentially.</li>
  </ul>
<li>Extra Memory:</li>
  <ul><li>In <b>lists</b>, extra memory space for pointer to the <b>next</b> node in the <b>list</b> is required which is not required in <b>arrays</b>.</li>
  </ul>
<li>Continuous Memory Locations:</li>
  <ul><li>In <b>arrays</b>, the elements are stored at continuous locations whereas in the <b>list</b>, the elements are stored at random locations.</li>
  </ul>
</ol>
  </div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('ds', 'Linked List')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('ds', 'Stack')" class="nav-button">Next &gt;</button>
</div>
      ` 
    },
    { name: 'Stack', data: 'Stack' },
    { name: 'Queue', data: 'Queue' },
  ],


  cmd: [
    { name: 'Internal Commands', data: `
      <h1>Internal Commands</h1>

      <div class="section">
          <div class="data-box">
          <h3>Internal commands are built into the command interpreter (cmd.exe). These commands do not require separate files to execute and are available as long as the command prompt is open.</h3>
          </div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'assoc')" class="nav-button next">Next &gt;</button>
</div>
      `
    },
    { name: 'assoc', data: `
      <h1>assoc</h1>
      <p>The assoc command in the Windows command prompt is used to display or modify file name extension associations.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">
          The assoc command is used to view or change the file extension associations on a system.
        </div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
assoc [.ext=[fileType]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
.ext: Specifies the file extension.
fileType: Specifies the file type to associate with the specified file extension.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
assoc .txt=txtfile

This example associates the file extension .txt with the file type txtfile. After running this command, double-clicking a .txt file would open it with the default program associated with the txtfile file type.
</pre></div>
      </div>

      <div class="section">
          <h2>Additional Information</h2>
          <div class="data-box">
<li>To view the current file associations, you can run assoc without any arguments: assoc.</li>
<li>To remove a file association, you can use the assoc command with the file extension followed by nothing. For example: assoc .txt=.</li>
<li>Changing file associations can impact how files are opened and processed by default applications.</li>
</div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'Internal Commands')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'bcdedit')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'bcdedit', data: `
      <h1>bcdedit</h1>
      <p>The bcdedit command is a powerful tool in Windows used for managing the Boot Configuration Data (BCD) store. The BCD store contains boot configuration parameters and controls how the operating system is started in Windows Vista, Windows 7, Windows 8, and later versions.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The bcdedit command is used to view and make changes to the BCD store. It allows you to configure various boot-related settings, including the default operating system, boot menu timeout, boot parameters, and more.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
bcdedit [/option] [argument]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
Common options include:
/enum: Displays the current entries in the BCD store.
/create: Creates a new boot entry.
/delete: Deletes a boot entry.
/set: Sets a boot entry option value.
/timeout: Sets the time, in seconds, that the boot manager waits for user input.
/default: Sets the default boot entry.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
bcdedit /enum

This example displays the current entries in the BCD store, including information about the operating systems configured for boot.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Running bcdedit without any options will display the current configuration.</li>
  <li>Changes made with bcdedit can have a significant impact on the system's ability to boot, so use it with caution.</li>
  <li>Elevated privileges (Run as Administrator) are often required to use bcdedit to modify the BCD store.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Common use cases for bcdedit include modifying the boot menu, setting the default operating system, and configuring advanced boot options. It's a tool often used in troubleshooting and system customization.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'assoc')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'break')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'break', data: `
      <h1>break</h1>
      <p>In the context of the command prompt or scripting in various environments, the break command is typically used to exit from a loop or a switch statement. However, it's important to note that the availability and functionality of the break command can vary depending on the specific programming or scripting language being used.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The break command is used to exit prematurely from a loop or switch statement.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
The syntax may vary depending on the programming or scripting language. In many languages, it's simply break.
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box">Example (in a hypothetical scripting language):  
          <code><pre class="py-code">
for i in range(10):
  if i == 5:
      break
  print(i)

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
In this example, the loop will print numbers from 0 to 4 and then break out of the loop when i is equal to 5.
</pre></div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'bcdedit')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'call')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'call', data: `
      <h1>call</h1>
      <p>The call command in the Windows command prompt is used to run a script or batch program from within another script or batch program. It's often used to invoke another batch file or script and then return to the original script after the called script has completed.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The call command is used to execute another script or batch program and return control to the calling script.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
call [drive:][path]filename [args]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path]filename: Specifies the batch script or program to be called.
[args]: Specifies any command-line arguments to be passed to the batch script or program.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
call another_script.bat

In this example, the call command is used to invoke the batch script named "another_script.bat."
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>When a batch file calls another batch file using the call command, control is transferred to the called batch file, and when the called batch file finishes, control returns to the original batch file.</li>
  <li>Without using call, if one batch file calls another, the control doesn't return to the original batch file after the called batch file completes.</li>
</div>
</div>

      <div class="section">
          <h2>Here's a simple example to illustrate the difference:</h2>
          <div class="data-box"><pre class="wrap">
@echo off
echo This is the main batch file
call another_script.bat
echo Back in the main batch file

In this example, "another_script.bat" is called using call, and control returns to the main batch file after "another_script.bat" completes.
</pre></div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'break')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'cd')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'cd', data: `
      <h1>cd</h1>
      <p>The cd command in the Windows command prompt (cmd) is used to change the current working directory. It is also available in Unix-based systems (Linux, macOS) and the command prompt in those environments.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The cd command is used to change the current working directory.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
cd [drive:][path]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path]: Specifies the drive and directory to change to. If only the drive is specified, it changes the current drive without changing the directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
cd C:\Example

This example changes the current working directory to "C:\Example."
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Using cd without any arguments will switch to the user's home directory.</li>
  <li>The /D option can be used to change both the current drive and the current directory, like this: cd /D D:\AnotherExample.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'call')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'chcp')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'chcp', data: `
      <h1>chcp</h1>
      <p>The chcp command in the Windows command prompt is used to change the active code page of the console. The code page determines how character strings are converted between numeric codes and the characters they represent.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The chcp command is used to change the active code page of the console window.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
chcp [nnn]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
nnn: Specifies the code page number to set. If no code page number is specified, chcp displays the active code page.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
chcp 1252

This example sets the code page to 1252, which is commonly used for Western European languages.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Different code pages support different sets of characters, and changing the code page may affect how characters are displayed in the console.</li>
  <li>Common code pages include 437 (United States), 1252 (Western Europe), and 65001 (UTF-8).</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that changing the code page may affect how characters are displayed in the console, and it might be necessary to choose a code page that matches the character set of the content you are working with. The chcp command is particularly relevant when dealing with non-ASCII characters in console applications.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'cd')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'chdir')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'chdir', data: `
      <h1>chdir</h1>
      <p>The chdir command is an alternative name for the cd command in the Windows command prompt. Both cd and chdir are used to change the current working directory.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The chdir command, just like the cd command, is used to change the current working directory.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
chdir [drive:][path]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path]: Specifies the drive and directory to change to. If only the drive is specified, it changes the current drive without changing the directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
chdir C:\Example

This example changes the current working directory to "C:\Example."
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>In Windows command prompt, chdir and cd are interchangeable; both can be used to achieve the same result of changing the current working directory.</li>
  <li>The /D option can be used with chdir (or cd) to change both the current drive and the current directory, like this: chdir /D D:\AnotherExample.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
The primary use of chdir is to change directories, and it serves the same purpose as the cd command in the Windows command prompt.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'chcp')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'choice')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'choice', data: `
      <h1>choice</h1>
      <p>The choice command in the Windows command prompt is used to prompt the user to make a choice between one or more options. It's commonly used in batch scripts to create simple interactive menus.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The choice command is used to prompt the user for a key press to make a choice.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
choice [/C choices] [/N] [/S] [/T timeout /D choice] [/M text]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/C choices: Specifies a list of one or more characters, separated by commas, for the user to choose from.
/N: Makes the input choice case-sensitive.
/S: Causes the choice to be hidden.
/T timeout: Specifies the number of seconds to pause before the default choice is selected.
/D choice: Specifies the default choice after timeout seconds.
/M text: Specifies the text to display as the prompt.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
choice /C 123 /M "Choose a number:"
if errorlevel 3 goto Three
if errorlevel 2 goto Two
if errorlevel 1 goto One
goto End

:One
echo You chose One
goto End

:Two
echo You chose Two
goto End

:Three
echo You chose Three
goto End

:End

In this example, the user is prompted to choose a number from 1 to 3. Depending on the choice, the script jumps to the corresponding label.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The choice command is limited in terms of customizing the appearance of the menu.</li>
  <li>The errorlevel values indicate which option the user selected. These values are used in an if errorlevel structure to determine the chosen option.</li>
  <li>The /C option is used to define the valid choices.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
While choice provides a basic way to create menus in batch scripts, for more advanced and flexible menu options, PowerShell or other scripting languages might be preferred.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'chdir')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'clip')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'clip', data: `
      <h1>clip</h1>
      <p>The clip command in Windows is used to redirect the output of a command to the clipboard, allowing you to easily copy information from the command prompt to other applications.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The clip command is used to redirect the output of a command to the clipboard.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
command | clip

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
command: Represents the command whose output you want to redirect to the clipboard.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
echo Hello, World! | clip

This example sends the text "Hello, World!" to the clipboard.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The clip command is particularly useful when combined with other commands or scripts, allowing you to easily copy command output without the need for manual selection and copying.</li>
  <li>The clip command is available in Windows Vista and later versions.</li>
  <li>If used without any input, the clip command will read from the clipboard and display the current contents.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
The clip command simplifies the process of copying text output from the command prompt and is often used in scripts and command-line operations.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'choice')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'cls')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'cls', data: `
      <h1>cls</h1>
      <p>The cls command in the Windows command prompt is used to clear the screen, removing all previously executed commands and their output, making the console window blank.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The cls command is used to clear the contents of the console screen.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
cls

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
echo Hello, World!
cls

In this example, the echo command prints "Hello, World!" to the console, and then cls is used to clear the screen.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The cls command does not take any arguments.</li>
  <li>It is commonly used in batch files or scripts to provide a clean and organized console display.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
When working with the command prompt or writing batch scripts, using cls can help improve the readability of the console output by keeping the display uncluttered.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'clip')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'color')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'color', data: `
      <h1>color</h1>
      <p>The color command in the Windows command prompt is used to change the foreground and background colors of the console window. It allows you to customize the appearance of the command prompt.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The color command is used to set the text and background colors of the console window.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
color [background][foreground]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
background: Specifies the background color.
foreground: Specifies the foreground (text) color.

The color values are specified using hexadecimal digits: 0, 1, 2, ..., 9, A, B, C, D, E, F.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
color 0A

This example sets the background color to black (0) and the foreground color to light green (A).
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>You can use the color command without any arguments to display the current console color settings.</li>
  <li>The color values are a combination of two hexadecimal digits, where the first digit represents the background color, and the second digit represents the foreground color.</li>
  <li>The color settings will persist until the command prompt window is closed.</li>
</div>
</div>

      <div class="section">
          <h2>Here's a quick reference for the color codes:</h2>
          <div class="data-box"><pre class="wrap">
0 = Black
1 = Blue
2 = Green
3 = Aqua
4 = Red
5 = Purple
6 = Yellow
7 = White
8 = Gray
9 = Light Blue
A = Light Green
B = Light Aqua
C = Light Red
D = Light Purple
E = Light Yellow
F = Bright White
</pre></div>
      </div>

      <div class="section">
<div class="data-box">
The color command is often used for customization and personalization of the command prompt environment.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'cls')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'convert')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'convert', data: `
      <h1>convert</h1>
      <p>The convert command is primarily used for converting a FAT or FAT32 file system to NTFS without losing data. This command is part of the Windows Command Prompt utility.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The convert command in Windows is used to convert a FAT or FAT32 file system to NTFS.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
convert [volume] /fs:ntfs

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[volume]: Specifies the drive letter or mount point of the volume to convert.
/fs:ntfs: Specifies the target file system, in this case, NTFS.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
convert C: /fs:ntfs

This example converts the file system of the C: drive from FAT32 to NTFS.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The convert command is a useful tool when you want to take advantage of NTFS features without reformatting the entire drive.</li>
  <li>Conversion from FAT or FAT32 to NTFS is non-destructive, meaning it doesn't delete data on the drive during the conversion process.</li>
  <li>Ensure that you have a backup of your important data before performing any file system conversion.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'color')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'copy')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'copy', data: `
      <h1>copy</h1>
      <p>The copy command in the Windows Command Prompt is used to copy one or more files from one location to another. It allows you to duplicate files or directories.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The copy command is used to copy files or directories from one location to another.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
copy [/D] [/V] [/N] [/Y | /-Y] [/Z] [/A | /B ] source [/A | /B] [+ source [/A | /B] [+ ...]] [destination [/A | /B]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/D: Allow the destination file to be created decrypted.
/V: Verifies that new files are written correctly.
/N: Uses short file names, if available, when copying a file with a non-8dot3 name.
/Y: Suppresses prompting to confirm you want to overwrite an existing destination file.
/-Y: Prompts you to confirm you want to overwrite an existing destination file.
/Z: Copies networked files in restartable mode.
/A: Indicates an ASCII text file.
/B: Indicates a binary file.
source: Specifies the file or files to be copied.
destination: Specifies the directory and/or filename for the new file(s).
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
copy C:\\Example\\file.txt D:\\Backup\\

This example copies the file "file.txt" from the "C:\\Example" directory to the "D:\\Backup" directory.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>If the destination is not specified, the copy command will assume the current directory.</li>
  <li>You can use wildcards (* and ?) to copy multiple files matching a pattern.</li>
  <li>To copy entire directories with their contents, you can use the xcopy command.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
The copy command is a fundamental tool for file management in the Windows Command Prompt, allowing you to duplicate files easily.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'convert')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'ctty')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'ctty', data: `
      <h1>ctty</h1>
      <p>The ctty command in the Windows Command Prompt is used to change the console input and output devices. It is an internal command.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The ctty command is used to change the console input and output devices.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
ctty [device]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
device: Specifies the device to use as the console input and output.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
ctty com1

This example sets the console input and output to the COM1 serial port.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The ctty command is used less frequently in modern Windows environments.</li>
  <li>It is more commonly used in legacy systems or scripts that need to redirect console input and output.</li>
  <li>The default console device is typically the screen and keyboard.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Please note that changing the console input and output devices using ctty may have implications for how input and output are handled in the command prompt, and it's generally not commonly used in regular day-to-day operations on modern Windows systems.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'copy')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'date')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'date', data: `
      <h1>date</h1>
      <p>The date command in the Windows Command Prompt is used to display or set the current date of the system. It allows users to view the current date or change it if necessary.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The date command is used to display or set the current date of the system.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
date [/T | date]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/T: Displays the current date without prompting to set it.
date: Prompts the user to set the date.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
date

This example displays the current date.
</pre></div>
          <div class="data-box"><pre class="wrap">
date 11/27/2023

This example sets the system date to November 27, 2023.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>If used without any options, the date command displays the current date and prompts the user to enter a new date if they want to change it.</li>
  <li>The date format may vary depending on the regional settings of the system.</li>
  <li>Changing the date might require administrative privileges.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
The date command is often used when you need to check or modify the system date from the command prompt. It's a simple utility for basic date-related operations on the command line.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'ctty')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'del')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'del', data: `
      <h1>del</h1>
      <p>The del command in the Windows Command Prompt is used to delete one or more files from a specified location. It's a basic command for file deletion.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The del command is used to delete files from a specified location.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
del [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/P: Prompts for confirmation before deleting each file.
/F: Forcefully deletes read-only files.
/S: Deletes specified files from all subdirectories.
/Q: Quiet mode (doesn't display confirmation prompts).
/A[[:]attributes]: Selects files to delete based on attributes.
names: Specifies the file or files to be deleted.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
del myfile.txt

This example deletes the file named "myfile.txt" in the current directory.
</pre></div>
          <div class="data-box"><pre class="wrap">
del /Q /S *.tmp

This example deletes all files with the ".tmp" extension in the current directory and its subdirectories without prompting for confirmation.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The del command is a straightforward way to delete files, but it doesn't remove directories.</li>
  <li>If you want to delete directories along with their contents, you can use the rmdir or rd command.</li>
  <li>The /P option is useful when you want to confirm each file deletion.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
The del command is a basic file management tool in the Windows Command Prompt and is often used in scripts or batch files for automating file deletion tasks.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'date')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'dir')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'dir', data: `
      <h1>dir</h1>
      <p>The dir command in the Windows Command Prompt is used to display a list of files and subdirectories in a directory. It provides information about the contents of a specified directory.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The dir command is used to list the files and directories in a specified location.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
dir [drive:][path][filename] [/p] [/w] [/a[[:]attributes]] [/o[[:]sortorder]] [/s] [/b] [/l] [/q] [/c] [/n] [/x] [/-n]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path][filename]: Specifies the location and name of the files to list.
/p: Pauses after each screenful of information.
/w: Uses a wide list format.
/a[[:]attributes]: Displays files with the specified attributes.
/o[[:]sortorder]: Sorts the listing.
/s: Displays files in the specified directory and all its subdirectories.
/b: Uses bare format (no heading information or summary).
/l: Uses lowercase.
/q: Displays the owner of the file.
/c: Displays the thousand separator in file sizes.
/n: Displays the long file name in the directory.
/x: Displays short names generated for non-8dot3 file names.
/-n: Sorts by name (the default).
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
dir /p /w /a:d

This example lists all directories in the current directory, displaying them in a wide format, and pausing after each screenful.
</pre></div>
          <div class="data-box"><pre class="wrap">
dir *.txt

This example lists all files with the ".txt" extension in the current directory.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The dir command is a fundamental tool for navigating and inspecting the contents of directories in the command prompt.</li>
  <li>Various options and filters can be used to customize the output based on different criteria.</li>
  <li>The command is often used with wildcards (* and ?) to match multiple files or directories.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'del')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'drivparm')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'drivparm', data: `
      <h1>drivparm</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">drivparm is an MS-DOS command that is used to modify the parameters of an existing physical drive. It is typically used in the CONFIG.SYS file to set parameters for disk drives, but it can also be used for other types of drives, such as tape drives.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
drivparm drive=format options

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
drive is the drive number in the BIOS (0-3)

format is the drive type (0=360KB 5.25", 1=1.2MB 5.25", 2=720KB 3.5", 3=1.44MB 3.5", 4=2.88MB 3.5", 5=LSM-120 5.25", 6=Dual Floppy 3.5")

options are one or more of the following:
  D=n Sets the DMA transfer mode (0-7)
  I Sets the interleave factor (1-16)
  S=n Sets the spin speed (0=300rpm, 1=360rpm, 2=300rpm-360rpm, 3=400rpm)
  T Sets the transfer speed (0=100kB/s, 1=150kB/s, 2=200kB/s)
  W Sets the write caching (0=off, 1=on)
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
drivparm drive=0 D=2 I=3 W

The above command sets the DMA transfer mode to 2, the interleave factor to 3, and the write caching to on for drive 0:
</pre></div>
      </div>

      <div class="section">
<div class="data-box">
The drivparm command is not available in Windows versions newer than MS-DOS. However, there are some third-party tools that can be used to modify drive parameters in newer versions of Windows.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'dir')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'echo')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'echo', data: `
      <h1>echo</h1>
      <p>The echo command in the Windows Command Prompt is used to display messages or enable or disable the echoing feature.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The echo command is used to display messages or enable/disable the echoing of commands in the Command Prompt.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
echo [on | off] [message]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[on | off]: Enables or disables the echoing of commands. Use on to enable and off to disable.
[message]: The text message to be displayed.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
echo on
echo Hello, World!

This example enables echoing and then displays the message "Hello, World!".
</pre></div>
          <div class="data-box"><pre class="wrap">
echo off
cls

This example disables echoing, clears the screen, and you won't see the commands on the screen as they are executed. The cls command clears the screen.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>When echo is followed by a message, it displays the message on the screen.</li>
  <li>echo on enables the echoing of commands. echo off disables it. By default, echoing is usually on.</li>
  <li>Echoing is useful when you want to see the commands as they are executed, especially in batch files.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'drivparm')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'endlocal')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'endlocal', data: `
      <h1>endlocal</h1>
      <p>The endlocal command in the Windows Command Prompt is used to end the localization of environment changes in a batch script. It is typically used in conjunction with the setlocal command to limit the scope of environment variable changes to a specific portion of the script.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The endlocal command ends the localization of environment changes made within a specific block of code initiated by the setlocal command.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
endlocal

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
This command is usually used at the end of a block of code within a batch script.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
@echo off
setlocal
echo This is a local environment.
endlocal
echo This is the global environment.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>When setlocal is used, it initializes a local environment, and any changes made to environment variables within that block are temporary and don't affect the global environment.</li>
  <li>The endlocal command is used to terminate the local environment and revert to the global environment.</li>
  <li>This mechanism is useful for preventing unintended side effects on global environment variables caused by changes within a specific portion of a script.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Batch scripts often use setlocal and endlocal to create isolated environments, ensuring that changes made to environment variables within a specific script segment do not affect the overall system or other parts of the script.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'echo')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'erase')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'erase', data: `
      <h1>erase</h1>
      <p>The erase command in the Windows Command Prompt is used to delete one or more files. It is an alternative command to the more commonly used del command.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The erase command is used to delete files from a specified location.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
erase [/P] [/F] [/S] [/Q] [/A[[:]attributes]] names

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/P: Prompts for confirmation before deleting each file.
/F: Forcefully deletes read-only files.
/S: Deletes specified files from all subdirectories.
/Q: Quiet mode (doesn't display confirmation prompts).
/A[[:]attributes]: Selects files to delete based on attributes.
names: Specifies the file or files to be deleted.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
erase filename.txt

This example deletes the file named "filename.txt" in the current directory.
</pre></div>
          <div class="data-box"><pre class="wrap">
erase /P *.txt

This example deletes all files with the ".txt" extension in the current directory, prompting for confirmation before each deletion. As always, use commands like erase with caution, especially when deleting multiple files, as the process is typically irreversible.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The erase command is functionally equivalent to the del command in modern Windows systems.</li>
  <li>It provides a way to delete files from the command prompt, and the options allow for additional control over the deletion process.</li>
  <li>Like del, using the erase command with wildcards (* and ?) can match and delete multiple files.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'endlocal')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'exit')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'exit', data: `
      <h1>exit</h1>
      <p>The exit command in the Windows Command Prompt is used to close the Command Prompt window. It is a command that terminates the command shell.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The exit command is used to close the Command Prompt window.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
exit

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
echo Exiting...
exit

This example displays the message "Exiting..." and then exits the Command Prompt.
</pre></div>
          <div class="data-box"><pre class="wrap">
echo Exiting with code 1...
exit /b 1

This example displays the message "Exiting with code 1..." and exits the script with the exit code 1. The /b option is used to specify the exit code in batch scripts.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>When you run the exit command, it terminates the Command Prompt session and closes the window.</li>
  <li>It is often used at the end of batch scripts to ensure that the script exits cleanly.</li>
  <li>In scripts, you might also see the use of exit /b to specify an exit code for the script.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'erase')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'for')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'for', data: `
      <h1>for</h1>
      <p>The for command in the Windows Command Prompt is used to run a specified command for each file in a set of files. It is commonly used in batch scripts for iterating over files, performing operations on them, and processing data.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The for command is used for looping through files or sets of files.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
for %variable in (set) do command [command-parameters]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
%variable: A single character to replace the variable in the command.
(set): A set of one or more files, separated by spaces, commas, or semicolons.
do command: The command to be executed for each file in the set.
[command-parameters]: Additional parameters to be passed to the command.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
for %f in (*.txt) do type "%f"

This example prints the content of each .txt file in the current directory.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The for command is versatile and supports various options for file iteration, including wildcards and different file selection criteria.</li>
  <li>It can also be used for looping through a range of numbers or executing commands based on the output of other commands.</li>
  <li>When used in a batch script, double percent signs (%%) are used for variables, but when used directly in the Command Prompt, a single percent sign (%) is used.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use the for /? command in the Command Prompt to see the help information. The for command is a powerful tool for automating tasks involving files and data processing in a Windows environment.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'exit')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'goto')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'goto', data: `
      <h1>goto</h1>
      <p>The goto command in the Windows Command Prompt is used for transferring control to a specific label within a batch script. It allows you to create loops and conditional branching in batch files.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The goto command is used to jump to a specified label in a batch script.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
goto label

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
label: Specifies the location in the script where control should be transferred.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
@echo off
echo This is the beginning of the script.
goto myLabel
echo This line will be skipped.

:myLabel
echo This is after the goto command.

In this example, the script jumps to the label :myLabel after the goto myLabel command is encountered.
</pre></div>
          <div class="data-box"><pre class="wrap">
@echo off
set count=1

:loop
echo Iteration %count%
set /A count+=1

if %count% leq 5 (
  goto loop
)

In this example, the script uses goto to create a loop that iterates five times. The label :loop marks the beginning of the loop, and the script jumps back to the label until the condition is no longer met.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Labels in batch scripts are defined using a colon (:) followed by the label name.</li>
  <li>The goto command is often used to create loops and conditional branching in batch scripts.</li>
  <li>It's important to use goto carefully, as improper use can lead to infinite loops or unexpected behavior.</li>
  <li>In modern scripting, particularly with PowerShell, more structured control flow constructs are often used, but goto remains a valid option in traditional batch scripting.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'for')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'help')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'help', data: `
      <h1>help</h1>
      <p>The help command in the Windows Command Prompt is used to display information about available commands and how to use them. It provides a list of commands along with brief descriptions.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The help command is used to display information about available commands.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
help [command]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[command]: Specifies the command for which you want to see help information. If no command is specified, a general list of commands is displayed.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
help copy

This example displays help information for the copy command.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The help command is a useful tool for learning about various commands available in the Command Prompt.</li>
  <li>You can use it without specifying a command to get a list of available commands, or you can provide the name of a specific command to see detailed information about that command.</li>
  <li>It provides a brief description and syntax for each command, along with available options.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'goto')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'if')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'if', data: `
      <h1>if</h1>
      <p>The if command in the Windows Command Prompt is used for conditional branching in batch scripts. It allows you to execute different commands based on whether a certain condition is true or false.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The if command is used for conditional execution of commands in batch scripts.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
if [not] condition command

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[not]: Optional. If present, negates the condition.
condition: Specifies a condition to be tested.
command: Specifies the command to be executed if the condition is true.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
@echo off
set /p userInput=Enter a number: 
if %userInput% gtr 10 (
  echo The number is greater than 10.
) else (
  echo The number is 10 or less.
)

This example prompts the user to enter a number, and then it checks if the entered number is greater than 10.
</pre></div>
          <div class="data-box"><pre class="wrap">
Here is an example of a more complex if statement checking both the value of a variable and the existence of a file:

@echo off
set /p userInput=Enter a number: 
if %userInput% gtr 10 (
  echo The number is greater than 10.
  if exist "example.txt" (
      echo The file example.txt exists.
  ) else (
      echo The file example.txt does not exist.
  )
) else (
  echo The number is 10 or less.
)

In this example, the script checks if the entered number is greater than 10 and also checks if the file "example.txt" exists. The actions are performed based on the combined conditions.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The if command supports various comparison operators such as equ (equal), neq (not equal), lss (less than), leq (less than or equal), gtr (greater than), and geq (greater than or equal).</li>
  <li>Conditions can also be based on string comparisons, file existence, and other tests.</li>
  <li>if statements can be used in combination with other commands to create more complex logic in batch scripts.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'help')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'loadhigh')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'loadhigh', data: `
      <h1>loadhigh</h1>
      <p>The loadhigh command, similar to the loadfix command, was used in MS-DOS and early versions of Windows to load a program into upper memory. This helped free up conventional memory, which was limited to 640 KB, for other applications. The upper memory area (UMA) or high memory area (HMA) referred to memory locations above the conventional 640 KB boundary.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The loadhigh command is used to load a program into upper memory, allowing it to run in the upper memory area.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
loadhigh [program] [parameters]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
program: Specifies the program to be loaded into upper memory.
parameters: Specifies any parameters that should be passed to the program.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
loadhigh myprogram.exe

This example loads the program "myprogram.exe" into upper memory.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Conventional memory in MS-DOS and early Windows versions was limited to 640 KB, and loading programs into upper memory allowed for more efficient use of available memory.</li>
  <li>The loadhigh command was commonly used to optimize memory usage and avoid memory limitations when running larger applications.</li>
  <li>As operating systems evolved, especially with the transition to 32-bit and 64-bit architectures, memory management became more sophisticated, and direct management of upper memory became less necessary.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that the use of loadhigh is specific to MS-DOS and early Windows versions and may not be applicable or necessary in modern Windows operating systems. If you are dealing with compatibility issues for older programs, consider using compatibility modes or other compatibility tools provided by the operating system.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'if')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'lock')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'lock', data: `
      <h1>lock</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">If you are looking for a way to lock your computer or user session from the Command Prompt, you can use the rundll32.exe command to call the LockWorkStation function from the user32.dll library. This will initiate the locking of your computer.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
rundll32.exe user32.dll,LockWorkStation

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
When you run this command, it will lock your Windows session, requiring you to enter your password or use another authentication method to unlock it.
</pre>
</div>
</div>

      <div class="section">
<h2>Note</h2>
<div class="data-box">
  Please note that you might need administrative privileges to run this command successfully.
</div>
</div>

      <div class="section">
<div class="data-box">
Keep in mind that the availability and behavior of commands can vary based on the Windows version, and some commands may require administrative privileges to execute.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'loadhigh')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'md')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'md', data: `
      <h1>md</h1>
      <p>The md command in the Windows Command Prompt is used to create a new directory or folder. The command stands for "make directory."</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The md command is used to create a new directory or folder in the specified path.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
md [drive:][path]dirname

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path]: Specifies the drive and path where the new directory should be created. If not specified, the directory is created in the current working directory.
dirname: Specifies the name of the new directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
md C:\NewFolder

This example creates a new directory named "NewFolder" in the root of the C: drive.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The md command is synonymous with the mkdir command; both can be used interchangeably to create directories.</li>
  <li>If the specified path does not exist, the md command will attempt to create all necessary directories in the specified path.</li>
  <li>If the specified directory already exists, the command will complete successfully without making any changes.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'lock')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'mkdir')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'mkdir', data: `
      <h1>mkdir</h1>
      <p>The mkdir command in the Windows Command Prompt is used to create a new directory or folder. The command stands for "make directory."</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The mkdir command is used to create a new directory or folder in the specified path.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
mkdir [drive:][path]dirname

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path]: Specifies the drive and path where the new directory should be created. If not specified, the directory is created in the current working directory.
dirname: Specifies the name of the new directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
mkdir C:\\NewFolder

This example creates a new directory named "NewFolder" in the root of the C: drive.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The mkdir command is synonymous with the md command; both can be used interchangeably to create directories.</li>
  <li>If the specified path does not exist, the mkdir command will attempt to create all necessary directories in the specified path.</li>
  <li>If the specified directory already exists, the command will complete successfully without making any changes.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'md')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'mklink')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'mklink', data: `
      <h1>mklink</h1>
      <p>The mklink command in the Windows Command Prompt is used to create symbolic links or hard links between files or directories. Symbolic links are references to a file or directory, and hard links are additional file system entries that refer to the same file content.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The mklink command is used to create symbolic links or hard links.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
mklink [/d] link target

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/d: Creates a directory symbolic link. By default, it creates a file symbolic link.
link: Specifies the name of the symbolic link to be created.
target: Specifies the path (relative or absolute) to the target file or directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Creating a symbolic link to a file:

  mklink C:\\LinkToFile.txt C:\\OriginalFile.txt

2. Creating a symbolic link to a directory:

  mklink /d C:\\LinkToDirectory C:\\OriginalDirectory
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Symbolic links provide a way to reference a file or directory by a different name or location.</li>
  <li>Symbolic links can be used for various purposes, such as creating shortcuts or organizing files in a more convenient structure.</li>
  <li>Hard links allow multiple file system entries to point to the same file content. Changes to one entry affect all entries pointing to the same content.</li>
  <li>Administrative privileges are typically required to create symbolic links.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Use the mklink /? command to view the help information and options associated with the mklink command.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'mkdir')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'move')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'move', data: `
      <h1>move</h1>
      <p>The move command in the Windows Command Prompt is used to move files or directories from one location to another. It is also used to rename files or directories.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The move command is used to move files or directories from one location to another or to rename files or directories.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
move [/Y | /-Y] [drive:][path]filename1[,...] destination

move [/Y | /-Y] [drive:][path]filename1[,...] destination\\

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/Y: Suppresses confirmation prompts, assuming Yes as the answer to all prompts.
/-Y: Prompts to confirm file overwrites.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Move a file to another directory:
  move C:\\Source\\File.txt D:\\Destination\\

2. Rename a file:
  move C:\\OldName.txt C:\\NewName.txt

3. Move multiple files to another directory:
  move *.txt D:\\Destination\\
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The move command can be used for both moving and renaming operations.</li>
  <li>If the destination is an existing directory, the source files or directories are moved into that directory.</li>
  <li>If the destination is a new filename, the source file is renamed to that filename.</li>
  <li>The /Y and /-Y options are used to control whether confirmation prompts are displayed for overwriting existing files.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'mklink')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'path')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'path', data: `
      <h1>path</h1>
      <p>The path command in the Windows Command Prompt is used to display or set the command search path for executable files. The command search path is a list of directories where the system looks for executable files when you enter a command without specifying its full path.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The path command is used to display or set the command search path.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
path [directory1;directory2;...]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
If used without any arguments, it displays the current command search path.
If used with directories, it sets the command search path to the specified directories.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display the current command search path:
  path

2. Set the command search path to include additional directories:
  path C:\\Program Files\\MyApp;%PATH%

  This example adds "C:\\Program Files\\MyApp" to the command search path.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The command search path is a list of directories separated by semicolons (;), and the system searches for executable files in these directories in the order they appear in the path.</li>
  <li>When you enter a command, the system looks for the corresponding executable file in each directory in the path until it finds the executable or exhausts the search path.</li>
  <li>Modifying the path can be useful when you want to include directories containing executable files that you want to be accessible from any location in the command prompt.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'move')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'pause')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'pause', data: `
      <h1>pause</h1>
      <p>The pause command in the Windows Command Prompt is used to make the Command Prompt wait for user input before proceeding with the execution of a batch file. When the pause command is encountered in a batch script, it displays the message "Press any key to continue..." and waits for the user to press a key.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The pause command is used to insert a pause or wait for user input in a batch script.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
pause 

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
When this command is encountered in a batch script, it prompts the user to press any key.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
@echo off
echo This is a batch script.
pause
echo Script continued after pause.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The pause command is often used in batch scripts to pause the execution of the script, allowing the user to review information or confirm an action before proceeding.</li>
  <li>It is commonly used with the @echo off command to prevent echoing of the commands to the console.</li>
  <li>Once the user presses any key, the script continues with the next command.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
The pause command is a simple but useful tool for batch script development, especially when user interaction or confirmation is needed.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'path')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'popd')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'popd', data: `
      <h1>popd</h1>
      <p>The popd command in the Windows Command Prompt is used to change the current directory to the one most recently stored by the pushd command. It is part of a pair of commands (pushd and popd) that allows you to navigate between directories more easily.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The popd command is used to change the current directory to the one most recently stored by the pushd command.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
popd

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
When this command is executed, it removes the top directory from the stack (the one most recently pushed by pushd) and sets the current directory to that location.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
pushd C:\\Example
popd

In this example, pushd is used to change the current directory to C:\\Example, and then popd is used to return to the directory that was active before the pushd command was executed.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The pushd and popd commands are often used together to simplify directory navigation in batch scripts.</li>
  <li>The pushd command saves the current directory to a stack and changes to a new directory, while popd retrieves the directory from the top of the stack, making it the current directory.</li>
  <li>This is useful for scenarios where you need to temporarily change directories and then return to the original directory.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'pause')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'prompt')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'prompt', data: `
      <h1>prompt</h1>
      <p>The prompt command in the Windows Command Prompt is used to customize the appearance of the command prompt prompt. The prompt is the text that appears before the cursor in the Command Prompt window, indicating that the system is ready to accept a command.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The prompt command allows you to customize the appearance of the command prompt.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
prompt [text]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[text]: Specifies the text to be displayed as the prompt. You can include special codes to display information such as the current directory or time.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
Set a custom prompt:
  prompt $p$g

  This sets the prompt to display the current drive and folder followed by the greater-than symbol.

Restore the default prompt:
  prompt

  This resets the prompt to the default, typically displaying the current path.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The prompt command allows you to create a more informative or visually distinctive command prompt.</li>
  <li class="wrap">You can include special codes in the prompt, such as:
  $p: Current drive and path.
  $g: Greater-than sign (>). This is often used as the command prompt symbol.
  $t: Current time.
  $d: Current date.
  ... and others.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For a complete list of prompt codes, you can use prompt /? in the Command Prompt. Customizing the prompt can be useful for providing additional information or personalizing the command prompt environment.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'popd')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'pushd')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'pushd', data: `
      <h1>pushd</h1>
      <p>The pushd command in the Windows Command Prompt is used to change the current directory and also stores the current directory on a stack so that it can be returned to later using the popd command.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The pushd command is used to change the current directory and save the current directory onto a stack.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
pushd [path]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[path]: Specifies the directory to change to. If no path is provided, it changes to the current user's home directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
Change to a specific directory and store the current directory on the stack:
  pushd C:\Example

Change to the user's home directory and store the current directory on the stack:
  pushd %HOMEPATH%
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The pushd command not only changes the current directory but also stores the current directory on a stack, allowing you to return to it later using popd.</li>
  <li>After using pushd, you can use popd to return to the directory that was on top of the stack.</li>
  <li>This can be useful for navigating between directories, especially in batch scripts or command prompt sessions.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'prompt')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'rd')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'rd', data: `
      <h1>rd</h1>
      <p>The rd command in the Windows Command Prompt is used to remove or delete a directory (folder). It stands for "remove directory."</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The rd command is used to delete a directory from the file system.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
rd /s /q directory_path

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/s: Removes all directories and files in the specified directory in addition to the directory itself.
/q: Enables quiet mode. You won't be prompted for confirmation when deleting a directory and its contents.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
Delete an empty directory:
  rd C:\\Example

Delete a directory and its contents:
  rd /s /q C:\\Example
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Be cautious when using the /s and /q options, especially with wildcards, as it can result in the deletion of multiple directories and files without confirmation.</li>
  <li>The rmdir command is an alternative to rd and has the same functionality.</li>
  <li>If the directory is not empty and you use rd without the /s option, you'll receive an error message.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Always double-check the directory path before using rd, especially with the /s and /q options, to avoid unintentional data loss.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'pushd')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'ren')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'ren', data: `
      <h1>ren</h1>
      <p>The ren command in the Windows Command Prompt is used to rename files or directories (folders). It stands for "rename."</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The ren command is used to rename a file or directory.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
ren [old_name] [new_name]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[old_name]: Specifies the current name of the file or directory.
[new_name]: Specifies the new name for the file or directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Rename a file:
  ren oldfile.txt newfile.txt

2. Rename a directory:
  ren oldfolder newfolder
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The ren command can be used to change the name of a file or directory in the same location.</li>
  <li>It's important to provide the full or relative path to the file or directory you want to rename.</li>
  <li>The ren command does not support wildcard characters (* or ?) for batch renaming multiple files. For that purpose, you might need to use a for loop or other methods.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'rd')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'rename')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'rename', data: `
      <h1>rename</h1>
      <p>The rename command in the Windows Command Prompt is used to rename files or directories. It's an alternative to the ren command, and both can be used interchangeably for renaming.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The rename command, like ren, is used to rename files or directories.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
rename [old_name] [new_name]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[old_name]: Specifies the current name of the file or directory.
[new_name]: Specifies the new name for the file or directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Rename a file:
  rename oldfile.txt newfile.txt

2. Rename a directory:
  rename oldfolder newfolder
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The rename command is functionally equivalent to the ren command. You can use either of them based on personal preference.</li>
  <li>As with ren, it's important to provide the full or relative path to the file or directory you want to rename.</li>
  <li>The rename command does not support wildcard characters (* or ?) for batch renaming multiple files. For that purpose, you might need to use a for loop or other methods.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'ren')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'rmdir')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'rmdir', data: `
      <h1>rmdir</h1>
      <p>The rmdir command in the Windows Command Prompt is used to remove or delete a directory (folder). It's similar to the rd command, and both commands serve the same purpose of deleting directories.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The rmdir command is used to delete a directory from the file system.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
rmdir /s /q directory_path

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/s: Removes all directories and files in the specified directory in addition to the directory itself.
/q: Enables quiet mode. You won't be prompted for confirmation when deleting a directory and its contents.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Delete an empty directory:
  rmdir C:\\Example

2. Delete a directory and its contents:
  rmdir /s /q C:\\Example
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The rmdir command is functionally equivalent to the rd command. Both commands are used to remove directories.</li>
  <li>Be cautious when using the /s and /q options, especially with wildcards, as it can result in the deletion of multiple directories and files without confirmation.</li>
  <li>If the directory is not empty and you use rmdir without the /s option, you'll receive an error message.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Always double-check the directory path before using rmdir, especially with the /s and /q options, to avoid unintentional data loss.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'rename')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'set')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'set', data: `
      <h1>set</h1>
      <p>The set command in the Windows Command Prompt is used to display, set, or modify environment variables. Environment variables are dynamic values that can affect the behavior of processes and programs running on a computer.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The set command is primarily used for managing environment variables.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
set [variable=value]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
If used without arguments, it displays the current environment variables.
If used with the variable=value syntax, it sets the value of the specified environment variable.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display all environment variables:
  set

2. Set the value of a specific environment variable:
  set MY_VARIABLE=123
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Environment variables store information such as system paths, user preferences, and configuration settings.</li>
  <li>Changes made with set are temporary and only affect the current Command Prompt session.</li>
  <li>To make permanent changes to environment variables, you may use the System Properties dialog or the setx command.</li>
  <li>Environment variables are often referenced by scripts and programs to access system-wide or user-specific settings.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use set /? in the Command Prompt. 
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'rmdir')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'setlocal')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'setlocal', data: `
      <h1>setlocal</h1>
      <p>The setlocal command in the Windows Command Prompt is used to start a local scope for environment variables. When you use setlocal, any changes made to the environment variables are local to the current script or batch file and do not affect the global environment. The changes are reversed when the endlocal command is encountered or when the script or batch file ends.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The setlocal command is used to initiate a local environment scope.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
setlocal [EnableDelayedExpansion]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
EnableDelayedExpansion: When specified, enables delayed environment variable expansion.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
Start a local scope:
  @echo off
  setlocal

Start a local scope with delayed expansion enabled:
  @echo off
  setlocal EnableDelayedExpansion
</pre></div>
          <div class="data-box"><pre class="wrap">
Here's a simple example of a batch script that uses setlocal and endlocal:
@echo off
setlocal

rem Set a local variable
set LOCAL_VAR=123

rem Display the local variable
echo Local Variable: %LOCAL_VAR%

endlocal

rem The local variable is no longer accessible
echo Local Variable outside of local scope: %LOCAL_VAR%

In the example above, %LOCAL_VAR% is only accessible within the local scope created by setlocal. Once endlocal is encountered, the variable is no longer accessible.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The setlocal command is often used in batch scripts to create a local environment scope, allowing changes to environment variables that won't affect the rest of the system.</li>
  <li>When the script or batch file ends or encounters the endlocal command, the changes made within the local scope are reverted, and the environment is restored to its previous state.</li>
  <li>Delayed expansion can be useful when working with variables in loops or conditional statements within batch scripts.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'set')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'shift')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'shift', data: `
      <h1>shift</h1>
      <p>The shift command in the Windows Command Prompt is used to shift the position of parameters in a batch script or a batch file. It is particularly useful when dealing with command-line arguments or parameters passed to a script or function.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The shift command is used to shift the position of command-line parameters in a script, effectively discarding the value of the first parameter and moving the remaining parameters one position to the left.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
shift

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
The shift command is used without any arguments.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
@echo off
echo First Parameter: %1
echo Second Parameter: %2
shift
echo After Shift:
echo First Parameter: %1
echo Second Parameter: %2
</pre></div>
          <div class="data-box"><pre class="wrap">
Here's a simple example of how shift can be used in a batch script:
@echo off
:process_params
if "%1"=="" goto :end
echo Processing Parameter: %1
shift
goto :process_params
:end
echo End of Parameter Processing

In this example, the script processes each parameter until there are no more parameters left, and the :end label is reached. The shift command is used to move through the parameters one at a time.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The shift command is commonly used in batch scripts where command-line parameters need to be processed in a loop.</li>
  <li>After executing shift, the value of %1 is discarded, and the value of %2 becomes the new %1, %3 becomes the new %2, and so on.</li>
  <li>This allows scripts to iterate through a variable number of parameters without knowing the exact count in advance.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'setlocal')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'start')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'start', data: `
      <h1>start</h1>
      <p>The start command in the Windows Command Prompt is used to open a new Command Prompt window or launch a new process or program. It allows you to start a new application or command in a separate window or, optionally, with specific settings.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The start command is used to launch a new process, application, or command.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
start ["title"] [/D path] [/I] [/MIN] [/MAX] [/SEPARATE | /SHARED] [/LOW | /NORMAL | /HIGH | /REALTIME | /ABOVENORMAL | /BELOWNORMAL] [/WAIT] [/B] [command/program] [parameters]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
"title": Specifies the title for the new Command Prompt window.
/D path: Specifies the startup directory for the new process.
/I: Starts the new process in a new window.
/MIN: Minimizes the new window.
/MAX: Maximizes the new window.
/SEPARATE or /SHARED: Specifies whether the environment is separate or shared.
/LOW, /NORMAL, /HIGH, /REALTIME, /ABOVENORMAL, /BELOWNORMAL: Specifies the priority class of the new process.
/WAIT: Causes the Command Prompt to wait for the process to complete before continuing.
/B: Starts the new process without creating a new window.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Open a new Command Prompt window:
  start

2. Open Notepad in a new window:
  start notepad

3. Open a new Command Prompt window with a specific title:
  start "My Custom Title"
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The start command is versatile and can be used to launch various types of processes, applications, or commands.</li>
  <li>It is commonly used in batch scripts to initiate parallel processes or open new windows for different tasks.</li>
  <li>The /WAIT option is useful when you want the Command Prompt to wait for the new process to finish before continuing with the script.</li>
  <li>The /B option is used to start the process without creating a new window. This can be handy for running background tasks.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use start /? in the Command Prompt. The start command is a useful tool for managing and automating processes from the command line.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'shift')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'switches')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'switches', data: `
      <h1>switches</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">In Command Prompt (cmd), switches are options that modify the behavior of a command. They are typically represented by a single letter preceded by a forward slash (/). For instance, the dir command can be used to list the contents of a directory. By adding switches to the dir command, you can control how the directory listing is displayed.</div>
      </div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
dir /w

In this example, the /w switch tells the dir command to display the directory listing in a wide format, so that file names and extensions are aligned in columns.
</pre></div>
      </div>

      <div class="section">
          <h2>Some Common Switches</h2>
          <div class="data-box"><pre class="wrap">
/? or /help: Displays help information for the command.

/q: Suppresses the display of non-essential information.

/v: Provides verbose output, displaying additional details about the command's operation.

/o: Specifies the output format. For example, /o:NUL redirects output to the null device, effectively silencing the command.

/i or /case-insensitive: Ignores case sensitivity when comparing file names and paths.

/s: Recursively searches subdirectories for files and folders.

/a or /attributes: Displays file attributes, such as read-only or hidden.

/d or /date: Displays file creation or modification dates.

/t or /time: Displays file creation or modification times.
</pre></div>
      </div>

      <div class="section">
<div class="data-box">
Remember that the specific switches available for each command may vary. To see the available switches for a particular command, use the /help or /? switch.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'start')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'time')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'time', data: `
      <h1>time</h1>
      <p>The time command in the Windows Command Prompt is used to display or set the system time of the computer. It allows users to view the current system time and, if necessary, set a new time.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The time command is used to display or set the system time.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
time [/t | /p | /s]
time [hh:mm[:ss] [am | pm]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/t: Displays the current system time without prompting for a new time.
/p: Prompts the user to enter a new time.
/s: Displays the current system time and prompts the user to set a new time.
hh:mm[:ss]: Specifies the new time in hours, minutes, and optional seconds.
[am | pm]: Specifies whether the time is in the morning (am) or afternoon (pm).
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display the current system time:
  time

2. Set a new system time using a 24-hour format:
  time 14:30

3. Set a new system time using a 12-hour format:
  time 2:30 pm
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The time command is often used in scripts or batch files to automate time-related tasks.</li>
  <li>If used without any arguments, it displays the current system time and prompts the user to enter a new time.</li>
  <li>The system time is usually maintained by the operating system and synchronized with an external time source.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use time /? in the Command Prompt. Keep in mind that setting the system time may require administrative privileges.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'switches')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'title')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'title', data: `
      <h1>title</h1>
      <p>The title command in the Windows Command Prompt is used to set the title of the Command Prompt window. It allows you to customize the title of the window to provide information or context about the tasks being performed.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The title command is used to set the title of the Command Prompt window.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
title [string]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
string: Specifies the text to be displayed as the title of the Command Prompt window.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
Set the title of the Command Prompt window to "My Custom Title":
  title My Custom Title
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The title command is often used in batch scripts or command-line sessions to provide a more descriptive title for the Command Prompt window.</li>
  <li>The specified title text will be displayed in the title bar of the Command Prompt window.</li>
  <li>It's useful for differentiating between multiple Command Prompt windows or for providing context about the tasks being performed.</li>
  <li>To clear the title and revert to the default, you can use title with no arguments or provide an empty string as the title.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use title /? in the Command Prompt. The title command is a simple but handy feature for customizing the appearance of the Command Prompt window.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'time')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'type')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'type', data: `
      <h1>type</h1>
      <p>The type command in the Windows Command Prompt is used to display the contents of a text file. It simply outputs the text content of a file to the console.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The type command is used to display the contents of a text file.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
type [drive:][path]filename

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path]filename: Specifies the path and name of the text file whose contents you want to display.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display the contents of a text file:
  type C:\\Example\\sample.txt

2. Display the contents of a text file in the current directory:
  type sample.txt
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The type command is commonly used to quickly view the contents of small text files directly in the Command Prompt.</li>
  <li>It's important to note that type may not be suitable for viewing large files, as it will attempt to display the entire content, potentially overwhelming the console.</li>
  <li>If you need to view or manipulate larger files, you may want to consider using other commands or text editors better suited for such tasks.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use type /? in the Command Prompt.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'title')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'ver')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'ver', data: `
      <h1>ver</h1>
      <p>The ver command in the Windows Command Prompt is used to display the version number of the operating system. It provides information about the Windows version that is currently running.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The ver command is used to display the version number of the operating system.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
ver

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
ver
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Running the ver command will display a line indicating the Windows version and build number. For example, it might display something like "Microsoft Windows [Version 10.0.19042]."</li>
  <li>The version number includes information about the major version, minor version, build number, and other details.</li>
  <li>It is a quick way to check the Windows version from the Command Prompt.</li>
</div>
</div>

      <div class="section">
<div class="data-box wrap">
For more detailed version information, you can also use the systeminfo command in the Command Prompt.

systeminfo

This command provides extensive information about the operating system, including the version, build, and installation date.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'type')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'verify')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'verify', data: `
      <h1>verify</h1>
      <p>The verify command in the Windows Command Prompt is used to determine whether Command Prompt will verify that files are written correctly to a disk. The verify command is primarily used for legacy purposes, and its relevance has diminished over time.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The verify command is used to enable or disable the verification of files written to a disk.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
verify [on | off]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
on: Enables file verification.
off: Disables file verification.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Enable file verification:
  verify on

2. Disable file verification:
  verify off
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>When file verification is enabled (verify on), the Command Prompt will check that files are written correctly to a disk. If verification is disabled (verify off), no such checking is performed.</li>
  <li>File verification was more relevant in the earlier days of computing when writing data to floppy disks or other storage media was more error-prone.</li>
  <li>In modern computing environments, especially with more reliable storage media, the need for file verification is reduced, and the verify command is less commonly used.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that in many contemporary Windows systems, file verification is typically handled by the file system and storage devices, making the use of the verify command less necessary for everyday tasks.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'ver')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'vol')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'vol', data: `
      <h1>vol</h1>
      <p>The vol command in the Windows Command Prompt is used to display the volume label and serial number of a specified disk.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The vol command is used to display information about the volume label and serial number of a specified disk.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
vol [drive:]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
drive:: Specifies the drive letter of the disk for which you want to display volume information.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display volume information for drive C:
  vol C:

2. Display volume information for the current drive:
  vol
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The vol command is useful for quickly checking the volume label and serial number of a disk.</li>
  <li>The volume label is a user-defined name assigned to the disk when it is formatted.</li>
  <li>The serial number is a unique identifier assigned to the disk during the formatting process.</li>
  <li>If used without specifying a drive letter, the vol command displays information for the current drive.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use vol /? in the Command Prompt. The vol command provides a simple way to obtain basic information about a disk's volume.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'verify')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'External Commands')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'External Commands', data: `
      <h1>External Commands</h1>

      <div class="section">
          <div class="data-box">
            <h3>External commands are not built into cmd.exe but are separate executable files stored in system directories (e.g., C:\Windows\System32). These commands require a separate file to execute.</h3>         
          </div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'vol')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'append')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'append', data: `
      <h1>append</h1>
      <p>The "append" command in the context of the command prompt in Windows is not a standalone command. However, if you're referring to the ">>" operator, it is used for appending output to a file.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The ">>" operator is used to append the output of a command to the end of a file without overwriting the existing content.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
command >> filename

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
echo "This is a new line" >> example.txt

This example appends the text "This is a new line" to the file named "example.txt". If the file doesn't exist, it will be created. If it exists, the text will be added to the end of the file.
</pre></div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'External Commands')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'arp')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'arp', data: `
      <h1>arp</h1>
      <p>The arp command in the command prompt is used to display and manage the Address Resolution Protocol (ARP) cache, which is a table that maps IP addresses to physical (MAC) addresses on a local network.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The arp command is used for viewing and manipulating the ARP cache.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
arp [-a] [-g] [-d] [-n [inet_addr]] [-s [inet_addr eth_addr]] [-d [inet_addr]] [-?]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
-a: Displays the ARP table.
-g: Same as -a.
-d: Deletes an entry specified by the inet_addr.
-n: Displays numerical addresses instead of resolving names.
-s: Adds a static ARP entry.
-?: Displays help information.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
1. Display ARP table:
  arp -a

2. Add a static ARP entry:
  arp -s 192.168.1.1 00-11-22-33-44-55

3. Delete an ARP entry:
  arp -d 192.168.1.1
</pre></div>
      </div>

      <div class="section">
<div class="data-box">
These examples assume a local network and provide basic usage of the arp command. Adjust the IP addresses and MAC addresses according to your network configuration.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'append')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'at')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'at', data: `
      <h1>at</h1>
      <p>The at command in the Windows command prompt is used to schedule commands and programs to run at a specified date and time.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The at command allows you to schedule tasks to run in the background at a specified time.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
at [\\\\computername] [ [id] [/delete] | /delete /yes]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
\\\\computername: Specifies a remote computer. If this parameter is omitted, the tasks on the local computer are displayed.
[id]: Specifies the identification number assigned to a scheduled task.
/delete: Cancels a scheduled task.
/yes: Used with /delete to delete all scheduled tasks on the computer.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
at 15:30 /every:M,T,W,Th,F "notepad.exe"

This example schedules the Notepad application (notepad.exe) to run every weekday at 3:30 PM.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The at command allows you to schedule a command or program to run once at a specific time or repeatedly on specific days of the week.</li>
  <li>The scheduled tasks created with at are managed by the Task Scheduler service.</li>
  <li>You need to have the "Task Scheduler" service running to use the at command.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'arp')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'attrib')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'attrib', data: `
      <h1>attrib</h1>
      <p>The attrib command in the Windows command prompt is used to display or change the attributes of a file or directory.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The attrib command is used to display or change the attributes of a file or directory. File attributes include read-only, archive, system, and hidden attributes.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
attrib [+R | -R] [+A | -A] [+S | -S] [+H | -H] [drive:][path][filename] [/S [/D]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
+R / -R: Sets or clears the read-only attribute.
+A / -A: Sets or clears the archive attribute.
+S / -S: Sets or clears the system attribute.
+H / -H: Sets or clears the hidden attribute.
[drive:][path][filename]: Specifies the file or directory.
/S: Applies attrib and any command-line options to matching files in the current directory and all of its subdirectories.
/D: Applies attrib and any command-line options to directories as well.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
attrib +R -S C:\example.txt

This example sets the read-only attribute and clears the system attribute for the file "example.txt" located at "C:".
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Use caution when modifying file attributes, especially the system and read-only attributes, as it can affect how the operating system handles files.</li>
  <li>The /S and /D options are used for applying attrib changes recursively to files in subdirectories.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'at')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'cacls')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'cacls', data: `
      <h1>cacls</h1>
      <p>The cacls command in Windows is used to display or modify access control lists (ACLs) for files and directories. ACLs determine the permissions that users and groups have on a particular object.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The cacls command is used to view or modify the ACLs for files and directories.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
cacls FileName [/T] [/E] [/C] [/G user:perm] [/R user [...]] [/P user:perm [...]] [/D user [...]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
FileName: Specifies the file or directory for which you want to display or modify the ACL.
/T: Processes matching files in the current directory and all of its subdirectories.
/E: Edits the ACL instead of replacing it.
/C: Continues to process even if errors occur.
/G user:perm: Grants specified permissions to the specified user.
/R user: Removes the specified user's access rights.
/P user:perm: Replaces the user's access rights with those specified.
/D user: Denies the specified user access to the file or directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
cacls C:\Example /E /G John:F

This example edits the ACL of the "C:\Example" directory, granting the user "John" full control (F).
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The cacls command has been deprecated in more recent versions of Windows, and the icacls command is recommended for more advanced functionality.</li>
  <li>icacls provides more features and flexibility compared to cacls and is available on Windows Vista and later versions.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Always exercise caution when modifying ACLs, as incorrect settings can lead to unintended security issues or loss of access to files and directories.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'attrib')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'chkdsk')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'chkdsk', data: `
      <h1>chkdsk</h1>
      <p>The chkdsk command in the Windows command prompt is used to check a disk for errors, and if possible, it will attempt to fix any issues it finds. The name "chkdsk" stands for "check disk."</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The chkdsk command is used to check a disk for errors, such as bad sectors, file system corruption, and other issues. It can also attempt to repair some of the problems it finds.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
chkdsk [volume:][/F] [/V] [/R] [/X] [/I] [/C]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[volume:]: Specifies the drive letter (followed by a colon) or the mount point of the volume to check.
/F: Fixes errors on the disk. The drive must be locked (unmounted) to run this option.
/V: Displays the name of each file in every directory as the disk is checked.
/R: Locates bad sectors and recovers readable information (implies /F).
/X: Forces the volume to dismount first if necessary. All opened handles to the volume would then be invalid.
/I: Performs a less rigorous check of index entries (useful for faster checking).
/C: Skips the checking of cycles within the folder structure.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
chkdsk C: /F /R

This example checks and fixes errors on the C: drive, and it also locates bad sectors and recovers readable information.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Running chkdsk without any options will display the current status of the disk but won't fix any errors.</li>
  <li>It is recommended to run chkdsk when the disk is not in use, as fixing certain types of errors may require the disk to be unmounted.</li>
  <li>In some cases, running chkdsk may prompt you to schedule the disk check during the next system reboot.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Using chkdsk is a good practice for maintaining the health of your file system and identifying potential issues with your disk. It's often used for troubleshooting disk-related problems.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'cacls')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'chkntfs')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'chkntfs', data: `
      <h1>chkntfs</h1>
      <p>The chkntfs command in the Windows command prompt is used to display or modify the checking of the disk drive during the system startup process. It is primarily associated with the NTFS file system.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The chkntfs command is used to display or modify the automatic disk checking of the NTFS file system during system startup.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
chkntfs [/D] [/T[:time]] [/X[:time]] [/C] [/L[:size]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/D: Restores the machine to the default behavior of checking both specified drives on the machine and any removable media drives.
/T[:time]: Specifies the wait time before the disk check starts. If time is not specified, the default is 10 seconds.
/X[:time]: Forces a dismount of the volume if the dirty bit is set. If time is not specified, the default is 60 seconds.
/C: Skips the checking of cycles within the folder structure.
/L[:size]: Performs a less rigorous check of index entries (useful for faster checking). If size is specified, it sets the log file size.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
chkntfs C: /X:5

This example sets the wait time to 5 seconds before starting the disk check and forces a dismount of the C: drive if the dirty bit is set.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The /D option restores the default behavior, which is to check both specified drives on the machine and any removable media drives during system startup.</li>
  <li>The /X option is often used to shorten the time the system spends on automatic disk checking during startup.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
chkntfs is typically used for managing the automatic disk checking behavior on NTFS volumes. It can be useful for configuring the system to skip or customize the disk checking process during startup.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'chkdsk')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'cmd')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'cmd', data: `
      <h1>cmd</h1>
      <p>The cmd command in Windows is used to start a new instance of the Windows command prompt. When executed, it opens a new command prompt window, allowing you to enter and execute commands.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The cmd command is used to launch a new instance of the Windows command prompt.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
cmd

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
cmd

Running this command opens a new command prompt window.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>When you run cmd, it opens a new command prompt window with a fresh environment.</li>
  <li>This command is often used when you want to open a new command prompt window, especially if you are running commands from within an existing command prompt.</li>
  <li>The cmd command also has various options and switches that can be used for customization, such as specifying startup parameters.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Using the cmd command is a quick way to open a new command prompt instance, and it is frequently used by users who work with the command line in Windows.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'chkntfs')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'comp')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'comp', data: `
      <h1>comp</h1>
      <p>The comp command in the Windows Command Prompt is used to compare the contents of two files or sets of files.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The comp command is used to compare the contents of two files or sets of files and displays the differences between them.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
comp [data1] [data2] [/D] [/A] [/L] [/N=number] [/C] [/OFF[LINE]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[data1] and [data2]: Specifies the location and name of the files to be compared.
/D: Displays differences in decimal format.
/A: Displays differences in ASCII characters.
/L: Displays the line numbers for differences.
/N=number: Compares the first specified number of lines of each file.
/C: Disregards case (compares in case-insensitive mode).
/OFF[LINE]: Do not display the first few lines of the files before comparing.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
comp file1.txt file2.txt

This example compares the contents of "file1.txt" and "file2.txt" and displays the differences.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The comp command is useful for quickly identifying differences between two text files.</li>
  <li>It shows the location and values of the first few differences it encounters.</li>
  <li>This command is suitable for comparing small to moderately sized text files. For larger files or more advanced comparison needs, specialized tools might be preferred.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Remember that comp is primarily designed for text file comparison. If you need to compare binary files or require more advanced comparison features, you might want to consider using other tools or commands.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'cmd')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'compact')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'compact', data: `
      <h1>compact</h1>
      <p>The compact command in the Windows Command Prompt is used to display or change the compression state of files or directories on an NTFS file system. It is used to compress or uncompress files and directories to save disk space.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The compact command is used to display or change the compression state of files or directories.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
compact [/C | /U] [/S[:dir]] [/A] [/I] [/F] [/Q] [filename [...]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/C: Compresses the specified files.
/U: Uncompresses the specified files.
/S[:dir]: Performs the operation on files in the specified directory and its subdirectories. If dir is not specified, the current directory is used.
/A: Displays files with the hidden or system attributes. By default, these files are not displayed.
/I: Ignores errors.
/F: Forces the compression or uncompression of files.
/Q: Reports only the most essential information.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
compact /C /S:C:\Example

This example compresses all files in the "C:\Example" directory and its subdirectories.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Compression is available on NTFS file systems, and compressed files are indicated by blue text in the Command Prompt.</li>
  <li>Compressing files can save disk space but might result in slower access times for compressed files.</li>
  <li>The /F option is often used to forcefully compress files, especially those that are marked as read-only.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Using the compact command is one way to manage file and directory compression on Windows systems. Always be cautious when compressing system files or files that are actively in use.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'comp')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'control')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'control', data: `
      <h1>control</h1>
      <p>The control command in the Windows Command Prompt is used to open the Control Panel or specific Control Panel items. It provides a convenient way to access various settings and configuration options in the Windows operating system.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The control command is used to open the Control Panel or specific Control Panel items.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
control [name]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[name]: Specifies the name of the Control Panel item to open. If not specified, the main Control Panel window is opened.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
control

This example opens the main Control Panel window.

control nusrmgr.cpl

This example opens the "User Accounts" Control Panel item.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The control command is often used to quickly access various system settings without navigating through the graphical user interface.</li>
  <li>You can use the control command to open specific Control Panel items by providing the appropriate name or identifier.</li>
  <li class="wrap">Some commonly used Control Panel items include:
  nusrmgr.cpl: User Accounts
  mmsys.cpl: Sound
  powercfg.cpl: Power Options
  firewall.cpl: Windows Firewall</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Using the control command provides a quick way to access and manage system settings on a Windows computer.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'compact')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'debug')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'debug', data: `
      <h1>debug</h1>
      <p>The debug command in the Windows Command Prompt is not a typical command for general use and doesn't directly relate to the modern Windows operating systems. However, historically, "Debug" was a command-line debugger utility in MS-DOS and some early Windows versions.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The debug command was used as a simple debugger and assembler in MS-DOS.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
debug

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
After entering the debug command, you would typically provide assembly language instructions or debug commands interactively.
</pre>
</div>
</div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The debug utility allowed users to view and modify the contents of memory, display and alter registers, and assemble simple machine language instructions.</li>
  <li>It was commonly used for low-level programming tasks, such as writing boot sectors or debugging small assembly language programs.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Due to the evolution of operating systems, the debug command is not available or not used in more recent versions of Windows. Modern development and debugging tools have replaced the need for such low-level utilities. If you are looking for debugging tools in a modern environment, you may want to explore integrated development environments (IDEs) or dedicated debugging tools specific to your programming language or platform.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'control')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'defrag')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'defrag', data: `
      <h1>defrag</h1>
      <p>The defrag command in the Windows Command Prompt is used to defragment a disk or a specific set of files on a disk. Disk fragmentation occurs when files are divided into small pieces and scattered across different locations on the disk, leading to slower read and write times. Defragmentation consolidates these pieces, making the files contiguous and improving disk performance.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The defrag command is used to analyze and optimize the fragmentation of files on a disk.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
defrag <volume> [-a] [-v] [-?] [-h] [-o] [-r] [-w] [-x]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
<volume>: Specifies the drive letter or mount point of the volume to defragment.
-a: Analyzes the volume but does not defragment it.
-v: Displays the complete analysis and defragmentation reports.
-? or -h: Displays help information.
-o: Optimizes the layout of files on the volume for the best performance.
-r: Performs partial defragmentation (default).
-w: Performs full defragmentation.
-x: Performs free space consolidation.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
defrag C: -o

This example optimizes the layout of files on the C: drive for better performance.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Disk defragmentation is typically scheduled to run automatically on modern Windows systems. Running the defrag command manually might not be necessary for regular maintenance.</li>
  <li>The command can be used with different options to analyze, optimize, or perform various levels of defragmentation.</li>
  <li>Administrative privileges are often required to defragment a volume.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Keep in mind that starting with Windows 8 and Windows Server 2012, a new defragmentation tool called Optimize Drives (or Optimize) is available, which is more advanced than the traditional defrag command. The Optimize-Volume PowerShell cmdlet also provides additional options for disk optimization.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'debug')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'diskcomp')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'diskcomp', data: `
      <h1>diskcomp</h1>
      <p>The diskcomp command in the Windows Command Prompt is used to compare the contents of two floppy disks or hard drives. It was traditionally used for checking whether two disks are identical.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The diskcomp command is used to compare the contents of two floppy disks or hard drives.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
diskcomp [drive1:][path1] drive2:][path2]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive1:][path1]: Specifies the location of the first disk or directory.
[drive2:][path2]: Specifies the location of the second disk or directory.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
diskcomp A: B:

This example compares the contents of the floppy disks in drive A: and B:.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>diskcomp is not commonly used in modern Windows environments, as floppy disks are no longer the primary means of data storage.</li>
  <li>It was more relevant in the era of floppy disk usage for personal computers.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
While diskcomp may still be available in some versions of Windows for compatibility reasons, it's worth noting that it's not commonly used today. Modern storage and file management practices often rely on more advanced tools and technologies.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'defrag')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'diskcopy')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'diskcopy', data: `
      <h1>diskcopy</h1>
      <p>The diskcopy command in the Windows Command Prompt is used to copy the entire contents of one floppy disk to another. It is a legacy command that was traditionally used when floppy disks were more commonly used as a means of data storage.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The diskcopy command is used to copy the entire contents of one floppy disk to another.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
diskcopy [drive1: [drive2:]] [/v]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive1:]: Specifies the source drive containing the disk to be copied.
[drive2:]: Specifies the destination drive where the contents will be copied.
/v: Verifies that the information was copied correctly.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
diskcopy A: B: /v

This example copies the contents of the floppy disk in drive A: to another floppy disk in drive B: while verifying the information.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Like diskcomp, diskcopy is not commonly used in modern Windows environments.</li>
  <li>It was more relevant in the era of floppy disk usage for personal computers.</li>
  <li>Modern storage and file management practices typically involve more advanced tools and technologies.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
While diskcopy may still be available in some versions of Windows for compatibility reasons, it's important to note that floppy disks are largely obsolete, and modern storage solutions have replaced them.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'diskcomp')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'doskey')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'doskey', data: `
      <h1>doskey</h1>
      <p>The doskey command in the Windows Command Prompt is used to enable or disable the command recall and editing features, as well as to create macros.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The doskey command is used to enable or disable the command recall and editing features in the Windows Command Prompt. It can also be used to create command macros.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
doskey [/reinstall] [/listsize=size] [/macrofile=filename] [/history] [/insert | /overstrike] [/exename=exename] [/macroname=macroname] [macroname=[text]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/reinstall: Installs a new copy of Doskey.
/listsize=size: Sets the size of the command history buffer.
/macrofile=filename: Specifies a file containing macros.
/history: Displays all commands stored in memory.
/insert or /overstrike: Specifies whether to use the overstrike or insert mode for editing.
/exename=exename: Specifies an executable file other than COMMAND.COM or CMD.EXE.
/macroname=macroname: Specifies a name to use for a macro.
macroname=[text]: Specifies a macro definition.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
doskey /history

This example displays the command history.

doskey ls=dir

This example creates a macro named "ls" that maps to the "dir" command.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>doskey is useful for enhancing the command-line experience by providing command recall, editing, and macro capabilities.</li>
  <li>Macros created with doskey allow you to define shortcuts for longer command sequences.</li>
  <li>The /history option shows the list of previously executed commands.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
While doskey is available in the Windows Command Prompt, its usage may be more common in legacy or specific scripting scenarios. Modern PowerShell and other command-line tools provide enhanced features and scripting capabilities.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'diskcopy')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'dosshell')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'dosshell', data: `
      <h1>dosshell</h1>
      <p>The dosshell command in the Windows Command Prompt is not a native or recognized command. However, "DOS Shell" typically refers to a graphical user interface (GUI) program used in MS-DOS to provide file management and navigation in a graphical environment.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">DOS Shell is a text-based file manager in a graphical interface for MS-DOS.</div>
      </div>

      <div class="section">
          <h2>Availability</h2>
          <div class="data-box"><pre class="wrap">
DOS Shell was part of MS-DOS, the operating system used in early versions of personal computers. It was included to provide users with a more user-friendly way to manage files compared to the traditional command-line interface.
</pre></div>
      </div>

      <div class="section">
          <h2>Launching DOS Shell</h2>
          <div class="data-box"><pre class="wrap">
You could access DOS Shell by entering the following command in MS-DOS:
  dosshell
</pre></div>
      </div>

      <div class="section">
          <h2>Features</h2>
          <div class="data-box"><pre class="wrap">
DOS Shell provided features like navigating through directories, copying, moving, and deleting files, as well as other basic file management tasks. It allowed users to interact with the file system using a mouse and menus.
</pre></div>
      </div>

      <div class="section">
          <h2>Discontinuation</h2>
          <div class="data-box"><pre class="wrap">
DOS Shell was phased out in later versions of Windows as Microsoft shifted to a more Windows-centric operating system, starting with Windows 95 and subsequent versions.
</pre></div>
      </div>

      <div class="section">
          <h2>Modern Alternatives</h2>
          <div class="data-box"><pre class="wrap">
In modern Windows systems, the graphical file management is typically done through File Explorer. Command-line interfaces have evolved into PowerShell and Command Prompt, providing more advanced features for system management.
</pre></div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'doskey')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'driverquery')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'driverquery', data: `
      <h1>driverquery</h1>
      <p>The driverquery command is a Windows Command Prompt command that provides information about installed drivers on a Windows system. It displays a list of all installed device drivers and their properties.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The driverquery command is used to display a list of installed device drivers and their properties.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
driverquery [/v] [/fo format] [/nh] [/si] [/sq] [/rq]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/v: Provides detailed information about each driver.
/fo format: Specifies the output format (table, list, or CSV).
/nh: Suppresses column headers in the output.
/si: Displays digital signature information.
/sq: Displays only signed drivers.
/rq: Displays only required drivers.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
driverquery /v /fo table

This example displays detailed information about installed drivers in a table format.
</pre></div>
          <div class="data-box"><pre class="wrap">
driverquery /v /fo csv > drivers.csv

This example exports detailed driver information to a CSV file named "drivers.csv."
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Running driverquery without any options provides a basic list of installed drivers.</li>
  <li>This command is useful for gathering information about installed drivers for troubleshooting or system analysis.</li>
  <li>Administrative privileges are often required to run driverquery.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
The driverquery command is commonly used by system administrators and users who need to gather information about installed drivers on a Windows system.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'dosshell')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'edit')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'edit', data: `
      <h1>edit</h1>
      <p>The edit command in the Windows Command Prompt is used to launch the MS-DOS Editor, a simple text editor that was included with MS-DOS and some versions of Microsoft Windows.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The edit command is used to open the MS-DOS Editor, allowing you to create and edit text files.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
edit [filename]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[filename]: Specifies the name of the file you want to edit. If the file doesn't exist, a new file with that name will be created.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
edit example.txt

This example opens the MS-DOS Editor and creates or edits a file named "example.txt."
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The MS-DOS Editor is a simple text editor with basic functionality.</li>
  <li>It provides a menu-driven interface for performing tasks like opening, saving, and printing files.</li>
  <li>MS-DOS Editor is not as feature-rich as modern text editors, but it served as a convenient tool for quick text editing in the MS-DOS environment.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Please note that the edit command and MS-DOS Editor may not be available in modern versions of Windows. Newer versions of Windows typically use more advanced text editors, and you might need to use a different tool, such as Notepad or a third-party text editor, for text editing purposes.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'driverquery')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'edlin')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'edlin', data: `
      <h1>edlin</h1>
      <p>The edlin command is a text editor that was historically used in MS-DOS and some early versions of Microsoft Windows. It's a line-oriented text editor, meaning that it allows users to edit files on a line-by-line basis.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The edlin command is used to launch the MS-DOS line editor, allowing users to create and edit text files.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
edlin [drive:][path]filename

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path]filename: Specifies the name and location of the file you want to edit. If the file doesn't exist, a new file with that name will be created.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
edlin example.txt

This example opens the MS-DOS line editor and creates or edits a file named "example.txt."
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>edlin is a basic line editor and lacks the graphical user interface and features found in more modern text editors.</li>
  <li>It allows users to perform basic text editing operations, such as inserting, deleting, and searching for text.</li>
  <li>edlin was often used in script files and batch files in MS-DOS environments.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that the edlin command and the MS-DOS line editor are considered outdated, and more advanced text editors are used in modern computing environments. If you are working with contemporary versions of Windows, consider using a more feature-rich text editor like Notepad, Visual Studio Code, or other third-party alternatives.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'edit')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'EMM386')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'EMM386', data: `
      <h1>EMM386</h1>
      <p>The EMM386 command is a part of MS-DOS, a legacy operating system used on personal computers. It is a memory manager that provides access to the High Memory Area (HMA) and Expanded Memory Specification (EMS) memory.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The EMM386 command is used to load the EMM386 memory manager, which facilitates access to additional memory beyond the conventional memory in MS-DOS.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
EMM386 [option [option...]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[option]: Various options that control the behavior of EMM386.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
EMM386 RAM

This example loads EMM386 with the "RAM" option, enabling it to use system RAM as expanded memory.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>EMM386 is often used in the CONFIG.SYS file of MS-DOS systems to load the memory manager during system startup.</li>
  <li>It facilitates access to memory beyond the 640KB conventional memory limit, providing additional memory for applications.</li>
  <li>EMM386 is part of the extended memory management utilities in MS-DOS.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that MS-DOS and its utilities, including EMM386, are considered legacy and are not used in modern operating systems. If you are dealing with older systems or legacy software, you may encounter EMM386 configurations in configuration files like CONFIG.SYS. In modern environments, memory management is handled differently, and operating systems like Windows use more advanced memory management techniques.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'edlin')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'expand')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'expand', data: `
      <h1>expand</h1>
      <p>The expand command in the Windows Command Prompt is used to extract files from a Microsoft Cabinet (.cab) file. It was traditionally used for file compression and decompression in early versions of Windows.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The expand command is used to extract files from a cabinet (.cab) file.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
expand [-r] source [destination]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
-r: Recursively extracts files from subdirectories.
source: Specifies the source cabinet file.
destination: Specifies the destination directory for the extracted files.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
expand -r filename.cab C:\ExtractedFiles

This example extracts all files from the "filename.cab" file into the "C:\ExtractedFiles" directory.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The expand command was commonly used in the era of Windows 95, Windows 98, and early versions of Windows NT.</li>
  <li>It is less commonly used in modern Windows systems, as newer compression and extraction tools are available.</li>
  <li>More modern alternatives for file compression and extraction include tools like zip, unzip, or third-party software.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that the use of the expand command is less prevalent in contemporary Windows environments, where users typically rely on more modern and versatile compression utilities.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'EMM386')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'extract')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'extract', data: `
      <h1>extract</h1>
      <p>The extract command in the Windows Command Prompt is used to extract files from a Microsoft Cabinet (.cab) file. It is similar in functionality to the expand command and was traditionally used for file compression and decompression in early versions of Windows.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The extract command is used to extract files from a cabinet (.cab) file.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
extract [/Y] [/A] [/D:destination] source [newname] [/L]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/Y: Suppresses prompting to confirm the overwrite of existing files.
/A: Forces all files to be extracted.
/D:destination: Specifies the destination directory for the extracted files.
source: Specifies the source cabinet file.
newname: Specifies a new name for the extracted file(s).
/L: Displays a list of the files stored in the cabinet.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
extract /Y /A /D:C:\ExtractedFiles filename.cab

This example extracts all files from the "filename.cab" file into the "C:\ExtractedFiles" directory, overwriting existing files without prompting.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The extract command was commonly used in the era of Windows 95, Windows 98, and early versions of Windows NT.</li>
  <li>It is less commonly used in modern Windows systems, as newer compression and extraction tools are available.</li>
  <li>More modern alternatives for file compression and extraction include tools like zip, unzip, or third-party software.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Keep in mind that the use of the extract command is less prevalent in contemporary Windows environments, where users typically rely on more modern and versatile compression utilities.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'expand')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'fc')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'fc', data: `
      <h1>fc</h1>
      <p>The fc command in the Windows Command Prompt is used for comparing two files or sets of files and displaying the differences between them. It is a file comparison tool.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The fc command is used to compare the contents of two files and display the differences.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
fc [/A] [/B] [/C] [/L] [/LBn] [/N] [/OFF[LINE]] [/T] [/U] [/W] [/nnnn] [drive1:][path1]filename1 [drive2:][path2]filename2

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/A: Displays only first and last lines for each set of differences.
/B: Performs a binary comparison.
/C: Disregards the case of letters.
/L: Compares files as ASCII text.
/LBn: Sets the number of lines for the internal line buffer.
/N: Displays the line numbers on an ASCII comparison.
/OFF[LINE]: Do not skip files with offline attribute set.
/T: Does not expand tabs to spaces.
/U: Compares files as UNICODE text.
/W: Compresses white space (tabs and spaces) for comparison.
/nnnn: Specifies the number of consecutive lines that match before a difference is declared.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
fc file1.txt file2.txt

This example compares the contents of "file1.txt" and "file2.txt" and displays the differences.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The fc command is useful for comparing the content of text files and identifying the differences between them.</li>
  <li>It is commonly used in scripting or batch files for automation tasks that involve file comparison.</li>
  <li>The options provided with fc allow for customization based on the specific requirements of the comparison.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Keep in mind that there are other file comparison tools and utilities available that might offer additional features or a graphical user interface for a more user-friendly experience.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'extract')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'fdisk')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'fdisk', data: `
      <h1>fdisk</h1>
      <p>The fdisk command is a utility in the Windows Command Prompt used for managing disk partitions on a hard drive. It was traditionally used in MS-DOS and early versions of Windows for disk partitioning tasks.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The fdisk command is used to create, delete, and manage partitions on a hard disk.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
fdisk [/status] [/pri[:n]] [/ext[:n]] [/log[:n]] [/mbr] [/displayorder[:{n|ordinal}]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/status: Displays the current partition status.
/pri[:n]: Sets the specified primary partition active.
/ext[:n]: Sets the specified extended partition active.
/log[:n]: Sets the specified logical partition active.
/mbr: Writes a new Master Boot Record (MBR) on the system partition.
/displayorder[:{n|ordinal}]: Changes the operating system boot display order.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
fdisk /status

This example displays the current partition status of the hard disk.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The fdisk command is more commonly associated with MS-DOS and early versions of Windows, such as Windows 95 and Windows 98.</li>
  <li>Modern Windows operating systems, starting with Windows 2000 and later, use different utilities like Disk Management for disk partitioning tasks.</li>
  <li>The use of fdisk requires careful consideration and understanding of disk partitioning, as improper use can lead to data loss.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For disk management tasks on modern Windows systems, it is recommended to use the Disk Management tool, which provides a more user-friendly interface and additional features for managing partitions. The use of fdisk is typically limited to specific scenarios or legacy systems.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'fc')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'find')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'find', data: `
      <h1>find</h1>
      <p>The find command in the Windows Command Prompt is used to search for a specific text string in one or more files. It is a simple text search utility.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The find command is used to search for a specified text string in one or more files.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
find [/v][/c][/n][/i] "string" [[drive:][path]filename[ ...]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/v: Displays all lines not containing the specified string.
/c: Displays only the count of lines containing the string.
/n: Displays line numbers with the displayed lines.
/i: Ignores the case of characters when searching for the string.
"string": Specifies the text string to search for.
[[drive:][path]filename[ ...]]: Specifies the files to search.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
find /i "example" C:\Files\*.txt

This example searches for the string "example" in all .txt files in the "C:\Files" directory, ignoring case.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The find command is a basic text search tool that can be useful for simple searching tasks in command-line scripts or batch files.</li>
  <li>It is not as powerful or flexible as some other text search tools available on modern systems.</li>
  <li>For more advanced text searching, users may prefer tools like grep or PowerShell commands.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Keep in mind that the usage and availability of commands can vary across different Windows versions. If you are working with a more recent Windows version, PowerShell commands might offer more advanced text searching capabilities.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'fdisk')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'findstr')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'findstr', data: `
      <h1>findstr</h1>
      <p>The findstr command in the Windows Command Prompt is used for searching strings in files. It is a more powerful and versatile version of the find command, providing various options for pattern matching and text searching.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The findstr command is used to search for a specific string or regular expression in files.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
findstr [/B] [/E] [/L] [/R] [/S] [/I] [/X] [/V] [/N] [/M] [/O] [/P] [/F:file] [/C:string] [/G:file] [/D:dir list] [/A:color attributes] [/OFF[LINE]] [string [filename(s)]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/B: Matches the pattern if it is at the beginning of a line.
/E: Matches the pattern if it is at the end of a line.
/L: Treats the search string as a literal string.
/R: Uses search strings as regular expressions.
/S: Searches for matching files in the current directory and all subdirectories.
/I: Specifies that the search is not case-sensitive.
/X: Prints lines that match exactly.
/V: Prints only lines that do not contain the specified string.
/N: Prints the line number before each line that matches.
/M: Prints only the file names that contain the specified string.
/O: Prints character offset before each matching line.
/P: Skip files with non-printable characters.
/F:file: Reads file names from the specified file.
/C:string: Uses specified string as a literal search string.
/G:file: Gets search strings from the specified file.
/D:dir list: Searches for the specified string in this directory list.
/A:color attributes: Specifies color attributes with two hex digits.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
findstr /S /I "example" C:\Files\*.txt

This example searches for the case-insensitive string "example" in all .txt files in the "C:\Files" directory and its subdirectories.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>findstr is a powerful command-line tool for searching text in files using various patterns and options.</li>
  <li>It supports regular expressions, making it more flexible than the basic find command.</li>
  <li>It is commonly used in batch scripts and command-line tasks for text searching and pattern matching.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Keep in mind that findstr is a versatile tool, and you can explore its various options and features by reviewing its documentation or using the /? option in the Command Prompt.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'find')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'fixboot')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'fixboot', data: `
      <h1>fixboot</h1>
      <p>The fixboot command is a Windows Command Prompt command used to write a new boot sector to the system partition to fix certain types of boot problems. It is commonly used when the boot sector of the system partition becomes corrupted or damaged.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The fixboot command is used to write a new boot sector to the system partition.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
fixboot [drive:]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:]: Specifies the drive letter of the partition for which you want to write a new boot sector.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
fixboot C:

This example writes a new boot sector to the C: drive.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The fixboot command is often used as part of the troubleshooting process when a computer is unable to boot into the operating system.</li>
  <li>It is particularly useful when the boot sector on the system partition is damaged or missing.</li>
  <li>It is important to use this command with caution, and it is typically recommended to back up important data before attempting any repairs to the boot sector.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'findstr')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'fixmbr')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'fixmbr', data: `
      <h1>fixmbr</h1>
      <p>The fixmbr command is a Windows Command Prompt command used to write a new Master Boot Record (MBR) to the system partition. It is commonly used to fix certain types of boot problems when the MBR becomes corrupted or damaged.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The fixmbr command is used to write a new MBR to the system partition.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
fixmbr [device]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[device]: Specifies the drive for which you want to write a new MBR. This is typically the drive letter of the system partition.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
fixmbr C:

This example writes a new MBR to the C: drive.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The fixmbr command is often used in situations where the Master Boot Record is damaged or overwritten by another operating system or boot loader.</li>
  <li>Running this command can help restore the ability to boot into the Windows operating system.</li>
  <li>Like fixboot, it is important to use the fixmbr command with caution, and it is recommended to back up important data before attempting any repairs to the MBR.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'fixboot')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'format')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'format', data: `
      <h1>format</h1>
      <p>The format command in the Windows Command Prompt is used to format a disk or a drive. Formatting a disk involves preparing it for use by an operating system and is commonly done during the installation of an operating system or when you want to erase all data on a disk.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The format command is used to format a disk, typically a hard drive, USB drive, or other storage devices.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
format [/fs:filesystem] [/v:label] [/q] [/u] [/x] [drive:]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/fs:filesystem: Specifies the file system (FAT, FAT32, NTFS, exFAT, etc.).
/v:label: Sets the volume label.
/q: Performs a quick format (only available for certain file systems).
/u: Unmounts the volume before formatting.
/x: Forces the volume to dismount first if necessary.
[drive:]: Specifies the drive letter or mount point of the volume to format.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
format E: /fs:ntfs /v:MyDrive /q

This example formats the E: drive with the NTFS file system, sets the volume label to "MyDrive," and performs a quick format.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Formatting a disk erases all data on it, so it should be used with caution.</li>
  <li>The /fs option allows you to specify the file system to use during formatting.</li>
  <li>The /q option performs a quick format, which is faster but may not check for bad sectors as thoroughly as a full format.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Before using the format command, it's crucial to double-check the drive letter to avoid unintentional data loss. Also, make sure to back up any important data on the drive before formatting.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'fixmbr')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'ftp')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'ftp', data: `
      <h1>ftp</h1>
      <p>The ftp command is a Command Prompt command used to connect to an FTP (File Transfer Protocol) server to upload or download files. FTP is a standard network protocol used for transferring files between a client and a server on a computer network.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The ftp command is used to initiate an FTP session from the Command Prompt.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
ftp [-v] [-d] [-i] [-n] [-g] [-s:filename] [-a] [-w:windowsize] [host]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
-v: Suppresses display of remote server responses.
-d: Enables debugging.
-i: Turns off interactive prompting.
-n: Suppresses auto-login upon initial connection.
-g: Disables filename globbing.
-s:filename: Specifies a text file containing FTP commands.
-a: Uses any local interface when binding data connection.
-w:windowsize: Overrides the default transfer buffer size.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
ftp ftp.example.com

This example connects to an FTP server at "ftp.example.com."
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Once you are connected to an FTP server, you can use commands like get to download files, put to upload files, and other FTP commands to navigate directories and manage files.</li>
  <li>The ftp command is useful for scripted FTP transfers, and you can create scripts containing FTP commands and pass them to ftp using the -s option.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that FTP is considered an insecure protocol because it transmits data, including login credentials, in plain text. For more secure file transfers, consider using protocols like SFTP (SSH File Transfer Protocol) or FTPS (FTP Secure), which provide encryption for data in transit.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'format')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'graftabl')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'graftabl', data: `
      <h1>graftabl</h1>
      <p>The graftabl command in the Windows Command Prompt is used to enable the use of an extended character set in graphics mode. It is a command that was primarily used in MS-DOS for adjusting the character set when working with specific graphics modes.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The graftabl command is used to modify the character set mapping in graphics mode.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
graftabl [/status | codepage]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/status: Displays the current character set information.
codepage: Specifies the code page to be grafted.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
graftabl 850

This example grafts the extended character set of code page 850.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The graftabl command was commonly used in MS-DOS to enable or modify the character set when working with specific graphics modes.</li>
  <li>It allowed users to adjust the character set mapping to accommodate different code pages.</li>
  <li>In modern Windows environments, character encoding and code page settings are typically handled by the operating system and applications, and the use of graftabl is uncommon.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's worth noting that the use of graftabl is a legacy command and may not have practical applications in contemporary Windows systems. If you encounter situations where character encoding needs adjustment, it's more common to handle such configurations through regional settings or specific application preferences.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'ftp')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'ipconfig')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'ipconfig', data: `
      <h1>ipconfig</h1>
      <p>The ipconfig command in the Windows Command Prompt is used to display the configuration of network interfaces on a Windows system. It provides information about IP addresses, subnet masks, default gateways, and other network-related details.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The ipconfig command is used to retrieve network configuration information.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
ipconfig [/all] [/renew] [/release] [/flushdns] [/displaydns] [/registerdns] [/showclassid adapter] [/setclassid adapter [classid]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/all: Displays detailed configuration information for all interfaces.
/renew: Renews the DHCP configuration for all adapters.
/release: Releases the IP configuration for all adapters.
/flushdns: Flushes and resets the contents of the DNS client resolver cache.
/displaydns: Displays the contents of the DNS client resolver cache.
/registerdns: Initiates manual registration of the DNS names and IP addresses that the computer has registered with the DNS server.
/showclassid adapter: Displays the DHCP class ID for a specified adapter.
/setclassid adapter [classid]: Configures the DHCP class ID for a specified adapter.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
ipconfig /all

This example displays detailed configuration information for all network interfaces.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>ipconfig is a versatile command that is commonly used for troubleshooting network-related issues.</li>
  <li>Running ipconfig without any parameters displays basic information about the active network interfaces.</li>
  <li>The /renew and /release options are often used to refresh or obtain new IP addresses from a DHCP server.</li>
  <li>The /flushdns option is useful for clearing the DNS resolver cache, which can be helpful when troubleshooting DNS-related problems.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Keep in mind that some options, especially those related to renewing or releasing IP addresses, may require administrative privileges. Therefore, you may need to run the Command Prompt as an administrator to execute certain ipconfig commands.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'graftabl')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'keyb')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'keyb', data: `
      <h1>keyb</h1>
      <p>The keyb command in the Windows Command Prompt is used to configure a keyboard for a specific language. It allows users to set the keyboard layout and code page used by the system.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The keyb command is used to configure the keyboard layout and code page.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
keyb [keyboard layout code] [keyboard code page] [/d]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[keyboard layout code]: Specifies the keyboard layout code (e.g., us for U.S. layout).
[keyboard code page]: Specifies the keyboard code page (e.g., 437 for U.S.).
/d: Displays the current keyboard layout and code page.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
keyb us 437

This example sets the keyboard layout to U.S. and the code page to 437.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The keyb command is often used to configure the keyboard for different languages and regional settings.</li>
  <li>It is particularly relevant in MS-DOS and early versions of Windows.</li>
  <li>Modern Windows operating systems typically handle keyboard configuration through the Control Panel or Settings interface, and the use of keyb is less common.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Keep in mind that the availability and functionality of certain commands can vary across different Windows versions. If you are using a more recent version of Windows, you might find that keyboard configuration is managed through graphical interfaces rather than the Command Prompt.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'ipconfig')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'label')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'label', data: `
      <h1>label</h1>
      <p>The label command in the Windows Command Prompt is used to manage the volume label of a disk. The volume label is a descriptive name given to a disk volume, such as a hard drive or a removable storage device.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The label command is used to display or set the volume label of a disk.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
label [drive:][label]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:]: Specifies the drive letter of the disk for which you want to display or set the label.
[label]: Specifies the new volume label for the disk.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
label C: MyDrive

This example sets the volume label of the C: drive to "MyDrive."
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The volume label is a human-readable name assigned to a disk volume to help users identify its contents or purpose.</li>
  <li>If you run the label command without specifying a label, it will display the current volume label for the specified drive.</li>
  <li>The label command is useful for organizing and identifying different disks, especially when working with multiple storage devices.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Keep in mind that changing the volume label does not affect the contents of the disk; it is a label for human reference. Additionally, not all types of file systems support volume labels, so the effectiveness of the label command depends on the file system used on the disk.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'keyb')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'lh')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'lh', data: `
      <h1>lh</h1>
      <p>The lh command in the Windows Command Prompt is associated with the LoadHigh command, which was used in MS-DOS to load a program or device driver into upper memory, also known as high memory or the High Memory Area (HMA). The purpose of loading a program into upper memory was to free up conventional memory for other applications, as upper memory is not typically used by the operating system.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The lh command is used to load a program or device driver into upper memory.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
lh program [parameters]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
program: Specifies the program or device driver to be loaded into upper memory.
[parameters]: Specifies any parameters that should be passed to the program.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
lh mydriver.sys

This example loads the device driver "mydriver.sys" into upper memory.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Loading programs into upper memory was a technique used in MS-DOS to optimize memory usage.</li>
  <li>The lh command was particularly useful for loading device drivers into upper memory, freeing up conventional memory for other applications.</li>
  <li>With the advancement of operating systems and hardware, the need for explicit memory management, as provided by the lh command, diminished, and it is not commonly used in modern Windows environments.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that the lh command and the concept of managing upper memory are specific to MS-DOS and early versions of Windows. In more recent Windows operating systems, memory management is handled automatically by the operating system, and the use of commands like lh is generally unnecessary.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'label')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'loadfix')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'loadfix', data: `
      <h1>loadfix</h1>
      <p>The loadfix command is a command used in MS-DOS and early versions of Windows to load a program in a way that circumvents some memory constraints. It was particularly useful for running older MS-DOS programs that had issues with memory management.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The loadfix command is used to load a program into high memory, which is memory above the conventional 640 KB boundary, in order to free up space in conventional memory.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
loadfix [program] [parameters]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
program: Specifies the program to be loaded into high memory.
parameters: Specifies any parameters that should be passed to the program.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
loadfix myprogram.exe

This example loads the program "myprogram.exe" into high memory.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>In MS-DOS and early Windows versions, conventional memory (up to 640 KB) was limited, and running larger programs could be challenging.</li>
  <li>The loadfix command allowed users to load a program into the upper memory area (UMA) or high memory area (HMA) to free up conventional memory.</li>
  <li>While it was useful for compatibility with certain older programs, its usage became less common with the advancement of operating systems and increased memory availability.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that the use of loadfix is associated with MS-DOS and early Windows versions and may not be applicable or necessary in modern Windows operating systems. If you are dealing with compatibility issues for older programs, consider using compatibility modes or other compatibility tools provided by the operating system.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'lh')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'logoff')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'logoff', data: `
      <h1>logoff</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The logoff command is used to log off the current user or a specified user from the command line in Windows.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
logoff [/f] [/l] [/?]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/f: Force running applications to close without warning.
/l: Log off the current user.
/?: Display help information.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
logoff

This example logs off the current user.
</pre></div>
          <div class="data-box"><pre class="wrap">
logoff /f

This example forces running applications to close without warning before logging off the current user.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The logoff command is useful for ending a user session from the command line.</li>
  <li>The /f option can be used to force the termination of running applications without warning.</li>
  <li>Administrative privileges may be required, especially when logging off other users.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'loadfix')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'mem')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'mem', data: `
      <h1>mem</h1>
      <p>The mem command in the Windows Command Prompt is used to display information about memory usage on the system. However, it's worth noting that the mem command is a legacy command from MS-DOS, and on modern versions of Windows, it may not provide detailed or accurate information about system memory usage.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The mem command displays information about memory usage, including the total memory, free memory, and memory used by the system.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
mem

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>In MS-DOS, the mem command was used to view information about available memory. However, with the transition to Windows NT-based operating systems (Windows 2000 and later), the mem command became less relevant, and more advanced tools like Task Manager or PowerShell are used to monitor system resources.</li>
  <li>On modern Windows systems, you might use tools such as Task Manager (Ctrl + Shift + Esc) or PowerShell commands like Get-Process for more detailed and up-to-date information about memory usage.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
If you are using a more recent version of Windows and are interested in current memory information, I recommend using Task Manager or other system monitoring tools provided by Windows.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'logoff')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'mode')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'mode', data: `
      <h1>mode</h1>
      <p>The mode command in the Windows Command Prompt is used to configure system devices such as the console display, keyboard, and printer. It allows you to set or display the status of these devices.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The mode command is used to configure system devices and display or set the status of the console display, keyboard, and printer.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
mode [device] [options]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[device]: Specifies the system device to be configured (e.g., CON for the console display, COMx for a serial port, LPTx for a parallel port).
[options]: Specifies the configuration options for the specified device.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display the current status of the console display:
  mode

2. Set the console display to 80 columns by 25 rows:
  mode con cols=80 lines=25

3. Configure a serial port (COM1) for specific settings:
  mode com1:96,n,8,1
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The mode command is often used to configure the console display, COM ports (serial ports), and LPT ports (parallel ports).</li>
  <li>When used without options, it displays the current status of the console display.</li>
  <li>For COM ports, the options specify settings such as baud rate, parity, data bits, and stop bits.</li>
  <li>Administrative privileges may be required to configure certain devices.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Use the mode /? command to view the help information and options associated with the mode command.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'mem')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'more')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'more', data: `
      <h1>more</h1>
      <p>The more command in the Windows Command Prompt is used to display the contents of a text file one screen at a time. It allows you to read through large files or command output in a controlled manner, allowing you to scroll through the content one screenful at a time.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The more command is used to display the contents of a text file or command output in a paginated format.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
more [options] [filename]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[options]: Specifies additional settings or behavior (e.g., /c for clearing the screen before displaying, /p for prompting before displaying each page).
[filename]: Specifies the name of the text file to be displayed. If not provided, it reads from the standard input (e.g., output of another command).
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display the contents of a text file:
  more filename.txt

2. Display the output of a command, e.g., directory listing:
  dir | more

3. Display the output of a command with additional options:
  command | more /c /p
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The more command is useful for viewing large files or command output without overwhelming the screen.</li>
  <li>Press the Spacebar to advance to the next screen, and press Enter to advance one line at a time.</li>
  <li>Press Q to exit the more command.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'mode')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'mscdex')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'mscdex', data: `
      <h1>mscdex</h1>
      <p>The mscdex command is associated with Microsoft CD Extensions, a set of extensions that provided CD-ROM support in MS-DOS. This command was used to load the CD-ROM extensions, allowing MS-DOS to recognize and access data from a CD-ROM drive.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The mscdex command is used to load Microsoft CD Extensions and enable CD-ROM support in MS-DOS.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
mscdex [/D:driver /M:microdrive /E /S /L:letter /V /Y /K /V]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/D:driver: Specifies the device driver for the CD-ROM drive.
/M:microdrive: Specifies the type of microchannel adapter used.
/E: Enables drive letter emulation for accessing the CD-ROM drive.
/S: Suppresses the display of startup messages.
/L:letter: Assigns a specific drive letter to the CD-ROM drive.
/V: Enables verbose mode, displaying additional information.
/Y: Skips the user prompt when loading.
/K: Keeps the driver in memory, preventing it from being unloaded.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
mscdex /D:MSCD001 /L:E

This example loads CD-ROM support, specifying the device driver as MSCD001 and assigning the drive letter E to the CD-ROM drive.
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>CD-ROM support was not inherently part of MS-DOS, and users needed to load CD-ROM extensions to access data from CD-ROM drives.</li>
  <li>The actual device driver file (e.g., MSCDEX.EXE) needed to be present on the system for the mscdex command to function.</li>
  <li>As technology advanced, and with the advent of Windows operating systems, CD-ROM support became more integrated, and specific commands like mscdex were used less frequently.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that the use of mscdex is specific to MS-DOS and early Windows versions. In modern Windows operating systems, CD-ROM support is typically handled automatically without the need for explicit commands.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'more')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'msd')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'msd', data: `
      <h1>msd</h1>
      <p>The "msd" command is associated with Microsoft Diagnostics, a tool that was included with Microsoft operating systems, particularly MS-DOS. MSD (Microsoft Diagnostics) provided detailed information about the computer's hardware, system configuration, and memory.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">MSD was used for diagnostic purposes, providing detailed information about the hardware and configuration of a computer.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
msd

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>MSD was part of Microsoft's approach to providing diagnostics and system information tools in MS-DOS and early versions of Windows.</li>
  <li>It presented a graphical interface, allowing users to navigate through various screens to view details about the system's memory, CPU, BIOS, devices, and more.</li>
  <li>The specific features and information provided by MSD could vary depending on the version of the tool.</li>
</div>
</div>

      <div class="section">
          <div class="data-box wrap">
Since technology and software evolve, and newer versions of operating systems have been released, the availability and usage of specific tools like MSD may have changed. If you are using a more recent version of Windows, you might find that the available diagnostic tools and methods have been updated.

For the most accurate and up-to-date information, consider checking the documentation of the specific Windows version you are using or exploring other system information tools available in modern Windows environments.
</div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'mscdex')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'nbtstat')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'nbtstat', data: `
      <h1>nbtstat</h1>
      <p>The nbtstat command in the Windows Command Prompt is used to display statistics and current connections related to NetBIOS over TCP/IP. NetBIOS (Network Basic Input/Output System) is a networking protocol used for file and printer sharing, as well as other communication between computers on a local network.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The nbtstat command is used to display NetBIOS over TCP/IP statistics and information about current NetBIOS connections.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
nbtstat [options]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[options]: Specifies various options to display specific information. Common options include -a (list NetBIOS name table), -A (list NetBIOS name table for a remote computer), -c (display the contents of the NetBIOS name cache), -n (list local NetBIOS names), and others.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display the local NetBIOS names:
  nbtstat -n

2. Display the NetBIOS name table for a remote computer:
  nbtstat -A 192.168.1.1
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>nbtstat is commonly used for troubleshooting NetBIOS-related issues, checking name resolution, and examining NetBIOS statistics.</li>
  <li>The command provides information about NetBIOS names, their status, and their association with IP addresses.</li>
  <li>It can be useful for diagnosing problems related to NetBIOS name resolution, especially in environments where NetBIOS is still in use.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more detailed information and additional options, you can use the nbtstat /? command to view the help documentation associated with the nbtstat command.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'msd')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'net')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'net', data: `
      <h1>net</h1>
      <p>The net command in the Windows Command Prompt is a versatile command-line tool used for managing various network-related tasks and services. It provides a range of subcommands for tasks such as user and group management, network share management, printer management, and more.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The net command is used for managing various aspects of a Windows network.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
net [options] [command]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[options]: Specifies various options for the net command.
[command]: Specifies the specific subcommand to execute.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display information about user accounts:
  net user

2. Map a network drive:
  net use Z: \\\\server\\share

3. Display information about network shares:
  net share
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The net command provides a wide range of functionalities related to networking, including user and group management, share management, printer management, and more.</li>
  <li>It is commonly used in batch scripts, automation tasks, and for managing network resources from the command line.</li>
  <li>To see the available commands and their options, you can use net /? or net help.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'nbtstat')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'netsh')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'netsh', data: `
      <h1>netsh</h1>
      <p>The netsh command in the Windows Command Prompt is a powerful and versatile tool for configuring and managing network settings. It allows users to interact with various networking components, such as interfaces, routing tables, firewalls, and more. Netsh stands for Network Shell.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The netsh command is used to configure, monitor, and troubleshoot network settings in Windows.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
netsh [context] [sub-context] [command | -f script-file]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[context]: Specifies the main networking context (e.g., interface, firewall, routing).
[sub-context]: Specifies a sub-context under the main context.
[command]: Specifies a command within the context.
[-f script-file]: Specifies a script file containing netsh commands.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display information about network interfaces:
  netsh interface show interface

2. Set the IP address of a network interface:
  netsh interface ipv4 set address "Local Area Connection" static 192.168.1.2 255.255.255.0 192.168.1.1

3. Configure the Windows Firewall:
  netsh advfirewall set allprofiles state on
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>netsh is an essential tool for network administrators and advanced users for configuring network-related settings.</li>
  <li>It allows for a wide range of network configurations, including interfaces, firewalls, DHCP, DNS, and more.</li>
  <li>The netsh command supports scripting, allowing users to create and execute scripts containing multiple commands.</li>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'net')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'netstat')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'netstat', data: `
      <h1>netstat</h1>
      <p>The netstat command in the Windows Command Prompt is used to display active network connections, listening ports, and related network statistics. It provides a snapshot of the network status on a local machine.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The netstat command is used to display information about active network connections, listening ports, and network statistics.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
netstat [-a] [-b] [-e] [-f] [-n] [-o] [-p protocol] [-r] [-s] [-t] [-x] [interval]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
Various options control the information displayed (e.g., -a for all connections and listening ports, -b to display executable involved in creating each connection).
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display all active connections and listening ports:
  netstat -a

2. Display the PID (Process ID) associated with each connection:
  netstat -ano

3. Display statistics for network protocols:
  netstat -s
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>netstat is useful for diagnosing network-related issues, identifying active connections, and monitoring network activity.</li>
  <li>The command can show information about TCP, UDP, and other protocols.</li>
  <li>The -o option displays the PID associated with each connection, allowing users to correlate network activity with specific processes.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For a complete list of options and additional details, you can use netstat /? in the Command Prompt. Keep in mind that some options may require administrative privileges to display certain information.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'netsh')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'nlsfunc')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'nlsfunc', data: `
      <h1>nlsfunc</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">nlsfunc loads country-specific information for national language support (NLS). It allows you to switch between different character sets and use country-specific features, such as date and time formats, currency symbols, and sorting rules.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
nlsfunc [[drive:][path]filename]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
filename: The name of the file containing country-specific information. This file is typically located in the LANG directory of the MS-DOS installation.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
nlsfunc a:\\lang\\Spain.dat

This command loads the country-specific information for Spain.
</pre></div>
          <div class="data-box"><pre class="wrap">
nlsfunc c:\\dos\\nlsfunc.exe a:\\lang\\France.dat

This command loads the country-specific information for France.
</pre></div>
      </div>

      <div class="section">
      <h1>Note</h1>
<div class="data-box">
The nlsfunc command should not be used while Windows is running. If you do so, your computer might stop responding.
</div>
</div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box wrap">
The nlsfunc command can also be used in the CONFIG.SYS file to automatically load country-specific information when you start your computer. To do this, add the following line to your CONFIG.SYS file:

INSTALL=[[dos-drive:]dos-path]NLSFUNC.EXE [country-filename]

Replace [dos-drive:]dos-path] with the location of NLSFUNC.EXE and [country-filename] with the name of the file containing country-specific information.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'netstat')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'nslookup')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'nslookup', data: `
      <h1>nslookup</h1>
      <p>The nslookup command in the Windows Command Prompt is used for querying DNS (Domain Name System) to obtain domain name or IP address mapping, DNS records, and other DNS-related information. It is a useful tool for troubleshooting and diagnosing DNS-related issues.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The nslookup command is used for DNS queries to retrieve information about domain names, IP addresses, mail servers, and more.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
nslookup [hostname] [server]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[hostname]: Specifies the domain name or IP address to look up.
[server]: Specifies the DNS server to query. If not specified, the default DNS server configured on the system is used.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Look up the IP address for a domain name:
  nslookup www.example.com

2. Look up the domain name for an IP address:
  nslookup 203.0.113.1

3. Specify a custom DNS server:
  nslookup www.example.com 8.8.8.8
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>nslookup provides interactive and non-interactive modes. In interactive mode, you can enter commands one by one, and in non-interactive mode, you can specify the query directly on the command line.</li>
  <li>It's commonly used for diagnosing DNS-related issues, verifying DNS records, and checking the resolution of domain names.</li>
  <li>Use the exit command to exit interactive mode.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more detailed information and options, you can use nslookup /? or nslookup -h in the Command Prompt. Keep in mind that certain network configurations or security policies might affect the results of DNS queries.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'nlsfunc')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'pathping')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'pathping', data: `
      <h1>pathping</h1>
      <p>The pathping command in the Windows Command Prompt is a network diagnostic tool that combines features of both the ping and tracert commands. It provides information about the path that network packets take to reach a destination, including detailed statistics about each hop along the route.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The pathping command is used for network path analysis and troubleshooting. It sends a series of ICMP Echo or UDP Probes to each router or hop along the path to a destination, collecting statistics and information about each hop.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
pathping [-n] [-h maximum_hops] [-g host-list] [-p period] [-q num_queries] [-w timeout] destination

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
-n: Skip DNS resolution of target IP addresses to display numeric addresses only.
-h maximum_hops: Maximum number of hops to search for the target.
-g host-list: Loose source route along host-list (IPv4 only).
-p period: Wait period milliseconds between pings (default is 250 ms).
-q num_queries: Number of queries sent for each hop.
-w timeout: Wait timeout milliseconds for each reply.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Perform a pathping to a destination:
  pathping www.example.com

2. Specify maximum hops and wait time:
  pathping -h 30 -w 500 www.example.com
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>pathping can provide more detailed information than tracert by collecting additional statistics about each hop.</li>
  <li>It's particularly useful for identifying network issues and bottlenecks along the path to a destination.</li>
  <li>The -g option allows for specifying a loose source route, which can be helpful for troubleshooting certain network configurations.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more detailed information and options, you can use pathping /? in the Command Prompt. Keep in mind that certain network configurations or security policies might affect the results of pathping queries.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'nslookup')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'ping')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'ping', data: `
      <h1>ping</h1>
      <p>The ping command in the Windows Command Prompt is used to test the reachability of a host on a network and measure the round-trip time for messages sent from the originating host to a destination computer. It is a basic tool for network troubleshooting and diagnostics.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The ping command is used to send ICMP Echo Request messages to a target host and wait for ICMP Echo Reply messages. This helps determine whether the target host is reachable and provides information about the network latency.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
ping [options] destination

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[options]: Specifies various options for customizing the ping operation (e.g., -n for the number of echo requests to send, -t for continuous ping).
destination: Specifies the host or IP address to ping.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Basic ping to a host:
  ping www.example.com

2. Specify the number of echo requests:
  ping -n 4 www.example.com

3. Continuous ping (Ctrl+C to stop):
  ping -t www.example.com
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>By default, the ping command sends four ICMP Echo Request messages and displays the round-trip time for each response.</li>
  <li>The -n option allows you to specify the number of echo requests to send.</li>
  <li>The -t option sends ping requests continuously until manually stopped with Ctrl+C.</li>
  <li>ping is commonly used for basic network troubleshooting to check the connectivity and latency to a specific host.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For a complete list of options and additional details, you can use ping /? in the Command Prompt. Keep in mind that some network configurations or security policies might affect the results of ping requests.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'pathping')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'POWER')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'POWER', data: `
      <h1>POWER</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The power command is used to control power management on older versions of Windows. It is not available on Windows 10 or later.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
POWER [option]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/STAT: Displays the current power state of the computer.

/ON: Turns on the computer.

/OFF: Turns off the computer.

/RESTART: Restarts the computer.

/HIBERNATE: Hibernates the computer.

/SLEEPOFF: Disables sleep mode.

/SLEEPOFFTIME time: Sets the sleep timeout interval.

/WAKE: Enables sleep mode.

/WAKEINTERVAL time: Sets the wake timeout interval.

/WAITFORWAKE: Waits for the computer to wake up from sleep or hibernation.

/STATUS: Displays the status of power management settings.

/DEVICESTATUS: Displays the status of power management for all devices.

/DEVICESTATUS [devicename]: Displays the status of power management for a specific device.

/SET devicename [option]: Sets the power management settings for a specific device.

/CLEAR devicename [option]: Clears the power management settings for a specific device.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
POWER /STAT: Displays the current power state of the computer.

POWER /ON: Turns on the computer.

POWER /OFF: Turns off the computer.

POWER /RESTART: Restarts the computer.

POWER /HIBERNATE: Hibernates the computer.

POWER /SLEEPOFF: Disables sleep mode.

POWER /SLEEPOFFTIME 300: Sets the sleep timeout interval to 5 minutes.

POWER /WAKE: Enables sleep mode.

POWER /WAKEINTERVAL 120: Sets the wake timeout interval to 2 minutes.

POWER /WAITFORWAKE: Waits for the computer to wake up from sleep or hibernation.

POWER /STATUS: Displays the status of power management settings.

POWER /DEVICESTATUS: Displays the status of power management for all devices.

POWER /DEVICESTATUS mymouse: Displays the status of power management for the mouse named mymouse.

POWER /SET mymouse /WAKE: Enables the mouse named mymouse to wake the computer from sleep or hibernation.

POWER /CLEAR mymouse /WAKE: Disables the mouse named mymouse from waking the computer from sleep or hibernation.
</pre></div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'ping')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'print')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'print', data: `
      <h1>print</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The print command is a built-in command in Windows Command Prompt (CMD) that allows you to send documents to a printer. It can be used to print text files, images, and other types of documents.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
print [/D:printer] [pathname]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[/D:printer]: Specifies the printer you want to use. If you omit this option, the document will be sent to the default printer.
[pathname]: Specifies the path to the document you want to print. You can also specify multiple documents by separating them with spaces.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
To print a document named "document.txt" to the default printer, you would use the following command:
  print document.txt
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The print command also has several additional options that you can use to control how documents are printed. For example, you can use the /P option to pause printing before each page, and the /Q option to print in quiet mode without displaying any messages.</li>
  <li>For a complete list of options, you can type the following command: print /?</li>
</div>
</div>

      <div class="section">
          <h2>Printing from a Network Printer</h2>
          <div class="data-box"><pre class="wrap">
If you want to print to a network printer, you will need to specify the network printer's name in the /D:printer option. For example, to print to a network printer named "networkprinter", you would use the following command:
  print /D:networkprinter document.txt
</pre></div>
      </div>

      <div class="section">
          <h2>Using Wildcards</h2>
          <div class="data-box"><pre class="wrap">
You can also use wildcards in the pathname parameter to print multiple documents. For example, to print all documents in the current directory that have the .txt extension, you would use the following command:
  print *.txt
</pre></div>
      </div>

      <div class="section">
          <h2>Printing from a Web Page</h2>
          <div class="data-box"><pre class="wrap">
The print command can also be used to print from a web page. To do this, you will need to copy the URL of the web page and then use the following command:
  print URL

  Replace URL with the URL of the web page you want to print.
</pre></div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'POWER')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'qbasic')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'qbasic', data: `
      <h1>qbasic</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">This will launch the QBasic integrated development environment (IDE), where you can write, edit, and run QBasic programs.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
qbasic

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
<div class="data-box">
Once you have started QBasic, you can start writing and editing your QBasic programs. You can also run your programs by pressing the F5 key or by selecting the Run menu and then clicking Run.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'print')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'robocopy')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'robocopy', data: `
      <h1>robocopy</h1>
      <p>Robocopy, which stands for "Robust File Copy," is a command-line utility in Windows that is used for advanced file and folder copying. It is more powerful and versatile than the basic copy command. Robocopy is included with Windows starting from Windows Vista and Windows Server 2008.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">Robocopy is used for copying files and directories with a wide range of options and features, including the ability to resume copies after interruptions and mirroring entire directory structures.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
robocopy source destination [file(s)] [options]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
source: Specifies the source directory.
destination: Specifies the destination directory.
[file(s)]: Specifies the file or files to be copied (optional).
[options]: Specifies various options for customizing the copy operation (e.g., /E for copying subdirectories, /Z for restarting an interrupted copy).
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Copy a directory and its contents:
  robocopy C:\SourceFolder D:\DestinationFolder /E

2. Mirror a directory, copying only newer or changed files:
  robocopy C:\SourceFolder D:\DestinationFolder /MIR
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Robocopy is known for its ability to handle large-scale file copy operations, and it is often used for backup and synchronization tasks.</li>
  <li>It provides various options for controlling file attributes, copying security information, and retrying on failed copies.</li>
  <li>Robocopy is a robust tool for maintaining identical copies of a set of files or directories on different locations.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For a comprehensive list of options and additional details, you can use robocopy /? in the Command Prompt. The wide range of features and options makes Robocopy a powerful tool for file management and replication tasks.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'qbasic')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'route')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'route', data: `
      <h1>route</h1>
      <p>The route command in the Windows Command Prompt is used to display and manipulate the local IP routing table. It allows users to view, add, or delete entries in the routing table, which determines how network traffic is directed.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The route command is used for viewing and managing the IP routing table.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
route [-f] [command [destination] [mask subnet_mask] [gateway] [metric metric] [if interface]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
-f: Clears the routing table before running the specified command.
command: Specifies the action to be performed (e.g., print for displaying the routing table, add for adding a route).
destination: Specifies the destination IP address or network.
subnet_mask: Specifies the subnet mask.
gateway: Specifies the IP address of the next-hop router.
metric: Specifies the metric for the route (cost of the route).
if interface: Specifies the interface for the route.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display the routing table:
  route print

2. Add a route:
  route add 192.168.1.0 mask 255.255.255.0 192.168.0.1

3. Delete a route:
  route delete 192.168.1.0
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The routing table is a critical component in networking that determines how network traffic is routed between different destinations.</li>
  <li>The route command is commonly used for troubleshooting network connectivity issues or for configuring specific routing scenarios.</li>
  <li>Be cautious when adding or modifying routes, as incorrect configurations can impact network connectivity.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use route /? in the Command Prompt. The specific options available may vary depending on the Windows version.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'robocopy')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'runas')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'runas', data: `
      <h1>runas</h1>
      <p>The runas command in the Windows Command Prompt is used to run a program or command as another user. This is particularly useful for executing commands with elevated privileges or for running programs under a different user account.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The runas command is used to run a program or command with different user credentials.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
runas [{/profile | /noprofile}] [/env] [/netonly] [/smartcard] [/showtrustlevels] [/trustlevel] /user:username program

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
Common options include:
/profile: Loads the user's profile.
/noprofile: Does not load the user's profile.
/env: Uses the current environment instead of the user's.
/netonly: Specifies that the command should be run with the credentials specified, but on the network.
/smartcard: Specifies that the credentials should be supplied from a smartcard.
/showtrustlevels: Displays the trust levels that can be used with the /trustlevel switch.
/trustlevel: Specifies the minimum trust level required to run the program.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Run Command Prompt as an administrator:
  runas /user:Administrator cmd

2. Run Notepad as a different user:
  runas /user:domain\\username "notepad.exe"
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The runas command is often used when administrative privileges are required for executing specific commands or programs.</li>
  <li>It prompts for the password of the specified user if necessary.</li>
  <li>It can be useful for troubleshooting or performing administrative tasks without having to switch users or log in and out.</li>
  <li>When using runas to execute commands with elevated privileges, you may encounter the UAC (User Account Control) prompt, requesting confirmation.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use runas /? in the Command Prompt. Note that using the runas command may require appropriate permissions and credentials.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'route')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'sc')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'sc', data: `
      <h1>sc</h1>
      <p>The sc command in the Windows Command Prompt is used to communicate with the Service Control Manager (SCM) or services on local or remote computers. It allows you to query, configure, or control services.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The sc command is used for managing services.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
sc [command] [service_name] [options]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[command]: Specifies the action to be performed (e.g., query, start, stop, config).
[service_name]: Specifies the name of the service.
[options]: Specifies additional options depending on the command.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Query information about a service:
  sc query serviceName

2. Start a service:
  sc start serviceName

3. Stop a service:
  sc stop serviceName

4. Configure a service (change start type, etc.):
  sc config serviceName start= auto
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The sc command is a powerful tool for managing services on Windows systems.</li>
  <li>Common commands include query (display information about a service), start (start a service), stop (stop a service), and config (change configuration settings).</li>
  <li>It can be used locally or to manage services on remote computers.</li>
  <li>Administrative privileges may be required for certain operations.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use sc /? in the Command Prompt. The sc command is often used for scripting and automation tasks related to Windows services.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'runas')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'scanreg')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'scanreg', data: `
      <h1>scanreg</h1>
      <p>The scanreg command is not a native command in the Windows Command Prompt. However, you might be referring to the Registry Checker utility on Windows 9x operating systems, which is used to back up and restore the Windows registry.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The Registry Checker is used for backing up and restoring the Windows registry on Windows 95, Windows 98, and Windows Me.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
scanreg

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
To run the Registry Checker from the Command Prompt:
  scanreg
</pre></div>
      </div>

      <div class="section">
          <h2>Access</h2>
          <div class="data-box"><pre class="wrap">
To access the Registry Checker utility, you typically use the "ScanReg" command. This can be done from the Windows Command Prompt or by running "ScanReg.exe" from the Run dialog.
</pre></div>
      </div>

      <div class="section">
<h2>Functionality</h2>
<div class="data-box">
  <li>Registry Checker runs automatically when you start your computer and periodically creates backups of the registry.</li>
  <li>It allows you to manually restore a previous registry backup if there are issues with the current registry.</li>
</div>
</div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The Registry Checker creates daily backups of the registry, and up to five previous backups are kept. If issues arise, you can use the utility to restore the registry to a previous state.</li>
  <li>Windows Registry is a critical component of the operating system, and changes to it can impact system stability. The Registry Checker helps in recovering from registry-related problems.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
Please note that modern versions of Windows (Windows NT, 2000, XP, Vista, 7, 8, 10) use a different registry architecture, and the Registry Checker is not applicable to these systems. If you are using a more recent version of Windows, other utilities and features may be available for managing and troubleshooting the registry.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'sc')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'setver')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'setver', data: `
      <h1>setver</h1>
      <p>The setver command in the Windows Command Prompt is used to set the MS-DOS version number that a program expects when it runs. It allows you to emulate a different version of MS-DOS for compatibility with older software.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The setver command is used to set the MS-DOS version number for compatibility.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
setver [drive:][path]program [version]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path]program: Specifies the path to the program for which you want to set the version number.
[version]: Specifies the MS-DOS version number (e.g., 6.22) that the program should emulate.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
Set the MS-DOS version for a specific program:
  setver C:\OldProgram\Program.exe 6.22
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The setver command is used to address compatibility issues with older MS-DOS programs that may not run correctly on newer versions of MS-DOS or Windows.</li>
  <li>By setting a specific version number for a program, you can emulate the MS-DOS environment it expects.</li>
  <li>The setver command is not commonly used in modern Windows environments, as it primarily addresses compatibility concerns for older software.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use setver /? in the Command Prompt. Keep in mind that this command is specific to certain legacy scenarios, and modern Windows versions might have more advanced compatibility modes and features.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'scanreg')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'share')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'share', data: `
      <h1>share</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The net share command in the Windows Command Prompt is used to display or configure shared resources on a computer.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
net share [sharename[=path]] [/users:number | /unlimited]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
net share MySharedFolder=C:\\SharedFiles /users:5

This example shares the folder "C:\\SharedFiles" with the name "MySharedFolder" and limits the number of simultaneous users to 5.
</pre></div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'setver')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'shutdown')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'shutdown', data: `
      <h1>shutdown</h1>
      <p>The shutdown command in the Windows Command Prompt is used to shut down, restart, or log off a computer. It allows you to initiate these actions from the command line.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The shutdown command is used for shutting down, restarting, or logging off a computer.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
shutdown [/i | /l | /s | /r | /g | /a | /p | /h | /e] [/f] [/m \\computer][/t xxx][/d [p|u:]xx:yy [/c "comment"]]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/i: Displays the graphical user interface (GUI) allowing the user to log off, restart, or shut down the computer.
/l: Logs off the current user.
/s: Shuts down the computer.
/r: Restarts the computer.
/g: Restart and reopens any running applications after a system restart (Windows 8 and later).
/a: Aborts a system shutdown.
/p: Turns off the computer (power off).
/h: Puts the computer into hibernation.
/e: Document the reason for an unexpected shutdown.
/f: Forces running applications to close during the shutdown.
/m \\\\computer: Specifies the target computer.
/t xxx: Sets the time delay in seconds before performing the action.
/d [p|u:]xx:yy: Provides the reason code for the shutdown.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Shutdown the local computer after a 60-second delay:
  shutdown /s /t 60

2. Restart the computer immediately:
  shutdown /r /t 0

3. Log off the current user:
  shutdown /l
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Administrative privileges are typically required for certain actions, such as shutting down or restarting the computer.</li>
  <li>The /i option opens a GUI interface that allows you to perform various shutdown-related tasks, including remote shutdowns.</li>
  <li>The /a option can be used to abort a system shutdown if executed quickly after initiating the shutdown.</li>
  <li>The /f option can be useful to force applications to close, but it may result in unsaved data loss.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use shutdown /? in the Command Prompt. The shutdown command is often used for automation, scripting, or remotely managing computers.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'share')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'smartdrv')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'smartdrv', data: `
      <h1>smartdrv</h1>
      <p>The smartdrv command is a disk caching utility that was used in MS-DOS and early versions of Microsoft Windows. It is designed to improve disk I/O performance by caching frequently accessed data in RAM (Random Access Memory). This can lead to faster access times for files and applications.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The smartdrv command is used to install and configure the SmartDrive disk cache.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
smartdrv [/x] [/L] [/U] [/B] [/E] [/C]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/x: Disables SmartDrive caching.
/L: Limits the amount of conventional memory used by SmartDrive.
/U: Updates the cached data when the computer is idle.
/B: Enables write-back caching (data is written to the cache and disk simultaneously).
/E: Forces SmartDrive to use extended memory for its cache.
/C: Clears the SmartDrive cache.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Install SmartDrive with default settings:
  smartdrv

2. Install SmartDrive and limit conventional memory usage:
  smartdrv /L

3. Disable SmartDrive caching:
  smartdrv /x
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>SmartDrive was commonly used in MS-DOS and early versions of Windows to improve disk performance, especially on systems with slower hard drives.</li>
  <li>The cache was stored in conventional or extended memory, depending on the configuration.</li>
  <li>Use caution when using disk caching utilities, as inappropriate configurations or conflicts with certain applications could lead to data corruption.</li>
  <li>With the evolution of operating systems and improvements in disk access, the need for separate disk caching utilities like SmartDrive has diminished.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use smartdrv /? in the Command Prompt. Note that this command is specific to older MS-DOS and Windows environments and is not typically used in modern Windows operating systems.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'shutdown')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'sort')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'sort', data: `
      <h1>sort</h1>
      <p>The sort command in the Windows Command Prompt is used to sort the contents of a text file or the output of a command. It arranges lines of text alphabetically or numerically, depending on the specified options.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The sort command is used for sorting text.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
sort [/r] [/m] [/l] [/n] [/rec] [/+n] [/o output] [input]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/r: Reverses the sort order.
/m: Specifies that the input should be sorted in memory.
/l: Forces the input to be sorted in lowercase.
/n: Specifies a numeric sort.
/rec: Specifies the number of characters in each record.
/+n: Specifies the starting character position for the sort key.
/o output: Specifies the file where the sorted input is to be stored.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Sort the contents of a text file alphabetically:
  sort input.txt

2. Sort the contents of a text file in reverse order:
  sort /r input.txt

3. Sort the output of a command numerically:
  dir /b | sort /n
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The sort command is useful for organizing text data in a desired order.</li>
  <li>By default, sort arranges text in ascending order. The /r option can be used to reverse the sort order.</li>
  <li>The /n option is used for numeric sorting, while the /l option forces sorting in lowercase.</li>
  <li>If no input file is specified, sort reads from the standard input (keyboard or pipeline).</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use sort /? in the Command Prompt. The sort command is commonly used in batch scripts and command-line operations where data needs to be organized or processed in a specific order.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'smartdrv')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'subst')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'subst', data: `
      <h1>subst</h1>
      <p>The subst command in the Windows Command Prompt is used to associate a drive letter with a specific folder on a local or network drive. It allows you to create a virtual drive letter that points to a specific path, making it convenient to access frequently used directories.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The subst command is used to create a virtual drive letter that points to a specific folder.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
subst [drive1: [drive2:]path]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
drive1:: Specifies the virtual drive letter to be created.
[drive2:]path: Specifies the target folder that the virtual drive letter will point to.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Create a virtual drive letter "Z:" pointing to the folder "C:\\MyFolder":
  subst Z: C:\\MyFolder

2. Remove the virtual drive letter "Z:":
  subst Z: /D
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The subst command is useful for creating virtual drives to access specific directories more conveniently.</li>
  <li>Virtual drives created with subst are temporary and exist only for the current session. They are removed when the computer restarts.</li>
  <li>To make virtual drives persistent across reboots, you can use the subst command in a script that runs at startup or use other methods like modifying the system registry.</li>
  <li>It's important to note that while subst can be a convenient tool, it's not as commonly used in modern Windows environments, as mapped network drives and shortcuts are often preferred.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use subst /? in the Command Prompt. The subst command is a legacy command that may still be useful in certain scenarios, especially for specific file and directory access patterns.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'sort')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'SYS')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'SYS', data: `
      <h1>SYS</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The SYS command has different meanings and uses depending on the context.</div>
      </div>

      <div class="section">
          <h2>Usage</h2>
          <div class="data-box"><pre class="wrap">
1. SYS as a DOS Command:
  In MS-DOS and early versions of Windows, the SYS command was used to copy system files from one disk to another, allowing the second disk to be bootable. The command syntax was:
      SYS [source] d:
      
      Where [source] is the source disk or drive letter and d: is the destination drive letter.

2. SYS as a BASIC Command:
  In Microsoft BASIC variants, the SYS command was used to execute a machine language program directly from memory. The command syntax was:
      SYS n
      
      Where n is the memory address where the executable code begins.
</pre></div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'subst')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'telnet')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'telnet', data: `
      <h1>telnet</h1>
      <p>The telnet command is a network protocol used on the Internet or local area networks to provide a bidirectional interactive text-oriented communication facility using a virtual terminal connection. It allows a user to log into a remote computer, access resources on that computer, and run commands in a text-based interface.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The telnet command is used to establish a Telnet session with a remote server or device.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
telnet [hostname or IP address] [port]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
hostname or IP address: Specifies the destination host or IP address.
port: Specifies the port number to connect to (default is port 23 for Telnet).
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Connect to a remote server using Telnet:
  telnet example.com

2. Connect to a specific port on a remote server:
  telnet example.com 80
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>Telnet is a text-based protocol and is not secure for transmitting sensitive information. For secure communication, consider using SSH (Secure Shell).</li>
  <li>Telnet is often used for troubleshooting network connectivity, testing services on remote servers, or configuring network devices.</li>
  <li>On modern Windows systems, you may need to enable the Telnet Client feature via the "Turn Windows features on or off" settings.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
It's important to note that Telnet is an older protocol, and its use has decreased in favor of more secure alternatives like SSH. When possible, it is recommended to use SSH for secure remote access and communication.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'SYS')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'tracert')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'tracert', data: `
      <h1>tracert</h1>
      <p>The tracert command, short for "traceroute," is used in the Windows Command Prompt to trace the route that packets take to reach a destination on a network. It helps to identify the network path, latency, and potential issues between the source and destination.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The tracert command is used to trace the route that packets take to reach a destination.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
tracert [options] [hostname or IP address]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[hostname or IP address]: Specifies the destination host or IP address.
[options]: Various options that modify the behavior of the tracert command.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Trace the route to a specific website:
  tracert www.example.com

2. Trace the route to a specific IP address:
  tracert 203.0.113.1
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>tracert sends a sequence of Internet Control Message Protocol (ICMP) Echo Request messages to the destination with increasing Time-To-Live (TTL) values.</li>
  <li>Each router or hop along the path decrements the TTL, and when the TTL reaches zero, the router sends an ICMP Time Exceeded message back to the source.</li>
  <li>The output of tracert includes the IP addresses of each router or hop, along with round-trip times (latency).</li>
  <li>tracert is a valuable tool for diagnosing network connectivity issues, identifying bottlenecks, and understanding the network path to a specific destination.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use tracert /? in the Command Prompt. Note that the availability and behavior of tracert may vary on different operating systems and network environments.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'telnet')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'tree')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'tree', data: `
      <h1>tree</h1>
      <p>The tree command in the Windows Command Prompt is used to display the folder and file structure of a directory and its subdirectories in a tree-like format. It provides a hierarchical view of the directory structure, making it easier to understand the organization of files and folders.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The tree command is used to display the directory structure in a tree format.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
tree [drive:][path] [/F] [/A]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
[drive:][path]: Specifies the directory for which the tree structure should be displayed.
/F: Display the names of the files in each directory.
/A: Use ASCII characters to draw the tree lines.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Display the tree structure for the current directory:
  tree

2. Display the tree structure for a specific directory with file names:
  tree C:\\Example /F
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>The tree command is a useful tool for visualizing the hierarchy of files and directories in a given path.</li>
  <li>By default, it displays the tree structure without file names. The /F option can be used to include file names in the output.</li>
  <li>The /A option allows you to use ASCII characters to draw the tree lines, providing an alternative visual representation.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
For more details and options, you can use tree /? in the Command Prompt. The tree command is often used for quick assessments of directory structures, especially when you need to understand the layout of files and folders.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'tracert')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'undelete')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'undelete', data: `
      <h1>undelete</h1>
      <p>The undelete command is a DOS command that can be used to recover deleted files from a FAT or FAT32 filesystem. However, it is important to note that the undelete command is not always successful, and it is more likely to work if the files were only recently deleted and no new files have been written to the disk since the deletion.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">To use the undelete command, you will need to know the name of the file you want to recover, as well as the drive letter of the disk it was on.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
undelete [drive:][path][filename] [/DT|/DS|/DOS]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
/DT: Specifies that the file should be recovered using the Delete Tracker.
/DS: Specifies that the file should be recovered using the Disk Signature method.
/DOS: Specifies that the file should be recovered using the DOS method.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
To recover a file named mydocument.txt from the C drive, you would use the following command:
undelete C:\\mydocument.txt
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
If the file was recently deleted and no new files have been written to the disk, the undelete command should be able to recover the file. However, if the file was deleted a long time ago or if new files have been written to the disk, the undelete command may not work.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'tree')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'unformat')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'unformat', data: `
      <h1>unformat</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The unformat command is a DOS command that was used to attempt to recover files from a disk that had been formatted using the unformat command. It was included in MS-DOS versions 5.0 to 6.22. However, it is important to note that the unformat command was not always successful in recovering files, and it could overwrite existing data on the disk, making it impossible to recover any files.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
unformat [drive:][/partn][/l][/p][/u]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
drive:: Specifies the drive letter of the drive that you want to unformat.
/partn: Specifies that the drive has a partition table.
/l: Specifies that there is no MIRROR file for the drive.
/p: Sends UNFORMAT messages to the printer.
/u: Prevents the automatic verification of the MIRROR file.
</pre>
</div>
</div>

      <div class="section">
          <h2>Example</h2>
          <div class="data-box"><pre class="wrap">
To unformat drive C: and send the messages to the printer, you would use the following command:
unformat C: /p
</pre></div>
      </div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'undelete')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'unlock')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'unlock', data: `
      <h1>unlock</h1>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">Unlocking a BitLocker-protected drive</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
If you have a BitLocker-protected drive, you can use the manage-bde command to unlock it. To do this, open CMD and type the following command:
  <code><pre class="cmd-code">
manage-bde unlock &ltdrive letter&gt -pw

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
Replace &ltdrive letter&gt with the drive letter of the BitLocker-protected drive you want to unlock. You will then be prompted to enter your BitLocker password.
</pre>
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'unformat')" class="nav-button">&lt; Previous</button>
<button onclick="navPage('cmd', 'xcopy')" class="nav-button">Next &gt;</button>
</div>
      `
    },
    { name: 'xcopy', data: `
      <h1>xcopy</h1>
      <p>The xcopy command in the Windows Command Prompt is used to copy files and directories from one location to another. It provides more advanced features compared to the basic copy command and is useful for copying large amounts of data, including subdirectories.</p>

      <div class="section">
        <h2>Use</h2>
        <div class="data-box">The xcopy command is used to copy files and directories.</div>
      </div>

      <div class="section">
<h2>Syntax</h2>
<div class="data-box">
  <code><pre class="cmd-code">
xcopy source [destination] [/switches]

</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
</code>
<pre class="wrap">
source: Specifies the path of the files to be copied.
destination: Specifies the path where the files are to be copied.
/switches: Various optional switches that modify the behavior of the xcopy command.
</pre>
</div>
</div>

      <div class="section">
          <h2>Examples</h2>
          <div class="data-box"><pre class="wrap">
1. Copy files from one directory to another:
  xcopy C:\\Source\\*.* D:\\Destination\\

2. Copy files and subdirectories, including empty ones:
  xcopy C:\\Source\\*.* D:\\Destination\\ /s /e
</pre></div>
      </div>

      <div class="section">
<h2>Additional Information</h2>
<div class="data-box">
  <li>xcopy provides more flexibility than the basic copy command. It can handle copying of subdirectories, including empty ones, and has various switches for controlling its behavior.</li>
  <li>Common switches include /s to copy directories and subdirectories, /e to copy empty directories, and /y to suppress prompting to confirm overwriting files.</li>
  <li>xcopy supports copying files and directories between local drives, network drives, and across the network.</li>
  <li>For a complete list of switches and options, you can use xcopy /? in the Command Prompt.</li>
</div>
</div>

      <div class="section">
<div class="data-box">
xcopy is a powerful command for copying files and directories and is often used in batch scripts and command-line tasks where more control over the copying process is required.
</div>
</div>

<div class="nav-buttons">
<button onclick="navPage('cmd', 'unlock')" class="nav-button">&lt; Previous</button>
</div>
      `
    },
  ],


  java: [
    { name: 'Intro', data: '<p>Java Intro</p>' },
    { name: 'Datatypes', data: '<p>Java Datatypes</p>' },
  ],


  py: [
    { name: 'Intro', data: '<p>Python Intro</p>' },
    { name: 'Datatypes', data: '<p>Python Datatypes</p>' },
  ],
};


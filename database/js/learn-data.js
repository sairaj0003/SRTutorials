const navbarData = {
  columns: [
    { name: 'Data Structures', id: 'ds' },
    { name: 'Command Prompt', id: 'cmd' },
  ],



  ds: [
    { name: 'Introduction', data: `
      <h1>Introduction</h1>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/ds.png" class="data-img">

      <div class="section">
  <div class="data-box">
<li>In the modern world, data and its information is an essential part, where data is just collection of facts or set of values that are in particular format and the information is the processed data.</li>
<li>If the data is not organized effectively, it is very difficult to perform any task on large amount of data. If it is organized effectively then any operation can be performed easily on that data.</li>
<li>If the data is stored in a well-organized way on storage media and in computer's memory then it can be accessed quickly for processing that further reduces the latency and the user is provided a fast response.</li>
<li>A data structure is a particular way of organizing a large amount of data more efficiently in a computer so that any operation on that data becomes easy.</li>
<li>In other words, Data structure is a way of collecting and organizing data in such a way that we can perform operations on these data in an effective way.</li>
<li>Data structures is about rendering data elements in terms of some relationship, for better performance, organization and storage.</li>
<li>The logical or mathematical model for a particular organization of data is termed as a data structure.</li>
<li>In simple words, Data structures are structures programmed to store ordered data, so that various operations can be performed on it easily.</li>
<li>It represents the knowledge of data to be organized in memory. It should be designed and implemented in such a way that it reduces the complexity and increases the efficiency.</li>
<li>Data Structure is useful in representing the real world data and its operations in the computer program.</li>
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
  <div class="data-box">
<p>Based on the organizing method of a data structure, data structures are divided into two types:</p>
<ol>
    <li>Primitive Data Structures (Built-In Data Structures)</li>
    <li>Non-primitive Data Structures (User-defined Data Structures)</li>
</ol>
</p>
  </div>
</div>

      <div class="section">
        <h2>Primitive Data Structures</h2>
  <div class="data-box">
<li>Primitive data structures are those which are the predefined way of storing data by the system. And the set of operations that can be performed on these data are also predefined.</li>
<li>Primitive data structures are char, int, double and float.</li>
<li>Most of the programming languages have built-in support for the primitive data structures.</li>
  </div>
</div>

      <div class="section">
        <h2>Non-primitive Data Structures</h2>
  <div class="data-box">
<li>Non-primitive data structures are more complicated data structures and they are derived from primitive data structures.</li>
<li>Non-primitive data structures are used to store large and connected data. Some example of non-primitive data structures are: Linked List, Tree, Graph, Stack and Queue.</li>
<li>The non-primitive data structures are sub categorized into two ways: <b>Linear data structures</b> and <b>Non-linear data structures</b>.</li>
<li>If a data structure is organizing the data in sequential order then that data structure is called a linear data structure.
</br>Some of the examples are Arrays, Linked Lists, Stacks and Queues.</li>
<li>If a data structure is organizing the data in random order or hierarchical order, not in sequential order, then that data structure is called as non-linear data structure.
</br>Some of the examples are Trees, Graphs, Dictionaries and Heaps.</li>
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
        <tr>
            <th>Characteristic</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Linear Data Structures</td>
            <td>In linear data structures, all the data items are stored in a linear sequence. 
            </br>Example : <b>Arrays </b></td>
        </tr>
        <tr>
            <td>Non-Linear Data Structures</td>
            <td>In Non-Linear data structures, all the data items are stored in random order or hierarchical order. The data Items are not stored in a linear sequence.
            </br>Example : <b>Trees, Dictionaries, Graphs and Heaps</b></td>
        </tr>
        <tr>
            <td>Homogeneous Data Structures</td>
            <td>In Homogeneous data structure, all the data items are of same type. 
            </br>Example : <b>Arrays </b></td>
        </tr>
        <tr>
            <td>Non-Homogeneous Data Structures</td>
            <td>In Non-Homogeneous data structures, all the data items may or may not be of same type. 
            </br>Example : <b>Structures</b></td>
        </tr>
        <tr>
            <td>Static Data Structures</td>
            <td>In Static data structures, the size and structure's associated memory locations are fixed during compile time. 
            </br>Example : <b>Arrays </b></td>
        </tr>
        <tr>
            <td>Dynamic Data Structures</td>
            <td>Dynamic data structures can expand or shrink depending upon the program need and its execution. This expansion and shrinking happens during the program runtime. Also, their associated memory locations can change during program runtime. 
            </br>Example : <b>Linked Lists, Stack using Linked Lists, Queues using Linked List, Trees, Heaps etc.</b></td>
        </tr>
    </tbody>
</table>

      <div class="section">
  <div class="data-box">
<li>All the data structures allow us to perform different operations on data.</li>
<li>Each data structure has advantages and disadvantages compared to other data structures.</li>
<li>One should be able to select the best data structures based on which type of operations are required.</li>
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
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/alg.png" class="data-img">

      <div class="section">
  <div class="data-box">
<li>An <b>Algorithm</b> is a finite set of instructions or logic, written in order, to accomplish a certain predefined task.</li>
<li>An <b>Algorithm</b> is independent of the programming language. An Algorithm is the core logic to solve a given problem.</li>
<li>An <b>Algorithm</b> is expressed generally as <b>flow chart</b> or as an informal high level description called as <b>pseudocode</b></li>
<li><b>Algorithm</b> can be defined as &#8220;a sequence of steps to be performed for getting the desired output for a given input.&#8221;</li>
<li>The sequence of steps of an <b>algorithm</b> can be stated in human readable English statements or <a class="extLink" href="https://en.wikipedia.org/wiki/Pseudocode" target="_blank">pseudo-code</a> (meaning - a notation resembling a simplified programming language).</li>
<li>After the <b>analysis</b> stage, producing an <b>algorithm</b> is the first step in arriving at the solution process.</li>
<li>There may be more than one way to solve a problem, hence there may be more than one <b>algorithms</b> for a given problem.</li>
<li>Before attempting to write an <b>algorithm</b>, one should find out what the expected inputs and outputs are for the given problem.</li>
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
  <div class="data-box">
<li>An algorithm is said to be efficient and fast, if it takes less time to execute and consumes less memory space.</li>
<li>The performance of an algorithm is measured on the basis of following properties:</li>
<ul type="circle">
    <li>Time complexity</li>
    <li>Space complexity</li>
</ul>
<li>Time complexity is a way to represent the amount of time required by the program to run till its completion.</li>
<li>The amount of time taken by the program depends on lot of things like hardware, operating system, number of processors, processor architecture etc.</li>
<li>We do not consider all these factors when analyzing the algorithms, we only consider the number of operations to be executed for the completion of the algorithm.</li>
<li>The reason is very simple because we want the algorithm analysis to be system independent.</li>
<li>Space complexity is the amount of memory space that is required by the algorithm for its execution.</li>
<li>Space complexity is very useful to identify the best algorithm in situations where limited memory is available for the program to run.</li>
<li>An algorithm generally requires space for following:</li>
<ul type="circle">
    <li><b>Instruction space</b>: Space required to store the executable version (Also known as Binary Code) of the program. This space is fixed and depends on the number of instructions in the algorithm.</li>
    <li><b>Data space</b>: Space required to store all the program variables (Constants, Variables, Temporary Variables etc.).</li>
    <li><b>Environment space</b>: Space required to store the environment information needed to resume the suspended function.<b>One heap and one stack is maintained during the program execution.</b></li>
    <li>Heap is the segment where dynamic memory allocation usually takes place.</li>
    <li>Stack is a segment where automatic variables and function call stack is stored.</li>
</ul>
<li>When we are measuring the space complexity analysis of an algorithm, we consider only the data space of the algorithm and ignore the instruction space and environmental space.</li>
<li>That is we will calculate only the memory required to store variables, constants and structures.</li>
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
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array/array1.png" class="data-img">

      <div class="section">
        <h2>Types of Arrays</h2>
        <div class="data-box">
          <div><b>1. One Dimensional Array</b>: An Array represented as a row, where elements are stored one after the other.</div>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array/array2.png" class="data-img">
        </div>

        <div class="data-box">
          <b>2. Multi-Dimensional Array</b>: An array with more than one dimension. It is used to store complex data in the form of tables. <br />
          <div class="indented">
            <li><div><b>Two-Dimensional Array</b>: An Array which can be considered as an array of arrays or as a matrix containing rows and columns.</div>
              <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array/array3.png" class="data-img">
            </li>
            
            <li><div><b>Three-Dimensional Array</b>: An Array which can be considered an array of two-dimensions containing three dimensions.</div>
              <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/array/array4.png" class="data-img">
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
<table>
    <thead>
        <tr>
            <th>Operation</th>
            <th>Best Case</th>
            <th>Average Case</th>
            <th>Worst Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Insertion</th>
            <td>&#937;(N)</td>
            <td>&#920;(N)</td>
            <td>O(N)</td>
        </tr>
        <tr>
            <th>Update</th>
            <td>&#937;(1)</td>
            <td>&#920;(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Traversal</th>
            <td>&#937;(N)</td>
            <td>&#920;(N)</td>
            <td>O(N)</td>
        </tr>
        <tr>
            <th>Searching</th>
            <td>&#937;(1)</td>
            <td>&#920;(N)</td>
            <td>O(N)</td>
        </tr>
    </tbody>
</table>
<li><b>Space  Complexity</b></li> <p>O(N) - Space required to store the array elements.</p>
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
        <div class="data-box">
<li>A list is any information displayed or organized in a logical or linear formation.</li>
<li>In computer science, a <b>list</b> or <b>sequence</b> is an abstract data type that represents a countable number of ordered values, where the same value may occur more than once.</li>
<li>The name <b>list</b> is also used for several concrete data structures that can be used to implement abstract lists, especially linked lists.</li>
<li><b>Lists</b> are typically implemented either as linked lists or as arrays.</li>
<li>Array is a basic abstract data type that holds an ordered collection of items accessible by an integer index.</li>
<li>All the elements of the <b>array</b> are stored at contiguous locations.</li>
<li>Linked list is a data structure that can be used to store linear data of similar types.</li>
<li>Unlike <b>arrays</b> the memory allocation is not continuous.</li>
<li>In <b>linked lists</b>, the memory allocation is <b>dynamic</b> i.e., the memory is allocated when it is needed.</li>
<li>Because of the <b>size</b> of the <b>linked list</b> is never fixed, we can increase or decrease the size of the list at any point in time.</li>
<li>Whereas in <b>array</b>, the memory is statically allocated based on the size of array mentioned in the declaration.</li>
<li>Most of the times the memory allocated to the array is under utilized. The size of the arrays is fixed, so we must know the upper limit on the number of elements in advance.</li>
<li>Also, generally, the allocated memory is equal to the upper limit irrespective of the usage, and in practical uses, the upper limit is rarely reached.</li>
        </div>
      </div>

      <div class="section">
        <h2>Lists Vs Arrays</h2>
          <div class="data-box">
Differences between <b>arrays</b> and <b>lists</b>:
<ol>
<li><b>Fixed Size:</b></li>
  <ul><li>In an <b>array</b>, the memory is allocated at once based on the size mentioned during the array declaration.</li>
  <li>For example, int a [200]; A total memory of <b>200 * 2 = 400</b> bytes of memory is allocated at once (Assuming size of int data type is 2 bytes).</li>
  <li>Where as in a <b>list</b> the memory allocation is <b>dynamic</b>. The size of the list increases as the elements are added to the list.</li>
  </ul>
<li><b>Insertion and Deletion Operations:</b></li>
  <ul><li>In an <b>array</b>, inserting an element into the existing group of elements is expensive as a room should be created for the new element by shifting most of the existing elements.</li>
  <li>In a <b>list</b>, inserting and deleting elements at any is very easy and these operations can be done with in three steps.</li>
  </ul>
<li><b>Cache Locality:</b></li>
  <ul><li><b>Arrays</b> have a better cache locality. Cache locality of the data can make an significant advantage in performance and efficiency.</li>
  </ul>
<li><b>Random Access:</b></li>
  <ul><li>In <b>arrays</b>, random access to the elements is possible through index as the elements are stored in continuous locations.</li>
  <li>In <b>lists</b>, random access is not possible. The elements can only be accessed sequentially.</li>
  </ul>
<li><b>Extra Memory:</b></li>
  <ul><li>In <b>lists</b>, extra memory space for pointer to the <b>next</b> node in the <b>list</b> is required which is not required in <b>arrays</b>.</li>
  </ul>
<li><b>Continuous Memory Locations:</b></li>
  <ul><li>In <b>arrays</b>, the elements are stored at continuous locations whereas in the <b>list</b>, the elements are stored at random locations.</li>
  </ul>
</ol>
          </div>
      </div>

      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Array')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Linked List')" class="nav-button">Next &gt;</button>
      </div>
      ` 
    },
    { name: 'Linked List', data: `
      <h1>Linked List</h1>
      <p>It is a Dynamic Linear Data Structure which has the collection of objects called nodes which are randomly stored in the memory and connected together through the use of links or pointers.  Each node contains two fields - data stored at the location and pointer to the next node in the memory. The first node has a reference pointer called head node. The last node is called the tail node and it points to null indicating the end of the linked list.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/linked-list/ll1.png" class="data-img">

      <div class="section">
        <h2>Types of Linked List</h2>
        <div class="data-box">
          <p><b>1. Singly Linked List</b>: The Linked List in which every node consists of two fields - Data and Pointer to the next node. The last node points to the null indicating the end of the linked list. It can traverse in one direction and that is forward direction. It does not support backward traversal.</p>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/linked-list/ll2.png" class="data-img">
        </div>
        <div class="data-box">
          <p><b>2. Doubly Linked List</b>: The Linked List which contains three fields - data and two pointers. One pointer is pointing to the previous node in the linked list and the other pointer points to the next node in the linked list. It supports the traversal in both directions.The first node’s corresponding previous pointer points to null and the last node’s next pointer points to null.</p>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/linked-list/ll3.png" class="data-img">
        </div>
        <div class="data-box">
          <p><b>3. Circular Linked List</b>: In this the last node is connected to the first node in the linked list. Traversal will go forever until it is broken.</p>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/linked-list/ll4.png" class="data-img">
          <div class="indented">
            <li><b> Circular Singly Linked List</b>: The Circular Linked List with respect to the SinglyLinked List. 
              <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/linked-list/ll5.png" class="data-img">
            </li>
            
            <li><b>Circular Doubly Linked List</b>: The Circular Linked List with respect to the Doubly Linked List. 
              <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/linked-list/ll6.png" class="data-img">
            </li>
          </div>
        </div> 
      </div>

      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
// Singly Linked List or Circular Singly Linked List
class Node {
    int data;
    Node next;

    // Constructor
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
  </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
        <div class="data-box">
          <code><pre class="java-code">
// Doubly Linked List
class DoublyNode {
    int data;
    DoublyNode next, prev;

    // Constructor
    DoublyNode(int data) {
        this.data = data;
        this.next = this.prev = null;
    }
}
  </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>

      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
          <li>It Supports efficient insertion and deletion operations - Elements can be inserted or deleted in constant time. It requires no shifting operations in memory.</li>
          <li>Memory allocation is done one by one for individual elements.</li>
          <li>The Access of elements is Sequential.</li>
          <li>Linked List is more space efficient compared to arrays.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
          <li><b>Insertion</b>: </li>
            <ol>
              <li>At the beginning</li>
              <li>At the specific position</li> 
              <li>At the end</li>
            </ol>
          <li><b>Deletion</b>: </li>
            <ol>
              <li>From the beginning</li> 
              <li>From a specific position</li>
              <li>From the end</li>
            </ol>
          <li><b>Display</b></li>
          <li><b>Searching</b></li>
          <li><b>Length</b></li>
        </div>
      </div>


      <div class="section">
        <h2>Implementation</h2>
        <div class="tabs">
          <button class="tab-button active" onclick="showTabContent(event, 'tab1')">Singly Linked List</button>
          <button class="tab-button" onclick="showTabContent(event, 'tab2')">Doubly Linked List</button>
          <button class="tab-button" onclick="showTabContent(event, 'tab3')">Singly Circular Linked List</button>
          <button class="tab-button" onclick="showTabContent(event, 'tab4')">Doubly Circular Linked List</button>
        </div>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class SinglyLinkedList {
    static Node head;

    public void createList() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of nodes: ");
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            System.out.print("Enter the element: ");
            int element = sc.nextInt();
            insertEnd(element);
        }
    }

    public void insertBegin(int ele) {
        Node nn = new Node(ele);
        if (head == null) {
            head = nn;
        } else {
            nn.next = head;
            head = nn;
        }
    }

    public void insertSpecific(int ele, int p) {
        Node nn = new Node(ele);
        Node tmp = head;
        Node prev = head;
        for (int i = 1; i < p; i++) {
            prev = tmp;
            tmp = tmp.next;
        }
        nn.next = tmp;
        prev.next = nn;
    }

    public void insertEnd(int ele) {
        Node nn = new Node(ele);
        if (head == null) {
            head = nn;
        } else {
            Node tmp = head;
            while (tmp.next != null) {
                tmp = tmp.next;
            }
            tmp.next = nn;
        }
    }

    public void deleteBegin() {
        System.out.println(head.data + " is deleted.");
        head = head.next;
    }

    public void deleteSpecific(int p) {
        Node tmp = head;
        Node prev = null;
        if (p == 1) {
            System.out.println(head.data + " is deleted.");
            head = head.next;
        } else {
            for (int i = 1; i < p; i++) {
                prev = tmp;
                tmp = tmp.next;
            }
            System.out.println(tmp.data + " is deleted.");
            prev.next = tmp.next;
        }
    }

    public void deleteEnd() {
        Node tmp = head;
        Node prev = head;
        while (tmp.next != null) {
            prev = tmp;
            tmp = tmp.next;
        }
        if (tmp == head) {
            System.out.println(head.data + " is deleted.");
            head = null;
        } else {
            System.out.println(tmp.data + " is deleted.");
            prev.next = null;
        }
    }

    public void display() {
        Node tmp = head;
        while (tmp.next != null) {
            System.out.print(tmp.data + " ");
            tmp = tmp.next;
        }
        System.out.println(tmp.data);
    }

    public int search(int ele) {
        int pos = 1;
        Node tmp = head;
        while (tmp.next != null) {
            if (tmp.data == ele) {
                return pos;
            }
            pos++;
            tmp = tmp.next;
        }
        return pos;
    }

    public int length() {
        int len = 1;
        Node tmp = head;
        while (tmp.next != null) {
            tmp = tmp.next;
            len++;
        }
        return len;
    }

    public static void main(String[] args) {
        System.out.println("Singly Linked List Implementation...");
        Scanner sc = new Scanner(System.in);
        int choice, element;
        SinglyLinkedList sll = new SinglyLinkedList();

        do {
            System.out.println("\\nOperations");
            System.out.println("1. Create a list");
            System.out.println("2. Insert at begin");
            System.out.println("3. Insert at specific position");
            System.out.println("4. Insert at end");
            System.out.println("5. Delete at begin");
            System.out.println("6. Delete at specific position");
            System.out.println("7. Delete at end");
            System.out.println("8. Display");
            System.out.println("9. Search");
            System.out.println("10. Length");
            System.out.println("11. Exit");
            System.out.print("Select an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    sll.createList();
                    break;
                case 2:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    sll.insertBegin(element);
                    break;
                case 3:
                    System.out.print("Enter the position: ");
                    int p = sc.nextInt();
                    if (p < sll.length()) {
                        System.out.print("Enter the element: ");
                        element = sc.nextInt();
                        sll.insertSpecific(element, p);
                    } else {
                        System.out.println("Invalid position");
                    }
                    break;
                case 4:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    sll.insertEnd(element);
                    break;
                case 5:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                        break;
                    }
                    sll.deleteBegin();
                    break;
                case 6:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                        break;
                    }
                    System.out.print("Enter the position: ");
                    int ps = sc.nextInt();
                    if (ps < sll.length()) {
                        sll.deleteSpecific(ps);
                    } else {
                        System.out.println("Invalid position");
                    }
                    break;
                case 7:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                        break;
                    }
                    sll.deleteEnd();
                    break;
                case 8:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                        break;
                    }
                    sll.display();
                    break;
                case 9:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                        break;
                    }
                    System.out.print("Enter the element to search: ");
                    element = sc.nextInt();
                    int pos = sll.search(element);
                    System.out.println("Element is found at position " + pos);
                    break;
                case 10:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                        break;
                    }
                    System.out.println("Length of Linked List is " + sll.length());
                    break;
                case 11:
                    System.out.println("Exiting the program.");
                    break;
                default:
                    System.out.println("\\nPlease enter a valid option.");
            }
        } while (choice != 11);
    }
}
  </pre>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
      <pre>
/*
OUTPUT:
Singly Linked List Implementation...

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 1
Enter the number of nodes: 5
Enter the element: 1
Enter the element: 2
Enter the element: 3
Enter the element: 4
Enter the element: 5

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 2
Enter the element: 10

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 8
10 1 2 3 4 5

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 3
Enter the position: 4
Enter the element: 20

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 8
10 1 2 20 3 4 5

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 4
Enter the element: 40

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 8
10 1 2 20 3 4 5 40

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 5
10 is deleted.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 8
1 2 20 3 4 5 40

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 6
Enter the position: 3
20 is deleted.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 8
1 2 3 4 5 40

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 7
40 is deleted.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 9
Enter the element to search: 5
Element is found at position 5

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 8
1 2 3 4 5

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 10
Length of Linked List is 5

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 7
5 is deleted.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 7
4 is deleted.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 7
3 is deleted.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 6
Enter the position: 1
1 is deleted.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 5
2 is deleted.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 5
Linked List is Empty.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 7
Linked List is Empty.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 9
Linked List is Empty.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 10
Linked List is Empty.

Operations
1. Create a list
2. Insert at begin
3. Insert at specific position
4. Insert at end
5. Delete at begin
6. Delete at specific position
7. Delete at end
8. Display
9. Search
10. Length
11. Exit
Select an operation: 11
Exiting the program.
*/
</pre>
      </div>

          <div class="tab-content data-box hidden" id="tab2"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node next;
    Node prev;

    Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

public class DoublyLinkedList {
    static Node head;

    public void insertBegin(int ele) {
        Node nn = new Node(ele);

        if (head == null) {
            head = nn;
        } else {
            nn.next = head;
            head.prev = nn;
            head = nn;
        }
    }

    public void insertSpecific(int ele, int pos) {
        Node nn = new Node(ele);
        Node tmp = head;

        for (int i = 1; i < pos - 1; i++) {
            tmp = tmp.next;
        }

        nn.next = tmp.next;
        nn.prev = tmp;

        if (tmp.next != null)
            tmp.next.prev = nn;

        tmp.next = nn;
    }

    public void insertEnd(int ele) {
        Node nn = new Node(ele);

        if (head == null) {
            head = nn;
        } else {
            Node tmp = head;
            while (tmp.next != null) {
                tmp = tmp.next;
            }
            tmp.next = nn;
            nn.prev = tmp;
        }
    }

    public void deleteBegin() {
        System.out.println(head.data + " is deleted.");
        Node tmp = head;
        head = head.next;
        if (head != null)
            head.prev = null;
        tmp = null;
    }

    public void deleteSpecific(int pos) {
        if (pos == 1) {
            deleteBegin();
            return;
        }

        Node tmp = head;
        for (int i = 1; i < pos; i++) {
            tmp = tmp.next;
        }

        System.out.println(tmp.data + " is deleted.");

        if (tmp.next != null)
            tmp.next.prev = tmp.prev;

        if (tmp.prev != null)
            tmp.prev.next = tmp.next;

        tmp = null;
    }

    public void deleteEnd() {
        Node tmp = head;

        while (tmp.next != null) {
            tmp = tmp.next;
        }

        System.out.println(tmp.data + " is deleted.");

        if (tmp.prev != null)
            tmp.prev.next = null;
        else
            head = null;

        tmp = null;
    }

    public void display() {
        Node tmp = head;
        while (tmp != null) {
            System.out.print(tmp.data + " ");
            tmp = tmp.next;
        }
        System.out.println();
    }
    
    public void reverseDisplay() {
        if (head == null) {
            System.out.println("Linked List is Empty.");
            return;
        }

        Node tmp = head;
        while (tmp.next != null) {
            tmp = tmp.next;
        }

        while (tmp != null) {
            System.out.print(tmp.data + " ");
            tmp = tmp.prev;
        }
        System.out.println();
    }

    public int search(int ele) {
        int pos = 1;
        Node tmp = head;

        while (tmp != null) {
            if (tmp.data == ele)
                return pos;
            pos++;
            tmp = tmp.next;
        }

        return 0;
    }

    public int length() {
        int len = 0;
        Node tmp = head;

        while (tmp != null) {
            len++;
            tmp = tmp.next;
        }

        return len;
    }

    public static void main(String[] args) {
        System.out.println("Doubly Linked List...");
        Scanner sc = new Scanner(System.in);
        int choice, element;
        DoublyLinkedList dll = new DoublyLinkedList();

        do {
            System.out.println("\\nOperations");
            System.out.println("1. Insert at begin");
            System.out.println("2. Insert at specific position");
            System.out.println("3. Insert at end");
            System.out.println("4. Delete at begin");
            System.out.println("5. Delete at specific position");
            System.out.println("6. Delete at end");
            System.out.println("7. Display");
            System.out.println("8. Reverse Display");
            System.out.println("9. Search");
            System.out.println("10. Length");
            System.out.println("11. Exit");
            System.out.print("Select an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    dll.insertBegin(element);
                    break;
                case 2:
                    System.out.print("Enter the position: ");
                    int p = sc.nextInt();
                    if (p == 1) {
                        System.out.print("Enter the element: ");
                        element = sc.nextInt();
                        dll.insertBegin(element);
                    } else if ((p <= dll.length()) && (p > 0)) {
                        System.out.print("Enter the element: ");
                        element = sc.nextInt();
                        dll.insertSpecific(element, p);
                    } else if (p == dll.length() + 1) {
                        System.out.print("Enter the element: ");
                        element = sc.nextInt();
                        dll.insertEnd(element);
                    } else {
                        System.out.println("Invalid position");
                    }
                    break;
                case 3:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    dll.insertEnd(element);
                    break;
                case 4:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                    } else {
                        dll.deleteBegin();
                    }
                    break;
                case 5:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                    } else {
                        System.out.print("Enter the position: ");
                        int ps = sc.nextInt();
                        if ((ps <= dll.length()) && (ps > 0)) {
                            dll.deleteSpecific(ps);
                        } else {
                            System.out.println("Invalid position");
                        }
                    }
                    break;
                case 6:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                    } else {
                        dll.deleteEnd();
                    }
                    break;
                case 7:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                    } else {
                        dll.display();
                    }
                    break;
                case 8:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                    } else {
                        dll.reverseDisplay();
                    }
                    break;
                case 9:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                    } else {
                        System.out.print("Enter the element to search: ");
                        element = sc.nextInt();
                        int pos = dll.search(element);
                        if (pos > 0) {
                            System.out.println("Element is found at position " + pos);
                        } else {
                            System.out.println("Element not found");
                        }
                    }
                    break;
                case 10:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                    } else {
                        int len = dll.length();
                        System.out.println("Length of Linked List is " + len);
                    }
                    break;
                case 11:
                    System.out.println("Exiting the program.");
                    break;
                default:
                    System.out.println("\\nPlease enter a valid option.");
            }

        } while (choice != 11);
    }
}
  </pre>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Doubly Linked List...

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 1
Enter the element: 1

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 3
Enter the element: 3

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 2
Enter the position: 2
Enter the element: 2

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 7
1 2 3

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 8
3 2 1

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 9
Enter the element to search: 2
Element is found at position 2

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 10
Length of Linked List is 3

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 4
1 is deleted.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 5
Enter the position: 2
3 is deleted.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 6
2 is deleted.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 7
Linked List is Empty.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 11
Exiting the program.
*/
</pre>
    </div>

        <div class="tab-content data-box hidden" id="tab3"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class SinglyCircularLinkedList {
    static Node head = null;
    static Node tail = null;

    public void insertBegin(int ele) {
        Node nn = new Node(ele);
        if (head == null) {
            head = tail = nn;
            tail.next = head;
        } else {
            nn.next = head;
            head = nn;
            tail.next = head;
        }
    }

    public void insertEnd(int ele) {
        Node nn = new Node(ele);
        if (head == null) {
            head = tail = nn;
            tail.next = head;
        } else {
            tail.next = nn;
            tail = nn;
            tail.next = head;
        }
    }

    public void insertSpecific(int ele, int p) {
        if (p == 1) {
            insertBegin(ele);
        } else {
            Node nn = new Node(ele);
            Node tmp = head;
            for (int i = 1; i < p - 1; i++) {
                tmp = tmp.next;
            }
            nn.next = tmp.next;
            tmp.next = nn;
            if (tmp == tail) {
                tail = nn;
            }
        }
    }

    public void deleteBegin() {
        if (head == null) {
            System.out.println("List is empty.");
            return;
        }
        System.out.println(head.data + " is deleted.");
        if (head == tail) {
            head = tail = null;
        } else {
            head = head.next;
            tail.next = head;
        }
    }

    public void deleteEnd() {
        if (head == null) {
            System.out.println("List is empty.");
            return;
        }
        if (head == tail) {
            System.out.println(head.data + " is deleted.");
            head = tail = null;
        } else {
            Node tmp = head;
            while (tmp.next != tail) {
                tmp = tmp.next;
            }
            System.out.println(tail.data + " is deleted.");
            tmp.next = head;
            tail = tmp;
        }
    }

    public void deleteSpecific(int p) {
        if (p == 1) {
            deleteBegin();
        } else {
            Node tmp = head;
            Node prev = null;
            for (int i = 1; i < p; i++) {
                prev = tmp;
                tmp = tmp.next;
            }
            System.out.println(tmp.data + " is deleted.");
            prev.next = tmp.next;
            if (tmp == tail) {
                tail = prev;
            }
        }
    }

    public void display() {
        if (head == null) {
            System.out.println("List is empty.");
            return;
        }
        Node tmp = head;
        do {
            System.out.print(tmp.data + " ");
            tmp = tmp.next;
        } while (tmp != head);
        System.out.println();
    }

    public int search(int ele) {
        if (head == null) return 0;

        Node tmp = head;
        int pos = 1;
        do {
            if (tmp.data == ele) return pos;
            tmp = tmp.next;
            pos++;
        } while (tmp != head);

        return 0;
    }

    public int length() {
        if (head == null) return 0;
        int len = 0;
        Node tmp = head;
        do {
            len++;
            tmp = tmp.next;
        } while (tmp != head);
        return len;
    }

    public static void main(String[] args) {
        System.out.println("Singly Circular Linked List...");
        Scanner sc = new Scanner(System.in);
        int choice, element;
        SinglyCircularLinkedList scll = new SinglyCircularLinkedList();

        do {
            System.out.println("\\nOperations");
            System.out.println("1. Insert at begin");
            System.out.println("2. Insert at specific position");
            System.out.println("3. Insert at end");
            System.out.println("4. Delete at begin");
            System.out.println("5. Delete at specific position");
            System.out.println("6. Delete at end");
            System.out.println("7. Display");
            System.out.println("8. Search");
            System.out.println("9. Length");
            System.out.println("10. Exit");
            System.out.print("Select an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    scll.insertBegin(element);
                    break;
                case 2:
                    System.out.print("Enter the position: ");
                    int p = sc.nextInt();
                    if (p < 1 || p > scll.length() + 1) {
                        System.out.println("Invalid position.");
                        break;
                    }
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    scll.insertSpecific(element, p);
                    break;
                case 3:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    scll.insertEnd(element);
                    break;
                case 4:
                    scll.deleteBegin();
                    break;
                case 5:
                    System.out.print("Enter the position: ");
                    int ps = sc.nextInt();
                    if (ps < 1 || ps > scll.length()) {
                        System.out.println("Invalid position.");
                        break;
                    }
                    scll.deleteSpecific(ps);
                    break;
                case 6:
                    scll.deleteEnd();
                    break;
                case 7:
                    scll.display();
                    break;
                case 8:
                    System.out.print("Enter the element to search: ");
                    element = sc.nextInt();
                    int pos = scll.search(element);
                    if (pos > 0)
                        System.out.println("Element found at position " + pos);
                    else
                        System.out.println("Element not found");
                    break;
                case 9:
                    System.out.println("Length of Linked List is " + scll.length());
                    break;
                case 10:
                    System.out.println("Exiting the program.");
                    break;
                default:
                    System.out.println("Please enter a valid option.");
            }
        } while (choice != 10);
    }
}
  </pre>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Singly Circular Linked List...

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 1
Enter the element: 1

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 2
Enter the position: 2
Enter the element: 2

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 3
Enter the element: 3

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 7
1 2 3

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 8
Enter the element to search: 2
Element found at position 2

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 9
Length of Linked List is 3

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 4
1 is deleted.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 6
3 is deleted.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 5
Enter the position: 1
2 is deleted.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Search
9. Length
10. Exit
Select an operation: 10
Exiting the program.
*/
</pre>
    </div>

        <div class="tab-content data-box hidden" id="tab4"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node next;
    Node prev;

    Node(int data) {
        this.data = data;
        this.next = this.prev = null;
    }
}

public class DoublyCircularLinkedList {
    static Node head = null;
    static Node tail = null;

    public void insertBegin(int ele) {
        Node nn = new Node(ele);
        if (head == null) {
            head = tail = nn;
            head.next = head.prev = head;
        } else {
            nn.next = head;
            nn.prev = tail;
            head.prev = nn;
            tail.next = nn;
            head = nn;
        }
    }

    public void insertEnd(int ele) {
        Node nn = new Node(ele);
        if (head == null) {
            head = tail = nn;
            head.next = head.prev = head;
        } else {
            tail.next = nn;
            nn.prev = tail;
            nn.next = head;
            head.prev = nn;
            tail = nn;
        }
    }

    public void insertSpecific(int ele, int pos) {
        if (pos == 1) {
            insertBegin(ele);
            return;
        }
        Node nn = new Node(ele);
        Node tmp = head;

        for (int i = 1; i < pos - 1; i++) {
            tmp = tmp.next;
        }

        nn.next = tmp.next;
        nn.prev = tmp;
        tmp.next.prev = nn;
        tmp.next = nn;

        if (tmp == tail) {
            tail = nn;
        }
    }

    public void deleteBegin() {
        if (head == null) {
            System.out.println("Linked List is Empty.");
            return;
        }
        System.out.println(head.data + " is deleted.");
        if (head == tail) {
            head = tail = null;
        } else {
            head = head.next;
            head.prev = tail;
            tail.next = head;
        }
    }

    public void deleteEnd() {
        if (head == null) {
            System.out.println("Linked List is Empty.");
            return;
        }
        System.out.println(tail.data + " is deleted.");
        if (head == tail) {
            head = tail = null;
        } else {
            tail = tail.prev;
            tail.next = head;
            head.prev = tail;
        }
    }

    public void deleteSpecific(int pos) {
        if (pos == 1) {
            deleteBegin();
            return;
        }

        Node tmp = head;
        for (int i = 1; i < pos; i++) {
            tmp = tmp.next;
        }

        System.out.println(tmp.data + " is deleted.");

        tmp.prev.next = tmp.next;
        tmp.next.prev = tmp.prev;

        if (tmp == tail) {
            tail = tmp.prev;
        }
    }

    public void display() {
        if (head == null) {
            System.out.println("Linked List is Empty.");
            return;
        }
        Node tmp = head;
        do {
            System.out.print(tmp.data + " ");
            tmp = tmp.next;
        } while (tmp != head);
        System.out.println();
    }

    public void reverseDisplay() {
        if (head == null) {
            System.out.println("Linked List is Empty.");
            return;
        }
        Node tmp = tail;
        do {
            System.out.print(tmp.data + " ");
            tmp = tmp.prev;
        } while (tmp != tail);
        System.out.println();
    }

    public int search(int ele) {
        if (head == null) return 0;

        Node tmp = head;
        int pos = 1;
        do {
            if (tmp.data == ele) return pos;
            tmp = tmp.next;
            pos++;
        } while (tmp != head);

        return 0;
    }

    public int length() {
        if (head == null) return 0;

        int len = 0;
        Node tmp = head;
        do {
            len++;
            tmp = tmp.next;
        } while (tmp != head);
        return len;
    }

    public static void main(String[] args) {
        System.out.println("Doubly Circular Linked List...");
        Scanner sc = new Scanner(System.in);
        int choice, element;
        DoublyCircularLinkedList dcll = new DoublyCircularLinkedList();

        do {
            System.out.println("\\nOperations");
            System.out.println("1. Insert at begin");
            System.out.println("2. Insert at specific position");
            System.out.println("3. Insert at end");
            System.out.println("4. Delete at begin");
            System.out.println("5. Delete at specific position");
            System.out.println("6. Delete at end");
            System.out.println("7. Display");
            System.out.println("8. Reverse Display");
            System.out.println("9. Search");
            System.out.println("10. Length");
            System.out.println("11. Exit");
            System.out.print("Select an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    dcll.insertBegin(element);
                    break;
                case 2:
                    System.out.print("Enter the position: ");
                    int p = sc.nextInt();
                    if (p == 1) {
                        System.out.print("Enter the element: ");
                        element = sc.nextInt();
                        dcll.insertBegin(element);
                    } else if (p == dcll.length() + 1) {
                        System.out.print("Enter the element: ");
                        element = sc.nextInt();
                        dcll.insertEnd(element);
                    } else if ((p > 1) && (p <= dcll.length())) {
                        System.out.print("Enter the element: ");
                        element = sc.nextInt();
                        dcll.insertSpecific(element, p);
                    } else {
                        System.out.println("Invalid position");
                    }
                    break;
                case 3:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    dcll.insertEnd(element);
                    break;
                case 4:
                    dcll.deleteBegin();
                    break;
                case 5:
                    if (head == null) {
                        System.out.println("Linked List is Empty.");
                    } else {
                        System.out.print("Enter the position: ");
                        int ps = sc.nextInt();
                        if ((ps <= dcll.length()) && (ps > 0)) {
                            dcll.deleteSpecific(ps);
                        } else {
                            System.out.println("Invalid position");
                        }
                    }
                    break;
                case 6:
                    dcll.deleteEnd();
                    break;
                case 7:
                    dcll.display();
                    break;
                case 8:
                    dcll.reverseDisplay();
                    break;
                case 9:
                    System.out.print("Enter the element to search: ");
                    element = sc.nextInt();
                    int pos = dcll.search(element);
                    if (pos > 0) {
                        System.out.println("Element found at position " + pos);
                    } else {
                        System.out.println("Element not found");
                    }
                    break;
                case 10:
                    System.out.println("Length of Linked List is " + dcll.length());
                    break;
                case 11:
                    System.out.println("Exiting the program.");
                    break;
                default:
                    System.out.println("Please enter a valid option.");
            }
        } while (choice != 11);
    }
}
  </pre>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Doubly Circular Linked List...

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 1
Enter the element: 1

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 3
Enter the element: 3

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 2
Enter the position: 2
Enter the element: 2

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 7
1 2 3

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 8
3 2 1

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 9
Enter the element to search: 2
Element found at position 2

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 10
Length of Linked List is 3

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 6
3 is deleted.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 5
Enter the position: 2
2 is deleted.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 4
1 is deleted.

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 10
Length of Linked List is 0

Operations
1. Insert at begin
2. Insert at specific position
3. Insert at end
4. Delete at begin
5. Delete at specific position
6. Delete at end
7. Display
8. Reverse Display
9. Search
10. Length
11. Exit
Select an operation: 11
Exiting the program.
*/
</pre>
    </div>

        </code>
          </div>


      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Dynamic Data Storage</li>
<li>It is used to implement Stack, Queue, Deque sparse matrices and adjacency list for graphs.</li>
<li>Dynamic Memory Allocation in OS and Compilers.</li>
<li>Manipulation of polynomials.</li>
<li>Arithmetic Operation on long integers.</li>
<li>Doubly Linked List is used to keep track of most recently used items while performing LRU.</li>
<li>Used in algorithms which require frequent insertion and deletion operations.</li>
<li>Used in memory management, process scheduling and file system.</li>
<li>The list of songs in the music player are linked to the previous and next songs.</li>
<li>In a web browser, previous and next web page URLs can be linked through the previous and next buttons (Doubly Linked List)</li>
<li>In image viewer, the previous and next images can be linked with the help of the previous and next buttons (Doubly Linked List)</li>
<li>Circular Linked Lists can be used to implement things in a round manner where we go to every element one by one.</li>
<li>Linked lists are preferred over arrays for implementations of Queue and Deque data structures because of fast deletions (or insertions) from the front of the linked lists.</li>
        </div>
      </div>
      
      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Slow Access Time.</li>
<li>Pointers or References make them complex and difficult to debug and maintain.</li>
<li>High Overhead.</li>
<li>As memory is non-contiguous, they are cache inefficient.</li>
        </div>
      </div>

      <div class="section">
        <h2>Time Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr>
            <th>Operation</th>
            <th>Best Case</th>
            <th>Worst Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Insertion</th>
            <td>O(1)</td>
            <td>O(N)</td>
        </tr>
        <tr>
            <th>Deletion</th>
            <td>O(1)</td>
            <td>O(N)</td>
        </tr>
        <tr>
            <th>Traversal/Display</th>
            <td>O(N)</td>
            <td>O(N)</td>
        </tr>
        <tr>
            <th>Search</th>
            <td>O(1)</td>
            <td>O(N)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>

      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
          <li>NullPointerException</li>
          <li>IndexOutOfBoundsException</li>
          <li>NoSuchElementException</li>
          <li>UnsupportedOperationException</li>
          <li>ClassCastException</li>
          <li>ConcurrentModificationException</li>
          <li>IllegalArgumentException</li>
        </div>
      </div>
      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Lists')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Stack')" class="nav-button">Next &gt;</button>
      </div>
      
` 
    },
    { name: 'Stack', data: `
      <h1>Stack</h1>
      <p>Stack is a linear data structure. It is based on the <b>LIFO</b> (<b>L</b>ast <b>I</b>n <b>F</b>irst <b>O</b>ut) principle.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/stack/s1.png" class="data-img">

      <div class="section">
        <h2>LIFO (Last In First Out)</h2>
        <div class="data-box">
<li>The order in which insertions and deletions are allowed is called <b>LIFO</b> (<b>L</b>ast <b>I</b>n <b>F</b>irst <b>O</b>ut) or <b>FILO</b> (<b>F</b>irst <b>I</b>n <b>L</b>ast <b>O</b>ut) i.e. the element that is inserted in the last is the first to come out or the element that is inserted first is the last to come out.</li>
<li>Both insertions and deletions to the stack are done only on one end called the top of the stack.</li>
<li>A Stack can be visualised as plates kept one over the other in a college canteen. Adding a plate or removing a plate happens only on the top. The plate on the top is the first to be removed and the plate that is put first is the last to be removed.</li>
<p><b>Note</b>: A stack is said to be in Overflow state when it is completely full and is said to be in Underflow state if the stack is completely empty.</p>
        </div>
      </div>

      <div class="section">
        <h2>Types of Stack</h2>
        <div class="data-box">
            <li><b>Fixed Size Stack </b>: Has a fixed size and cannot grow or shrink dynamically. It is implemented using Array. </li>
            <li><b>Dynamic Size Stack </b>: Has a dynamic size and can grow or shrink dynamically. It is implemented using Linked List.</li>
        </div>
      </div>

      <div class="section">
      <h2>Node Structure</h2>
      <div class="data-box">
        <code><pre class="java-code">
class StackNode {
    int data;
    StackNode next;
    
    StackNode(int data) {
        this.data = data;
        this.next = null;
    }
}
        </pre></code>
        <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
      </div>
    </div>

      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
          <li>A pointer to the top of the stack is maintained.</li>
          <li>Follows LIFO principle.</li>
          <li>We can access the elements only on the top of the stack.</li>
          <li>If we try to insert an element when the stack is full, an overflow condition occurs. And if we try to remove an element when the stack is empty, an underflow condition occurs.</li>
          <li>When implemented using arrays it is easy to implement and memory is saved as there is no involvement of pointers.</li>
          <li>Stacks are simple and easy to understand. Thus used in a wide range of applications.</li>
          <li>Provides efficient access to elements.</li>
          <li>Stacks are memory efficient.</li>
        </div>
      </div>

      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
          <li><b>push()</b>: Inserts an element to the top of the stack. It generates a Stack overflow error if there is no memory space available for inserting the element.</li>
          <li><b>pop()</b>: Removes an element from the top of the stack. It generates a Stack underflow error if there are no elements in the stack to be removed.</li>
          <li><b>peek()</b>: Returns the top most element of the stack.</li>
          <li><b>isEmpty()</b>: Returns true if stack is empty else returns false.</li>
          <li><b>isFull()</b>: Returns true if the stack is full else returns false.</li>
          <li><b>display()</b>: Used to display the elements in the stack.</li>
        </div>
      </div>

      <div class="section">
  <h2>Implementation</h2>
  <div class="tabs">
    <button class="tab-button active" onclick="showTabContent(event, 'tab1')">Using Array</button>
    <button class="tab-button" onclick="showTabContent(event, 'tab2')">Using Linked List</button>
  </div>
  <code>
    <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

public class StackArray {
    private int[] stack;
    private int top;
    private int size;

    StackArray() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the stack: ");
        size = sc.nextInt();
        stack = new int[size];
        top = -1;
    }

    public void push(int ele) {
        stack[++top] = ele;
    }

    public void pop() {
        System.out.println(stack[top] + " is popped out.");
        --top;
    }

    public void peek() {
        System.out.println(stack[top] + " is the topmost element.");
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public boolean isFull() {
        return top == size - 1;
    }

    public void display() {
        for (int i = 0; i <= top; i++) {
            System.out.print(stack[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        System.out.println("Array Implementation of Stack...");
        Scanner sc = new Scanner(System.in);
        StackArray sa = new StackArray();
        int choice, element;

        do {
            System.out.println("\\nOperations");
            System.out.println("1. Push");
            System.out.println("2. Pop");
            System.out.println("3. Peek");
            System.out.println("4. isEmpty");
            System.out.println("5. isFull");
            System.out.println("6. Display");
            System.out.println("7. Exit");
            System.out.print("Select an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    if (sa.isFull()) {
                        System.out.println("Stack Overflow.");
                    } else {
                        sa.push(element);
                    }
                    break;
                case 2:
                    if (sa.isEmpty()) {
                        System.out.println("Stack Underflow.");
                    } else {
                        sa.pop();
                    }
                    break;
                case 3:
                    if (sa.isEmpty()) {
                        System.out.println("Stack is Empty.");
                    } else {
                        sa.peek();
                    }
                    break;
                case 4:
                    System.out.println(sa.isEmpty());
                    break;
                case 5:
                    System.out.println(sa.isFull());
                    break;
                case 6:
                    if (sa.isEmpty()) {
                        System.out.println("Stack is Empty.");
                    } else {
                        sa.display();
                    }
                    break;
                case 7:
                    System.out.println("Exiting the program.");
                    break;
                default:
                    System.out.println("\\nPlease enter a valid option.");
            }
        } while (choice != 7);
    }
}
  </pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Array Implementation of Stack...
Enter the size of the stack: 3

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 1
Enter the element: 1

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 1
Enter the element: 2

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 1
Enter the element: 3

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 1
Enter the element: 4
Stack Overflow.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 6
1 2 3

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 3
3 is peek or top most element.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 4
false

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 5
true

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 2
3 is popped out.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 2
2 is popped out.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 2
1 is popped out.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 2
Stack Underflow.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 6
Stack is Empty.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 3
Stack is Empty.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Select an operation: 7
Exiting the program.
*/
</pre>
    </div>

    <div class="tab-content data-box hidden" id="tab2"><pre class="java-code">
import java.util.Scanner;

class StackNode {
    int data;
    StackNode next;

    StackNode(int data) {
        this.data = data;
        this.next = null;
    }
}

public class StackLinkedList {
    StackNode head;

    public void push(int ele) {
        if (head == null) {
            head = new StackNode(ele);
        } else {
            StackNode newnode = new StackNode(ele);
            newnode.next = head;
            head = newnode;
        }
    }

    public void pop() {
        StackNode tmp = head;
        System.out.println(tmp.data + " is popped out.");
        head = head.next;
        tmp = null;
    }

    public void peek() {
        StackNode tmp = head;
        System.out.println(tmp.data + " is the topmost element.");
    }

    public boolean isEmpty() {
        return head == null;
    }

    public void display() {
        StackNode curr = head;
        while (curr != null) {
            System.out.print(curr.data + " ");
            curr = curr.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        System.out.println("LinkedList Implementation of Stack...");
        Scanner sc = new Scanner(System.in);
        StackLinkedList s = new StackLinkedList();
        int choice, element;

        do {
            System.out.println("\\nOperations");
            System.out.println("1. Push");
            System.out.println("2. Pop");
            System.out.println("3. Peek");
            System.out.println("4. isEmpty");
            System.out.println("5. Display");
            System.out.println("6. Exit");
            System.out.print("Select an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter the element: ");
                    element = sc.nextInt();
                    s.push(element);
                    break;
                case 2:
                    if (s.isEmpty()) {
                        System.out.println("Stack Underflow.");
                    } else {
                        s.pop();
                    }
                    break;
                case 3:
                    if (s.isEmpty()) {
                        System.out.println("Stack is Empty.");
                    } else {
                        s.peek();
                    }
                    break;
                case 4:
                    System.out.println(s.isEmpty());
                    break;
                case 5:
                    if (s.isEmpty()) {
                        System.out.println("Stack is Empty.");
                    } else {
                        s.display();
                    }
                    break;
                case 6:
                    System.out.println("Exiting the program.");
                    break;
                default:
                    System.out.println("\\nPlease enter a valid option.");
            }
        } while (choice != 6);
    }
}
  </pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
LinkedList Implementation of Stack...

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 1
Enter the element: 10

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 1
Enter the element: 20

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 1
Enter the element: 30

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 5
30 20 10

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 3
30 is the peek or the top most element.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 4
false

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 2
30 is popped out.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 2
20 is popped out.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 2
10 is popped out.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 2
Stack Underflow.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 3
Stack is Empty.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 4
true

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 5
Stack is Empty.

Operations
1. Push
2. Pop
3. Peek
4. isEmpty
5. Display
6. Exit
Select an operation: 6
Exiting the program.
*/
</pre>
    </div>
  </code>
</div>
      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
          <li>Pile of plates kept on top of each other.</li>
          <li>Used in Function calls.</li>
          <li>Used in expression evaluation: Infix to Postfix or Infix to Prefix Conversion.</li>
          <li>To redo / undo the features in places like editors, photoshop.</li>
          <li>Used in forward and backward features in web browsers.</li>
          <li>Stack is used as the primary memory management for running processes in any modern computer. </li>
        </div>
      </div>

      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
          <li>Using Array implementation, it cannot grow or shrink in its size. We must define the stack size beforehand.</li>
          <li>Using Linked List implementation, it requires extra memory due to the use of pointers and we cannot access the elements randomly.</li>
          <li>Elements cannot be retrieved or modified that are in the middle of the stack. Stacks do not allow for random access of elements.</li>
          <li>Has limited capacity.</li>
        </div>
      </div>

      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr>
            <th>Operations</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>push()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>pop()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>peek()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>isEmpty()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>isFull()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>display()</th>
            <td>O(N)</td>
            <td>O(N)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>

      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
          <li>IndexOutOfBoundsException</li>
          <li>EmptyStackException</li>
        </div>
      </div>

      <div class="section">
        <h2>Example</h2>
        <div class="data-box">
            <b>Understanding conversion of infix to postfix expression :</b>
            <ol>
              <li>The order of operands do not change when we convert an expression from infix notation to postfix notation. For example: given 2+4*6 as the infix expression, the postfix expression is 246*+. Observe that the operands 2,4 and 6 are in the same order.</li>
              <li>There are no parentheses in the postfix expression. So they are not printed to the postfix expression. For Example : given (2+4)*6 as the infix expression, the postfix expression is 24+6*. Observe that the parentheses are removed from the postfix notations.</li>
              <li>The order of the operators in the postfix notation is the actual order that is used for evaluation. </li>
            </ol>
            <b>Stack operations to convert the infix expression to postfix expression step by step:</b>
            <p>Example Expression : A * B - (C + D) + E</p>
            <table>
              <thead>
                  <tr>
                      <th>Token from input</th>
                      <th>Operations performed</th>
                      <th>Stack diagram</th>
                      <th>Postfix Expression</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>A</td>
                      <td>Print A to the postfix expression</td>
                      <td>Empty</td>
                      <td>A</td>
                  </tr>
                  <tr>
                      <td>*</td>
                      <td>Push *</td>
                      <td>*</td>
                      <td>A</td>
                  </tr>
                  <tr>
                      <td>B</td>
                      <td>Print B to the postfix expression</td>
                      <td>*</td>
                      <td>AB</td>
                  </tr>
                  <tr>
                      <td>-</td>
                      <td>Pop and print * because * has more precedence than - and push -</td>
                      <td>-</td>
                      <td>AB*</td>
                  </tr>
                  <tr>
                      <td>(</td>
                      <td>Push ( to the stack</td>
                      <td>(</br>-</td>
                      <td>AB*</td>
                  </tr>
                  <tr>
                      <td>C</td>
                      <td>Print C to the postfix expression</td>
                      <td>(</br>-</td>
                      <td>AB*C</td>
                  </tr>
                  <tr>
                      <td>+</td>
                      <td>Nothing to pop as C is on the top of stack. push +</td>
                      <td>+</br>(</br>-</td>
                      <td>AB*C</td>
                  </tr>
                  <tr>
                      <td>D</td>
                      <td>Print D to the postfix expression</td>
                      <td>+</br>(</br>-</td>
                      <td>AB*CD</td>
                  </tr>
                  <tr>
                      <td>)</td>
                      <td>Pop and print until ( is encountered. Pop ( but don't print (</td>
                      <td>-</td>
                      <td>AB*CD+</td>
                  </tr>
                  <tr>
                      <td>+</td>
                      <td>Pop and print - as - has the same precedence as +. Push +</td>
                      <td>+</td>
                      <td>AB*CD+-</td>
                  </tr>
                  <tr>
                      <td>E</td>
                      <td>Print E to the postfix expression</td>
                      <td>+</td>
                      <td>AB*CD+-E</td>
                  </tr>
                  <tr>
                      <td>End of infix expression</td>
                      <td>Pop all the elements till empty.</td>
                      <td>Empty</td>
                      <td>AB*CD+-E+</td>
                  </tr>
              </tbody>
          </table>
          </div>
        </div>
      </div>
      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Linked List')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Queue')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Queue', data: `
      <h1>Queue</h1>
      <p>A <b>Queue</b> is a linear data structure that follows the <b>FIFO</b> (<b>F</b>irst <b>I</b>n <b>F</b>irst <b>O</b>ut) principle.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/queue/q1.png" class="data-img">



      <div class="section">
        <h2>FIFO (First In First Out)</h2>
        <div class="data-box">
<p>In a FIFO system, the first element inserted is the first to be removed, and the last inserted is the last to be removed. Think of a queue at a movie theater — the person who enters the line first gets served first.</p>
<ul>
  <li>Insertions occur at the <b>rear (tail)</b> of the queue.</li>
  <li>Deletions occur from the <b>front (head)</b> of the queue.</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Overflow & Underflow</h2>
        <div class="data-box">
<li>A <b>Queue Overflow</b> occurs when trying to insert into a full queue.</li>
<li>A <b>Queue Underflow</b> occurs when trying to remove from an empty queue.</li>
        </div>
      </div>
      


      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li>A queue of people at a railway ticket counter — the first person in the line is the first to get the ticket and leave the line.</li>
        </div>
      </div>
      


      <div class="section">
        <h2>Types</h2>
        <div class="data-box">
<ol>
  <li>Linear Queue</li>
      <ul>
        <li>Fixed size</li>
        <li>Simple insertion at rear, deletion at front</li>
        <li>Inefficient due to unused space at the front</li>
      </ul>
  <li>Circular Queue</li>
      <ul>
        <li>Overcomes inefficiency of linear queue</li>
        <li>Rear wraps around to reuse empty space</li>
      </ul>
  <li>Deque (Double Ended Queue)</li>
      <ul>
        <li>Insertion and deletion at both ends</li>
      </ul>
  <li>Priority Queue</li>
      <ul>
        <li>Elements are dequeued based on priority rather than order</li>
      </ul>
</ol>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Follows <b>FIFO</b> principle.</li>
<li>Maintains two pointers: <b>front</b> and <b>rear</b>.</li>
<li>Insertion (enqueue) happens at the rear.</li>
<li>Deletion (dequeue) happens at the front.</li>
<li>Can be implemented using arrays, linked lists, or Java Collections.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>enqueue()</b>: Adds an element at the rear</li>
<li><b>dequeue()</b>: Removes an element from the front</li>
<li><b>peek()</b>: Returns the front element without removing it</li>
<li><b>isEmpty()</b>: Checks if the queue is empty</li>
<li><b>isFull()</b>: Checks if the queue is full (for arrays)</li>
<li><b>display()</b>: Prints the elements of the queue</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <div class="tabs">
          <button class="tab-button active" onclick="showTabContent(event, 'tab1')">Using Array</button>
          <button class="tab-button" onclick="showTabContent(event, 'tab2')">Using Linked List</button>
        </div>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

public class QueueArray {
    int[] queue;
    int front, rear, size;

    QueueArray(int capacity) {
        queue = new int[capacity];
        size = capacity;
        front = rear = -1;
    }

    public boolean isEmpty() {
        return front == -1;
    }

    public boolean isFull() {
        return rear == size - 1;
    }

    public void enqueue(int ele) {
        if (isFull()) {
            System.out.println("Queue Overflow.");
            return;
        }
        if (isEmpty()) {
            front = 0;
        }
        queue[++rear] = ele;
    }

    public void dequeue() {
        if (isEmpty()) {
            System.out.println("Queue Underflow.");
            return;
        }
        System.out.println(queue[front] + " is dequeued.");
        if (front == rear) {
            front = rear = -1;
        } else {
            front++;
        }
    }

    public void peek() {
        if (isEmpty()) {
            System.out.println("Queue is Empty.");
            return;
        }
        System.out.println(queue[front] + " is at the front.");
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is Empty.");
            return;
        }
        for (int i = front; i <= rear; i++) {
            System.out.print(queue[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of queue: ");
        int capacity = sc.nextInt();
        QueueArray qa = new QueueArray(capacity);
        int choice, ele;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Enqueue");
            System.out.println("2. Dequeue");
            System.out.println("3. Peek");
            System.out.println("4. isEmpty");
            System.out.println("5. isFull");
            System.out.println("6. Display");
            System.out.println("7. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    qa.enqueue(ele);
                    break;
                case 2:
                    qa.dequeue();
                    break;
                case 3:
                    qa.peek();
                    break;
                case 4:
                    System.out.println(qa.isEmpty());
                    break;
                case 5:
                    System.out.println(qa.isFull());
                    break;
                case 6:
                    qa.display();
                    break;
                case 7:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 7);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter size of queue: 3

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 1
Enter element: 1

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 1
Enter element: 2

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 1
Enter element: 3

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 4
false

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 5
true

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 6
1 2 3

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 3
1 is at the front.

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 2
1 is dequeued.

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 2
2 is dequeued.

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 7
Exiting...
*/
</pre>
          </div>

          <div class="tab-content data-box hidden" id="tab2"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class QueueLinkedList {
    Node front, rear;

    public boolean isEmpty() {
        return front == null;
    }

    public void enqueue(int ele) {
        Node newNode = new Node(ele);
        if (rear == null) {
            front = rear = newNode;
            return;
        }
        rear.next = newNode;
        rear = newNode;
    }

    public void dequeue() {
        if (isEmpty()) {
            System.out.println("Queue Underflow.");
            return;
        }
        System.out.println(front.data + " is dequeued.");
        front = front.next;
        if (front == null) {
            rear = null;
        }
    }

    public void peek() {
        if (isEmpty()) {
            System.out.println("Queue is Empty.");
            return;
        }
        System.out.println(front.data + " is at the front.");
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is Empty.");
            return;
        }
        Node temp = front;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        QueueLinkedList q = new QueueLinkedList();
        int choice, ele;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Enqueue");
            System.out.println("2. Dequeue");
            System.out.println("3. Peek");
            System.out.println("4. isEmpty");
            System.out.println("5. Display");
            System.out.println("6. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    q.enqueue(ele);
                    break;
                case 2:
                    q.dequeue();
                    break;
                case 3:
                    q.peek();
                    break;
                case 4:
                    System.out.println(q.isEmpty());
                    break;
                case 5:
                    q.display();
                    break;
                case 6:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 6);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 1
Enter element: 1

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 1
Enter element: 2

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 1
Enter element: 3

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 3
1 is at the front.

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 4
false

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 5
1 2 3

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 2
1 is dequeued.

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 2
2 is dequeued.

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 3
3 is at the front.

Operations:
1. Enqueue
2. Dequeue
3. Peek
4. isEmpty
5. Display
6. Exit
Choose an operation: 6
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Printer spooling</li>
<li>Task scheduling in OS</li>
<li>Call center call handling</li>
<li>Web server request queues</li>
<li>Buffer handling in IO devices</li>
<li>Level-order traversal in trees (BFS)</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Array-based queues may cause space wastage due to front shift.</li>
<li>Requires memory for pointer storage in the linked list version.</li>
<li>Need additional logic for circular queue to efficiently use memory.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Array Queue</th>
            <th>Linked List Queue</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Enqueue</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Dequeue</th>
            <td>O(1) (you used front pointer)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Peek</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>isEmpty</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>isFull</th>
            <td>O(1)</td>
            <td>Not Applicable</td>
        </tr>
        <tr>
            <th>Display</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(n) (fixed size array)</td>
            <td>O(n) (dynamic nodes)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li>IndexOutOfBoundsException</li>
<li>NoSuchElementException</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Stack')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Deque')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Deque', data: `
      <h1>Deque</h1>
      <p>A <b>Deque</b> (pronounced “deck”) stands for <b>Double Ended Queue</b>, a linear data structure where elements can be inserted or removed from both the front and rear ends.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/deque/dq1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li>A <b>queue of passengers in a bus</b> where passengers can board or exit from both the front and back doors.</li>
        </div>
      </div>



      <div class="section">
        <h2>Types</h2>
        <div class="data-box">
<li><b>Input Restricted Deque</b>: Insertion allowed only at rear, deletion allowed at both ends.</li>
<li><b>Output Restricted Deque</b>: Deletion allowed only at front, insertion allowed at both ends.</li>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class Node {
    int data;
    Node prev, next;

    Node(int data) {
        this.data = data;
        this.prev = this.next = null;
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Allows insertion and deletion from both ends.</li>
<li>Generalizes both stacks and queues.</li>
<li>Can be implemented using arrays, linked lists, or Java’s Deque interface.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>insertFront(ele)</b>: Inserts an element at the front.</li>
<li><b>insertRear(ele)</b>: Inserts an element at the rear.</li>
<li><b>deleteFront()</b>: Deletes element from the front.</li>
<li><b>deleteRear()</b>: Deletes element from the rear.</li>
<li><b>peekFront()</b>: Gets the front element.</li>
<li><b>peekRear()</b>: Gets the rear element.</li>
<li><b>isEmpty()</b>: Checks if deque is empty.</li>
<li><b>isFull()</b>: Checks if deque is full (array version).</li>
<li><b>display()</b>: Prints all elements.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <div class="tabs">
          <button class="tab-button active" onclick="showTabContent(event, 'tab1')">Using Array</button>
          <button class="tab-button" onclick="showTabContent(event, 'tab2')">Using Linked List</button>
        </div>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

public class DequeArray {
    int[] deque;
    int front, rear, size;

    DequeArray(int capacity) {
        deque = new int[capacity];
        size = capacity;
        front = -1;
        rear = -1;
    }

    public boolean isEmpty() {
        return front == -1;
    }

    public boolean isFull() {
        return (front == 0 && rear == size - 1) || (front == rear + 1);
    }

    public void insertFront(int ele) {
        if (isFull()) {
            System.out.println("Deque Overflow.");
            return;
        }
        if (isEmpty()) {
            front = rear = 0;
        } else if (front == 0) {
            front = size - 1;
        } else {
            front--;
        }
        deque[front] = ele;
    }

    public void insertRear(int ele) {
        if (isFull()) {
            System.out.println("Deque Overflow.");
            return;
        }
        if (isEmpty()) {
            front = rear = 0;
        } else if (rear == size - 1) {
            rear = 0;
        } else {
            rear++;
        }
        deque[rear] = ele;
    }

    public void deleteFront() {
        if (isEmpty()) {
            System.out.println("Deque Underflow.");
            return;
        }
        System.out.println(deque[front] + " is deleted from front.");
        if (front == rear) {
            front = rear = -1;
        } else if (front == size - 1) {
            front = 0;
        } else {
            front++;
        }
    }

    public void deleteRear() {
        if (isEmpty()) {
            System.out.println("Deque Underflow.");
            return;
        }
        System.out.println(deque[rear] + " is deleted from rear.");
        if (front == rear) {
            front = rear = -1;
        } else if (rear == 0) {
            rear = size - 1;
        } else {
            rear--;
        }
    }

    public void peekFront() {
        if (isEmpty()) {
            System.out.println("Deque is Empty.");
            return;
        }
        System.out.println(deque[front] + " is at the front.");
    }

    public void peekRear() {
        if (isEmpty()) {
            System.out.println("Deque is Empty.");
            return;
        }
        System.out.println(deque[rear] + " is at the rear.");
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("Deque is Empty.");
            return;
        }
        System.out.print("Deque elements: ");
        int i = front;
        while (true) {
            System.out.print(deque[i] + " ");
            if (i == rear)
                break;
            i = (i + 1) % size;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of deque: ");
        int capacity = sc.nextInt();
        DequeArray dq = new DequeArray(capacity);
        int choice, ele;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert Front");
            System.out.println("2. Insert Rear");
            System.out.println("3. Delete Front");
            System.out.println("4. Delete Rear");
            System.out.println("5. Peek Front");
            System.out.println("6. Peek Rear");
            System.out.println("7. isEmpty");
            System.out.println("8. isFull");
            System.out.println("9. Display");
            System.out.println("10. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    dq.insertFront(ele);
                    break;
                case 2:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    dq.insertRear(ele);
                    break;
                case 3:
                    dq.deleteFront();
                    break;
                case 4:
                    dq.deleteRear();
                    break;
                case 5:
                    dq.peekFront();
                    break;
                case 6:
                    dq.peekRear();
                    break;
                case 7:
                    System.out.println(dq.isEmpty());
                    break;
                case 8:
                    System.out.println(dq.isFull());
                    break;
                case 9:
                    dq.display();
                    break;
                case 10:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 10);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter size of deque: 5

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 2
Enter element: 1

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 2
Enter element: 2

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 2
Enter element: 3

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 1
Enter element: 4

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 1
Enter element: 5

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 9
Deque elements: 5 4 1 2 3

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 8
true

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 5
5 is at the front.

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 6
3 is at the rear.

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 4
3 is deleted from rear.

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 3
5 is deleted from front.

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 7
false

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. isFull
9. Display
10. Exit
Choose an operation: 10
Exiting...
*/
</pre>
          </div>

          <div class="tab-content data-box hidden" id="tab2"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node prev, next;

    Node(int data) {
        this.data = data;
        this.prev = this.next = null;
    }
}

public class DequeLinkedList {
    Node front, rear;

    public boolean isEmpty() {
        return front == null;
    }

    public void insertFront(int ele) {
        Node newNode = new Node(ele);
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            newNode.next = front;
            front.prev = newNode;
            front = newNode;
        }
    }

    public void insertRear(int ele) {
        Node newNode = new Node(ele);
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            newNode.prev = rear;
            rear = newNode;
        }
    }

    public void deleteFront() {
        if (isEmpty()) {
            System.out.println("Deque Underflow.");
            return;
        }
        System.out.println(front.data + " is deleted from front.");
        front = front.next;
        if (front == null)
            rear = null;
        else
            front.prev = null;
    }

    public void deleteRear() {
        if (isEmpty()) {
            System.out.println("Deque Underflow.");
            return;
        }
        System.out.println(rear.data + " is deleted from rear.");
        rear = rear.prev;
        if (rear == null)
            front = null;
        else
            rear.next = null;
    }

    public void peekFront() {
        if (isEmpty()) {
            System.out.println("Deque is Empty.");
            return;
        }
        System.out.println(front.data + " is at the front.");
    }

    public void peekRear() {
        if (isEmpty()) {
            System.out.println("Deque is Empty.");
            return;
        }
        System.out.println(rear.data + " is at the rear.");
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("Deque is Empty.");
            return;
        }
        Node temp = front;
        System.out.print("Deque elements: ");
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        DequeLinkedList dq = new DequeLinkedList();
        int choice, ele;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert Front");
            System.out.println("2. Insert Rear");
            System.out.println("3. Delete Front");
            System.out.println("4. Delete Rear");
            System.out.println("5. Peek Front");
            System.out.println("6. Peek Rear");
            System.out.println("7. isEmpty");
            System.out.println("8. Display");
            System.out.println("9. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    dq.insertFront(ele);
                    break;
                case 2:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    dq.insertRear(ele);
                    break;
                case 3:
                    dq.deleteFront();
                    break;
                case 4:
                    dq.deleteRear();
                    break;
                case 5:
                    dq.peekFront();
                    break;
                case 6:
                    dq.peekRear();
                    break;
                case 7:
                    System.out.println(dq.isEmpty());
                    break;
                case 8:
                    dq.display();
                    break;
                case 9:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 9);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 1
Enter element: 1

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 1
Enter element: 0

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 2
Enter element: 3

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 5
0 is at the front.

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 6
3 is at the rear.

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 7
false

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 8
Deque elements: 0 1 3

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 3
0 is deleted from front.

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 4
3 is deleted from rear.

Operations:
1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Peek Front
6. Peek Rear
7. isEmpty
8. Display
9. Exit
Choose an operation: 9
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li><b>Undo/Redo operations</b> in editors.</li>
<li><b>Palindrome checking</b> (insert from rear, delete from front).</li>
<li><b>Browser history</b> (forward and backward).</li>
<li><b>Sliding window problems</b> in competitive programming.</li>
<li><b>Task scheduling</b> with both ends priority.</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Array-based implementation may need dynamic resizing.</li>
<li>Linked list implementation requires extra memory for pointers.</li>
<li>Slightly more complex than regular queues due to double-ended logic.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Array Deque</th>
            <th>Linked List Deque</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>insertFront()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>insertRear()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>deleteFront()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>deleteRear()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>peekFront()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>peekRear()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>isEmpty()</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>isFull()</th>
            <td>O(1)</td>
            <td>Not Applicable</td>
        </tr>
        <tr>
            <th>display()</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(n) (fixed size)</td>
            <td>O(n) (dynamic nodes)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li>NullPointerException</li>
<li>IndexOutOfBounds</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Queue')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Set')" class="nav-button">Next &gt;</button>
      </div>

` 
    },
    { name: 'Set', data: `
      <h1>Set</h1>
      <p>A <b>Set</b> is a linear data structure that stores a collection of <b>unique elements</b>. Unlike arrays or lists, sets do not allow duplicate values. The order of elements is not guaranteed (depends on implementation).</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/set/set1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li>A <b>student roll number list</b> in a school — each roll number is unique.</li>
<li>A <b>deck of cards</b> — no duplicate cards are allowed.</li>
        </div>
      </div>



      <div class="section">
        <h2>Types</h2>
        <div class="data-box">
<ol>
  <li>HashSet</li>
    <ul>
      <li>Based on hashing</li>
      <li>No order of elements</li>
      <li>Allows one null</li>
    </ul>
  <li>LinkedHashSet</li>
    <ul>
      <li>Preserves insertion order</li>
      <li>Allows one null</li>
    </ul>
  <li>TreeSet</li>
    <ul>
      <li>Elements stored in sorted order</li>
      <li>Does not allow null</li>
    </ul>
</ol>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Stores only <b>unique elements</b> (no duplicates).</li>
<li><b>Unordered</b> collection (except in some types like LinkedHashSet where order of insertion is preserved, or TreeSet where order is sorted).</li>
<li>Allows <b>null</b> elements (only one null in HashSet, none in TreeSet).</li>
<li>Backed by hashing (HashSet) or trees (TreeSet).</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>add(element)</b>: Adds an element to the set (if not present).</li>
<li><b>remove(element)</b>: Removes a specific element.</li>
<li><b>contains(element)</b>: Checks if an element exists.</li>
<li><b>size()</b>: Returns number of elements.</li>
<li><b>isEmpty()</b>: Checks if the set is empty.</li>
<li><b>clear()</b>: Removes all elements.</li>
<li><b>iterator()</b>: Iterates over the elements.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <div class="tabs">
          <button class="tab-button active" onclick="showTabContent(event, 'tab1')">Using Array</button>
          <button class="tab-button" onclick="showTabContent(event, 'tab2')">Using Linked List</button>
        </div>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

public class SetArray {
    int[] set;
    int size;

    SetArray(int capacity) {
        set = new int[capacity];
        size = 0;
    }

    public boolean contains(int ele) {
        for (int i = 0; i < size; i++) {
            if (set[i] == ele) return true;
        }
        return false;
    }

    public void add(int ele) {
        if (contains(ele)) {
            System.out.println(ele + " already exists. Duplicates not allowed.");
            return;
        }
        if (size == set.length) {
            System.out.println("Set is Full.");
            return;
        }
        set[size++] = ele;
    }

    public void remove(int ele) {
        for (int i = 0; i < size; i++) {
            if (set[i] == ele) {
                set[i] = set[size - 1]; // replace with last element
                size--;
                System.out.println(ele + " removed.");
                return;
            }
        }
        System.out.println(ele + " not found.");
    }

    public void display() {
        if (size == 0) {
            System.out.println("Set is Empty.");
            return;
        }
        for (int i = 0; i < size; i++) {
            System.out.print(set[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of set: ");
        int capacity = sc.nextInt();
        SetArray s = new SetArray(capacity);
        int choice, ele;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Add");
            System.out.println("2. Remove");
            System.out.println("3. Contains");
            System.out.println("4. isEmpty");
            System.out.println("5. Size");
            System.out.println("6. Display");
            System.out.println("7. Exit");
            System.out.print("Choose: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    s.add(ele);
                    break;
                case 2:
                    System.out.print("Enter element to remove: ");
                    ele = sc.nextInt();
                    s.remove(ele);
                    break;
                case 3:
                    System.out.print("Enter element to check: ");
                    ele = sc.nextInt();
                    System.out.println(s.contains(ele));
                    break;
                case 4:
                    System.out.println(s.size == 0);
                    break;
                case 5:
                    System.out.println("Size: " + s.size);
                    break;
                case 6:
                    s.display();
                    break;
                case 7:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid Option.");
            }
        } while (choice != 7);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter size of set: 5

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 1
Enter element: 1

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 1
Enter element: 5

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 1
Enter element: 3

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 1
Enter element: 5
5 already exists. Duplicates not allowed.

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 6
1 5 3

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 2
Enter element to remove: 5
5 removed.

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 3
Enter element to check: 5
false

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 4
false

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 5
Size: 2

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 7
Exiting...
*/
</pre>
          </div>

          <div class="tab-content data-box hidden" id="tab2"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class SetLinkedList {
    Node head;

    // Check if element already exists
    public boolean contains(int ele) {
        Node temp = head;
        while (temp != null) {
            if (temp.data == ele) return true;
            temp = temp.next;
        }
        return false;
    }

    // Add element if not present
    public void add(int ele) {
        if (contains(ele)) {
            System.out.println(ele + " already exists. Duplicates not allowed.");
            return;
        }
        Node newNode = new Node(ele);
        newNode.next = head;
        head = newNode;
        System.out.println(ele + " added.");
    }

    // Remove element if present
    public void remove(int ele) {
        if (head == null) {
            System.out.println("Set is Empty.");
            return;
        }
        if (head.data == ele) {
            head = head.next;
            System.out.println(ele + " removed.");
            return;
        }
        Node temp = head;
        while (temp.next != null && temp.next.data != ele) {
            temp = temp.next;
        }
        if (temp.next == null) {
            System.out.println(ele + " not found.");
            return;
        }
        temp.next = temp.next.next;
        System.out.println(ele + " removed.");
    }

    // Display all elements
    public void display() {
        if (head == null) {
            System.out.println("Set is Empty.");
            return;
        }
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    // Get size of set
    public int size() {
        int count = 0;
        Node temp = head;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    // Check if set is empty
    public boolean isEmpty() {
        return head == null;
    }

    // ===== Menu-driven Main =====
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        SetLinkedList set = new SetLinkedList();
        int choice, ele;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Add");
            System.out.println("2. Remove");
            System.out.println("3. Contains");
            System.out.println("4. isEmpty");
            System.out.println("5. Size");
            System.out.println("6. Display");
            System.out.println("7. Exit");
            System.out.print("Choose: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    set.add(ele);
                    break;
                case 2:
                    System.out.print("Enter element to remove: ");
                    ele = sc.nextInt();
                    set.remove(ele);
                    break;
                case 3:
                    System.out.print("Enter element to check: ");
                    ele = sc.nextInt();
                    System.out.println(set.contains(ele));
                    break;
                case 4:
                    System.out.println(set.isEmpty());
                    break;
                case 5:
                    System.out.println("Size: " + set.size());
                    break;
                case 6:
                    set.display();
                    break;
                case 7:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 7);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 1
Enter element: 1
1 added.

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 1
Enter element: 5
5 added.

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 1
Enter element: 1
1 already exists. Duplicates not allowed.

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 3
Enter element to check: 5
true

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 4
false

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 5
Size: 2

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 6
5 1

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 2
Enter element to remove: 5
5 removed.

Operations:
1. Add
2. Remove
3. Contains
4. isEmpty
5. Size
6. Display
7. Exit
Choose: 7
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Removing duplicates from a collection.</li>
<li>Checking membership (fast lookup).</li>
<li>Mathematical set operations (union, intersection, difference).</li>
<li>Representing unique IDs (e.g., roll numbers, product codes).</li>
<li>Storing visited nodes in graph traversal (DFS/BFS).</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>No indexing (can’t access by position like arrays/lists).</li>
<li>Extra overhead for hashing or balancing (TreeSet).</li>
<li>No duplicates allowed (may not be suitable for multi-value collections).</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Array Set</th>
            <th>Linked List Set</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>add</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>remove</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>contains</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>display</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(n) (fixed size)</td>
            <td>O(n) (dynamic nodes)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li>NullPointerException</li>
<li>IndexOutOfBounds</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Deque')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Hash Map')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Hash Map', data: `
      <h1>Hash Map</h1>
      <p>A <b>HashMap</b> is a data structure that stores key-value pairs. It allows for fast retrieval, insertion, and deletion using a key.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/hashmap/hm1.png" class="data-img">



      <div class="section">
        <h2>Real-World Analogy</h2>
        <div class="data-box">
<li>Imagine a <b>dictionary</b> — you look up a word (key), and get its meaning (value).</li>
        </div>
      </div>
      


      <div class="section">
        <h2>Overview</h2>
        <div class="data-box">
<li><b>Hashing</b> is an approach in which the time complexity of insert, delete and search operations is not dependent on the number of elements present in the data structure. In fact, all the operations like insert, delete and search have <b>constant time complexity</b> i.e <b>O(1)</b> when hashing approach is used.</li>
<li>In the hashing approach we will use a table called <b>Hash Table</b> to store the data. The size of the hash table is less than the range of the actual data. So the data values are inserted into the hash table based on the <b>hash key</b> value.</li>
        </div>
      </div>



      <div class="section">
        <h2>Hash Key</h2>
        <div class="data-box">
<li><b>Hash key</b> value is the index of the hash table at which the actual data is stored. The Hash key value provides the mapping of the actual data and the index of the hash table.</li>
        </div>
      </div>



      <div class="section">
        <h2>Hashing Function</h2>
        <div class="data-box">
<li><b>Hashing function</b> is a function which takes the key i.e the actual data to be inserted as input and gives the hash key value as output which is the index of the hash table at which the key is stored. A hashing function is always designed in such a way that the output of the hashing function is always within the range of the index of the hash table.</li>
<li>Choosing a good hashing function, <b>h(k)</b>, is essential. <b>h(k)</b> should distribute the data as uniformly as possible to the indices of the hash table. <b>h(k)</b> is a function that maps the universe of keys <b>U</b> to some index between 0 to <b>S</b> where <b>S</b> is the size of the hash table. When inserting, searching, or deleting a key <b>k</b>, h(k) is calculated and the h(k)th slot is checked to add, look for, or remove the key. Any hashing function h(k) should have the following properties</li>
<ul>
  <li>Satisfy (approximately) the assumption of simple uniform hashing: each key is equally likely to hash to any of the <b>S</b> slots. The hash function shouldn’t bias towards particular slots.</li>
  <li>Quick to be calculated, should ideally have <b>O(1)</b> run-time.</li>
  <li>Should be deterministic i.e. h(k) should always return the same value for a given <b>k</b>.</li>
</ul>
<li>Hashing functions generally uses these methods for creating functions</li>
<ul>
  <li>Division method</li>
  <li>Multiplication method</li>
  <li>Universal hashing</li>
</ul>

<h3>Division Method</h3>
<div class="data-box">
<li>Using the division method, the hashing function takes the form <b>h(k) = k % S</b>, where <b>S</b> is the size of the hash table. Since we are using a mod operator , the h(k) will always return a value between 0 and S independent of the value of the k.</li>
<li>It is important to note that <b>S</b> should not be a power of <b>2</b>. If <b>S = 2<sup>p</sup></b>, then the <b>h(k)</b> only looks at the <b>p</b> lower bits of <b>k</b>, completely ignoring the rest of the bits in <b>k</b>.</li>
<li>A good choice for <b>S</b> would be a prime number or a number nearer to but not equal to <b>2<sup>p</sup></b>.</li>
</div>

<h3>Multiplication Method</h3>
<div class="data-box">
<li>Using multiplication method, the hashing function takes the form <b>h(k) = floor(S*(k*A mod 1))</b>, where <b>S</b> is the size of the hash table, <b>0 < A < 1</b> and <b>(k*A mod 1)</b> represents the fractional part of <b>k*A</b>. Since <b>0 < (k*A mod 1) < 1</b>, the range of h(k) will be from 0 to S. A should be ideally irrational numbers.</li>
</div>

<h3>Universal Hashing</h3>
<div class="data-box">
<li>If the keys are randomly distributed in <b>(0,r]</b>, then, <b>h(k) = floor((S*k)/r)</b> where r is the maximum possible value of the key and S is the size of the hash table, will provide uniform hashing.</li>
<li>Efficiency of the hashing key is always measured on its ability to uniformly distribute to the slots available in the hash table.</li>
</div>
        </div>
      </div>



      <div class="section">
        <h2>Hash Table</h2>
        <div class="data-box">
<li><b>Hash table</b> is a data structure that is similar to an array, but the data is added to the hash table according to the index obtained after performing the hashing function.The idea of hashing is to distribute the entries data across the hash table slots.</li>
<ul>
  <li>To insert a key (k) into the hash table, we will compute the h(k) i.e the hash value of k which gives the index of the hash table at which k is stored.</li>
  <li>To delete a key (k) from the hash table, we will compute the location of k by computing the h(k) and then delete the k from the location if available.</li>
  <li>To search a key (k) in the hash table, we will compute the location of k by computing the h(k) and verify if the key is present at the location.</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Collision</h2>
        <div class="data-box">
<li>In a <b>HashMap</b>, a <b>collision</b> occurs when two different keys hash to the same index in the underlying array (i.e., the same "bucket"). Since the hash function maps the keys to specific indexes, a collision means that two keys are trying to occupy the same position in the map, which can cause conflicts when trying to retrieve or store values.</li>
<li>Common ways to resolve collisions include:</li>
<ul>
  <li><b>Chaining</b>: Storing a list of key-value pairs at the same index.</li>
<li><b>Open Addressing</b>: Finding another open spot in the array using techniques like linear probing or quadratic probing.</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Collision Resolution Techniques</h2>
        <div class="data-box">
<li>If all keys hash to different slots of the hash table, then the hash table operations are as fast as computing the hash function and changing or inspecting the value of an array element, which is <b>O(1)</b> runtime. However, this is not always possible. If the number of possible keys is greater than the number of slots in the hash table (which is the case most of the times), then there must be some keys that hash into the same slot, in other words a <b>collision</b></li>
<li>During collision, a newly inserted key maps to an already occupied slot in the hash table and must be handled using some collision handling /resolution technique. </li>
<li>There are mainly two methods to handle collision:</li>
<ol>
  <li>Open Addressing (Closed Hashing).</li>
  <ul>
    <li>Linear probing.</li>
    <li>Quadratic probing.</li>
    <li>Double probing.</li>
  </ul>
  <li>Separate Chaining (Open Hashing).</li>
</ol>

  <h3>1. Open Addressing</h3>
  <div class="data-box">
<li>The name <b>"open addressing"</b> refers to the fact that the location or address of the key is not determined by its hash value. In open addressing (Closed hashing), When a new key <b>(k)</b> has to be inserted, the hash index of the hashed value is computed and then the array is examined (starting with the hashed index). If the slot at the hashed index is unoccupied, then the entry record is inserted in the slot at the hashed index; else it proceeds in some <b>probe sequence</b> until it finds an unoccupied slot.</li>
<li>The <b>probe sequence</b> is the sequence that is followed while searching for empty slots in the hash table. In different probe sequences, you can have different intervals between successive entry slots or probes.</li>
    <h4>Linear Probing</h4>
    <div class="data-box">
<li>In <b>Linear probing</b>, the interval between successive probes is fixed (usually to 1). Let’s assume that the hashed index for a particular entry is an index. The probing sequence for <b>linear probing</b> will be:</li>
<p class="indented">index = index % S</br>
index = (index + 1) % S</br>
index = (index + 2) % S</br>
index = (index + 3) % S</br>
...</br>
...</br>
and so on. Where S is the size of the hash table.
</p>
<li>In other words, in linear probing when a collision occurs, the immediate free slot is occupied.</li>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/hashmap/hm2.png" class="data-img">
<li><b>Explanation</b>:</li>
<ul>
  <li>Initially the hash table is empty. All the empty slots of hash table are represented by -1.</li>
  <li>Trying to insert 46, Applying h(k) = k % S, results in 46 % 10 = 6. The index 6 in the hash table is empty, so 46 is placed at the 6th index.</li>
  <li>Trying to insert 85, Applying h(k) = k % S, results in 85 % 10 = 5. The index 5 in the hash table is empty, so 85 is placed at the 5th index.</li>
  <li>Trying to insert 95, Applying h(k) = k % S, results in 95 % 10 = 5. The index 5 in the hash table is not empty hence a collision, so in linear probing, the probing sequence is index = (index + i) % S where i will be from 1, 2, 3, ... So we calculate (5+1) % 10 = 6. Checking that 6th index is also not empty we calculate (5+2) % 10 = 7. The 7th index in the hash table is empty. so 95 is placed at the 7th index.</li>
</ul>
<li><b>Problems of linear probing</b>: If the primary hash index is x, subsequent probes go to x+1, x+2, x+3 and so on, this results in <b>Primary Clustering</b>.</li>
<li>Primary clustering is the tendency for a collision resolution scheme such as linear probing to create long runs of filled slots near the hash position of keys.</li>
<li>Once the primary cluster forms, the bigger the cluster gets, the faster it grows and thus reduces the performance.</li>
<li>The problem of the primary clustering is shown below. </li>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/hashmap/hm3.png" class="data-img">
<li>A cluster is forming with 46, 87, 98, 49, 80 there by when we try to insert 86 it needed 5 probes to identify the slot and if any element is to be added in the 6th index again then the number of probes will become 6 and this goes on increasing for every insertion. </li>
    </div>
    <h4>Quadratic Probing</h4>
    <div class="data-box">
<li><b>Quadratic probing</b> is similar to linear probing and the only difference is the interval between successive probes or entry slots. When the slot at a hashed index for a key record is already occupied, we start traversing until you find an unoccupied slot. The interval between slots is computed by adding the successive value of an <b>arbitrary polynomial</b> in the original hashed index.</li>
<li>Let’s assume that the hashed index for a particular entry is an index. The probing sequence for <b>quadratic probing</b> will be:</li>
<p class="indented">
index = index % S</br>
index = (index + 1<sup>2</sup>) % S</br>
index = (index + 2<sup>2</sup>) % S</br>
index = (index + 3<sup>2</sup>) % S</br>
...</br>
and so on. Where S is the size of the hash table.
</p>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/hashmap/hm4.png" class="data-img">
<li><b>Explanation</b>:</li>
<ul>
  <li>Initially the hash table is empty. All the empty slots of hash table are represented by -1.</li>
  <li>Trying to insert 45, Applying h(k) = k % S, results in 45 % 10 = 5. The index 5 in the hash table is empty, so 45 is placed at the 5th index.</li>
  <li>Trying to insert 86, Applying h(k) = k % S, results in 86 % 10 = 6. The index 6 in the hash table is empty, so 86 is placed at the 6th index.</li>
  <li>Trying to insert 95, Applying h(k) = k % S, results in 95 % 10 = 5. The index 5 in the hash table is not empty, hence a <b>collision</b> so in quadratic probing, the probing sequence is <b>index = (index + i*i) % S</b> where i will be from 1, 2, 3,... So we calculate (5 + 1*1) % 10 = 6. Checking that 6th index is also not empty we calculate (5+ 2*2) % 10 = 9. The index 9 in the hash table is empty, so 95 is placed at the 9th index.</li>
</ul>
<li><b>Problems of quadratic probing</b>: If the primary hash index is x, probes go to x+1, x+4, x+9, x+16, x+25 and so on, this results in <b>Secondary Clustering</b>.</li>
<li>Secondary clustering is the tendency for a collision resolution scheme such as quadratic probing to create long runs of filled slots away from the hash position of keys.</li>
<li>Secondary clustering is less severe in terms of performance hit than primary clustering, and is an attempt to keep clusters from forming by using Quadratic Probing. The idea is to probe more widely separated cells, instead of those adjacent to the primary hash site.</li>
<li>Another problem with Quadratic probing is that it might infinitely loop the hash table probing for empty slots even though empty slots are present. It can be visualized in the below example. </li>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/hashmap/hm5.png" class="data-img">
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/hashmap/hm6.png" class="data-img">
<li><b>Explanation</b>:</li>
<ul>
  <li>Initially the hash table is empty. All the empty slots of the hash table are represented by -1.</li>
  <li>Trying to insert 24, Applying h(k) = k % S, results in 24 % 10 = 4. The index 4 in the hash table is empty, so 24 is placed at the 4th index. </li>
  <li>Trying to insert 40, Applying h(k) = k % S, results in 40 % 10 = 0. The index 0 in the hash table is empty, so 40 is placed at the 0th index. </li>
  <li>Trying to insert 89, Applying h(k) = k % S, results in 89 % 10 = 9. The index 9 in the hash table is empty, so 89 is placed at the 9th index. </li>
  <li>Trying to insert 45, Applying h(k) = k % S, results in 45 % 10 = 5. The index 5 in the hash table is empty, so 45 is placed at the 5th index. </li>
  <li>Trying to insert 86, Applying h(k) = k % S, results in 86 % 10 = 6. The index 6 in the hash table is empty, so 46 is placed at the 6th index. </li>
  <li>Trying to insert 41, Applying h(k) = k % S, results in 41 % 10 = 1. The index 1 in the hash table is empty, so 41 is placed at the 1st index. </li>
  <li>Trying to insert 85, Applying h(k) = k % S, results in 85 % 10 = 5. The index 5 in the hash table is not empty hence a <b>collision</b>, so in quadratic probing, the probing sequence is <b>index = (index + i*i) %S </b> where i will be from 1, 2, 3,... So we calculate (5 + 1*1) % 10 = 6. Checking that 6th index is also not empty we calculate (5 + 2*2) % 10 = 9. Checking that 9th index is also not empty we calculate (5 + 3*3) % 10 = 4. Checking that 4th index is also not empty we calculate (5 + 4*4) % 10 = 1. Checking that 1st index is also not empty we calculate (5 + 5*5) % 10 = 0. Checking that 0th index is also not empty we calculate (5 + 6*6) % 10 = 1. Checking that 1st index is also not empty we calculate (5 + 7*7) % 10 = 4, and so we loop infinitely but fail to obtain an empty slot even though many are available.</li>
</ul>
    </div>
    <h4>Double Hashing</h4>
    <div class="data-box">
<li><b>Double hashing</b> is similar to linear probing and the only difference is the interval between successive probes. Here, the interval between probes is computed by using a second hash function.</li>
<li>Let us say that the hashed index for a key <b>(k)</b> is an index that is computed by one hashing function and the slot at that index is already occupied. You must start traversing in a specific probing sequence to look for an unoccupied slot. The <b>probing sequence</b> will be:</li>
<p class="indented">
index = (index + 1 * Hash2(k)) % S</br>
index = (index + 2 * Hash2(k)) % S</br>
index = (index + 3 * Hash2(k)) % S</br>
... and so on.</br>
Here, Hash2() is the second hash function.
</p>
<p><b>Choosing second hash function</b></p>
<li>A popular second hash function is : <b>hash2(key) = PRIME - (key % PRIME)</b> where <b>PRIME</b> is a prime smaller than the hash table size <b>S</b>.</li>
<li>A good second Hash function is:</li>
<ul>
  <li>It must never evaluate to zero.</li>
  <li>Must make sure that all cells can be probed.</li>
</ul>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/hashmap/hm7.png" class="data-img">
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/hashmap/hm8.png" class="data-img">
<li><b>Explanation</b>:</li>
<ul>
  <li>Initially the hash table is empty. All the empty slots of hash table are represented by -1. The first hash function is h(k) = k % S and second hash function h2(k) = PRIME - (k % PRIME) where S is the size of hash table and PRIME is a prime number less than S. Here S = 10 and PRIME = 7.</li>
  <li>Trying to insert 18, Applying h(k) = k % S, results in 18 % 10 = 8. The index 8 in the hash table is empty, so 18 is placed at the 8th index.</li>
  <li>Trying to insert 27, Applying h(k) = k % S, results in 27 % 10 = 7. The index 7 in the hash table is empty, so 27 is placed at the 7th index.</li>
  <li>Trying to insert 36, Applying h(k) = k % S, results in 36 % 10 = 6. The index 36 in the hash table is empty, so 36 is placed at the 6th index.</li>
  <li>Trying to insert 42, Applying h(k) = k % S, results in 42 % 10 = 2. The index 2 in the hash table is empty, so 42 is placed at the 2nd index.</li>
  <li>Trying to insert 96, Applying h(k) = k % S, results in 96 % 10 = 6. The index 6 in the hash table is not empty hence a <b>collision</b>, so in double hashing, the probing sequence is calculated using <b>index = (h(k) + i * h2(k)) % S</b> where i will be from 1, 2, 3,... So we calculate (6 + 1 * (7 - 96 % 7)) % 10 = 8. Checking that 8th index is also not empty we calculate (6 + 2 * (7 - 96 % 7)) % 10 = 0 . Since 0th slot is available 96 is inserted at the 0th slot.</li>
</ul>
    </div>
  </div>
  <h3>2. Separate Chaining</h3>
  <div class="data-box">
<li>The idea is to make each cell of the hash table point to a linked list of records that have the same hash function value. In separate chaining linked lists of values are built in association with each location within the hash table when a collision occurs.</li>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/hashmap/hm9.png" class="data-img">
<li><b>Advantages of separate chaining</b></li>
<ol>
  <li>Easier to implement.</li>
  <li>Hash table never fill up. We can add any number of elements to the hash table.</li>
  <li>Less sensitive to the hash function or load factors.</li>
</ol>
<li><b>Disadvantages of separate chaining</b></li>
<ol>
  <li>Cache performance of chaining is not good as keys are stored using a linked list. Open addressing provides better cache performance as everything is stored in the same table.</li>
  <li>Wastage of Space. Address fields occupy more memory in this method.</li>
  <li>If the chain becomes long, then search time can become O(n) in the worst case.</li>
</ol>
  </div>
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Stores data as <b>(key, value)</b> pairs.</li>
<li>Uses a <b>hash function</b> to compute an index for storing data.</li>
<li>Allows <b>constant time</b> complexity for basic operations (on average).</li>
<li>Keys must be <b>unique</b>.</li>
<li>Collision handling is necessary (via chaining or open addressing).</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>put(K key, V value)</b>: Add or update key-value pair.</li>
<li><b>get(K key)</b>: Retrieve value by key.</li>
<li><b>remove(K key)</b>: Remove entry by key.</li>
<li><b>containsKey(K key)</b>: Check if a key exists.</li>
<li><b>display()</b>: Show all key-value pairs.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

class Entry {
    int key;
    int value;
    Entry next;

    Entry(int key, int value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    private Entry[] bucket;
    private int capacity;

    public MyHashMap(int capacity) {
        this.capacity = capacity;
        bucket = new Entry[capacity];
    }

    private int hash(int key) {
        return key % capacity;
    }

    public void put(int key, int value) {
        int index = hash(key);
        Entry head = bucket[index];

        while (head != null) {
            if (head.key == key) {
                head.value = value;
                return;
            }
            head = head.next;
        }

        Entry newNode = new Entry(key, value);
        newNode.next = bucket[index];
        bucket[index] = newNode;
    }

    public Integer get(int key) {
        int index = hash(key);
        Entry head = bucket[index];

        while (head != null) {
            if (head.key == key)
                return head.value;
            head = head.next;
        }
        return null; // key not found
    }

    public boolean containsKey(int key) {
        return get(key) != null;
    }

    public void remove(int key) {
        int index = hash(key);
        Entry head = bucket[index];
        Entry prev = null;

        while (head != null) {
            if (head.key == key) {
                if (prev == null)
                    bucket[index] = head.next;
                else
                    prev.next = head.next;
                return;
            }
            prev = head;
            head = head.next;
        }
        System.out.println("Key not found.");
    }

    public void display() {
        System.out.print("{");
        for (int i = 0; i < capacity; i++) {
            Entry head = bucket[i];
            while (head != null) {
                System.out.print(head.key + "=" + head.value + ", ");
                head = head.next;
            }
        }
        System.out.println("}");
    }
}

public class HashMapDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter capacity of HashMap: ");
        int capacity = sc.nextInt();
        MyHashMap map = new MyHashMap(capacity);

        int choice, key, value;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Put");
            System.out.println("2. Get");
            System.out.println("3. Remove");
            System.out.println("4. Contains Key");
            System.out.println("5. Display");
            System.out.println("6. Exit");
            System.out.print("Choose operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter key: ");
                    key = sc.nextInt();
                    System.out.print("Enter value: ");
                    value = sc.nextInt();
                    map.put(key, value);
                    break;
                case 2:
                    System.out.print("Enter key: ");
                    key = sc.nextInt();
                    Integer val = map.get(key);
                    if (val != null)
                        System.out.println("Value: " + val);
                    else
                        System.out.println("Key not found.");
                    break;
                case 3:
                    System.out.print("Enter key: ");
                    key = sc.nextInt();
                    map.remove(key);
                    break;
                case 4:
                    System.out.print("Enter key: ");
                    key = sc.nextInt();
                    System.out.println(map.containsKey(key));
                    break;
                case 5:
                    map.display();
                    break;
                case 6:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 6);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter capacity of HashMap: 5

Operations:
1. Put
2. Get
3. Remove
4. Contains Key
5. Display
6. Exit
Choose operation: 1
Enter key: 5
Enter value: 10

Operations:
1. Put
2. Get
3. Remove
4. Contains Key
5. Display
6. Exit
Choose operation: 1
Enter key: 4
Enter value: 8

Operations:
1. Put
2. Get
3. Remove
4. Contains Key
5. Display
6. Exit
Choose operation: 1
Enter key: 10
Enter value: 20

Operations:
1. Put
2. Get
3. Remove
4. Contains Key
5. Display
6. Exit
Choose operation: 1
Enter key: 3
Enter value: 6

Operations:
1. Put
2. Get
3. Remove
4. Contains Key
5. Display
6. Exit
Choose operation: 2
Enter key: 4
Value: 8

Operations:
1. Put
2. Get
3. Remove
4. Contains Key
5. Display
6. Exit
Choose operation: 4
Enter key: 9
false

Operations:
1. Put
2. Get
3. Remove
4. Contains Key
5. Display
6. Exit
Choose operation: 5
{10=20, 5=10, 3=6, 4=8, }

Operations:
1. Put
2. Get
3. Remove
4. Contains Key
5. Display
6. Exit
Choose operation: 3
Enter key: 5

Operations:
1. Put
2. Get
3. Remove
4. Contains Key
5. Display
6. Exit
Choose operation: 6
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li><b>Caching / Memoization</b>: Store previously computed results to avoid redundant computation (e.g., in Dynamic Programming).</li>
<li><b>Databases / Indexing</b>: Map column values to row identifiers for fast lookup.</li>
<li><b>Symbol Tables in Compilers</b>: Map variable names (symbols) to memory addresses or types.</li>
<li><b>Routing Tables</b>: Map destination IP addresses to next-hop IPs in networking.</li>
<li><b>Counting Frequency</b>: Count occurrences of elements in arrays or strings.</li>
<li><b>Associative Lookup</b>: Implement dictionaries, configuration maps, key-value stores.</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Hash collisions need to be handled carefully.</li>
<li>Performance depends on hash function and load factor.</li>
<li>No order is maintained (unlike LinkedHashMap or TreeMap).</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Average Case</th>
            <th>Worst Case (many collisions)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>put()</th>
            <td>O(1)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>get()</th>
            <td>O(1)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>remove()</th>
            <td>O(1)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>containsKey()</th>
            <td>O(1)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>display()</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>
<li>Where n is the number of key-value pairs.</li>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li>NullPointerException</li>
<li>IllegalArgumentException</li>
<li>ArrayIndexOutOfBoundsException</li>
<li>NoSuchElementException</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Set')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Tree', data: `
      <h1>Tree</h1>
      <p>A <b>Tree</b> is a <b>non sequential, non linear and hierarchical data structure</b> consisting of <b>nodes</b>, where one node is designated as the <b>root</b> and all other nodes are connected by <b>edges</b> in a <b>parent-child relationship</b>.</p>
      <p>A <b>tree</b> data structure can be defined recursively as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references (edges) to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.</p>
      <p>A <b>tree</b> can also be defined as a collection of 'N' nodes out of which one designated as root node and 'N-1' edges such these 'N-1' edges follows from the fact that each edge connects some node to its parent and every node expect the root has one parent and also any child can have only one parent.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<p>Think of a <b>family tree</b>:</p>
<ul>
  <li>The <b>grandparent</b> is the <b>root</b>.</li>
  <li>Each <b>person</b> can have <b>children</b> (nodes linked below them).</li>
  <li><b>Leaf nodes</b> are those without <b>children</b>.</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Terminology / Key Concepts</h2>
        <div class="data-box">
<li><b>Root</b>: The topmost node in the tree.</li>
<div class="indented">
  <p>In a <b>tree</b> data structure, the first node is known as the <b>Root Node</b>. Root node is the only node in the tree that does not have a parent. Every tree must have a root node. The root node can be visualized as the origin of the tree. There can be only one root node for a tree.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t2.png" class="data-img">
</div>

<li><b>Parent</b>:  A node that has children.</li>
<div class="indented">
  <p>In a <b>tree data</b> structure, a node which is a predecessor of any node is called the <b>Parent</b> of that node. A node which has at least one child is called a <b>Parent Node</b>. <b>Parent Node</b> is also known as <b>“Internal Node”</b> or <b>“Non-Terminal Node”</b>.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t3.png" class="data-img">
</div>

<li><b>Child</b>: A node that is a descendant of another node.</li>
<div class="indented">
  <p>In a <b>tree</b> data structure, a node which is a descendent of any node is called as the <b>Child</b> of that node. A node that has a parent is called the <b>child</b> node. In a tree data structure a parent node can have any number of child nodes. In a tree all nodes are child nodes except for the root node.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t5.png" class="data-img">
</div>

<li><b>Leaf Node</b>: A node that has no children.</li>
<div class="indented">
  <p>In a <b>tree</b> data structure, a node with no children is called the <b>Leaf Node</b>. Leaf nodes are also known as <b>"External Nodes"</b> or <b>"Terminal Nodes"</b>.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t6.png" class="data-img">
</div>

<li><b>Edge</b>: A link between two nodes.</li>
<div class="indented">
  <p>In a <b>tree</b> data structure, the connecting link between any two nodes is called an <b>Edge</b>. Every edge defines a parent-child relationship between the nodes. The node nearer to the root is the parent and the other is the child.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t7.png" class="data-img">
</div>

<li><b>Siblings</b></li>
<div class="indented">
  <p>Nodes with the same parent are called the <b>Sibling</b> nodes.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t8.png" class="data-img">
</div>

<li><b>Subtree</b>: A portion of a tree consisting of a node and its descendants.</li>
<div class="indented">
  <p>A <b>Subtree</b> is a tree entirely contained within another tree. Any node in a tree along with its descendants forms a subtree.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t9.png" class="data-img">
</div>

<li><b>Depth</b>: Number of edges from the root to the node.</li>
<div class="indented">
  <p>In a <b>tree</b> data structure, the <b>depth</b> of a node is defined as the total number of edges present in the longest path from that node to the root node of the tree. For any tree the depth of the root node is 0. The highest depth of the node among all the nodes is called the depth of the tree.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t10.png" class="data-img">
</div>

<li><b>Height</b>: Number of edges on the longest path from the node to a leaf.</li>
<div class="indented">
  <p>In a <b>tree</b> data structure, the <b>height</b> of a node is defined as the total number of edges present in the longest path from that node to any leaf node of the tree. The height of the root node is considered as the height of the tree. The height of all the leaf nodes is 0. Among all the nodes, the root has the highest height.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t11.png" class="data-img">
</div>

<li><b>Degree</b></li>
<div class="indented">
  <p>In a <b>tree</b> data structure, the degree of a node is defined as the total number of children for that node. The highest degree of a node among all the nodes in a tree is called a <b>"Degree of Tree"</b>.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t12.png" class="data-img">
</div>

<li><b>Level</b></li>
<div class="indented">
  <p>In a <b>tree</b> data structure, the root node is said to be in <b>Level 0</b> all the children of root are said to be in <b>Level 1</b> and so on. In other words, for all the nodes in level </b>N</b>, their children will be present in level <b>N+1</b>.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t13.png" class="data-img">
</div>

<li><b>Path</b></li>
<div class="indented">
  <p>In a <b>tree</b> data structure, the sequence of nodes and edges from one node to another node is called the <b>Path</b> between the two nodes. The length of the path is the number of edges in the path.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t14.png" class="data-img">
</div>
        </div>
      </div>



      <div class="section">
        <h2>Types</h2>
        <div class="data-box">
<ol>
  <li><b>Binary Tree</b>: Each node has at most two children.</li>
  <li><b>N-ary Tree</b>: A node can have more than two children.</li>
</ol>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class TreeNode {
    int data;
    List<TreeNode> children;

    TreeNode(int data) {
        this.data = data;
        this.children = new ArrayList<>();
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Non sequential, non-linear, and hierarchical structure.</li>
<li>A tree contains no cycles.</li>
<li>Single root node.</li>
<li>Each child node has exactly one parent (except root).</li>
<li>If we have N number of nodes then we can have a maximum of N-1 number of links also called as <b>Edges</b>.</li>
<li>Every linear list is trivially a tree, because a single linked list of N nodes has N-1 links.</li>
<li>Can be implemented using arrays or linked nodes.</li>
<li>Useful for representing hierarchical relationships.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>Insertion</b>:</li>
<ul>
  <li>If the tree is empty → first insert makes the root.</li>
  <li>Otherwise, you give a <b>parent value</b> to attach a child to.</li>
</ul>
<li><b>Search</b>: DFS search to find a node.</li>
<li><b>Delete</b>: Removes a node and all its children (subtree).</li>
<li><b>DFS</b>: Pre-order style (root → children recursively).</li>
<li><b>BFS</b>: Level-order traversal using a queue.</li>
<li><b>Height</b>: Max depth of the tree.</li>
<li><b>Count Nodes</b>: Counts all nodes recursively.</li>
<li><b>Display Structure</b>: Prints an indented tree.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.*;

class TreeNode {
    int data;
    List<TreeNode> children;

    TreeNode(int data) {
        this.data = data;
        this.children = new ArrayList<>();
    }
}

public class GeneralTree {
    TreeNode root;

    // Insert child under given parent
    public void insert(int parentData, int childData) {
        if (root == null) {
            root = new TreeNode(childData); // If tree empty, new node becomes root
            return;
        }

        TreeNode parentNode = searchNode(root, parentData);
        if (parentNode != null) {
            parentNode.children.add(new TreeNode(childData));
        } else {
            System.out.println("Parent not found.");
        }
    }

    // Search for node
    public boolean search(int value) {
        return searchNode(root, value) != null;
    }

    private TreeNode searchNode(TreeNode node, int value) {
        if (node == null) return null;
        if (node.data == value) return node;

        for (TreeNode child : node.children) {
            TreeNode result = searchNode(child, value);
            if (result != null) return result;
        }
        return null;
    }

    // Delete node (and its subtree)
    public void delete(int value) {
        if (root == null) {
            System.out.println("Tree is empty.");
            return;
        }
        if (root.data == value) {
            root = null;
            return;
        }
        if (!deleteNode(root, value)) {
            System.out.println("Value not found.");
        }
    }

    private boolean deleteNode(TreeNode parent, int value) {
        Iterator<TreeNode> it = parent.children.iterator();
        while (it.hasNext()) {
            TreeNode child = it.next();
            if (child.data == value) {
                it.remove();
                return true;
            } else {
                if (deleteNode(child, value)) return true;
            }
        }
        return false;
    }

    // DFS Traversal
    public void dfs(TreeNode node) {
        if (node == null) return;
        System.out.print(node.data + " ");
        for (TreeNode child : node.children) {
            dfs(child);
        }
    }

    // BFS Traversal
    public void bfs() {
        if (root == null) return;
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        while (!q.isEmpty()) {
            TreeNode node = q.poll();
            System.out.print(node.data + " ");
            q.addAll(node.children);
        }
    }

    // Height of tree
    public int height(TreeNode node) {
        if (node == null) return -1;
        if (node.children.isEmpty()) return 0;

        int maxHeight = -1;
        for (TreeNode child : node.children) {
            maxHeight = Math.max(maxHeight, height(child));
        }
        return maxHeight + 1;
    }

    // Count nodes
    public int countNodes(TreeNode node) {
        if (node == null) return 0;
        int count = 1;
        for (TreeNode child : node.children) {
            count += countNodes(child);
        }
        return count;
    }

    // Display structure (Indented)
    public void display(TreeNode node, String indent) {
        if (node == null) return;
        System.out.println(indent + node.data);
        for (TreeNode child : node.children) {
            display(child, indent + "|    ");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        GeneralTree tree = new GeneralTree();
        int choice, value, parent;

        do {
            System.out.println("\\n--- General Tree Operations ---");
            System.out.println("1. Insert");
            System.out.println("2. Delete");
            System.out.println("3. Search");
            System.out.println("4. DFS Traversal");
            System.out.println("5. BFS Traversal");
            System.out.println("6. Height");
            System.out.println("7. Count Nodes");
            System.out.println("8. Display Structure");
            System.out.println("9. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    if (tree.root == null) {
                        System.out.print("Enter root value: ");
                        value = sc.nextInt();
                        tree.insert(0, value);
                    } else {
                        System.out.print("Enter parent value: ");
                        parent = sc.nextInt();
                        System.out.print("Enter child value: ");
                        value = sc.nextInt();
                        tree.insert(parent, value);
                    }
                    break;
                case 2:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter value to delete: ");
                    value = sc.nextInt();
                    tree.delete(value);
                    break;
                case 3:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter value to search: ");
                    value = sc.nextInt();
                    System.out.println(tree.search(value) ? "Found" : "Not Found");
                    break;
                case 4:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("DFS: ");
                    tree.dfs(tree.root);
                    System.out.println();
                    break;
                case 5:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("BFS: ");
                    tree.bfs();
                    System.out.println();
                    break;
                case 6:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Height: " + tree.height(tree.root));
                    break;
                case 7:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Total Nodes: " + tree.countNodes(tree.root));
                    break;
                case 8:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    tree.display(tree.root, "");
                    break;
                case 9:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        } while (choice != 9);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 1
Enter root value: 1

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 1
Enter parent value: 1
Enter child value: 2

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 1
Enter parent value: 1
Enter child value: 3

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 1
Enter parent value: 1
Enter child value: 4

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 1
Enter parent value: 2
Enter child value: 5

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 1
Enter parent value: 3
Enter child value: 6

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 1
Enter parent value: 3
Enter child value: 7

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 8
1
|    2
|    |    5
|    3
|    |    6
|    |    7
|    4

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 3
Enter value to search: 5
Found

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 4
DFS: 1 2 5 3 6 7 4

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 5
BFS: 1 2 3 4 5 6 7

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 6
Height: 2

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 7
Total Nodes: 7

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 2
Enter value to delete: 3

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 8
1
|    2
|    |    5
|    4

--- General Tree Operations ---
1. Insert
2. Delete
3. Search
4. DFS Traversal
5. BFS Traversal
6. Height
7. Count Nodes
8. Display Structure
9. Exit
Enter your choice: 9
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Hierarchical data representation (file systems, org charts).</li>
<li>Expression parsing in compilers (expression trees).</li>
<li>Routing algorithms in networks.</li>
<li>Database indexing (B-trees).</li>
<li>Artificial Intelligence (decision trees).</li>
<li>Syntax trees in programming language processing.</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Requires more memory for storing pointers in linked representation.</li>
<li>Can become <b>unbalanced</b> leading to degraded performance (like a linked list).</li>
<li>Complex deletion operation in certain tree types.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<li><b>Time Complexity</b>: O(n) (for all operations)</li>
<li><b>Space Complexity</b>: O(n)</li>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NullPointerException</b>: Accessing a child of a null node.</li>
<li><b>ArrayIndexOutOfBoundsException</b>: In array representation if index is out of bounds.</li>
<li><b>NoSuchElementException</b>: When searching for a non-existent element.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Hash Map')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Binary Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Binary Tree', data: `
      <h1>Binary Tree</h1>
      <p>A <b>Binary Tree</b> is a hierarchical data structure in which each node has at most <b>two children</b>, referred to as the <b>left child</b> and <b>right child</b>.</p>
      <p>In other words, every node in a binary tree can have either 0 or 1 or 2 children.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li>Think of a <b>family tree</b> — each person (node) may have up to <b>two children</b>.</li>
<li>The root is the oldest known ancestor, branches go to children, and so on.</li>
        </div>
      </div>



      <div class="section">
        <h2>Types</h2>
        <div class="data-box">
<p><b>1. Full Binary Tree</b></p>
<div class="indented">
  <p>Every node has either 0 or 2 children. In other words a binary tree is said to be a full binary tree if all nodes except leaf nodes have two children. A full binary tree is also called a <b>strict binary tree</b> or <b>proper binary tree</b> or <b>2- tree</b>.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt2.png" class="data-img">
  <p>One practical application of Full binary trees is called <b>"Expression Trees"</b>. An expression tree is used to store and represent a mathematical expression. In the expression tree all the operands are leaf nodes and all the operators as internal nodes. An example expression tree is given below.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt3.png" class="data-img">
</div>

<p><b>2. Complete Binary Tree</b></p>
<div class="indented">
  <p>All levels are completely filled except possibly the last, which is filled from left to right.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt4.png" class="data-img">
</div>

<p><b>3. Perfect Binary Tree</b></p>
<div class="indented">
  <p>All internal nodes have two children, all leaf nodes are at the same level, and at every level of the perfect binary tree there must be 2<sup>level</sup> number of nodes.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt5.png" class="data-img">
</div>

<p><b>4. Extended binary tree</b></p>
<div class="indented">
  <p>A full binary tree obtained by adding dummy nodes to the binary tree is called Extended Binary Trees.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt6.png" class="data-img">
</div>

<p><b>5. Threaded Binary Tree</b></p>
<div class="indented">
  <p>For a tree of N nodes , while representing it in linked list representation we will have 2N references (Each node has one left and one right reference), out of which we will have N+1 values and others are NULL.</p>
  <p>So in any binary tree linked list representation, there are more NULL pointers than actual pointers.</p>
  <p>The idea of the <b>threaded binary tree</b> is to make all right child pointers that would normally be NULL to point to the in-order successor of the node (if it exists). This would help in making the in-order traversal faster and to do it without using stack or recursion.</p>
  <p>In <b>threaded binary trees</b>, NULL pointers are replaced by references to other nodes in the tree, called <b>threads</b>.</p>
  <p>There are two types of threaded binary trees:</p>
  <ol>
    <li><b>Single Threaded</b>: Where all right NULL pointers are made to point to the in-order successor. If there is no in-order successor, then it points to the root node.</li>
    <li><b>Double Threaded</b>: Where both left and right NULL pointers are made to point to in-order predecessor and in-order successor respectively. The predecessor threads are useful for reverse in-order traversal and post-order traversal. If there is no in-order predecessor or in-order successor, then it points to the root node.</li>
  </ol>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt7.png" class="data-img">
  <p>Performing <b>in - order traversal</b> on the above binary tree would result in : <b>H → D → B → E → A → F → C → G</b>.</p>
  <p>The <b>single threaded binary tree</b> would be:</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt8.png" class="data-img">
  <p>The <b>double threaded binary tree</b> would be:</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt9.png" class="data-img">
  <p><b>Note</b>: To understand the links, refer to the successor and predecessor of each node in the in-order traversal of the tree.</p>
</div>

<p><b>6. Balanced Binary Tree</b></p>
<div class="indented">
  <p>A binary tree is balanced if the height of the tree is <b>O(Log n)</b> where n is the number of nodes. In balanced trees, balancing operations are performed to make sure that the difference between heights of left and right sub trees of any node in the tree is at most 1.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt10.png" class="data-img">
</div>

<p><b>7. Binary Search Tree (BST)</b></p>
<div class="indented">
  <p>Left child < parent < right child.</p>
</div>

<p><b>8. AVL Tree</b></p>
<div class="indented">
  <p>Self-balancing BST.</p>
</div>

<p><b>9. Red-Black Tree</b></p>
<div class="indented">
  <p>Self-balancing BST.</p>
</div>
        </div>
      </div>



      <div class="section">
        <h2>Representation</h2>
        <div class="data-box">
<li>A <b>binary tree</b> can be represented in two methods. They are:</li>
<ol>
  <li>Array Representation.</li>
  <li>Linked List Representation.</li>
</ol>
<p><b>1. Array Representation</b></p>
<div class="indented">
  <p>In array representation of binary trees, we use a one dimensional array (1-D Array) to represent a binary tree. The root node of the tree is always put into index 0. For any parent placed at location K, the left child would be present at (2*K)+1 location and the right child would be present at (2*K)+2 location.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt7.png" class="data-img">
  <p>The above binary tree can be represented in the array representation as follows.</p>
  <table>
    <tbody>
        <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>H</td>
        </tr>
    </tbody>
  </table>
</div>
<p><b>2. Linked List Representation</b></p>
<div class="indented">
  <p>In this representation, we use a list with one type of node which consists of three fields namely left reference field, data field and right reference field.</p>
  <p>In this representation, every node's data field stores the actual value of the tree node. If that node has a left child, then the left reference field stores the address of that left child node otherwise that field stores NULL. If that node has a right child then the right reference field stores the address of the right child node otherwise that field stores NULL.</p>
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt11.png" class="data-img">
</div>
        </div>
      </div>



      <div class="section">
        <h2>Traversals</h2>
        <div class="data-box">
<li><b>Traversing</b> is a way of visiting or displaying all the data elements of the data structure.</li>
<li>Generally the linear data structures like Arrays, Stacks, Queues, Lists have only one way of traversing.</li>
<li>Displaying (or) visiting order of all the nodes in a binary tree is called <b>"Binary Tree Traversal"</b>.</li>
<li>While visiting all the nodes of the binary tree, we follow a particular order in which we visit the nodes, it depends on the traversal method we follow. There are four traversal methods for binary trees. They are:</li>
<ul>
  <li><b>Depth first traversals</b>: Starts the traversal from the root node and explores the search as far as possible from the root node i.e. depth wise.</li>
  <ol>
    <li><b>In - order traversal</b>: In the In - order traversal, the left child node is visited first, then the root node is visited and later the right child node is visited. This in-order traversal is applicable for every root node of all of the sub-trees in the tree.</li>
    <li><b>Pre - order traversal</b>: In the Pre - order traversal, the root node is visited first, then the left child is visited and later the right child node is visited. This pre-order traversal is applicable for every root node of all of the sub-trees in the tree.</li>
    <li><b>Post - order traversal</b>: In the post - order traversal, the left child node is visited first, then the right child node is visited and later the root node is visited. This post-order traversal is applicable for every root node of all of the sub-trees in the tree.</li>
  </ol>
  <li><b>Breath first traversal (Level Order Traversal)</b>: Starts traversal from the root node and then explores the search in the level by level manner i.e. as close as possible from the root node.</li>
</ul>
<li><b>Note</b>: We use a stack/recursion to perform depth first traversal and a queue to perform the breadth first traversal.</li>
<li><b>For Example</b>:</li>
<div class="indented">
  <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binaryTree/bt7.png" class="data-img">
  <li>Performing <b>in - order traversal</b> on the above binary tree would result in : <b>H → D → B → E → A → F → C → G</b>.</li>
  <li>Performing <b>pre - order traversal</b> on the above binary tree would result in : <b>A → B → D → H → E → C → F → G</b>.</li>
  <li>Performing <b>post - order traversal</b> on the above binary tree would result in : <b>H → D → E → B → F → G → C → A</b>.</li>
  <li>Performing <b>level order traversal</b> on the above binary tree would result in : <b>A → B → C → D → E → F → G → H</b>.</li>
</div>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class TreeNode {
    int data;
    TreeNode left, right;

    TreeNode(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li><b>Hierarchical structure</b> with a single root.</li>
<li><b>Each node</b> can have at most two children.</li>
<li><b>Recursive nature</b> — each subtree is itself a binary tree.</li>
<li>Traversal methods include <b>Preorder</b>, <b>Inorder</b>, and <b>Postorder</b>.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>Insertion</b> – Adds a node to the tree.</li>
<li><b>Deletion</b> – Removes a node while maintaining tree structure.</li>
<li><b>Traversal</b> – Visits all nodes in a specific order:</li>
<ul>
  <li>Preorder (Root → Left → Right)</li>
  <li>Inorder (Left → Root → Right)</li>
  <li>Postorder (Left → Right → Root)</li>
  <li>Level-order (Breadth-First Search)</li>
</ul>
<li><b>Search</b> – Finds a node with a given value.</li>
<li><b>Find Min/Max</b> – Finds the smallest/largest value (for BSTs).</li>
<li><b>Height</b> – Returns the height of the tree.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.*;

class TreeNode {
    int data;
    TreeNode left, right;

    TreeNode(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}

public class BinaryTree {
    TreeNode root;

    public void insert(int parentData, int childData, char side) {
        TreeNode newNode = new TreeNode(childData);
        if (root == null) {
            root = newNode;
            return;
        }

        TreeNode parent = findNode(root, parentData);

        if (side == 'L' || side == 'l') {
            if (parent.left == null) {
                parent.left = newNode;
                System.out.println("Inserted " + childData + " as LEFT child of " + parentData + ".");
            } else {
                parent.left.data = childData;
                System.out.println("Left child of " + parentData + " is modified.");
            }
        } else if (side == 'R' || side == 'r') {
            if (parent.right == null) {
                parent.right = newNode;
                System.out.println("Inserted " + childData + " as RIGHT child of " + parentData + ".");
            } else {
                parent.right.data = childData;
                System.out.println("Right child of " + parentData + " is modified.");
            }
        } else {
            System.out.println("Invalid side. Use 'L' or 'R'.");
        }
    }

    private TreeNode findNode(TreeNode node, int value) {
        if (node == null) return null;
        if (node.data == value) return node;
        TreeNode left = findNode(node.left, value);
        if (left != null) return left;
        return findNode(node.right, value);
    }

    public boolean search(int value) {
        return findNode(root, value) != null;
    }

    public void delete(int value) {
        if (root.data == value) {
            root = null;
            System.out.println("Deleted root and its subtree.");
            return;
        }

        TreeNode parent = findParent(root, value);
        if (parent == null) {
            System.out.println("Value not found.");
            return;
        }

        if (parent.left != null && parent.left.data == value) {
            parent.left = null;
            System.out.println("Deleted node " + value + " and its subtree (was LEFT child of " + parent.data + ").");
        } else if (parent.right != null && parent.right.data == value) {
            parent.right = null;
            System.out.println("Deleted node " + value + " and its subtree (was RIGHT child of " + parent.data + ").");
        }
    }

    private TreeNode findParent(TreeNode node, int value) {
        if (node == null) return null;
        if ((node.left != null && node.left.data == value) || (node.right != null && node.right.data == value)) {
            return node;
        }
        TreeNode left = findParent(node.left, value);
        if (left != null) return left;
        return findParent(node.right, value);
    }

    // Traversals
    public void preorder(TreeNode node) {
        if (node == null) return;
        System.out.print(node.data + " ");
        preorder(node.left);
        preorder(node.right);
    }

    public void inorder(TreeNode node) {
        if (node == null) return;
        inorder(node.left);
        System.out.print(node.data + " ");
        inorder(node.right);
    }

    public void postorder(TreeNode node) {
        if (node == null) return;
        postorder(node.left);
        postorder(node.right);
        System.out.print(node.data + " ");
    }

    public void levelOrder() {
        if (root == null) return;
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        while (!q.isEmpty()) {
            TreeNode t = q.poll();
            System.out.print(t.data + " ");
            if (t.left != null) q.add(t.left);
            if (t.right != null) q.add(t.right);
        }
    }

    public int height(TreeNode node) {
        if (node == null) return -1;
        return 1 + Math.max(height(node.left), height(node.right));
    }

    public int countNodes(TreeNode node) {
        if (node == null) return 0;
        return 1 + countNodes(node.left) + countNodes(node.right);
    }

    public void display(TreeNode node, String indent, String childType) {
        if (node == null) return;
        System.out.println(indent + childType + node.data);
        display(node.left, indent + "    ", "L-- ");
        display(node.right, indent + "    ", "R-- ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BinaryTree tree = new BinaryTree();
        int choice;

        do {
            System.out.println("\\n--- Binary Tree Operations ---");
            System.out.println("1. Insert (specify parent & side)");
            System.out.println("2. Delete (remove node & subtree)");
            System.out.println("3. Search");
            System.out.println("4. Preorder Traversal");
            System.out.println("5. Inorder Traversal");
            System.out.println("6. Postorder Traversal");
            System.out.println("7. Level-order Traversal");
            System.out.println("8. Height");
            System.out.println("9. Count Nodes");
            System.out.println("10. Display Structure");
            System.out.println("11. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    if (tree.root == null) {
                        System.out.print("Enter root value: ");
                        int rootVal = sc.nextInt();
                        tree.insert(0, rootVal, 'P');
                    } else {
                        System.out.print("Enter parent value: ");
                        int p = sc.nextInt();
                        System.out.print("Enter child value: ");
                        int c = sc.nextInt();
                        System.out.print("Insert as (L/R): ");
                        char side = sc.next().charAt(0);
                        
                        TreeNode parentNode = tree.findNode(tree.root, p);
                        boolean overwrite = false;
                        if (parentNode == null) {
                            System.out.println("Parent not found. Operation cancelled.");
                        } else {
                            boolean occupied = (side == 'L' || side == 'l') ? (parentNode.left != null) :
                                               (side == 'R' || side == 'r') ? (parentNode.right != null) : false;
                            if (occupied) {
                                System.out.print("Slot occupied. Modify value? (y/n): ");
                                char ans = sc.next().charAt(0);
                                overwrite = (ans == 'y' || ans == 'Y');
                                if (overwrite) {
                                    tree.insert(p, c, side);
                                }
                            } else {
                                tree.insert(p, c, side);
                            }
                        }
                    }
                    break;
                case 2:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter value to delete: ");
                    int d = sc.nextInt();
                    tree.delete(d);
                    break;
                case 3:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter value to search: ");
                    int s = sc.nextInt();
                    System.out.println(tree.search(s) ? "Found" : "Not Found");
                    break;
                case 4:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Preorder: ");
                    tree.preorder(tree.root);
                    System.out.println();
                    break;
                case 5:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Inorder: ");
                    tree.inorder(tree.root);
                    System.out.println();
                    break;
                case 6:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Postorder: ");
                    tree.postorder(tree.root);
                    System.out.println();
                    break;
                case 7:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Level-order: ");
                    tree.levelOrder();
                    System.out.println();
                    break;
                case 8:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Height: " + tree.height(tree.root));
                    break;
                case 9:
                    System.out.println("Total Nodes: " + tree.countNodes(tree.root));
                    break;
                case 10:
                    if (tree.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Tree structure:");
                    tree.display(tree.root, "", "");
                    break;
                case 11:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        } while (choice != 11);

        sc.close();
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 1
Enter root value: 1

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 1
Enter parent value: 1
Enter child value: 2
Insert as (L/R): l
Inserted 2 as LEFT child of 1.

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 1
Enter parent value: 1
Enter child value: 3
Insert as (L/R): r
Inserted 3 as RIGHT child of 1.

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 1
Enter parent value: 2
Enter child value: 4
Insert as (L/R): l
Inserted 4 as LEFT child of 2.

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 1
Enter parent value: 3
Enter child value: 5
Insert as (L/R): l
Inserted 5 as LEFT child of 3.

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 1
Enter parent value: 3
Enter child value: 6
Insert as (L/R): r
Inserted 6 as RIGHT child of 3.

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 1
Enter parent value: 6
Enter child value: 7
Insert as (L/R): r
Inserted 7 as RIGHT child of 6.

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 10
Tree structure:
1
    L-- 2
        L-- 4
    R-- 3
        L-- 5
        R-- 6
            R-- 7

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 3
Enter value to search: 3
Found

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 4
Preorder: 1 2 4 3 5 6 7

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 5
Inorder: 4 2 1 5 3 6 7

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 6
Postorder: 4 2 5 7 6 3 1

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 7
Level-order: 1 2 3 4 5 6 7

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 8
Height: 3

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 9
Total Nodes: 7

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 2
Enter value to delete: 6
Deleted node 6 and its subtree (was RIGHT child of 3).

--- Binary Tree Operations ---
1. Insert (specify parent & side)
2. Delete (remove node & subtree)
3. Search
4. Preorder Traversal
5. Inorder Traversal
6. Postorder Traversal
7. Level-order Traversal
8. Height
9. Count Nodes
10. Display Structure
11. Exit
Enter your choice: 11
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li><b>Binary Search Trees (BSTs)</b> for fast search, insert, and delete.</li>
<li><b>Heap Trees</b> for priority queues.</li>
<li><b>Expression Trees</b> for parsing mathematical expressions.</li>
<li><b>Huffman Coding Trees</b> in data compression.</li>
<li><b>Decision Trees</b> in AI and Machine Learning.</li>
<li><b>Routing Tables</b> in networking.</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Can become <b>unbalanced</b>, leading to poor performance (like a linked list).</li>
<li>Complex deletion logic compared to arrays or linked lists.</li>
<li>Not memory efficient for sparse trees due to many null child pointers.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Best Case (Balanced)</th>
            <th>Worst Case (Skewed)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Insertion</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Deletion</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Search</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Traversal</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NullPointerException</b> – when operating on a null node reference.</li>
<li><b>StackOverflowError</b> – if recursion depth exceeds (very deep tree).</li>
<li><b>NoSuchElementException</b> – if attempting to access a non-existent node in certain search scenarios.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Binary Search Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Binary Search Tree', data: `
      <h1>Binary Search Tree</h1>
      <p>A <b>Binary Search Tree (BST)</b> is a binary tree data structure in which each node has at most two children, and it satisfies the <b>BST property</b>:</p>
      <ul>
        <li><b>The left subtree</b> of a node contains only nodes with keys <b>less than</b> the node’s key.</li>
        <li><b>The right subtree</b> of a node contains only nodes with keys <b>greater than</b> the node’s key.</li>
        <li><b>No duplicate keys</b> are allowed.</li>
      </ul>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binarySearchTree/bst1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li>Think of a <b>dictionary</b>:</li>
<ul>
  <li>Words are arranged in sorted order.</li>
  <li>To find a word, you check the middle section, then decide whether to go left (earlier words) or right (later words).</li>
  <li>Similarly, a BST organizes elements so searching, inserting, and deleting can be done efficiently.</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Right and Left Skewed Trees</h2>
        <div class="data-box">
<li>A <b>"Right Skewed Tree"</b> refers to all the nodes of a tree that have a right child but no corresponding left child.</li>
<li>A <b>"Left Skewed Tree"</b> refers to all the nodes of a tree that have a left child but no corresponding right child.</li>
<li>Imagine starting with an empty binary search tree and inserting <b>22, 45, 66, 76, 85, 92</b> into the binary search tree in that order.</li>
<li>The output of the tree would be:</li>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binarySearchTree/bst2.png" class="data-img">
<li>Imagine starting with an empty binary search tree and inserting <b>92, 85, 76, 66, 45, 22</b> into the binary search tree in that order.</li>
<li>The output of the tree would be:</li>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/binarySearchTree/bst3.png" class="data-img">
<li>In both cases , the tree is not a branching tree, but a linear tree or skewed tree. Because of this behavior, in the worst case each of the operations (search, insertion and deletion) takes time O(n) compared to O(log n).</li>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class Node {
    int data;
    Node left, right;

    Node(int data) {
        this.data = data;
        left = right = null;
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Follows the <b>binary tree structure</b> (each node has 0–2 children).</li>
<li>Maintains <b>sorted order</b> of elements.</li>
<li>Allows efficient searching, insertion, and deletion (O(log n) on average).</li>
<li>Height of the tree affects performance — balanced trees perform better.</li>
<li>No duplicates allowed (in standard BST).</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>insert(int key)</b>: Adds a new node in the correct position.</li>
<li><b>search(int key)</b>: Finds if a value exists in the tree.</li>
<li><b>delete(int key)</b>: Removes a node while maintaining BST property.</li>
<li><b>inorder()</b>: Traverses the tree in sorted order.</li>
<li><b>preorder()</b>: Traverses root → left → right.</li>
<li><b>postorder()</b>: Traverses left → right → root.</li>
<li><b>findMin()</b>: Returns the minimum value.</li>
<li><b>findMax()</b>: Returns the maximum value.</li>
<li><b>isEmpty()</b>: Checks if the tree is empty.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node left, right;

    Node(int data) {
        this.data = data;
        left = right = null;
    }
}

public class BinarySearchTree {
    Node root;

    public boolean isEmpty() {
        return root == null;
    }

    public void insert(int data) {
        root = insertRec(root, data);
    }

    private Node insertRec(Node root, int data) {
        if (root == null) {
            return new Node(data);
        }
        if (data < root.data) {
            root.left = insertRec(root.left, data);
        } else if (data > root.data) {
            root.right = insertRec(root.right, data);
        } else {
            System.out.println("Duplicate values not allowed: " + data);
        }
        return root;
    }

    public boolean search(int key) {
        return searchRec(root, key);
    }

    private boolean searchRec(Node root, int key) {
        if (root == null) return false;
        if (root.data == key) return true;
        return key < root.data ? searchRec(root.left, key) : searchRec(root.right, key);
    }

    public void delete(int key) {
        root = deleteRec(root, key);
    }

    private Node deleteRec(Node root, int key) {
        if (root == null) return null;

        if (key < root.data) {
            root.left = deleteRec(root.left, key);
        } else if (key > root.data) {
            root.right = deleteRec(root.right, key);
        } else {
            if (root.left == null) return root.right;
            else if (root.right == null) return root.left;

            root.data = findMinRec(root.right);
            root.right = deleteRec(root.right, root.data);
        }
        return root;
    }

    public int findMin() {
        if (isEmpty()) throw new RuntimeException("Tree is empty");
        return findMinRec(root);
    }

    private int findMinRec(Node root) {
        return root.left == null ? root.data : findMinRec(root.left);
    }

    public int findMax() {
        if (isEmpty()) throw new RuntimeException("Tree is empty");
        return findMaxRec(root);
    }

    private int findMaxRec(Node root) {
        return root.right == null ? root.data : findMaxRec(root.right);
    }

    public void inorder() {
        inorderRec(root);
        System.out.println();
    }

    private void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.data + " ");
            inorderRec(root.right);
        }
    }

    public void preorder() {
        preorderRec(root);
        System.out.println();
    }

    private void preorderRec(Node root) {
        if (root != null) {
            System.out.print(root.data + " ");
            preorderRec(root.left);
            preorderRec(root.right);
        }
    }

    public void postorder() {
        postorderRec(root);
        System.out.println();
    }

    private void postorderRec(Node root) {
        if (root != null) {
            postorderRec(root.left);
            postorderRec(root.right);
            System.out.print(root.data + " ");
        }
    }
    
    public void display(Node node, String indent, String childType) {
        if (node == null) return;
        System.out.println(indent + childType + node.data);
        display(node.left, indent + "    ", "L-- ");
        display(node.right, indent + "    ", "R-- ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BinarySearchTree bst = new BinarySearchTree();
        int choice, ele;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Search");
            System.out.println("3. Delete");
            System.out.println("4. Inorder Traversal");
            System.out.println("5. Preorder Traversal");
            System.out.println("6. Postorder Traversal");
            System.out.println("7. Find Min");
            System.out.println("8. Find Max");
            System.out.println("9. Display Structure");
            System.out.println("10. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    bst.insert(ele);
                    break;
                case 2:
                    if (bst.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to search: ");
                    ele = sc.nextInt();
                    System.out.println(bst.search(ele) ? "Found" : "Not Found");
                    break;
                case 3:
                    if (bst.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to delete: ");
                    ele = sc.nextInt();
                    bst.delete(ele);
                    break;
                case 4:
                    if (bst.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    bst.inorder();
                    break;
                case 5:
                    if (bst.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    bst.preorder();
                    break;
                case 6:
                    if (bst.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    bst.postorder();
                    break;
                case 7:
                    if (bst.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Min: " + bst.findMin());
                    break;
                case 8:
                    if (bst.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Max: " + bst.findMax());
                    break;
                case 9:
                    if (bst.root == null ) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Tree structure:");
                    bst.display(bst.root, "", "");
                    break;
                case 10:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 10);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 1
Enter element: 5

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 1
Enter element: 3

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 1
Enter element: 2

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 1
Enter element: 1

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 1
Enter element: 4

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 1
Enter element: 6

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 1
Enter element: 7

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 9
Tree structure:
5
    L-- 3
        L-- 2
            L-- 1
        R-- 4
    R-- 6
        R-- 7

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 2
Enter element to search: 3
Found

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 3
Enter element to delete: 3

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 9
Tree structure:
5
    L-- 4
        L-- 2
            L-- 1
    R-- 6
        R-- 7

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 4
1 2 4 5 6 7

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 5
5 4 2 1 6 7

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 6
1 2 4 7 6 5

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 7
Min: 1

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 8
Max: 7

Operations:
1. Insert
2. Search
3. Delete
4. Inorder Traversal
5. Preorder Traversal
6. Postorder Traversal
7. Find Min
8. Find Max
9. Display Structure
10. Exit
Choose an operation: 10
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Efficient searching & sorting.</li>
<li>Symbol table in compilers.</li>
<li>Database indexing.</li>
<li>Implementing sets & maps.</li>
<li>Autocomplete suggestions.</li>
<li>Priority systems (when combined with balancing).</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Can become <b>unbalanced</b>, leading to O(n) worst-case time complexity.</li>
<li>Requires extra balancing logic (AVL, Red-Black Tree) for consistent performance.</li>
<li>Not efficient for duplicate-heavy datasets without modifications.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Average Case</th>
            <th>Worst Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Insert</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Search</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Delete</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Traversals</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>RuntimeException</b>: When calling findMin() or findMax() on an empty tree.</li>
<li><b>IllegalArgumentException</b>: If duplicate insertion is restricted and attempted.</li>
<li><b>NullPointerException</b>: If improper handling of empty trees in methods.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Binary Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Heap')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Heap', data: `
      <h1>Heap</h1>
      <p>A <b>Heap</b> is a special tree-based data structure that satisfies the <b>heap property</b>:</p>
      <ul>
        <li><b>Max Heap</b>: The value of the parent node is always greater than or equal to the values of its children.</li>
        <li><b>Min Heap</b>: The value of the parent node is always less than or equal to the values of its children.</li>
      </ul>
      <p>The heap is a <b>complete binary tree</b> — all levels are completely filled except possibly the last, which is filled from left to right.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/heap/h1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li>Think of a <b>leaderboard in a game</b>:</li>
<ul>
  <li>In a <b>Max Heap</b>, the top player always appears at the top spot, even if other scores are lower.</li>
  <li>In a <b>Min Heap</b>, the lowest score (e.g., in a golf tournament) appears first.</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Note</h2>
        <div class="data-box">
<li><b>Heap Overflow</b>: When trying to insert into a heap that has reached maximum capacity (for fixed-size array implementation).</li>
<li><b>Heap Underflow</b>: When trying to remove from an empty heap.</li>
        </div>
      </div>



      <div class="section">
        <h2>Types</h2>
        <div class="data-box">
<ol>
  <li><b>Max Heap</b>: Highest value element is always at the root.</li>
  <li><b>Min Heap</b>: Lowest value element is always at the root.</li>
  <li><b>Binomial Heap</b>: Used for efficient merging of heaps.</li>
  <li><b>Fibonacci Heap</b>: Optimized for very fast decrease-key operations.</li>
  <li><b>d-ary Heap</b>: Generalization of binary heap with more than two children per node.</li>
</ol>
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Complete binary tree.</li>
<li>Can be represented efficiently using arrays (no need for explicit pointers).</li>
<li>Root contains either the minimum or maximum value (depending on type).</li>
<li>Supports <b>heapify</b> operation to maintain heap property after insertion or deletion.</li>
<li>Insertion and deletion take <b>O(log n)</b> time due to heapify.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>insert() / enqueue()</b>: Adds a new element to the heap.</li>
<li><b>extractMax() / extractMin()</b>: Removes and returns the root element.</li>
<li><b>peek()</b>: Returns the root element without removing it.</li>
<li><b>heapifyUp()</b>: Restores heap property after insertion.</li>
<li><b>heapifyDown()</b>: Restores heap property after deletion.</li>
<li><b>isEmpty()</b>: Checks if the heap is empty.</li>
<li><b>isFull()</b>: Checks if the heap is full (array-based).</li>
<li><b>display()</b>: Shows heap elements in array form.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

public class HeapArray {
    int[] heap;
    int size, capacity;
    boolean isMaxHeap;

    HeapArray(int capacity, boolean isMaxHeap) {
        this.capacity = capacity;
        heap = new int[capacity];
        size = 0;
        this.isMaxHeap = isMaxHeap;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == capacity;
    }

    public void insert(int val) {
        if (isFull()) {
            System.out.println("Heap Overflow.");
            return;
        }
        heap[size] = val;
        heapifyUp(size);
        size++;
    }

    public void heapifyUp(int index) {
        int parent = (index - 1) / 2;
        if (index > 0 && compare(heap[index], heap[parent])) {
            swap(index, parent);
            heapifyUp(parent);
        }
    }

    public int extractRoot() {
        if (isEmpty()) {
            return -1;
        }
        int root = heap[0];
        heap[0] = heap[size - 1];
        size--;
        heapifyDown(0);
        return root;
    }

    public void heapifyDown(int index) {
        int left = 2 * index + 1;
        int right = 2 * index + 2;
        int target = index;

        if (left < size && compare(heap[left], heap[target])) {
            target = left;
        }
        if (right < size && compare(heap[right], heap[target])) {
            target = right;
        }
        if (target != index) {
            swap(index, target);
            heapifyDown(target);
        }
    }

    private boolean compare(int child, int parent) {
        return isMaxHeap ? child > parent : child < parent;
    }

    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }

    public int peek() {
        if (isEmpty()) {
            return -1;
        }
        return heap[0];
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("Heap is Empty.");
            return;
        }
        for (int i = 0; i < size; i++) {
            System.out.print(heap[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter heap capacity: ");
        int cap = sc.nextInt();
        System.out.print("Max Heap? (true/false): ");
        boolean isMax = sc.nextBoolean();
        HeapArray h = new HeapArray(cap, isMax);

        int choice, ele;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Extract Root");
            System.out.println("3. Peek");
            System.out.println("4. isEmpty");
            System.out.println("5. isFull");
            System.out.println("6. Display");
            System.out.println("7. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    h.insert(ele);
                    break;
                case 2:
                    int root = h.extractRoot();
                    if(root == -1) {
                        System.out.println("Heap Underflow.");
                    } else {
                        System.out.println(root + " is removed.");
                    }
                    break;
                case 3:
                    int peek = h.peek();
                    if(peek == -1) {
                        System.out.println("Heap is Empty.");
                    } else {
                        System.out.println(peek + " is at the root.");
                    }
                    break;
                case 4:
                    System.out.println(h.isEmpty());
                    break;
                case 5:
                    System.out.println(h.isFull());
                    break;
                case 6:
                    h.display();
                    break;
                case 7:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 7);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter heap capacity: 5
Max Heap? (true/false): true

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 1
Enter element: 10

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 1
Enter element: 20

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 1
Enter element: 30

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 1
Enter element: 40

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 6
40 30 20 10

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 2
40 is removed.

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 3
30 is at the root.

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 4
false

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 5
false

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 6
30 10 20

Operations:
1. Insert
2. Extract Root
3. Peek
4. isEmpty
5. isFull
6. Display
7. Exit
Choose an operation: 7
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Priority queues (task scheduling, Dijkstra’s algorithm, Huffman coding).</li>
<li>Sorting (Heap Sort algorithm).</li>
<li>Bandwidth management in networking.</li>
<li>Event simulation systems.</li>
<li>Memory management in operating systems.</li>
<li>Load balancing in servers.</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Not suitable for fast searching of arbitrary elements.</li>
<li>Tree structure is implicit in array form, so traversal other than root-based can be tricky.</li>
<li>Insertion/deletion take <b>O(log n)</b>, slower than some specialized structures for certain tasks.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Insert</th>
            <td>O(log n)</td>
            <td>O(n) (array)</td>
        </tr>
        <tr>
            <th>Extract Root</th>
            <td>O(log n)</td>
            <td>O(n) (array)</td>
        </tr>
        <tr>
            <th>Peek</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>isEmpty</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>isFull</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Display</th>
            <td>O(n)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Heapify (build)</th>
            <td>O(n)</td>
            <td>O(1)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>IndexOutOfBoundsException</b>: If trying to access beyond heap capacity.</li>
<li><b>NoSuchElementException</b>: If extracting from an empty heap.</li>
<li><b>IllegalStateException</b>: If the heap is in an invalid state during operations.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Binary Search Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Height Balanced Trees')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Height Balanced Trees', data: `
      <h1>Height Balanced Trees</h1>
      <p>The <b>height</b> of a node in a tree is the length of the longest path from that node downward to a leaf, counting both the start and end vertices of the path. The height of all leaf nodes is 0. The height of a tree is the height of its root.</p>
      <p>A tree is height-balanced if all of its nodes are height-balanced.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/tree/t11.png" class="data-img">



      <div class="section">
        <h2>Height-balancing Requirement</h2>
        <div class="data-box">
<li>A node in a tree is <b>height-balanced</b> if the heights of its sub trees differ by no more than 1. (That is, if the sub trees have heights h1 and h2, then |h1 − h2| ≤ 1.).</li>
<li>The difference of heights of left sub tree and right sub tree of a node is also called as <b>"Balance Factor"</b></li>
<li><b>BalanceFactor(N) := Height(RightSubtree(N)) – Height(LeftSubtree(N))</b></li>
<li>There are several popular height balanced trees:</li>
<ul>
  <li>AVL tree</li>
  <li>B-tree</li>
  <li>Red-Black tree</li>
  <li>Splay tree</li>
  <li>2-3 tree</li>
</ul>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Heap')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'AVL Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'AVL Tree', data: `
      <h1>AVL Tree</h1>
      <p>An <b>AVL Tree</b> is a <b>self height balanced Binary Search Tree (BST)</b> where the height difference (balance factor) between the left and right subtrees of every node is <b>at most 1</b>.</p>
      <p>It was named after its inventors <b>Adelson-Velsky and Landis</b> in 1962.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/avlTree/at1.png" class="data-img">



      <div class="section">
        <h2>Balance Factor (BF)</h2>
        <div class="data-box">
<li>The <b>balance factor</b> of a node is the difference between the heights of the left and right subtrees of that node.</li>
<li><b>BF = Height(left subtree) − Height(right subtree)</b></li>
<li>Valid values for an AVL Tree node: <b>–1, 0, +1</b>.</li>
<li>If the BF of any node becomes less than –1 or greater than +1 after insertion/deletion, <b>rotations</b> are applied to restore balance.</li>
        </div>
      </div>



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li>Think of an AVL tree like <b>a library bookshelf</b> that automatically adjusts itself whenever a book is added or removed so that books on each side stay nearly the same height, preventing the shelf from tilting.</li>
        </div>
      </div>



      <div class="section">
        <h2>Why AVL?</h2>
        <div class="data-box">
<li>Without balancing (in normal BST), skewed insertions can make the tree behave like a linked list (O(n) search).</li>
<li>AVL ensures <b>O(log n)</b> height for efficient operations.</li>
        </div>
      </div>



      <div class="section">
        <h2>AVL Tree Rotations</h2>
        <div class="data-box">
<li>In AVL tree, after performing every operation like insertion and deletion we need to update and check the <b>balance factor</b> of every node in the tree. If any node does not satisfy the balance factor condition, then we must perform <b>"Rotations"</b>.</li>
<li><b>Rotation</b> is the process of moving the nodes to either left or right to make the tree balanced. If all the nodes satisfy the balance factor condition then we can conclude the insertion or deletion operation.</li>
<li>There are four rotations and they are classified into two types:</li>
<ol>
    <li><b>Single Rotations</b></li>
    <ol type="a">
        <li><b>Left Rotation (LL Rotation / RR Case)</b> – when inserted into the right subtree of the right child.</li>
        <li><b>Right Rotation (RR Rotation / LL Case)</b> – when inserted into the left subtree of the left child.</li>
    </ol>
    <li><b>Double Rotations</b></li>
    <ol type="a">
        <li><b>Left Right Rotation (LR Rotation / Case)</b> – when inserted into the right subtree of the left child.</li>
        <li><b>Right Left Rotation (RL Rotation / Case)</b> – when inserted into the left subtree of the right child.</li>
    </ol>
</ol>

<h3>Left Rotation (LL Rotation)</h3>
<div class="data-box">
    <p>If the AVL tree becomes unbalanced, when a node is inserted into the right sub tree of the right sub tree, then we perform a <b>single left rotation (LL Rotation)</b>.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/avlTree/at2.png" class="data-img">
</div>

<h3>Right Rotation (RR Rotation)</h3>
<div class="data-box">
    <p>If the AVL tree may become unbalanced, when a node is inserted in the left sub tree of the left sub tree, then we perform a <b>single right rotation (LL Rotation)</b>.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/avlTree/at3.png" class="data-img">
</div>

<h3>Left Right Rotation (LR Rotation)</h3>
<div class="data-box">
    <p>If the AVL tree may become unbalanced, when a node is inserted in the right sub tree of the left sub tree, then we perform a <b>left right rotation (LR Rotation)</b>.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/avlTree/at4.png" class="data-img">
</div>

<h3>Right Left Rotation (RL Rotation)</h3>
<div class="data-box">
    <p>If the AVL tree may become unbalanced, when a node is inserted in the left sub tree of the right sub tree, then we perform a <b>right left rotation (RL Rotation)</b>.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/avlTree/at5.png" class="data-img">
</div>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class Node {
    int key, height;
    Node left, right;

    Node(int d) {
        key = d;
        height = 1;
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Self-balancing BST.</li>
<li>Maintains height difference ≤ 1 for every node.</li>
<li>Guarantees <b>O(log n)</b> search, insert, and delete.</li>
<li>Rotations are used to rebalance after insertions and deletions.</li>
<li>Height is maintained for each node.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>insert(key)</b>: Inserts a key and balances the tree if needed.</li>
<li><b>delete(key)</b>: Removes a key and rebalances.</li>
<li><b>search(key)</b>: Finds a key in O(log n) time.</li>
<li><b>getBalance(node)</b>: Returns the balance factor of a node.</li>
<li><b>getHeight(node)</b>: Returns height of a node.</li>
<li><b>display() / inorder()</b>: Prints tree in sorted order.</li>
<li><b>rotations (leftRotate, rightRotate)</b>: Internal balancing mechanisms.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

class Node {
    int key, height;
    Node left, right;

    Node(int d) {
        key = d;
        height = 1;
    }
}

public class AVLTree {
    Node root;

    // Get height of node
    int height(Node N) {
        return (N == null) ? 0 : N.height;
    }

    // Get balance factor
    int getBalance(Node N) {
        return (N == null) ? 0 : height(N.left) - height(N.right);
    }

    // Right rotation
    Node rightRotate(Node y) {
        Node x = y.left;
        Node T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        x.height = Math.max(height(x.left), height(x.right)) + 1;

        return x;
    }

    // Left rotation
    Node leftRotate(Node x) {
        Node y = x.right;
        Node T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        y.height = Math.max(height(y.left), height(y.right)) + 1;

        return y;
    }

    // Insert node
    Node insert(Node node, int key) {
        if (node == null)
            return new Node(key);

        if (key < node.key)
            node.left = insert(node.left, key);
        else if (key > node.key)
            node.right = insert(node.right, key);
        else
            return node; // Duplicate keys not allowed

        // Update height
        node.height = 1 + Math.max(height(node.left), height(node.right));

        // Get balance factor
        int balance = getBalance(node);

        // Balancing
        // RR Rotation
        if (balance > 1 && key < node.left.key)
            return rightRotate(node);

        // LL Rotation
        if (balance < -1 && key > node.right.key)
            return leftRotate(node);

        // LR Rotation
        if (balance > 1 && key > node.left.key) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        // RL Rotation
        if (balance < -1 && key < node.right.key) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        return node;
    }

    // Get minimum value node
    Node minValueNode(Node node) {
        Node current = node;
        while (current.left != null)
            current = current.left;
        return current;
    }

    // Delete node
    Node delete(Node root, int key) {
        if (root == null)
            return root;

        if (key < root.key)
            root.left = delete(root.left, key);
        else if (key > root.key)
            root.right = delete(root.right, key);
        else {
            // Node with one or no child
            if ((root.left == null) || (root.right == null)) {
                Node temp = (root.left != null) ? root.left : root.right;

                // No child
                if (temp == null) {
                    temp = root;
                    root = null;
                } else
                    root = temp; // One child
            } else {
                // Two children: get inorder successor
                Node temp = minValueNode(root.right);
                root.key = temp.key;
                root.right = delete(root.right, temp.key);
            }
        }

        // If tree had one node
        if (root == null)
            return root;

        // Update height
        root.height = Math.max(height(root.left), height(root.right)) + 1;

        // Get balance factor
        int balance = getBalance(root);

        // Balancing
        // RR Rotation
        if (balance > 1 && getBalance(root.left) >= 0)
            return rightRotate(root);

        // LR Rotation
        if (balance > 1 && getBalance(root.left) < 0) {
            root.left = leftRotate(root.left);
            return rightRotate(root);
        }

        // LL Rotation
        if (balance < -1 && getBalance(root.right) <= 0)
            return leftRotate(root);

        // RL Rotation
        if (balance < -1 && getBalance(root.right) > 0) {
            root.right = rightRotate(root.right);
            return leftRotate(root);
        }

        return root;
    }

    // Search
    boolean search(Node root, int key) {
        if (root == null)
            return false;
        if (root.key == key)
            return true;
        return key < root.key ? search(root.left, key) : search(root.right, key);
    }

    // Traversals
    void inorder(Node node) {
        if (node != null) {
            inorder(node.left);
            System.out.print(node.key + " ");
            inorder(node.right);
        }
    }

    void preorder(Node node) {
        if (node != null) {
            System.out.print(node.key + " ");
            preorder(node.left);
            preorder(node.right);
        }
    }

    void postorder(Node node) {
        if (node != null) {
            postorder(node.left);
            postorder(node.right);
            System.out.print(node.key + " ");
        }
    }

    // Peek min
    void peekMin(Node root) {
        if (root == null) {
            System.out.println("Tree is empty.");
            return;
        }
        Node min = minValueNode(root);
        System.out.println("Min element: " + min.key);
    }

    // Peek max
    void peekMax(Node root) {
        if (root == null) {
            System.out.println("Tree is empty.");
            return;
        }
        Node current = root;
        while (current.right != null)
            current = current.right;
        System.out.println("Max element: " + current.key);
    }
    
    public void display(Node root, String indent, String childType) {
        if (root == null) return;
        System.out.println(indent + childType + root.key);
        display(root.left, indent + "    ", "L-- ");
        display(root.right, indent + "    ", "R-- ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        AVLTree tree = new AVLTree();
        int choice, ele;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Delete");
            System.out.println("3. Search");
            System.out.println("4. Peek Min");
            System.out.println("5. Peek Max");
            System.out.println("6. Inorder Traversal");
            System.out.println("7. Preorder Traversal");
            System.out.println("8. Postorder Traversal");
            System.out.println("9. Display Structure");
            System.out.println("10. Exit");
            System.out.print("Choose: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    tree.root = tree.insert(tree.root, ele);
                    break;
                case 2:
                    if (tree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to delete: ");
                    ele = sc.nextInt();
                    tree.root = tree.delete(tree.root, ele);
                    break;
                case 3:
                    if (tree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to search: ");
                    ele = sc.nextInt();
                    System.out.println(tree.search(tree.root, ele) ? "Found" : "Not Found");
                    break;
                case 4:
                    if (tree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    tree.peekMin(tree.root);
                    break;
                case 5:
                    if (tree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    tree.peekMax(tree.root);
                    break;
                case 6:
                    if (tree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    tree.inorder(tree.root);
                    System.out.println();
                    break;
                case 7:
                    if (tree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    tree.preorder(tree.root);
                    System.out.println();
                    break;
                case 8:
                    if (tree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    tree.postorder(tree.root);
                    System.out.println();
                    break;
                case 9:
                    if (tree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Tree structure:");
                    tree.display(tree.root, "", "");
                    break;
                case 10:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        } while (choice != 10);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 1
Enter element: 1

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 1
Enter element: 2

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 1
Enter element: 3

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 9
Tree structure:
2
    L-- 1
    R-- 3

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 1
Enter element: 4

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 1
Enter element: 5

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 1
Enter element: 6

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 1
Enter element: 7

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 1
Enter element: 8

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 1
Enter element: 9

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 9
Tree structure:
4
    L-- 2
        L-- 1
        R-- 3
    R-- 6
        L-- 5
        R-- 8
            L-- 7
            R-- 9

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 3
Enter element to search: 4
Found

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 4
Min element: 1

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 5
Max element: 9

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 6
1 2 3 4 5 6 7 8 9

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 7
4 2 1 3 6 5 8 7 9

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 8
1 3 2 5 7 9 8 6 4

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 2
Enter element to delete: 4

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 9
Tree structure:
5
    L-- 2
        L-- 1
        R-- 3
    R-- 8
        L-- 6
            R-- 7
        R-- 9

Operations:
1. Insert
2. Delete
3. Search
4. Peek Min
5. Peek Max
6. Inorder Traversal
7. Preorder Traversal
8. Postorder Traversal
9. Display Structure
10. Exit
Choose: 10
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Database indexing (fast search & update).</li>
<li>File systems (balanced storage trees).</li>
<li>Memory management in OS.</li>
<li>Network routers (routing tables).</li>
<li>Data compression (dictionary storage).</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>More complex to implement than simple BST.</li>
<li>Slightly slower insertion/deletion compared to unbalanced BST (due to rotations).</li>
<li>Extra space for storing height of each node.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Search</th>
            <td>O(log n)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Insert</th>
            <td>O(log n)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Delete</th>
            <td>O(log n)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Traversal</th>
            <td>O(n)</td>
            <td>O(n) (recursion stack)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NullPointerException</b>: Accessing child of a null node.</li>
<li><b>StackOverflowError</b>: If recursion depth is too high (very rare in AVL).</li>
<li><b>IllegalArgumentException</b>: If invalid input is passed for insertion (optional handling).</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Height Balanced Trees')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Red-Black Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Red-Black Tree', data: `
      <h1>Red-Black Tree</h1>
      <p>A <b>Red-Black Tree (RBT)</b> is a self-balancing binary search tree (BST) where each node has an extra bit for color (either <b>red</b> or <b>black</b>) to ensure the tree remains balanced after insertions and deletions.</p>
      <p>Balancing is achieved by enforcing <b>Red-Black properties</b> through color flips and tree rotations.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/redBlackTree/rbt1.png" class="data-img">



      <div class="section">
        <h2>Red-Black Tree Properties</h2>
        <div class="data-box">
<ol>
    <li><b>Node Property</b>: Every node is either <b>red</b> or <b>black</b>.</li>
    <li><b>Root Property</b>: The <b>root</b> is always black.</li>
    <li><b>Red Property</b>: Red nodes cannot have red children <b>(no two consecutive reds)</b>.</li>
    <li><b>Black Property</b>: Every path from a node to its descendant NIL nodes contains the <b>same number of black nodes</b>.</li>
    <li><b>Leaf Property</b>: All <b>leaves</b> (NIL nodes) are black.</li>
</ol>
<h3>Explanation:</h3>
<div class="indented">
    <li>Considering 3 nodes 30, 20 and 10 in the Binary Search tree, In all the possible combinations of color [Red/Black as per property 1] given to non root nodes [Root node is always black as per property 2] only balanced trees are the ones that satisfy both property 3 and 4.</li>
    <li>A visual representation is given below.</li>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/redBlackTree/rbt2.png" class="data-img">
</div>
        </div>
      </div>



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<p>Think of a <b>library with shelves</b>:</p>
<ul>
    <li>Books (nodes) must be placed in an order (like BST rules).</li>
    <li>Librarians (rotation & recoloring rules) ensure the arrangement stays neat, so no shelf gets too tall or too short (balance).</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Note</h2>
        <div class="data-box">
<li>Balancing happens <b>automatically</b> after insertion and deletion.</li>
<li>Insertions may cause <b>rotations</b> (left or right) and <b>color flips</b>.</li>
<li>Deletions may require additional <b>balancing fixes</b> to maintain properties.</li>
        </div>
      </div>



      <div class="section">
        <h2>Rotations</h2>
        <div class="data-box">
<p>Rotations keep the BST property while fixing imbalance.</p>
<ul>
    <li><b>Left Rotation</b>
        <ul>
            <li>Pivot around a node’s right child.</li>
            <li>Moves the node down to the left, and its right child takes its place.</li>
        </ul>
    </li>
    <li><b>Right Rotation</b>
        <ul>
            <li>Pivot around a node’s left child.</li>
            <li>Moves the node down to the right, and its left child takes its place.</li>
        </ul>
    </li>
    <li><b>Left-Right Rotation</b> (combination)</li>
    <li><b>Right-Left Rotation</b> (combination)</li>
</ul>
<p>Rotations are used during insert and delete fix-up.</p>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class Node {
    int data;
    Node parent, left, right;
    boolean color; // true = RED, false = BLACK

    Node(int data) {
        this.data = data;
        this.color = true; // New nodes are red by default
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Self-balancing BST.</li>
<li>Height is always <b>O(log n)</b>.</li>
<li>Guarantees worst-case time complexity for insert, delete, search.</li>
<li>Uses an extra <b>color bit</b> for balancing.</li>
<li>Efficient for ordered data with frequent insertions/deletions.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>insert(key)</b>: Inserts a node and balances the tree.
    <ol>
        <li>Insert like a normal <b>BST insert</b> (new node is RED, children point to NIL).</li>
        <li>Fix violations using <b>recoloring and rotations</b>.</br>
        <b>Cases</b>:</br>
            <ul>
                <li><b>Case 1</b>: New node is root → recolor it BLACK.</li>
                <li><b>Case 2</b>: Parent is BLACK → tree is fine.</li>
                <li><b>Case 3</b>: Parent is RED → violation!
                    <ol type="i" class="indented-2">
                        <li>If <b>Uncle is RED</b> → recolor parent & uncle BLACK, grandparent RED, move up to grandparent.</li>
                        <li>If <b>Uncle is BLACK</b> → perform rotations (left or right depending on position), then recolor parent/ grandparent.</li>
                    </ol>
                </li>
            </ul>
        </li>
    </ol>
</li>
<li><b>delete(key)</b>: Deletes a node and balances the tree.
    <ol>
        <li>Delete like a normal BST (find successor if needed).</li>
        <li>If a deleted node is RED → no violation.</li>
        <li>If a deleted node is BLACK → violation (black-height reduced).</br>
            Fix it with <b>recoloring & rotations</b>:
            <ul>
                <li><b>Case 1</b>: Sibling is RED → rotate and recolor.</li>
                <li><b>Case 2</b>: Sibling is BLACK with BLACK children → recolor sibling RED, move up.</li>
                <li><b>Case 3</b>: Sibling is BLACK with one RED child → rotate & recolor appropriately.</li>
            </ul>
        </li>
    </ol>
    <p>Deletion is more complex, but the idea is always to <b>restore the black-height property</b>.</p>
</li>
<li><b>search(key)</b>: Finds a node with the given key.</li>
<li><b>inorder()</b>: Displays nodes in ascending order.</li>
<li><b>preorder()</b>: Displays nodes in root-left-right order.</li>
<li><b>postorder()</b>: Displays nodes in left-right-root order.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node parent, left, right;
    boolean color; // true = RED, false = BLACK

    Node(int data) {
        this.data = data;
        this.color = true; // New nodes are red by default
    }
}

public class RedBlackTree {
    private Node root;
    private final boolean RED = true;
    private final boolean BLACK = false;

    // Sentinel NIL (shared black leaf)
    private final Node NIL = new Node(0);

    public RedBlackTree() {
        // Initialize NIL
        NIL.color = BLACK;
        NIL.left = NIL;
        NIL.right = NIL;
        NIL.parent = NIL;

        // Root starts as NIL (not null)
        root = NIL;
    }

    // Rotate left
    private void rotateLeft(Node x) {
        Node y = x.right;
        x.right = y.left;
        if (y.left != NIL) y.left.parent = x;
        y.parent = x.parent;
        if (x.parent == NIL) root = y;
        else if (x == x.parent.left) x.parent.left = y;
        else x.parent.right = y;
        y.left = x;
        x.parent = y;
    }

    // Rotate right
    private void rotateRight(Node y) {
        Node x = y.left;
        y.left = x.right;
        if (x.right != NIL) x.right.parent = y;
        x.parent = y.parent;
        if (y.parent == NIL) root = x;
        else if (y == y.parent.right) y.parent.right = x;
        else y.parent.left = x;
        x.right = y;
        y.parent = x;
    }

    // Insert a new node
    public void insert(int data) {
        // Duplicate check using search() that returns null if not found
        Node exists = search(data);
        if (exists != null) {
            System.out.println("Element already exists.");
            return;
        }

        Node newNode = new Node(data);
        Node y = NIL;
        Node x = root;

        // Standard BST insert
        while (x != NIL) {
            y = x;
            if (newNode.data < x.data) x = x.left;
            else x = x.right;
        }

        newNode.parent = y;
        if (y == NIL) root = newNode;
        else if (newNode.data < y.data) y.left = newNode;
        else y.right = newNode;

        // New node children are NIL; node is RED
        newNode.left = NIL;
        newNode.right = NIL;
        newNode.color = RED;

        fixInsert(newNode);
    }

    // Fix after insert
    private void fixInsert(Node k) {
        while (k.parent.color == RED) {
            if (k.parent == k.parent.parent.left) {
                Node uncle = k.parent.parent.right;
                if (uncle.color == RED) { // Case 1: recolor
                    k.parent.color = BLACK;
                    uncle.color = BLACK;
                    k.parent.parent.color = RED;
                    k = k.parent.parent;
                } else {
                    if (k == k.parent.right) { // Case 2: triangle
                        k = k.parent;
                        rotateLeft(k);
                    }
                    // Case 3: line
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    rotateRight(k.parent.parent);
                }
            } else {
                Node uncle = k.parent.parent.left;
                if (uncle.color == RED) {
                    k.parent.color = BLACK;
                    uncle.color = BLACK;
                    k.parent.parent.color = RED;
                    k = k.parent.parent;
                } else {
                    if (k == k.parent.left) {
                        k = k.parent;
                        rotateRight(k);
                    }
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    rotateLeft(k.parent.parent);
                }
            }
            if (k == root) break;
        }
        root.color = BLACK;
    }

    // Search (returns the Node if found, else null)
    public Node search(int key) {
        Node current = root;
        while (current != NIL) {
            if (key == current.data) return current;
            else if (key < current.data) current = current.left;
            else current = current.right;
        }
        return null;
    }

    // Delete a node by key
    public void delete(int data) {
        Node node = search(data);
        if (node == null) {
            System.out.println("Element not found");
            return;
        }
        deleteNode(node);
    }

    // Transplant nodes
    private void transplant(Node u, Node v) {
        if (u.parent == NIL) root = v;
        else if (u == u.parent.left) u.parent.left = v;
        else u.parent.right = v;
        v.parent = u.parent;
    }

    // Find minimum in subtree
    private Node minimum(Node node) {
        while (node.left != NIL) node = node.left;
        return node;
    }

    // Delete (core)
    private void deleteNode(Node z) {
        Node y = z;
        Node x;
        boolean yOriginalColor = y.color;

        if (z.left == NIL) {
            x = z.right;
            transplant(z, z.right);
        } else if (z.right == NIL) {
            x = z.left;
            transplant(z, z.left);
        } else {
            y = minimum(z.right);
            yOriginalColor = y.color;
            x = y.right;
            if (y.parent == z) {
                x.parent = y;
            } else {
                transplant(y, y.right);
                y.right = z.right;
                y.right.parent = y;
            }
            transplant(z, y);
            y.left = z.left;
            y.left.parent = y;
            y.color = z.color;
        }

        if (yOriginalColor == BLACK) {
            fixDelete(x);
        }
    }

    // Fix after delete
    private void fixDelete(Node x) {
        while (x != root && x.color == BLACK) {
            if (x == x.parent.left) {
                Node sibling = x.parent.right;
                if (sibling.color == RED) { // Case 1
                    sibling.color = BLACK;
                    x.parent.color = RED;
                    rotateLeft(x.parent);
                    sibling = x.parent.right;
                }
                if (sibling.left.color == BLACK && sibling.right.color == BLACK) { // Case 2
                    sibling.color = RED;
                    x = x.parent;
                } else {
                    if (sibling.right.color == BLACK) { // Case 3
                        sibling.left.color = BLACK;
                        sibling.color = RED;
                        rotateRight(sibling);
                        sibling = x.parent.right;
                    }
                    // Case 4
                    sibling.color = x.parent.color;
                    x.parent.color = BLACK;
                    sibling.right.color = BLACK;
                    rotateLeft(x.parent);
                    x = root;
                }
            } else { // Mirror
                Node sibling = x.parent.left;
                if (sibling.color == RED) {
                    sibling.color = BLACK;
                    x.parent.color = RED;
                    rotateRight(x.parent);
                    sibling = x.parent.left;
                }
                if (sibling.left.color == BLACK && sibling.right.color == BLACK) {
                    sibling.color = RED;
                    x = x.parent;
                } else {
                    if (sibling.left.color == BLACK) {
                        sibling.right.color = BLACK;
                        sibling.color = RED;
                        rotateLeft(sibling);
                        sibling = x.parent.left;
                    }
                    sibling.color = x.parent.color;
                    x.parent.color = BLACK;
                    sibling.left.color = BLACK;
                    rotateRight(x.parent);
                    x = root;
                }
            }
        }
        x.color = BLACK;
    }

    // Traversals
    public void inorder(Node node) {
        if (node != NIL) {
            inorder(node.left);
            System.out.print(node.data + (node.color ? "(R) " : "(B) "));
            inorder(node.right);
        }
    }

    public void preorder(Node node) {
        if (node != NIL) {
            System.out.print(node.data + (node.color ? "(R) " : "(B) "));
            preorder(node.left);
            preorder(node.right);
        }
    }

    public void postorder(Node node) {
        if (node != NIL) {
            postorder(node.left);
            postorder(node.right);
            System.out.print(node.data + (node.color ? "(R) " : "(B) "));
        }
    }

    public void display() {
        System.out.print("Inorder: ");
        inorder(root);
        System.out.println();
        System.out.print("Preorder: ");
        preorder(root);
        System.out.println();
        System.out.print("Postorder: ");
        postorder(root);
        System.out.println();
    }

    public void displayStructure(Node node, String indent, String childType) {
        if (node == NIL) return;
        System.out.println(indent + childType + node.data + (node.color ? "(R)" : "(B)"));
        displayStructure(node.left, indent + "    ", "L-- ");
        displayStructure(node.right, indent + "    ", "R-- ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        RedBlackTree rbt = new RedBlackTree();
        int choice, ele;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Delete");
            System.out.println("3. Search");
            System.out.println("4. Display");
            System.out.println("5. Display Structure");
            System.out.println("6. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    rbt.insert(ele);
                    break;
                case 2:
                    if (rbt.root == rbt.NIL) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to delete: ");
                    ele = sc.nextInt();
                    rbt.delete(ele);
                    break;
                case 3:
                    if (rbt.root == rbt.NIL) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to search: ");
                    ele = sc.nextInt();
                    Node res = rbt.search(ele);
                    System.out.println(res != null ? ele + " found" : ele + " not found");
                    break;
                case 4:
                    if (rbt.root == rbt.NIL) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    rbt.display();
                    break;
                case 5:
                    if (rbt.root == rbt.NIL) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Tree structure:");
                    rbt.displayStructure(rbt.root, "", "");
                    break;
                case 6:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 6);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 10

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 20

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 30

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 7

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 3

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 18

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 10
Element already exists.

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 22

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 8

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 11

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 26

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 5
Tree structure:
10(B)
    L-- 7(R)
        L-- 3(B)
        R-- 8(B)
    R-- 20(R)
        L-- 18(B)
            L-- 11(R)
        R-- 26(B)
            L-- 22(R)
            R-- 30(R)

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 2
Enter element to delete: 10

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 5
Tree structure:
11(B)
    L-- 7(R)
        L-- 3(B)
        R-- 8(B)
    R-- 20(R)
        L-- 18(B)
        R-- 26(B)
            L-- 22(R)
            R-- 30(R)

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 2
Enter element to delete: 20

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 5
Tree structure:
11(B)
    L-- 7(R)
        L-- 3(B)
        R-- 8(B)
    R-- 22(R)
        L-- 18(B)
        R-- 26(B)
            R-- 30(R)

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 3
Enter element to search: 3
3 found

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 4
Inorder: 3(B) 7(R) 8(B) 11(B) 18(B) 22(R) 26(B) 30(R)
Preorder: 11(B) 7(R) 3(B) 8(B) 22(R) 18(B) 26(B) 30(R)
Postorder: 3(B) 8(B) 7(R) 18(B) 30(R) 26(B) 22(R) 11(B)

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Display Structure
6. Exit
Choose an operation: 6
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Red-Black Trees Vs. AVL Trees</h2>
        <div class="data-box">
<li>The AVL trees are more balanced trees compared to Red-Black trees.</li>
<li>The number of rotations during insertion and deletion are more in the cases of AVL trees.</li>
<li>So in a place that involves many frequent insertions and deletions Red-Black trees should be preferred and in a place where the insertions and deletions are less frequent and search is a more frequent operation, AVL tree should be preferred over Red-Black tree.</li>
        </div>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Databases (e.g., <b>map</b>, <b>set</b> implementations in Java’s <b>TreeMap</b>, <b>TreeSet</b>).</li>
<li>File systems (e.g., Linux <b>ext3</b>, <b>ext4</b>).</li>
<li>Network routers (routing tables).</li>
<li>Event-driven simulations.</li>
<li>Indexing in in-memory search engines.</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>More complex to implement than AVL or simple BST.</li>
<li>Slightly slower lookups than AVL due to less strict balancing.</li>
<li>Requires extra memory for storing color bits and parent pointers.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Insert</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Delete</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Search</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Traversal</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NullPointerException</b>: when trying to access a property of a null node.</li>
<li><b>NoSuchElementException</b>: when deleting/searching for a non-existent element.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'AVL Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Splay Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Splay Tree', data: `
      <h1>Splay Tree</h1>
      <p>A <b>Splay Tree</b> is a self-adjusting <b>binary search tree (BST)</b> where recently accessed elements are moved to the root using a process called <b>splaying</b>.</p>
      <p>This ensures that frequently accessed elements are quick to access again, making the tree efficient for applications with repeated accesses.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/splayTree/st1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<p>Think of a <b>TV remote</b>:</p>
<ul>
    <li>The button you press most frequently (like volume up) becomes the easiest to access (like moving closer to your finger).</li>
    <li>Similarly, in a Splay Tree, frequently used elements are moved closer to the root for faster access.</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Overview</h2>
        <div class="data-box">
<li>The main idea of the splay tree is to bring the recently accessed item to the root of the tree, so that if we access the same item again then it takes only O(1) time.</li>
<li>These trees are very optimal in a case where only a few keys are frequently accessed, which is prominent in many applications.</li>
<li>All splay tree operations run in O(log n) time on average, where n is the number of nodes in the tree. Any single operation can take Θ(n) time in the worst case.</li>
<li>Every operation (insertion, deletion or search) on a splay tree performs the splaying operation.</li>
<li>The insertion operation first inserts the new element as it is inserted into the binary search tree, after insertion the newly inserted element is splayed so that it is placed at the root of the tree.</li>
<li>The deletion operation first splays the element to be deleted there by bringing it to the root and then performs the deletion operation.</li>
<li>The search operation in a splay tree is to search the element using a binary search process then splay the searched element so that it is placed at the root of the tree.</li>
<li>To splay an element to the root, rotations that are similar to that of an AVL tree.</li>
        </div>
      </div>



      <div class="section">
        <h2>Splaying / Rotations of Splay Tree</h2>
        <div class="data-box">
<p>The Splaying or Rotations of the Splay tree are <b>Zig</b>, <b>Zag</b>, <b>Zig-Zig</b>, <b>Zag-Zag</b>, <b>Zig-Zag</b>, and <b>Zag-Zig</b>.</p>
<li>
    <b>Zig Rotation</b>: Zig rotation is performed when we want to splay an element in the immediate left subtree. Zig rotation is similar to a single right rotation in an AVL tree. In a Zig rotation all the elements move one position to the right from its current position.</br>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/splayTree/st2.png" class="data-img">
</li>
<li>
    <b>Zag Rotation</b>: Zag rotation is performed when we want to splay an element in the immediate right subtree. Zag rotation is similar to a single left rotation in an AVL tree. In a Zag rotation all the elements move one position to the left from its current position.</br>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/splayTree/st3.png" class="data-img">
</li>
<li>
    <b>Zig-Zig Rotation</b>: The Zig-Zig rotation in a splay tree is a double zig rotation i.e performing a zig rotation two times. In Zig-Zig rotation every element moves two position to the right from its current position. Zig-Zig rotation is performed when we want to splay an element which is in the left of the left subtree.</br>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/splayTree/st4.png" class="data-img">
</li>
<li>
    <b>Zag-Zag Rotation</b>: The Zag-Zag rotation in a splay tree is a double zag rotation i.e performing zag rotation two times. In Zag-Zag rotation every node moves two position to the left from its current position. Zag-Zag rotation is performed when we want to splay an element that is right of the right subtree. </br>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/splayTree/st5.png" class="data-img">
</li>
<li>
    <b>Zig-Zag Rotation</b>: In Zig-Zag rotation, a zig rotation is followed by a zag rotation. In Zig-Zag rotation every element moves one position to the right followed by one position to the left from its current position. Zig-Zag rotation is performed when the element to be splayed is in the left of the right subtree. </br>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/splayTree/st6.png" class="data-img">
</li>
<li>
    <b>Zag-Zig Rotation</b>: In Zag-Zig rotation, a Zag rotation is followed by a Zig rotation. In Zag-Zig rotation every element moves one position to the left followed by one position to the right from its current position. Zig-Zag rotation is performed when the element to be splayed is in the left of the right subtree. </br>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/splayTree/st7.png" class="data-img">
</li>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class Node {
    int data;
    Node left, right;

    Node(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li><b>Binary Search Tree property</b>: Left child < root < right child.</li>
<li><b>Self-adjusting</b>: Recently accessed nodes are brought to the root.</li>
<li><b>Amortized efficiency</b>: Each operation takes <b>O(log n)</b> time on average.</li>
<li><b>No balance factor / color property</b> (unlike AVL/Red-Black Trees).</li>
<li><b>Splaying operation</b>: Achieved using tree rotations (zig, zig-zig, zig-zag).</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li>
    <b>Search(x)</b>
    <ul type="circle">
        <li>Standard BST search.</li>
        <li>If found, splay node x to the root.</li>
        <li>If not found, splay the last accessed node.</li>
    </ul>
</li>
<li>
    <b>Insert(x)</b>
    <ul type="circle">
        <li>Insert like BST.</li>
        <li>Then splay the inserted node to the root.</li>
    </ul>
</li>
<li>
    <b>Delete(x)</b>
    <ul type="circle">
        <li>Splay x to root.</li>
        <li>Remove root.</li>
        <li>Merge left and right subtrees.</li>
    </ul>
</li>
<li>
    <b>Splaying (Rotations)</b>
    <ul type="circle">
        <li><b>Zig</b>: Node is child of root → single rotation.</li>
        <li><b>Zig-Zig</b>: Node and parent are both left/right children → double rotation.</li>
        <li><b>Zig-Zag</b>: Node is left child of parent and parent is right child (or vice versa) → double rotation.</li>
    </ul>
</li>
<li>
    <b>Find Min / Max</b>
    <ul type="circle">
        <li>Traverse left/right.</li>
        <li>Splay the accessed node to root.</li>
    </ul>
</li>
<li>
    <b>Display / Traversal</b>
    <ul type="circle">
        <li>Inorder gives sorted order.</li>
    </ul>
</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

class Node {
    int data;
    Node left, right;

    Node(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}

public class SplayTree {
    private Node root;

    // Right Rotate
    private Node rightRotate(Node x) {
        Node y = x.left;
        x.left = y.right;
        y.right = x;
        return y;
    }

    // Left Rotate
    private Node leftRotate(Node x) {
        Node y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }

    // Splay Operation
    private Node splay(Node root, int key) {
        if (root == null || root.data == key) return root;

        // Key lies in left subtree
        if (key < root.data) {
            if (root.left == null) return root;

            if (key < root.left.data) { // Zig-Zig
                root.left.left = splay(root.left.left, key);
                root = rightRotate(root);
            } else if (key > root.left.data) { // Zig-Zag
                root.left.right = splay(root.left.right, key);
                if (root.left.right != null)
                    root.left = leftRotate(root.left);
            }

            return (root.left == null) ? root : rightRotate(root);
        } else { // Key lies in right subtree
            if (root.right == null) return root;

            if (key > root.right.data) { // Zig-Zig
                root.right.right = splay(root.right.right, key);
                root = leftRotate(root);
            } else if (key < root.right.data) { // Zig-Zag
                root.right.left = splay(root.right.left, key);
                if (root.right.left != null)
                    root.right = rightRotate(root.right);
            }

            return (root.right == null) ? root : leftRotate(root);
        }
    }

    // Insert
    public void insert(int key) {
        if (root == null) {
            root = new Node(key);
            return;
        }
        root = splay(root, key);

        if (root.data == key) return; // duplicate

        Node newNode = new Node(key);
        if (key < root.data) {
            newNode.right = root;
            newNode.left = root.left;
            root.left = null;
        } else {
            newNode.left = root;
            newNode.right = root.right;
            root.right = null;
        }
        root = newNode;
    }

    // Search
    public boolean search(int key) {
        root = splay(root, key);
        return root != null && root.data == key;
    }

    // Delete
    public void delete(int key) {
        if (root == null) return;

        root = splay(root, key);

        if (root.data != key) return; // not found

        if (root.left == null) root = root.right;
        else {
            Node temp = root.right;
            root = root.left;
            root = splay(root, key);
            root.right = temp;
        }
    }

    // Inorder Traversal
    public void inorder(Node root) {
        if (root != null) {
            inorder(root.left);
            System.out.print(root.data + " ");
            inorder(root.right);
        }
    }

    public void display() {
        inorder(root);
        System.out.println();
    }
    
    public void displayStructure(Node root, String indent, String childType) {
        if (root == null) return;
        System.out.println(indent + childType + root.data);
        displayStructure(root.left, indent + "    ", "L-- ");
        displayStructure(root.right, indent + "    ", "R-- ");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        SplayTree st = new SplayTree();
        int choice, ele;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Search");
            System.out.println("3. Delete");
            System.out.println("4. Display (Inorder)");
            System.out.println("5. Display Structure");
            System.out.println("6. Exit");
            System.out.print("Choose: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    st.insert(ele);
                    break;
                case 2:
                    if (st.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to search: ");
                    ele = sc.nextInt();
                    System.out.println(st.search(ele) ? "Found" : "Not Found");
                    break;
                case 3:
                    if (st.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to delete: ");
                    ele = sc.nextInt();
                    st.delete(ele);
                    break;
                case 4:
                    if (st.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Inorder Traversal:");
                    st.display();
                    break;
                case 5:
                    if (st.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Tree structure:");
                    st.displayStructure(st.root, "", "");
                    break;
                case 6:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        } while (choice != 6);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 1
Enter element: 3

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 1
Enter element: 5

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 1
Enter element: 4

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 1
Enter element: 6

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 1
Enter element: 8

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 1
Enter element: 7

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 5
Tree structure:
7
    L-- 6
        L-- 5
            L-- 4
                L-- 3
    R-- 8

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 2
Enter element to search: 5
Found

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 5
Tree structure:
5
    L-- 4
        L-- 3
    R-- 6
        R-- 7
            R-- 8

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 3
Enter element to delete: 3

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 4
Inorder Traversal:
4 5 6 7 8

Operations:
1. Insert
2. Search
3. Delete
4. Display (Inorder)
5. Display Structure
6. Exit
Choose: 6
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li><b>Caching systems</b> (recently accessed items are faster to reach).</li>
<li><b>Memory management</b> (fast access to frequently used blocks).</li>
<li><b>Text editors</b> (repeated access to recently opened documents).</li>
<li><b>Networking</b> (frequent access to recently used routing paths).</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Worst case for a single operation: <b>O(n)</b> (skewed tree).</li>
<li>Not strictly balanced (like AVL/Red-Black).</li>
<li>Can cause inefficiency if the access pattern is random with no locality of reference.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Average / Amortized</th>
            <th>Worst Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Insert</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Search</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Delete</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Display</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NullPointerException</b>: if operations are performed on an empty tree.</li>
<li><b>Duplicate insertion ignored</b>: same key is not reinserted.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Red-Black Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'B Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'B Tree', data: `
      <h1>Stack</h1>
      <p>A B-Tree is a self-balancing search tree designed to efficiently store and manage large blocks of data. It maintains data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time.</p>
      <p>It is widely used in databases and file systems because it reduces disk I/O by minimizing the number of reads.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/bTree/bt1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<p>Think of a <b>library index system</b>:</p>
<ul>
    <li>Each index card contains multiple keys (like book categories).</li>
    <li>Each key points to another set of index cards or the actual books.</li>
    <li>The system ensures quick access by reducing the number of steps needed to find a book.</li>
<ul>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class BTreeNode {
    int[] keys;          // Array of keys
    int t;               // Minimum degree
    BTreeNode[] children; // Array of child pointers
    int n;               // Current number of keys
    boolean leaf;        // True if node is leaf
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>A B-Tree is a <b>generalization of a Binary Search Tree (BST)</b> where nodes can have more than two children.</li>
<li>Every node can contain <b>multiple keys</b> (not just one like in BST).</li>
<li>Keys in each node are stored in <b>sorted order</b>.</li>
<li>A node with n keys has <b>n+1</b> children.</li>
<li>All leaves appear at the same level (balanced structure).</li>
<li>It maintains balance by redistributing keys on insertions and deletions.</li>
<li>It is optimized for <b>disk-based storage systems</b>.</li>
<li>A <b>B-Tree of minimum degree t</b> has these properties:</li>
    <ul type="circle">
        <li>Each node can store at most 2t - 1 keys.</li>
        <li>Each node can store at least t - 1 keys (except root, which can have fewer).</li>
    </ul>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li>
    <b>Search</b>: Find a key in the tree.
        <ol type="i">
            <li>Start at the <b>root</b>.</li>
            <li>Do a <b>binary search</b> inside the node (keys are sorted).
                <ol type="a">
                    <li>If the key matches, return <b>found</b>.</li>
                    <li>If the key is smaller, go to the left child.</li>
                    <li>If the key is larger, go to the right child.</li>
                </ol>
            </li>
            <li>Continue until the key is found or a leaf is reached.</li>
        </ol>
</li>
<li>
    <b>Insert</b>: Add a new key, splitting nodes if necessary.
        <ol type="i">
            <li>Always insert <b>at a leaf node</b> (like BST but with multiple keys).</li>
            <li>If the leaf is <b>not full</b> (less than <b>2t - 1</b> keys), just insert in sorted order.</li>
            <li>If the leaf is <b>full</b>:
                <ol type="a">
                    <li><b>Split</b> the node into two nodes with <b>t - 1</b> keys each.</li>
                    <li>The <b>middle key</b> goes up to the parent.</li>
                    <li>If the parent is also full, keep splitting recursively (may cause new roots).</li>
                </ol>
        </ol>
</li>
</li>
<li>
    <b>Delete</b>: Remove a key and restructure if required.
    <ol type="i">
        <li><b>Deleting from a leaf</b> → just remove it (if it still satisfies min keys).</li>
        <li><b>Deleting from an internal node</b>:
            <ol type="a">
                <li>If the left child has at least t keys → replace with <b>predecessor</b>.</li>
                <li>Else if the right child has at least t keys → replace with <b>successor</b>.</li>
                <li>Else → <b>merge</b> the key with its two children.</li>
            </ol>
        </li>
        <li><b>If a child has less than t - 1 keys</b> → perform <b>borrow</b> from sibling or merge before deleting.</li>
    </ol>
</li>
<li>
    <b>Traverse</b>: Print all keys in sorted order.
    <ol type="i">
        <li>Perform <b>in-order traversal</b> across keys (left child → key → right child).</li>
    </ol>
</li>
<li><b>SplitChild</b>: Split a full child during insertion.</li>
<li><b>Merge</b>: Combine two child nodes during deletion.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

class BTreeNode {
    int[] keys;           // Keys in node
    int t;                // Minimum degree
    BTreeNode[] children; // Child pointers
    int n;                // Number of keys
    boolean leaf;         // Is leaf

    BTreeNode(int t, boolean leaf) {
        this.t = t;
        this.leaf = leaf;
        this.keys = new int[2 * t - 1];
        this.children = new BTreeNode[2 * t];
        this.n = 0;
    }

    // Traverse the nodes
    void traverse() {
        int i;
        for (i = 0; i < n; i++) {
            if (!leaf) {
                children[i].traverse();
            }
            System.out.print(keys[i] + " ");
        }
        if (!leaf) {
            children[i].traverse();
        }
    }
    
    void display(String indent, String childChar) {
        System.out.print(indent + childChar + "|");
        for(int key = 0; key < n; key++) {
            System.out.print(keys[key] + "|");
        }
        System.out.println("");
        
        if (!leaf) {
            for(int child = 0; child <= n; child++) {
                children[child].display(indent + "    ", "C" + (child + 1) + "- ");
            }
        }
    }

    // Search a key in subtree
    BTreeNode search(int k) {
        int i = 0;
        while (i < n && k > keys[i]) {
            i++;
        }
        if (i < n && keys[i] == k) {
            return this;
        }
        if (leaf) return null;
        return children[i].search(k);
    }

    // Insert a new key in non-full node
    void insertNonFull(int k) {
        int i = n - 1;
        if (leaf) {
            while (i >= 0 && keys[i] > k) {
                keys[i + 1] = keys[i];
                i--;
            }
            keys[i + 1] = k;
            n++;
        } else {
            while (i >= 0 && keys[i] > k) {
                i--;
            }
            if (children[i + 1].n == 2 * t - 1) {
                splitChild(i + 1, children[i + 1]);
                if (keys[i + 1] < k) {
                    i++;
                }
            }
            children[i + 1].insertNonFull(k);
        }
    }

    // Split child
    void splitChild(int i, BTreeNode y) {
        BTreeNode z = new BTreeNode(y.t, y.leaf);
        z.n = t - 1;
        for (int j = 0; j < t - 1; j++) {
            z.keys[j] = y.keys[j + t];
        }
        if (!y.leaf) {
            for (int j = 0; j < t; j++) {
                z.children[j] = y.children[j + t];
            }
        }
        y.n = t - 1;
        for (int j = n; j >= i + 1; j--) {
            children[j + 1] = children[j];
        }
        children[i + 1] = z;
        for (int j = n - 1; j >= i; j--) {
            keys[j + 1] = keys[j];
        }
        keys[i] = y.keys[t - 1];
        n++;
    }

    // Find index of key
    int findKey(int k) {
        int idx = 0;
        while (idx < n && keys[idx] < k) {
            ++idx;
        }
        return idx;
    }

    // Delete a key
    void remove(int k) {
        int idx = findKey(k);
        if (idx < n && keys[idx] == k) {
            if (leaf) {
                removeFromLeaf(idx);
            } else {
                removeFromNonLeaf(idx);
            }
        } else {
            if (leaf) {
                System.out.println("Key " + k + " not found.");
                return;
            }
            boolean flag = (idx == n);
            if (children[idx].n < t) {
                fill(idx);
            }
            if (flag && idx > n) {
                children[idx - 1].remove(k);
            } else {
                children[idx].remove(k);
            }
        }
    }

    // Remove from leaf
    void removeFromLeaf(int idx) {
        for (int i = idx + 1; i < n; ++i) {
            keys[i - 1] = keys[i];
        }
        n--;
    }

    // Remove from non-leaf
    void removeFromNonLeaf(int idx) {
        int k = keys[idx];
        if (children[idx].n >= t) {
            int pred = getPred(idx);
            keys[idx] = pred;
            children[idx].remove(pred);
        } else if (children[idx + 1].n >= t) {
            int succ = getSucc(idx);
            keys[idx] = succ;
            children[idx + 1].remove(succ);
        } else {
            merge(idx);
            children[idx].remove(k);
        }
    }

    int getPred(int idx) {
        BTreeNode cur = children[idx];
        while (!cur.leaf) {
            cur = cur.children[cur.n];
        }
        return cur.keys[cur.n - 1];
    }

    int getSucc(int idx) {
        BTreeNode cur = children[idx + 1];
        while (!cur.leaf) {
            cur = cur.children[0];
        }
        return cur.keys[0];
    }

    void fill(int idx) {
        if (idx != 0 && children[idx - 1].n >= t) {
            borrowFromPrev(idx);
        } else if (idx != n && children[idx + 1].n >= t) {
            borrowFromNext(idx);
        } else {
            if (idx != n) {
                merge(idx);
            } else {
                merge(idx - 1);
            }
        }
    }

    void borrowFromPrev(int idx) {
        BTreeNode child = children[idx];
        BTreeNode sibling = children[idx - 1];
        for (int i = child.n - 1; i >= 0; --i) {
            child.keys[i + 1] = child.keys[i];
        }
        if (!child.leaf) {
            for (int i = child.n; i >= 0; --i) {
                child.children[i + 1] = child.children[i];
            }
        }
        child.keys[0] = keys[idx - 1];
        if (!child.leaf) {
            child.children[0] = sibling.children[sibling.n];
        }
        keys[idx - 1] = sibling.keys[sibling.n - 1];
        child.n += 1;
        sibling.n -= 1;
    }

    void borrowFromNext(int idx) {
        BTreeNode child = children[idx];
        BTreeNode sibling = children[idx + 1];
        child.keys[child.n] = keys[idx];
        if (!child.leaf) {
            child.children[child.n + 1] = sibling.children[0];
        }
        keys[idx] = sibling.keys[0];
        for (int i = 1; i < sibling.n; ++i) {
            sibling.keys[i - 1] = sibling.keys[i];
        }
        if (!sibling.leaf) {
            for (int i = 1; i <= sibling.n; ++i) {
                sibling.children[i - 1] = sibling.children[i];
            }
        }
        child.n += 1;
        sibling.n -= 1;
    }

    void merge(int idx) {
        BTreeNode child = children[idx];
        BTreeNode sibling = children[idx + 1];
        child.keys[t - 1] = keys[idx];
        for (int i = 0; i < sibling.n; ++i) {
            child.keys[i + t] = sibling.keys[i];
        }
        if (!child.leaf) {
            for (int i = 0; i <= sibling.n; ++i) {
                child.children[i + t] = sibling.children[i];
            }
        }
        for (int i = idx + 1; i < n; ++i) {
            keys[i - 1] = keys[i];
        }
        for (int i = idx + 2; i <= n; ++i) {
            children[i - 1] = children[i];
        }
        child.n += sibling.n + 1;
        n--;
    }
}

class BTree {
    BTreeNode root;
    int t;

    BTree(int t) {
        this.root = null;
        this.t = t;
    }

    void traverse() {
        if (root != null) root.traverse();
    }

    BTreeNode search(int k) {
        return (root == null) ? null : root.search(k);
    }

    void insert(int k) {
        if (root == null) {
            root = new BTreeNode(t, true);
            root.keys[0] = k;
            root.n = 1;
        } else {
            if (root.n == 2 * t - 1) {
                BTreeNode s = new BTreeNode(t, false);
                s.children[0] = root;
                s.splitChild(0, root);
                int i = 0;
                if (s.keys[0] < k) {
                    i++;
                }
                s.children[i].insertNonFull(k);
                root = s;
            } else {
                root.insertNonFull(k);
            }
        }
    }

    void remove(int k) {
        if (root == null) {
            System.out.println("The tree is empty.");
            return;
        }
        root.remove(k);
        if (root.n == 0) {
            if (root.leaf) {
                root = null;
            } else {
                root = root.children[0];
            }
        }
    }
    
    public void displayStructure() {
        if (root != null) root.display("", "");
    }
}

public class BTreeOperations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter minimum degree (t): ");
        int t = sc.nextInt();
        BTree btree = new BTree(t);

        int choice, ele;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Search");
            System.out.println("3. Traverse");
            System.out.println("4. Delete");
            System.out.println("5. Display Structure");
            System.out.println("6. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    if (btree.search(ele) != null) {
                        System.out.print("Duplicate values not allowed.");
                        break;
                    }
                    btree.insert(ele);
                    break;
                case 2:
                    if (btree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to search: ");
                    ele = sc.nextInt();
                    System.out.println((btree.search(ele) != null) ? "Found" : "Not Found");
                    break;
                case 3:
                    if (btree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    btree.traverse();
                    System.out.println();
                    break;
                case 4:
                    if (btree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.print("Enter element to delete: ");
                    ele = sc.nextInt();
                    btree.remove(ele);
                    break;
                case 5:
                    if (btree.root == null) {
                        System.out.println("Tree is empty.");
                        break;
                    }
                    System.out.println("Tree structure:");
                    btree.displayStructure();
                    break;
                case 6:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 6);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter minimum degree (t): 2

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 1

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 2

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 3

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 1
Enter element: 4

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 5
Tree structure:
|2|
    C1- |1|
    C2- |3|4|

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 2
Enter element to search: 1
Found

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 3
1 2 3 4

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 4
Enter element to delete: 1

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 5
Tree structure:
|3|
    C1- |2|
    C2- |4|

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Exit
Choose an operation: 6
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Database indexing (MySQL, PostgreSQL, etc.).</li>
<li>File systems (NTFS, HFS, ext4).</li>
<li>Multilevel indexing in large datasets.</li>
<li>Used in search engines for storing inverted indexes.</li>
<li>Efficient range queries.</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Implementation is more complex than BST/AVL.</li>
<li>Requires significant disk/memory overhead for maintaining nodes.</li>
<li>Deletion operation is complicated.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Search</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Insert</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Delete</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Traverse</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NullPointerException</b>: (if tree is empty and operations are performed).</li>
<li><b>ArrayIndexOutOfBoundsException</b>: (if node keys/children accessed incorrectly).</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Splay Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'B+ Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'B+ Tree', data: `
      <h1>B+ Tree</h1>
      <p>A <b>B+ Tree</b> is a <b>self-balancing m-ary search tree</b> that extends the B-Tree by storing all actual data (records) only in the <b>leaf nodes</b>, while internal nodes act only as guides (indexes).</p>
      <p>It is optimized for <b>range queries</b> and is heavily used in <b>databases and file systems</b>.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/bPlusTree/bpt3.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<p>Think of a <b>library catalog system</b>:</p>
<ul>
    <li>The <b>index cards</b> (internal nodes) guide you to the correct shelf.</li>
    <li>The <b>shelves</b> (leaf nodes) contain the actual books (data).</li>
    <li>Each shelf is linked to the next one for easy browsing, just like leaf nodes are linked in a B+ Tree.</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Structure</h2>
        <div class="data-box">
<li><b>Root</b> → May be a leaf (if the tree is small) or an internal node.</li>
<li><b>Internal nodes</b> → Store only keys (for navigation) to direct search, no actual data.</li>
<li><b>Leaf nodes</b> → Store actual data/records (or pointers to records), and are linked together like a <b>linked list</b> for efficient sequential access.</li>
        </div>
      </div>



      <div class="section">
        <h2>Types of B+ Tree</h2>
        <div class="data-box">
<li><b>Clustered B+ Tree</b> → Data stored inside leaf nodes in order.</li>
<li><b>Unclustered B+ Tree</b> → Leaf nodes store pointers to data records (not actual data).</li>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class Node {
    boolean leaf;
    int[] keys;          // size: order (one spare slot for temporary overflow)
    int keyCount;        // number of keys used (<= maxKeys normally)
    Node[] children;     // size: order + 1 (one spare child during split)
    Node parent;         // parent pointer
    Node next;           // leaf forward pointer

    Node(int order, boolean leaf) {
        this.leaf = leaf;
        this.keys = new int[order];            // allow a temporary extra key
        this.children = leaf ? null : new Node[order + 1]; // allow temporary extra child
        this.keyCount = 0;
        this.parent = null;
        this.next = null;
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>A B+ Tree of <b>order m</b> can have at most <b>m children</b> and <b>m-1 keys</b> per <b>internal node</b>.</li>
<li>A node with <b>n</b> keys has <b>n+1</b> children.</li>
<li>All <b>leaf nodes are at the same level</b> (balanced).</li>
<li><b>Internal nodes</b> contain only keys for indexing.</li>
<li><b>Leaf nodes</b> contain actual data (or references to data).</li>
<li>Leaf nodes are <b>linked together</b> for efficient range queries.</li>
<li>Provides both <b>random access</b> (like BST) and <b>sequential access</b> (like linked list).</li>
<li>Supports both <b>point queries</b> and <b>range queries</b> efficiently.</li>
        </div>
      </div>



      <div class="section">
        <h2>Overflow & Underflow</h2>
        <div class="data-box">
<li><b>Overflow</b> → When a node exceeds <b>m-1</b> keys → requires split.</li>
<li><b>Underflow</b> → When a node has fewer than <b>⌈m/2⌉</b> keys → requires merge/borrow.</li>
        </div>
      </div>



      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li>
    <b>Search</b>
        <ul type="circle">
            <li>Start at root → Traverse internal nodes using keys → Reach leaf → Sequentially scan leaf.</li>
            <li>Perform a <b>binary search</b> in the leaf to find the key.</li>
            <li><b>Time Complexity</b>: O(log n)</li>
        </ul>
</li>
<li>
    <b>Insertion</b>
        <ul type="circle">
            <li>Always insert into the <b>leaf node</b>.</li>
            <li>If the leaf is not full → insert in sorted order.</li>
            <li>If the leaf overflows (<b>more than m-1 keys</b>):
                <ol type="1">
                    <li>Split the leaf into two.</li>
                    <li>Promote the <b>first key of the new right leaf</b> to the parent.</li>
                    <li>If the parent also overflows → split recursively (can cause a new root).</li>
                </ol>
            </li>
            <li><b>Time Complexity</b>: O(log n)</li>
        </ul>
</li>
<li>
    <b>Deletion</b>
        <ul type="circle">
            <li>Always delete from the <b>leaf node</b>.</li>
            <li>If deletion causes underflow (fewer than t-1 keys):
                <ol type="1">
                    <li><b>Borrow</b> from sibling if possible (left first, then right).</li>
                    <li>Otherwise, <b>merge</b> with sibling and <b>remove the separator</b> from the parent.</li>
                </ol>
            </li>
            <li>Recurse upward if the parent underflows.</li>
            <li>Parent nodes may be adjusted but actual data deletion always happens at the leaf.</li>
            <li><b>Time Complexity</b>: O(log n)</li>
        </ul>
</li>
<li>
    <b>Traversal</b>
        <ul type="circle">
            <li>In-order traversal → Access all elements in sorted order.</li>
            <li>Sequential traversal is <b>very fast</b> due to linked leaf nodes.</li>
            <li><b>Time Complexity</b>: O(n)</li>
        </ul>
</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.*;

class BPlusTree {
    // ===== Node definition =====
    private static final class Node {
        boolean leaf;
        int[] keys;          // size: order (one spare slot for temporary overflow)
        int keyCount;        // number of keys used (<= maxKeys normally)
        Node[] children;     // size: order + 1 (one spare child during split)
        Node parent;         // parent pointer
        Node next;           // leaf forward pointer

        Node(int order, boolean leaf) {
            this.leaf = leaf;
            this.keys = new int[order];            // allow a temporary extra key
            this.children = leaf ? null : new Node[order + 1]; // allow temporary extra child
            this.keyCount = 0;
            this.parent = null;
            this.next = null;
        }

        // lower_bound: first index i where keys[i] >= k within [0, keyCount)
        int lowerBound(int k) {
            int lo = 0, hi = keyCount;
            while (lo < hi) {
                int mid = (lo + hi) >>> 1; // => |(lo + hi) / 2|
                if (keys[mid] < k) lo = mid + 1; else hi = mid;
            }
            return lo;
        }

        void insertKeyAt(int pos, int k) {
            if (keyCount - pos > 0)
                System.arraycopy(keys, pos, keys, pos + 1, keyCount - pos);
            keys[pos] = k;
            keyCount++;
        }

        void removeKeyAt(int pos) {
            if (keyCount - pos - 1 > 0)
                System.arraycopy(keys, pos + 1, keys, pos, keyCount - pos - 1);
            keyCount--;
        }

        void insertChildAt(int pos, Node child) {
            if (keyCount + 1 - pos > 0)
                System.arraycopy(children, pos, children, pos + 1, keyCount + 1 - pos);
            children[pos] = child;
            if (child != null) child.parent = this;
        }

        void removeChildAt(int pos) {
            int countBefore = keyCount + 2;                 // children in use before this removal
            int numToMove   = countBefore - (pos + 1);      // how many entries to shift left
            if (numToMove > 0) {
                System.arraycopy(children, pos + 1, children, pos, numToMove);
            }
            // Clear the last (now unused) slot: index countBefore - 1
            children[countBefore - 1] = null;
        }
        
        void display(String indent, String childChar) {
            System.out.print(indent + childChar + "|");
            for(int key = 0; key < keyCount; key++) {
                System.out.print(keys[key] + "|");
            }
            System.out.println("");
            
            if (!leaf) {
                for(int child = 0; child <= keyCount; child++) {
                    children[child].display(indent + "    ", "C" + (child + 1) + "- ");
                }
            }
        }
        
    }

    private Node root;
    private final int order;     // max children per internal node (m >= 3)
    private final int maxKeys;   // = order - 1 (max stable key count)
    private final int minKeys;   // = ceil(order/2) - 1 (for non-root)

    public BPlusTree(int order) {
        if (order < 3) throw new IllegalArgumentException("Order must be >= 3");
        this.order = order;
        this.maxKeys = order - 1;
        this.minKeys = (int) Math.ceil(order / 2.0) - 1;
        this.root = new Node(order, true); // start with empty leaf root
    }

    // ===== Public API =====
    public boolean isEmpty() {
        if (root.keyCount == 0) { 
            System.out.println("Tree is empty.");
            return true;
        }
        return false;
    }
    
    public boolean search(int key) {
        Node leaf = findLeaf(key);
        int pos = Arrays.binarySearch(leaf.keys, 0, leaf.keyCount, key);
        return pos >= 0;
    }

    public boolean insert(int key) {
        if (search(key)) return false; // disallow duplicates
        Node leaf = findLeaf(key);
        // Pre-split if full to avoid temporary overflow writes
        if (leaf.keyCount == maxKeys) {
            splitLeaf(leaf);
            // After split, re-find the correct leaf (root/parents may have changed)
            leaf = findLeaf(key);
        }
        int pos = leaf.lowerBound(key);
        leaf.insertKeyAt(pos, key);
        return true;
    }

    public boolean delete(int key) {
        Node leaf = findLeaf(key);
        int pos = Arrays.binarySearch(leaf.keys, 0, leaf.keyCount, key);
        if (pos < 0) return false;
        leaf.removeKeyAt(pos);
        fixAfterDeletion(leaf);
        return true;
    }

    public void traverse() {
        Node cur = leftmostLeaf();
        boolean first = true;
        while (cur != null) {
            for (int i = 0; i < cur.keyCount; i++) {
                if (!first) System.out.print(" ");
                System.out.print(cur.keys[i]);
                first = false;
            }
            cur = cur.next;
        }
        System.out.println();
    }

    public void displayStructure() {
        root.display("","");
    }

    public void displayLeaves() {
        Node cur = leftmostLeaf();
        System.out.println("Leaf level (via next pointers):");
        while (cur != null) {
            System.out.print("[");
            for (int i = 0; i < cur.keyCount; i++) {
                System.out.print(cur.keys[i]);
                if (i + 1 < cur.keyCount) System.out.print("|");
            }
            System.out.print("]");
            if (cur.next != null) System.out.print(" -> ");
            cur = cur.next;
        }
        System.out.println();
    }

    // ===== Internal helpers =====
    private Node leftmostLeaf() {
        Node cur = root;
        while (!cur.leaf) cur = cur.children[0];
        return cur;
    }

    private Node findLeaf(int key) {
        Node cur = root;
        while (!cur.leaf) {
            int idx = cur.lowerBound(key);
            // B+ routing: if key >= keys[idx], go to right child (idx+1)
            if (idx < cur.keyCount && key >= cur.keys[idx]) idx++;
            cur = cur.children[idx];
        }
        return cur;
    }

    // Split a full leaf node and push separator up
    private void splitLeaf(Node leaf) {
        int mid = (leaf.keyCount + 1) / 2; // ensures left >= minKeys
        Node right = new Node(order, true);

        int rightCount = leaf.keyCount - mid;
        System.arraycopy(leaf.keys, mid, right.keys, 0, rightCount); // copy keys from leaf(from mid) to right(from 0) until rightCount elements
        right.keyCount = rightCount;
        leaf.keyCount = mid;

        // link leaf level
        right.next = leaf.next;
        leaf.next = right;

        int separator = right.keys[0];
        insertIntoParent(leaf, separator, right);
    }

    // Insert (left, key, right) into parent; split internal if needed
    private void insertIntoParent(Node left, int key, Node right) {
        if (left.parent == null) {
            Node newRoot = new Node(order, false);
            newRoot.keys[0] = key;
            newRoot.keyCount = 1;
            newRoot.children[0] = left;  left.parent = newRoot;
            newRoot.children[1] = right; right.parent = newRoot;
            root = newRoot;
            return;
        }
        Node parent = left.parent;
        int pos = parent.lowerBound(key);
        parent.insertChildAt(pos + 1, right);
        if (parent.keyCount - pos > 0)
            System.arraycopy(parent.keys, pos, parent.keys, pos + 1, parent.keyCount - pos);
        parent.keys[pos] = key;
        parent.keyCount++;
        if (parent.keyCount > maxKeys) splitInternal(parent);
    }

    // Split a full internal node
    private void splitInternal(Node node) {
        int midIndex = node.keyCount / 2; // promote this key
        int upKey = node.keys[midIndex];

        Node right = new Node(order, false);
        int rightKeyCount = node.keyCount - midIndex - 1;
        System.arraycopy(node.keys, midIndex + 1, right.keys, 0, rightKeyCount);
        right.keyCount = rightKeyCount;

        int rightChildCount = rightKeyCount + 1;
        System.arraycopy(node.children, midIndex + 1, right.children, 0, rightChildCount);
        for (int i = 0; i < rightChildCount; i++)
            if (right.children[i] != null) right.children[i].parent = right;

        // shrink left node
        node.keyCount = midIndex;

        // push up upKey between node (left) and right
        insertIntoParent(node, upKey, right);
    }

    // Fix underflow after deletion starting at node
    private void fixAfterDeletion(Node node) {
        if (node == root) {
            if (!node.leaf && node.keyCount == 0) {
                root = node.children[0];
                if (root != null) root.parent = null;
            }
            return;
        }
        if (node.keyCount >= minKeys) {
            updateParentSeparatorIfNeeded(node);
            return;
        }
        Node parent = node.parent;
        int idx = 0;
        while (idx <= parent.keyCount && parent.children[idx] != node) idx++;

        // Try borrow from left sibling
        if (idx > 0) {
            Node left = parent.children[idx - 1];
            if (left.keyCount > minKeys) {
                borrowFromLeft(node, left, parent, idx - 1);
                updateParentSeparatorAfterBorrow(parent, idx - 1);
                return;
            }
        }
        // Try borrow from right sibling
        if (idx < parent.keyCount) {
            Node right = parent.children[idx + 1];
            if (right.keyCount > minKeys) {
                borrowFromRight(node, right, parent, idx);
                updateParentSeparatorAfterBorrow(parent, idx);
                return;
            }
        }
        // Merge
        if (idx > 0) mergeNodes(parent, idx - 1); else mergeNodes(parent, idx);
    }

    private void updateParentSeparatorIfNeeded(Node node) {
        if (node.parent == null) return;
        Node parent = node.parent;
        int idx = 0;
        while (idx <= parent.keyCount && parent.children[idx] != node) idx++;
        if (idx == 0) return;
        int expected = firstKey(node);
        if (parent.keys[idx - 1] != expected) parent.keys[idx - 1] = expected;
    }

    private int firstKey(Node node) {
        if (node.leaf) return node.keys[0];
        Node cur = node;
        while (!cur.leaf) cur = cur.children[0];
        return cur.keys[0];
    }

    private void borrowFromLeft(Node node, Node left, Node parent, int pIdx) {
        if (node.leaf) {
            int borrowed = left.keys[left.keyCount - 1];
            if (node.keyCount > 0)
                System.arraycopy(node.keys, 0, node.keys, 1, node.keyCount);
            node.keys[0] = borrowed;
            node.keyCount++;
            left.keyCount--;
            parent.keys[pIdx] = node.keys[0];
        } else {
            // internal borrow
            // shift node keys/children right
            if (node.keyCount > 0) System.arraycopy(node.keys, 0, node.keys, 1, node.keyCount);
            if (node.keyCount + 1 > 0)
                System.arraycopy(node.children, 0, node.children, 1, node.keyCount + 1);
            node.keys[0] = parent.keys[pIdx];
            node.children[0] = left.children[left.keyCount];
            if (node.children[0] != null) node.children[0].parent = node;
            node.keyCount++;
            parent.keys[pIdx] = left.keys[left.keyCount - 1];
            left.children[left.keyCount] = null;
            left.keyCount--;
        }
    }

    private void borrowFromRight(Node node, Node right, Node parent, int pIdx) {
        if (node.leaf) {
            int borrowed = right.keys[0];
            node.keys[node.keyCount++] = borrowed;
            if (right.keyCount - 1 > 0)
                System.arraycopy(right.keys, 1, right.keys, 0, right.keyCount - 1);
            right.keyCount--;
            parent.keys[pIdx] = right.keys[0];
        } else {
            node.keys[node.keyCount] = parent.keys[pIdx];
            node.children[node.keyCount + 1] = right.children[0];
            if (node.children[node.keyCount + 1] != null) node.children[node.keyCount + 1].parent = node;
            node.keyCount++;
            parent.keys[pIdx] = right.keys[0];
            if (right.keyCount - 1 > 0)
                System.arraycopy(right.keys, 1, right.keys, 0, right.keyCount - 1);
            if (right.keyCount > 0)
                System.arraycopy(right.children, 1, right.children, 0, right.keyCount);
            right.children[right.keyCount] = null;
            right.keyCount--;
        }
    }

    // Merge parent.children[idx] (left) with parent.children[idx+1] (right)
    private void mergeNodes(Node parent, int idx) {
        Node left = parent.children[idx];
        Node right = parent.children[idx + 1];
        if (left.leaf) {
            System.arraycopy(right.keys, 0, left.keys, left.keyCount, right.keyCount);
            left.keyCount += right.keyCount;
            left.next = right.next;
            parent.removeKeyAt(idx);
            parent.removeChildAt(idx + 1);
        } else {
            left.keys[left.keyCount++] = parent.keys[idx];
            System.arraycopy(right.keys, 0, left.keys, left.keyCount, right.keyCount);
            System.arraycopy(right.children, 0, left.children, left.keyCount, right.keyCount + 1);
            for (int i = 0; i <= right.keyCount; i++)
                if (left.children[left.keyCount + i] != null)
                    left.children[left.keyCount + i].parent = left;
            left.keyCount += right.keyCount;
            parent.removeKeyAt(idx);
            parent.removeChildAt(idx + 1);
        }
        if (parent == root && parent.keyCount == 0) {
            root = left;
            root.parent = null;
            return;
        }
        fixAfterDeletion(parent);
    }

    private void updateParentSeparatorAfterBorrow(Node parent, int sepIndex) {
        Node rightChild = parent.children[sepIndex + 1];
        if (rightChild != null) parent.keys[sepIndex] = firstKey(rightChild);
    }
}

public class BPlusTreeOperations {
    private static int readInt(Scanner sc) {
        while (true) {
            try {
                return Integer.parseInt(sc.next());
            } catch (Exception e) {
                System.out.print("Please enter a valid integer: ");
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter B+ tree order (>=3): ");
        int order = readInt(sc);
        if (order < 3) {
            order = 3;
            System.out.print("Order set to 3 (minimum is 3).");
        }
        BPlusTree tree = new BPlusTree(order);

        while (true) {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Search");
            System.out.println("3. Traverse");
            System.out.println("4. Delete");
            System.out.println("5. Display Structure");
            System.out.println("6. Display Leaves");
            System.out.println("7. Exit");
            System.out.print("Choose: ");
            int ch = readInt(sc);
            switch (ch) {
                case 1 -> {
                    System.out.print("Enter key: ");
                    int k = readInt(sc);
                    if (!tree.insert(k)) System.out.println("Duplicate key!");
                }
                case 2 -> {
                    if (tree.isEmpty()) { break; }
                    System.out.print("Enter key: ");
                    int k = readInt(sc);
                    System.out.println(tree.search(k) ? "Found" : "Not Found");
                }
                case 3 -> {
                    if (tree.isEmpty()) { break; }
                    tree.traverse();
                }
                case 4 -> {
                    if (tree.isEmpty()) { break; }
                    System.out.print("Enter key: ");
                    int k = readInt(sc);
                    if (!tree.delete(k)) System.out.println("Key not found!");
                }
                case 5 -> {
                    if (tree.isEmpty()) { break; }
                    tree.displayStructure();
                }
                case 6 -> {
                    if (tree.isEmpty()) { break; }
                    tree.displayLeaves();
                }
                case 7 -> { System.out.println("Exiting..."); return; }
                default -> System.out.println("Invalid option");
            }
        }
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter B+ tree order (>=3): 3

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 1
Enter key: 1

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 1
Enter key: 2

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 1
Enter key: 3

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 1
Enter key: 4

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 1
Enter key: 5

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 1
Enter key: 6

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 5
|3|
    C1- |2|
        C1- |1|
        C2- |2|
    C2- |4|5|
        C1- |3|
        C2- |4|
        C3- |5|6|

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 2
Enter key: 3
Found

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 3
1 2 3 4 5 6

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 4
Enter key: 3

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 5
|4|
    C1- |2|
        C1- |1|
        C2- |2|
    C2- |5|
        C1- |4|
        C2- |5|6|

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 6
Leaf level (via next pointers):
[1] -> [2] -> [4] -> [5|6]

Operations:
1. Insert
2. Search
3. Traverse
4. Delete
5. Display Structure
6. Display Leaves
7. Exit
Choose: 7
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li><b>Database indexing</b> (most common).</li>
<li><b>File systems</b> (NTFS, HFS+, etc.).</li>
<li><b>Multilevel indexing</b> for large data storage.</li>
<li><b>Range queries</b> in search engines and key-value stores.</li>
<li><b>Key-value stores</b> (to handle large datasets).</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>More complex to implement than binary search trees and B-Tree.</li>
<li>Requires <b>more memory</b> for maintaining internal pointers.</li>
<li>Performance degrades if order m is not tuned for disk/page size.</li>
<li>Slightly slower for single-key lookups (extra pointer traversal).</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="2">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Worst Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Search</th>
            <td>O(log n)</td>
        </tr>
        <tr>
            <th>Insert</th>
            <td>O(log n)</td>
        </tr>
        <tr>
            <th>Delete</th>
            <td>O(log n)</td>
        </tr>
        <tr>
            <th>Traverse</th>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NullPointerException</b>: If tree is empty and operations are performed.</li>
<li><b>ArrayIndexOutOfBoundsException</b>: If node split/merge not handled properly.</li>
<li><b>Logic errors</b>: If leaf linkage is broken, traversal may fail.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'B Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'B Tree Vs. B+ Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'B Tree Vs. B+ Tree', data: `
      <h1>B Tree Vs. B+ Tree</h1>
      <p>A B-tree and a B+ tree are not the same, though they are closely related. Here are the key differences:</p>



      <div class="section">
        <h2>1. Structure</h2>
        <div class="data-box">
<li><b>B-tree</b>: It stores both keys and data (values) in all nodes, including the internal nodes and leaves. Each node has a list of keys and corresponding data pointers.</li>
<li><b>B+ tree</b>: In a B+ tree, only the leaf nodes store the actual data values. Internal nodes only store keys (used for searching) and act as guides to reach the leaf nodes.</li>
        </div>
      </div>



      <div class="section">
        <h2>2. Leaf Nodes</h2>
        <div class="data-box">
<li><b>B-tree</b>: The leaf nodes are not necessarily linked together, meaning they do not form a linked list.</li>
<li><b>B+ tree</b>: The leaf nodes are typically linked together in a linked list, which makes range queries (like scanning through a range of values) faster.</li>
        </div>
      </div>



      <div class="section">
        <h2>3. Search Efficiency</h2>
        <div class="data-box">
<li><b>B-tree</b>: Searching for a key can happen in any node (internal or leaf), which might increase the number of steps in some cases.</li>
<li><b>B+ tree</b>: All data is stored in the leaf nodes, which simplifies the search process. Internal nodes only contain keys for navigation, making the search more uniform and predictable.</li>
        </div>
      </div>



      <div class="section">
        <h2>4. Insertion and Deletion</h2>
        <div class="data-box">
<li><b>B-tree</b>: Insertion or deletion of a key might cause changes in both internal nodes and leaves.</li>
<li><b>B+ tree</b>: Since data is only in the leaf nodes, insertions and deletions affect only the leaves and may cause changes in internal nodes indirectly.</li>
        </div>
      </div>



      <div class="section">
        <h2>5. Range Queries</h2>
        <div class="data-box">
<li><b>B-tree</b>: Since the leaf nodes are not linked, range queries require traversing the tree from the root down to each leaf node.</li>
<li><b>B+ tree</b>: Thanks to the linked list structure of the leaf nodes, range queries are faster and more efficient because once you reach the first matching leaf, you can easily traverse through the next ones.</li>
        </div>
      </div>



      <div class="section">
        <h2>6. Use Cases</h2>
        <div class="data-box">
<li><b>B-tree</b>: More commonly used for file systems and databases where the storage of both keys and data together is beneficial.</li>
<li><b>B+ tree</b>: Often used in indexing structures in databases because of its efficiency in range queries.</li>
        </div>
      </div>



      <div class="section">
        <div class="data-box">
<p>In short, the B+ tree is an improvement over the B-tree for certain use cases, especially where range queries and search operations are crucial.</p>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'B+ Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Trie')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Trie', data: `
      <h1>Trie</h1>
      <p>A <b>Trie</b> (pronounced "try", also called a prefix tree or digital tree) is a <b>tree-based data structure</b> that stores strings in a way that allows efficient retrieval of words based on their prefixes.</p>
      <ul>
        <li>Each node represents a character of a string.</li>
        <li>The root node is empty and paths from the root represent prefixes.</li>
        <li>A terminal marker indicates the end of a valid word.</li>
      </ul>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/trie/tr1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li>Think of a <b>dictionary</b>:</li>
<ul type="circle">
    <li>Words are stored in alphabetical order.</li>
    <li>To search "cat", you look for "c", then "ca", then "cat".</li>
    <li>A Trie works similarly by breaking words into characters and storing them in paths.</li>
</ul>
<li>Another analogy: <b>Phone directory</b> — names are stored by their common prefixes (first few letters).</li>
        </div>
      </div>



      <div class="section">
        <h2>Types of Trie</h2>
        <div class="data-box">
<li><b>Standard Trie</b>
<ul type="circle">
    <li>Stores characters in nodes.</li>
    <li>Each node can have multiple children (e.g., 26 for lowercase English letters).</li>
</ul>
</li>
<li><b>Compressed Trie (Radix Tree / Patricia Trie)</b>
<ul type="circle">
    <li>Compresses chains of single-child nodes into one edge (saves space).</li>
</ul>
</li>
<li>
<b>Suffix Trie</b>
<ul type="circle">
    <li>Stores all suffixes of a string (useful for substring search).</li>
</ul>
</li>
        </div>
      </div>



      <div class="section">
        <h2>Node Structure</h2>
        <div class="data-box">
          <code><pre class="java-code">
class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;

    TrieNode() {
        children = new TrieNode[26]; // for lowercase a-z
        isEndOfWord = false;
    }
}
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Stores strings in a prefix-based hierarchical way.</li>
<li>Each edge represents a character.</li>
<li>Each node has up to <b>alphabet_size</b> children.</li>
<li>Supports <b>fast prefix searches</b>.</li>
<li>Uses more memory than hash tables due to storing multiple references.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>insert(word)</b>: Inserts a word into the Trie.</li>
<li><b>search(word)</b>: Returns true if the word exists.</li>
<li><b>startsWith(prefix)</b>: Checks if any word starts with the given prefix.</li>
<li><b>delete(word)</b>: Removes a word from the Trie (if it exists).</li>
<li><b>display()</b>: Prints all words stored in the Trie.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.*;

class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;

    TrieNode() {
        children = new TrieNode[26]; // for lowercase a-z
        isEndOfWord = false;
    }
}

public class Trie {
    private TrieNode root;

    Trie() {
        root = new TrieNode();
    }

    // Insert word
    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEndOfWord = true;
    }

    // Search word
    public boolean search(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return false;
            }
            node = node.children[index];
        }
        return node.isEndOfWord;
    }

    // Check prefix
    public boolean startsWith(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return false;
            }
            node = node.children[index];
        }
        return true;
    }

    // Helper to display words
    private void displayWords(TrieNode node, String word) {
        if (node.isEndOfWord) {
            System.out.println(word);
        }
        for (int i = 0; i < 26; i++) {
            if (node.children[i] != null) {
                displayWords(node.children[i], word + (char)(i + 'a'));
            }
        }
    }

    public void display() {
        displayWords(root, "");
    }

    // Delete word
    private boolean delete(TrieNode node, String word, int depth) {
        if (node == null) return false;

        if (depth == word.length()) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;

            // if no children, node can be deleted
            return Arrays.stream(node.children).allMatch(Objects::isNull);
        }

        int index = word.charAt(depth) - 'a';
        if (delete(node.children[index], word, depth + 1)) {
            node.children[index] = null;
            return !node.isEndOfWord && Arrays.stream(node.children).allMatch(Objects::isNull);
        }
        return false;
    }

    public void delete(String word) {
        delete(root, word, 0);
    }
    
    public void displayStructure(TrieNode node, String indent) {
        for (int i = 0; i < 26; i++) {
            if (node.children[i] != null) {
                System.out.println(indent + "-----" + (char)(i + 'a'));
                displayStructure(node.children[i], indent + "     ");
            }
        }
    }
    
    public boolean isEmpty() {
        for (int i = 0; i < 26; i++) {
            if (root.children[i] != null) {
                return false;
            }
        }
        System.out.println("Trie is empty.");
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Trie trie = new Trie();
        int choice;
        String word;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Search");
            System.out.println("3. StartsWith (Prefix Check)");
            System.out.println("4. Display Words");
            System.out.println("5. Delete");
            System.out.println("6. Display Structure");
            System.out.println("7. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();
            sc.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter word to insert: ");
                    word = sc.nextLine();
                    trie.insert(word);
                    break;
                case 2:
                    if (trie.isEmpty()) break;
                    System.out.print("Enter word to search: ");
                    word = sc.nextLine();
                    System.out.println(trie.search(word) ? "Found" : "Not Found");
                    break;
                case 3:
                    if (trie.isEmpty()) break;
                    System.out.print("Enter prefix: ");
                    word = sc.nextLine();
                    System.out.println(trie.startsWith(word) ? "Yes" : "No");
                    break;
                case 4:
                    if (trie.isEmpty()) break;
                    System.out.println("Words in Trie:");
                    trie.display();
                    break;
                case 5:
                    if (trie.isEmpty()) break;
                    System.out.print("Enter word to delete: ");
                    word = sc.nextLine();
                    trie.delete(word);
                    System.out.println("Deleted (if present).");
                    break;
                case 6:
                    if (trie.isEmpty()) break;
                    System.out.println("null");
                    trie.displayStructure(trie.root, "");
                    break;
                case 7:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 7);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 1
Enter word to insert: ad

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 1
Enter word to insert: aba

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 1
Enter word to insert: abc

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 1
Enter word to insert: bad

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 1
Enter word to insert: bag

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 4
Words in Trie:
aba
abc
ad
bad
bag

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 6
null
-----a
     -----b
          -----a
          -----c
     -----d
-----b
     -----a
          -----d
          -----g

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 2
Enter word to search: bag
Found

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 3
Enter prefix: ab
Yes

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 5
Enter word to delete: ad
Deleted (if present).

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 6
null
-----a
     -----b
          -----a
          -----c
-----b
     -----a
          -----d
          -----g

Operations:
1. Insert
2. Search
3. StartsWith (Prefix Check)
4. Display Words
5. Delete
6. Display Structure
7. Exit
Choose an operation: 7
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li><b>Autocomplete systems</b> (Google Search, text editors).</li>
<li><b>Spell checkers</b> (detecting valid/invalid words).</li>
<li><b>IP routing</b> (longest prefix matching).</li>
<li><b>DNA sequence analysis</b>.</li>
<li><b>Word games</b> (Scrabble, crossword solving).</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>High <b>memory usage</b> (due to storing many null child references).</li>
<li>Not efficient for very long keys.</li>
<li>Needs optimization (compressed trie, ternary search tree, hash map-based nodes).</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Insert</th>
            <td>O(L)</td>
            <td>O(ALPHABET_SIZE * L * N) worst-case</td>
        </tr>
        <tr>
            <th>Search</th>
            <td>O(L)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Prefix Check</th>
            <td>O(L)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Delete</th>
            <td>O(L)</td>
            <td>-</td>
        </tr>
        <tr>
            <th>Display</th>
            <td>O(N * L)</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

<p>Where:</p>
<ul>
    <li><b>L</b> = length of word,</li>
    <li><b>N</b> = number of words,</li>
    <li><b>ALPHABET_SIZE</b> = 26 (for lowercase English).</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NullPointerException</b>: if null string is inserted/searched.</li>
<li><b>IndexOutOfBoundsException</b>: if character mapping outside the defined alphabet.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'B Tree Vs. B+ Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Segment Tree')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Segment Tree', data: `
      <h1>Segment Tree</h1>
      <p>A <b>Segment Tree</b> is a binary tree data structure used for storing information about intervals (segments).</p>
      <p>It allows <b>efficient querying</b> (like sum, min, max, gcd, etc.) and <b>updating</b> of elements in an array.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/segmentTree/sgt1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<p>Think of a <b>school gradebook</b>:</p>
<ul>
    <li>Each student’s marks are stored in an array.</li>
    <li>If you want to know the <b>total marks of students from roll no. 10 to 50</b>, you could add them one by one (slow).</li>
    <li>Instead, a Segment Tree precomputes ranges so you can answer such queries much faster.</li>
</ul>
        </div>
      </div>


      <div class="section">
        <h2>Key Idea</h2>
        <div class="data-box">
<li>The array is divided into <b>segments</b>.</li>
<li>Each node of the tree represents an <b>interval [L, R]</b> and stores aggregated data (like sum, min, max) for that interval.</li>
<li>The root covers the <b>whole array</b>.</li>
<li>The leaves represent <b>single elements</b>.</li>
        </div>
      </div>


      <div class="section">
        <h2>Types of Segment Trees</h2>
        <div class="data-box">
<li><b>Sum Segment Tree</b>: stores sum of ranges.</li>
<li><b>Min Segment Tree</b>: stores minimum element in ranges.</li>
<li><b>Max Segment Tree</b>: stores maximum element in ranges.</li>
<li><b>GCD Segment Tree</b>: stores gcd of ranges.</li>
<li><b>Lazy Segment Tree</b>: optimized with lazy propagation for fast range updates.</li>
        </div>
      </div>



      <div class="section">
        <h2>Array Declaration</h2>
        <div class="data-box">
          <code><pre class="java-code">
int[] tree = new int[4 * n]; // Usually 4n is safe size for segment tree
          </pre></code>
          <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>A <b>binary tree</b> structure (but usually stored as an array).</li>
<li>All leaf nodes contain the actual array values.</li>
<li>Supports <b>range queries</b> in <b>O(log n)</b>.</li>
<li>Supports <b>point or range updates</b> in <b>O(log n)</b>.</li>
<li><b>Space complexity</b>: O(4n) ≈ O(n).</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>Build</b></li>
<ul type="circle">
    <li>Construct the tree from the array.</li>
    <li>Time complexity: O(n).</li>
</ul>
<li><b>Query</b></li>
<ul type="circle">
    <li>Get sum/min/max in a given range [L, R].</li>
    <li>Time complexity: O(log n).</li>
</ul>
<li><b>Update</b></li>
<ul type="circle">
    <li>Update a single element or range.</li>
    <li>Time complexity: O(log n).</li>
</ul>
<li><b>Lazy Propagation (optional)</b></li>
<ul type="circle">
    <li>Efficiently updates ranges without recomputing all nodes.</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

public class SegmentTree {
    int[] tree;
    int n;

    SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 0, 0, n - 1);
    }

    // Build segment tree
    private void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start]; // Leaf node
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node + 1, start, mid);
            build(arr, 2 * node + 2, mid + 1, end);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2]; // Sum
        }
    }

    // Query sum in range [l, r]
    public int query(int l, int r) {
        return queryUtil(0, 0, n - 1, l, r);
    }

    private int queryUtil(int node, int start, int end, int l, int r) {
        if (r < start || l > end) return 0; // No overlap
        if (l <= start && end <= r) return tree[node]; // Complete overlap
        int mid = (start + end) / 2;
        int left = queryUtil(2 * node + 1, start, mid, l, r);
        int right = queryUtil(2 * node + 2, mid + 1, end, l, r);
        return left + right;
    }

    // Update single element
    public void update(int idx, int val) {
        updateUtil(0, 0, n - 1, idx, val);
    }

    private void updateUtil(int node, int start, int end, int idx, int val) {
        if (start == end) {
            tree[node] = val;
        } else {
            int mid = (start + end) / 2;
            if (idx <= mid)
                updateUtil(2 * node + 1, start, mid, idx, val);
            else
                updateUtil(2 * node + 2, mid + 1, end, idx, val);

            tree[node] = tree[2 * node + 1] + tree[2 * node + 2]; // Recompute
        }
    }

    // Display tree (for understanding)
    public void display() {
        System.out.print("Segment Tree Array: ");
        for (int i = 0; i < 4 * n; i++) {
            System.out.print(tree[i] + " ");
        }
        System.out.println();
    }
    
    public void displayStructure(int i, String indent, String childType) {
        if (tree[i] != 0) System.out.println(indent + childType + tree[i]);
        if ((2 * i + 2) < 4 * n) {
            displayStructure((2 * i + 1), indent + "    ", "L-- ");
            displayStructure((2 * i + 2), indent + "    ", "R-- ");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Input array
        System.out.print("Enter size of array: ");
        int size = sc.nextInt();
        int[] arr = new int[size];
        System.out.print("Enter array elements: ");
        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }

        SegmentTree st = new SegmentTree(arr);

        int choice;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Query (Range Sum)");
            System.out.println("2. Update (Change value at index)");
            System.out.println("3. Display Segment Tree Array");
            System.out.println("4. Display Structure");
            System.out.println("5. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter range (l r): ");
                    int l = sc.nextInt();
                    int r = sc.nextInt();
                    if (l < 0 || r >= size || l > r) {
                        System.out.println("Invalid range.");
                    } else {
                        System.out.println("Sum of [" + l + "," + r + "] = " + st.query(l, r));
                    }
                    break;
                case 2:
                    System.out.print("Enter index: ");
                    int idx = sc.nextInt();
                    System.out.print("Enter new value: ");
                    int val = sc.nextInt();
                    if (idx < 0 || idx >= size) {
                        System.out.println("Invalid index.");
                    } else {
                        st.update(idx, val);
                        System.out.println("Value updated.");
                    }
                    break;
                case 3:
                    st.display();
                    break;
                case 4:
                    System.out.println("Tree structure:");
                    st.displayStructure(0, "", "");
                    break;
                case 5:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 5);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter size of array: 5
Enter array elements: 3 6 9 5 2

Operations:
1. Query (Range Sum)
2. Update (Change value at index)
3. Display Segment Tree Array
4. Display Structure
5. Exit
Choose an operation: 1
Enter range (l r): 1 3
Sum of [1,3] = 20

Operations:
1. Query (Range Sum)
2. Update (Change value at index)
3. Display Segment Tree Array
4. Display Structure
5. Exit
Choose an operation: 2
Enter index: 3
Enter new value: 4
Value updated.

Operations:
1. Query (Range Sum)
2. Update (Change value at index)
3. Display Segment Tree Array
4. Display Structure
5. Exit
Choose an operation: 3
Segment Tree Array: 24 18 6 9 9 4 2 3 6 0 0 0 0 0 0 0 0 0 0 0

Operations:
1. Query (Range Sum)
2. Update (Change value at index)
3. Display Segment Tree Array
4. Display Structure
5. Exit
Choose an operation: 4
Tree structure:
24
    L-- 18
        L-- 9
            L-- 3
            R-- 6
        R-- 9
    R-- 6
        L-- 4
        R-- 2

Operations:
1. Query (Range Sum)
2. Update (Change value at index)
3. Display Segment Tree Array
4. Display Structure
5. Exit
Choose an operation: 5
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li><b>Range queries</b> (sum/min/max/gcd).</li>
<li><b>Interval problems</b> (e.g., number of overlapping intervals).</li>
<li><b>Image processing</b> (range-based pixel operations).</li>
<li><b>Competitive programming</b> (fast range query solutions).</li>
<li><b>Stock price analysis</b> (range max/min).</li>
<li><b>Gaming</b> (range damage, buffs, etc.).</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>More complex to implement compared to arrays or simple trees.</li>
<li>Higher constant factor in time (though still O(log n)).</li>
<li>Requires about 4n space, which may be large for huge arrays.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Build</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Query</th>
            <td>O(log n)</td>
            <td>O(n) (tree)</td>
        </tr>
        <tr>
            <th>Update</th>
            <td>O(log n)</td>
            <td>O(n) (tree)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>IndexOutOfBoundsException</b>: if query or update is outside array range.</li>
<li><b>Empty array</b>: invalid segment tree.</li>
<li><b>Large input size</b>: memory overflow (due to 4n array).</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Trie')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Graph')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Graph', data: `
      <h1>Graph</h1>
      <p>A <b>Graph</b> is a non-linear data structure consisting of a <b>finite set of vertices (nodes)</b> and a <b>set of edges</b> that connect pairs of vertices.</p>
      <p>Generally, a graph G is represented as <b>G = ( V , E )</b>, where <b>V</b> is a set of vertices and <b>E</b> is a set of edges. </p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g1.png" class="data-img">
      <p>The above is a graph <b>G = (V , E)</b> where V = {A, B, C, D, E} and E = {(A,B), (A,C), (B,D), (C,D), (B,E), (D,E)}.</p>
      <p><b>Note</b>: A graph may have cycles whereas a tree cannot. For example in the above graph <b>A -> B -> C -> D</b> forms a cycle.</p>



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li><b>Social Network</b>: Each person is a vertex, and friendships are edges.</li>
<li><b>Google Maps</b>: Locations are vertices, and roads are edges.</li>
<li><b>Internet</b>: Computers/servers are vertices, and connections are edges.</li>
        </div>
      </div>



      <div class="section">
        <h2>Terminology</h2>
        <div class="data-box">
<li><b>Vertex</b>
    <p>An individual data element of a graph is called a Vertex. Vertex is also known as node. Vertex is generally represented using a labelled circle.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g2.png" class="data-img">
</li>
<li><b>Edge</b>
    <p>A link connecting two vertices is known as the Edge. Arc is another name for edge. An edge is represented as (First Vertex, Second Vertex). For example, the link between vertices A and B is represented as (A,B).</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g3.png" class="data-img">
    <p>There are three types of edges:</p>
    <ol>
        <li>Directed edge.</li>
        <li>Undirected edge.</li>
        <li>Weighted edge.</li>
    </ol>
    <p><b>Directed Edge</b>: A directed edge is a uni directional edge. It is represented using a → pointing from source to destination. A → B indicates that A is the source and B is the destination. If there is a directed edge between vertices A and B then edge (A , B) is not equal to edge (B , A). </p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g4.png" class="data-img">
    <p><b>Undirected Edge</b>: An undirected edge is a bidirectional edge. If there is an undirected edge between vertices A and B then edge (A , B) is equal to edge (B , A). It is represented using a ―</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g5.png" class="data-img">
    <p><b>Weighted Edge</b>: A weighted edge is an edge with cost on it. It can be both directed and undirected.</p>
</li>
<li><b>End points or end vertices</b>
    <p>The two vertices joined by an edge are called the end vertices (or endpoints) of the edge.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g6.png" class="data-img">
</li>
<li><b>Origin</b>
    <p>In a directed edge, the vertex from which the edge emanates is called the Origin or Source of the edge.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g7.png" class="data-img">
</li>
<li><b>Destination</b>
    <p>In a directed edge, the vertex at which the edge ends is called the destination of the edge. </p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g8.png" class="data-img">
</li>
<li><b>Adjacent</b>
    <p>Two vertices are said to be adjacent to each other, if there is an edge that joins those vertices. In other words, If there is an edge between vertices A and B then both A and B are said to be adjacent to each other.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g9.png" class="data-img">
</li>
<li><b>Incident</b>
    <p>An edge is said to be incident on a vertex if the vertex is one of the endpoints of that edge.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g10.png" class="data-img">
</li>
<li><b>Incoming edge</b>
    <p>A directed edge is said to be an incoming edge on its destination vertex.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g11.png" class="data-img">
</li>
<li><b>Outgoing edge</b>
    <p>A directed edge is said to be an outgoing edge on its source vertex.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g12.png" class="data-img">
</li>
<li><b>Degree</b>
    <p>For a vertex V, the total number of the edges connected is said to be the degree of that vertex.</p>
</li>
<li><b>Indegree</b>
    <p>For a given vertex V, the total number of incoming edges is said to be indegree of that vertex.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g13.png" class="data-img">
</li>
<li><b>Outdegree</b>
    <p>For a given vertex V, the total number of outgoing edges is said to be outdegree of that vertex.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g14.png" class="data-img">
</li>
<li><b>Self-loop</b>
    <p>An directed or undirected edge is a self-loop if both of its endpoints are the same. i.e source equal to destination. Here B has a self-loop.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g4.png" class="data-img">
</li>
<li><b>Path</b>
    <p>Path represents a sequence of edges between the two vertices.</p>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g15.png" class="data-img">
</li>
        </div>
      </div>



      <div class="section">
        <h2>Types of Graphs</h2>
        <div class="data-box">
<li><b>Based on Direction</b>
<ul type="circle">
    <li><b>Undirected Graph</b>: Edges have no direction. If A is connected to B, then B is connected to A.</li>
    <li><b>Directed Graph (Digraph)</b>: Edges have a direction. If A → B, it does not imply B → A.</li>
</ul>
</li>
<li><b>Based on Weight</b>
<ul type="circle">
    <li><b>Weighted Graph</b>: Edges have weights (distances, costs, etc.).</li>
    <li><b>Unweighted Graph</b>: All edges are equal (weight = 1).</li>
</ul>
</li>
<li><b>Other Classifications</b>
<ul type="circle">
    <li><b>Cyclic Graph</b>: Contains at least one cycle.</li>
    <li><b>Acyclic Graph</b>: Contains no cycles (e.g., DAG – Directed Acyclic Graph).</li>
    <li><b>Complete Graph</b>: Every vertex is connected to every other vertex.</li>
    <li><b>Sparse Graph</b>: Few edges compared to vertices.</li>
    <li><b>Dense Graph</b>: Many edges relative to the number of vertices.</li>
</ul>
</li>
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Graph is a <b>collection of vertices and edges</b>.</li>
<li>Can be <b>directed or undirected, weighted or unweighted</b>.</li>
<li>Represented using:
<ul type="circle">
<li><b>Adjacency Matrix</b> (2D array) → O(V²) space.</li>
<li><b>Adjacency List</b> (Map/List) → O(V + E) space.</li>
</ul>
</li>
<li>Traversals:
<ul type="circle">
<li><b>BFS (Breadth-First Search)</b> → Uses Queue.</li>
<li><b>DFS (Depth-First Search)</b> → Uses Recursion/Stack.</li>
</ul>
</li>
        </div>
      </div>

      

      <div class="section">
        <h2>Representations</h2>
        <div class="data-box">
<p>Graph data structure is represented using following representations:</p>
<ul>
    <li>Adjacency matrix</li>
    <li>Incidence matrix</li>
    <li>Adjacency list</li>
</ul>
<li><b>Adjacency matrix</b></br>
    In this representation, a graph <b>G(V, E)</b> with V vertices and E edges can be represented using a matrix of size <b>V X V</b>, i.e V rows and V columns. A graph with 5 vertices can be represented in a 5 X 5 adjacency matrix. In an adjacency matrix, both rows and columns represent vertices and the value of the matrix is either 0 or 1. Here, 1 represents there is an edge from row vertex to column vertex and 0 represents there is no edge from row vertex to column vertex.
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g16.png" class="data-img">
</li>
<li><b>Incidence matrix</b></br>
    In this representation, a graph <b>G(V, E)</b> with V vertices and E edges can be represented using a matrix of size <b>V X E</b>, i.e V rows and E columns. A graph with 5 vertices and 8 edges can be represented in a 5 X 8 incidence matrix. In incidence matrix rows represent vertices and columns represent edges. This matrix is filled with either 0 or 1 or -1. Here 1 represents that the column edge is the outgoing edge from the row vertex, -1 represents that the column edge is the incoming edge from the row vertex and 0 represents that the column edge is not connected to the row vertex. For self-loop edges, only 1 is used to represent both the incoming and outgoing edge.
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g17.png" class="data-img">
</li>
<li><b>Adjacency list</b></br>
    In this representation, every vertex of the graph contains a list of its adjacent vertices. An adjacency list is an array A of separate lists. Each element of the array Ai is a list, which contains all the vertices that are adjacent to vertex i.
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/graph/g18.png" class="data-img">
</li>
        </div>
      </div>



      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>addVertex(v)</b>: Adds a vertex to the graph.</li>
<li><b>addEdge(u, v)</b>: Adds an edge between vertices.</li>
<li><b>removeEdge(u, v)</b>: Removes an edge.</li>
<li><b>removeVertex(v)</b>: Removes a vertex and its edges.</li>
<li><b>BFS(start)</b>: Traverses graph using breadth-first.</li>
<li><b>DFS(start)</b>: Traverses graph using depth-first.</li>
<li><b>display()</b>: Prints adjacency representation.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <div class="tabs">
          <button class="tab-button active" onclick="showTabContent(event, 'tab1')">Using Adjacency List</button>
          <button class="tab-button" onclick="showTabContent(event, 'tab2')">Using Adjacency Matrix</button>
        </div>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.*;

public class Graph {
    private Map<Integer, List<Integer>> adjList = new HashMap<>();

    // Add vertex
    public void addVertex(int v) {
        adjList.putIfAbsent(v, new ArrayList<>());
    }

    // Add edge (undirected)
    public void addEdge(int src, int dest) {
        if (!adjList.containsKey(src) || !adjList.containsKey(dest)) {
            System.out.println("Both vertices must exist before adding an edge.");
            return;
        }
        adjList.get(src).add(dest);
        adjList.get(dest).add(src); // undirected
    }

    // Remove edge (undirected)
    public void removeEdge(int src, int dest) {
        if (!adjList.containsKey(src) || !adjList.containsKey(dest)) {
            System.out.println("One or both vertices do not exist.");
            return;
        }
        adjList.get(src).remove(Integer.valueOf(dest));
        adjList.get(dest).remove(Integer.valueOf(src));
        System.out.println("Edge removed between " + src + " and " + dest);
    }

    // Remove vertex
    public void removeVertex(int v) {
        if (!adjList.containsKey(v)) {
            System.out.println("Vertex not found.");
            return;
        }
        // Remove this vertex from all adjacency lists
        for (int neighbor : adjList.get(v)) {
            adjList.get(neighbor).remove(Integer.valueOf(v));
        }
        // Finally remove the vertex itself
        adjList.remove(v);
        System.out.println("Vertex " + v + " removed.");
    }

    // Display graph
    public void display() {
        if (adjList.isEmpty()) {
            System.out.println("Graph is empty.");
            return;
        }
        for (var entry : adjList.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }

    // BFS Traversal
    public void BFS(int start) {
        if (!adjList.containsKey(start)) {
            System.out.println("Start vertex not found.");
            return;
        }
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> q = new LinkedList<>();
        q.add(start);
        visited.add(start);

        System.out.print("BFS: ");
        while (!q.isEmpty()) {
            int node = q.poll();
            System.out.print(node + " ");
            for (int neighbor : adjList.get(node)) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    q.add(neighbor);
                }
            }
        }
        System.out.println();
    }

    // DFS Traversal
    public void DFS(int start) {
        if (!adjList.containsKey(start)) {
            System.out.println("Start vertex not found.");
            return;
        }
        Set<Integer> visited = new HashSet<>();
        System.out.print("DFS: ");
        dfsHelper(start, visited);
        System.out.println();
    }

    private void dfsHelper(int v, Set<Integer> visited) {
        visited.add(v);
        System.out.print(v + " ");
        for (int neighbor : adjList.get(v)) {
            if (!visited.contains(neighbor)) {
                dfsHelper(neighbor, visited);
            }
        }
    }

    // Main (menu-driven)
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Graph g = new Graph();
        int choice;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Add Vertex");
            System.out.println("2. Add Edge");
            System.out.println("3. Remove Edge");
            System.out.println("4. Remove Vertex");
            System.out.println("5. Display Graph");
            System.out.println("6. BFS Traversal");
            System.out.println("7. DFS Traversal");
            System.out.println("8. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter vertex: ");
                    int v = sc.nextInt();
                    g.addVertex(v);
                    break;

                case 2:
                    System.out.print("Enter source vertex: ");
                    int src = sc.nextInt();
                    System.out.print("Enter destination vertex: ");
                    int dest = sc.nextInt();
                    g.addEdge(src, dest);
                    break;

                case 3:
                    System.out.print("Enter source vertex: ");
                    int srcR = sc.nextInt();
                    System.out.print("Enter destination vertex: ");
                    int destR = sc.nextInt();
                    g.removeEdge(srcR, destR);
                    break;

                case 4:
                    System.out.print("Enter vertex to remove: ");
                    int vR = sc.nextInt();
                    g.removeVertex(vR);
                    break;

                case 5:
                    g.display();
                    break;

                case 6:
                    System.out.print("Enter start vertex for BFS: ");
                    int bfsStart = sc.nextInt();
                    g.BFS(bfsStart);
                    break;

                case 7:
                    System.out.print("Enter start vertex for DFS: ");
                    int dfsStart = sc.nextInt();
                    g.DFS(dfsStart);
                    break;

                case 8:
                    System.out.println("Exiting...");
                    break;

                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 8);
        sc.close();
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 1
Enter vertex: 1

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 1
Enter vertex: 2

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 1
Enter vertex: 3

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 2
Enter source vertex: 1
Enter destination vertex: 2

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 2
Enter source vertex: 1
Enter destination vertex: 3

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 2
Enter source vertex: 2
Enter destination vertex: 3

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 1
Enter vertex: 4

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 2
Enter source vertex: 2
Enter destination vertex: 4

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 5
1 -> [2, 3]
2 -> [1, 3, 4]
3 -> [1, 2]
4 -> [2]

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 3
Enter source vertex: 2
Enter destination vertex: 3
Edge removed between 2 and 3

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 6
Enter start vertex for BFS: 1
BFS: 1 2 3 4

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 7
Enter start vertex for DFS: 1
DFS: 1 2 4 3

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 4
Enter vertex to remove: 4
Vertex 4 removed.

Operations:
1. Add Vertex
2. Add Edge
3. Remove Edge
4. Remove Vertex
5. Display Graph
6. BFS Traversal
7. DFS Traversal
8. Exit
Choose an operation: 8
Exiting...
*/
</pre>
          </div>

          <div class="tab-content data-box hidden" id="tab2"><pre class="java-code">
import java.util.*;

public class GraphMatrix {
    private int[][] adjMatrix;
    private int vertices;

    GraphMatrix(int v) {
        vertices = v;
        adjMatrix = new int[v][v]; // initialized with 0
    }

    // Add Edge (undirected)
    public void addEdge(int src, int dest) {
        if (src < 0 || src >= vertices || dest < 0 || dest >= vertices) {
            System.out.println("Invalid vertex index!");
            return;
        }
        adjMatrix[src][dest] = 1;
        adjMatrix[dest][src] = 1; // for undirected graph
        System.out.println("Edge added between " + src + " and " + dest);
    }

    // Remove Edge (undirected)
    public void removeEdge(int src, int dest) {
        if (src < 0 || src >= vertices || dest < 0 || dest >= vertices) {
            System.out.println("Invalid vertex index!");
            return;
        }
        if (adjMatrix[src][dest] == 0) {
            System.out.println("No edge exists between " + src + " and " + dest);
            return;
        }
        adjMatrix[src][dest] = 0;
        adjMatrix[dest][src] = 0; // for undirected graph
        System.out.println("Edge removed between " + src + " and " + dest);
    }

    // Display adjacency matrix
    public void display() {
        System.out.println("Adjacency Matrix:");
        System.out.print("  ");
        for (int i = 0; i < vertices; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        for (int i = 0; i < vertices; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < vertices; j++) {
                System.out.print(adjMatrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    // BFS Traversal
    public void BFS(int start) {
        if (start < 0 || start >= vertices) {
            System.out.println("Invalid start vertex!");
            return;
        }
        boolean[] visited = new boolean[vertices];
        Queue<Integer> q = new LinkedList<>();
        q.add(start);
        visited[start] = true;

        System.out.print("BFS: ");
        while (!q.isEmpty()) {
            int node = q.poll();
            System.out.print(node + " ");
            for (int i = 0; i < vertices; i++) {
                if (adjMatrix[node][i] == 1 && !visited[i]) {
                    visited[i] = true;
                    q.add(i);
                }
            }
        }
        System.out.println();
    }

    // DFS Traversal
    public void DFS(int start) {
        if (start < 0 || start >= vertices) {
            System.out.println("Invalid start vertex!");
            return;
        }
        boolean[] visited = new boolean[vertices];
        System.out.print("DFS: ");
        dfsHelper(start, visited);
        System.out.println();
    }

    private void dfsHelper(int v, boolean[] visited) {
        visited[v] = true;
        System.out.print(v + " ");
        for (int i = 0; i < vertices; i++) {
            if (adjMatrix[v][i] == 1 && !visited[i]) {
                dfsHelper(i, visited);
            }
        }
    }

    // Main (menu-driven)
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of vertices: ");
        int v = sc.nextInt();
        GraphMatrix g = new GraphMatrix(v);

        int choice;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Add Edge");
            System.out.println("2. Remove Edge");
            System.out.println("3. Display Graph");
            System.out.println("4. BFS Traversal");
            System.out.println("5. DFS Traversal");
            System.out.println("6. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter source vertex: ");
                    int src = sc.nextInt();
                    System.out.print("Enter destination vertex: ");
                    int dest = sc.nextInt();
                    g.addEdge(src, dest);
                    break;

                case 2:
                    System.out.print("Enter source vertex: ");
                    src = sc.nextInt();
                    System.out.print("Enter destination vertex: ");
                    dest = sc.nextInt();
                    g.removeEdge(src, dest);
                    break;

                case 3:
                    g.display();
                    break;

                case 4:
                    System.out.print("Enter start vertex for BFS: ");
                    int bfsStart = sc.nextInt();
                    g.BFS(bfsStart);
                    break;

                case 5:
                    System.out.print("Enter start vertex for DFS: ");
                    int dfsStart = sc.nextInt();
                    g.DFS(dfsStart);
                    break;

                case 6:
                    System.out.println("Exiting...");
                    break;

                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 6);

        sc.close();
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter number of vertices: 4

Operations:
1. Add Edge
2. Remove Edge
3. Display Graph
4. BFS Traversal
5. DFS Traversal
6. Exit
Choose an operation: 1
Enter source vertex: 0
Enter destination vertex: 1
Edge added between 0 and 1

Operations:
1. Add Edge
2. Remove Edge
3. Display Graph
4. BFS Traversal
5. DFS Traversal
6. Exit
Choose an operation: 1
Enter source vertex: 0
Enter destination vertex: 2
Edge added between 0 and 2

Operations:
1. Add Edge
2. Remove Edge
3. Display Graph
4. BFS Traversal
5. DFS Traversal
6. Exit
Choose an operation: 1
Enter source vertex: 1
Enter destination vertex: 2
Edge added between 1 and 2

Operations:
1. Add Edge
2. Remove Edge
3. Display Graph
4. BFS Traversal
5. DFS Traversal
6. Exit
Choose an operation: 1
Enter source vertex: 1
Enter destination vertex: 3
Edge added between 1 and 3

Operations:
1. Add Edge
2. Remove Edge
3. Display Graph
4. BFS Traversal
5. DFS Traversal
6. Exit
Choose an operation: 3
Adjacency Matrix:
  0 1 2 3
0 0 1 1 0
1 1 0 1 1
2 1 1 0 0
3 0 1 0 0

Operations:
1. Add Edge
2. Remove Edge
3. Display Graph
4. BFS Traversal
5. DFS Traversal
6. Exit
Choose an operation: 2
Enter source vertex: 1
Enter destination vertex: 2
Edge removed between 1 and 2

Operations:
1. Add Edge
2. Remove Edge
3. Display Graph
4. BFS Traversal
5. DFS Traversal
6. Exit
Choose an operation: 4
Enter start vertex for BFS: 0
BFS: 0 1 2 3

Operations:
1. Add Edge
2. Remove Edge
3. Display Graph
4. BFS Traversal
5. DFS Traversal
6. Exit
Choose an operation: 5
Enter start vertex for DFS: 0
DFS: 0 1 3 2

Operations:
1. Add Edge
2. Remove Edge
3. Display Graph
4. BFS Traversal
5. DFS Traversal
6. Exit
Choose an operation: 6
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Social networks (friendships, followers).</li>
<li>Road networks and GPS navigation.</li>
<li>Networking (routing, packet transmission).</li>
<li>Scheduling and dependency resolution.</li>
<li>Web crawlers (link structures).</li>
<li>Pathfinding in AI (games, robots).</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li><b>Adjacency Matrix</b> wastes space in sparse graphs.</li>
<li><b>Adjacency List</b> can be slower for dense graphs.</li>
<li>Traversals can be expensive for very large graphs.</li>
<li>Cycle detection and shortest path require extra algorithms.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Adjacency Matrix</th>
            <th>Adjacency List</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Add Vertex</th>
            <td>O(V<sup>2</sup>)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Add Edge</th>
            <td>O(1)</td>
            <td>O(1)</td>
        </tr>
        <tr>
            <th>Remove Edge</th>
            <td>O(1)</td>
            <td>O(E)</td>
        </tr>
        <tr>
            <th>BFS/DFS</th>
            <td>O(V<sup>2</sup>)</td>
            <td>O(V + E)</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(V<sup>2</sup>)</td>
            <td>O(V + E)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NullPointerException</b>: If vertex doesn’t exist before adding an edge.</li>
<li><b>IndexOutOfBoundsException</b>: In adjacency matrix when accessing invalid indices.</li>
<li><b>NoSuchElementException</b>: In BFS/DFS if the queue/stack is empty unexpectedly.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Segment Tree')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Union-Find')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Union-Find', data: `
      <h1>Union-Find (Disjoint Set Union - DSU)</h1>
      <p><b>Union-Find</b> (also called <b>Disjoint Set Union – DSU</b>) is a data structure that keeps track of a collection of <b>disjoint (non-overlapping) sets</b> and supports two main operations efficiently:</p>
      <ol>
        <li><b>Find</b> → Determine which set an element belongs to.</li>
        <li><b>Union</b> → Merge two sets into one.</li>
      </ol>
      <p>It is widely used in algorithms that deal with connectivity, grouping, or partitioning elements.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/unionFind/uf1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<p>Think of a <b>group of people in different clubs</b>:</p>
<ul>
    <li>Initially, each person is in their own club.</li>
    <li>When two clubs decide to merge, all people from both clubs now belong to the same club.</li>
    <li>To check if two people are in the same club, you ask: “Do they belong to the same group leader (representative)?”</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Maintains disjoint sets.</li>
<li>Each set has a <b>representative element (leader)</b>, found using <b>find()</b>.</li>
<li>Supports dynamic merging of sets using <b>union()</b>.</li>
<li>Optimizations like <b>Path Compression</b> and <b>Union by Rank/Size</b> make operations nearly constant time <b>(O(α(n)))</b>.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>makeSet(x)</b>: Creates a new set with element x as its representative.</li>
<li><b>find(x)</b>: Returns the representative (root) of the set containing x.
<ul type="circle">
    <li>With <b>path compression</b>, all elements point directly to the root for efficiency.</li>
</ul>
</li>
<li><b>union(x, y)</b>: Merges the sets containing x and y.
<ul type="circle">
    <li>With <b>union by rank/size</b>, the smaller tree is merged under the larger one.</li>
</ul>
</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.Scanner;

class UnionFind {
    int[] parent, rank;
    
    // Constructor
    UnionFind(int n) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;  // Initially self parent
            rank[i] = 0;    // Rank starts at 0
        }
    }

    // Find operation
    public int find(int x) {
        if (x < 0 || x >= parent.length) throw new IllegalArgumentException("Invalid element: " + x);
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }

    // Union operation
    public void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        if (rootX == rootY) return;

        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    }

    // Check if two elements are connected
    public boolean connected(int x, int y) {
        return find(x) == find(y);
    }

    // Display parent array
    public void display() {
        for (int i = 0; i < parent.length; i++) {
            System.out.println(i + " → " + parent[i]);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();
        UnionFind uf = new UnionFind(n);

        int choice;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Union");
            System.out.println("2. Find");
            System.out.println("3. Connected");
            System.out.println("4. Display");
            System.out.println("5. Exit");
            System.out.print("Choose operation: ");
            choice = sc.nextInt();
            try {
                switch (choice) {
                    case 1:
                        System.out.print("Enter two elements to union: ");
                        int a = sc.nextInt(), b = sc.nextInt();
                        uf.union(b, a);
                        break;
                    case 2:
                        System.out.print("Enter element to find: ");
                        int x = sc.nextInt();
                        System.out.println("Representative: " + uf.find(x));
                        break;
                    case 3:
                        System.out.print("Enter two elements: ");
                        int u = sc.nextInt(), v = sc.nextInt();
                        System.out.println(uf.connected(u, v));
                        break;
                    case 4:
                        uf.display();
                        break;
                    case 5:
                        System.out.println("Exiting...");
                        break;
                    default:
                        System.out.println("Invalid choice.");
                }
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        } while (choice != 5);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter number of elements: 5

Operations:
1. Union
2. Find
3. Connected
4. Display
5. Exit
Choose operation: 1
Enter two elements to union: 0 2

Operations:
1. Union
2. Find
3. Connected
4. Display
5. Exit
Choose operation: 1
Enter two elements to union: 4 2

Operations:
1. Union
2. Find
3. Connected
4. Display
5. Exit
Choose operation: 1
Enter two elements to union: 3 1

Operations:
1. Union
2. Find
3. Connected
4. Display
5. Exit
Choose operation: 4
0 ? 2
1 ? 1
2 ? 2
3 ? 1
4 ? 2

Operations:
1. Union
2. Find
3. Connected
4. Display
5. Exit
Choose operation: 2
Enter element to find: 4
Representative: 2

Operations:
1. Union
2. Find
3. Connected
4. Display
5. Exit
Choose operation: 3
Enter two elements: 1 2
false

Operations:
1. Union
2. Find
3. Connected
4. Display
5. Exit
Choose operation: 5
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li><b>Graph algorithms</b>:
<ul type="circle">
    <li>Detecting cycles in an undirected graph.</li>
    <li>Minimum Spanning Tree (Kruskal’s Algorithm).</li>
</ul>
</li>
<li><b>Network connectivity</b>: Checking if two nodes are in the same connected component.</li>
<li><b>Dynamic connectivity problems</b>.</li>
<li><b>Image processing</b>: Grouping pixels in connected components.</li>
<li><b>Social networks</b>: Grouping users into friend circles.</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Plain union-find without optimizations can become inefficient (O(n) per operation).</li>
<li>Does not maintain extra information (like element order).</li>
<li>Only useful for problems requiring connectivity, not for generic set operations like union of all elements.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Without Optimizations</th>
            <th>Without Path Compression + Union by Rank</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Find</th>
            <td>O(n)</td>
            <td>O(&#945;(n)) ≈ Constant</td>
        </tr>
        <tr>
            <th>Union</th>
            <td>O(n)</td>
            <td>O(&#945;(n)) ≈ Constant</td>
        </tr>
        <tr>
            <th>Connected</th>
            <td>O(n)</td>
            <td>O(&#945;(n)) ≈ Constant</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(n)</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>
<li>Here, <b>&#945;(n)</b> = Inverse Ackermann function, which grows very slowly (almost constant for practical input sizes).</li>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>ArrayIndexOutOfBoundsException</b>: When accessing an element outside the range.</li>
<li><b>NullPointerException</b>: If union-find is not initialized properly.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Graph')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Bloom Filter')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Bloom Filter', data: `
      <h1>Bloom Filter</h1>
      <p>A <b>Bloom Filter</b> is a space-efficient probabilistic data structure used to test whether an element is a member of a set.</p>
      <ul>
        <li>It can say that an element is <i>possibly in the set</i> or <i>definitely not in the set</i>.</li>
        <li><b>False positives</b> are possible, but <b>false negatives</b> are not.</li>
        <li>Unlike a traditional set, it does not store the actual elements—only their hashed representations in a bit array.</li>
      </ul>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/bloomFilter/bf1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<p>Imagine a security guard at a club who quickly checks IDs against a list.</p>
<ul>
    <li>If the guard says: <b>“Not on the list”</b>, the person is definitely not allowed.</li>
    <li>If the guard says: <b>“Might be on the list”</b>, the person is likely allowed, but sometimes mistakes happen (false positives).</li>
</ul>
        </div>
      </div>



      <div class="section">
        <h2>Key Concepts</h2>
        <div class="data-box">
<li><b>Bit Array</b>: A fixed-size array of m bits, all initialized to 0.</li>
<li><b>Hash Functions</b>: k independent hash functions are used to map each element to positions in the bit array.</li>
<li><b>False Positives</b>: The Bloom Filter may indicate an element exists when it does not.</li>
<li><b>False Negatives</b>: Impossible. If the filter says "not present," it’s 100% correct.</li>
        </div>
      </div>



      <div class="section">
        <h2>Types</h2>
        <div class="data-box">
<li><b>Standard Bloom Filter</b>
<ul type="circle">
<li>Fixed-size bit array, multiple hash functions.</li>
</ul>
</li>
<li><b>Counting Bloom Filter</b>
<ul type="circle">
<li>Uses counters instead of bits → supports deletion.</li>
</ul>
</li>
<li><b>Scalable Bloom Filter</b>
<ul type="circle">
<li>Adapts and grows as more elements are inserted.</li>
</ul>
</li>
<li><b>Compressed Bloom Filter</b>
<ul type="circle">
<li>Optimized for storage in constrained memory environments.</li>
</ul>
</li>
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Space-efficient compared to sets.</li>
<li>Probabilistic → may produce false positives.</li>
<li>No false negatives.</li>
<li>Cannot retrieve elements (only membership test).</li>
<li>Requires multiple hash functions.</li>
<li>Performance depends on chosen m (array size) and k (hash functions).</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>insert(element)</b>: Hash the element k times and set the corresponding bit positions to 1.</li>
<li><b>contains(element)</b>: Check the k bit positions;
<ul type="circle">
    <li>If any bit is 0 → element is definitely not present.</li>
    <li>If all are 1 → element is probably present.</li>
</ul>
</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.*;

class BloomFilter {
    private BitSet bitset;
    private int bitSize, hashCount;

    BloomFilter(int bitSize, int hashCount) {
        this.bitSize = bitSize;
        this.hashCount = hashCount;
        this.bitset = new BitSet(bitSize);
    }

    // Generate multiple hash values for an item
    private int[] getHashes(String item) {
        int[] hashes = new int[hashCount];
        int baseHash = item.hashCode();
        Random rand = new Random(baseHash);
        for (int i = 0; i < hashCount; i++) {
            hashes[i] = Math.abs(rand.nextInt()) % bitSize;
        }
        return hashes;
    }

    // Insert an element
    public void insert(String item) {
        int[] hashes = getHashes(item);
        for (int hash : hashes) {
            bitset.set(hash);
        }
        System.out.println(item + " inserted into Bloom Filter.");
    }

    // Check membership
    public void contains(String item) {
        int[] hashes = getHashes(item);
        for (int hash : hashes) {
            if (!bitset.get(hash)) {
                System.out.println(item + " is definitely NOT in the set.");
                return;
            }
        }
        System.out.println(item + " is PROBABLY in the set.");
    }

    // Display the bitset
    public void display() {
        System.out.println("Bitset representation: " + bitset);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Bloom Filter bit size: ");
        int bitSize = sc.nextInt();
        System.out.print("Enter number of hash functions: ");
        int hashCount = sc.nextInt();

        BloomFilter bf = new BloomFilter(bitSize, hashCount);

        int choice;
        String item;
        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Contains");
            System.out.println("3. Display");
            System.out.println("4. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();
            sc.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter element to insert: ");
                    item = sc.nextLine();
                    bf.insert(item);
                    break;
                case 2:
                    System.out.print("Enter element to check: ");
                    item = sc.nextLine();
                    bf.contains(item);
                    break;
                case 3:
                    bf.display();
                    break;
                case 4:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 4);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Enter Bloom Filter bit size: 6
Enter number of hash functions: 3

Operations:
1. Insert
2. Contains
3. Display
4. Exit
Choose an operation: 1
Enter element to insert: apple
apple inserted into Bloom Filter.

Operations:
1. Insert
2. Contains
3. Display
4. Exit
Choose an operation: 1
Enter element to insert: banana
banana inserted into Bloom Filter.

Operations:
1. Insert
2. Contains
3. Display
4. Exit
Choose an operation: 1
Enter element to insert: cat
cat inserted into Bloom Filter.

Operations:
1. Insert
2. Contains
3. Display
4. Exit
Choose an operation: 2
Enter element to check: banana
banana is PROBABLY in the set.

Operations:
1. Insert
2. Contains
3. Display
4. Exit
Choose an operation: 2
Enter element to check: dog
dog is definitely NOT in the set.

Operations:
1. Insert
2. Contains
3. Display
4. Exit
Choose an operation: 3
Bitset representation: {0, 3, 4, 5}

Operations:
1. Insert
2. Contains
3. Display
4. Exit
Choose an operation: 4
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Web browsers (detect malicious URLs).</li>
<li>Databases (quick membership test before querying disk).</li>
<li>Cache systems (avoid unnecessary lookups).</li>
<li>Distributed systems (like Hadoop, Cassandra, Bigtable).</li>
<li>Spell checkers and autocomplete.</li>
<li>Blockchain and Bitcoin networking.</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Cannot delete (standard version).</li>
<li>Cannot retrieve elements, only check membership.</li>
<li>False positives exist (depends on m, k, and inserted elements).</li>
<li>Requires careful tuning of bit size and hash functions.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Insert</th>
            <td>O(k)</td>
            <td>O(m)</td>
        </tr>
        <tr>
            <th>Search</th>
            <td>O(k)</td>
            <td>O(m)</td>
        </tr>
        <tr>
            <th>Delete</th>
            <td>Not supported</td>
            <td>O(m)</td>
        </tr>
    </tbody>
</table>
<li>k = number of hash functions, m = bit array size</li>
        </div>
      </div>



      <div class="section">
        <h2>Comparison with Other DS</h2>
        <div class="data-box">
<li><b>vs HashSet</b>: Bloom filter is much smaller but approximate.</li>
<li><b>vs Array</b>: Cannot hold exact elements, only probability of presence.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Union-Find')" class="nav-button">&lt; Previous</button>
        <button onclick="navPage('ds', 'Skip List')" class="nav-button">Next &gt;</button>
      </div>
` 
    },
    { name: 'Skip List', data: `
      <h1>Skip List</h1>
      <p>A <b>Skip List</b> is a probabilistic data structure that allows <b>fast search, insertion, and deletion</b> operations within an ordered sequence of elements.</p>
      <p>It is an alternative to <b>balanced trees (like AVL or Red-Black Trees)</b> but easier to implement.</p>
      <p>Skip lists achieve efficiency by maintaining <b>multiple levels of linked lists</b>, where higher levels skip over multiple elements, making searches faster.</p>
      <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/database/images/data-structures/skipList/skl1.png" class="data-img">



      <div class="section">
        <h2>Real-world Analogy</h2>
        <div class="data-box">
<li>Imagine a <b>highway with multiple lanes</b>:
<ul type="circle">
    <li>The <b>bottom lane</b> (service road) stops at every building.</li>
    <li>The <b>middle lanes</b> (fast lanes) skip several buildings.</li>
    <li>The <b>top lane</b> skips even more and only stops occasionally.</li>
</ul>
</li>
<li>To reach a destination (search an element), you first use the <b>fastest lane</b>, then switch down to lower lanes when necessary.</li>
<li>This is how skip lists reduce search time compared to simple linked lists.</li>
        </div>
      </div>



      <div class="section">
        <h2>Components</h2>
        <div class="data-box">
<li><b>Node</b>: stores a key and references to next nodes in different levels.</li>
<li><b>Levels</b>: higher levels allow faster traversal.</li>
<li><b>Head node</b>: starting point of all levels.</li>
<li><b>Randomization</b>: determines how many levels a new node will have.</li>
        </div>
      </div>



      <div class="section">
        <h2>Features / Characteristics</h2>
        <div class="data-box">
<li>Ordered sequence of elements (like sorted linked list).</li>
<li>Uses <b>multiple levels</b> of linked lists (levels chosen probabilistically).</li>
<li>Average time complexity for search, insert, delete is <b>O(log n)</b>.</li>
<li>Worst-case time complexity is <b>O(n)</b> (if randomization fails).</li>
<li>Easy to implement compared to balanced trees.</li>
<li>Space complexity is <b>O(n log n)</b> due to multiple levels.</li>
        </div>
      </div>


      <div class="section">
        <h2>Operations</h2>
        <div class="data-box">
<li><b>search(int key)</b>: Find if an element exists.</li>
<li><b>insert(int key)</b>: Insert a new element in sorted order.</li>
<li><b>delete(int key)</b>: Remove an element from the skip list.</li>
<li><b>display()</b>: Print the skip list level by level.</li>
<li><b>isEmpty()</b>: Check if the skip list has no elements.</li>
        </div>
      </div>



      <div class="section">
        <h2>Implementation</h2>
        <code>
          <div class="tab-content data-box" id="tab1"><pre class="java-code">
import java.util.*;

class SkipListNode {
    int key;
    SkipListNode[] forward;

    SkipListNode(int key, int level) {
        this.key = key;
        this.forward = new SkipListNode[level + 1];
    }
}

public class SkipList {
    private static final int MAX_LEVEL = 5;
    private int level;
    private SkipListNode header;
    private Random rand;

    public SkipList() {
        level = 0;
        header = new SkipListNode(-1, MAX_LEVEL); // header with dummy key
        rand = new Random();
    }

    private int randomLevel() {
        int lvl = 0;
        while (rand.nextInt(2) == 1 && lvl < MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }

    public void insert(int key) {
        SkipListNode[] update = new SkipListNode[MAX_LEVEL + 1];
        SkipListNode current = header;

        // Traverse from top level down
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && current.forward[i].key < key) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current == null || current.key != key) {
            int newLevel = randomLevel();
            if (newLevel > level) {
                for (int i = level + 1; i <= newLevel; i++) {
                    update[i] = header;
                }
                level = newLevel;
            }

            SkipListNode newNode = new SkipListNode(key, newLevel);
            for (int i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }
            System.out.println(key + " inserted.");
        } else {
            System.out.println("Key already exists.");
        }
    }

    public void search(int key) {
        SkipListNode current = header;
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && current.forward[i].key < key) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];
        if (current != null && current.key == key) {
            System.out.println(key + " found.");
        } else {
            System.out.println(key + " not found.");
        }
    }

    public void delete(int key) {
        SkipListNode[] update = new SkipListNode[MAX_LEVEL + 1];
        SkipListNode current = header;

        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && current.forward[i].key < key) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        current = current.forward[0];

        if (current != null && current.key == key) {
            for (int i = 0; i <= level; i++) {
                if (update[i].forward[i] != current) break;
                update[i].forward[i] = current.forward[i];
            }

            while (level > 0 && header.forward[level] == null) {
                level--;
            }
            System.out.println(key + " deleted.");
        } else {
            System.out.println(key + " not found.");
        }
    }

    public void display() {
        System.out.println("Skip List:");
        for (int i = level; i >= 0; i--) {
            SkipListNode node = header.forward[i];
            System.out.print("Level " + i + ": ");
            while (node != null) {
                System.out.print(node.key + " ");
                node = node.forward[i];
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        SkipList sl = new SkipList();
        int choice, ele;

        do {
            System.out.println("\\nOperations:");
            System.out.println("1. Insert");
            System.out.println("2. Delete");
            System.out.println("3. Search");
            System.out.println("4. Display");
            System.out.println("5. Exit");
            System.out.print("Choose an operation: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter element: ");
                    ele = sc.nextInt();
                    sl.insert(ele);
                    break;
                case 2:
                    System.out.print("Enter element to delete: ");
                    ele = sc.nextInt();
                    sl.delete(ele);
                    break;
                case 3:
                    System.out.print("Enter element to search: ");
                    ele = sc.nextInt();
                    sl.search(ele);
                    break;
                case 4:
                    sl.display();
                    break;
                case 5:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 5);
    }
}
</pre>
<img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/refs/heads/main/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
<pre>
/*
OUTPUT:
Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Exit
Choose an operation: 1
Enter element: 5
5 inserted.

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Exit
Choose an operation: 1
Enter element: 2
2 inserted.

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Exit
Choose an operation: 1
Enter element: 7
7 inserted.

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Exit
Choose an operation: 1
Enter element: 3
3 inserted.

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Exit
Choose an operation: 4
Skip List:
Level 2: 3 7
Level 1: 2 3 7
Level 0: 2 3 5 7

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Exit
Choose an operation: 3
Enter element to search: 5
5 found.

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Exit
Choose an operation: 2
Enter element to delete: 3
3 deleted.

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Exit
Choose an operation: 4
Skip List:
Level 2: 7
Level 1: 2 7
Level 0: 2 5 7

Operations:
1. Insert
2. Delete
3. Search
4. Display
5. Exit
Choose an operation: 5
Exiting...
*/
</pre>
          </div>
        </code>
      </div>



      <div class="section">
        <h2>Applications</h2>
        <div class="data-box">
<li>Database indexing (alternative to B-Trees).</li>
<li>In-memory key-value stores (e.g., Redis uses Skip List for sorted sets).</li>
<li>Efficient ordered maps and sets.</li>
<li>Range queries in sorted data.</li>
<li>Network routing (fast lookup of routing tables).</li>
        </div>
      </div>



      <div class="section">
        <h2>Limitations</h2>
        <div class="data-box">
<li>Requires extra space for multiple levels.</li>
<li>Performance depends on randomization (worst case O(n)).</li>
<li>More complex than simple linked lists.</li>
<li>Not cache-friendly compared to arrays.</li>
        </div>
      </div>



      <div class="section">
        <h2>Complexities</h2>
        <div class="data-box">
<table>
    <thead>
        <tr><th colspan="3">Time Complexity</th></tr>
        <tr>
            <th>Operation</th>
            <th>Average Case</th>
            <th>Worst Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Search</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Insert</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Delete</th>
            <td>O(log n)</td>
            <td>O(n)</td>
        </tr>
        <tr>
            <th>Space Complexity</th>
            <td>O(nlog n)</td>
            <td>O(nlog n)</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>



      <div class="section">
        <h2>Exceptions</h2>
        <div class="data-box">
<li><b>NoSuchElementException</b>: when searching/deleting a non-existing element.</li>
<li><b>NullPointerException</b>: if internal pointers are not handled properly.</li>
        </div>
      </div>


      
      <div class="nav-buttons">
        <button onclick="navPage('ds', 'Bloom Filter')" class="nav-button">&lt; Previous</button>
      </div>
` 
    },
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


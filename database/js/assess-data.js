const navbarData = {
    columns: [
      { name: 'Java', id: 'java' },
      { name: 'Python', id: 'py' },
      { name: 'SQL', id: 'sql' },
    ],
  
  
  
    java: [
      { name: 'Welcome to Java', data: `
        <h1>Welcome to Java</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Printing to console
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
public class Solution {
    public static void main(String[] args) {
        System.out.println("Hello, World.");
        System.out.print("Hello, Java.");
    }
}
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>
    <div class="data-box">
<pre>
OUTPUT:
Hello, World.
Hello, Java.
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'Stdin and Stdout I')" class="nav-button next">Next &gt;</button>
</div>
        `
      },
      { name: 'Stdin and Stdout I', data:  `
        <h1>Stdin and Stdout I</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
One popular way to read input from stdin is by using the Scanner class and specifying the Input Stream as System.in. For example:
<code class="java-code">
Scanner scanner = new Scanner(System.in);
String myString = scanner.next();
int myInt = scanner.nextInt();
scanner.close();

System.out.println("myString is: " + myString);
System.out.println("myInt is: " + myInt);
</code>
The code above creates a Scanner object named scanner and uses it to read a String and an int. It then closes the Scanner object because there is no more input to read, and prints to stdout using System.out.println(String). So, if our input is:
Hi 5

Our code will print:
myString is: Hi
myInt is: 5

Alternatively, you can use the BufferedReader class.

<b>Task</b>
In this challenge, you must read 3 integers from stdin and then print them to stdout. Each integer must be printed on a new line. To make the problem a little easier, a portion of the code is provided for you in the editor below.

<b>Input Format:</b>
There are 3 lines of input, and each line contains a single integer.

<b>Sample Input:</b>
42
100
125

<b>Sample Output:</b>
42
100
125
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();
        
        scan.close();

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
10
20
30

Sample Output:
10
20
30
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'Welcome to Java')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('java', 'Stdin and Stdout II')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Stdin and Stdout II', data:  `
        <h1>Stdin and Stdout II</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
In this challenge, you must read an integer, a double, and a String from stdin, then print the values according to the instructions in the Output Format section below. To make the problem a little easier, a portion of the code is provided for you in the editor.

Note: We recommend completing Java Stdin and Stdout I before attempting this challenge.

Input Format:
There are three lines of input:
    1.The first line contains an integer.
    2.The second line contains a double.
    3.The third line contains a String.

Output Format:
There are three lines of output:
    1.On the first line, print String: followed by the unaltered String read from stdin.
    2.On the second line, print Double: followed by the unaltered double read from stdin.
    3.On the third line, print Int: followed by the unaltered integer read from stdin.
To make the problem easier, a portion of the code is already provided in the editor.

Note: If you use the nextLine() method immediately following the nextInt() method, recall that nextInt() reads integer tokens; because of this, the last newline character for that line of integer input is still queued in the input buffer and the next nextLine() will be reading the remainder of the integer line (which is empty).

Sample Input:
42
3.1415
Welcome to HackerRank's Java tutorials!

Sample Output:
String: Welcome to HackerRank's Java tutorials!
Double: 3.1415
Int: 42
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int i = scan.nextInt();
        double d = scan.nextDouble();
        scan.nextLine(); // Consume the newline character
        String s = scan.nextLine();
        
        scan.close();

        System.out.println("String: " + s);
        System.out.println("Double: " + d);
        System.out.println("Int: " + i);
    }
}
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
42
3.1415
Hello, World!

Sample Output:
String: Hello, World!
Double: 3.1415
Int: 42
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'Stdin and Stdout I')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('java', 'Output Formatting')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Output Formatting', data:  `
        <h1>Output Formatting</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Java's System.out.printf function can be used to print formatted output. The purpose of this exercise is to test your understanding of formatting output using printf.
To get you started, a portion of the solution is provided for you in the editor; you must format and print the input to complete the solution.

Input Format:
Every line of input will contain a String followed by an integer.
Each String will have a maximum of 10 alphabetic characters, and each integer will be in the inclusive range from 0 to 999.

Output Format:
In each line of output there should be two columns:
The first column contains the String and is left justified using exactly 15 characters.
The second column contains the integer, expressed in exactly 3 digits; if the original input has less than three digits, you must pad your output's leading digits with zeroes.

Sample Input:
java 100
cpp 65
python 50

Sample Output:
================================
java           100 
cpp            065 
python         050 
================================

Explanation:
Each String is left-justified with trailing whitespace through the first 15 characters. The leading digit
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("================================");
        
        for (int i = 0; i < 3; i++) {
            String s1 = sc.next();
            int x = sc.nextInt();
            System.out.printf("%-15s%03d%n", s1, x);
        }
        
        System.out.println("================================");
        
        sc.close();
    }
}

    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
java 100
cpp 65
python 50

Sample Output:
================================
java           100 
cpp            065 
python         050 
================================
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'Stdin and Stdout II')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('java', 'End-of-file')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'End-of-file', data:  `
        <h1>End-of-file</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
The challenge here is to read n lines of input until you reach EOF, then number and print all n lines of content.
Hint: Java's Scanner.hasNext() method is helpful for this problem.

Input Format:
Read some unknown n lines of input from stdin(System.in) until you reach EOF; each line of input contains a non-empty String.

Output Format:
For each line, print the line number, followed by a single space, and then the line content received as input.

Sample Input:
Hello world
I am a file
Read me until end-of-file.

Sample Output:
1 Hello world
2 I am a file
3 Read me until end-of-file.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner x = new Scanner(System.in);
        int a = 1;
        
        while (x.hasNext()) {
            System.out.println(a + " " + x.nextLine());
            a++;
        }
        
        x.close();
    }
}
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
Hello world
I am a file
Read me until end-of-file.

Sample Output:
1 Hello world
2 I am a file
3 Read me until end-of-file.
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'Output Formatting')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('java', 'Datatypes')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Datatypes', data: `
        <h1>End</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Given an input integer, you must determine which primitive data types are capable of properly storing that input.

Input Format:
The first line contains an integer, T, denoting the number of test cases.
Each test case, T, is comprised of a single line with an integer, n, which can be arbitrarily large or small.

Output Format:
For each input variable n and appropriate primitive dataType, you must determine if the given primitives are capable of storing it. If yes, then print:
  n can be fitted in:
  * dataType
If there is more than one appropriate data type, print each one on its own line and order them by size (i.e.:byte < short < int <long).
If the number cannot be stored in one of the four aforementioned primitives, print the line:
  n can't be fitted anywhere.

Sample Input:
5
-150
150000
1500000000
213333333333333333333333333333333333
-100000000000000

Sample Output:
-150 can be fitted in:
* short
* int
* long
150000 can be fitted in:
* int
* long
1500000000 can be fitted in:
* int
* long
213333333333333333333333333333333333 can't be fitted anywhere.
-100000000000000 can be fitted in:
* long

Explanation:
-150 can be stored in a short, an int, or a long.
213333333333333333333333333333333333 is very large and is outside of the allowable range of values for the primitive data types discussed in this problem.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
import java.util.*;
import java.io.*;

class Solution {
    public static void main(String[] argh) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt(); // Number of test cases

        for (int i = 0; i < t; i++) {
            try {
                long x = sc.nextLong();
                System.out.println(x + " can be fitted in:");
                
                if (x >= -128 && x <= 127) System.out.println("* byte");
                if (x >= -32768 && x <= 32767) System.out.println("* short");
                if (x >= -2147483648 && x <= 2147483647) System.out.println("* int");
                if (x >= Long.MIN_VALUE && x <= Long.MAX_VALUE) System.out.println("* long");
            } 
            catch (Exception e) {
                System.out.println(sc.next() + " can't be fitted anywhere.");
            }
        }
        
        sc.close();
    }
}
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
5
-150
150000
1500000000
213333333333333333333333333333333333
-100000000000000

Sample Output:
-150 can be fitted in:
* short
* int
* long
150000 can be fitted in:
* int
* long
1500000000 can be fitted in:
* int
* long
213333333333333333333333333333333333 can't be fitted anywhere.
-100000000000000 can be fitted in:
* long
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'End-of-file')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('java', 'If-Else')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'If-Else', data: `
        <h1>If-Else</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.
Task
Given an integer,n, perform the following conditional actions:
1. If n is odd, print Weird
2. If n is even and in the inclusive range of 2 to 5, print Not Weird
3. If n is even and in the inclusive range of 6 to 20, print Weird
4. If n is even and greater than 20, print Not Weird

Complete the stub code provided in your editor to print whether or not n is weird.

Input Format:
A single line containing a positive integer,n.
  
Constraints:
  1 <= n <=100
    
Output Format:
Print Weird if the number is weird; otherwise, print Not Weird.

Sample Input 0:
3
Sample Output 0:
Weird

Sample Input 1:
24
Sample Output 1:
Not Weird

Explanation
Sample Case 0:n = 3
n is odd and odd numbers are weird, so we print Weird.

Sample Case 1:n = 24
n > 20 and n is even, so it isn't weird. Thus, we print Not Weird.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
import java.util.*;

public class Solution {
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int N = scanner.nextInt();
        scanner.close(); // Closing the scanner to prevent resource leaks

        if (N % 2 != 0) { 
            System.out.println("Weird");
        } else if (N >= 2 && N <= 5) { 
            System.out.println("Not Weird");
        } else if (N >= 6 && N <= 20) { 
            System.out.println("Weird");
        } else if (N > 20) { 
            System.out.println("Not Weird");
        }
    }
}
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
3

Sample Output:
Weird
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'Datatypes')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('java', 'Loops I')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Loops I', data: `
        <h1>Loops I</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Objective
In this challenge, we're going to use loops to help us do some simple math.

Task
Given an integer,N, print its first 10 multiples. Each multiple N x i (where 1<=i<=10) should be printed on a new line in the form: N x i = result.

Input Format:
A single integer, N.

Constraints
  2<=N<=20

Output Format:
Print 10 lines of output; each line i (where 1<=i<=10) contains the result of N x i in the form:
N x i = result.

Sample Input:
2

Sample Output:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
import java.io.*;

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(bufferedReader.readLine().trim());

        for (int i = 1; i <= 10; i++) {
            System.out.println(N + " x " + i + " = " + (N * i));
        }

        bufferedReader.close();
    }
}
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
5

Sample Output:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'If-Else')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('java', 'Loops II')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Loops II', data: `
        <h1>Loops II</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
We use the integers a, b, and n to create the following series:
    (a + 2°·b), (a + 2°·b + 2¹·b),..., (a + 2°·b + 2¹·b +...+ 2ⁿˉ¹·b)
You are given q queries in the form of a, b, and n. For each query, print the series corresponding to the given a, b, and n values as a single line of n space-separated integers.

Input Format:
The first line contains an integer, q, denoting the number of queries.
Each line i of the q subsequent lines contains three space-separated integers describing the respective ai, bi, and ni values for that query.

Constraints
  0<=q<=500
  0<=a,b<=50
  1<=n<=15
  
Output Format:
For each query, print the corresponding series on a new line. Each series must be printed in order as a single line of n space-separated integers.

Sample Input:
2
0 2 10
5 3 5

Sample Output:
2 6 14 30 62 126 254 510 1022 2046
8 14 26 50 98
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
import java.util.*;
import java.io.*;

class Solution {
    public static void main(String[] argh) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt(); // Number of test cases

        for (int i = 0; i < t; i++) {
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            int num = a;

            for (int j = 0; j < n; j++) {
                num += (int) Math.pow(2, j) * b;
                System.out.print(num + " ");
            }

            System.out.println();
        }

        in.close();
    }
}
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
2
0 2 10
5 3 5

Sample Output:
2 6 14 30 62 126 254 510 1022 2046
8 14 26 50 98
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'Loops I')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('java', 'Static Initializer Block')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Static Initializer Block', data: `
        <h1>Static Initializer Block</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Write a java code so that it outputs the area of a parallelogram with breadth B and height H. You should read the variables from the standard input.
If B<=0 or H<=0, the output should be "java.lang.Exception: Breadth and height must be positive" without quotes.

Input Format:
There are two lines of input. The first line contains B: the breadth of the parallelogram. The next line contains H: the height of the parallelogram.

Constraints
  -100<=B<=100
  -100<=H<=100
  
Output Format:
If both values are greater than zero, then the main method must output the area of the parallelogram. Otherwise, print "java.lang.Exception: Breadth and height must be positive" without quotes.

Sample input 1:
1
3

Sample output 1:
3

Sample input 2:
-1
2

Sample output 2:
java.lang.Exception: Breadth and height must be positive
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="java-code">
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner x = new Scanner(System.in);
        
        int b = x.nextInt();
        int h = x.nextInt();
        x.close();

        if (b <= 0 || h <= 0) {
            System.out.println("java.lang.Exception: Breadth and height must be positive");
        } else {
            System.out.println(b * h);
        }
    }
}
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
1
3

Sample Output:
3
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('java', 'Loops II')" class="nav-button">&lt; Previous</button>
</div>
        `
      },
    ],
  
  
    py: [
      { name: 'Hello, World!', data: `
        <h1>Hello, World!</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Here is a sample line of code that can be executed in Python:<code class="py-code">
  print("Hello, World!")
</code>
You can just as easily store a string as a variable and then print it to stdout:<code class="py-code">
  my_string = "Hello, World!"
  print(my_string)
</code>
The above code will print Hello, World! on your screen.

Input Format:
You do not need to read any input in this challenge.

Output Format:
Print Hello, World! to stdout.

Sample Output:
Hello, World!
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
if __name__ == '__main__':
    print("Hello, World!")
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Output:
Hello, World!
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'Division')" class="nav-button next">Next &gt;</button>
</div>
        `
      },
      { name: 'Division', data: `
        <h1>Division</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Task
The provided code stub reads two integers, a and b, from STDIN.
Add logic to print two lines. The first line should contain the result of integer division, a // b. The second line should contain the result of float division, a / b.
No rounding or formatting is necessary.

Example
a = 3
b = 5
  The result of the integer division 3//5 = 0.
  The result of the float division is 3/5 = 0.6.

Print:
0
0.6

Input Format:
The first line contains the first integer, a.
The second line contains the second integer, b.

Output Format:
Print the two lines as described above.

Sample Input:
4
3

Sample Output:
1
1.33333333333
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
if __name__ == '__main__':
    a = int(input())  # Read first integer
    b = int(input())  # Read second integer

    print(a // b)  # Integer division (floor division)
    print(a / b)   # Floating-point division
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
4
3

Sample Output:
1
1.33333333333
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'Hello, World!')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('py', 'Arithmetic Operators')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Arithmetic Operators', data: `
        <h1>Arithmetic Operators</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Task
The provided code stub reads two integers from STDIN, a and b. Add code to print three lines where:
    The first line contains the sum of the two numbers.
    The second line contains the difference of the two numbers (first - second).
    The third line contains the product of the two numbers.

Example
a = 3
b = 5

Print the following:
8
-2
15

Input Format:
The first line contains the first integer, a.
The second line contains the second integer, b.

Constraints:
1<=a<=10¹°
1<=b<=10¹°

Output Format:
Print the three lines as explained above.

Sample Input:
3
2

Sample Output:
5
1
6

Explanation
3 + 2 => 5
3 - 2 => 1
3 * 2 => 6
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
if __name__ == '__main__':
    a = int(input())  # Read first integer
    b = int(input())  # Read second integer

    print(a + b)  # Addition
    print(a - b)  # Subtraction
    print(a * b)  # Multiplication
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
3
2

Sample Output:
5
1
6
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'Division')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('py', 'Print Function')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Print Function', data: `
        <h1>Print Function</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Without using any string methods, try to print the following:
123...n
Note that "..." represents the consecutive values in between.

Example:
n = 5
Print the string 12345.

Input Format:
The first line contains an integer n.

Constraints
1 <= n <= 150

Output Format:
Print the list of integers from 1 through n as a string, without spaces.

Sample Input:
3

Sample Output:
123
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
if __name__ == '__main__':
    n = int(input())  # Read an integer input

    for i in range(1, n + 1):  # Loop from 1 to n (inclusive)
        print(i, end="")  # Print numbers in the same line without spaces
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
3

Sample Output:
123
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'Arithmetic Operators')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('py', 'Function')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Function', data: `
        <h1>Function</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
An extra day is added to the calendar almost every four years as February 29, and the day is called a leap day. It corrects the calendar for the fact that our planet takes approximately 365.25 days to orbit the sun. A leap year contains a leap day.
In the Gregorian calendar, three conditions are used to identify leap years:
    ٠The year can be evenly divided by 4, is a leap year, unless:
        ٠The year can be evenly divided by 100, it is NOT a leap year, unless:
            ٠The year is also evenly divisible by 400. Then it is a leap year.
This means that in the Gregorian calendar, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300 and 2500 are NOT leap years.

Task
Given a year, determine whether it is a leap year. If it is a leap year, return the Boolean True, otherwise return False.
Note that the code stub provided reads from STDIN and passes arguments to the is_leap function. It is only necessary to complete the is_leap function.

Input Format:
Read year, the year to test.

Constraints:
1900 <= year <= 10⁵

Output Format:
The function must return a Boolean value (True/False). Output is handled by the provided code stub.

Sample Input:
1990

Sample Output:
False

Explanation:
1990 is not a multiple of 4 hence it's not a leap year. 
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
def is_leap(year):
    leap = False

    if year % 4 == 0:
        leap = True
        if year % 100 == 0:
            leap = False
            if year % 400 == 0:
                leap = True
                
    return leap

print(is_leap(int(input())))  # Read an integer input and print the output of is_leap function
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
1990

Sample Output:
False
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'Print Function')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('py', 'List Comprehensions')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'List Comprehensions', data: `
        <h1>List Comprehensions</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Let's learn about list comprehensions! You are given three integers x, y and z representing the dimensions of a cuboid along with an integer n. Print a list of all possible coordinates given by (i,j,k) on a 3D grid where the sum of i + j + k is not equal to n. Here, 0<=i<=x;0<=j<=y;0<=k<=z. Please use list comprehensions rather than multiple loops, as a learning exercise.

Example:
x = 1
y = 1
z = 2
n = 3

All permutations of [i,j,k] are:
[[0, 0, 0], [0, 0, 1], [0, 0, 2], [0, 1, 0], [0, 1, 1], [0, 1, 2], [1, 0, 0], [1, 0, 1], [1, 0, 2], [1, 1, 0], [1, 1, 1], [1, 1, 2]].
Print an array of the elements that do not sum to n = 3.
[[0, 0, 0], [0, 0, 1], [0, 0, 2], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 2]].

Input Format:
Four integers x, y, z and n, each on a separate line.

Constraints:
Print the list in lexicographic increasing order.

Sample Input 0:
1
1
1
2

Sample Output 0:
[[0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]]

Explanation 0:
Each variable x, y and z will have values of 0 or 1. All permutations of lists in the form 
[i, j, k] = [[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]].
Remove all arrays that sum to n = 2 to leave only the valid permutations.

Sample Input 1:
2
2
2
2

Sample Output 1:
[[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 2], [0, 2, 1], [0, 2, 2], [1, 0, 0], [1, 0, 2], [1, 1, 1], [1, 1, 2], [1, 2, 0], [1, 2, 1], [1, 2, 2], [2, 0, 1], [2, 0, 2], [2, 1, 0], [2, 1, 1], [2, 1, 2], [2, 2, 0], [2, 2, 1], [2, 2, 2]]
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
if __name__ == '__main__':
    x = int(input())  
    y = int(input())  
    z = int(input())  
    n = int(input())  

    # List comprehension to generate all possible [i, j, k] combinations
    m = [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if (i + j + k) != n]

    print(m)  # Print the list of valid coordinate combinations
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
1
1
1
2

Sample Output:
[[0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]]
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'Function')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('py', 'If-Else')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'If-Else', data: `
        <h1>If-Else</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Task
Given an integer, n, perform the following conditional actions:
  If n is odd, print Weird
  If n is even and in the inclusive range of 2 to 5, print Not Weird
  If n is even and in the inclusive range of 6 to 20, print Weird
  If n is even and greater than 20, print Not Weird

Input Format:
A single line containing a positive integer,n.

Constraints
1<=n<=100

Output Format:
Print Weird if the number is weird. Otherwise, print Not Weird.

Sample Input 0:
3

Sample Output 0:
Weird

Explanation 0:
n = 3
n is odd and odd numbers are weird, so print Weird.

Sample Input 1:
24

Sample Output 1:
Not Weird

Explanation 1:
n = 24
n > 20 and n is even, so it is not weird.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
if __name__ == '__main__':
    n = int(input().strip())  # Read an integer input

    if n % 2 != 0:  # Check if n is odd
        print("Weird")
    elif 2 <= n <= 5:  # Check if n is even and in the range [2, 5]
        print("Not Weird")
    elif 6 <= n <= 20:  # Check if n is even and in the range [6, 20]
        print("Weird")
    elif n > 20:  # Check if n is even and greater than 20
        print("Not Weird")
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
3

Sample Output:
Weird
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'List Comprehensions')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('py', 'Loops')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Loops', data: `
        <h1>Loops</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Task
The provided code stub reads and integer, n, from STDIN. For all non-negative integers i < n, print i².

Example
n = 3
The list of non-negative integers that are less than n = 3 is [0,1,2]. Print the square of each number on a separate line.
0
1
4

Input Format:
The first and only line contains the integer, n.

Constraints:
1 <= n <= 20

Output Format:
Print n lines, one corresponding to each i.

Sample Input:
5

Sample Output:
0
1
4
9
16
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
if __name__ == '__main__':
    n = int(input())  # Read an integer input

    for i in range(n):  # Loop from 0 to n-1
        print(i ** 2)  # Print the square of i
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
5

Sample Output:
0
1
4
9
16
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'If-Else')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('py', 'Find the Runner-Up Score')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Find the Runner-Up Score', data: `
        <h1>Find the Runner-Up Score</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Given the participants' score sheet for your University Sports Day, you are required to find the runner-up score. You are given n scores. Store them in a list and find the score of the runner-up.

Input Format:
The first line contains n. The second line contains an array A[] of n integers each separated by a space.

Constraints:
  2 <= n <= 10
  -100 <= A[i] <= 100

Output Format:
Print the runner-up score.

Sample Input:
5
2 3 6 6 5

Sample Output:
5

Explanation:
Given list is [2, 3, 6, 6, 5]. The maximum score is 6, second maximum is 5. Hence, we print 5 as the runner-up score. 
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
if __name__ == '__main__':
    n = int(input())  # Read an integer input (number of elements)
    arr = map(int, input().split())  # Read space-separated integers and map them to a list
    
    a = list(arr)  # Convert map object to list
    a = list(set(a))  # Remove duplicates by converting to a set, then back to a list
    a.remove(max(a))  # Remove the maximum value from the list
    print(max(a))  # Print the second highest value in the list
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
5
2 3 6 6 5

Sample Output:
5
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'Loops')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('py', 'XML 1 - Find the Score')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'XML 1 - Find the Score', data: `
        <h1>XML 1 - Find the Score</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
You are given a valid XML document, and you have to print its score. The score is calculated by the sum of the score of each element. For any element, the score is equal to the number of attributes it has.

Input Format:
XML document.

Output Format:
Output a single line, the integer score of the given XML document.

Sample Input:
&lt;feed xml:lang='en'&gt;
    &lt;title&gt;HackerRank&lt;/title&gt;
    &lt;subtitle lang='en'&gt;Programming challenges&lt;/subtitle&gt;
    &lt;link rel='alternate' type='text/html' href='http://hackerrank.com/'/&gt;
    &lt;updated&gt;2013-12-25T12:00:00&lt;/updated&gt;
&lt;/feed&gt;

Sample Output:
5

Explanation:
The feed and subtitle tag have one attribute each - lang.
The title and updated tags have no attributes.
The link tag has three attributes - rel, type and href.
So, the total score is 1 + 1 + 3 = 5.

There may be any level of nesting in the XML document. To learn about XML parsing, refer here.
NOTE: In order to parse and generate an XML element tree, use the following code:
  >> import xml.etree.ElementTree as etree
  >> tree = etree.ElementTree(etree.fromstring(xml))

Here, XML is the variable containing the string.
Also, to find the number of keys in a dictionary, use the len function:
  >> dicti = {'0': 'This is zero', '1': 'This is one'}
  >> print (len(dicti))
  
  2
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="py-code">
import xml.etree.ElementTree as ET

def get_attr_number(node):
    """
    Recursively counts the total number of attributes in an XML node and its children.
    
    :param node: XML node (ElementTree Element)
    :return: Total number of attributes in the entire XML tree
    """
    s = len(node.attrib)  # Count attributes in the current node
    
    # Recursively count attributes in child nodes
    for i in node:
        s += get_attr_number(i)
    
    return s

# Take XML input from the user
xml_input = input()

# Parse the input string into an XML element
try:
    root = ET.fromstring(xml_input)
    
    # Get the number of attributes
    result = get_attr_number(root)
    
    # Output the result
    print(result)
except ET.ParseError as e:
    print(f"Error parsing XML: {e}")
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
<div class="data-box">
<pre>
Sample Input:
&lt;feed xml:lang='en'&gt;
    &lt;title&gt;HackerRank&lt;/title&gt;
    &lt;subtitle lang='en'&gt;Programming challenges&lt;/subtitle&gt;
    &lt;link rel='alternate' type='text/html' href='http://hackerrank.com/'/&gt;
    &lt;updated&gt;2013-12-25T12:00:00&lt;/updated&gt;
&lt;/feed&gt;

Sample Output:
5
</pre>
</div>
</div>

<div class="nav-buttons">
  <button onclick="navPage('py', 'Find the Runner-Up Score')" class="nav-button">&lt; Previous</button>
</div>
        `
      },
    ],
  
  
    sql: [
      { name: 'Select All', data: `
        <h1>Select All</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query all columns (attributes) for every row in the CITY table.

The CITY table is described as follows: 

+--------------+--------------+
| Field        | Type         |
+--------------+--------------+
| ID           | NUMBER       |
| NAME         | VARCHAR2(17) |
| COUNTRYCODE  | VARCHAR2(3)  |
| DISTRICT     | VARCHAR2(20) |
| POPULATION   | NUMBER       |
+--------------+--------------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT * FROM city;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Select By ID')" class="nav-button next">Next &gt;</button>
</div>
        `
      },
      { name: 'Select By ID', data: `
        <h1>Select By ID</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query all columns for a city in CITY with the ID 1661.

The CITY table is described as follows: 

+--------------+--------------+
| Field        | Type         |
+--------------+--------------+
| ID           | NUMBER       |
| NAME         | VARCHAR2(17) |
| COUNTRYCODE  | VARCHAR2(3)  |
| DISTRICT     | VARCHAR2(20) |
| POPULATION   | NUMBER       |
+--------------+--------------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT * FROM city WHERE id = 1661;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Select All')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Select Query I')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Select Query I', data: `
        <h1>Select Query I</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.

The CITY table is described as follows: 

+--------------+--------------+
| Field        | Type         |
+--------------+--------------+
| ID           | NUMBER       |
| NAME         | VARCHAR2(17) |
| COUNTRYCODE  | VARCHAR2(3)  |
| DISTRICT     | VARCHAR2(20) |
| POPULATION   | NUMBER       |
+--------------+--------------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT * FROM city WHERE countrycode = 'USA' AND population > 100000;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Select By ID')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Select Query II')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Select Query II', data: `
        <h1>Select Query II</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the NAME field for all American cities in the CITY table with populations larger than 120000. The CountryCode for America is USA.

The CITY table is described as follows: 

+--------------+--------------+
| Field        | Type         |
+--------------+--------------+
| ID           | NUMBER       |
| NAME         | VARCHAR2(17) |
| COUNTRYCODE  | VARCHAR2(3)  |
| DISTRICT     | VARCHAR2(20) |
| POPULATION   | NUMBER       |
+--------------+--------------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT name FROM city WHERE countrycode = 'USA' AND population > 120000;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Select Query I')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'African Cities')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'African Cities', data: `
        <h1>African Cities</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

Input Format
The CITY and COUNTRY tables are described as follows: 

              CITY
+--------------+--------------+
|   Field      |     Type     |
+--------------+--------------+
| ID           | NUMBER       |
| NAME         | VARCHAR2(17) |
| COUNTRYCODE  | VARCHAR2(3)  |
| DISTRICT     | VARCHAR2(20) |
| POPULATION   | NUMBER       |
+--------------+--------------+
              COUNTRY
+----------------+--------------+
| Field          | Type         |
+----------------+--------------+
| CODE           | VARCHAR2(3)  |
| NAME           | VARCHAR2(44) |
| CONTINENT      | VARCHAR2(13) |
| REGION         | VARCHAR2(25) |
| SURFACEAREA    | NUMBER       |
| INDEPYEAR      | VARCHAR2(5)  |
| POPULATION     | NUMBER       |
| LIFEEXPECTANCY | VARCHAR2(4)  |
| GNP            | NUMBER       |
| GNPOLD         | VARCHAR2(9)  |
| LOCALNAME      | VARCHAR2(44) |
| GOVERNMENTFORM | VARCHAR2(44) |
| HEADOFSTATE    | VARCHAR2(32) |
| CAPITAL        | VARCHAR2(4)  |
| CODE2          | VARCHAR2(2)  |
+----------------+--------------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT c.name 
FROM city c 
INNER JOIN country c1 ON c.countrycode = c1.code 
WHERE c1.continent = 'Africa';
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Select Query II')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Average Population of Each Continent')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Average Population of Each Continent', data: `
        <h1>Average Population of Each Continent</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

Input Format
The CITY and COUNTRY tables are described as follows: 
              CITY
+--------------+--------------+
|   Field      |     Type     |
+--------------+--------------+
| ID           | NUMBER       |
| NAME         | VARCHAR2(17) |
| COUNTRYCODE  | VARCHAR2(3)  |
| DISTRICT     | VARCHAR2(20) |
| POPULATION   | NUMBER       |
+--------------+--------------+
              COUNTRY
+----------------+--------------+
| Field          | Type         |
+----------------+--------------+
| CODE           | VARCHAR2(3)  |
| NAME           | VARCHAR2(44) |
| CONTINENT      | VARCHAR2(13) |
| REGION         | VARCHAR2(25) |
| SURFACEAREA    | NUMBER       |
| INDEPYEAR      | VARCHAR2(5)  |
| POPULATION     | NUMBER       |
| LIFEEXPECTANCY | VARCHAR2(4)  |
| GNP            | NUMBER       |
| GNPOLD         | VARCHAR2(9)  |
| LOCALNAME      | VARCHAR2(44) |
| GOVERNMENTFORM | VARCHAR2(44) |
| HEADOFSTATE    | VARCHAR2(32) |
| CAPITAL        | VARCHAR2(4)  |
| CODE2          | VARCHAR2(2)  |
+----------------+--------------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT c1.continent, FLOOR(AVG(c.population)) 
FROM city c 
INNER JOIN country c1 ON c.countrycode = c1.code 
GROUP BY c1.continent;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'African Cities')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Employee Names')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Employee Names', data: `
        <h1>Employee Names</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.

Input Format
The Employee table containing employee data for a company is described as follows: 
+-------------+---------+
| Column      | Type    |
+-------------+---------+
| employee_id | Integer |
| name        | String  |
| months      | Integer |
| salary      | Integer |
+-------------+---------+
where employee_id is an employee's ID number, name is their name, months is the total number of months they've been working for the company, and salary is their monthly salary.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT name 
FROM employee 
ORDER BY name ASC;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Average Population of Each Continent')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Employee Salaries')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Employee Salaries', data: `
        <h1>Employee Salaries</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than $2000 per month who have been employees for less than 10 months. Sort your result by ascending employee_id.

Input Format
The Employee table containing employee data for a company is described as follows: 
+-------------+---------+
| Column      | Type    |
+-------------+---------+
| employee_id | Integer |
| name        | String  |
| months      | Integer |
| salary      | Integer |
+-------------+---------+
where employee_id is an employee's ID number, name is their name, months is the total number of months they've been working for the company, and salary is the their monthly salary.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT name 
FROM Employee 
WHERE salary > 2000 AND months < 10 
ORDER BY employee_id ASC;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Employee Names')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Higher Than 75 Marks')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Higher Than 75 Marks', data: `
        <h1>Higher Than 75 Marks</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the Name of any student in STUDENTS who scored higher than 75 Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.

Input Format
The STUDENTS table is described as follows:
+-------+---------+
| Column| Type    |
+-------+---------+
| ID    | Integer |
| Name  | String  |
| Marks | Integer |
+-------+---------+
The Name column only contains uppercase (A-Z) and lowercase (a-z) letters.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT Name 
FROM Students 
WHERE marks > 75 
ORDER BY RIGHT(Name, 3), id ASC;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Employee Salaries')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Japanese Cities Attributes')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Japanese Cities Attributes', data: `
        <h1>Japanese Cities' Attributes</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.

The CITY table is described as follows: 

+--------------+--------------+
| Field        | Type         |
+--------------+--------------+
| ID           | NUMBER       |
| NAME         | VARCHAR2(17) |
| COUNTRYCODE  | VARCHAR2(3)  |
| DISTRICT     | VARCHAR2(20) |
| POPULATION   | NUMBER       |
+--------------+--------------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT * 
FROM city 
WHERE countrycode = 'JPN';
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Higher Than 75 Marks')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Japanese Cities Names')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Japanese Cities Names', data: `
        <h1>Japanese Cities' Names</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.
The CITY table is described as follows: 

+--------------+--------------+
| Field        | Type         |
+--------------+--------------+
| ID           | NUMBER       |
| NAME         | VARCHAR2(17) |
| COUNTRYCODE  | VARCHAR2(3)  |
| DISTRICT     | VARCHAR2(20) |
| POPULATION   | NUMBER       |
+--------------+--------------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT Name 
FROM city 
WHERE countrycode = 'JPN';
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Japanese Cities Attributes')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Occupations')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Occupations', data: `
        <h1>Occupations</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Pivot the Occupation column in OCCUPATIONS so that each Name is sorted alphabetically and displayed underneath its corresponding Occupation. The output column headers should be Doctor, Professor, Singer, and Actor, respectively.
Note: Print NULL when there are no more names corresponding to an occupation.

Input Format
The OCCUPATIONS table is described as follows:
+-----------+---------+
|   Column  |   Type  |
+-----------+---------+
|   Name    |  String |
| Occupation|  String |
+-----------+---------+
Occupation will only contain one of the following values: Doctor, Professor, Singer or Actor.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT 
    MAX(CASE WHEN OCCUPATION = 'Doctor' THEN NAME END) AS Doctor,
    MAX(CASE WHEN OCCUPATION = 'Professor' THEN NAME END) AS Professor,
    MAX(CASE WHEN OCCUPATION = 'Singer' THEN NAME END) AS Singer,
    MAX(CASE WHEN OCCUPATION = 'Actor' THEN NAME END) AS Actor
FROM (
    SELECT 
        ROW_NUMBER() OVER (PARTITION BY OCCUPATION ORDER BY NAME) AS R,
        NAME, 
        OCCUPATION
    FROM OCCUPATIONS
) AS O
GROUP BY R;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Japanese Cities Names')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Population Census')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Population Census', data: `
        <h1>Population Census</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

Input Format
The CITY and COUNTRY tables are described as follows: 
              CITY
+--------------+--------------+
|   Field      |     Type     |
+--------------+--------------+
| ID           | NUMBER       |
| NAME         | VARCHAR2(17) |
| COUNTRYCODE  | VARCHAR2(3)  |
| DISTRICT     | VARCHAR2(20) |
| POPULATION   | NUMBER       |
+--------------+--------------+

        COUNTRY
+----------------+--------------+
| Field          | Type         |
+----------------+--------------+
| CODE           | VARCHAR2(3)  |
| NAME           | VARCHAR2(44) |
| CONTINENT      | VARCHAR2(13) |
| REGION         | VARCHAR2(25) |
| SURFACEAREA    | NUMBER       |
| INDEPYEAR      | VARCHAR2(5)  |
| POPULATION     | NUMBER       |
| LIFEEXPECTANCY | VARCHAR2(4)  |
| GNP            | NUMBER       |
| GNPOLD         | VARCHAR2(9)  |
| LOCALNAME      | VARCHAR2(44) |
| GOVERNMENTFORM | VARCHAR2(44) |
| HEADOFSTATE    | VARCHAR2(32) |
| CAPITAL        | VARCHAR2(4)  |
| CODE2          | VARCHAR2(2)  |
+----------------+--------------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT SUM(c.population) AS Total_Population
FROM city c
INNER JOIN country c1 ON c.countrycode = c1.code
WHERE c1.continent = 'Asia';
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Occupations')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 1')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 1', data: `
        <h1>Weather Observation Station 1</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query a list of CITY and STATE from the STATION table.
The STATION table is described as follows: 
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT city, state 
FROM station;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Population Census')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 2')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 2', data: `
        <h1>Weather Observation Station 2</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT DISTINCT city 
FROM station 
WHERE id % 2 = 0;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 1')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 3')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 3', data: `
        <h1>Weather Observation Station 3</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude.

For example, if there are three records in the table with CITY values 'New York', 'New York', 'Bengalaru', there are 2 different city names: 'New York' and 'Bengalaru'. The query returns, because 
total number of records - number of unique city names = 3 - 2 = 1.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT COUNT(city) - COUNT(DISTINCT city) FROM station;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 2')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 4')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 4', data: `
        <h1>Weather Observation Station 4</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude.

Sample Input
For example, CITY has four entries: DEF, ABC, PQRS and WXY.

Sample Output
ABC 3
PQRS 4

Explanation

When ordered alphabetically, the CITY names are listed as ABC, DEF, PQRS, and WXY, with lengths
and . The longest name is PQRS, but there are

options for shortest named city. Choose ABC, because it comes first alphabetically.

Note
You can write two separate queries to get the desired output. It need not be a single query.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT city, LENGTH(city) 
FROM station 
ORDER BY LENGTH(city), city ASC 
LIMIT 1;

SELECT city, LENGTH(city) 
FROM station 
ORDER BY LENGTH(city) DESC 
LIMIT 1;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 3')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 5')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 5', data: `
        <h1>Weather Observation Station 5</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

Input Format
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude.
*/


/*
select distinct city from station where city like 'a%';
select distinct city from station where city like 'e%';
select distinct city from station where city like 'i%';
select distinct city from station where city like 'o%';
select distinct city from station where city like 'u%';
*/

/*
SELECT DISTINCT city
FROM station
WHERE LOWER(SUBSTRING(city, 1, 1)) IN ('a', 'e', 'i', 'o', 'u');
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT DISTINCT city 
FROM station 
WHERE LEFT(city, 1) IN ('A', 'E', 'I', 'O', 'U');
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 4')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 6')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 6', data: `
        <h1>Weather Observation Station 6</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.

Input Format
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT DISTINCT city 
FROM station 
WHERE RIGHT(city, 1) IN ('A', 'E', 'I', 'O', 'U');
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 5')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 7')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 7', data: `
        <h1>Weather Observation Station 7</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.

Input Format
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT DISTINCT city 
FROM station 
WHERE LEFT(city, 1) IN ('A', 'E', 'I', 'O', 'U') 
AND RIGHT(city, 1) IN ('A', 'E', 'I', 'O', 'U');
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 6')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 8')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 8', data: `
        <h1>Weather Observation Station 8</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.

Input Format
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude. 
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT DISTINCT city 
FROM station 
WHERE LEFT(city, 1) NOT IN ('A', 'E', 'I', 'O', 'U');
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 7')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 9')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 9', data: `
        <h1>Weather Observation Station 9</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.

Input Format
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude. 
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT DISTINCT city 
FROM station 
WHERE RIGHT(city, 1) NOT IN ('A', 'E', 'I', 'O', 'U');
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 8')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 10')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 10', data: `
        <h1>Weather Observation Station 10</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.

Input Format
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude. 
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT DISTINCT city 
FROM station 
WHERE LEFT(city, 1) NOT IN ('A', 'E', 'I', 'O', 'U') 
OR RIGHT(city, 1) NOT IN ('A', 'E', 'I', 'O', 'U');
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 9')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Weather Observation Station 11')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Weather Observation Station 11', data: `
        <h1>Weather Observation Station 11</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Query the list of CITY names from STATION that do not start with vowels and do not end with vowels. Your result cannot contain duplicates.

Input Format
The STATION table is described as follows:
+--------+--------------+
| Field  | Type         |
+--------+--------------+
| ID     | NUMBER       |
| CITY   | VARCHAR2(21) |
| STATE  | VARCHAR2(2)  |
| LAT_N  | NUMBER       |
| LONG_W | NUMBER       |
+--------+--------------+
where LAT_N is the northern latitude and LONG_W is the western longitude. 
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT DISTINCT city 
FROM station 
WHERE LEFT(city, 1) NOT IN ('A', 'E', 'I', 'O', 'U') 
AND RIGHT(city, 1) NOT IN ('A', 'E', 'I', 'O', 'U');
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 10')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'The PADS')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'The PADS', data: `
        <h1>The PADS</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Generate the following two result sets:
1.Query an alphabetically ordered list of all names in OCCUPATIONS, immediately followed by the first letter of each profession as a parenthetical (i.e.: enclosed in parentheses). For example: AnActorName(A), ADoctorName(D), AProfessorName(P), and ASingerName(S).
2.Query the number of ocurrences of each occupation in OCCUPATIONS. Sort the occurrences in ascending order, and output them in the following format: 
        There are a total of [occupation_count] [occupation]s.
  where [occupation_count] is the number of occurrences of an occupation in OCCUPATIONS and [occupation] is the lowercase occupation name. If more than one Occupation has the same [occupation_count], they should be ordered alphabetically.
Note: There will be at least two entries in the table for each type of occupation.

Input Format
The OCCUPATIONS table is described as follows:
+-----------+---------+
|   Column  |   Type  |
+-----------+---------+
|   Name    |  String |
| Occupation|  String |
+-----------+---------+
Occupation will only contain one of the following values: Doctor, Professor, Singer or Actor.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT CONCAT(Name, '(', LEFT(Occupation, 1), ')') 
FROM Occupations 
ORDER BY Name;

SELECT CONCAT('There are a total of ', COUNT(Occupation), ' ', LOWER(Occupation), 's.') 
FROM Occupations 
GROUP BY Occupation 
ORDER BY COUNT(Occupation), Occupation ASC;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Weather Observation Station 11')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'The Report')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'The Report', data: `
        <h1>The Report</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
You are given two tables: Students and Grades. Students contains three columns ID, Name and Marks.
+------+---------+
|Column|  Type   |
+------+---------+
| ID   | Integer |
| Name | String  |
| Marks| Integer |
+------+---------+
Grades contains the following data:
+-------+---------+---------+
| Grade | Min_Mark| Max_Mark|
+-------+---------+---------+
|   1   |    0    |    9    |
|   2   |   10    |   19    |
|   3   |   20    |   29    |
|   4   |   30    |   39    |
|   5   |   40    |   49    |
|   6   |   50    |   59    |
|   7   |   60    |   69    |
|   8   |   70    |   79    |
|   9   |   80    |   89    |
|  10   |   90    |  100    |
+-------+---------+---------+
Ketty gives Eve a task to generate a report containing three columns: Name, Grade and Mark. Ketty doesn't want the NAMES of those students who received a grade lower than 8. The report must be in descending order by grade -- i.e. higher grades are entered first. If there is more than one student with the same grade (8-10) assigned to them, order those particular students by their name alphabetically. Finally, if the grade is lower than 8, use "NULL" as their name and list them by their grades in descending order. If there is more than one student with the same grade (1-7) assigned to them, order those particular students by their marks in ascending order.
Write a query to help Eve.
Note
Print "NULL"  as the name if the grade is less than 8.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT 
    CASE 
        WHEN GRADE >= 8 THEN S.NAME 
        ELSE 'NULL' 
    END, 
    G.GRADE, 
    S.MARKS
FROM STUDENTS S
JOIN GRADES G
ON S.MARKS BETWEEN G.MIN_MARK AND G.MAX_MARK
ORDER BY G.GRADE DESC, S.NAME, S.MARKS;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'The PADS')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Top Competitors')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Top Competitors', data: `
        <h1>Top Competitors</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard! Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge. Order your output in descending order by the total number of challenges in which the hacker earned a full score. If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id.

Input Format
The following tables contain contest data:
Hackers: The hacker_id is the id of the hacker, and name is the name of the hacker. 
+-----------+---------+
| Column    |   Type  |
+-----------+---------+
| hacker_id | Integer |
| name      | String  |
+-----------+---------+
Difficulty: The difficult_level is the level of difficulty of the challenge, and score is the score of the challenge for the difficulty level.
+------------------+---------+
| Column           |  Type   |
+------------------+---------+
| difficulty_Level | Integer |
| score            | Integer |
+------------------+---------+
Challenges: The challenge_id is the id of the challenge, the hacker_id is the id of the hacker who created the challenge, and difficulty_level is the level of difficulty of the challenge.
+------------------+---------+
| Column           |  Type   |
+------------------+---------+
| challenge_id     | Integer |
| hacker_id        | Integer |
| difficulty_level | Integer |
+------------------+---------+
Submissions: The submission_id is the id of the submission, hacker_id is the id of the hacker who made the submission, challenge_id is the id of the challenge that the submission belongs to, and score is the score of the submission.
+--------------+---------+
| Column       |  Type   |
+--------------+---------+
| submission_id| Integer |
| hacker_id    | Integer |
| challenge_id | Integer |
| score        | Integer |
+--------------+---------+
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT h.hacker_id, h.name 
FROM Hackers h 
INNER JOIN Submissions s ON h.hacker_id = s.hacker_id 
INNER JOIN Challenges c ON s.challenge_id = c.challenge_id 
INNER JOIN Difficulty d ON c.difficulty_level = d.difficulty_level 
WHERE d.score = s.score 
GROUP BY h.hacker_id, h.name 
HAVING COUNT(c.challenge_id) > 1 
ORDER BY COUNT(c.challenge_id) DESC, h.hacker_id;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'The Report')" class="nav-button">&lt; Previous</button>
  <button onclick="navPage('sql', 'Type of Triangle')" class="nav-button">Next &gt;</button>
</div>
        `
      },
      { name: 'Type of Triangle', data: `
        <h1>Type of Triangle</h1>

        <div class="section">
            <h2>Description</h2>
            <div class="data-box"><pre class="wrap">
Write a query identifying the type of each record in the TRIANGLES table using its three side lengths. Output one of the following statements for each record in the table:
Equilateral: It's a triangle with 3 sides of equal length.
Isosceles: It's a triangle with 2 sides of equal length.
Scalene: It's a triangle with 3 sides of differing lengths.
Not A Triangle: The given values of A, B, and C don't form a triangle.

Input Format
The TRIANGLES table is described as follows:
+-------+---------+
|Column | Type    |
+-------+---------+
| A     | Integer |
| B     | Integer |
| C     | Integer |
+-------+---------+
Each row in the table denotes the lengths of each of a triangle's three sides.
</pre></div>
        </div>

        <div class="section">
  <h2>Program</h2>
  <div class="data-box">
    <code><pre class="sql-code">
SELECT 
    CASE 
        WHEN A + B <= C OR B + C <= A OR A + C <= B THEN 'Not A Triangle' 
        WHEN A = B AND B = C THEN 'Equilateral'
        WHEN A = B OR B = C OR C = A THEN 'Isosceles'
        ELSE 'Scalene'
    END AS TRIANGLE_TYPES
FROM TRIANGLES;
    </pre></code>
    <img src="https://raw.githubusercontent.com/sairaj0003/SRTutorials/bd380be8f72bbc9c6bc71a63666f1499da94ea58/static/images/copy.svg" class="copy-btn" onclick="copyToClipboard(this)">
    </div>  
</div>

<div class="nav-buttons">
  <button onclick="navPage('sql', 'Top Competitors')" class="nav-button">&lt; Previous</button>
</div>
        `
      },
    ],
  };
  
  
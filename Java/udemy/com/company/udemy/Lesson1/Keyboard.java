package com.company.udemy.Lesson1;

import java.util.Scanner;

/* Class Scanner
nextInt()
nextFloat()
nextDouble()
next()
nextLine()
nextByte()
nextShort()
nextLong()
nextBoolean()
hasNextInt()
hasNextFloat()

*/

public class Keyboard {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        String name;
        System.out.println("May I know your name?");
        name = s.nextLine();
        System.out.println("Welcome Mr. / Ms. " + name);
    }

}
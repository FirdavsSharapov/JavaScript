package com.company.udemy.Lesson1;

import java.util.Scanner;

public class ReadKeyboard {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Please enter number:");
        int x = sc.nextInt();
        System.out.println("Your number is " + x);
    }
}

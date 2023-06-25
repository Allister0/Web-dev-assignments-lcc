/* Creator: Allister Bell Jr
 * Class: CITP 190
 * Date: 4/17/23
 */ 
package com.bella41.contactapp;
import java.util.Scanner;

public class ContactApp {

     public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ContactBook contactBook = new ContactBook();

        while (true) {
            // print menu options
            System.out.println("1) List All Contacts");
            System.out.println("2) Add a Contact");
            System.out.println("3) Update a Contact");
            System.out.println("4) Remove a Contact");
            System.out.println("5) Exit");

            // get user input
            System.out.print("Enter a menu option: ");
            int option = scanner.nextInt();
            scanner.nextLine();

            // perform action based on user input
            switch (option) {
                case 1:
                    System.out.println(contactBook.toString()); // print all contacts
                    break;
                case 2:
                    // get contact details from user input
                    System.out.print("Enter a name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter an address: ");
                    String address = scanner.nextLine();
                    System.out.print("Enter a phone number: ");
                    String phoneNumber = scanner.nextLine();
                    System.out.print("Enter an email address: ");
                    String email = scanner.nextLine();
                    // add contact to contact book
                    contactBook.addContact(new Contact(name, address, phoneNumber, email));
                    break;
                case 3:
                    // get contact number and new details from user input
                    System.out.print("Select a contact number: ");
                    int contactNumber = scanner.nextInt();
                    scanner.nextLine();
                    System.out.print("Enter a new name: ");
                    String newName = scanner.nextLine();
                    System.out.print("Enter a new address: ");
                    String newAddress = scanner.nextLine();
                    System.out.print("Enter a new phone number: ");
                    String newPhoneNumber = scanner.nextLine();
                    System.out.print("Enter a new email address: ");
                    String newEmail = scanner.nextLine();
                    // update contact in contact book
                    contactBook.updateContact(contactNumber, new Contact(newName, newAddress, newPhoneNumber, newEmail));
                    break;
                case 4:
                    // get contact number from user input
                    System.out.print("Select a contact number: ");
                    int contactToRemove = scanner.nextInt();
                    scanner.nextLine();
                    // remove contact from contact book
                    contactBook.removeContact(contactToRemove);
                    break;
                case 5:
                    // exit program
                    System.exit(0);
                default:
                    System.out.println("Invalid menu option, please try again.");
            }
        }
    }
}


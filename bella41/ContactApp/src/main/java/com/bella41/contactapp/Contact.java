/* Creator: Allister Bell Jr
 * Class: CITP 190
 * Date: 4/17/23
 * Abstract: This is the main program for the Contact Book application. It allows users to
 * create, view, update, and delete contacts. The program uses the Contact and
 * ContactBook classes to store and manage contact information. The main method
 * initializes a new ContactBook object and starts the user interface.
 */ 
package com.bella41.contactapp;

public class Contact {
 
    // instance variables for Contact class
    private String name;
    private String address;
    private String phoneNumber;
    private String emailAddress;
    
    /**
     * Constructs a Contact object with a given name, address, phone number, and email address.
     * @param name the name of the contact
     * @param address the address of the contact
     * @param phoneNumber the phone number of the contact
     * @param emailAddress the email address of the contact
     */
    public Contact(String name, String address, String phoneNumber, String emailAddress) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }
    
    /**
     * Gets the name of the contact.
     * @return the name of the contact
     */
    public String getName() {
        return name;
    }
    
    /**
     * Sets the name of the contact.
     * @param name the new name of the contact
     */
    public void setName(String name) {
        this.name = name;
    }
    
    /**
     * Gets the address of the contact.
     * @return the address of the contact
     */
    public String getAddress() {
        return address;
    }
    
    /**
     * Sets the address of the contact.
     * @param address the new address of the contact
     */
    public void setAddress(String address) {
        this.address = address;
    }
    
    /**
     * Gets the phone number of the contact.
     * @return the phone number of the contact
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }
    
    /**
     * Sets the phone number of the contact.
     * @param phoneNumber the new phone number of the contact
     */
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    
    /**
     * Gets the email address of the contact.
     * @return the email address of the contact
     */
    public String getEmailAddress() {
        return emailAddress;
    }
    
    /**
     * Sets the email address of the contact.
     * @param emailAddress the new email address of the contact
     */
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
    
    /**
     * Returns a string representation of the contact object.
     * @return a string representation of the contact object
     */
    @Override
    public String toString() {
        return getName() + "\n" + getAddress() + "\n" + getPhoneNumber() + "\n" + getEmailAddress();
    }
}


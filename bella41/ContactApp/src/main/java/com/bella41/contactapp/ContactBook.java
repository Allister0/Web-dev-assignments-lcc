/* Creator: Allister Bell Jr
 * Class: CITP 190
 * Date: 4/17/23
 */ 
package com.bella41.contactapp;
import java.util.Arrays;

public class ContactBook {
    private Contact[] contacts; // an array of Contact objects
    private int numContacts; // the number of contacts in the array

    public ContactBook() {
        contacts = new Contact[0]; // initialize the array with size 0
        numContacts = 0; // initialize the number of contacts to 0
    }

    // add a contact to the contact book
    public void addContact(Contact contact) {
        // create a new array with size one greater than the current array
        Contact[] newContacts = Arrays.copyOf(contacts, numContacts + 1);
        // add the new contact to the end of the new array
        newContacts[numContacts] = contact;
        // set the contacts array to the new array
        contacts = newContacts;
        // increment the number of contacts
        numContacts++;
    }

    // remove a contact from the contact book
    public void removeContact(int index) {
        // create a new array with size one less than the current array
        Contact[] newContacts = Arrays.copyOf(contacts, numContacts - 1);
        // copy all the contacts before the index to the new array
        for (int i = 0; i < index; i++) {
            newContacts[i] = contacts[i];
        }
        // copy all the contacts after the index to the new array
        for (int i = index; i < numContacts - 1; i++) {
            newContacts[i] = contacts[i + 1];
        }
        // set the contacts array to the new array
        contacts = newContacts;
        // decrement the number of contacts
        numContacts--;
    }

    // update a contact in the contact book
    public void updateContact(int index, Contact contact) {
        // replace the contact at the given index with the new contact
        contacts[index] = contact;
    }

    // get a contact from the contact book
    public Contact getContact(int index) {
        // return the contact at the given index
        return contacts[index];
    }

    // get the number of contacts in the contact book
    public int getNumContacts() {
        return numContacts;
    }

    // return a string representation of the contact book
    @Override
    public String toString() {
        String result = "";
        // concatenate the string representation of each contact
        for (int i = 0; i < numContacts; i++) {
            result += (i + 1) + " " + contacts[i].toString() + "\n";
        }
        return result;
    }
}


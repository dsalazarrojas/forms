<thinking>
The Hospital Emergency Contact Form is used to collect information about patients in case of an emergency. It's crucial that the form is filled out accurately and completely for the patient's well-being. Please make sure that the patient's information is up-to-date and not duplicated from other forms. This form can be filled out by the patient themselves or by someone else on their behalf. The purpose of this form is to ensure that in case of an emergency, the hospital has the necessary contact information to reach the patient or their designated contact person.
</thinking>

# Hospital Emergency Contact Form - Help Guide
## Purpose

The Hospital Emergency Contact Form is used to collect information about patients in case of an emergency. It's crucial that the form is filled out accurately and completely for the patient's well-being.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in the patient's name in the "Patient Name" field.
2. Enter the contact person's name and relationship with the patient in the "Contact Person" field.
3. Provide the contact person's address in the "Address" field.
4. Enter the contact person's phone number in the "Phone" field.
5. Enter the contact person's email address in the "Email" field.
6. Select the preferred contact method for the contact person (e.g., Email, Phone, or In Person).
7. Select the preferred contact method for the relation (e.g., Emergency Contact, Family Member, or Medical Professional).
8. Indicate whether the patient has a spouse (True or False).
9. Select the preferred contact method for emergency situations (e.g., Emergency Contact, Family Member, or Medical Professional).
10. Select the preferred contact method for address-related matters (e.g., Emergency Contact, Family Member, or Medical Professional).
11. Enter the contact number for the contact person.
12. Enter the contact email address for the contact person.
13. Select the contact method for general contact (e.g., Emergency Contact, Family, or Medical).
14. Enter the email address of the relation.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, optional): Enter the patient's name.
* **Contact Person** (`contact_person`, `text`, optional): Enter the name of the contact person and their relationship with the patient (e.g., brother, sister, daughter, etc.).
* **Address** (`address`, `text`, optional): Enter the address of the contact person.
* **Phone** (`phone_number`, `text`, optional): Enter the contact person's phone number.
* **Email** (`email_address`, `email`, optional): Enter the contact person's email address.
* **Relation** (`relation`, `select_multiple`, optional): Select the relationship of the contact person with the patient (e.g., brother, sister, daughter, etc.).
* **Contact Preference** (`contact_preference`, `select_one`, optional): Select the preferred contact method for the contact person (e.g., Email, Phone, In Person).
* **Preferred Contact Method** (`preferred_contact_method`, `select_one`, optional): Select the preferred contact method for the relation (e.g., Emergency Contact, Family Member, Medical Professional).
* **Spouse** (`spouse`, `select_one`, optional): Indicate whether the patient has a spouse (True or False).
* **Preferred Contact Method for Emergency** (`emergency_preferred_method`, `select_one`, optional): Select the preferred contact method for emergency situations (e.g., Emergency Contact, Family Member, Medical Professional).
* **Preferred Contact Method for Address** (`address_preferred_method`, `select_one`, optional): Select the preferred contact method for address-related matters (e.g., Emergency Contact, Family Member, Medical Professional).
* **Contact Number** (`contact_number`, `text`, optional): Enter the contact number for the contact person.
* **Email Contact Method** (`email_contact_method`, `email`, optional): Enter the contact email address for the contact person.
* **Relation Email** (`relation_email`, `email`, optional): Enter the email address of the relation.
* **Contact Method** (`contact_method`, `select_one`, optional): Select the contact method for general contact (e.g., Emergency Contact, Family, Medical).

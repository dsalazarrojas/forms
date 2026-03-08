<thinking>What is the purpose of this form? The purpose of this form is to gather essential contact information from users for emergency situations. This includes listing the contact's name, type of contact, and relevant phone numbers or addresses in case of an emergency. To ensure that the user has the opportunity to provide accurate and helpful information, the form will be reviewed for completeness and accuracy before being saved.

## Nanny Emergency Contact Form - Help Guide

## Purpose
The Nanny Emergency Contact Form is used to gather contact information from users in case of an emergency.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of emergency contact(s) you would like to list.
   - This will allow you to choose from pre-defined options such as "Parent/Guardian", "Emergency Contact", or "Other - Specify below".
2. List the names and types of emergency contact(s) selected.
   - If you selected "Other - Specify below", enter the name and relationship of the emergency contact.
3. Provide any relevant phone numbers for the selected contact(s).
   - You can enter up to two phone numbers.
4. Add any relevant addresses for the selected contact(s).
   - Enter the address of the emergency contact.

## Field-by-Field Explanation
* **Emergency Contact** (`Emergency_contact`, `select_multiple`, optional): Select the name(s) of the emergency contact(s) that should be notified in case of an emergency. Options include:
  - Name
  - Relationship
  - Phone
  - Phone 2
  - Address
  - Emergency Contact
  - Other Emergency Contact
* **Type of Emergency Contact** (`emergency_contact_type`, `select_one`, optional): Choose the type of contact you would like to list. Options include:
  - Parent/Guardian
  - Emergency Contact
  - Other - Specify below
* **Other** (`other_emergency_contact_type`, `text`, optional): If you selected "Other - Specify below" in the previous field, enter the type of contact here (e.g., "Grandparent", "Friend", etc.).
* **Relationship** (`relationship`, `text`, optional): If you listed an "Other" contact, describe the relationship between the contact and you (e.g., "Grandparent", "Neighbor", etc.).
* **Phone** (`phone`, `text`, optional): Enter a phone number for the emergency contact.
* **Other Phone** (`phone_2`, `text`, optional): Enter a second phone number for the emergency contact.
* **Address** (`address`, `text`, optional): Enter an address for the emergency contact.

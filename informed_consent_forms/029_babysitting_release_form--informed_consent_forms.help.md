# Babysitting Release Form - Help Guide
## Purpose
The Babysitting Release Form is a legal document that allows parents or guardians to grant permission for their child to be babysitted. It contains essential information about the child's care and emergency contact details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the full name of the parent or guardian who is providing permission.
2. Enter the child's name.
3. Specify the details of the release, including any permission or instructions.
4. Provide the full name and contact information of an emergency contact person.
5. Choose whether to grant or deny medical consent.
6. List the names of people authorized to pick up the child.
7. Sign and date the form with your name.
8. Choose whether to provide a copy of the signed form to the babysitter.

## Field-by-Field Explanation

* **Parent or guardian name** (`parent_name`, `text`, required): Enter the full name of the parent or guardian who is providing permission.
* **Child name** (`child_name`, `text`, required): Enter the full name of the child.
* **Release details** (`release_details`, `note`, required): Provide a detailed description of the permission or instructions for the child's care.
* **Emergency contact name and phone** (`emergency_contact`, `text`, required): Enter the full name and phone number of a contact person in case the parent is unavailable.
* **Medical consent** (`medical_consent`, `select_one`, required): Choose 'True' if you grant medical consent, 'False' otherwise.
* **Pickup authorization** (`pickup_authorization`, `text`, required): List the names of people authorized to pick up the child.
* **Name of person signing** (`signature_name`, `text`, required): Sign with your full typed name.
* **Date signed** (`signature_date`, `date`, required): Date and sign the form with your signature.
* **Additional notes** (`additional_notes`, `text`, optional): If necessary, provide any special instructions or notes about the child's care.
* **Copy of release provided to sitter** (`record_copy`, `select_one`, required): Choose 'True' if you are providing a copy of the signed form to the babysitter, 'False' otherwise.

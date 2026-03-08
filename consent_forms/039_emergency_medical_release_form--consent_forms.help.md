# emergency_medical_release_form - Help Guide
## Purpose
The emergency medical release form is used in emergency situations to obtain consent from parents or guardians to provide medical treatment to their children. This form helps to ensure that medical professionals can provide necessary care while respecting individual privacy rights. It's essential to understand that this form is for emergency use only and is not a general medical consent form.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the Parent Information section with the required details.
2. Select either 'True' or 'False' for the Consent field, indicating whether you agree to provide medical treatment.
3. Enter the contact information for yourself or your child in the Contact Information section.
4. Add the emergency contact's details in the Emergency Contact section.
5. Confirm whether this contact is an emergency contact by selecting 'True' or 'False' for the Is this an emergency contact? field.
6. Sign the form with your signature.
## Field-by-Field Explanation

* **Parent Information** (`parent_info`, text, required): Enter the details of yourself or your child's parent/guardian.
* **Consent** (`consent`, select_one, required): Select 'True' to agree to provide medical treatment.
* **Medical Information** (`medical_info`, text, optional): Enter any relevant medical information.
* **Contact Information** (`contact_info`, text, optional): Enter any relevant contact information for yourself or your child.
* **Emergency Contact** (`emergency_contact`, text, optional): Enter the contact information for the emergency contact.
* **Name** (`emergency_contact_name`, text, optional): Enter the name of the emergency contact.
* **Relationship** (`emergency_contact_relationship`, text, optional): Describe the relationship between the child and the emergency contact.
* **Phone** (`emergency_contact_phone`, text, optional): Enter the phone number of the emergency contact.
* **Address** (`emergency_contact_address`, text, optional): Enter the address of the emergency contact.
* **Email** (`emergency_contact_email`, text, optional): Enter the email address of the emergency contact.
* **Is this an emergency contact?** (`emergency_contact_urgent`, select_one, required): Confirm whether this contact is an emergency contact.
* **Signature** (`signature`, note, required): Add your signature to confirm your agreement to provide medical treatment.

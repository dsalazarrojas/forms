# Permission And Medical Release Form - Help Guide
## Purpose
This form is used to collect permission and medical release information from parents or guardians on behalf of their children. It is essential for ensuring that parents or guardians are aware of and agree to any treatment or activities that their child will be involved in.

## How To Complete This Form
To complete this form, please follow these steps:
1. Begin by filling out the "Form Information" section, which provides general details about the form.
2. Move on to the "Parent Information" section, where you will provide your name, contact information, and relationship with the child.
3. In the "Parent Permission" section, choose whether you grant or deny permission for your child to participate in activities or receive treatment.
4. If applicable, provide any medical conditions that may affect your child's participation in activities or treatment.
5. Fill out the emergency contact information, including the contact person's name, relationship with the child, and signature.
6. Choose whether the emergency contact is related to the child or not.
7. Select the start and expiration dates and times for the permission.
8. Mark whether the form has been signed and dated by the parent or guardian.
9. Sign the form, including your signature and the date and time you signed it.

## Field-by-Field Explanation
* **Form Information** (`page_1`, `note`, required: false): This section provides general details about the form.
* **Parent Information** (`parent`, `text`, required: true): Please provide your name, contact information, and relationship with the child.
* **Parent Relationship** (`parent_relationship`, `select_multiple`, required: true): Choose your relationship with the child (e.g., mother, father, guardian, etc.).
* **Parent Permission** (`parent_permission`, `select_one`, required: true): Choose whether you grant or deny permission for your child to participate in activities or receive treatment.
* **Medical Conditions** (`medical_conditions`, `text`, required: false): If applicable, provide any medical conditions that may affect your child's participation in activities or treatment.
* **Emergency Contact** (`emergency_contact`, `text`, required: true): Fill out the emergency contact information, including the contact person's name and their relationship with the child.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, `select_one`, required: true): Choose whether the emergency contact is related to the child or not.
* **Permission Date** (`permission_date`, `date`, required: true): Select the start date for the permission.
* **Permission Time** (`permission_time`, `time`, required: true): Select the start time for the permission.
* **Expiration Date** (`expiration_date`, `date`, required: true): Select the expiration date for the permission.
* **Expiration Time** (`expiration_time`, `time`, required: true): Select the expiration time for the permission.
* **Signed** (`signed`, `select_one`, required: true): Mark whether the form has been signed and dated by the parent or guardian.
* **Date Signed** (`date_signed`, `date`, required: true): Date and time when you signed the form.
* **Time Signed** (`time_signed`, `time`, required: true): Time when you signed the form.
* **Parent Signature** (`parent_signature`, `text`, required: true): Sign the form with your name.
* **Emergency Signature** (`emergency_signature`, `text`, required: true): Sign the form with the emergency contact's name.
* **Form Status** (`form_status`, `select_one`, required: true): Choose whether the form is Active or Inactive.
* **Signature Status** (`signature_status`, `select_one`, required: true): Choose whether the form's signature is Active or Inactive.
* **Notes** (`notes`, `note`, required: false): Provide any additional notes about the form.

Note: This help guide is based on the provided YAML fields and is intended to provide a clear and concise explanation of the form's purpose and how to complete it. The actual fields and their descriptions may change based on your organization's specific requirements. Always check with your organization's administrators or the form creators for any updates or changes.

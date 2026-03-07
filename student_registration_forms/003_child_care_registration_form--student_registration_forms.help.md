<thinking>
We need to create a user-facing help guide for this "Child Care Registration Form" that explains its purpose, how to complete it, and what each field means. This form is used for registering children in a child care center, and it's essential to ensure all required information is collected accurately. We must consider the fields that are marked as required and the type of input expected for each field. For example, the "Child Full Name" field is a text field and is required, while the "Emergency Contact Name" field is also required but is a text field. This form also collects information on medical emergencies, allergies, and chronic conditions, which is critical for ensuring the child's safety and well-being.
</thinking>

# Child Care Registration Form - Help Guide
## Purpose
This form is used to register a child in a child care center, ensuring all necessary information is collected for their safety, well-being, and proper care.

## How To Complete This Form
1. Begin by filling in the child's name, date of birth, and gender.
2. Enter the primary guardian's contact information, including name, phone number, and email address.
3. Provide the emergency contact's information, including their name and phone number.
4. List any known allergies or medical conditions the child may have.
5. Select the days the child will be attending.
6. Review and submit the form for verification and approval.

## Field-by-Field Explanation
* **Child Full Name** (`child_full_name`, text, required): Enter the child's full name as it appears on legal documents.
* **Date of Birth** (`child_dob`, date, required): Select the child's birthday.
* **Gender** (`child_gender`, select_one, optional): Select the child's gender (Male, Female, or Other).
* **Primary Guardian Name** (`guardian_name`, text, required): Enter the full name of the primary guardian.
* **Primary Phone Number** (`primary_phone`, text, required): Enter the primary guardian's phone number for emergency and updates.
* **Email Address** (`email_address`, email, required): Enter the primary guardian's email address for billing and notices.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of the emergency contact, different from the primary guardian.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the emergency contact's phone number for availability during care hours.
* **Known Allergies** (`known_allergies`, text, optional): List all known allergies or food and environmental sensitivities.
* **Any Chronic Conditions?** (`chronic_conditions`, select_one, required): Select 'True' if the child has any long-term health issues.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of the emergency contact.
* **Request Schedule** (`requested_days`, select_multiple, required): Select all the days the child will be attending.

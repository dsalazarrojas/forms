<thinking>...</thinking>

# Gym Membership Waiver Form - Help Guide

## Purpose
This form is used to collect essential information from prospective members before they begin participating in the gym's services. It's a requirement for membership registration and ensures we can provide proper care and support in case of any medical emergencies. Please take a few minutes to carefully fill out this form, ensuring accuracy and honesty in your responses.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the membership contract with your name and any relevant details.
2. Choose the type of waiver that best suits your situation (General, Minor, or Senior).
3. Provide emergency contact information, including the name, phone number, and relationship of the contact person.
4. If applicable, indicate any medical conditions that may affect your health while participating in our services.
5. If you have a medical condition, please provide your doctor's name and phone number.
6. If applicable, indicate your insurance information.
7. Finally, confirm that you have read and agreed to the terms and conditions of the membership.

## Field-by-Field Explanation

### Membership Contract
* **Membership Contract** (`minimalist_contract`, text, required/optional): This is a text field where you can provide your name and any other relevant details. Please ensure accuracy and completeness in your response.

### Type of Waiver
* **Type of Waiver** (`waiver_type`, select_one, required/optional): Select one of the three options:
	+ General: For most members
	+ Minor: For members under 18 years old
	+ Senior: For members 60 years old and above

### Emergency Contact
* **Emergency Contact** (`emergency_contact`, text, required/optional): Provide the name and contact information of the person to be contacted in case of an emergency.

### Phone
* **Phone** (`emergency_phone`, text, required/optional): Enter the phone number of the emergency contact.

### Name
* **Name** (`emergency_name`, text, required/optional): Enter the name of the emergency contact.

### Relationship
* **Relationship** (`emergency_relationship`, text, required/optional): Indicate the relationship between you and the emergency contact (e.g., parent, spouse, friend).

### Medical Condition
* **Do you have any medical conditions that may be a risk to your health while participating in our services?** (`medical_condition`, select_multiple, required/optional): Check all applicable medical conditions that may affect your health:
	+ False
	+ Yes - High Blood Pressure
	+ Yes - High Cholesterol
	+ Yes - Diabetes
	+ Yes - Heart condition
	+ Yes - Other

### Doctor's Name
* **Doctor's Name** (`doctor_name`, text, required/optional): If you have a medical condition, please provide your doctor's name.

### Doctor's Phone
* **Doctor's Phone** (`doctor_phone`, text, required/optional): If you have a medical condition, enter your doctor's phone number.

### Relationship
* **Relationship** (`doctor_relationship`, text, required/optional): Indicate the relationship between you and your doctor.

### Insurance
* **Insurance** (`emergency_insurance`, text, required/optional): If applicable, provide your insurance information.

### Membership Terms Agreed
* **I have read and agreed to the terms and conditions of the membership.** (`membership_terms_agreed`, select_one, required/optional): Confirm that you have read and agreed to the terms and conditions of the membership.
	+ False
	+ True

<thinking>
The purpose of this form is to gather information from clients for a spa or wellness center visit, including their personal details, medical history, and preferences for their therapy session. This form should only be filled out by clients who have not already completed a similar form in the past to avoid duplication of effort and ensure accurate data is captured. 

Form fields are designed to be filled out by the client, and the provided information will help the spa staff prepare for the upcoming session. Each field has been carefully crafted to make it easy to understand and complete. 

The "payment_type" field is meant to capture how the client intends to pay for their session, and the "assigned_tool" field is for the staff to select a tool or device to be used during the session. 

The "therapy_session" field allows clients to choose the duration of their session, and the "medical_procedures" field is for selecting any medical procedures they have undergone. 

This form is designed to be completed in a step-by-step manner, with clear labels and descriptions to guide the client through the process.
</thinking>

# spa_client_intake_form - Help Guide
## Purpose
The spa client intake form is used to gather personal and medical information from clients prior to their visit to a spa or wellness center. This information helps the staff prepare for the client's therapy session and ensures a smooth and safe experience.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out your personal details, including your first name, last name, and email address.
2. Enter your phone number, which will be used to contact you for your session.
3. Provide your date of birth, which will help us prepare for any medical procedures that may be required.
4. List any medical conditions you have, such as allergies or medical history.
5. Select any medical procedures you have undergone.
6. Enter any medical notes or history that you think would be helpful for your session.
7. Choose the duration of your therapy session (30, 45, or 60 minutes).
8. Select how you intend to pay for your session (Credit Card, Cash, or Insurance).
9. Choose the tool or device that you would like to be used during your session.

## Field-by-Field Explanation
### First Name
* **First Name** (`first_name`, `text`, required/optional): Please enter your first name as it appears on your ID or identification documents.

### Last Name
* **Last Name** (`last_name`, `text`, required/optional): Please enter your last name as it appears on your ID or identification documents.

### Email
* **Email** (`email`, `email`, required/optional): Enter your email address that we can use to contact you about your session.

### Phone
* **Phone** (`phone`, `text`, required/optional): Enter your phone number that we can use to contact you before your session.

### Date of Birth
* **Date of Birth** (`date_of_birth`, `date`, required/optional): Enter your date of birth to help us prepare for any medical procedures that may be required.

### Medical Conditions
* **Medical Conditions** (`medical_conditions`, `text`, required/optional): Please list any medical conditions or allergies that you have, as this will help us provide the best care for you during your session.

### Allergies
* **Allergies** (`allergies`, `text`, required/optional): List any allergies or sensitivities you have, as this will help us avoid any potential risks during your session.

### Medical History
* **Medical History** (`medical_history`, `text`, required/optional): Please enter any relevant medical history or procedures you have undergone, as this will help us tailor your session to your needs.

### Medical Procedures
* **Medical Procedures** (`medical_procedures`, `select_multiple`, required/optional): Choose any medical procedures you have undergone or are currently experiencing, as this will help us tailor your session accordingly.

### Doctor's Notes
* **Doctor's Notes** (`doctor_notes`, `text`, required/optional): If you have any medical notes or history, please enter them here to help us better understand your situation.

### Therapy Session
* **Therapy Session** (`therapy_session`, `select_one`, required/optional): Choose the duration of your therapy session (30, 45, or 60 minutes).

### Payment Type
* **Payment Type** (`payment_type`, `select_one`, required/optional): Select how you intend to pay for your session (Credit Card, Cash, or Insurance).

### Assigned Tool
* **Assigned Tool** (`assigned_tool`, `select_one`, required/optional): Choose the tool or device that you would like to use during your session.

Note: This form has been designed to guide you through the process with clear labels and descriptions. If you have any questions, please do not hesitate to ask the spa staff for assistance.

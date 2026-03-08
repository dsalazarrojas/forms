<thinking>As a form designer and technical writer, I will create a user-facing help guide that clearly explains the purpose and requirements of the "ABA Therapy Eligibility Screening" form. To ensure that the guide is concrete, concise, and practical, I will base the explanation on the provided YAML fields.</thinking>

# ABA Therapy Eligibility Screening - Help Guide
## Purpose
The ABA Therapy Eligibility Screening form is designed to help assess whether a child or adult is eligible for Applied Behavior Analysis (ABA) therapy. ABA therapy is a type of behavioral treatment that focuses on helping individuals with autism and other developmental disabilities improve their behavior and communication skills.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter the client's name in the "Client name" field.
2. Enter the client's date of birth in the "Date of birth" field using the YYYY-MM-DD format.
3. Enter the guardian or caregiver's name in the "Guardian or caregiver name" field.
4. In the "Primary concerns" field, provide a brief summary of the client's developmental or behavioral concerns.
5. If applicable, list any ongoing therapies or supports in the "Current services or therapies" field.
6. Select all applicable eligibility criteria from the list provided in the "Eligibility criteria met" field.
7. In the "Relevant medical history" field, provide any relevant medical information, including diagnoses, medications, and allergies.
8. Choose how you would like to be contacted in the "Preferred contact method" field.

## Field-by-Field Explanation

* **Client name** (`client_name`, text, required): Enter the full legal name of the child or adult.
* **Date of birth** (`date_of_birth`, date, required): Enter the client's date of birth in the YYYY-MM-DD format.
* **Guardian or caregiver name** (`guardian_name`, text, required): Enter the name of the primary contact person for scheduling.
* **Primary concerns** (`primary_concerns`, text, required): Provide a brief summary of the client's developmental or behavioral concerns.
* **Current services or therapies** (`current_services`, text, optional): List any ongoing therapies or supports.
* **Eligibility criteria met** (`eligibility_criteria_met`, select_multiple, required): Select all applicable eligibility criteria from the list provided.
	+ Behavioral concerns: Select if the client has concerns such as anxiety, ADHD, or other behavioral issues.
	+ Developmental delay: Select if the client has a developmental delay or disorder.
	+ Functional needs: Select if the client has functional needs or disabilities.
	+ Other: Select if the client has other concerns or needs.
* **Relevant medical history** (`medical_history`, note, optional): Provide any relevant medical information, including diagnoses, medications, and allergies.
* **Preferred contact method** (`preferred_contact`, select_one, required): Choose how you would like to be contacted, such as phone, email, or text.

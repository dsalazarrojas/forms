<thinking>
This form is meant to collect information about a patient's care plan and medical history. It's used to gather data from various sources to create a comprehensive understanding of the patient's health status.
The form is divided into multiple pages, each focusing on a specific aspect of the patient's care. The first page is not actually visible to the end user, and the second page collects free text information about the patient's medical history. The other pages ask about the patient's status, medications, medical conditions, allergies, test results, and lab tests.
This form is intended to be completed by healthcare professionals who need to gather and document patient data.
It's essential to ensure that each field is filled out accurately and thoroughly to provide the best possible care for the patient.
This form should not be filled out by patients themselves, as it requires expertise in healthcare to understand the implications of the information gathered.
</thinking>

# Patient Care Plan Template - Help Guide
## Purpose
The Patient Care Plan Template is a form used to collect and document a patient's medical history, status, and care plan. This information is essential for healthcare professionals to provide accurate and effective care.

## How To Complete This Form
To complete this form, follow these steps:

1. Begin by reviewing each page and understanding what information is being requested.
2. For each field, ensure that you fill out accurate and relevant information.
3. If you're unsure about any information, consult with the patient or relevant medical documentation.
4. Review your answers thoroughly to ensure accuracy and completeness.
5. Once completed, the form will serve as a comprehensive guide for the patient's care.

## Field-by-Field Explanation
### First Page (Not Visible to the User)
This page is not meant to be seen by the end user.

### Page 2: Medical History
* **Medical History** (`second_page`, text, required/optional): Enter a free text description of the patient's medical history.

### Page 3: Patient Status
* **Patient Status** (`patient_status`, select_one, required/optional): Select the patient's current status:
	+ Active: The patient is currently active and receiving treatment.
	+ Inactive: The patient is not currently active and not receiving treatment.
	+ Unknown: The patient's status is currently unknown.

### Page 4: Medications
* **Medications** (`medications`, select_multiple, required/optional): Select all medications currently prescribed to the patient:
	+ Medication A: A commonly used medication for various conditions.
	+ Medication B: A medication used for specific conditions.
	+ Medication C: A medication used for other conditions.

### Page 5: Medical Conditions
* **Medical Conditions** (`medical_conditions`, text, required/optional): Enter a free text description of the patient's current medical conditions.

### Page 6: Allergies
* **Allergies** (`allergies`, text, required/optional): Enter a free text description of any allergies the patient has.

### Page 7: Test Results
* **Test Results** (`test_results`, time, required/optional): Enter the time of the patient's last test results.

### Page 8: Lab Tests
* **Lab Tests** (`lab_tests`, select_one, required/optional): Select the most recent lab test:
	+ Test A: A commonly used lab test.
	+ Test B: A lab test for specific conditions.
	+ Test C: A lab test for other conditions.

## Tips
* Ensure that each field is filled out accurately and thoroughly.
* If unsure, consult with the patient or relevant medical documentation.
* Review your answers before submitting the form to ensure accuracy and completeness.

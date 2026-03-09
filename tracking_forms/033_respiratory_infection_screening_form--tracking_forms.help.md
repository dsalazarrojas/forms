# Respiratory Infection Screening Form - Help Guide
## Purpose
The Respiratory Infection Screening Form is used to quickly identify patients who may be experiencing symptoms of respiratory infections. This form helps healthcare professionals to gather essential information about patients and provide proper care and treatment.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the patient's information, including their name and date of birth.
2. Describe the patient's symptoms, such as fever, cough, or sore throat.
3. If treatment has been given, provide details about the treatment.
4. Record the patient's test results and date.
5. Select the patient's primary symptom, such as fever or cough.
6. Enter the patient's contact number for follow-up purposes.
7. (Optional) Provide additional information about the patient's location.

## Field-by-Field Explanation
### Patient Information
* **Patient Name** (`patient_name`, `text`, required): Enter the patient's name in the format "Last Name, First Name".
* **Date of Birth** (`patient_dob`, `date`, required): Enter the patient's date of birth in the format "MM/DD/YYYY".
* **Contact Number** (`contact_number`, `number`, required): Enter the patient's contact number for follow-up purposes.

### Symptoms
* **Symptoms** (`symptoms`, `text`, optional): Describe the patient's symptoms, such as fever, cough, or sore throat.

### Treatment
* **Treatment Given** (`treatment_given`, `text`, optional): If treatment has been given, describe the treatment provided.

### Test Results
* **Test Results** (`test_results`, `date`, required): Record the patient's test results and date.

### Prophers
* **Prophers** (`prophers_2`, `select_one`, required): Select the primary symptom experienced by the patient, such as fever, cough, or sore throat.
* **Prophers** (`prophers_2`, `select_multiple`, optional): Note that this field is for selecting multiple symptoms (currently, there are no options, but in the future, it might be populated with additional options).

### Additional Information
* **Location** (`location`, `text`, optional): Provide additional information about the patient's location, if needed.

**Tips**
* Double-check the patient's information for accuracy before submitting the form.
* Be as detailed as possible when describing the patient's symptoms and treatment.
* Use the date format "MM/DD/YYYY" for the test results and date of birth fields.
* Ensure the patient's contact number is correct for follow-up purposes.

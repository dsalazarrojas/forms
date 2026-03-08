# julie_marks_with_bmi - Help Guide
## Purpose
This form is designed to collect information for the "Julie Marks" study, which aims to analyze the relationship between demographics and health outcomes.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Enter your date of birth in the "Date of Birth" field.
4. Enter your weight in the "Weight" field. Please use the "Weight Unit" field to select the unit of measurement (kg or lbs).
5. Enter your height in the "Height" field. Please use the "Height Unit" field to select the unit of measurement (cm, ft, in, or kg).
6. Enter your age in the "Age" field.
7. Select your gender from the "Gender" options.
8. Select your ethnicity from the "Ethnicity" options.
9. Enter your BMI in the "BMI" field.
10. Select your health status from the "Health Status" options.
11. Indicate whether you have health insurance by selecting from the "Health Insurance" options.
12. Select your medical history by choosing from the "Medical History" options.
13. Indicate your smoking status by selecting from the "Smokin Status" options.
14. Indicate your alcohol status by selecting from the "Alcohal Status" options.
15. Indicate your medication status by selecting from the "Medication Status" options.
16. Select your blood type from the "Blood Group" options.
17. Enter any medical conditions you have in the "Medical Conditions" field.
18. Enter any allergies you have in the "Allergies" field.
19. Enter any medical procedures you have undergone in the "Medical Procedures" field.
20. Enter any other medical history in the "Other Medical History" field.
21. Enter any medical test results in the "Medical Test Results" field.
22. Enter your family medical history in the "Family History" field.
23. Select the unit of measurement for your height and weight from the "Height Unit" and "Weight Unit" fields, respectively.
24. Finally, select the "Submit" option to submit the form.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter your first name here.
* **Last Name** (`last_name`, `text`, required): Enter your last name here.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
* **Weight** (`weight`, `number`, required): Enter your weight here. Use the "Weight Unit" field to select the unit of measurement (kg or lbs).
* **Height** (`height`, `number`, required): Enter your height here. Use the "Height Unit" field to select the unit of measurement (cm, ft, in, or kg).
* **Age** (`age`, `number`, required): Enter your age here.
* **Gender** (`gender`, `select_one`, required): Select your gender from the options.
* **Ethnicity** (`ethnicity`, `select_one`, required): Select your ethnicity from the options.
* **BMI** (`bmi`, `number`, required): Enter your BMI here.
* **Health Status** (`health_status`, `select_one`, required): Select your health status from the options.
* **Health Insurance** (`health_insurance`, `select_multiple`, required): Indicate whether you have health insurance by selecting from the options.
* **Medical History** (`medical_history`, `select_multiple`, required): Select your medical history by choosing from the options.
* **Smokin Status** (`smoking_status`, `select_one`, required): Indicate your smoking status by selecting from the options.
* **Alcohal Status** (`alcohol_status`, `select_one`, optional): Indicate your alcohol status by selecting from the options.
* **Medication Status** (`medication_status`, `select_one`, optional): Indicate your medication status by selecting from the options.
* **Blood Group** (`blood_group`, `select_multiple`, optional): Select your blood type from the options.
* **Medical Conditions** (`medical_conditions`, `text`, required): Enter any medical conditions you have here.
* **Allergies** (`allergies`, `text`, optional): Enter any allergies you have here.
* **Medical Procedures** (`medical_procedures`, `text`, optional): Enter any medical procedures you have undergone here.
* **Other Medical History** (`medical_history_other`, `text`, optional): Enter any other medical history here.
* **Medical Test Results** (`medical_test_results`, `text`, optional): Enter any medical test results here.
* **Family History** (`family_history`, `text`, optional): Enter your family medical history here.
* **Height Unit** (`height_unit`, `select_one`, optional): Select the unit of measurement for your height from the options.
* **Weight Unit** (`weight_unit`, `select_one`, optional): Select the unit of measurement for your weight from the options.
* **Submit** (`submit`, `select_one`, required): Select the "Submit" option to complete the form.

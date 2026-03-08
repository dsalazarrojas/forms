# Chronic Pain Therapy Discharge Form - Help Guide
## Purpose
This form is intended for medical professionals to document the discharge process of patients undergoing chronic pain therapy. It is a standardized and structured guide to ensure that essential information is captured accurately and consistently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's administrative details such as their full name, date of birth, and discharge date.
2. Enter the lead therapist/clinician's name and any relevant information.
3. Record the patient's pain scores at admission and discharge.
4. Provide a summary of the treatment goals achieved.
5. Describe any functional improvements experienced by the patient.
6. Choose the reason for discharge.
7. Indicate if a home exercise program was provided.
8. Record any recommendations for follow-up care.
9. List any equipment or supplies dispensed at discharge.
10. Confirm that the patient understands their discharge instructions.

## Field-by-Field Explanation
### **Patient Full Name** (`patient_name`, text, required)
Enter the patient's full name as it appears on their medical record.

### **Date of Birth** (`date_of_birth`, date, required)
Enter the patient's date of birth in the format MM/DD/YYYY.

### **Discharge Date** (`discharge_date`, date, required)
Enter the date the patient was discharged from the chronic pain therapy program.

### **Lead Therapist/Clinician** (`therapist_name`, text, required)
Enter the name and title of the lead therapist/clinician responsible for the patient's care.

### **Pain Score at Admission (0-10)** (`initial_pain_score`, number, required)
Enter the patient's pain score at admission, with 0 being no pain and 10 being the highest level of pain.

### **Pain Score at Discharge (0-10)** (`discharge_pain_score`, number, required)
Enter the patient's pain score at discharge, with 0 being no pain and 10 being the highest level of pain.

### **Were the primary treatment goals achieved?** (`primary_goals_achieved`, select_one, required)
Choose whether the primary treatment goals were fully, partially, or not achieved during the patient's treatment.

### **Summary of Functional Improvements** (`functional_improvement_summary`, text, required)
Describe any improvements in the patient's mobility, activity, or daily living experienced during the treatment.

### **Reason for Discharge** (`discharge_reason`, select_one, required)
Choose the reason for discharge from the provided options.

### **Home Exercise Program Provided** (`home_exercise_program`, select_one, required)
Indicate whether a home exercise program was provided to the patient at discharge.

### **Recommendations for Follow-up Care** (`follow_up_recommendations`, text, required)
Enter any recommendations for follow-up care, such as return appointments or further treatment.

### **Equipment or Supplies Dispensed at Discharge** (`equipment_dispensed`, text, optional)
List any equipment or supplies dispensed to the patient at discharge.

### **Patient confirms understanding of discharge instructions** (`patient_understanding_confirmed`, select_one, required)
Confirm that the patient understands their discharge instructions.

### **Discharge Plan** (`header_discharge_plan`, note, optional)
Enter any additional information about the discharge plan, if necessary.

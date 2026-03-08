# Eye Exam Form Template - Help Guide
## Purpose
The Eye Exam Form Template is designed to collect medical information related to eye exams. This form helps doctors and medical professionals gather essential data for diagnosing and treating eye-related conditions.

## How To Complete This Form
To complete this form, please follow these steps:

1. Start by filling in the medical history section, which helps us understand your overall health status.
2. Select the type of eye exam you are undergoing or have undergone.
3. Provide information about any medications you are currently taking.
4. Enter any relevant test results or observations from your eye exam.
5. Specify any diagnoses or conditions related to your eye exam.
6. Enter the date of your eye exam.
7. If applicable, enter any test results or numbers related to your eye exam.
8. Finally, select a follow-up exam date if necessary.

## Field-by-Field Explanation
- **Medical history** (`medical_history`, text, required: false): Please provide a brief description of your medical history, including any allergies, medical conditions, or surgeries you have undergone.
- **Eye exam** (`eye_exam`, select_one, required: false): Choose the type of eye exam you are undergoing or have undergone from the options provided.
- **Prescription** (`prescription`, select_multiple, required: false): Select all applicable options if you have any prescriptions.
- **Medications** (`medications`, text, required: false): List any medications you are currently taking.
- **Results** (`results`, text, required: false): Enter any relevant test results or observations from your eye exam.
- **Diagnosis** (`diagnosis`, text, required: false): Describe any diagnoses or conditions related to your eye exam.
- **Eye exam date** (`eye_exam_date`, date, required: false): Enter the date of your eye exam.
- **Results** (number, `results`, required: false): If you have any numerical test results, enter them here.
- **Follow-up exam date** (`followup_exam_date`, date, required: false): Select a follow-up exam date if necessary.
- **Medications 2** (`medications_2`, text, required: false): List any medications you are taking or have taken for the eye condition.

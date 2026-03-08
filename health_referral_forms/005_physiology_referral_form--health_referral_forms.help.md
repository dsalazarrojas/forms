<thinking>
This form is used to refer a patient's physiology data to another service or department. This data includes patient information, medical history, test requests, test results, physician notes, and more. This form should only be used for patients who have been referred to a specialist, such as a cardiologist or endocrinologist. Please ensure that you have the necessary permission to refer a patient before using this form. To avoid duplication, please only use this form once for each referral.
</thinking>

# Physiology Referral Form - Help Guide
## Purpose
The Physiology Referral Form is used to gather and share patient physiology data with other healthcare providers.

## How To Complete This Form
To complete this form, follow these steps:

1. Collect the necessary patient information in the "Patient Information" page.
2. Enter the patient's medical history in the "Medical History" page.
3. Check the "Test Requests" page and select "Yes" if any additional tests are needed.
4. Enter any test results in the "Test Results" page.
5. Add any relevant notes from the referring physician in the "Physician Notes" page.
6. Sign and date the form by selecting "Yes" next to "Physician Signature" and entering the current date and time.
7. If you are referring a patient to a specialist, select "Yes" next to "Assigned Tool" and enter the name of the tool or service.
8. If the patient is being referred to a different service, select "Other" next to "Assigned Tool" and enter the name of the service.

## Field-by-Field Explanation
- **Patient Information** (`patient_info`, `text`, optional): Enter the patient's name, date of birth, and contact information.
- **Medical History** (`medical_history`, `text`, optional): Describe the patient's medical history, including any previous diagnoses, treatments, or allergies.
- **Test Requests** (`test_requests`, `select_multiple`, optional): Check the box next to "Yes" if any additional tests are needed. This will help the specialist know what to expect.
- **Test Results** (`test_results`, `text`, optional): Enter any relevant test results or findings.
- **Physician Notes** (`physician_notes`, `text`, optional): Add any notes or comments from the referring physician.
- **Physician Signature** (`physician_signature`, `select_one`, optional): Sign and date the form by selecting "Yes" and entering the current date and time.
- **Date** (`date`, `date`, optional): Enter the date of referral.
- **Time** (`time`, `time`, optional): Enter the time of referral.
- **Assigned Tool** (`assigned_tool`, `select_one`, optional): If referring a patient to a specialist, select "Yes" and enter the name of the tool or service.
- **Other** (`assigned_tool_other`, `text`, optional): If referring to a different service, select "Other" and enter the name of the service.
- **Submitted By** (`submitted_by`, `select_one`, optional): Select "Yes" if the form is submitted by a physician. If not submitted by a physician, select "Other" and enter the name of the person or service submitting the form.

## Tips
- Be sure to complete all required fields.
- Check the "Test Requests" page carefully to ensure all necessary tests are included.
- If you are unsure about any field, please contact the specialist or department receiving the referral for guidance.
- Use the correct format for dates and times.

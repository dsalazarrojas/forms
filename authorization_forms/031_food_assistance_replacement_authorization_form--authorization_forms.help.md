# Food Assistance Replacement Authorization Form - Help Guide
## Purpose
This form is designed to verify the authenticity of applicants' information for the Food Assistance program. It collects the applicant's SNAP number, reason for loss, signature, date, time, and verification of these critical details. The form helps food assistance program administrators to ensure that the information provided by applicants is genuine and accurate.

## How To Complete This Form

To complete this form, follow these steps:

1. **Fill in the form title**: Enter a brief description of the reason for the form, such as "Food Assistance Replacement Authorization Form".
2. **Enter applicant information**: Provide the applicant's details in the "Applicant Information" field.
3. **Enter SNAP number**: Type in the applicant's SNAP number in the "SNAP Number" field.
4. **Reason for loss**: Explain the reason for the loss of the SNAP benefits in the "Reason for Loss" field.
5. **Signature**: Type in the applicant's signature in the "Signature" field.
6. **Date and Time**: Select the date and time of the form completion using the "Date" and "Time" fields.
7. **Verify SNAP Number**: Confirm that the SNAP number entered is valid (not duplicate).
8. **Verify Signature**: Confirm that the signature is valid (not duplicate).
9. **Verify Date**: Confirm that the date entered is valid (not duplicate).

## Field-by-Field Explanation

### Form Title
* **Form Title** (`Form Title`, text, required: false): Enter a brief description of the form, such as "Food Assistance Replacement Authorization Form".

### Applicant Information
* **Applicant Information** (`applicant_info`, text, required: false): Enter the applicant's details, such as name and contact information.

### SNAP Number
* **SNAP Number** (`snap_number`, text, required: false): Type in the applicant's SNAP number for verification purposes.

### Reason for Loss
* **Reason for Loss** (`reason_for_loss`, text, required: false): Explain the reason for the loss of the SNAP benefits.

### Signature
* **Signature** (`signature`, text, required: false): Type in the applicant's signature for verification.

### Date
* **Date** (`form_date`, date, required: false): Select the date of the form completion.

### Time
* **Time** (`form_time`, time, required: false): Select the time of the form completion.

### Verify SNAP Number
* **Verify SNAP Number** (`snap_number_verification`, select_one, required: false):
  + Choose "valid" if the SNAP number is correct and not a duplicate.
  + Choose "invalid" if the SNAP number is incorrect or a duplicate.

### Verify Signature
* **Verify Signature** (`signature_verification`, select_one, required: false):
  + Choose "valid" if the signature is correct and not a duplicate.
  + Choose "invalid" if the signature is incorrect or a duplicate.

### Verify Date
* **Verify Date** (`date_verification`, select_one, required: false):
  + Choose "valid" if the date is correct and not a duplicate.
  + Choose "invalid" if the date is incorrect or a duplicate.

## Tips

* Ensure that all required fields are filled in accurately to ensure the form's purpose is met.
* Be cautious when confirming the verification fields, as incorrect entries can lead to form rejection or further verification processes.
* Review the form's purpose and content regularly to stay up-to-date with any changes.

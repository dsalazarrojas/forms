# Medical Treatment Claim Form - Help Guide
## Purpose
The Medical Treatment Claim Form is designed to collect information about a patient's medical treatment and claim details. This form helps in ensuring that all necessary information is provided accurately and efficiently for claim processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient information (page 1) by providing your name, address, phone number, and email address.
2. List your medical conditions (page 2) by selecting all the relevant conditions from the provided options.
3. Describe your treatment plan (page 3) in the text field provided.
4. Enter your doctor's information (page 4) including their name, specialty, and contact number.
5. Provide claim details (page 5) including any additional information related to your claim.
6. Select the type of medical treatment you received (page 6) from the provided options.
7. Enter your insurance information (page 7) including your insurance provider and policy number.
8. Check your claim status (page 8) by selecting the relevant status from the provided options.
9. Specify your relationship with the patient (page 9) by selecting the correct option.
10. Sign and date the form (page 10) to confirm your claim.

## Field-by-Field Explanation
### Patient Information
* **Patient Name** (`name`, `text`, required): Enter your full name as it appears on your identification.
* **Address** (`address`, `text`, required): Provide your current address.
* **Phone** (`phone`, `text`, required): Enter your phone number.
* **Email** (`email`, `email`, required): Enter your email address.

### Medical Conditions
* **Medical Conditions** (`medical_conditions`, `select_multiple`, required): Select all the medical conditions you are experiencing.

### Treatment Plan
* **Treatment Plan** (`treatment_plan`, `note`, required): Describe your treatment plan in the text area provided.

### Doctor Information
* **Doctor's Name** (`doctor_info`, `text`, required): Enter your doctor's name.
* **Specialty** (`doctor_info`, `text`, required): Enter your doctor's specialty.
* **Contact Number** (`doctor_info`, `text`, required): Enter your doctor's contact number.

### Claim Details
* **Claim Details** (`claim_details`, `text`, required): Enter any additional information related to your claim.

### Medical Treatment
* **Medical Treatment** (`medical_treatment`, `select_one`, required): Select the type of medical treatment you received.

### Insurance Information
* **Insurance Information** (`insurance_info`, `text`, required): Enter your insurance provider and policy number.

### Claim Status
* **Claim Status** (`claim_status`, `select_one`, required): Check your claim status.

### Patient Relationship
* **Patient Relationship** (`patient_relationship`, `select_multiple`, required): Select your relationship with the patient.

### Claimant Signature
* **Claimant Signature** (`claimant_signature`, `text`, required): Sign and date the form to confirm your claim.

### Doctor Signature
* **Doctor Signature** (`doctor_signature`, `text`, required): Sign and date the form to confirm your claim.

### Upload File
* **Upload File** (`upload_file`, `text`, required): Upload any supporting documents required for your claim.

### File Type
* **File Type** (`file_type`, `select_one`, required): Select the type of file you are uploading.

### File Name
* **File Name** (`file_name`, `text`, required): Enter the name of the file you are uploading.

### File Size
* **File Size** (`file_size`, `number`, required): Enter the size of the file you are uploading.

### Upload Date
* **Upload Date** (`upload_date`, `date`, required): Enter the date you uploaded the file.

### Upload Time
* **Upload Time** (`upload_time`, `time`, required): Enter the time you uploaded the file.

### Upload User
* **Uploaded By** (`upload_user`, `text`, required): Enter your name.

### Upload Status
* **Upload Status** (`upload_status`, `select_one`, required): Check the status of your upload.

### Note
* **Note** (`note`, `note`, required): Enter any additional comments or notes related to your claim.

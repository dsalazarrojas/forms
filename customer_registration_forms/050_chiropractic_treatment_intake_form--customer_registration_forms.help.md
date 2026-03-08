# Chiropractic Treatment Intake Form - Help Guide
## Purpose
The Chiropractic Treatment Intake Form is designed to collect essential information from patients about their medical history, contact details, and consent to treatment. This information is crucial for providing effective and safe chiropractic care.

## How To Complete This Form
- **Read the form carefully**: Before starting, review each field and its corresponding label to understand what information is required.
- **Provide accurate information**: Ensure that you enter accurate and complete information for each field.
- **Ask for clarification if unsure**: If you are unsure about any information, don't hesitate to ask the patient for clarification.

## Field-by-Field Explanation

### 1. **Patient Full Name**
* **Patient Full Name** (`patient_full_name`, `text`, **required**): Enter the patient's full legal name as it appears on their official documents.

### 2. **Date of Birth**
* **Date of Birth** (`date_of_birth`, `date`, **required**): Enter the patient's date of birth in the correct format (MM/DD/YY).

### 3. **Contact Phone**
* **Contact Phone** (`contact_phone`, `text`, **required**): Enter the patient's phone number for appointment updates and communication.

### 4. **Contact Email**
* **Contact Email** (`contact_email`, `email`, **required**): Enter the patient's email address for communication purposes.

### 5. **Chief Complaint**
* **Chief Complaint** (`chief_complaint`, `text`, **required**): Describe the main reason the patient is seeking chiropractic care.

### 6. **Symptom Duration**
* **Symptom Duration** (`symptom_duration`, `text`, **optional**): Enter the duration of the patient's symptoms.

### 7. **Pain Severity**
* **Pain Severity** (`pain_severity`, `number`, **optional**): Rate the patient's pain on a 0 to 10 scale, where 0 is no pain and 10 is severe pain.

### 8. **Relevant Medical History**
* **Relevant Medical History** (`relevant_history`, `text`, **optional**): List any past medical conditions or surgeries that may affect the patient's care.

### 9. **Current Medications**
* **Current Medications** (`current_medications`, `text`, **optional**): List any current medications and their dosages.

### 10. **Emergency Contact Name and Phone**
* **Emergency Contact Name and Phone** (`emergency_contact`, `text`, **required**): Enter the emergency contact's name and phone number for urgent situations.

### 11. **Consent to Treatment**
* **Consent to Treatment** (`consent_treatment`, `select_one`, **required**): Confirm that the patient understands and consents to chiropractic care.

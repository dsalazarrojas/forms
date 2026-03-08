# medical_questionnaire - Help Guide
## Purpose
The medical questionnaire form is used to collect detailed medical history, health status, and medical certificate information from patients or clients. This form is designed to be completed by the individual themselves, providing accurate and comprehensive information for healthcare professionals.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the relevant fields with accurate and up-to-date information.
2. Ensure you answer all required questions truthfully.
3. If you are unsure about any question, please consult with a healthcare professional.

## Field-by-Field Explanation
### 1. Client Information (<name>, <type>: <text>)
Enter your name and other relevant information.

* **Client Info** (`client_info`, `text`, required: false): 
This field is designed for general contact information.

### 2. Health Assessment (<label>, <type>: <text>)
Describe your current health status in detail.

* **Health Assessment** (`health_assessment`, `text`, required: false): 
Please provide a comprehensive description of your current health status.

### 3. Medical History (<label>, <type>: <text>)
Enter any relevant medical history or previous conditions.

* **Medical History** (`medical_history`, `text`, required: false): 
This field is designed to capture any significant medical history or previous conditions.

### 4. Medical Questionnaire (<label>, <type>: <text>)
Describe any specific medical question or concern you may have.

* **Medical Questionnaire** (`medical_questionnaire`, `text`, required: false): 
Please enter any specific medical question or concern you may have.

### 5. Health Status (<label>, <type>: Select multiple)
Select the current status of your health.

* **Health Status** (`health_status`, `select_multiple`, required: false): 
Select from the list to describe your current health status.

### 6. Medical Certificate (<label>, <type>: Select one)
Select whether you have a medical certificate or not.

* **Medical Certificate** (`medical_certificate`, `select_one`, required: false): 
Please select whether you have a medical certificate or not.

### 7. Medical Certificate Type (<label>, <type>: Select one)
If you have a medical certificate, please select the type.

* **Medical Certificate Type** (`medical_certificate_type`, `select_one`, required: false): 
Select the type of medical certificate you have.

### 8. Medical Certificate Date (<label>, <type>: Date)
Enter the date of your medical certificate, if applicable.

* **Medical Certificate Date** (`medical_certificate_date`, `date`, required: false): 
Please enter the date of your medical certificate, if applicable.

### 9. Medical Certificate Time (<label>, <type>: Time)
Enter the time of your medical certificate, if applicable.

* **Medical Certificate Time** (`medical_certificate_time`, `time`, required: false): 
Please enter the time of your medical certificate, if applicable.

### 10-23. Medical Certificate Notes (<label>, <type>: Note)
Enter any notes related to your medical certificate.

* **Medical Certificate Note** (`medical_certificate_note`, `note`, required: false): 
Please enter any notes related to your medical certificate.

### 24. Medical Certificate Phone Number (<label>, <type>: Text)
Enter the phone number of your medical certificate.

* **Medical Certificate Phone** (`medical_certificate_phone`, `text`, required: false): 
Please enter the phone number of your medical certificate.

### 25. Medical Certificate File (<label>, <type>: Text)
Enter the file associated with your medical certificate.

* **Medical Certificate File** (`medical_certificate_file`, `text`, required: false): 
Please enter the file associated with your medical certificate.

## Tips
Please ensure you complete this form accurately and truthfully. If you are unsure about any question, please consult with a healthcare professional.

# Hospital Complaint Form - Help Guide
## Purpose
This form is designed to collect your feedback about your recent experience within our hospital. It will help us to identify areas for improvement and ensure that we provide the best possible care for our patients.

## How To Complete This Form
- Please fill out the form in the spaces provided, one page at a time.
- Make sure to provide accurate and detailed information about your complaint.
- If you have a complaint, you can describe it in the free-text area provided (Complaint Description, Issue Details).
- Select your preferred contact method (Phone, Email, or Mail) and the department where the issue occurred (Outpatient, Inpatient, Emergency, or Pharmacy).
- If you have any specific dates or times related to your complaint, please provide them in the correct format (Issue Date, Issue Time).
- Select the resolution of your complaint (Solved, Unresolved, or Escalated to Manager).

## Field-by-Field Explanation
- **1. Patient Information** (`patient_info`, `text`, required: false): Please provide your personal details for us to address you properly.
- **2. Describe Your Complaint** (`complaint_description`, `text`, required: false): Please describe your complaint in detail, including any relevant dates and times.
- **3. Contact Information** (`contact_info`, `text`, required: false): Provide your contact details so we can follow up with you.
- **4. How Do You Prefer to Be Contacted** (`preferred_contact_method`, `select_multiple`, required: false): Select how you prefer to be contacted (Phone, Email, or Mail).
- **5. Location** (`hospital_location`, `select_one`, required: false): Choose the department where the issue occurred (Outpatient, Inpatient, Emergency, or Pharmacy).
- **6. Issue Date** (`issue_date`, `date`, required: false): Enter the date of the issue in the correct format (YYYY-MM-DD).
- **7. Issue Time** (`issue_time`, `time`, required: false): Enter the time of the issue in the correct format (HH:MM).
- **8. Issue Details** (`issue_details`, `text`, required: false): Provide any additional information about your issue.
- **9. Resolution** (`complaint_resolution`, `select_one`, required: false): Select the status of your complaint (Solved, Unresolved, or Escalated to Manager).
- **10. Patient Signature** (`patient_signature`, `text`, required: false): Please sign your name to confirm that the information provided is accurate.
- **11. Hospital Signature** (`hospital_signature`, `text`, required: false): Our staff will sign to confirm that we received your complaint.
- **12. Patient Name** (`patient_name`, `text`, required: false): Please enter your name.

## Tips
- Be as detailed as possible when describing your complaint.
- If you're unsure about any field, please ask our staff for assistance.
- We'll follow up with you according to your preferred contact method.
- If you have any further concerns or issues, don't hesitate to reach out.

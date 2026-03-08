# Hospital Visitation Form - Help Guide
## Purpose
The Hospital Visitation Form is a tool used by hospital staff to track and manage visitor information for patient care and security purposes.

## How To Complete This Form
To complete the form, please follow these steps:
1. Ensure you have all the required information, including contact phone numbers and email addresses.
2. Fill out the form with accurate and complete information.
3. Check the correct visit frequency and reason for visiting.
4. Sign the form to confirm that the information provided is accurate.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, Optional): Enter the patient's name as it appears on their records.
* **Visitor Name** (`visitor_name`, text, Optional): Enter the visitor's name.
* **Contact Phone** (`contact_phone`, text, Optional): Enter the visitor's contact phone number.
* **Date** (`date`, date, Optional): Enter the date of the visit.
* **Time** (`time`, time, Optional): Enter the visit start and end times.
* **Relation** (`relation`, text, Optional): Specify the visitor's relation to the patient (e.g., family member, friend).
* **Contact Email** (`contact_email`, email, Optional): Enter the visitor's email address.
* **Contact Number** (`contact_number`, text, Optional): Enter the visitor's contact number.
* **Visitor Type** (`visitor_type`, select_one, Optional): Select the type of visitor (Visitor, Family, Friend, Other).
* **Visit Frequency** (`visit_frequency`, select_multiple, Required): Select the frequency of the visit (Daily, Weekly, Monthly, Yearly).
* **Patient ID** (`patient_id`, text, Optional): Enter the patient's ID number.
* **Name on File** (`patient_name`, text, Optional): Enter the name of the patient as it appears on their records.
* **Signature** (`signature`, note, Optional): Provide a signature to confirm that the information provided is accurate.
* **Visitor Signature** (`visitor_signature`, note, Optional): Provide a signature from the visitor.
* **Visitor Photo ID** (`visitor_photo_id`, text, Optional): Enter the visitor's photo ID number.
* **Visitor's Photo Front** (`visitor_photo_front`, note, Optional): Enter a description of the visitor's photo front side.
* **Visitor's Photo Back** (`visitor_photo_back`, note, Optional): Enter a description of the visitor's photo back side.
* **Photo Taken** (`photo_taken`, date, Optional): Enter the date when the photo was taken.
* **Visit Start Time** (`visit_start_time`, time, Optional): Enter the visit start time.
* **Visit End Time** (`visit_end_time`, time, Optional): Enter the visit end time.
* **Visitor Notes** (`visitor_notes`, note, Optional): Provide notes about the visitor.
* **Patient Notes** (`patient_notes`, note, Optional): Provide notes about the patient.
* **Visit Reason** (`visit_reason`, text, Optional): Enter the reason for the visit.
* **Visit Type** (`visit_type`, select_multiple, Required): Select the type of visit (Emergency Visit, Non-Emergency Visit).
* **Visit Frequency** (`visit_frequency`, text, Optional): Enter the frequency of the visit.

**Important:** Ensure all required fields are completed accurately to ensure efficient management of visitor data.

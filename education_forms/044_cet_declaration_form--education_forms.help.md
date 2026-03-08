# CET Candidate Declaration Form - Help Guide
## Purpose
The Common Entrance Test (CET) Candidate Declaration Form is a mandatory form that candidates must complete before entering the examination hall. It is designed to ensure a smooth and secure examination experience by verifying the candidate's details and adherence to the examination rules.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in your full name, examination roll number, examination center code, and date of examination on pages 2-5.
2.  Choose your subject stream (Engineering, Medical, Humanities, or Commerce) on page 6.
3.  Confirm that you agree to abide by all the rules and regulations of the CET on page 7.
4.  Declare that you are not carrying any prohibited electronic devices on page 8.
5.  Report any health issues or symptoms you are experiencing on page 9.
6.  Sign your full name digitally on page 10.
7.  If you are a minor, obtain parent/guardian consent on page 11.
8.  Confirm that you have brought your original government ID on page 12.
9.  Enter your application portal username on page 13.
10. Fill in the submission timestamp on page 14.
11. Finally, read and acknowledge the final notice on page 15.

## Field-by-Field Explanation

* **Candidate Full Name (Page 2)** (`candidate_full_name_cet`, text, required)
    This field is for your full name as it appears on your identity document. Please enter your name in the format 'First Name Last Name' with no abbreviations.
* **Examination Roll Number (Page 3)** (`cet_roll_number`, text, required)
    Enter your examination roll number as given on your admit card.
* **Examination Center Code (Page 4)** (`exam_center_code_cet`, text, required)
    Enter the code of the examination center where you are sitting for the exam.
* **Date of Examination (Page 5)** (`exam_date_cet`, date, required)
    Enter the date of the examination in the format 'YYYY-MM-DD'.
* **Subject Stream (Page 6)** (`cet_subject_stream`, select_one, required)
    Select the subject stream you are appearing for (Engineering, Medical, Humanities, or Commerce).
* **I Agree to Abide by Rules and Regulations (Page 7)** (`conduct_agreement_cet`, select_one, required)
    Confirm that you agree to abide by all the rules and regulations of the CET by selecting 'I Agree'.
* **I Certify No Prohibited Devices (Page 8)** (`prohibited_items_ack`, select_one, required)
    Declare that you are not carrying any prohibited electronic devices such as mobile phones, smartwatches, or calculators by selecting 'I Certify'.
* **Health Declaration (Page 9)** (`health_declaration_cet`, select_one, required)
    Report any fever or respiratory symptoms you are experiencing by selecting 'True' if you are unwell or 'False' if healthy.
* **Digital Signature (Page 10)** (`candidate_signature_text`, text, required)
    Sign your full name digitally by typing it in this field.
* **Parent/Guardian Consent (Page 11)** (`parent_guardian_consent_cet`, text, optional)
    If you are a minor, obtain consent from your parent or guardian by entering their name and signature.
* **Original Government ID (Page 12)** (`identity_verification_check`, select_one, required)
    Confirm that you have brought your original government ID by selecting 'True'.
* **Application Portal Username (Page 13)** (`cet_portal_username`, text, required)
    Enter your application portal username for record matching purposes.
* **Submission Timestamp (Page 14)** (`cet_declaration_timestamp`, date, required)
    Fill in the submission timestamp of this form in the format 'YYYY-MM-DD'.
* **Final Notice (Page 15)** (`cet_final_notice`, note, required)
    Acknowledge the final notice by reading it carefully and confirming that you understand its implications.

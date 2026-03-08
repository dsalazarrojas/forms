# COVID 19 Test Result Reporting Form - Help Guide
## Purpose
This form is used to report the results of a COVID-19 test, including personal information, test details, and contact tracing data. It is essential to complete this form accurately and truthfully to ensure proper handling and tracking of test results.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your personal information, including your full name, date of birth, email address, phone number, and employee/student ID number (if applicable).
2. Fill in the test details, such as the test date, type of test performed, and the testing facility's name and address.
3. Report your test result, including whether you experienced symptoms at the time of the test and whether you have notified your close contacts.
4. If applicable, provide additional information, such as the number of household members and any symptoms you experienced.

## Field-by-Field Explanation
* **Full Name** (`full_name`, text, required): Enter your complete legal name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM-DD-YYYY.
* **Email Address** (`email_address`, email, required): Enter your primary email address for test result notifications.
* **Phone Number** (`phone_number`, text, required): Enter your contact number for test result follow-up.
* **Employee or Student ID Number** (`employee_student_id`, text, optional): If you are an employee or student, enter your organizational identification number.
* **Test Date** (`test_date`, date, required): Enter the date when the COVID-19 test was administered.
* **Type of Test Performed** (`test_type`, select_one, required): Select the type of test you underwent (Rapid Antigen Test, PCR Molecular Test, Antibody Test, At-Home Test, or Other).
* **Testing Facility Name** (`testing_facility`, text, required): Enter the name of the clinic, hospital, or facility where you were tested.
* **Testing Facility Address** (`facility_address`, text, optional): Enter the street address of the testing location.
* **Test Result** (`test_result`, select_one, required): Report your test result (Positive, Negative, Inconclusive, or Pending).
* **Result Date** (`result_date`, date, required): Enter the date when the test result was reported.
* **Were You Experiencing COVID-19 Symptoms at Time of Test** (`symptoms_present`, select_one, required): Select whether you had symptoms when tested (True, False, or Unsure).
* **Symptoms Experienced** (`symptoms_list`, select_multiple, optional): If applicable, select any symptoms you experienced (Fever or Chills, Cough, Shortness of Breath, Loss of Taste or Smell, Fatigue or Body Aches, Headache, Congestion or Runny Nose, Nausea or Vomiting, Diarrhea).
* **Upload Test Result Document** (`result_document_upload`, text, optional): Attach a copy of your test result or test documentation if applicable.
* **Close Contacts** (`close_contacts_count`, number, optional): If applicable, enter the number of people you had close contact with.
* **Number of Household Members** (`household_members_count`, number, optional): If applicable, enter the number of people living in your household.
* **Have You Notified Your Close Contacts** (`notify_close_contacts`, select_one, optional): Select whether you have informed exposed individuals (True, False, or In Progress).
* **Additional Medical Notes** (`medical_notes`, text, optional): Provide any relevant medical information or concerns.

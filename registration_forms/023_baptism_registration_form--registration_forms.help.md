# Baptism Registration Form - Help Guide
## Purpose
The Baptism Registration Form is a crucial document that collects essential information for the baptism process. It helps the baptism team to schedule and prepare for the baptism ceremony.

## How To Complete This Form
To fill out the form, follow these steps:

1.  Enter the registration date in the format of MM/DD/YYYY.
2.  Provide the first name and last name of the candidate being baptized.
3.  Enter the candidate's date of birth (if an adult, this field is optional).
4.  If the candidate is an adult, enter their email address and phone number for contact purposes.
5.  If the candidate is a minor, enter the name of the parent or guardian.
6.  Enter the email address and phone number of the parent or guardian (if applicable).
7.  Choose the type of baptism (e.g., Infant Baptism, Adult Baptism, etc.).
8.  Select the parish or church affiliation.
9.  Confirm whether you have completed the required religious instruction.
10. Enter the name of the godparent or sponsor.
11. Enter the email address of the godparent or sponsor (if applicable).
12. Select the preferred baptism location and time.
13. Enter the anticipated number of guests.
14. If necessary, add any special requests or considerations.
15. Finally, confirm that the information provided is accurate.

## Field-by-Field Explanation
### 1. Registration Date
*   **Registration Date** (`registration_date`, `date`, required): Enter the date of registration in the MM/DD/YYYY format.

### 2. Candidate Information
*   **Candidate First Name** (`candidate_first_name`, `text`, required): Enter the first name of the person being baptized.
*   **Candidate Last Name** (`candidate_last_name`, `text`, required): Enter the last name of the person being baptized.

### 3. Candidate Information (Continued)
*   **Date of Birth** (`candidate_dob`, `date`, required for adults, optional for infants/children): Enter the date of birth of the person being baptized.

### 4. Candidate Contact Information (if applicable)
*   **Email Address** (`candidate_email`, `email`, optional): Enter the email address of the person being baptized.
*   **Phone Number** (`candidate_phone`, `text`, optional): Enter the phone number of the person being baptized.

### 5. Parent or Guardian Information (if applicable)
*   **Parent or Guardian Name** (`parent_guardian_name`, `text`, optional): Enter the name of the parent or guardian.
*   **Parent or Guardian Email** (`parent_email`, `email`, optional): Enter the email address of the parent or guardian.
*   **Parent or Guardian Phone** (`parent_phone`, `text`, optional): Enter the phone number of the parent or guardian.

### 6. Baptism Details
*   **Type of Baptism** (`baptism_type`, `select_one`, required): Select the type of baptism (e.g., Infant Baptism, Adult Baptism, etc.).
*   **Parish or Church Affiliation** (`parish_affiliation`, `text`, required): Select the parish or church affiliation.
*   **Religious Instruction Completed** (`religious_instruction_completed`, `select_one`, required): Confirm whether you have completed the required religious instruction.

### 7. Baptism Sponsors
*   **Godparent/Sponsor Name** (`sponsor_name`, `text`, required): Enter the name of the primary sponsor.
*   **Sponsor Email** (`sponsor_email`, `email`, optional): Enter the email address of the sponsor.
*   **Sponsor's Parish** (`sponsor_parish`, `text`, optional): Enter the parish affiliation of the sponsor.
*   **Alternate Sponsor Name** (`alternate_sponsor_name`, `text`, optional): Enter the name of the alternate sponsor (if applicable).

### 8. Preferred Baptism Details
*   **Preferred Baptism Date** (`preferred_date`, `date`, required): Enter the preferred date for the baptism ceremony.
*   **Preferred Time** (`preferred_time`, `select_one`, optional): Select the preferred time for the baptism ceremony (e.g., Sunday Morning Mass, etc.).
*   **Baptism Location Preference** (`baptism_location`, `select_one`, optional): Select the preferred location for the baptism ceremony (e.g., Main Church Sanctuary, etc.).
*   **Anticipated Number of Guests** (`guest_anticipated`, `number`, optional): Enter the anticipated number of guests.
*   **Special Requests or Considerations** (`special_requests`, `text`, optional): Enter any special requests or considerations.

### 9. Confirmation
*   **I Confirm the Information Provided is Accurate** (`confirmation_agreement`, `select_one`, required): Confirm that the information provided is accurate.

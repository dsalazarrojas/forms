# Health Insurance Records Release Form - Help Guide
## Purpose
The Health Insurance Records Release Form is used to collect personal and sensitive information from patients, including their medical history. The purpose of this form is to ensure that the patient understands what information will be released, to whom it will be released, and for how long.

## How To Complete This Form
1.  The form is divided into multiple pages. Please answer each page as instructed.
2.  The form requires your personal details such as your name, date of birth and signature.
3.  Please select the authorized parties that can access your health insurance records.
4.  Specify the reason for the record release.
5.  Choose the type of record release you prefer.
6.  Select how long you want the record release to be valid for.
7.  Sign the form to confirm your agreement.

## Field-by-Field Explanation
*   **patient_name** (`patient_name`, Text, Optional): Enter your full name as it appears on your insurance records.
*   **date_of_birth** (`date_of_birth`, Date, Optional): Enter your date of birth in the correct format (month/day/year).
*   **release_reason** (`release_reason`, Text, Optional): Specify the reason for the record release (e.g., for medical treatment, insurance purposes, etc.).
*   **authorized_party** (`authorized_party`, Multi-select, Optional): Select all parties that can access your health insurance records (e.g., Healthcare Provider, Insurance Company, Legal Representative).
*   **other_authorized_party** (`other_authorized_party`, Text, Optional): Enter other authorized parties that can access your health insurance records not listed in the options.
*   **release_type** (`release_type`, Single-select, Optional): Choose the type of record release (Full, Partial, Limited).
*   **release_duration** (`release_duration`, Multi-select, Optional): Select how long you want the record release to be valid for (e.g., Month, Year, Lifetime).
*   **authorized_signature** (`authorized_signature`, Text, Optional): Enter the signature of the authorized party.
*   **patient_signature** (`patient_signature`, Text, Optional): Enter your signature as proof of consent.
*   **date** (`date`, Date, Optional): Enter the date of the record release.
*   **time** (`time`, Time, Optional): Enter the time of the record release.
*   **page_3** (`page_3`, Select, Optional): Answer "Yes" or "No" if you allow the authorized parties to have access to your medical history.
*   **page_4-15** (`page_4-15`, Text, Optional): Enter any additional comments or information regarding your medical history.

Please note that the fields with an optional label can be skipped.

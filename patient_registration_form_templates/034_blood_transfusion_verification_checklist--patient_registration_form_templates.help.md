# Blood Transfusion Verification Checklist - Help Guide
## Purpose
This form is used to verify the accuracy of patient information and transfusion procedures for a blood transfusion.

## How To Complete This Form
1. Select the "Patient Name" field and enter the patient's full name.
2. Enter the patient's "Patient ID/Medical Record Number" in the field provided.
3. Enter the patient's date of birth.
4. Select the "Verification Date" from the calendar.
5. Select the "Verification Time" from the clock.
6. Answer the following questions:
* If the patient has verbally confirmed their identity, select "Yes".
* If the patient's ID band matches their medical record, select "Yes".
* If the patient's documented blood type on file matches the unit's blood type, select "Yes".
* If the transfusion order has been reviewed and is correct, select "Yes".
* If the unit's identification matches the patient's record, select "Yes".
* If the unit's blood type matches the patient's blood type, select "Yes".
* If the crossmatch label matches the unit and patient, select "Yes".
* If the unit's appearance is checked (no clots, discoloration), select "Yes".
* If the unit's expiration date is checked and is valid, select "Yes".
7. Enter the name of the person initiating the transfusion.
8. Enter the name of the healthcare provider who witnessed the verification process.
9. Enter any additional notes or concerns.
10. Select "Yes - safe to proceed" if all steps have been completed, or "No - transfusion deferred" if any steps have not been completed.

## Field-by-Field Explanation
* **Patient Name** (`Patient Name`, text, required): Enter the patient's full name.
* **Patient ID/Medical Record Number** (`Patient ID/Medical Record Number`, text, required): Enter the patient's ID or medical record number.
* **Date of Birth** (`Date of Birth`, date, required): Enter the patient's date of birth.
* **Verification Date** (`Verification Date`, date, required): Select the date of the verification process.
* **Verification Time** (`Verification Time`, time, required): Select the time of the verification process.
* **Patient verbally confirmed identity** (`Patient verbally confirmed identity`, select_one, required): If the patient has verbally confirmed their identity, select "Yes".
* **Patient ID band matches medical record** (`Patient ID band matches medical record`, select_one, required): If the patient's ID band matches their medical record, select "Yes".
* **Patient's documented blood type on file** (`Patient's documented blood type on file`, select_one, required): If the patient's documented blood type on file matches the unit's blood type, select "Yes".
* **Transfusion order reviewed and correct** (`Transfusion order reviewed and correct`, select_one, required): If the transfusion order has been reviewed and is correct, select "Yes".
* **Blood unit identification matches patient record** (`Blood unit identification matches patient record`, select_one, required): If the unit's identification matches the patient's record, select "Yes".
* **Unit blood type matches patient blood type** (`Unit blood type matches patient blood type`, select_one, required): If the unit's blood type matches the patient's blood type, select "Yes".
* **Crossmatch label matches unit and patient** (`Crossmatch label matches unit and patient`, select_one, required): If the crossmatch label matches the unit and patient, select "Yes".
* **Unit appearance checked (no clots, discoloration)** (`Unit appearance checked (no clots, discoloration)`, select_one, required): If the unit's appearance is checked (no clots, discoloration), select "Yes".
* **Unit expiration date checked** (`Unit expiration date checked`, select_one, required): If the unit's expiration date is checked and is valid, select "Yes".
* **Name of Person Initiating Transfusion** (`Name of Person Initiating Transfusion`, text, required): Enter the name of the person initiating the transfusion.
* **Witnessed/Verified By** (`Witnessed/Verified By`, text, required): Enter the name of the healthcare provider who witnessed the verification process.
* **Additional Notes or Concerns** (`Additional Notes or Concerns`, text, optional): Enter any additional notes or concerns.
* **Verification checklist complete** (`Verification checklist complete`, select_one, required): If all steps have been completed, select "Yes - safe to proceed", otherwise select "No - transfusion deferred".

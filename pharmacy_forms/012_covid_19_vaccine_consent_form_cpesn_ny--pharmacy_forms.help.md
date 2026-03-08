# COVID 19 Vaccine Consent Form CPESN NY - Help Guide
## Purpose
This form is intended to gather patient information, vaccine details, and consent for COVID-19 vaccine administration.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal information:
   * Enter your first name in the "First Name" field.
   * Enter your last name in the "Last Name" field.
   * Enter your date of birth in the "Date of Birth" field in MM-DD-YYYY format.
   * Select your gender from the options provided in the "Gender" field.
   * Enter your phone number in the "Phone Number" field.
   * Enter your email address in the "Email Address" field (optional).

2. Provide pharmacy information:
   * Enter the name of the pharmacy administering the vaccine in the "Pharmacy Name" field.
   * Enter the NYS pharmacy license number (if applicable) in the "Pharmacy License Number" field.
   * Enter the name of the pharmacist administering the vaccine in the "Pharmacist Name" field.

3. Provide vaccination details:
   * Select the type of COVID-19 vaccine administered from the options provided in the "Vaccine Product Administered" field.
   * Select the dose number of the vaccine administered from the options provided in the "Dose Number" field.
   * Enter the date of vaccination in the "Date of Vaccination" field in MM-DD-YYYY format.
   * Enter the lot number from the vaccine vial, if applicable, in the "Lot Number" field.

4. Confirm consent and authorization:
   * Select "I have reviewed" to confirm you have received and reviewed vaccine information.
   * Select "I understand" to confirm you understand the benefits and risks of the vaccine.
   * Select "I authorize" to confirm you authorize the administration of the vaccine.

5. Provide medical information:
   * List any known allergies to vaccine components in the "Known Allergies to Vaccine Components" field.
   * List any current medications you are taking in the "Current Medications" field.
   * Describe your recent vaccination history in the "Recent Vaccination History" field.

6. Acknowledge the accuracy of the information:
   * Select "I acknowledge" to confirm that all provided information is accurate.

## Field-by-Field Explanation

* **First Name** (`patient_first_name`, text, required): Enter your first name.
* **Last Name** (`patient_last_name`, text, required): Enter your last name.
* **Date of Birth** (`patient_dob`, date, required): Enter your date of birth in MM-DD-YYYY format.
* **Gender** (`patient_gender`, select_one, required): Select your gender from the options provided.
* **Phone Number** (`patient_phone_ny`, text, required): Enter your phone number.
* **Email Address** (`patient_email_ny`, email, optional): Enter your email address.
* **Pharmacy Name** (`pharmacy_name`, text, required): Enter the name of the pharmacy administering the vaccine.
* **Pharmacist Name** (`pharmacist_name`, text, required): Enter the name of the pharmacist administering the vaccine.
* **Vaccine Product Administered** (`vaccine_product_ny`, select_one, required): Select the type of COVID-19 vaccine administered.
* **Dose Number** (`dose_number_ny`, select_one, required): Select the dose number of the vaccine administered.
* **Date of Vaccination** (`vaccine_date_ny`, date, required): Enter the date of vaccination in MM-DD-YYYY format.
* **Lot Number** (`lot_number`, text, optional): Enter the lot number from the vaccine vial, if applicable.
* **I Have Received and Reviewed Vaccine Information** (`receipt_vaccine_info`, select_one, required): Select "I have reviewed" to confirm you have received and reviewed vaccine information.
* **I Understand the Benefits and Risks** (`understand_benefits_risks`, select_one, required): Select "I understand" to confirm you understand the benefits and risks of the vaccine.
* **I Authorize Administration of the COVID-19 Vaccine** (`authorize_administration`, select_one, required): Select "I authorize" to confirm you authorize the administration of the vaccine.
* **Known Allergies to Vaccine Components** (`known_allergies_ny`, text, optional): List any known allergies to vaccine components.
* **Current Medications** (`current_medications_ny`, text, optional): List any current medications you are taking.
* **Recent Vaccination History** (`recent_vaccination_history`, text, optional): Describe your recent vaccination history.
* **I Acknowledge the Information is Accurate** (`acknowledgment_ny`, select_one, required): Select "I acknowledge" to confirm that all provided information is accurate.

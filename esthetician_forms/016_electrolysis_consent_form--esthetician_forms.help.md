# ElectrolysisConsentForm - Help Guide
## Purpose
The ElectrolysisConsentForm is a form designed to collect the user's information, medical history, and the clinic's information for the purpose of electrolysis treatment. This form is required for the treatment process and must be completed accurately and thoroughly.

## How To Complete This Form
- Read the form carefully and ensure that all required fields are completed accurately.
- Complete the User Information section with your personal details.
- Provide a clear and concise medical history in the Electrolisis History section.
- Fill out the Consent Form section with your signature and date.
- Enter the clinic's contact information in the Clinic Information section.
- Enter the medical professional's information in the Medical Professional section.

## Field-by-Field Explanation
* **User Information (user_info)** (`text`, required: false): This field is used to collect the user's personal information.
* **Contact Information (contact_info)** (`text`, required: false): This field is used to collect the user's contact information.
* **Electrolisis History (electrolysis_history)** (`text`, required: false): This field is used to collect the user's medical history relevant to the electrolysis treatment.
* **Consent Form (consent_form)** (`text`, required: false): This field is used to collect the user's consent for the treatment.
* **Date (consent_date)** (`date`, required: true): This field is used to record the date of the user's consent.
* **Sign Date (consent_sign_date)** (`date`, required: true): This field is used to record the date the user signed the consent form.
* **Signature (consent_signature)** (`text`, required: true): This field is used to collect the user's signature for the consent form.
* **Time (consent_time)** (`time`, required: true): This field is used to record the time of the user's signature.
* **Contact Person (contact_person)** (`text`, required: false): This field is used to collect the name of the contact person.
* **Contact Person Title (contact_person_title)** (`text`, required: false): This field is used to collect the contact person's title.
* **Email (contact_email)** (`email`, required: false): This field is used to collect the contact person's email.
* **Phone (contact_phone)** (`text`, required: false): This field is used to collect the contact person's phone number.
* **Address (contact_address)** (`text`, required: false): This field is used to collect the contact person's address.
* **Clinic Name (clinic_name)** (`text`, required: true): This field is used to collect the name of the clinic.
* **Clinic License (clinic_license)** (`text`, required: true): This field is used to collect the license number of the clinic.
* **Clinic Address (clinic_address)** (`text`, required: true): This field is used to collect the address of the clinic.
* **Phone (clinic_phone)** (`text`, required: true): This field is used to collect the phone number of the clinic.
* **Fax (clinic_fax)** (`text`, required: false): This field is used to collect the fax number of the clinic.
* **Email (clinic_email)** (`email`, required: true): This field is used to collect the email of the clinic.
* **Medical License (medical_license)** (`text`, required: true): This field is used to collect the medical license of the professional.
* **Medical License Number (medical_license_number)** (`number`, required: true): This field is used to collect the number of the medical license.
* **State (medical_license_state)** (`select_one`, required: true): This field is used to collect the state of the medical license.
* **Expiration (medical_license_expiration)** (`date`, required: true): This field is used to collect the expiration of the medical license.
* **Assigned User (assigned_user)** (`text`, required: false): This field is used to collect the name of the user assigned to the treatment.

<thinking>
We need to confirm the form purpose and relevance. 
This form is used for billing and credentialing purposes in a healthcare setting. It collects provider information, medical specialties, insurance acceptance, and other relevant details. To ensure that this form accurately represents the needs of our clients, we will review the form fields and provide clear instructions for end-users.
</thinking>

# Billing And Credentialing Form - Help Guide
## Purpose
This form is designed to collect and verify the provider's billing and credentialing information, ensuring compliance with regulatory requirements and facilitating accurate reimbursement. It will collect information about the provider's medical specialty, practice details, insurance acceptances, and other relevant data.

## How To Complete This Form
1. Start by filling out the **Provider Information** page. This includes basic details about the healthcare provider, such as their name and contact information.
2. Move on to the **Practice Information** page, where you will enter your practice's name, address, and other essential details.
3. The **Billing Information** page will ask for details about the billing and insurance aspects, including the billing contact's name and contact information.
4. You will then be asked to select the **Insurance Plans Accepted**, which will help us understand your insurance acceptances.
5. On the **Credentialing Status** page, choose your current credentialing status from the provided options.
6. In the **Hospitals Affiliations** and **Board Certifications** fields, list any relevant hospitals where you have privileges or board certifications held.
7. Finally, confirm your **Malpractice Insurance** status, and if applicable, provide the **Malpractice Insurance Carrier** and **Policy Number**.
8. Fill out the **DEA Number**, **Education and Training**, and **Years in Practice** fields with your relevant details.
9. Confirm whether you have **Professional References** available and whether you have **Documentation Attached** to support your credentials.
10. Lastly, review the **Authorization** section to certify the accuracy of the provided information.

## Field-by-Field Explanation

* **Provider First Name** (`provider_first_name`, text, required): Enter the provider's first name.
* **Provider Last Name** (`provider_last_name`, text, required): Enter the provider's last name.
* **Provider Middle Name** (`provider_middle_name`, text, optional): Enter the provider's middle name or initial.
* **Provider Suffix** (`provider_suffix`, text, optional): Enter any suffix, such as Jr, Sr, MD, or PhD.
* **NPI Number** (`provider_npi`, text, required): Enter the National Provider Identifier number.
* **Tax ID Number** (`provider_tax_id`, text, required): Enter the Federal Tax Identification Number.
* **License Number** (`provider_license_number`, text, required): Enter the state medical license number.
* **License State** (`license_state`, text, required): Enter the state where the license is issued.
* **Medical Specialty** (`provider_specialty`, select_one, required): Select the primary area of practice.
* **Email Address** (`provider_email`, email, required): Enter the professional email address.
* **Phone Number** (`provider_phone`, text, required): Enter the office contact number.
* **Practice Name** (`practice_name`, text, required): Enter the name of the medical practice or facility.
* **Practice Address** (`practice_address`, text, required): Enter the complete street address of the practice.
* **City** (`practice_city`, text, required): Enter the city where the practice is located.
* **State** (`practice_state`, text, required): Enter the state where the practice is located.
* **ZIP Code** (`practice_zip`, text, required): Enter the postal code for the practice location.
* **Billing Contact Name** (`billing_contact_name`, text, required): Enter the name of the person responsible for billing.
* **Billing Email** (`billing_email`, email, required): Enter the email for billing correspondence.
* **Billing Phone** (`billing_phone`, text, required): Enter the phone number for billing questions.
* **Insurance Plans Accepted** (`insurance_accepted`, select_multiple, required): Select all insurance plans accepted.
* **Credentialing Status** (`credentialing_status`, select_one, required): Choose your current credentialing status.
* **Hospitals Affiliations** (`hospital_affiliations`, text, optional): List any hospitals where you have privileges.
* **Board Certifications** (`board_certifications`, text, optional): List any board certifications held.
* **Malpractice Insurance** (`malpractice_insurance`, select_one, required): Confirm whether you have current malpractice coverage.
* **Malpractice Insurance Carrier** (`malpractice_carrier`, text, optional): Enter the name of the malpractice insurance company (if applicable).
* **Malpractice Policy Number** (`malpractice_policy_number`, text, optional): Enter the malpractice policy number (if applicable).
* **DEA Number** (`dea_number`, text, optional): Enter the Drug Enforcement Administration number.
* **Education and Training** (`education_training`, text, optional): Enter medical school and residency information.
* **Years in Practice** (`years_in_practice`, select_one, required): Choose the number of years in practice.
* **Professional References** (`references_available`, select_one, required): Confirm whether professional references are available.
* **Documentation Attached** (`documentation_attached`, select_one, required): Confirm whether you have attached all required documents.
* **Authorization** (`authorization_signature`, select_one, required): Certify that the information is accurate.

Note: This form is designed to be user-friendly and clear. If you have any questions or concerns, please don't hesitate to reach out to us.

# Bank Referral Agreement Form - Help Guide
## Purpose
The Bank Referral Agreement Form is used to document and manage referral agreements between banks or institutions.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required information for the "Referring Bank / Institution Name" and "Receiving Bank / Institution Name" fields.
2. Enter the "Primary Contact Person for Agreement" and their contact email.
3. Select the permitted referral products in the "Permitted Referral Products" field.
4. Choose the primary compensation method in the "Referral Fee Model" field.
5. Enter the specified fee amount or percentage in the "Specified Fee Amount or Percentage" field.
6. Select the payment terms in the "Payment Terms (Net Days)" field.
7. Confirm compliance with regulatory requirements in the "Requirement for Customer Consent", "Data Confidentiality and Non-Disclosure", and "RESPA Compliance Acknowledgement" fields.
8. Select the term of the agreement in the "Initial Term of Agreement" field.
9. Enter the number of days required for termination notice in the "Termination Notice Requirement (Days)" field.
10. Enter the date the agreement was executed in the "Agreement Execution Date" field.

## Field-by-Field Explanation
* **Referring Bank / Institution Name** (`referring_bank_name`, text, **Required**): Enter the name of your bank or institution.
* **Receiving Bank / Institution Name** (`receiving_bank_name`, text, **Required**): Enter the name of the receiving bank or institution.
* **Primary Contact Person for Agreement** (`primary_contact_name`, text, **Required**): Enter the name of the contact person managing the referral relationship.
* **Primary Contact Email** (`contact_email`, email, **Required**): Enter the email of the primary contact person.
* **Permitted Referral Products** (`product_referral_types`, select multiple, **Required**): Select all the types of business you wish to refer.
* **Referral Fee Model** (`fee_model`, select one, **Required**): Select the primary compensation method for referrals.
* **Specified Fee Amount or Percentage** (`fee_amount_percentage`, text, **Required**): Enter the fee amount or percentage for successful referrals.
* **Payment Terms (Net Days)** (`payment_terms`, number, **Required**): Enter the number of days from successful conversion to payment.
* **Requirement for Customer Consent** (`customer_consent_req`, select one, **Required**): Confirm that all referrals will be made with the explicit consent of the customer.
* **Data Confidentiality and Non-Disclosure** (`confidentiality_provision`, select one, **Required**): Agree to maintain the privacy and security of all shared customer data.
* **RESPA Compliance Acknowledgement** (`respa_acknowledgement`, select one, **Required**): Acknowledge compliance with the Real Estate Settlement Procedures Act (if applicable).
* **Initial Term of Agreement** (`term_of_agreement`, select one, **Required**): Select the initial term of the agreement.
* **Termination Notice Requirement (Days)** (`termination_notice`, number, **Required**): Enter the number of days required for termination notice.
* **Agreement Execution Date** (`execution_date`, date, **Required**): Enter the date the agreement was executed.

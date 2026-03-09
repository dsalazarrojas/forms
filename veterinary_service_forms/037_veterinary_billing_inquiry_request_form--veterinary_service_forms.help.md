# Veterinary Billing Inquiry Request Form - Help Guide
## Purpose
The "Veterinary Billing Inquiry Request Form" is a tool used to collect information from clients or customers about their billing inquiries. It helps veterinary service providers to gather necessary data about the billing process, ensuring accurate and efficient handling of client requests.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the contact information section with the client's contact details, including their name, email, and phone number.
2. Select the service type, which could be "Pet" or "Service".
3. Choose the billing type, which could be "Account", "Invoices", or "Statement".
4. Provide the date and time of service, if applicable.
5. Enter any additional information or questions about the billing process.

## Field-by-Field Explanation
### Contact Information
* **Contact Person Name** (`contact_person_name`, text, required: false): Enter the name of the contact person responsible for the inquiry.
* **Email** (`contact_person_email`, email, required: false): Enter the email address of the contact person.
* **Phone** (`contact_person_phone`, text, required: false): Enter the phone number of the contact person.
* **Address 1** (`contact_person_address_1`, text, required: false): Enter the address of the contact person.
* **Address 2** (`contact_person_address_2`, text, required: false): Enter the additional address information of the contact person.
* **City** (`contact_person_city`, text, required: false): Enter the city where the contact person resides or operates.
* **State** (`contact_person_state`, text, required: false): Enter the state where the contact person resides or operates.
* **Country** (`contact_person_country`, text, required: false): Enter the country where the contact person resides or operates.

### Service Information
* **Service Type** (`service_type`, select_one, required: false): Choose the type of service you require, either "Pet" or "Service".
* **Service** (`service_type_service`, text, required: false): Enter a brief description of the service you require.
* **Date of Service** (`date_of_service`, date, required: false): Enter the date when the service was provided.
* **Time of Service** (`time_of_service`, time, required: false): Enter the time when the service was provided.

### Billing Information
* **Billing Type** (`billing_type`, select_multiple, required: false): Choose the type of billing you require, either "Account", "Invoices", or "Statement".
* **Account** (`billing_type_account`, text, required: false): Enter information about the account.
* **Invoices** (`billing_type_invoices`, text, required: false): Enter information about the invoices.
* **Statement** (`billing_type_statement`, text, required: false): Enter information about the statement.

### Additional Information
* **Billing Questions** (`billing_questions`, text, required: false): Enter any additional questions or information about the billing process.
* **Additional Info** (`additional_info`, text, required: false): Enter any additional information that is not covered in the above sections.

### Tips
Please fill out this form completely and accurately to ensure that your inquiry is handled efficiently. If you have any questions or concerns, please contact our support team.

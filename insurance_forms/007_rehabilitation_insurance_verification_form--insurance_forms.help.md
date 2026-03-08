# Rehabilitation Insurance Verification Form - Help Guide

## Purpose
The **Rehabilitation Insurance Verification Form** is used to collect and verify a client's insurance information for rehabilitation services. This form ensures that clients provide necessary information for insurance claims and payments to be processed accurately.

## How To Complete This Form
1. Complete the form with the required information about the client's rehabilitation insurance.
2. Fill out the client's name, contact information, and insurance details in the first section.
3. Choose the status of the rehabilitation insurance (Active, Inactive, or Unknown).
4. Select the date of service, including the month and year of the treatment.
5. Specify the total service hours received during the treatment.
6. If necessary, add comments or notes about the client's condition or treatment.
7. Click "Submit" to send the form for review or "Cancel" to discard it.

## Field-by-Field Explanation

* **Client Information** (`insurance_info`, `text`, Required)
	+ Enter the client's name, contact information, and any other relevant details.
* **Rehabilitation Insurance Info** (`rehabilitation_insurance_info`, `text`, Optional)
	+ Describe the client's insurance policy, including any coverage details.
* **Policy Number** (`policy_number`, `number`, Required)
	+ Enter the insurance policy number to verify coverage.
* **Provider Information** (`provider_information`, `text`, Optional)
	+ Note the name and contact information of the service provider.
* **Service Provider** (`service_provider`, `text`, Optional)
	+ Mention the name of the service provider.
* **Rehab Insurance Status** (`rehabilitation_insurance_status`, `select_one`, Optional)
	+ Check the status of the rehabilitation insurance (Active, Inactive, or Unknown).
* **Date of Service** (`date_of_service`, `date`, Required)
	+ Select the month and year of the treatment.
* **Service Hours** (`service_hours`, `time`, Optional)
	+ Specify the total service hours received during the treatment.
* **Comments** (`comments`, `note`, Optional)
	+ Add any additional notes or comments about the client's condition or treatment.
* **Submit** (`submit`, `select_multiple`, Required)
	+ Click "Submit" to send the form for review, or "Cancel" to discard it.
* **Client Email** (`client_email`, `email`, Optional)
	+ Enter the client's email address for contact.
* **Client Phone** (`phone`, `text`, Optional)
	+ Enter the client's phone number for contact.

## Tips
- Double-check the information for accuracy before submitting the form.
- Make sure to fill out all required fields.
- If you have any questions or need help, please contact the relevant staff member.

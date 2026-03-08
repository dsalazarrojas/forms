# smart_contract_service_inquiry_form - Help Guide
## Purpose
This form is for users to inquire about smart contract services. It captures necessary contact information and business type details for the service inquiry.

## How To Complete This Form
To complete this form, follow the steps below:
1. Fill in your contact name and details in the "Contact Name" field.
2. Select the type of service you are inquiring about from the "Service Type" dropdown menu.
3. Provide your service address in the "Service Address" field.
4. Enter your contact email address in the "Contact Email" field (not required).
5. Enter your contact phone number in the "Contact Phone" field.
6. Provide detailed information about your inquiry in the "Inquiry Details" field.
7. Select your business type from the "Business Type" dropdown menu.
8. Confirm that you have submitted the form by selecting "Submission Agreed" in the dropdown menu.
9. Finally, sign the form with your digital signature in the "Signature" field.

## Field-by-Field Explanation
* **Contact Name** (`contact_name`, text, required): Enter your name as it should be displayed on the form responses.
* **Service Type** (`service_type`, select_one, required): Choose the type of service you are inquiring about. Options are "smart contract" and "contract service".
* **Service Address** (`service_address`, text, required): Enter the address where you would like to receive the service.
* **Contact Email** (`contact_email`, email, required): Enter your email address where you can be contacted. (optional)
* **Contact Phone** (`contact_phone`, text, required): Enter your phone number where you can be contacted.
* **Inquiry Details** (`inquiry_details`, text, required): Provide detailed information about your inquiry.
* **Business Type** (`business_type`, select_one, required): Select your business type. Options are "individual" and "business".
* **Submission Agreed** (`submission_agreed`, select_one, required): Confirm that you have submitted the form by selecting "True".
* **Signature** (`signature`, note, required): Place your digital signature on this form.
* **Submission Date** (`submission_date`, date, optional): Enter the date you submitted the form. (optional)
* **Submission Time** (`submission_time`, time, optional): Enter the time you submitted the form. (optional)

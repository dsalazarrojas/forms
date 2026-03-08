To provide a clear and concise help guide for the EWC Spring Guest Service Request form, I will follow the given YAML fields and create a comprehensive guide for end-users.

</thinking>

# EWC Spring Guest Service Request - Help Guide
## Purpose
This form is used to submit a guest service request to the EWC Spring team. It captures essential information about the guest's complaint, contact method, and other relevant details to facilitate efficient communication and resolution of the issue.

## How To Complete This Form

1. Start by providing a brief description of the complaint or issue you are experiencing. You can type your message in the text field labeled "complaint".
2. If you have a name, enter it in the "guest_name" field. This will help us identify who submitted the request.
3. Select the contact methods you would like to use to reach you from the "contact_method" field. You can choose one or multiple methods, depending on your preference.
4. If you selected "Contact Phone" or "Contact Email" in the previous step, enter your contact details in the corresponding fields.
5. Indicate who submitted the request from the "submitted_by" field. You can select "EWC", "EWC Management", "Guest", or other (if not listed).
6. Enter the date and time you submitted the request in the "submit_date" and "contact_date" fields.
7. Choose the contact method for each subsequent contact attempt (up to 4 methods) in the "contact_method_1", "contact_method_2", "contact_method_3", and "contact_method_4" fields.
8. Enter your name, email, and phone number (if applicable) in the "submitter_name", "submitter_email", and "submitter_phone" fields.
9. Optionally, provide additional details about your location in the "submitter_location" field.
10. Finally, add any additional comments or notes about your request in the "submitter_notes" field.

## Field-by-Field Explanation

* **complaint** (`complaint`, text, required): Enter a brief description of your complaint or issue.
* **guest_name** (`guest_name`, text, optional): Enter your name if you wish to be identified.
* **contact_method** (`contact_method`, select multiple, optional): Select one or multiple contact methods (Phone, Email, Mail).
* **contact_method_options** (`contact_method_options`, text, optional): Not applicable.
* **contact_type** (`contact_type`, select one, optional): Select "Contact Phone", "Contact Email", "Contact Mail", or other (if not listed).
* **contact_details** (`contact_details`, text, optional): Not applicable.
* **contact_method_description** (`contact_method_description`, text, optional): Not applicable.
* **submitted_by** (`submitted_by`, select one, optional): Select "EWC", "EWC Management", "Guest", or other (if not listed).
* **submit_date** (`submit_date`, date, optional): Enter the date of submission.
* **contact_date** (`contact_date`, date, optional): Enter the date for follow-up contact.
* **contact_time** (`contact_time`, time, optional): Not applicable.
* **contact_method_1** (`contact_method_1`, select one, optional): Select "Contact Phone", "Contact Email", "Contact Mail" for the first contact attempt.
* **submitter_name** (`submitter_name`, text, optional): Enter your name.
* **submitter_email** (`submitter_email`, email, optional): Enter your email address.
* **contact_method_2** (`contact_method_2`, select one, optional): Select "Contact Phone", "Contact Email", "Contact Mail" for the second contact attempt.
* **contact_method_3** (`contact_method_3`, select one, optional): Select "Contact Phone", "Contact Email", "Contact Mail" for the third contact attempt.
* **submitter_phone** (`submitter_phone`, text, optional): Not applicable.
* **contact_method_4** (`contact_method_4`, select one, optional): Select "Contact Phone", "Contact Email", "Contact Mail" for the fourth contact attempt.
* **submitted_date** (`submitted_date`, date, optional): Enter the date of submission (if not specified in "submit_date").
* **submitter_location** (`submitter_location`, text, optional): Enter your location.
* **submitter_notes** (`submitter_notes`, text, optional): Add any additional comments or notes about your request.

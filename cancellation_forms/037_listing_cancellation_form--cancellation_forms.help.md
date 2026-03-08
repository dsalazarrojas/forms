<thinking>What is the purpose of this listing_cancellation_form? This form is intended to facilitate the cancellation of listings. It captures information about the cancellation reason, listing status, and other relevant details. It should not be used for other purposes such as listing creation or editing.</thinking>

# listing_cancellation_form - Help Guide
## Purpose
The listing_cancellation_form is used to cancel a listing. Please use this form to provide a clear and concise explanation of the cancellation reason and status.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the reason for cancellation from the dropdown menu. 
2.  Enter a brief description of the reason for cancellation.
3.  If applicable, select the listing status and cancellation type. 
4.  Fill in the cancellation date and time, if applicable.
5.  Confirm your cancellation by selecting the desired option from the confirmation dropdown menu.
6.  Optionally, you can enter a brief description of the cancellation reason.
7.  Review the form carefully before submitting it.

## Field-by-Field Explanation
* **reason** (`reason`, text, optional): Enter a brief description of the reason for listing cancellation.
* **listing_id** (`listing_id`, number, optional): Enter the ID of the listing to be cancelled.
* **date** (`date`, date, optional): Enter the date of the cancellation, if applicable.
* **time** (`time`, time, optional): Enter the time of the cancellation, if applicable.
* **reason_description** (`reason_description`, text, optional): Enter a detailed description of the reason for cancellation.
* **confirm** (`confirm`, select_multiple, optional): Confirm your cancellation by selecting "Yes" or "Maybe".
* **cancellation_type** (`cancellation_type`, select_one, optional): Select the type of cancellation, such as Soft Cancellation or Hard Cancellation.
* **listing_status** (`listing_status`, select_one, optional): Select the status of the listing after cancellation.
* **reason_code** (`reason_code`, number, optional): Enter a code for the cancellation reason, if applicable.
* **cancellation_reason** (`cancellation_reason`, text, optional): Enter a detailed description of the cancellation reason, if applicable.
* **cancellation_date** (`cancellation_date`, date, optional): Enter the date of the cancellation, if applicable.
* **cancellation_time** (`cancellation_time`, time, optional): Enter the time of the cancellation, if applicable.
* **confirmation_method** (`confirmation_method`, text, optional): Enter the method of confirming the cancellation, if applicable.
* **confirmation_status** (`confirmation_status`, text, optional): Enter the status of the confirmation, if applicable.
* **cancellation_type_description** (`cancellation_type_description`, text, optional): Enter a description of the cancellation type, if applicable.
* **listing_cancellation_form_fields_comments** (`listing_cancellation_form_fields_comments`, text, optional): Enter any additional comments about the cancellation form.
* **listing_cancellation_form_buttons** (`listing_cancellation_form_buttons`, select_one, required): Select the option to cancel the listing or reschedule it.

Tips: Review the form carefully before submission to ensure that all required information is entered correctly. If you're unsure about any field, you can refer to this help guide for clarification.

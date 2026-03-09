# Website Hosting Transfer Request Form - Help Guide
## Purpose
This form is used to request a website hosting transfer for a client's website. Please complete this form to ensure a smooth and efficient transfer process.

## How To Complete This Form
To complete this form, please follow the instructions below:

1. Enter the details of the current hosting setup in the `website_hosting_transfer_details` field.
2. Select the type of transfer in the `transfer_type` dropdown menu. This will help us understand the specific needs of your transfer.
3. Enter the name of the current hosting provider in the `current_host` field.
4. Enter the name of the new hosting provider in the `new_host` field.
5. Choose a date for the transfer in the `transfer_date` field. This is the expected date for the transfer to take place.
6. If you have any additional details about the new hosting setup, please enter them in the `new_host_details` field (optional).
7. Enter your name and title as the contact person in the `contact_person` field. This is who we will contact for any further questions or updates.
8. Enter your email address in the `email` field. This is how we will contact you for any updates or questions.
9. If you want to upload any files related to the transfer, please select them in the `file_uploads` field.
10. If you are uploading files, please select the uploader who uploaded them in the `file_uploader` field.
11. Confirm the transfer in the `confirm_transfer` dropdown menu. This is a confirmation that you have reviewed the transfer details and are ready to proceed.
12. If you have confirmed the transfer, please enter the expected transfer date and time in the `confirm_transfer_date` and `confirm_transfer_time` fields, respectively. These are optional fields.

## Field-by-Field Explanation

* **website_hosting_transfer_details** (`website_hosting_transfer_request_form_1`, text, required): Enter the details of the current hosting setup, including the hosting provider, domain name, and any other relevant information.
* **transfer_type** (`transfer_type`, select_one, required): Select the type of transfer you are requesting. This will help us understand the specific needs of your transfer.
* **current_host** (`current_host`, text, required): Enter the name of the current hosting provider.
* **new_host** (`new_host`, text, required): Enter the name of the new hosting provider.
* **transfer_date** (`transfer_date`, date, required): Choose a date for the transfer to take place.
* **new_host_details** (`new_host_details`, text, optional): If you have any additional details about the new hosting setup, enter them here.
* **contact_person** (`contact_person`, text, required): Enter your name and title as the contact person.
* **email** (`email`, email, required): Enter your email address for us to contact you for any updates or questions.
* **phone** (`phone`, text, optional): Enter your phone number for us to contact you for any updates or questions.
* **notes** (`notes`, note, optional): Enter any additional notes or comments about the transfer.
* **file_uploads** (`file_uploads`, select_multiple, optional): If you are uploading files related to the transfer, select them here.
* **file_uploader** (`file_uploader`, select_multiple, optional): If you are uploading files, select the uploader who uploaded them here.
* **confirm_transfer** (`confirm_transfer`, select_one, required): Confirm the transfer details in this dropdown menu.
* **confirm_transfer_date** (`confirm_transfer_date`, date, optional): If you have confirmed the transfer, enter the expected transfer date here.
* **confirm_transfer_time** (`confirm_transfer_time`, time, optional): If you have confirmed the transfer, enter the expected transfer time here.

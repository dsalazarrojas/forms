# Home Care Referral Form - Help Guide
## Purpose
This form is used to collect information about a home care referral, which is a request for assistance or support for a client who requires non-medical care and support services in their home.

## How To Complete This Form
To complete this form, follow these steps:

1. Gather all the necessary information about the client.
2. Fill out the form with the required details, including their name, date of birth, phone number, email, and any additional services they may require.
3. Specify the referring agency and the date and time of the referral.
4. Mark the referral status as either Active or Inactive, depending on the client's current status.
5. Add any relevant notes or comments about the referral.
6. Sign the form to confirm that it is complete and accurate.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, optional): The name of the client who requires home care services.
* **Client Date of Birth** (`client_date_of_birth`, date, optional): The date of birth of the client.
* **Client Phone** (`client_phone`, text, optional): The contact phone number of the client.
* **Client Email** (`client_email`, email, optional): The email address of the client.
* **Referring Agency** (`referring_agency`, text, optional): The name of the agency or organization referring the client for home care services.
* **Additional Services** (`additional_services`, text, optional): Any additional services the client may require, such as meals or transportation.
* **Referral Date** (`referral_date`, date, optional): The date the referral was made.
* **Referral Time** (`referral_time`, time, optional): The time the referral was made.
* **Referral Status** (`referral_status`, select_one, optional): The status of the referral, either Active or Inactive.
* **Referral Note** (`referral_note`, note, optional): Any relevant notes or comments about the referral.
* **Form Signed** (`form_signed`, select_one, optional): A confirmation that the form is complete and accurate, either True or False.

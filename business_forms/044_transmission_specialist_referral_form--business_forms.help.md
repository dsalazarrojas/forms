# transmission_spezialist_referral_form - Help Guide
## Purpose
The "transmission_spezialist_referral_form" is used to refer a vehicle to a transmission specialist for services such as repair, maintenance, or replacement. This form ensures that the client's information is provided accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the client's name and contact information.
2. Select the make and model of the vehicle that requires transmission service.
3. Specify the type of transmission problem or service required.
4. Check if the client has referred to a transmission specialist before.
5. Provide the client's phone number and email for communication.
6. Add any additional notes about the referral.
7. Select the date and time the referral was submitted.

## Field-by-Field Explanation
* **Client Name** (`client_name`, text, required): The client's full name as it appears on file.
* **Contact Number** (`contact_number`, text, optional): The client's phone number for communication.
* **Vehicle Make** (`vehicle_make`, select_one, optional): The make of the client's vehicle (e.g., Honda, Toyota, Ford).
* **Vehicle Model** (`vehicle_model`, text, optional): The model of the client's vehicle.
* **Transmission Problem** (`transmission_problem`, select_one, optional): Select one of the listed options to describe the transmission problem or service required.
* **Service Request** (`service_request`, select_multiple, optional): Select multiple options to describe the service required (e.g., Automatic Transmission Repair, Manual Transmission Repair).
* **Transmission Specialist** (`transmission_specialist`, select_one, optional): Check if the client has referred to a transmission specialist before.
* **Transmission Specialist Phone** (`transmission_specialist_phone`, text, optional): The transmission specialist's phone number for communication.
* **Transmission Specialist Email** (`transmission_specialist_email`, email, optional): The transmission specialist's email for communication.
* **Notes** (`notes`, note, optional): Add any additional notes about the referral.
* **Date Submitted** (`date_submitted`, date, optional): The date the referral was submitted.
* **Time Submitted** (`time_submitted`, time, optional): The time the referral was submitted.

## Tips
* Double-check all fields for accuracy before submitting the referral.
* Make sure to select the correct vehicle make and model.
* Be specific when describing the transmission problem or service required.
* Ensure that the transmission specialist's contact information is up to date.
* Use the "Notes" field to add any additional information that may be helpful for the transmission specialist.

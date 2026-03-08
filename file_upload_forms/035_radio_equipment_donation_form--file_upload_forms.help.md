# Radio Equipment Donation Form - Help Guide
## Purpose
The Radio Equipment Donation Form is used to track and record radio equipment donations. It captures essential details about the donated equipment, such as its type, donor's information, and delivery status.

## How To Complete This Form
To complete this form, follow these steps:

* Fill out the `Donation Form` section by providing a brief description of the donated radio equipment.
* Select the type of radio equipment from the options in the `Radio Equipment Type` field.
* Enter the donor's name in the `Donor Name` field.
* Enter the donor's email address in the `Donor Email` field.
* Enter the donor's phone number in the `Phone Number` field.
* Specify the pickup location in the `Pickup Location` field.
* Enter the date of the donation in the `Donation Date` field.
* Select the delivery status from the options in the `Delivery Status` field.
* Indicate whether the equipment has been confirmed for pickup in the `Pickup Confirmation` field.
* Provide any additional notes about the donation in the `Notes` field.

## Field-by-Field Explanation
* **Donation Form** (`donation_form`, `text`, required: false): This is the first section of the form where you can briefly describe the donated radio equipment.
* **Radio Equipment Type** (`radio_equipment_type`, `select_one`, required: false): Select the type of radio equipment from the options provided (e.g., Radio, Mic, Headphones, Speaker, Other).
* **Donor Name** (`donor_name`, `text`, required: false): Enter the donor's name.
* **Donor Email** (`donor_email`, `email`, required: false): Enter the donor's email address.
* **Phone Number** (`phone_number`, `text`, required: false): Enter the donor's phone number.
* **Pickup Location** (`pickup_location`, `text`, required: false): Specify the location where the donor is willing to drop off the equipment.
* **Donation Date** (`donation_date`, `date`, required: false): Enter the date of the donation.
* **Delivery Status** (`delivery_status`, `select_multiple`, required: false): Select the current status of the delivery from the options provided (e.g., Available, In-Transit, Delivered, Cancelled).
* **Pickup Confirmation** (`pickup_confirmation`, `select_one`, required: false): Indicate whether the equipment has been confirmed for pickup.
* **Notes** (`notes`, `note`, required: false): Provide any additional information about the donation in this field.

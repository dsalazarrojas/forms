# Residential Security Visitor Registration Form - Help Guide
## Purpose
This form is used to register visitors arriving at the residential area, ensuring their identity and presence are recorded for security and administrative purposes.

## How To Complete This Form
1. Fill out all required fields, marked with an asterisk (*). This includes:
	* First Name
	* Last Name
	* Email
	* Phone
	* Purpose
	* Arrival Date
	* Arrival Time
	* Departure Date
	* Purpose of Visit
	* Vehicle Type
	* Number of Visitors
	* Vehicle Registration
	* Signature
	* Vehicle Make
	* Vehicle Year (if applicable)
2. Select the correct options for:
	* Vehicle Type
	* Visitor Type
	* Employee Status
3. If applicable, fill out the additional fields:
	* Contact Person (if you are visiting on behalf of someone else)
	* Parking Details
	* Contact Email
	* Emergency Contact
	* Visitor ID

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Please enter your first name as it appears on your official identification.
* **Last Name** (`last_name`, `text`, required): Please enter your last name as it appears on your official identification.
* **Email** (`email`, `email`, required): Please enter your official email address.
* **Phone** (`phone`, `text`, required): Please enter your phone number for contact purposes.
* **Purpose** (`purpose`, `text`, required): Briefly describe the reason for your visit.
* **Arrival Date** (`arrival_date`, `date`, required): Enter the date you arrived at the location.
* **Arrival Time** (`arrival_time`, `time`, required): Enter the time you arrived at the location.
* **Departure Date** (`departure_date`, `date`, required): Enter the date you plan to leave the location.
* **Purpose of Visit** (`purpose_of_visit`, `text`, required): Provide a detailed description of your visit's purpose.
* **Contact Person** (`contact_person`, `text`, optional): If you are visiting on behalf of someone else, please enter their name and contact information.
* **Vehicle Type** (`vehicle_type`, `select_one`, required): Select the type of vehicle you are driving.
* **Number of Visitors** (`visitor_count`, `number`, required): If you are visiting with others, enter the number of visitors with you.
* **Parking Details** (`parking_details`, `text`, optional): If your vehicle requires special parking arrangements, please describe the necessary details.
* **Vehicle Registration** (`vehicle_registration`, `text`, required): Please enter the vehicle registration number or plate number.
* **License Plate Number** (`license_plate_number`, `text`, optional): If you have a license plate number, please enter it.
* **Employee Status** (`employee_status`, `select_one`, required): Select whether you are an employee or not.
* **Contact Email** (`contact_email`, `email`, optional): If you would like to be contacted by email, please enter your email address.
* **Emergency Contact** (`emergency_contact`, `text`, optional): If you have an emergency contact person, please enter their name and phone number.
* **Visitor Type** (`visitor_type`, `select_multiple`, required): Select the type of visitor you are, such as Resident, Contractor, or Delivery.
* **Visitor ID** (`visitor_id`, `text`, optional): If you have a visitor ID, please enter it.
* **Additional Notes** (`notes`, `note`, optional): If you have any additional information to provide, please enter it.
* **Signature** (`signature`, `text`, required): Please sign your name to confirm your identity.
* **Photo ID** (`photo_id`, `text`, optional): If you have a photo ID, please scan or upload it.
* **Vehicle Make** (`vehicle_make`, `text`, optional): If you have a vehicle, please enter its make.
* **Vehicle Year** (`vehicle_year`, `number`, optional): If you have a vehicle, please enter its year.

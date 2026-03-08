# Book In A Vehicle Service Form - Help Guide
## Purpose
This form is designed to gather essential information about your vehicle, allowing our mechanics to prepare for a successful service visit.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields marked with an asterisk (*).
2. Select the type of service you need from the "Type of Service Needed" field.
3. Choose your preferred appointment date and time.
4. If you need transportation, select the corresponding option.
5. Choose your preferred payment method.
6. Finally, review and agree to our service terms.

## Field-by-Field Explanation
* **Full Name** (`customer_name`, text, required): Enter your first and last name.
* **Email Address** (`email_address`, email, required): We will send confirmation of your service appointment and any updates to this email address.
* **Phone Number** (`phone_number`, text, required): For appointment coordination, please enter your phone number.
* **Street Address** (`address`, text, required): Enter your home address for service preparation.
* **City** (`city`, text, required): Enter your city for service preparation.
* **State** (`state`, text, required): Enter your state for service preparation.
* **ZIP Code** (`zip_code`, text, required): Enter your ZIP code for service preparation.
* **Vehicle Make** (`vehicle_make`, text, required): Enter the brand of your vehicle.
* **Vehicle Model** (`vehicle_model`, text, required): Enter the model of your vehicle.
* **Vehicle Year** (`vehicle_year`, number, required): Enter the year of your vehicle.
* **Vehicle Color** (`vehicle_color`, text, optional): Enter the color of your vehicle (if applicable).
* **License Plate Number** (`license_plate`, text, optional): If you have a license plate number, enter it.
* **VIN Number** (`vin_number`, text, optional): If you have a VIN number, enter it.
* **Current Mileage** (`current_mileage`, number, required): Enter your vehicle's current odometer reading.
* **Type of Service Needed** (`service_type`, select_one, required): Select the type of service you need, such as Oil Change or Brake Service.
* **Additional Services** (`additional_services`, select_multiple, optional): Select any additional services you may need, such as Wheel Alignment or Filter Replacement.
* **Describe the Problem** (`problem_description`, text, required): Describe the issue you're experiencing with your vehicle.
* **When Did Problem Start** (`when_did_problem_start`, text, optional): If you know when the problem started, enter it.
* **Preferred Appointment Date** (`preferred_date`, date, required): Choose a date for your service appointment.
* **Preferred Appointment Time** (`preferred_time`, time, required): Choose a time for your service appointment.
* **Do You Need Transportation** (`transportation_needed`, select_one, optional): If you need a ride, select this option.
* **How Did You Hear About Us** (`how_did_you_hear`, select_one, optional): How did you find our service? (Search Engine, Social Media, Referral, etc.)
* **Preferred Payment Method** (`payment_method`, select_one, optional): How would you like to pay for your service?
* **Special Requests** (`special_requests`, text, optional): If you have any special requests or needs, enter them here.
* **I Agree to Service Terms** (`terms_agreement`, select_one, required): Select "Yes I agree" to agree to our service terms.

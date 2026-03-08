# Campground Reservation Form Template - Help Guide

## Purpose
This form is used to collect and manage information about guests making a reservation at the campsite. Please ensure that all necessary details are filled out carefully to facilitate a successful stay.

## How To Complete This Form

1. Please fill out the form carefully, ensuring that all required fields (marked as 'required') are completed.
2. Use the provided examples as a guide to ensure accuracy.

## Field-by-Field Explanation

* **Guest First Name** (`guest_first_name`, `text`, required): The first name of the guest. Please enter the guest's first name.
* **Guest Last Name** (`guest_last_name`, `text`, required): The last name of the guest. Please enter the guest's last name.
* **Email Address** (`email`, `email`, required): The email address of the guest. Please enter a valid email address.
* **Phone Number** (`phone`, `text`, required): The contact phone number of the guest. Please enter a valid phone number.
* **Street Address** (`address`, `text`, required): The guest's street address. Please enter the street address.
* **City** (`city`, `text`, required): The city or town where the guest is from. Please enter the city or town.
* **State** (`state`, `text`, required): The state or province where the guest is from. Please enter the state or province.
* **ZIP Code** (`zip_code`, `text`, required): The postal code of the guest's address. Please enter the ZIP code.
* **Arrival Date** (`arrival_date`, `date`, required): The date the guest plans to arrive at the campsite. Please enter the arrival date.
* **Departure Date** (`departure_date`, `date`, required): The date the guest plans to leave the campsite. Please enter the departure date.
* **Number of Nights** (`number_of_nights`, `number`, required): The total number of nights the guest plans to stay. Please enter the number of nights.
* **Number of Adults** (`number_of_adults`, `number`, required): The number of adults in the guest's party. Please enter the number of adults.
* **Number of Children** (`number_of_children`, `number`, optional): The number of children in the guest's party. Please enter the number of children (if any).
* **Type of Accommodation** (`accommodation_type`, `select_one`, required): Please select the type of accommodation the guest prefers (e.g. Tent site, RV site with hookups, etc.).
* **Site Preference** (`site_preference`, `select_one`, required): Please select the guest's preferred site location (e.g. waterfront, shaded, etc.).
* **RV Length** (`rv_length`, `text`, optional): If applicable, please enter the length of the guest's RV in feet.
* **Hookup Requirements** (`hookup_requirements`, `select_multiple`, optional): Please select any additional hookups the guest requires (e.g. electric, water, sewer, etc.).
* **Additional Amenities** (`additional_amenities`, `select_multiple`, optional): Please select any additional amenities the guest requires (e.g. firewood, ice, etc.).
* **Will You Bring Pets** (`pet_accommodation`, `select_one`, required): Please select if the guest brings pets (yes/no).
* **Pet Details** (`pet_details`, `text`, optional): If the guest brings pets, please describe the pets.
* **Is This for a Special Occasion** (`special_occasion`, `select_one`, optional): Please select if the stay is for a special occasion (yes/no).
* **Special Occasion Details** (`special_occasion_details`, `text`, optional): If the stay is for a special occasion, please describe the occasion.
* **Accessibility Needs** (`accessibility_needs`, `select_one`, required): Please select if the guest has accessibility needs (yes/no).
* **Accessibility Details** (`accessibility_details`, `text`, optional): If the guest has accessibility needs, please describe them.
* **How Did You Hear About Us** (`how_heard_about_us`, `select_multiple`, optional): Please select how the guest heard about the campsite.
* **Have You Stayed With Us Before** (`previous_guest`, `select_one`, required): Please select if the guest has stayed with us before (yes/no).
* **Special Requests** (`special_requests`, `text`, optional): If the guest has any special needs, please describe them.
* **Estimated Arrival Time** (`estimated_arrival_time`, `time`, optional): Please enter the estimated time of the guest's arrival.
* **Payment Method** (`payment_method`, `select_one`, required): Please select the payment method (e.g. credit card, PayPal, etc.).
* **Deposit Paid** (`deposit_paid`, `number`, optional): If the guest has paid a deposit, please enter the amount.
* **Total Amount** (`total_amount`, `number`, required): The total amount due for the stay. Please enter the total amount.
* **I Have Read the Cancellation Policy** (`cancellation_policy_acknowledged`, `select_one`, required): Please select if the guest acknowledges the cancellation policy (yes/no).
* **I Accept Terms and Conditions** (`terms_accepted`, `select_one`, required): Please select if the guest accepts the terms and conditions (yes/no).
* **Guest Signature** (`guest_signature`, `text`, required): The guest's signature. Please type your full name.
* **Date Signed** (`signature_date`, `date`, required): The date the guest signed the form.

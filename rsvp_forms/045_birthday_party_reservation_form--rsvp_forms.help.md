# Birthday Party Reservation Form - Help Guide

## Purpose
This form is designed to collect and process information about your birthday party reservation. Please take a few minutes to fill out this form and let us know about your party plans!

## How To Complete This Form
1. Please select the party package that suits your needs from the available options.
2. Fill out the party details, including the date, time, and duration of the party.
3. Provide information about the birthday child, including their name, age, and birth date.
4. Enter the guest count, including adults and children.
5. Choose your preferred payment method.
6. Review and confirm the reservation details.
7. Finally, confirm your acceptance of the venue's policies and proceed with the reservation.

## Field-by-Field Explanation

* **Your Name** (`organizer_name`, text, required): Please fill out your full name as the party organizer.
* **Email Address** (`organizer_email`, email, required): Enter your contact email address.
* **Phone Number** (`organizer_phone`, text, required): Provide your contact phone number.
* **Home Address** (`organizer_address`, text, required): Enter your home address.
* **Birthday Child's Name** (`birthday_child_name`, text, required): Enter the name of the birthday child.
* **Age Turning** (`birthday_child_age`, number, required): Enter the age of the birthday child.
* **Birth Date** (`birthday_child_dob`, date, optional): If you know the birthday child's birth date, please enter it.
* **Desired Party Date** (`desired_party_date`, date, required): Choose the desired party date.
* **Preferred Start Time** (`preferred_start_time`, time, required): Select the preferred start time for the party.
* **Party Duration in Hours** (`party_duration_hours`, number, required): Enter the expected party duration in hours.
* **Expected Number of Guests** (`expected_guests`, number, required): Enter the expected number of guests, including adults and children.
* **Number of Children** (`children_count`, number, required): Enter the number of children attending.
* **Number of Adults** (`adults_count`, number, required): Enter the number of adults attending.
* **Party Package** (`package_type`, select_one, required): Choose the party package that suits your needs.
* **Party Theme** (`party_theme`, text, optional): If you have a specific party theme, enter it here.
* **Activities Requested** (`activities_requested`, select_multiple, optional): Select the activities you want for the party.
* **Food Service Included** (`food_service`, select_one, required): Choose whether you want food service included or not.
* **Cake Service** (`cake_included`, select_one, required): Choose whether you want cake service included or not.
* **Dietary Accommodations** (`dietary_accommodations`, select_multiple, optional): If you have any dietary restrictions, select them here.
* **Special Accommodations** (`special_accommodations`, text, optional): If you have any special needs or requests, enter them here.
* **Decorations Provided** (`decorations_provided`, select_one, optional): Choose whether you want the venue to provide decorations or not.
* **Estimated Total Cost** (`estimated_cost`, number, optional): Get an estimate of the total party cost.
* **Deposit Required** (`deposit_amount`, number, optional): Enter the required deposit amount.
* **Deposit Due Date** (`deposit_due_date`, date, optional): Enter the due date for the deposit.
* **Preferred Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method.
* **Special Requests or Comments** (`special_requests`, text, optional): If you have any special requests or comments, enter them here.
* **How Did You Hear About Us** (`referral_source`, text, optional): How did you hear about us?
* **I Acknowledge and Agree to Venue Policies** (`policy_acknowledgment`, select_one, required): Check to confirm that you have read and agree to the venue's policies.
* **Confirm Reservation** (`reservation_confirmation`, select_one, required): Select "Yes, Book Party" to confirm the reservation.

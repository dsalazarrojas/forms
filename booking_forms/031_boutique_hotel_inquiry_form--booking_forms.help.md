# Boutique Hotel Inquiry Form - Help Guide
## Purpose
The Boutique Hotel Inquiry Form is designed to gather information from guests about their stay, preferences, and requirements. This helps the hotel staff to prepare for their visit and tailor services to their needs.

## How To Complete This Form
To complete the form, follow these steps:

1. Provide your full name, email address, and phone number in the contact information section.
2. Enter your proposed check-in and check-out dates in the Inquiry Details section.
3. Specify the number of guests who will be staying with you.
4. Indicate if this stay is for a special occasion and choose the corresponding option from the dropdown list.
5. Describe your stay requirements and preferences in the text area.
6. Select the services you are interested in from the list, and choose how you would prefer to be contacted (email, phone call, or WhatsApp).
7. If you want to receive newsletters from the hotel, select the "True" option.
8. Finally, select the "True" option if you want to receive the hotel's exclusive travel updates.

## Field-by-Field Explanation
* **Full Name** (`guest_full_name`, text, required): Please enter your full name as it appears on your identification.
* **Email Address** (`guest_email_addr`, email, required): Enter your email address that we can use to contact you.
* **Phone Number** (`guest_phone_no`, text, required): Enter your phone number that we can use to contact you.
* **Proposed Check-in Date** (`check_in_proposed`, date, optional): If you have a preferred check-in date, please enter it here.
* **Proposed Check-out Date** (`check_out_proposed`, date, optional): If you have a preferred check-out date, please enter it here.
* **Number of Guests** (`guests_val`, number, required): Enter the number of guests who will be staying with you.
* **Is this for a special occasion?** (`stay_occasion`, select_one, optional): This could be a birthday, anniversary, honeymoon, business trip, or a casual stay.
* **Tell us more about your stay requirements** (`stay_reqs`, text, required): Please describe your stay requirements and preferences in this text area.
* **Services you are interested in** (`services_interest`, select_multiple, optional): Select all that apply from the list of services.
* **How would you prefer us to contact you?** (`contact_pref`, select_one, required): Choose how you would like us to contact you (email, phone call, or WhatsApp).
* **Services you are interested in** (`services_interest`, select_multiple, optional): Select all that apply from the list of services.
* **Would you like to receive our exclusive travel updates?** (`signup_confirm`, select_one, optional): Select "True" if you want to receive our newsletter updates.
* **Date of Inquiry** (`inquiry_dt`, date, required): This field is automatically populated and cannot be edited.

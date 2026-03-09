# local_experience_house_booking_form - Help Guide
## Purpose
The local_experience_house_booking_form is used to collect information from guests who are booking a local experience house. This form is designed to gather details about the guest's stay, including their contact information, dates, special requests, and payment methods. The form helps the travel agency to understand the guest's preferences and requirements, ensuring a smooth and enjoyable experience.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal details such as name and email address in the "Guest Details" section.
2. Enter your dates of stay in the "Dates" section.
3. If you have any special requests, such as food preferences or activities, fill them in in the "Special Requests" section.
4. Provide your phone number in the "Phone Number" section.
5. Fill in your stay duration in the "Stay Duration" section.
6. Choose your breakfast preferences from the "Breakfast" dropdown menu in the "Special Requests" section.
7. Select any additional requests from the "Special Request 2" dropdown menu in the "Special Requests" section.
8. Choose your stay type from the "Stay Type" dropdown menu in the "Special Requests" section.
9. Select your payment method(s) from the "Payment Method" dropdown menu in the "Payment Methods" section.
10. Add any additional comments about your stay in the "Additional Comments" section.
11. If assigned to a travel agent, fill in their name in the "Travel Agent" section.
12. Finally, ensure you have filled in all required fields and review the form before submitting it.

## Field-by-Field Explanation

* **Guest Details** (`user_details`, text, required: false): This section is used to collect your personal details, including your name and email address.
* **Dates** (`dates`, date, required: false): Enter your check-in and check-out dates to book your stay.
* **Special Requests** (`special_requests`, text, required: false): If you have any special requests, such as food preferences or activities, fill them in here.
* **Phone Number** (`phone_number`, text, required: false): Enter your phone number so we can contact you about your stay.
* **Email** (`email`, email, required: false): Enter your email address so we can send you updates about your stay.
* **Stay Duration** (`stay_duration`, number, required: false): Enter the number of nights you plan to stay.
* **Breakfast** (`special_request_1`, select_one, required: false): Choose your breakfast preferences from the dropdown menu.
* **Special Request 2** (`special_request_2`, select_multiple, required: false): Select any additional requests from the dropdown menu.
* **Stay Type** (`stay_type`, select_one, required: false): Choose your stay type from the dropdown menu.
* **Payment Method** (`payment_method`, select_multiple, required: false): Select your preferred payment method from the dropdown menu.
* **Additional Comments** (`additional_comments`, note, required: false): Add any additional comments about your stay.
* **Assigned Tool** (`assigned_tool`, text, required: false): If assigned to a travel agent, fill in their name here.
* **Form ID** (`form_id`, text, required: false): This is a unique identifier for the form.
* **Travel Agent** (`travel_agent`, text, required: false): If you have been assigned a travel agent, fill in their name here.

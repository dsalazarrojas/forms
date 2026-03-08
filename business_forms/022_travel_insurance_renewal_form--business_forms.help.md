# Travel Insurance Renewal Form - Help Guide
## Purpose
The Travel Insurance Renewal Form is a form used to update and manage travel insurance policies for users. This form helps users to provide and verify necessary details about their travel insurance policies, ensuring they are covered and up-to-date.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in your basic contact information, including your email address.
2. Select the status of your policy (New or Existing).
3. Provide necessary information about your travel, including the start date, end date, destination, travel duration, and dates of departure and return.

## Field-by-Field Explanation
* **User Info**: (`user_info`, text, required: false) Please enter your basic contact information to help us process your policy update.
* **Policy Info**: (`policy_info`, text, required: true) Please enter a description of your policy, including policy number or any other relevant details.
* **Policy Number**: (`policy_number`, number, required: true) Please enter your policy number to link it to your record.
* **Start Date**: (`start_date`, date, required: true) Enter the start date of your travel, in YYYY-MM-DD format.
* **Expiration Date**: (`expiration_date`, date, required: true) Enter the expiration date of your travel, in YYYY-MM-DD format.
* **Coverage Duration**: (`coverage_duration`, number, required: true) Enter the duration of your travel, in days or weeks.
* **Travel Info**: (`travel_info`, text, required: false) Please enter any additional travel information you would like to share with us.
* **Destination**: (`destination`, text, required: true) Enter the destination of your travel.
* **Departure Date**: (`departure_date`, date, required: true) Enter the date you leave for your travel, in YYYY-MM-DD format.
* **Return Date**: (`return_date`, date, required: true) Enter the date you return from your travel, in YYYY-MM-DD format.
* **Travel Duration**: (`travel_duration`, number, required: true) Enter the duration of your travel, in days or weeks.
* **Contact Info**: (`contact_info`, text, required: true) Please enter your contact information, including phone number and address.
* **Email**: (`email`, email, required: true) Enter your email address to contact you regarding your policy.
* **Policy Status**: (`policy_status`, select_one, required: true) Select whether you are creating a new policy (New) or renewing an existing one (Existing).

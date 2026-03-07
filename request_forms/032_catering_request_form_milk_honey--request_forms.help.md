<thinking> 
To ensure that this form serves its purpose, we need to validate that it is being used for its intended purpose: to request catering services for events. We also need to check if the form is being submitted for the first time or if it is a duplicate. If it's a duplicate, it's possible that the form is not being used for its intended purpose. If it's not being used for its intended purpose, the form might not be effective in capturing the necessary information.

We can set up a conditional logic in our backend to check if the form is being submitted for the first time, and if so, we can display a success message and store the data. If it's a duplicate, we can display an error message and ask the user to review their submission or contact us for further assistance.

We also need to ensure that the form is being filled out correctly. For example, if a field is marked as required but left blank, we can display an error message indicating that the field is required. If a field has options, we can ensure that it's not left blank and that the user has selected an option from the list.

</thinking>

# Catering Request Form Milk and Honey - Help Guide
## Purpose
The Catering Request Form is designed to gather information about your event so that we can provide the best possible catering services for you. Please fill out this form to request catering services for your event.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name and email address.
2. Enter your phone number.
3. Select the type of event you are hosting (e.g. Wedding, Corporate Event, Birthday Party, etc.).
4. Enter the date and start time of your event.
5. Enter the location and address of your event.
6. Provide an estimate of the number of guests attending your event.
7. Choose the preferred serving style (e.g. buffet, plated, family style, etc.).
8. Choose whether you need bartenders and if so, enter how many.
9. Select the type of beverage service you require (e.g. full bar, beer and wine only, etc.).
10. If you have any special requests or custom cocktails, please let us know.
11. If you have any dietary restrictions or preferences, please let us know.
12. If you need appetizers or dessert service, please let us know.
13. If you need any rental items (e.g. tables, chairs, linens, etc.), please list them.
14. Enter your estimated budget range.
15. Let us know how you heard about us (e.g. website, social media, referral, etc.).
16. Finally, add any additional comments or requests you may have.

## Field-by-Field Explanation

* **Client Name** (`client_name`, `text`, required): Enter your full name as it appears on your event invitation or marketing materials.
* **Email Address** (`email`, `email`, required): Enter your email address so that we can contact you with any questions or concerns.
* **Phone Number** (`phone`, `text`, required): Enter your contact phone number in case we need to reach you before or after your event.
* **Company Name** (`company_name`, `text`, optional): If you are representing a company or organization, please enter your company name.
* **Event Type** (`event_type`, `select_one`, required): Select the type of event you are hosting (e.g. wedding, corporate event, birthday party, etc.).
* **Event Date** (`event_date`, `date`, required): Enter the date of your event in the correct format (MM/DD/YYYY).
* **Event Time** (`event_time`, `time`, required): Enter the start time of your event in the correct format (HH:MM AM/PM).
* **Event Location** (`event_location`, `text`, required): Enter the location of your event, including the address if applicable.
* **Venue Address** (`venue_address`, `text`, optional): If your event is at a specific venue, please enter the address.
* **Estimated Guest Count** (`guest_count`, `number`, required): Enter an estimate of the number of guests attending your event.
* **Service Style** (`service_style`, `select_one`, required): Select the preferred serving style (e.g. buffet, plated, family style, etc.).
* **Bar Staff Needed** (`bar_staff_needed`, `select_one`, required): Select whether you need bartenders and if so, how many.
* **Number of Bartenders** (`bartender_count`, `number`, optional): If you need bartenders, enter how many.
* **Beverage Service** (`beverage_service`, `select_one`, required): Select the type of beverage service you require (e.g. full bar, beer and wine only, etc.).
* **Signature Cocktails** (`signature_cocktails`, `number`, optional): If you have custom cocktails, enter the number requested.
* **Menu Preferences** (`menu_preferences`, `text`, optional): Enter any specific menu requests or preferences.
* **Dietary Restrictions** (`dietary_restrictions`, `text`, optional): If you have any dietary restrictions, please enter them.
* **Appetizers Needed** (`appetizers_needed`, `select_one`, optional): Select whether you need appetizers.
* **Dessert Service** (`dessert_needed`, `select_one`, optional): Select whether you need dessert service.
* **Rental Items Needed** (`rental_items`, `text`, optional): If you need any rental items (e.g. tables, chairs, linens, etc.), list them.
* **Budget Range** (`budget_range`, `select_one`, optional): Enter your estimated budget range.
* **How Did You Hear About Us** (`how_heard`, `select_one`, optional): Select how you heard about us (e.g. website, social media, referral, etc.).
* **Special Requests** (`special_requests`, `text`, optional): Enter any special requests or requirements.
* **Additional Comments** (`additional_comments`, `text`, optional): Add any additional comments or requests you may have.

## Tips
* Please be as specific as possible when filling out this form.
* If you have any questions or concerns, do not hesitate to contact us.
* We will contact you to confirm your submission and discuss any further details.

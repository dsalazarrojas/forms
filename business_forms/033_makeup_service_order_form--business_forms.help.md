# Makeup Service Order Form - Help Guide
## Purpose
This form is used to collect information from clients interested in booking a makeup service for an event.

## How To Complete This Form
To complete the form, please follow these steps:

1.  Fill in the contact information with your name and email address so that we can get in touch with you.
2.  Provide event details such as the event date, event time, and event location if applicable.
3.  Specify your makeup preferences including the type of makeup services, color scheme, style, color, and type of service required.
4.  Mention any allergies or medical conditions that we should know about.
5.  List any special requests you have for the event.
6.  Confirm your contact method (e.g., email, phone number, etc.).
7.  Finally, review the terms of service and confirm that you have read and understood them.

## Field-by-Field Explanation
* **Contact Information** (`contact_information`, text, required: false): Please fill in your name and email address so that we can get in touch with you.
* **Event Details** (`event_details`, text, required: false): Provide as much detail as you can about the event, including date, time, and location.
* **Makeup Preferences** (`makeup_preferences`, text, required: false): Describe your makeup preferences, such as the type of services required (e.g., basic or premium).
* **Allergies Information** (`allergies`, text, required: false): List any allergies or medical conditions we should know about.
* **Contact Method** (`contact_method`, number, required: false): Specify how you would like to be contacted (e.g., phone, email).
* **Email** (`email`, email, required: false): Enter your email address so that we can get in touch with you.
* **Phone** (`phone`, text, required: false): Enter your phone number so that we can contact you.
* **Address** (`address`, text, required: false): Enter your address so that we can send any packages or information to you.
* **City** (`city`, text, required: false): Enter the city where the event will take place.
* **State/Province** (`state_province`, text, required: false): Enter the state or province where the event will take place.
* **Postal Code** (`postal_code`, text, required: false): Enter your postal code so that we can send any packages or information.
* **Country** (`country`, text, required: false): Enter the country where the event will take place.
* **Event Name** (`event_name`, text, required: false): Enter a name for the event.
* **Event Date** (`event_date`, date, required: false): Enter the date of the event.
* **Event Time** (`event_time`, time, required: false): Enter the time of the event.
* **Event Location** (`event_location`, text, required: false): Enter the location of the event.
* **Makeup Services** (`makeup_services`, select_multiple, required: false): Select the makeup services you require (Yes/No).
* **Allergies** (`allergies`, select_one, required: false): Confirm if you have any allergies (Yes/No).
* **Allergies List** (`allergies_list`, text, required: false): If you have allergies, please list them.
* **Special Requests** (`special_requests`, text, required: false): Mention any special requests for the event.
* **Makeup Color Scheme** (`makeup_color_scheme`, select_one, required: false): Choose your preferred makeup color scheme (Yes/No).
* **Makeup Style** (`makeup_style`, select_one, required: false): Choose the style of makeup to be performed (Natural, Dramatic, Both).
* **Makeup Color** (`makeup_color`, select_one, required: false): Choose the color of makeup to be used (Yes/No).
* **Makeup Type** (`makeup_type`, select_one, required: false): Choose the type of makeup service required (Basic, Premium).
* **Terms of Service** (`terms_of_service`, note, required: false): Review and confirm that you have read and understood the terms of service.

Note: This help guide assumes that the form fields are self-explanatory or have clear labels and hints provided. If a field label is unclear, an attempt has been made to provide a reasonable explanation. However, if additional clarification is needed, please refer to the original YAML form definition.

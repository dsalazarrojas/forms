<thinking>
To create a user-facing help guide for this form, we'll need to extract relevant information from the provided YAML form schema. This form seems to be for registering some kind of event or workshop, and users are required to provide general information, contact details, and specific event details. We'll break down each field into its purpose, usage instructions, and explanations to create an intuitive help guide.
</thinking>

# <string> - Help Guide
## Purpose
This form is for registering event or workshop details. It gathers general information, contact details, and specific event information.

## How To Complete This Form
1. Fill in the form with the required information.
2. Ensure you have filled in all required fields (*first_name*, *last_name*, *email*, *phone*, *contact_email*, *contact_number*, *date*, *workshop_date*, *workshop_time*, *workshop_details* and *additional_info*).
3. Enter any optional information such as *organisation_name*, *position*, *course*, *workshop_location*, and *additional_info*.

## Field-by-Field Explanation

* **General Info** (General Info, text, required): Please provide a brief description of the event or workshop. This field is required.
* **First Name** (first_name, text, required): Enter your first name as it appears on your official documents.
* **Last Name** (last_name, text, required): Enter your last name as it appears on your official documents.
* **Email** (email, email, required): Enter a valid email address that we can contact you with.
* **Phone** (phone, text, required): Enter your contact phone number.
* **Organisation Name** (organisation_name, text, optional): If you're representing an organization, enter its name here.
* **Position** (position, text, optional): Enter your position within the organization.
* **Contact Email** (contact_email, email, required): Enter the email address of the person or organization we should contact for more information.
* **Contact Number** (contact_number, text, required): Enter the contact phone number for the person or organization.
* **Course** (course, text, optional): If this event is part of a course, describe it here.
* **Date** (date, date, required): Select the date of the event or workshop.
* **Time** (time, time, optional): Select the time of the event or workshop. If not required, you may skip this field.
* **Workshop Location** (workshop_location, text, optional): If this event is held at a specific location, enter it here.
* **Workshop Date** (workshop_date, date, required): Select the date of the workshop.
* **Workshop Time** (workshop_time, time, optional): Select the time of the workshop.
* **Workshop Details** (workshop_details, text, required): Provide a detailed description of the workshop.
* **Additional Info** (additional_info, note, optional): Enter any additional information about the event or workshop that you think would be helpful for us to know.

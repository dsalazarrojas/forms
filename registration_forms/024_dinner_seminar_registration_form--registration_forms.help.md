<thinking>
This form is used for registering attendees to a dinner seminar. It captures basic information about the event (event name) and the attendee's details (name, contact information, and dietary preferences). The form also collects information on the event details such as date and time, location and attendee's guests. This form is a standard form to be filled by anyone interested in attending the seminar.
</thinking>

# Dinner Seminar Registration Form - Help Guide
## Purpose
This form is used for registering attendees to a dinner seminar.

## How To Complete This Form
1. Please fill in the required fields, marked with an asterisk (\*).
2. For the "Attendee Diet" field, choose one of the provided options (Vegetarian, Gluten-free, Vegan) that best suits your diet requirements.
3. If you have guests, please select how many guests will be attending in the "Guest Name" field.
4. If you are bringing guests and their names are not on the provided list, please type their names in the "Other (if yes, specify)" field.

## Field-by-Field Explanation
### Event Name
 * **Event Name** (`event_name`, text, required): The name of the event.
### Attendee Name
 * **Attendee Name** (`attendee_name`, text, required): The name of the attendee filling the form.
### Email
 * **Email** (`email`, email, required): The attendee's contact email address.
### Phone
 * **Phone** (`phone`, text, required): The attendee's phone number.
### Event Date
 * **Event Date** (`event_date`, date, required): The date of the event.
### Event Time
 * **Event Time** (`event_time`, time, required): The time of the event.
### Event Location
 * **Event Location** (`event_location`, text, required): The location of the event.
### Attendee Diet
 * **Attendee Diet** (`attendee_diet`, select_one, required): Choose the attendee's diet preferences (Vegetarian, Gluten-free, Vegan, Other).
### Other (please specify)
 * **Other (please specify)** (`attendee_diet_other`, text, required when attendee_diet is "Other"): If you have selected "Other" in the Attendee Diet field, please specify your diet preferences here.
### Guest Name
 * **Guest Name** (`guest_name`, select_multiple, required): Select how many guests will be attending (True or False) and type their names if not on the list.
### Other (if yes, specify)
 * **Other (if yes, specify)** (`guest_name_other`, text, required when guest_name is "True"): If you have selected "True" in the Guest Name field and their names are not on the provided list, please type their names here.

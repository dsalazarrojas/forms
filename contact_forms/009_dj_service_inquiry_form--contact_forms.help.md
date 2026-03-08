<thinking>
To create a user-facing help guide for this form, I need to understand the purpose and context of the form. Based on the provided YAML, it seems the form is designed for clients or customers to provide information about an event where they need DJ services. The form likely helps the DJ service provider to prepare for the event by gathering essential details such as event planner name, event details, location, date, time, number of guests, contact method, event type, and other relevant information.

To avoid duplication, I will ensure that the help guide is concise and does not repeat information that can be inferred from the fields. I also need to consider the audience and language used in the guide to make it accessible and clear for the users.

</thinking>

# DJ Service Inquiry Form - Help Guide
## Purpose
The DJ Service Inquiry Form is designed for clients or customers to provide essential information about their event where they require DJ services. This form helps the DJ service provider to prepare and tailor their services according to the event's needs.

## How To Complete This Form
To fill out the form, follow these steps:

1. Fill in your **Event Planner Name** in the field labeled "Event Planner Name".
2. Provide a brief description of the event in the "Event Details" field.
3. Specify the **Event Location** where the event will take place.
4. Enter the **Event Date** in the format MM/DD/YYYY.
5. Enter the **Event Time** in 24-hour format (e.g., 14:00 for 2 PM).
6. Indicate the **Number of Guests** attending the event.
7. Choose your preferred **Contact Method** (Email, Phone, or Text).
8. Select the **Event Type** (Wedding, Corporate, or Birthday).
9. (Optional) Add any additional **DJ Preferences** in the text field.
10. Enter any **Event Notes** that might be relevant to the DJ service provider.
11. Provide your **Email** address for communication.
12. Enter your **Phone** number for quick contact.

## Field-by-Field Explanation
* **Event Planner Name** (`event_planner_name`, text, optional): Enter your name as the event planner or organizer.
* **Event Details** (`event_details`, text, optional): Briefly describe the event, including any unique details that might affect DJ service preparation.
* **Event Location** (`event_location`, text, required): Specify the location of the event, including the venue or address.
* **Event Date** (`event_date`, date, required): Enter the date of the event in the format MM/DD/YYYY.
* **Event Time** (`event_time`, time, required): Enter the time of the event in 24-hour format (e.g., 14:00 for 2 PM).
* **Number of Guests** (`number_of_guests`, number, required): Indicate the number of guests attending the event.
* **Contact Method** (`contact_method`, select_one, required): Choose how you would like to be contacted (Email, Phone, or Text).
* **Event Type** (`event_type`, select_multiple, required): Select the type of event (Wedding, Corporate, or Birthday).
* **DJ Preferences** (`dj_preferences`, text, optional): If you have any specific DJ preferences or requests, enter them here.
* **Event Notes** (`event_notes`, text, optional): Add any additional notes about the event that might be helpful for the DJ service provider.
* **DJ Notes** (`dj_notes`, text, optional): Enter any specific notes for the DJ service provider about your event.
* **Email** (`email`, email, required): Enter your email address for the DJ service provider to contact you.
* **Phone** (`phone`, text, required): Enter your phone number for quick contact.

## Tips
* Ensure all required fields are filled out to ensure proper communication and preparation for your event.
* Use the 24-hour format for the Event Time field.
* Be as detailed as possible when filling out the Event Details field to help the DJ service provider understand your event.
* If you have any questions or concerns, feel free to contact the DJ service provider using your preferred contact method.

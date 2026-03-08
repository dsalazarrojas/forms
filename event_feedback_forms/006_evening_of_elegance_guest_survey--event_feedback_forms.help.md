# evening_of_elegance_guest_survey - Help Guide
## Purpose
The evening_of_elegance_guest_survey form is designed to collect feedback from event attendees on their experience during the event. This form helps us understand what worked well and what could be improved for future events.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields (marked as required) as accurately and thoroughly as possible.
2. Use the available fields to provide as much detail as you can about your experience during the event.
3. Review your answers carefully before submitting the form.

## Field-by-Field Explanation
### How did you enjoy the event
* **How did you enjoy the event** (`event_feedback`, `text`, required: false): Please share your thoughts on the event overall. What did you enjoy most? What could be improved?

### Event satisfaction
* **Event satisfaction** (`event_satisfaction`, `text`, required: false): Rate your satisfaction with the event on a scale of 1-10, with 1 being the least satisfied and 10 being the most satisfied.

### Food and Beverage Service
* **Food and Beverage Service** (`food_service`, `select_multiple`, required: true): Select all that apply:
	+ Option 1
	+ Option 2
	+ Option 3
	+ Option 4
	+ Option 5

### What would make this event better?
* **What would make this event better?** (`guest_preferences`, `text`, required: false): Share any ideas or suggestions you have on how we could improve the event.

### Contact Information
* **Contact Information** (`contact_information`, `email`, required: true): Please provide your email address so we can follow up with you.

### Comments
* **Comments** (`comments`, `note`, required: false): Share any additional comments or thoughts you have about the event.

### Date
* **Date** (`date`, `date`, required: true): Enter the date of the event you attended.

### Time
* **Time** (`time`, `time`, required: false): Enter the time of the event you attended. Please note that this field is optional.

### Phone
* **Phone** (`phone`, `text`, required: false): Please do not provide your phone number unless absolutely necessary.

### Email
* **Email** (`email`, `email`, required: false): This field is for verification purposes only; we will not use it for any other purpose than to follow up with you regarding your feedback.

<thinking>

We're creating a form for collecting feedback from users after a vendor event. This form is designed to gauge the success and areas of improvement of the event, ensuring we provide the best experience for our vendors in the future.

This form will likely be used by users who have attended a vendor event, and it's essential that they understand what the form is for and what we're trying to achieve with it. We want to encourage users to fill out the form completely and honestly, so we'll make sure to clarify each question and provide helpful hints where needed.

We'll be using this form to collect data on various aspects of the event, including overall satisfaction, satisfaction levels, and areas of improvement. This data will help us refine our event process and improve our relationships with vendors.

</thinking>

# Vendor Post Event Feedback Poll - Help Guide
## Purpose
This form is designed to collect feedback from users after a vendor event. It's used to gauge overall satisfaction, identify areas of improvement, and plan follow-up actions with the vendor.

## How To Complete This Form
To complete this form, follow these steps:

*   Fill out your event name, vendor name, event date, event time, and event location. These fields are used to provide context about the event.
*   Rate your overall satisfaction with the event on a scale from 1-5.
*   Provide feedback about your experience with the event using the "Feedback" field.
*   Choose how you would rate your satisfaction level with the event. You can select "High", "Medium", or "Low".
*   Select all the areas where you felt the event could have been improved or where the vendor excelled.
*   Choose the next step you would like to see happen with your vendor.

## Field-by-Field Explanation
*   **Event Name** (`event_name`, `text`, required: false): 
    Enter the name of the event you attended.
*   **Overall Satisfaction** (`overall_satisfaction`, `number`, required: false): 
    Rate your overall satisfaction with the event on a scale from 1-5.
*   **Vendor Name** (`vendor_name`, `text`, required: false): 
    Enter the name of the vendor who hosted the event.
*   **Feedback** (`feedback`, `note`, required: false): 
    Provide any feedback you have about your experience with the event.
*   **Event Date** (`event_date`, `date`, required: false): 
    Enter the date of the event.
*   **Event Time** (`event_time`, `time`, required: false): 
    Enter the time of the event.
*   **Venue Name** (`venue_name`, `text`, required: false): 
    Enter the venue name where the event took place.
*   **Event Location** (`event_location`, `text`, required: false): 
    Enter the location of the event.
*   **Satisfaction Level** (`satisfaction_level`, `select_one`, required: false):
    Rate your satisfaction level with the event. Select "High", "Medium", or "Low".
*   **Satisfaction Areas** (`satisfaction_areas`, `select_multiple`, required: false): 
    Select all areas where you felt the event could have been improved or where the vendor excelled.
*   **Next Step** (`next_step`, `select_one`, required: false): 
    Choose the next step you would like to see happen with your vendor. Select "Follow-up call", "Follow-up email", or "No follow-up".

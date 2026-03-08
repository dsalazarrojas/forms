# Stage Rehearsal Time Request Form - Help Guide
## Purpose
The Stage Rehearsal Time Request Form is used to request a specific time for a stage rehearsal. This form is meant for internal use within the organization and is not intended for external users. Please ensure that you only submit this form once for each requested time period.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you are submitting a new request and not a duplicate. 
2. Select your preferred date for the rehearsal time using the date picker on the "Rehearsal Time" field.
3. Indicate if technical needs are required using the "Technical Needs" field. You can select one or more options from the dropdown menu.
4. Choose your preferred start and end time using the time picker on the "Preferred Start Time" and "Preferred End Time" fields.
5. Fill in the Event Name field with a brief description of the event.
6. Specify the Event Location where the event will take place.
7. If you have any special requirements for the event, such as technical needs, please list them in the "Special Requests" field.
8. Provide any additional event details in the "Event Details" field.

## Field-by-Field Explanation
- **Rehearsal Time** (`stage_rehearsal_time_request_form`, date, required: false): Select a specific date for the stage rehearsal time request.
  - Please note that the form will only work if you select a date within the allowed date range.
- **Technical Needs** (`technical_needs`, select_multiple, required: false): Choose if you have any technical needs for the event.
  - This field is not explicitly defined in the provided YAML, but based on best-effort explanation, it's likely used to indicate if any technical needs are required for the event.
- **Preferred Start Time** (`preferred_start_time`, time, required: false): Select the preferred start time for the stage rehearsal.
  - This field is likely used to indicate the start time of the event.
- **Preferred End Time** (`preferred_end_time`, time, required: false): Select the preferred end time for the stage rehearsal.
  - This field is likely used to indicate the end time of the event.
- **Event Name** (`event_name`, text, required: false): Fill in a brief description of the event.
  - This field is used to provide a short description of the event.
- **Event Location** (`event_location`, text, required: false): Specify the location where the event will take place.
  - This field is used to provide the event location.
- **Technical Requirements** (`technical_requirements`, text, required: false): If you have any special technical requirements, please list them in this field.
  - This field is used to list any technical requirements for the event.
- **Special Requests** (`special_requests`, text, required: false): If you have any other special requests, please list them in this field.
  - This field is used to provide any additional special requests.
- **Event Details** (`event_details`, text, required: false): Provide any additional event details in this field.
  - This field is used to provide any additional information about the event.

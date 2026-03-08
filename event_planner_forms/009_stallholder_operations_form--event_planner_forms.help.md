# Stallholder Operations Form - Help Guide
## Purpose
The Stallholder Operations Form is a tool used to collect and track information about events. It provides a comprehensive overview of the event, including details about the event itself and its associated stallholder.
## How To Complete This Form
To fill out this form, follow these steps:
1. **Enter Event Information**:
    - Enter the `event_id` to link to the event you want to manage.
    - Provide the `event_name` to give a brief name to the event.
    - Select the `event_type` to categorize the event (e.g., "Option 1" or "Option 2").
    - If applicable, set the `event_status` field to indicate the event's status.
2. **Add Event Details**:
    - Enter the `event_start_date` and `event_start_time` to specify the event's start date and time.
    - Enter the `event_end_date` and `event_end_time` to specify the event's end date and time.
    - Provide the `event_address` and `event_location` to indicate the event's address and location.
    - Enter the `event_description` to give a brief description of the event.
3. **Add Owner Information**:
    - Enter the `event_owner_id` to link to the owner of the event (if applicable).
    - Enter the `event_owner_name`, `event_owner_email`, and `event_owner_phone` to provide contact information for the owner.
4. **Add Stallholder Information**:
    - Enter the `event_stallholder_id` to link to the stallholder associated with the event (if applicable).
    - Enter the `event_stallholder_name` and `event_stallholder_status` to specify the stallholder's name and status (e.g., "Option 1", "Option 2", or "Option 3").
    - If applicable, set the `event_stallholder_start_date` and `event_stallholder_start_time` to specify the stallholder's start date and time.
    - Enter the `event_stallholder_address` and `event_stallholder_location` to indicate the stallholder's address and location.
## Field-by-Field Explanation
* **Event Id** (`event_id`, text, optional): Enter the unique identifier for the event.
* **Event Name** (`event_name`, text, optional): Give a brief name to the event.
* **Event Type** (`event_type`, select_one, required): Choose the type of event (e.g., "Option 1" or "Option 2").
* **Event Status** (`event_status`, select_multiple, optional): Select the status of the event (e.g., "Option 1", "Option 2", or "Option 3").
* **Event Start Date** (`event_start_date`, date, optional): Enter the date of the event start in YYYY-MM-DD format.
* **Event Start Time** (`event_start_time`, time, optional): Enter the time of the event start in HH:MM format.
* **Event End Date** (`event_end_date`, date, optional): Enter the date of the event end in YYYY-MM-DD format.
* **Event End Time** (`event_end_time`, time, optional): Enter the time of the event end in HH:MM format.
* **Event Address** (`event_address`, text, optional): Enter the event address.
* **Event Location** (`event_location`, text, optional): Enter the event location.
* **Event Description** (`event_description`, text, optional): Give a brief description of the event.
* **Event Notes** (`event_notes`, note, optional): Add any additional notes about the event.
* **Event Owner Id** (`event_owner_id`, number, optional): Enter the unique identifier for the event owner.
* **Event Owner Name** (`event_owner_name`, text, optional): Enter the name of the event owner.
* **Event Owner Email** (`event_owner_email`, email, optional): Enter the email of the event owner.
* **Event Owner Phone** (`event_owner_phone`, text, optional): Enter the phone number of the event owner.
* **Event Stallholder Id** (`event_stallholder_id`, number, optional): Enter the unique identifier for the stallholder.
* **Event Stallholder Name** (`event_stallholder_name`, text, optional): Give a brief name to the stallholder.
* **Event Stallholder Status** (`event_stallholder_status`, select_one, optional): Select the status of the stallholder (e.g., "Option 1", "Option 2", or "Option 3").
* **Event Stallholder Start Date** (`event_stallholder_start_date`, date, optional): Enter the start date of the stallholder in YYYY-MM-DD format.
* **Event Stallholder Start Time** (`event_stallholder_start_time`, time, optional): Enter the start time of the stallholder in HH:MM format.
* **Event Stallholder End Date** (`event_stallholder_end_date`, date, optional): Enter the end date of the stallholder in YYYY-MM-DD format.
* **Event Stallholder End Time** (`event_stallholder_end_time`, time, optional): Enter the end time of the stallholder in HH:MM format.
* **Event Stallholder Address** (`event_stallholder_address`, text, optional): Enter the address of the stallholder.
* **Event Stallholder Location** (`event_stallholder_location`, text, optional): Enter the location of the stallholder.
## Tips
* Make sure to fill out all required fields (indicated by *) to ensure accurate event information.
* Use the event_id to link to the event you want to manage.
* Double-check the event and stallholder fields for accuracy.
* Use the event description to add any additional notes or comments about the event.

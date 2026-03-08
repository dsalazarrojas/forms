# Photobooth Events Booking Form - Help Guide
## Purpose
The Photobooth Events Booking Form is designed for event organizers to book photobooth services for their events. This form collects necessary information to provide a comprehensive and customized photobooth experience.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the event details such as event name, start and end dates, start and end times, and photobooth type.
2. Select the number of photo servers and photo resolution required for the event.
3. Choose the photo printing options and upload method.
4. Provide the event location and number of photo servers.
5. Enter the photobooth equipment and other equipment prices (dependent on photobooth type).
6. Fill in the event organizer's and client's contact information.
7. Review and submit the form to book the photobooth services.

## Field-by-Field Explanation
* **Event Organizer Name** (`event_organizer_name`, text, optional): Enter your event name.
* **Event Name** (`event_name`, text, optional): Enter the name of the event.
* **Start Date** (`start_date`, date, optional): Enter the start date of the event.
* **End Date** (`end_date`, date, optional): Enter the end date of the event.
* **Start Time** (`start_time`, time, optional): Enter the start time of the event.
* **End Time** (`end_time`, time, optional): Enter the end time of the event.
* **Photobooth Type** (`photobooth_type`, select_one, required): Select the type of photobooth service required (Basic, Premium, Pro).
* **Photo Servers** (`photo_servers`, select_multiple, optional): Select the number of photo servers required (dependent on photobooth type).
* **Photo Servers Count** (`photo_servers_count`, number, optional): Enter the number of photo servers required (dependent on photobooth type).
* **Photo Resolution** (`photo_resolution`, select_one, required): Select the photo resolution required (720px, 1080px, 1440px).
* **Photo Printing** (`photo_printing`, select_multiple, required): Select the photo printing options (On site, Email, Download).
* **Photo Upload** (`photo_upload`, text, required): Enter the method for photo upload.
* **Photobooth Location** (`photobooth_location`, text, optional): Enter the location of the photobooth.
* **Photobooth Equipment Price** (`photobooth_equipment_price`, number, optional): Enter the price of the photobooth equipment (dependent on photobooth type).
* **Other Equipment Price** (`other_equipment_price`, number, optional): Enter the price of other equipment (dependent on photobooth type).
* **Event Organizer Email** (`event_organizer_email`, email, optional): Enter the event organizer's email.
* **Event Organizer Phone** (`event_organizer_phone`, text, optional): Enter the event organizer's phone number.
* **Event Organizer Phone 2** (`event_organizer_phone_2`, text, optional): Enter the second phone number of the event organizer.
* **Event Organizer Notes** (`event_organizer_notes`, text, optional): Enter notes for the event organizer.
* **Client Name** (`client_name`, text, optional): Enter the client's name.
* **Client Email** (`client_email`, email, optional): Enter the client's email.
* **Client Phone** (`client_phone`, text, optional): Enter the client's phone number.
* **Client Notes** (`client_notes`, text, optional): Enter notes for the client.
* **Assigned Tool** (`assigned_tool`, text, required): Enter the assigned tool for the event.

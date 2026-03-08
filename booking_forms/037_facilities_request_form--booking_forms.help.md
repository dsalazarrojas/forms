# Facilities Request Form - Help Guide

## Purpose
The Facilities Request Form is used to request facility-related services for events or meetings. You can use this form to provide details about the event, such as contact information, event details, and equipment requirements.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your contact information, including your name and any relevant contact details.
2. Enter a brief description of the event, including the title if applicable.
3. Specify the start and end dates of the event.
4. Enter the number of people expected to attend the event.
5. If necessary, provide details about the number of chairs, tables, and external forms needed.

## Field-by-Field Explanation
* **Contact Information** (`contact_information`, text, required: false): Enter your name and any relevant contact details, so we can reach you about your event.
* **Name** (`name`, text, required: false): Enter a brief description of the event, including its title if applicable.
* **Facility Name** (`facility_name`, text, required: false): Enter the name of the facility where the event will take place.
* **Dates** (`dates`, text, required: false): Enter the start and end dates of the event. The format is typically MM/DD/YY, but be aware that it may not be validated for errors.
* **Start Date** (`start_date`, date, required: false): Enter the start date of the event.
* **End Date** (`end_date`, date, required: false): Enter the end date of the event.
* **Number of Expected** (`number_of_expected`, number, required: false): Enter the number of people expected to attend the event.
* **People Expected** (`people_expected`, number, required: false): Enter the number of people expected to attend the event. (Note: This field seems to be redundant with "Number of Expected". Consider removing it or merging the two fields into one.)
* **Chair Request** (`chair_request`, number, required: false): Enter the number of chairs needed for the event.
* **Table Request** (`table_request`, number, required: false): Enter the number of tables needed for the event.
* **External Form Link** (`external_form_link`, text, required: false): If applicable, provide a link to an external form that requires completion. This may be a survey or other form that is necessary for event registration.

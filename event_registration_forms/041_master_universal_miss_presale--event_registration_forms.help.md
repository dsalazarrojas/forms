# Master Universal Miss Presale - Help Guide

## Purpose
The Master Universal Miss Presale form is used to register events and manage presale-related information. It allows users to input details such as event title, dates, and presale status, as well as track event and presale progress. This form is essential for event organizers to keep accurate and up-to-date records of their events and presales.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields: `attendee_name`, `event_date`, `presale_start_date`, `presale_end_date`, `presale`, and `ticket`.
2. If necessary, select the relevant options for `guest_badge_type`, `photo_pass`, `prophets`, `ticket_price_currency`, and `presale_status`.
3. Enter the number of guest badges and photo passes required for the event.

## Field-by-Field Explanation

* **event_registration_form** (`event_registration_form`, text, required: false): This field is for the event name.
* **guest_badge_type** (`guest_badge_type`, select_one, required: false): This field determines whether or not guest badges are available for the event.
* **guest_badge_quantity** (`guest_badge_quantity`, number, required: true): Enter the number of guest badges available for the event.
* **photo_pass** (`photo_pass`, select_one, required: false): This field determines whether photo passes are available for the event.
* **photo_pass_quantity** (`photo_pass_quantity`, number, required: true): Enter the number of photo passes available for the event.
* **attendee_name** (`attendee_name`, text, required: true): Enter the attendee's name.
* **event_date** (`event_date`, date, required: true): Enter the date of the event.
* **ticket_price** (`ticket_price`, number, required: true): Enter the price of a ticket.
* **ticket_price_currency** (`ticket_price_currency`, select_one, required: false): This field determines the currency of the ticket price.
* **presale_start_date** (`presale_start_date`, date, required: true): Enter the start date of the presale period.
* **presale_end_date** (`presale_end_date`, date, required: true): Enter the end date of the presale period.
* **event_status** (`event_status`, select_one, required: false): This field determines the status of the event.
* **presale_status** (`presale_status`, select_one, required: false): This field determines the status of the presale.
* **prophets** (`prophets`, select_multiple, required: false): This field determines whether or not prophets are available for the event.
* **ticket** (`ticket`, number, required: true): Enter the ticket number.
* **presale** (`presale`, number, required: false): Enter the number of presale.

Note: This guide is a general explanation of the form fields and their purpose. Please refer to your specific event management system or guidelines for specific requirements and restrictions.

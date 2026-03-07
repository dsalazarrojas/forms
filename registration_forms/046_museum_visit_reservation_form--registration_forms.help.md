<thinking>
This guide is intended to help users understand the purpose and functionality of the Museum Visit Reservation Form. This form is designed to gather information for visitors to reserve a spot at the museum. It should only be filled out by individuals who intend to actually visit the museum, not by museum staff or internal stakeholders. Please do not fill out this form to check its functionality or for test purposes.
</thinking>

# Museum Visit Reservation Form - Help Guide

## Purpose

The Museum Visit Reservation Form is designed to collect information from visitors to reserve a spot at the museum. It will be used to determine the availability of a given time slot and to manage reservations for museum visits.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the date you would like to visit the museum.
2. Enter your name, email, and phone number so we can contact you with reservation details.
3. Choose a time that suits you best for your visit.
4. Provide any additional notes or comments you have regarding your visit.
5. Choose the number of visitors in your group.
6. Select if the time slot is available or reserved.
7. Optionally, you can provide a reservation ID if you have been given one.

## Field-by-Field Explanation

* **Visit Date** (`visit_date`, date, required: false): Choose the date you would like to visit the museum.
* **Name** (`name`, text, required: false): Enter your name so we can contact you with reservation details.
* **Email** (`email`, email, required: false): Enter a valid email address so we can contact you with reservation details.
* **Phone** (`phone`, text, required: false): Enter your phone number so we can contact you with reservation details.
* **Time** (`time`, time, required: false): Choose a time that suits you best for your visit.
* **Notes** (`notes`, note, required: false): Provide any additional notes or comments you have regarding your visit.
* **Visitor Capacity** (`visitor_capacity`, number, required: false): Choose the number of visitors in your group.
* **Reservation Status** (`reservation_status`, select_one, required: false): Select if the time slot is available or reserved.
* **Reservation ID** (`reservation_id`, number, required: false): Optionally, you can provide a reservation ID if you have been given one.
* **Form ID** (`form_id`, number, required: false): This is an internal field and does not require a value.

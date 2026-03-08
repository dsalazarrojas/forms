# Airline Seating Change Request Form - Help Guide

## Purpose

The Airline Seating Change Request Form is a tool used to request changes to your seat allocation on a flight. You can use this form to submit your request and communicate with the airline's customer support team.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your **Passenger Full Name** as it appears on your travel documents.
2. Enter your **Email Address** where you would like to be contacted for updates or additional information.
3. Enter the **Booking Reference (PNR)** as provided to you by the airline or travel agency.
4. Enter the **Flight Number** as provided by the airline.
5. Provide a brief description for **-- Seat Change Request --** if necessary. This field is optional and can be used to describe your reason for requesting a seat change.
6. Enter your current **Seat Number** as it appears on your boarding pass or ticket.
7. Enter the **Requested Seat Number** if you are requesting a specific seat.
8. Select a reason for your **Reason for Change** from the provided options (Group seating request, Medical or mobility reasons, Preferred seat location (Window/Aisle), Extra legroom request, Cabin upgrade inquiry, or Other).
9. Enter a detailed explanation for **Details of Change Request**.
10. If applicable, enter the **Names of Group Members** you are traveling with.
11. If applicable, confirm whether you have **medical documentation** for your seat change request.
12. Select the **Urgency Level** of your request (High, Medium, or Low).
13. Choose your **Preferred Follow-up Method** for updates or additional information (Email, Phone, or SMS).
14. Finally, select **I understand** that seat changes are subject to availability and airline policies.

## Field-by-Field Explanation

* **Passenger Full Name** (`full_name`, `text`, required): Enter your full name as it appears on your travel documents.
* **Email Address** (`contact_email`, `email`, required): Enter the email address where you would like to be contacted for updates or additional information.
* **Booking Reference (PNR)** (`booking_reference`, `text`, required): Enter the booking reference as provided to you by the airline or travel agency.
* **Flight Number** (`flight_number`, `text`, required): Enter the flight number as provided by the airline.
* **-- Seat Change Request --** (`section_request`, `note`, optional): Provide a brief description for your seat change request if necessary.
* **Current Seat Number** (`current_seat_number`, `text`, required): Enter your current seat number as it appears on your boarding pass or ticket.
* **Requested Seat Number** (`requested_seat_number`, `text`, optional): Enter the seat number you are requesting if you are requesting a specific seat.
* **Reason for Change** (`reason_for_change`, `select_one`, required): Select a reason for your seat change from the provided options (Group seating request, Medical or mobility reasons, Preferred seat location (Window/Aisle), Extra legroom request, Cabin upgrade inquiry, or Other).
* **Details of Change Request** (`change_description`, `text`, required): Enter a detailed explanation for your seat change request.
* **Names of Group Members** (`group_members`, `text`, optional): If you are traveling with others, enter their names here.
* **I have medical documentation for this request** (`medical_confirmation`, `select_one`, optional): If applicable, confirm whether you have medical documentation for your seat change request.
* **Urgency Level** (`urgency_level`, `select_one`, required): Select the urgency level of your request (High, Medium, or Low).
* **Preferred Follow-up Method** (`follow_up_method`, `select_one`, required): Choose your preferred method for updates or additional information (Email, Phone, or SMS).
* **I understand** (`consent_statement`, `select_one`, required): Select **I understand** that seat changes are subject to availability and airline policies.

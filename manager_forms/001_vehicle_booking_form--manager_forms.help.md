# vehicle_booking_form - Help Guide
## Purpose
The vehicle_booking_form is used to track and manage vehicle bookings, assignments, and status updates. This form captures essential information about vehicle bookings, including details about the booking, vehicle, and user involvement.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the vehicle to be booked by choosing from the "Select Vehicle" dropdown menu.
2. Choose the start and end dates of the booking using the "Select Start Date" and "Select End Date" fields.
3. Select the user responsible for the booking from the "Select User" dropdown menu.
4. Update the vehicle status as "Active" or "Inactive" using the "Vehicle Status" dropdown menu.
5. Choose any additional vehicle types that apply using the "Vehicle Type" dropdown menu.
6. Enter any comments or notes about the booking in the "Comments" field.
7. Enter the email and phone number of the user in the "Email" and "Phone" fields.
8. Update the created and updated dates and times using the "Created At", "Updated At", and "Updated By" fields.

## Field-by-Field Explanation

* **Booking Details** (`booking_details`, `text`, required: false): Enter a brief description of the booking.
* **Select Start Date** (`start_date`, `date`, required: false): Select the start date of the booking.
* **Select End Date** (`end_date`, `date`, required: false): Select the end date of the booking.
* **Select Vehicle** (`vehicle`, `select_one`, required: false): Choose the vehicle to be booked.
* **Select User** (`user`, `select_multiple`, required: false): Select the user responsible for the booking.
* **Status** (`status`, `select_one`, required: false): Update the vehicle status as "Active" or "Inactive".
* **Notes** (`notes`, `note`, required: false): Enter any comments or notes about the booking.
* **Assigned User** (`assigned_user`, `select_one`, required: false): Choose the user assigned to the booking.
* **Comments** (`comments`, `text`, required: false): Enter any comments about the booking.
* **Email** (`email`, `email`, required: false): Enter the email of the user.
* **Phone** (`phone`, `text`, required: false): Enter the phone number of the user.
* **Created At** (`created_at`, `date`, required: false): Update the created date and time.
* **Updated At** (`updated_at`, `date`, required: false): Update the updated date and time.
* **Deleted At** (`deleted_at`, `date`, required: false): Update the deleted date and time.
* **Vehicle Make** (`vehicle_make`, `text`, required: false): Enter the vehicle make.
* **Vehicle Model** (`vehicle_model`, `text`, required: false): Enter the vehicle model.
* **Vehicle Year** (`vehicle_year`, `number`, required: false): Enter the vehicle year.
* **Vehicle Status** (`vehicle_status`, `select_one`, required: false): Update the vehicle status as "Active" or "Inactive".
* **Vehicle Type** (`vehicle_type`, `select_multiple`, required: false): Choose any additional vehicle types.
* **Vehicle Color** (`vehicle_color`, `text`, required: false): Enter the vehicle color.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Choose if the vehicle is assigned to a tool.
* **Assigned Date** (`assigned_date`, `date`, required: false): Update the assigned date.
* **Created By** (`created_by`, `select_one`, required: false): Choose the user who created the booking.
* **Updated By** (`updated_by`, `select_one`, required: false): Choose the user who updated the booking.

# Accommodation Booking Approval Form - Help Guide

## Purpose
This form is designed to capture information for accommodation booking requests. It is intended for staff to approve or reject such requests, providing an easy-to-use interface for quick and efficient processing. 

## How To Complete This Form
To fill out this form, simply follow the steps below:

* Enter the guest's full name in the "Guest Full Name" field.
* Provide the guest's email address in the "Email Address" field.
* Enter the guest's phone number in the "Phone Number" field.
* If the guest is from a company or organization, please provide the name of the company or organization in the "Company or Organization (if applicable)" field.
* Select the property or accommodation name from the list provided or type it in manually.
* Choose the room type that the guest has requested (e.g., Single room, Double room, Suite, etc.).
* Enter the check-in date in the "Check-In Date" field.
* Enter the check-out date in the "Check-Out Date" field.
* Specify the number of guests that will be staying in the accommodation.
* Choose the purpose of the guest's stay from the list provided (e.g., Business travel, Conference or event, Vacation or leisure, etc.).
* If there are any special requests or requirements (e.g., accessibility needs, dietary requirements, late check-in), provide them in the "Special Requests or Requirements" field.
* Estimate the total cost of the booking in the "Estimated Total Cost" field.
* Choose the payment method used (e.g., Company credit card, Purchase order, Personal payment, etc.).
* Enter the budget code or cost center if applicable.
* Select the approval status (e.g., Approved, Pending review, Denied, Requires modification).
* If necessary, add any notes or comments about the approval status in the "Approval Notes or Comments" field.

## Field-by-Field Explanation
* **Guest Full Name** (`guest_name`, `text`, required): Enter the guest's full name.
* **Email Address** (`guest_email`, `email`, required): Provide the guest's email address.
* **Phone Number** (`guest_phone`, `text`, required): Enter the guest's phone number.
* **Company or Organization (if applicable)** (`company_or_organization`, `text`, optional): If the guest is from a company or organization, enter their name.
* **Property or Accommodation Name** (`property_name`, `text`, required): Select or enter the name of the accommodation.
* **Room Type Requested** (`room_type`, `select_one`, required): Choose the room type the guest has requested.
* **Check-In Date** (`check_in_date`, `date`, required): Enter the guest's check-in date.
* **Check-Out Date** (`check_out_date`, `date`, required): Enter the guest's check-out date.
* **Number of Guests** (`number_of_guests`, `number`, required): Specify the number of guests.
* **Purpose of Stay** (`purpose_of_stay`, `select_one`, required): Choose the purpose of the guest's stay.
* **Special Requests or Requirements** (`special_requests`, `text`, optional): If there are any special requests or requirements, enter them here.
* **Estimated Total Cost** (`estimated_cost`, `number`, required): Estimate the total cost of the booking.
* **Payment Method** (`payment_method`, `select_one`, required): Choose the payment method used.
* **Budget Code or Cost Center** (`budget_code`, `text`, optional): Enter the budget code or cost center if applicable.
* **Approver Name** (`approver_name`, `text`, required): Enter your name as the approver.
* **Approval Status** (`approval_status`, `select_one`, required): Select the approval status of the booking.
* **Approval Notes or Comments** (`approval_notes`, `text`, optional): If necessary, add any notes or comments about the approval status.

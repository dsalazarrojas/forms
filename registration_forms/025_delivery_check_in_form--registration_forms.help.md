<thinking>

The purpose of this form is to facilitate the process of recording and tracking deliveries, ensuring accurate and up-to-date information is captured for each delivery. This form should only be used for deliveries that are being checked in, not for deliveries that have already been checked in or are not applicable.

Before filling out this form, ensure that you have already checked in your delivery and that it is an active delivery. If it's a new delivery or an old delivery that hasn't been checked in, please use the correct form for that scenario.

Also, be aware that the delivery status field is marked as required, ensuring that you provide an accurate update for the delivery status.</thinking>

# Delivery Check In Form - Help Guide
## Purpose
The Delivery Check In Form is used to record and track deliveries, allowing for accurate and up-to-date information to be captured for each delivery. It is recommended to use this form for active and checked-in deliveries only.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the date of the delivery from the calendar or enter the date manually.
2. Choose the correct time of the delivery.
3. Enter the location where the delivery took place or is scheduled to take place.
4. Select the current status of the delivery from the dropdown menu.
5. Enter the contact person's name for the delivery.
6. Enter the contact person's number for the delivery.

## Field-by-Field Explanation
- **Delivery Date** (`delivery_date`, date, required: false): Enter the date of the delivery.
- **Delivery Time** (`delivery_time`, time, required: false): Enter the time of the delivery.
- **Delivery Location** (`delivery_location`, text, required: false): Enter the location where the delivery took place or is scheduled to take place.
- **Delivery Status** (`delivery_status`, select_one, required: true): Select the current status of the delivery from the provided options.
	+ In Transit
	+ Out for Delivery
	+ On Hold
- **Delivery Contact Name** (`delivery_contact_name`, text, required: false): Enter the contact person's name for the delivery.
- **Delivery Contact Number** (`delivery_contact_number`, text, required: false): Enter the contact person's number for the delivery.

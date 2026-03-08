# Travel Permission For Minors Form - Help Guide
## Purpose
The Travel Permission For Minors Form is used to collect necessary information from a parent or guardian for a minor's travel, ensuring that the parent is aware and agrees to the terms of the trip.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the **Parent Information** section with your name, address, and contact information.
2. Provide details about your child's travel, including the travel agency and flight information (if applicable).
3. Enter the dates of your child's travel, including departure and return dates.
4. Specify the duration of your child's trip.
5. Enter the estimated cost of your child's trip.
6. Sign and date the **Parent Signature** section to confirm your agreement to your child's travel.

## Field-by-Field Explanation
* **Parent Information (Page 1)** (`parent_info`, text, required):
	+ Fill in your name and contact information, as the school or organization will use this to reach you.
* **Travel Agency (Page 1)** (`travel_agency`, select_one, required):
	+ Select the airline or travel agency your child will be using for their trip.
* **Travel Information (Page 1)** (`travel_info`, text, optional):
	+ Enter any additional travel information, such as booking reference numbers or flight numbers.
* **Travel Date (Page 2)** (`travel_date`, date, optional):
	+ Enter the date of your child's departure and return.
* **Travel Time (Page 2)** (`travel_time`, time, optional):
	+ Enter the scheduled departure and arrival times.
* **Return Date (Page 2)** (`return_date`, date, optional):
	+ Enter the date and time of your child's return.
* **Other Travel Agency (Page 2)** (`other_travel_agency`, text, optional):
	+ Enter any alternative travel agency or transportation method your child may be using.
* **Trip Duration (Page 3)** (`trip_duration`, number, required):
	+ Enter the number of days your child will be away.
* **Trip Cost (Page 3)** (`trip_cost`, number, required):
	+ Enter the estimated cost of your child's trip.
* **Parent Contact (Page 3)** (`parent_contact`, select_multiple, required):
	+ Select the best way to reach you, including phone, email, or address.
* **Parent Signature (Page 4)** (`parent_signature`, note, required):
	+ Sign and date the form to confirm your agreement to your child's travel.

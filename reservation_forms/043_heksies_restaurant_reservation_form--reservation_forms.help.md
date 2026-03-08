# Heksies Restaurant Reservation Form - Help Guide
## Purpose
This form is for making a restaurant reservation. You can fill it out with the necessary information to make your reservation.

## How To Complete This Form
1. Fill in your personal details: First name, Last name, and Email.
2. Provide your contact information: Phone number and Number of guests.
3. Select the date and time for your reservation using the "Date" and "Time" fields.
4. Add a "Reservation note" if you have any specific requests or comments.
5. Choose the type of reservation you'd like to make: Table, Outdoor, Indoor, or Private room.
6. Indicate the status of your reservation: Confirmed, Pending, or Cancelled.
7. Finally, select the duration of your reservation in the "Reservation length" field.

## Field-by-Field Explanation
* **First name** (`first_name`, text, optional): Enter your first name.
* **Last name** (`last_name`, text, optional): Enter your last name.
* **Email** (`email`, email, optional): Enter your Email address.
* **Phone number** (`phone`, text, optional): Enter your phone number.
* **Date** (`date`, date, optional): Select the date of your reservation.
* **Time** (`time`, time, optional): Select the time of your reservation.
* **Reservation date** (`reservation_date`, date, optional): This field seems to be a duplicate of "Date." You can ignore it for this form.
* **Reservation length** (`reservation_length`, number, optional): Enter the length of your reservation.
* **Number of guests** (`guests`, number, optional): Enter the number of guests attending the reservation.
* **Reservation note** (`reservation_note`, note, optional): Add any additional comments about your reservation.
* **Reservation type** (`reservation_type`, select_one, optional): Choose from the options:
	+ **Table**: A standard table reservation.
	+ **Outdoor**: A reservation in an outdoor setting.
	+ **Indoor**: A reservation indoors.
	+ **Private room**: A reservation in a private room.
* **Reservation status** (`reservation_status`, select_multiple, optional): Choose from the options:
	+ **Confirmed**: Your reservation is confirmed.
	+ **Pending**: Your reservation is in the process of being confirmed.
	+ **Cancelled**: Your reservation has been cancelled.
* **Reservation length** (`reservation_length`, number, optional): Enter the duration of your reservation.
* **Assigned tool** (`assigned_tool`, text, optional): This field seems to be related to internal system management and can be ignored.
* **Assigned to** (`assigned_to`, text, optional): This field also seems to be related to internal system management and can be ignored.

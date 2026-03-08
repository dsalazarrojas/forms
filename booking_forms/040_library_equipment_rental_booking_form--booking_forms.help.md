# Library Equipment Rental Booking Form - Help Guide
## Purpose
This form is used for booking library equipment for a specific duration. It's essential to fill out this form accurately to ensure that the equipment is available for use during the requested period. 

## How To Complete This Form
To complete this form, please follow these steps:
1. Select the start and end dates for the equipment booking.
2. Choose the type of equipment you require.
3. Select the staff member responsible for the booking.
4. Choose the department for the booking.
5. (Optional) Enter any additional start and end times, along with the duration of the booking.
6. (Optional) Add any notes or comments.
7. (Optional) Enter your email address and/or phone number for contact purposes.

## Field-by-Field Explanation
* **Start Date** (`start_date`, date, required/optional): This field is used to select the start date for the booking. Choose the date you want the equipment to be available from.
* **End Date** (`end_date`, date, required/optional): This field is used to select the end date for the booking. Choose the date you want the equipment to be available until.
* **Equipment Type** (`equipment_type`, select_one, required): This field is used to choose the type of equipment you need. Select one from the available options.
* **Staff Member** (`staff_member`, select_one, required): This field is used to select the staff member responsible for the booking. Select one from the available options.
* **Start Time** (`start_time`, time, required/optional): This field is used to choose the start time for the booking. If you've selected a start date, this field will be required.
* **End Time** (`end_time`, time, required/optional): This field is used to choose the end time for the booking. If you've selected a start date, this field will be required.
* **Duration** (`duration`, number, required/optional): This field is used to choose the duration of the booking. If you've selected a start and end times, this field will be automatically calculated and not required to fill.
* **Department** (`department`, select_one, required): This field is used to choose the department for the booking. Select one from the available options.
* **Notes** (`notes`, note, required/optional): This field is used to add any additional comments or notes for the booking. If you have any specific requests or information, use this space to provide details.
* **Email** (`email`, email, required/optional): This field is used to enter your email address for contact purposes.
* **Phone** (`phone`, text, required/optional): This field is used to enter your phone number for contact purposes. 

Note: The form has been designed with an aim to provide all necessary information for the library staff to process your booking request. Please fill it out accordingly to ensure that your request is processed correctly. 

Please let us know if you have any questions or need clarification on any of the fields. 

Best regards, Library Management

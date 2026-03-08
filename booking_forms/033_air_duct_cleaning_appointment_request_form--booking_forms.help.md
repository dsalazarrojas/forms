# Air Duct Cleaning Appointment Request Form - Help Guide
## Purpose
This form is used to request an air duct cleaning appointment with our company. Please fill out the form to provide your contact information and preferred appointment dates.

## How To Complete This Form

1. Enter your **Full Name**, **Phone Number**, and **Email Address**. These are all required fields and will help us contact you to confirm your appointment.
2. Provide your **Property Address** where the air duct cleaning service will take place.
3. Let us know the **Number of Vents** you have in your property. This will help us prepare for the job.
4. Choose your preferred **System Age**, or select "New - 5 years" if your system is new.
5. If known, please provide your **Last Cleaning Date** for our records.
6. Select your **Preferred Date 1** for the appointment. This is your first choice.
7. Optionally, provide a **Backup Date 2** in case your first choice is not available.
8. Finally, enter any **Special Instructions** you have, such as concerns or gate codes we should be aware of.

## Field-by-Field Explanation

* **Full Name** (`full_name`, `text`, required): Your name as you would like to be referred to.
* **Phone Number** (`phone`, `text`, required): A valid phone number we can use to contact you.
* **Email Address** (`email`, `email`, required): A valid email address we can use to contact you.
* **Property Address** (`address`, `text`, required): The address of the property you would like us to clean.
* **Number of Vents** (`num_vents`, `select_one`, required): Select the approximate number of vents you have in your property.
	+ 1-10
	+ 11-20
	+ 21-30
	+ 31+
* **System Age** (`system_age`, `select_one`, optional): The age of your system.
	+ New - 5 years
	+ 5 - 10 years
	+ 10 - 20 years
	+ 20+ years
* **Last Cleaning Date** (`last_cleaning`, `date`, optional): If you know the date of your last cleaning, please provide it for our records.
* **Preferred Date 1** (`preferred_date_1`, `date`, required): Select your first preferred appointment date.
* **Preferred Date 2** (`preferred_date_2`, `date`, optional): Select your backup appointment date in case your first choice is not available.
* **Special Instructions** (`comments`, `text`, optional): Any additional information or instructions you would like to share with us.
* **Scheduling Header** (`scheduling_header`, `note`, required): This is just a header, please do not fill this out.

<thinking>...</thinking>

# Climbing Booking Form - Help Guide

## Purpose
This form is used to book a climbing session at our facility. It collects information about the customer, their climbing experience, and the details of their desired booking.

## How To Complete This Form
To complete this form, please fill in the required information for each field. Make sure to enter accurate details about your climbing experience and any medical conditions or limitations you may have. If you have any special requests or preferences, you can include them in the "Special requests or preferences" field.

## Field-by-Field Explanation
* **Full Name** (`full_name`, text, required): Enter your full name as it appears on your official identification.
* **Email Address** (`email`, email, required): Enter your email address for contact purposes.
* **Phone Number** (`phone`, text, required): Enter your phone number for contact purposes.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth. For minors (under 18), please provide parent/guardian information.
* **Desired Booking Date** (`booking_date`, date, required): Select a date for your climbing session.
* **Preferred Time** (`booking_time`, time, required): Select a time for your climbing session.
* **Session Duration** (`duration`, select_one, required): Choose the duration of your climbing session:
	+ 1 hour
	+ 2 hours
	+ 3 hours
	+ Half day (4 hours)
	+ Full day (8 hours)
* **Number of Participants** (`party_size`, number, required): Enter the number of people booking a session with you.
* **Type of Climbing** (`climbing_type`, select_one, required): Choose the type of climbing you would like to do:
	+ Bouldering
	+ Top-rope
	+ Sport climbing
	+ Lead climbing
	+ Outdoor rock climbing
* **Climbing Experience Level** (`experience_level`, select_one, required): Choose your climbing experience level:
	+ Beginner
	+ Intermediate
	+ Advanced
	+ Expert
* **First Time Climbing** (`first_time`, select_one, required): Have you climbed at our facility before?
	+ Yes
	+ No
* **Need Instruction or Guidance?** (`instruction_needed`, select_one, required): Do you need instruction or guidance?
	+ Yes
	+ No
* **Type of Guidance Needed** (`guide_type`, select_one, optional): If yes, what type of guidance do you need?
	+ Beginner lesson
	+ Equipment training
	+ Technique coaching
	+ Lead climbing certification
	+ None
* **Any Medical Conditions** (`medical_conditions`, text, optional): If you have any medical conditions, please list them.
* **Physical Limitations or Injuries** (`physical_limitations`, text, optional): If you have any physical limitations or injuries, please list them.
* **I Accept the Facility Waiver and Liability Terms** (`waiver_acceptance`, select_one, required): Do you accept the facility waiver and liability terms?
	+ Yes
	+ No
* **Special Requests or Preferences** (`special_requests`, text, optional): If you have any special requests or preferences, please list them.

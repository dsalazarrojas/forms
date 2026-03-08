# Airline Passenger Assistance Admission Form - Help Guide
## Purpose
This form is designed to collect information about passengers who require special assistance during flights. This includes passengers with disabilities or medical conditions that may need assistance from airport staff or airline crew.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out your personal details, including your full name, date of birth, email address, and phone number.
2. Provide your booking reference number (PNR) and flight number.
3. Enter your date of travel.
4. If applicable, select the type of assistance you require, such as wheelchair or in-flight oxygen.
5. If you are traveling with your own wheelchair, select the type (manual or electric).
6. If you require oxygen, please note that a doctor's certificate may be required.
7. Select any other assistance you require, such as visual or hearing aid.
8. Provide specific details about your assistance needs if necessary.
9. Enter the name and phone number of your emergency contact.
10. Finally, confirm that you consent to the airline sharing your data with relevant airport staff for coordination purposes.

## Field-by-Field Explanation

* **Passenger Full Name** (`<name>`, text, required): Enter your full name as it appears on your government-issued ID or passport.
* **Date of Birth** (`<date>`, date, required): Enter your date of birth in the format DD/MM/YYYY.
* **Email Address** (`<email>`, email, required): Enter your email address where the airline can contact you.
* **Contact Phone Number** (`<phone>`, text, required): Enter your contact phone number where the airline can reach you.
* **Booking Reference (PNR)** (`<ref>`, text, required): Enter the booking reference number from your ticket.
* **Flight Number** (`<flight>`, text, required): Enter the flight number from your ticket.
* **Date of Travel** (`<date>`, date, required): Enter the date of your travel in the format DD/MM/YYYY.
* **Wheelchair Assistance Required?** (`<wheelchair>`, select_one, required): Select 'Yes' if you require wheelchair assistance.
	+ To the aircraft door: Yes, you would like to be assisted to the aircraft door.
	+ To the seat: Yes, you would like to be assisted to your seat.
	+ Full assistance: Yes, you require full assistance from our staff.
* **Traveling with your own wheelchair?** (`<own_wheel>`, select_one, required): Select 'Yes' if you are traveling with your own wheelchair.
	+ 'False': No, you are not traveling with your own wheelchair.
	+ Yes - Manual: Yes, you are traveling with a manual wheelchair.
	+ Yes - Electric: Yes, you are traveling with an electric wheelchair.
* **In-flight Oxygen Required?** (`<oxygen>`, select_one, required): Select 'True' if you require oxygen on board.
* **Visual or Hearing Assistance Required?** (`<assistance>`, select_multiple, required): Select any assistance you require, such as visual or hearing aid.
* **Specific Assistance Details** (`<specific>`, text, optional): Enter any other specific assistance needs or details.
* **Emergency Contact Name** (`<emergency>`, text, required): Enter the name of your emergency contact.
* **Emergency Contact Phone** (`<phone>`, text, required): Enter the phone number of your emergency contact.
* **Consent Agreement** (`<consent>`, select_one, required): Select 'I agree' to confirm that you consent to the airline sharing your data with relevant airport staff for coordination purposes.

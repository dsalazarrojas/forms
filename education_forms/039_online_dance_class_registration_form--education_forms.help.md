# Online Dance Class Registration Form - Help Guide
## Purpose
This form is used to register for an online dance class. Fill out the form to provide your personal details and preferences.

## How To Complete This Form
1. Fill out the form with your first and last name.
2. Enter your email address and phone number.
3. Select the date and time you are available for the class.
4. Choose the dance type you are interested in (e.g. Ballet, Contemporary, etc.).
5. Provide your age, height, and weight.
6. Select the number of hours you are available for the class.
7. Choose the days you are available for the class.
8. Select the payment method (e.g. Card, Transfer, etc.).
9. Enter your payment details.
10. Provide the name and contact information of an emergency contact person (if applicable).
11. Confirm the emergency contact information.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name as it is written on your identification documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it is written on your identification documents.
* **Email** (`email`, email, required): Enter your valid email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Date** (`date`, date, required): Enter the date you are available for the class (DD/MM/YYYY).
* **Time** (`time`, time, required): Enter the time you are available for the class (HH:MM AM/PM).
* **Select One** (`select_one`, select_one, required): Choose one dance type you are interested in (e.g. Ballet, Contemporary, etc.).
* **Select Multiple** (`select_multiple`, select_multiple, optional): Choose multiple dance types you are interested in (e.g. Ballet, Contemporary, etc.).
	+ Options: Dance, Sing, Act, Play
* **Notes** (`notes`, note, optional): Enter any additional notes or comments about your availability.
* **Confirm Phone** (`confirm_phone`, text, required): Enter your phone number again for confirmation.
* **Confirm Email** (`confirm_email`, text, required): Enter your email address again for confirmation.
* **Confirm Date** (`confirm_date`, text, required): Enter the date you are available for the class again for confirmation.
* **Confirm Time** (`confirm_time`, text, required): Enter the time you are available for the class again for confirmation.
* **Dance Type** (`dance_type`, select_multiple, optional): Choose multiple dance types you are interested in (e.g. Ballet, Contemporary, etc.).
	+ Options: Ballet, Contemporary, Hip-Hop, Jazz, Modern, Tap, Waltz
* **Age** (`age`, number, required): Enter your age.
* **Height** (`height`, number, optional): Enter your height in centimeters.
* **Weight** (`weight`, number, optional): Enter your weight in kilograms.
* **Dance Experience** (`dance_experience`, select_multiple, optional): Choose your level of dance experience (e.g. Beginners, Intermediate, etc.).
	+ Options: Beginners, Intermediate, Advanced, Expert
* **Available Hours** (`available_hours`, number, required): Enter the number of hours you are available for the class.
* **Available Days** (`available_days`, number, required): Enter the number of days you are available for the class.
* **Payment Method** (`payment_method`, select_multiple, required): Choose your preferred payment method (e.g. Card, Transfer, etc.).
* **Payment Details** (`payment_details`, text, required): Enter your payment details.
* **Emergency Contact** (`emergency_contact`, text, optional): Enter the name and contact information of an emergency contact person.
* **Emergency Relation** (`emergency_relation`, text, optional): Enter the relation of the emergency contact person (e.g. parent, guardian, etc.).
* **Confirm Emergency** (`confirm_emergency`, text, optional): Confirm the emergency contact information.
* **Confirm Emergency Relation** (`confirm_emergency_relation`, text, optional): Confirm the emergency relation information.
* **Confirm Emergency Details** (`confirm_emergency_details`, text, optional): Confirm the emergency contact details.

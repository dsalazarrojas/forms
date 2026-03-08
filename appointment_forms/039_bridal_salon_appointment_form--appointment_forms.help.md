# Bridal Salon Appointment Form - Help Guide
## Purpose
This form is designed to collect information about your appointment at our bridal salon. Please fill out this form to schedule a personalized appointment with our team. We will use this information to prepare for your visit and ensure you have a great experience.

## How To Complete This Form
1. Fill in your personal details:
	* **Your Name**: Enter your full name as it appears on your identification documents.
	* **Email Address**: Enter your contact email address so we can reach out with updates and appointment reminders.
	* **Phone Number**: Enter your contact phone number for us to reach out if needed.
2. Choose your appointment type:
	* **Type of Appointment**: Select the type of appointment you are looking for (e.g., bridal gown shopping, bridesmaid dress shopping, etc.).
3. Provide your wedding-related information:
	* **Wedding Date**: Enter the date of your wedding.
	* **Event Date (if different)**: If your wedding date is not the same as your event date (e.g., a wedding anniversary), enter the event date.
	* **Preferred Appointment Date**: Choose a date that works best for you to schedule your appointment.
4. Select your appointment time:
	* **Preferred Appointment Time**: Choose a time slot that suits you best (e.g., 9 AM - 10 AM, 10 AM - 11 AM, etc.).
5. Choose your appointment length:
	* **Appointment Length Needed**: Select the length of time you need for your appointment.
6. Dress style and color preferences:
	* **Dress Style Preference**: Choose the dress style that appeals to you (e.g., ball gown, A-line, mermaid, etc.).
	* **Preferred Dress Color**: Select the color you are considering for your dress.
7. Budget and size information:
	* **Budget Range**: Choose your estimated budget for the dress.
	* **Your Size Range**: Enter your approximate dress size.
8. Additional information:
	* **Number of Attendants Shopping**: If you are buying dresses for others, enter how many are coming with you.
	* **Who Is Coming With You**: Select who is accompanying you to the appointment.
	* **Have You Visited Our Salon Before**: If this is your first time or if you have visited us before, select accordingly.
9. Special requests and notes:
	* **Body Type Considerations**: If you have any specific body type concerns, enter them here.
	* **Do You Expect to Need Alterations**: Indicate if you expect to need alterations during your appointment.
	* **Designer or Brand Preferences**: If you have any specific designers or brands in mind, enter them here.
	* **Special Requests or Notes**: Enter any additional information or requests you have for your appointment.

## Field-by-Field Explanation
* **Your Name** (`customer_name`, `text`, required): Enter your full name as it appears on your identification documents.
* **Email Address** (`email_address`, `email`, required): Enter your contact email address so we can reach out with updates and appointment reminders.
* **Phone Number** (`phone_number`, `text`, required): Enter your contact phone number for us to reach out if needed.
* **Type of Appointment** (`appointment_type`, `select_one`, required): Choose the type of appointment you are looking for (e.g., bridal gown shopping, bridesmaid dress shopping, etc.).
* **Wedding Date** (`wedding_date`, `date`, required): Enter the date of your wedding.
* **Event Date (if different)** (`event_date`, `date`, optional): If your wedding date is not the same as your event date (e.g., a wedding anniversary), enter the event date.
* **Preferred Appointment Date** (`preferred_date`, `date`, required): Choose a date that works best for you to schedule your appointment.
* **Preferred Appointment Time** (`appointment_time`, `select_one`, required): Choose a time slot that suits you best (e.g., 9 AM - 10 AM, 10 AM - 11 AM, etc.).
* **Appointment Length Needed** (`appointment_duration`, `select_one`, required): Select the length of time you need for your appointment.
* **Dress Style Preference** (`dress_style_preference`, `select_multiple`, optional): Choose the dress style that appeals to you (e.g., ball gown, A-line, mermaid, etc.).
* **Preferred Dress Color** (`dress_color`, `select_one`, optional): Select the color you are considering for your dress.
* **Budget Range** (`budget_range`, `select_one`, optional): Choose your estimated budget for the dress.
* **Your Size Range** (`size_range`, `select_one`, optional): Enter your approximate dress size.
* **Number of Attendants Shopping** (`attendants_count`, `number`, optional): If you are buying dresses for others, enter how many are coming with you.
* **Who Is Coming With You** (`party_coming`, `select_multiple`, optional): Select who is accompanying you to the appointment.
* **Have You Visited Our Salon Before** (`previous_salon_visit`, `select_one`, optional): If this is your first time or if you have visited us before, select accordingly.
* **Body Type Considerations** (`body_type_preference`, `text`, optional): If you have any specific body type concerns, enter them here.
* **Do You Expect to Need Alterations** (`alterations_expected`, `select_one`, optional): Indicate if you expect to need alterations during your appointment.
* **Designer or Brand Preferences** (`designer_preferences`, `text`, optional): If you have any specific designers or brands in mind, enter them here.
* **Special Requests or Notes** (`special_requests`, `text`, optional): Enter any additional information or requests you have for your appointment.
* **May we contact you with updates** (`permission_contact`, `select_one`, required): Indicate how you prefer to be contacted (e.g., via email, via phone, etc.).

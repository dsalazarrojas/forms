# Alumni Reunion Registration Form - Help Guide
## Purpose
This form is for alumni to register for the reunion event. It collects information such as reunion year/class, event date selection, personal details, attendance plans, accommodation preferences, and payment information.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your graduating class from the "Reunion Year/Class" dropdown menu.
2. Choose the date you plan to attend the reunion (Saturday or Sunday).
3. Enter your first and last name, including your maiden name if applicable.
4. Provide your email address for event confirmation and updates.
5. Enter your phone number for event-day contact.
6. Indicate whether you will be attending alone or with guests.
7. If bringing guests, enter the number of guests and their names.
8. Choose your preferred meal option for Saturday's dinner.
9. If necessary, list any dietary restrictions or allergies.
10. Choose whether you'll attend Sunday's brunch.
11. Indicate whether you're interested in a guided campus tour.
12. Choose whether you'll attend the memorial service.
13. Select whether you'll be attending the sports event.
14. If you need hotel accommodations, select your preference for recommendations or group rate booking.
15. If you have any accessibility requirements, please mention them.
16. Pay the registration fee per person.
17. Choose your payment method (credit card, debit card, PayPal, or check by mail).
18. Finally, provide any additional information or requests.

## Field-by-Field Explanation

* **Reunion Year/Class** (`reunion_year`, select_one, required): Select your graduating class from the options provided.
* **Event Date Selection** (`event_date`, select_one, required): Choose the date you plan to attend the reunion.
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name, including maiden name if applicable.
* **Email Address** (`email`, email, required): Enter your email address for event confirmation and updates.
* **Phone Number** (`phone`, text, required): Enter your phone number for event-day contact.
* **Will you be attending alone** (`attending_alone`, select_one, required): Indicate whether you will be attending alone or with guests.
* **Number of Additional Guests** (`guest_count`, number, optional): Enter the number of guests attending with you.
* **Guest Names** (`guest_names`, text, optional): List the names of your guests.
* **Saturday Dinner Attendance** (`saturday_dinner`, select_one, required): Choose whether you'll attend Saturday's dinner.
* **Dinner Entree Preference** (`dinner_entree`, select_one, optional): Select your preferred dinner option.
* **Dietary Restrictions or Allergies** (`dietary_restrictions`, text, optional): List any dietary restrictions or allergies.
* **Sunday Brunch Attendance** (`sunday_brunch`, select_one, optional): Choose whether you'll attend Sunday's brunch.
* **Campus Tour Interest** (`campus_tour`, select_one, optional): Indicate whether you're interested in a guided campus tour.
* **Memorial Service Attendance** (`memorial_service`, select_one, optional): Choose whether you'll attend the memorial service.
* **Sports Event Attendance** (`sports_event`, select_one, optional): Choose whether you'll attend the sports event.
* **Hotel Accommodation Needed** (`hotel_needed`, select_one, optional): Indicate whether you need hotel recommendations or a group rate booking.
* **Accessibility Requirements** (`accessibility_needs`, text, optional): List any special accessibility needs.
* **Registration Fee** (`registration_fee`, number, required): Pay the registration fee per person.
* **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method.
* **Reunion T-Shirt Size** (`tshirt_size`, select_one, optional): If ordering a commemorative shirt, select your preferred size.
* **Name for Name Tag** (`name_tag_name`, text, optional): Enter the name to appear on your name tag.
* **Bringing Memorabilia for Display** (`memorabilia_display`, select_one, optional): Choose whether you'll bring memorabilia for display.
* **Willing to Volunteer at Event** (`volunteer_help`, select_one, optional): Indicate whether you're willing to help with registration or activities.
* **Additional Comments or Requests** (`additional_comments`, text, optional): Enter any additional comments or requests.
* **Emergency Contact Name** (`emergency_contact_name`, text, optional): Enter the name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, optional): Enter the phone number of your emergency contact.

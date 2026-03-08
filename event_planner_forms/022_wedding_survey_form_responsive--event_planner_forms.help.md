<thinking>
The purpose of the "wedding_survey_form_responsive" form is to collect information about a wedding guest's attendance and preferences. This form asks if the guest will be able to attend the wedding, their name, if they will participate in certain activities (e.g., happy hour, food), if they have dietary restrictions, and their preferred contact method (phone, email). The form is likely to be used by wedding planners or hosts to gather relevant information from guests before the event.
</thinking>

# wedding_survey_form_responsive - Help Guide
## Purpose
This form is designed to collect information from wedding guests about their attendance and preferences for the wedding event.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer the questions in the form about your ability to attend the wedding and your preferences.
2. Provide your name as the "name of guest" field.
3. Select your preferred contact method (phone, email, or leave blank).
4. Enter your contact phone number and email address (if you choose to provide them).
5. Fill out the remaining fields to indicate your preferences for various activities and times of arrival.

## Field-by-Field Explanation
* **will they be able to attend your wedding** (`will_they_attend`, text): This field is for you to let us know if you will be able to attend the wedding.
* **will they be confirmed** (`will_be_confirmed`, select_one): Please select "True" if we will confirm your attendance after we receive more information.
* **name of guest** (`name_of_guest`, text): Please enter your name as you would like to be addressed at the wedding.
* **will they participate in happy hour** (`will_participate_in_hh`, select_multiple): If you would like to participate in the happy hour, select "True". This will let us know that we can plan accordingly for food and drinks.
* **will they arrive in advance** (`will_arrive_in_advance`, select_multiple): If you will arrive at the wedding before the scheduled start time, select "True". This will help us plan for your arrival.
* **arrival time** (`arrival_time`, time): If you know your arrival time, please enter it in 24-hour format (e.g., 14:00 for 2 PM).
* **will they have dietary restrictions** (`will_have_dietary_restrictions`, select_one): If you have dietary restrictions, select "True" to let us know.
* **dietary restrictions** (`dietary_restrictions`, text): If you have any dietary restrictions, please enter them here.
* **will they participate in food** (`will_participate_in_food`, select_multiple): If you would like to participate in the food, select "True". This will let us know that we can plan food for you.
* **will they arrive at ceremony** (`will_arrive_at_ceremony`, select_one): If you will arrive at the wedding ceremony, select "True". This will help us plan for your arrival.
* **will they participate in reception** (`will_participate_in_reception`, select_multiple): If you would like to participate in the reception, select "True". This will let us know that we can plan for your stay.
* **will they arrive at reception** (`will_arrive_at_reception`, select_one): If you will arrive at the wedding reception, select "True". This will help us plan for your arrival.
* **contact method** (`contact_method`, text): Please select your preferred contact method (phone, email, or leave blank).
* **contact phone** (`contact_phone`, text): If you provided a phone number, please enter it here.
* **contact email** (`contact_email`, email): If you provided an email address, please enter it here.

## Tips
- Please answer all required fields (indicated by *) to ensure we can plan for your attendance and preferences.
- If you are unsure about any of the fields, please contact us for clarification.

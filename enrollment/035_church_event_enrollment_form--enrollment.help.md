<thinking>...</thinking>

# Church Event Enrollment Form - Help Guide

## Purpose
This form is designed to help church members and visitors enroll in events hosted by the church. It collects necessary information from participants, including event selection, contact details, and other specific requirements such as transportation and childcare needs. The form is required for all attendees to ensure that the church can adequately prepare and provide services as needed.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the event you are enrolling for from the dropdown menu.
2. Provide your full name, age (if applicable), and contact email and phone number.
3. If you are enrolling for a youth event, please enter the age of the youth.
4. Indicate if you need transportation or have any special requirements.
5. Confirm your enrollment by selecting "I Confirm" in the final step.

## Field-by-Field Explanation

* **Which event are you enrolling for?** (`selected_event`, select_one, required): Select the event you are interested in attending. Please choose from the available options.
* **Event Date** (`event_date`, date, required): Enter the date of the event you are enrolling for.
* **Participant Full Name** (`participant_full_name`, text, required): Enter your full name.
* **Age** (`participant_age`, number, optional): If you are enrolling for a youth event, please enter the age of the youth.
* **Contact Email** (`contact_email`, email, required): Enter your email address so we can provide event instructions and confirmations.
* **Contact Phone** (`contact_phone`, text, required): Enter your phone number so we can contact you if needed.
* **Total number of family members attending** (`family_enrollment_count`, number, required): Please enter the total number of family members attending the event.
* **Names of additional family members** (`family_member_names`, text, optional): If you are enrolling with family members, please list their names.
* **Would you like to volunteer at this event?** (`volunteer_interest`, select_one, required): Choose whether you would like to volunteer at the event or just attend.
* **Do you require childcare during this event?** (`childcare_needed`, select_one, required): If you need childcare services for your child, please select "True".
* **Do you need transportation to the event?** (`transportation_needed`, select_one, required): If you need transportation, please select "True".
* **Any special requirements or notes for organizers?** (`special_needs_notes`, text, optional): If you have any special needs or notes for the event organizers, please enter them here.
* **I confirm my enrollment in this church event** (`enrollment_confirmation`, select_one, required): Please confirm your enrollment by selecting "I Confirm".
* **Enrollment Date** (`enrollment_date`, date, required): This field will be automatically populated based on the event date you selected.

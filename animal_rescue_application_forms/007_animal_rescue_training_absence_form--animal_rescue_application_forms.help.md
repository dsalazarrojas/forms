<thinking>...</thinking>

# Animal Rescue Training Absence Form - Help Guide
## Purpose
This form is designed for volunteers in the animal rescue training program to report and explain absences from scheduled training sessions. The form helps staff understand the reason for the absence and ensures that all necessary information is collected for follow-up and future arrangements.

## How To Complete This Form

1. Fill out the form completely and accurately.
2. Enter your name as it appears on your volunteer contract.
3. Enter your ID number if assigned by the program.
4. Provide your contact email and phone number.
5. Select the name of the training program you are missing.
6. Choose the date of the scheduled session you will miss.
7. Select the reason for your absence.
8. Provide additional details about your reason if applicable.
9. Indicate if your absence will impact other volunteers or activities.
10. If yes, provide further explanation.
11. If you are interested in additional training opportunities, let us know.
12. Add any additional comments or information you would like to share.

## Field-by-Field Explanation

* **Volunteer Full Name** (`volunteer_name`, `text`, required): Your full name as it appears on your volunteer contract. Please enter it in the format First and last name.
* **Volunteer ID Number** (`volunteer_id`, `text`, optional): If you have been assigned an ID number by the program, enter it here.
* **Email Address** (`email`, `email`, required): Enter your contact email for follow-up and communication.
* **Phone Number** (`phone`, `text`, required): Enter your contact phone number.
* **Training Program Name** (`training_program`, `select_one`, required): Select the name of the training program you are missing. Choose from the options: New Volunteer Orientation, Animal Handling Basics, Dog Walking Training, Cat Care Training, Foster Care Training, Adoption Counseling, Medical Care Training, Transport Training, Other.
* **Scheduled Training Date** (`scheduled_date`, `date`, required): Enter the date of the scheduled session you will miss.
* **Reason for Absence** (`absence_reason`, `select_one`, required): Select the primary reason for your absence. Choose from the options: Illness, Family Emergency, Work Conflict, Personal Appointment, Vacation, Transportation Issue, Childcare Issue, Other.
* **Additional Details** (`reason_details`, `text`, optional): Provide further explanation about your reason if applicable.
* **Type of Absence** (`absence_type`, `select_one`, required): Indicate the type of absence. Choose from the options: Full Session, Partial - Will Arrive Late, Partial - Will Leave Early.
* **Would You Like to Schedule a Make-up Session?** (`make_up_request`, `select_one`, required): Indicate if you would like to schedule a make-up session. Choose from the options: Yes Please, No I Will Wait for Next Session, I Will Arrange Independently.
* **Preferred Make-up Date** (`preferred_makeup_date`, `date`, optional): If requesting a make-up session, enter a date you prefer for the session.
* **Are You Aware of the Next Available Session?** (`next_available_session`, `select_one`, required): Indicate if you are aware of the next available session. Choose from the options: Yes I Know the Date, No Please Inform Me.
* **Do You Need Training Materials Sent to You?** (`materials_needed`, `select_one`, required): Indicate if you need training materials sent to you. Choose from the options: Yes Please Send Materials, No I Will Review Later, I Have Access to Materials.
* **Have You Notified Your Supervisor?** (`supervisor_notified`, `select_one`, required): Indicate if you have informed your supervisor about your absence. Choose from the options: True, False, Not Applicable.
* **Will Your Absence Impact Other Volunteers or Activities?** (`impact_on_others`, `select_one`, required): Indicate if your absence will impact other volunteers or activities. Choose from the options: Yes - Please Explain, False, Unsure.
* **Impact Details** (`impact_details`, `text`, optional): If yes, provide further explanation about how your absence will impact others.
* **Expected Return Date** (`return_date`, `date`, optional): If you know when you will be available again, enter the date.
* **Are You Interested in Additional Training Opportunities?** (`additional_training`, `select_one`, optional): If you are interested in additional training opportunities, let us know. Choose from the options: Yes Please Send Information, Not at This Time.
* **Additional Comments** (`comments`, `text`, optional): Add any other information you would like to share.

# Basketball Tournament Registration Form - Help Guide
## Purpose
This form is designed for teams to register for a basketball tournament. It will collect essential information about the team, including team name, coach and player details, division selection, and payment method. Please note that some fields are mandatory and required to be completed.
## How To Complete This Form

To complete this form, follow the steps below:

1.  Provide the team name in the designated field.
2.  Enter the head coach's name.
3.  Enter the coach's email address.
4.  Enter the coach's phone number.
5.  Select the tournament division (e.g., Under 12, Under 14, Under 16, etc.).
6.  If any team members have critical medical conditions or allergies, provide information in the "Do any players have critical medical conditions or allergies?" field.
7.  If applicable, select the team's insurance carrier.
8.  Agree to the tournament's release of liability terms.
9.  Agree to the tournament's code of conduct.
10.  Select the payment method for the entry fee ($250).

## Field-by-Field Explanation

*   **Team Name** (`team_name`, text, **Required**): Enter the name of your team as it will be displayed in the tournament.
*   **Head Coach Name** (`coach_name`, text, **Required**): Provide the name of the team's head coach.
*   **Coach Email Address** (`coach_email`, email, **Required**): Enter the email address of the team's head coach.
*   **Coach Phone Number** (`coach_phone`, text, **Required**): Enter the phone number of the team's head coach.
*   **Tournament Division** (`division_selection`, select_one, **Required**): Select the division in which your team will be participating (e.g., Under 12, Under 14, Under 16, etc.).
*   **Do any players have critical medical conditions or allergies?** (`critical_medical_info`, text, **Optional**): If any team members have critical medical conditions or allergies, provide information on this field. This could include listing player names alongside their conditions or allergies.
*   **Team Insurance Carrier** (`insurance_carrier`, text, **Optional**): If your team has an insurance carrier, list it here. This field is not required but if you have an insurance carrier, please fill it out.
*   **I agree to the tournament's release of liability terms** (`liability_agreement`, select_one, **Required**): Select 'I Agree' to confirm you have read and understand the release of liability terms.
*   **I agree to the tournament's code of conduct** (`code_of_conduct`, select_one, **Required**): Select 'I Agree' to confirm you have read and understand the tournament code of conduct.
*   **Payment Method for Entry Fee ($250)** (`registration_fee_ack`, select_one, **Required**): Select your preferred payment method for the entry fee ($250). You can choose between Credit Card Online, Bank Transfer, or Check by Mail.
*   **Date of Registration** (`submission_date`, date, **Required**): Enter the date you are submitting this registration.

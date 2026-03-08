# health_and_lifestyle_questionnaire - Help Guide
## Purpose
This form is designed to collect general health and lifestyle information from patients, including their sleep quality, physical activity, nutrition, medical history, medications, allergies, contact information, phone number, and emergency contact information.

## How To Complete This Form

1.  Start by selecting the "General Health" page.
2.  On this page, enter your current general health status in the provided text field.
3.  Proceed to the "Sleep Quality" page.
4.  On this page, select your current sleep quality by entering a number between 1 (poor) and 10 (excellent) in the text field.
5.  Next, move on to the "Physical Activity" page.
6.  On this page, select the level of your current physical activity by entering a number between 1 (low) and 10 (high) in the text field.
7.  Continue to the "Nutrition" page.
8.  On this page, select the option that best describes your current nutrition habits from the dropdown menu.
9.  Proceed to the "Medical History" page.
10.  On this page, enter your medical history date in the date field.
11.  Move on to the "Medications" page.
12.  On this page, enter any medications you are currently taking in the text field.
13.  Next, go to the "Allergies" page.
14.  On this page, select any allergies you have from the dropdown menu.
15.  Then, visit the "Contact Info" page.
16.  On this page, enter your contact email in the text field.
17.  Continue to the "Phone Number" page.
18.  On this page, enter your phone number in the text field.
19.  Next, visit the "Emergency Contact" page.
20.  On this page, enter the name, phone number, and relationship of your emergency contact person in the text fields.
21.  Finally, go to the "Medical Notes" page.
22.  On this page, enter any additional medical notes or comments you may have in the text area.

## Field-by-Field Explanation

*   **General Health** (`general_health`, text, optional): Enter a brief description of your current general health status.
*   **Sleep Quality** (`sleep_quality`, number, optional): Select the number that best describes your current sleep quality (1-10).
*   **Physical Activity** (`physical_activity`, number, optional): Select the number that best describes your current physical activity level (1-10).
*   **Nutrition** (`nutrition`, select_one, optional): Select the option that best describes your current nutrition habits from the dropdown menu:
    +   choice1
    +   choice2
    +   choice3
    +   choice4
    +   choice5
    +   choice6
    +   choice7
    +   choice8
*   **Medical History** (`medical_history`, date, optional): Enter the date of your last medical check-up or any relevant medical history.
*   **Medications** (`medications`, text, optional): Enter any medications you are currently taking, one per line.
*   **Allergies** (`allergies`, select_multiple, optional): Select any allergies you have from the dropdown menu:
    +   choice1
    +   choice2
    +   choice3
    +   choice4
*   **Contact Info** (`contact_info`, email, optional): Enter your contact email.
*   **Phone Number** (`phone_number`, text, optional): Enter your phone number.
*   **Emergency Contact** (`emergency_contact`, text, optional): Enter your emergency contact's name, phone number, and relationship.
*   **Medical Notes** (`medical_notes`, note, optional): Enter any additional medical notes or comments.

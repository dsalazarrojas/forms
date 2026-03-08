# political_survey - Help Guide
## Purpose
The "Political Survey" form is designed to collect information from individuals in order to gather demographic and political survey data. This information will be used to understand public opinions and preferences.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in your First Name and Last Name in the respective fields.
2. Indicate your Party Affiliation by selecting "Yes" or "No" from the drop-down list.
3. Enter your Age in numerical format.
4. Enter your Address in the text field.
5. Enter your Contact Number in the format of a phone number.
6. Enter a valid Email address.
7. Enter your Date of Birth in the format of MM/DD/YY.
8. Select a Time of Contact.
9. Indicate your stance on Political Survey Issues by selecting "Yes" or "No" from the drop-down list.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, optional): This field is used to capture your first name.
* **Last Name** (`last_name`, text, optional): This field is used to capture your last name.
* **Party Affiliation** (`party_affiliation`, select_multiple, required): This field asks whether you are affiliated with a political party.
* **Age** (`age`, number, required): This field requires your age in numerical format.
* **Address** (`address`, text, required): This field captures your home or office address.
* **Contact Number** (`contact_number`, text, required): This field requires your contact phone number.
* **Email** (`email`, email, required): This field asks for a valid email address.
* **Date of Birth** (`date_of_birth`, date, required): This field requires the date of your birth in the format of MM/DD/YY.
* **Time of Contact** (`time_of_contact`, time, required): This field asks for the time you are available for contact.
* **Political Survey Issues** (`political_survey_issues`, select_one, required): This field asks your stance on political survey issues. Select "Yes" or "No" from the drop-down list.

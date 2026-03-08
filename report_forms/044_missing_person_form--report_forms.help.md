# missing_person_form - Help Guide
## Purpose
This form is used to gather information for cases involving missing persons, ensuring that the most up-to-date and accurate information is available for investigations.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the missing person's name and any other relevant biographical information.
2. Select the missing person's gender, date of birth, age, height, and eye color.
3. Choose the missing person's race.
4. If applicable, provide information about where the missing person was last seen.
5. If applicable, provide the time and date they were last seen.
6. If applicable, provide any distinguishing features that may help identify the missing person.
7. If applicable, provide the case number and current case status.
8. If applicable, provide any additional case notes.

## Field-by-Field Explanation
- **missing_person_name** (`missing_person_name`, text, required): The missing person's full name.
- **gender** (`gender`, select_one, required): The missing person's gender (Male, Female, Non-Binary).
- **date_of_birth** (`date_of_birth`, date, required): The missing person's date of birth.
- **age** (`age`, number, required): The missing person's age.
- **height** (`height`, number, optional): The missing person's height (if known).
- **weight** (`weight`, number, optional): The missing person's weight (if known).
- **eye_color** (`eye_color`, select_one, optional): The missing person's eye color (Blue, Brown, Green, Hazel, Gray, Amber).
- **hair_color** (`hair_color`, select_one, optional): The missing person's hair color (Black, Blonde, Brown, Gray, Red).
- **race** (`race`, select_one, required): The missing person's race (Asian, Black, White, Hispanic, American Indian/Alaska Native).
- **last_seen_location** (`last_seen_location`, text, optional): The location where the missing person was last seen (if known).
- **last_seen_time** (`last_seen_time`, time, optional): The time and date the missing person was last seen (if known).
- **distinguishing_feature** (`distinguishing_feature`, text, optional): Any distinguishing features that may help identify the missing person (if known).
- **case_number** (`case_number`, text, optional): The case number assigned to the missing person's case (if known).
- **case_status** (`case_status`, select_one, required): The current status of the missing person's case (Active, Inactive).
- **case_notes** (`case_notes`, text, optional): Any additional notes or information about the missing person's case (if known).

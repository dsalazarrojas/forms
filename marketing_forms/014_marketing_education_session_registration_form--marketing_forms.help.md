# Marketing Education Session Registration Form - Help Guide
## Purpose
The Marketing Education Session Registration Form is used to register interested individuals for a marketing education session. It helps track attendees' information, preferences, and background.

## How To Complete This Form
To complete the form, follow these steps:
1. Fill out your First Name and Last Name in the First Name and Last Name fields, respectively.
2. Enter a valid Email in the Email field, which will also be used as the primary contact point for future updates.
3. Provide a Phone number in the Phone field, which can be used for further contact if needed.
4. Enter the name of your Company, if applicable.
5. Select your role in the Role field, which will help us better understand your background.
6. Choose the level of your Education in the Education Level field, which will aid us in tailoring the session content.
7. Fill out the Session Date and Session Time fields if you have already chosen a specific session date and time in the future.
8. Specify the Session Duration in the Session Duration field, which will help us in preparing the session schedule.
9. Enter a Session Topic of your preference in the Session Topic field.
10. Finally, click the submit button to complete the registration.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, optional): Enter your first name for proper identification.
* **Last Name** (`last_name`, text, optional): Enter your last name for proper identification.
* **Email** (`email`, email, optional): Enter a valid email address for contact purposes.
* **Phone** (`phone`, text, optional): Enter your phone number for further contact if needed.
* **Company** (`company`, text, optional): If applicable, enter your company name for tracking purposes.
* **Role** (`role`, select_one, optional): Select your role in the marketing industry: Participant, Educator, or Business.
* **Education Level** (`education_level`, select_multiple, required): Choose your level of education in the marketing field: Advanced, Intermediate, or Beginner.
* **Session Date** (`session_date`, date, optional): If you have chosen a specific session date, enter it here for organization purposes.
* **Session Time** (`session_time`, time, optional): Enter the session time if you have chosen a specific session date.
* **Session Duration** (`session_duration`, number, optional): Enter the session duration in the desired unit (e.g., minutes or hours).
* **Session Topic** (`session_topic`, text, optional): Enter a topic you are interested in to help us tailor the session content.
* **Registered Date** (`registered_date`, date, optional): Automatically generated upon form submission, not to be filled out by the user.

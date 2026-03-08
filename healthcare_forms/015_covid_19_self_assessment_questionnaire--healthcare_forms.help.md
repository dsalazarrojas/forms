<thinking>
This guide is intended for end-users who will be completing the "COVID 19 Self Assessment Questionnaire" form. The form is designed to collect information about individuals regarding their health status, vaccination eligibility, and personal preferences. It is assumed that the form will be used in a healthcare context to help guide vaccination efforts.

Before proceeding, it is worth noting that this form is not intended for use as a diagnostic tool or a medical assessment. Its purpose is to gather information for public health purposes, and answers will not be used for clinical diagnosis or treatment recommendations. It is also assumed that users are 18 or older, as the form does not account for minor consent requirements.

Please note that some fields are not required, as indicated in the YAML schema. Users should only provide information relevant to their situation.

</thinking>

# COVID 19 Self Assessment Questionnaire - Help Guide
## Purpose
The "COVID 19 Self Assessment Questionnaire" is a form designed to gather information from individuals about their health status, vaccination eligibility, and personal preferences. This guide is intended to help users complete the form accurately and effectively.

## How To Complete This Form

To complete this form, follow the instructions below:

1.  Select the assessment date.
2.  Provide your full name.
3.  Enter your date of birth in the MM/DD/YYYY format.
4.  Select your gender.
5.  Enter your phone number.
6.  Enter your email address.
7.  Enter your ZIP code.
8.  Answer "True" or "False" to the question "Are you a healthcare worker."
9.  Answer "True" or "False" to the question "Are you an essential worker."
10. Answer "True" or "False" to the questions regarding underlying medical conditions.
11.  Select your age category.
12.  Answer "True" or "False" to the question "Are you currently experiencing any COVID-19 symptoms."
13. Select all the symptoms you are currently experiencing.
14. Answer "Mild", "Moderate", "Severe", or "Very severe" to the question "How severe are your symptoms."
15. Answer "True", "False", or "I have not been tested" to the question "Have you tested positive for COVID-19 in the past 90 days."
16. Answer "True", "False", or "Not sure" to the question "Have you been in close contact with a COVID-19 positive person in the past 14 days."
17. Select your COVID-19 vaccination status.
18. Answer "Yes I want to get vaccinated", "Yes when I am eligible", "Maybe I have questions", or "No I do not want the vaccine" to the question "Are you interested in receiving a COVID-19 vaccine."
19. The following field is a note, which will display the results of your assessment.
20. Select your preference for vaccine type.
21. Answer "Yes I have reliable transportation", "I can get a ride", "I need transportation assistance", or "I prefer home vaccination" to the question "Do you have transportation to a vaccination site."
22. Answer "True" or "False" to the question "Do you need childcare assistance to get vaccinated."
23. Select your preferred language for communication.
24. If you have any questions or concerns, please provide them here.
25. Select how you would like to be contacted about next steps.

## Field-by-Field Explanation

* **Assessment Date** (`assessment_date`, date, required): Enter the current date in the MM/DD/YYYY format.
* **Full Name** (`full_name`, text, required): Provide your full name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the MM/DD/YYYY format.
* **Gender** (`gender`, select_one, required): Select your gender from the provided options.
* **Phone Number** (`phone_number`, text, required): Enter your phone number.
* **Email Address** (`email_address`, email, required): Enter your email address.
* **ZIP Code** (`zipcode`, text, required): Enter your ZIP code.
* **Are you a Healthcare Worker** (`healthcare_worker`, select_one, required): Answer "True" or "False" to this question.
* **Are you an Essential Worker** (`essential_worker`, select_one, required): Answer "True" or "False" to this question.
* **Underlying Conditions** (`underlying_conditions`, select_multiple, required): Select all the underlying medical conditions you have.
* **Age Category** (`age_category`, select_one, required): Select your age category.
* **Are you Currently Experiencing any COVID-19 Symptoms** (`current_symptoms`, select_one, required): Answer "True" or "False" to this question.
* **Which Symptoms are You Experiencing** (`symptom_list`, select_multiple, optional): Select all the symptoms you are experiencing.
* **Symptom Severity** (`symptom_severity`, select_one, optional): Answer "Mild", "Moderate", "Severe", or "Very severe" to the question.
* **Have you Tested Positive for COVID-19 in the Past 90 Days** (`recent_positive_test`, select_one, required): Answer "True", "False", or "I have not been tested" to this question.
* **Have you Been in Close Contact with a COVID-19 Positive Person in the Past 14 Days** (`recent_exposure`, select_one, required): Answer "True", "False", or "Not sure" to this question.
* **COVID-19 Vaccination Status** (`vaccination_status`, select_one, required): Select your COVID-19 vaccination status.
* **Are you Interested in Receiving a COVID-19 Vaccine** (`vaccine_eligibility_interest`, select_one, required): Answer "Yes I want to get vaccinated", "Yes when I am eligible", "Maybe I have questions", or "No I do not want the vaccine" to this question.
* **Eligibility Assessment** (`eligibility_assessment`, note, optional): This field will display the results of your assessment.
* **Do you Have a Preference for Vaccine Type** (`preferred_vaccine_type`, select_one, optional): Select your vaccine preference.
* **Do you Have Transportation to a Vaccination Site** (`transportation_barrier`, select_one, optional): Answer "Yes I have reliable transportation", "I can get a ride", "I need transportation assistance", or "I prefer home vaccination".
* **Do you Need Childcare Assistance to Get Vaccinated** (`childcare_barrier`, select_one, optional): Answer "True" or "False" to this question.
* **Preferred Language** (`language_preference`, select_one, required): Select your preferred language.
* **Additional Questions** (`additional_questions`, text, optional): If you have any questions or concerns, please provide them here.
* **How Would you Like to be Contacted About Next Steps** (`contact_preference`, select_one, required): Select how you would like to be contacted.

## Tips

* Please answer all required questions as accurately as possible.
* If you are unsure about any question, select the "Not sure" or "I have not been tested" option.
* Select the "Maybe I have questions" option if you are unsure or need further information.
* If you have any questions or concerns, please provide them in the "Additional Questions" field.
* Please note that some fields are not required, and you may skip them if you do not have the information.
* Please select your preferred language to ensure that you receive information in a language you can understand.
* If you need transportation assistance, please let us know so we can help.
* If you have childcare needs, please let us know so we can accommodate them.
* Please select how you would like to be contacted about next steps to ensure that you receive the information in a way that works for you.

<thinking>
The COVID 19 Daily Health Screening Form is used for assessing the risk of COVID-19 exposure and clearance for individuals who are interacting with the campus or organization. This form helps to quickly identify potential risks and ensure the necessary precautions are taken.

To complete this form, first ensure that you have read and understood the purpose of the form. If you are unsure about the purpose or your role, please refer to your campus or organization's guidelines.

This form is divided into several sections. Please complete each section carefully and answer honestly. Remember that all answers are confidential and used solely for health and safety purposes.

</thinking>

# COVID 19 Daily Health Screening Form - Help Guide

## Purpose
The COVID 19 Daily Health Screening Form is used for assessing the risk of COVID-19 exposure and clearance for individuals who are interacting with the campus or organization.

## How To Complete This Form

1. Please complete this form before interacting with others, especially if you are a student, employee, client, or visitor.
2. Be honest in your responses. If you are unsure about any symptom or exposure, choose the "Unsure" option.
3. If you have been diagnosed with COVID-19 in the last 14 days, do not interact with others and seek immediate medical attention.
4. If you have been in close contact with a confirmed COVID-19 case in the last 14 days, you may need to follow specific guidelines or protocols.

## Field-by-Field Explanation

* **Full Name** (`respondent_name`, `text`, required): Please enter your full name as it appears on your government-issued ID or driver's license.
* **Student/Employee ID (if applicable)** (`respondent_id`, `text`, optional): If you have a student or employee ID, please enter it. This is not required.
* **Today's Date** (`screening_date`, `date`, required): Please enter the current date in MM/DD/YYYY format.
* **Your Role** (`respondent_role`, `select_one`, required): Please select your role from the options below:
	+ Student
	+ Employee
	+ Client/Patient
	+ Visitor
	+ Other
* **Symptom Screening**
	+ **Do you have a fever or temperature above 100.4 F?** (`fever`, `select_one`, required): If you have a fever or temperature above 100.4 F, you may need to take precautions or follow specific guidelines.
	+ **Do you have a new or worsening cough?** (`cough`, `select_one`, required): If you have a new or worsening cough, you may need to take precautions or follow specific guidelines.
	+ **Do you have shortness of breath or difficulty breathing?** (`shortness_of_breath`, `select_one`, required): If you have shortness of breath or difficulty breathing, you may need to take precautions or follow specific guidelines.
	+ **Do you have body aches or chills?** (`body_aches`, `select_one`, required): If you have body aches or chills, you may need to take precautions or follow specific guidelines.
	+ **Do you have a sore throat?** (`sore_throat`, `select_one`, required): If you have a sore throat, you may need to take precautions or follow specific guidelines.
	+ **Do you have a loss of taste or smell?** (`loss_of_taste_smell`, `select_one`, required): If you have a loss of taste or smell, you may need to take precautions or follow specific guidelines.
* **Exposure Risk**
	+ **Have you been in close contact with a confirmed COVID-19 case in the last 14 days?** (`covid_contact`, `select_one`, required): If you have been in close contact, you may need to follow specific guidelines or protocols.
	+ **Have you been diagnosed with COVID-19 in the last 14 days?** (`covid_diagnosis`, `select_one`, required): If you have been diagnosed, do not interact with others and seek immediate medical attention.
* **Health Clearance**
	+ **Based on this screening, are you cleared to proceed?** (`screening_result`, `select_one`, required): Please select the option that applies to your situation:
	+ Cleared - no symptoms
	+ Cleared - with precautions
	+ Not cleared - requires evaluation
* **Screener Name (if applicable)** (`screener_name`, `text`, optional): If you are interacting with someone else who has completed this form, please enter their name.
* **Additional Notes** (`screener_notes`, `text`, optional): Please enter any additional information that may help with your health clearance.

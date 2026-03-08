<thinking>
We will use this form to gather information from students in need of emergency aid. 
The form is designed to gather essential details about a student's emergency situation, including the type of aid they require, the amount of aid needed, and supporting documentation. 

This form is only for emergency situations, not for general student inquiries or routine requests. 

The student will provide personal details, such as their name, date of application, and contact information. 
The form will also require information about the student's academic status, major field of study, and expected graduation date. 
Finally, the form will ask for details about the student's financial situation, including their current GPA, financial aid status, and supporting documentation. 

Before filling out the form, please ensure that the information you provide is accurate and up-to-date. 
If you are unsure about any of the fields or have questions, please contact the emergency aid office. 
</thinking>

# Application For Emergency Aid - Help Guide

## Purpose
The emergency contact form is a tool for students to report and seek help in urgent situations, such as financial difficulties, medical emergencies, or other crises. 
It is essential to provide accurate information to ensure prompt and effective support.

## How To Complete This Form

1. Fill in your name, date of application, and contact information in the first section. 
2. Select your current academic status, including your major field of study and expected graduation date. 
3. Describe the type of emergency you are experiencing and the amount of aid you need. 
4. Provide details about how you plan to use the funds and any supporting documentation you can offer. 
5. Share your current financial situation, including your monthly income and expenses. 
6. Confirm that you have not received other emergency support and that you can repay the aid if it is a loan. 
7. Sign and certify the accuracy of the information you provide. 

## Field-by-Field Explanation

* **Application Date**: Date of application for emergency aid. 
	+ Type: `date`
	+ Required: `true`
* **First Name**: Legal first name. 
	+ Type: `text`
	+ Required: `true`
* **Last Name**: Legal last name. 
	+ Type: `text`
	+ Required: `true`
* **Student ID**: University student identification number. 
	+ Type: `text`
	+ Required: `true`
* **Email**: University or personal email. 
	+ Type: `email`
	+ Required: `true`
* **Phone**: Contact phone number. 
	+ Type: `text`
	+ Required: `true`
* **Date of Birth**: Your date of birth. 
	+ Type: `date`
	+ Required: `true`
* **Enrollment Status**: Current academic status. 
	+ Type: `select_one`
	+ Options: Full-Time Undergraduate, Part-Time Undergraduate, Full-Time Graduate, Part-Time Graduate, Doctoral Candidate
	+ Required: `true`
* **Major Field of Study**: Academic major or program. 
	+ Type: `text`
	+ Required: `true`
* **Expected Graduation**: Expected graduation date. 
	+ Type: `date`
	+ Required: `true`
* **Emergency Type**: Type of emergency you are experiencing. 
	+ Type: `select_one`
	+ Options: Medical Emergency, Housing Emergency, Food Insecurity, Transportation Emergency, Family Emergency, Natural Disaster, Financial Hardship, Other
	+ Required: `true`
* **Emergency Description**: Describe your emergency situation. 
	+ Type: `text`
	+ Required: `true`
* **Emergency Date**: Date when the emergency occurred. 
	+ Type: `date`
	+ Required: `true`
* **Amount Requested**: Amount of aid requested. 
	+ Type: `number`
	+ Required: `true`
* **Funds Purpose**: How you will use the funds. 
	+ Type: `select_one`
	+ Options: Housing Rent, Utilities, Food, Medical Expenses, Transportation, Textbooks, Tuition, Other
	+ Required: `true`
* **Funds Purpose Details**: Provide more details about fund usage. 
	+ Type: `text`
	+ Required: `false`
* **Current GPA**: Current grade point average. 
	+ Type: `number`
	+ Required: `false`
* **Financial Aid Status**: Current financial aid status. 
	+ Type: `select_one`
	+ Options: Receiving Financial Aid, Applied - Pending, Not Receiving Financial Aid, Not Eligible
	+ Required: `true`
* **Other Support Received**: Have you received other emergency support. 
	+ Type: `select_one`
	+ Options: True, False
	+ Required: `true`
* **Other Support Details**: Describe other support received. 
	+ Type: `text`
	+ Required: `false`
* **Household Size**: Number of people in your household. 
	+ Type: `number`
	+ Required: `false`
* **Dependents**: Do you have dependents. 
	+ Type: `select_one`
	+ Options: True, False
	+ Required: `true`
* **Dependents Details**: Provide details about dependents. 
	+ Type: `text`
	+ Required: `false`
* **Employment Status**: Current employment status. 
	+ Type: `select_one`
	+ Options: Employed Full-Time, Employed Part-Time, Unemployed, Self-Employed
	+ Required: `true`
* **Monthly Income**: Total monthly income. 
	+ Type: `number`
	+ Required: `false`
* **Monthly Expenses**: Total monthly expenses. 
	+ Type: `number`
	+ Required: `false`
* **Supporting Documentation**: List documents you will provide. 
	+ Type: `select_multiple`
	+ Options: Medical Bills, Eviction Notice, Utility Bills, Pay Stubs, Bank Statements, Police Report, Insurance Claims, Other
	+ Required: `false`
* **Repayment Ability**: Can you repay if this is a loan. 
	+ Type: `select_one`
	+ Options: True, False, Unsure
	+ Required: `false`
* **Additional Comments**: Any other information to share. 
	+ Type: `text`
	+ Required: `false`
* **Certify Accuracy**: I certify that all information is accurate. 
	+ Type: `select_one`
	+ Options: True, False
	+ Required: `true`
* **Applicant Signature**: Type your full name as signature. 
	+ Type: `text`
	+ Required: `true`

## Tips

* Be as specific as possible when filling out the form.
* Use clear and concise language when describing your emergency situation.
* Attach any supporting documentation as required.
* Ensure that the information you provide is accurate and up-to-date.
* If you are unsure about any field, please contact the emergency aid office for assistance.

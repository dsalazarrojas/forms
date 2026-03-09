# personal_training_consultation_questionnaire - Help Guide
## Purpose
The "personal_training_consultation_questionnaire" form is designed to collect information about your training goals, medical information, emergency contacts, and training session details. This form helps us create a personalized training plan tailored to your needs.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required fields for "Training Session Info", "Training Goals", and "Emergency Contact" sections.
2. Select your preferred training session times, days, and dates from the available options.
3. Add any additional information you'd like to provide in the "Training Session Notes" and "Emergency Contact Comments" fields.
4. Review and submit the form once you've completed all the required fields.

## Field-by-Field Explanation

* **Training Session Info** (id: 1, `text`, required: true): Please provide a brief description of your current training goals and objectives.
* **Exercise Goals** (id: 2, `text`, required: false): If you have specific exercise goals, please list them here.
* **Medical Info** (id: 3, `note`, required: false): Please provide any relevant medical information that may impact your training.
* **Emergency Contact** (id: 4, `select_one`, required: false): Please select who will be your emergency contact:
	+ Parent
	+ Spouse
	+ Other
* **Emergency Phone** (id: 5, `text`, required: false): Please provide the contact phone number for your emergency contact.
* **Emergency Email** (id: 6, `email`, required: false): Please provide the contact email for your emergency contact.
* **Relationship** (id: 7, `text`, required: false): Please describe the relationship with your emergency contact.
* **Injury Info** (id: 8, `note`, required: false): If you have any injuries or medical conditions, please provide a brief description.
* **Injury Description** (id: 9, `text`, required: false): Please provide a detailed description of your injury or medical condition.
* **Training Goals** (id: 10, `select_multiple`, required: false): Please select your training goals:
	+ Weight Loss
	+ Muscle Gain
	+ Endurance
	+ Flexibility
	+ Injury Recovery
	+ Strength
	+ Power
	+ Agility
	+ Balance
* **Available Training Sessions** (id: 11, `number`, required: false): Please indicate how many training sessions you would like to have per week.
* **Available Training Session Times** (id: 12, `select_one`, required: false): Please select your preferred training session time:
	+ Morning
	+ Afternoon
	+ Evening
* **Available Training Session Days** (id: 13, `select_one`, required: false): Please select your preferred training session day:
	+ Mon
	+ Tue
	+ Wed
	+ Thu
	+ Fri
	+ Sat
	+ Sun
* **Training Session Duration** (id: 14, `select_one`, required: false): Please select the duration of your training session:
	+ 30
	+ 60
	+ 90
* **Available Training Session Dates** (id: 15, `date`, required: false): Please select the dates you are available for training sessions.
* **Available Training Session Times** (id: 16, `time`, required: false): Please select the specific times you are available for training sessions.
* **Training Session Notes** (id: 17, `text`, required: false): Please provide any additional information about your training sessions.
* **Training Session Additional Info** (id: 18, `text`, required: false): Please provide any additional information about your training sessions.
* **Emergency Contact Relationship** (id: 19, `select_one`, required: false): Please select the relationship with your emergency contact:
	+ Parent
	+ Spouse
	+ Other
* **Emergency Contact Name** (id: 20, `text`, required: false): Please provide the name of your emergency contact.
* **Emergency Contact Info** (id: 21, `text`, required: false): Please provide any additional information about your emergency contact.
* **Emergency Contact Phone** (id: 22, `text`, required: false): Please provide the phone number for your emergency contact.
* **Emergency Contact Email** (id: 23, `email`, required: false): Please provide the email for your emergency contact.
* **Emergency Contact Relationship** (id: 24, `text`, required: false): Please describe the relationship with your emergency contact.
* **Emergency Contact Comments** (id: 25, `text`, required: false): Please provide any additional comments about your emergency contact.

## Tips
* Make sure to fill in all the required fields to ensure we can create an accurate and effective training plan.
* If you have any questions or concerns, please contact us and we'll be happy to help.
* Please review the form carefully before submitting to ensure accuracy and completeness.

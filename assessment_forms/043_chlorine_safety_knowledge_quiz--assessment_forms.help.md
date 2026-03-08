<thinking>
This form is intended to assess the knowledge of pool facilities staff on chlorine safety procedures and protocols. It is crucial to ensure that the respondents are familiar with the proper handling, storage, and emergency response procedures for chlorine. The form is designed to be completed by pool facility staff and is intended to be a quick reference guide for them to self-assess their knowledge. It is also intended to be used for training and compliance purposes.
</thinking>

# Chlorine Safety Knowledge Quiz - Help Guide
## Purpose
This form is designed to assess the knowledge of pool facility staff on chlorine safety procedures and protocols.

## How To Complete This Form
To complete this form, follow these steps:

1.  Please fill out the participant information section with your full name and employee ID.
2.  Select your department or work area from the list.
3.  Choose the correct answers to each of the questions regarding chlorine safety procedures.
4.  Rate your confidence level in your knowledge of chlorine safety.
5.  Finally, indicate if you have completed the quiz.

## Field-by-Field Explanation
* **-- Participant Information --** (`participant_info`, note, required: false): This section is for participant information such as full name and employee ID.
* **Full Name** (`participant_name`, text, required: true): Please enter your full name.
* **Employee ID** (`employee_id`, text, required: false): This is your employee ID (if you have one).
* **Department or Work Area** (`department`, text, required: true): Please select your department or work area from the list.
* **Quiz Date** (`quiz_date`, date, required: true): Please select the date of the quiz.
* **-- Chlorine Basics --** (`chlorine_basics`, note, required: false): This section provides background information on chlorine and its uses.
* **What is chlorine primarily used for in pool facilities?** (`question_1`, select_one, required: true): Select the correct answer.
	+ Water disinfection
* **Chlorine is a gas at room temperature** (`question_2`, select_one, required: true): Select the correct answer.
	+ True
* **What color gas does chlorine produce?** (`question_3`, select_one, required: true): Select the correct answer.
	+ Yellow-green
* **-- Safety Hazards --** (`safety_hazards`, note, required: false): This section provides information on safety hazards of chlorine exposure.
* **What is the primary health hazard of chlorine exposure?** (`question_4`, select_one, required: true): Select the correct answer.
	+ Respiratory irritation
* **Chlorine exposure can cause** (`question_5`, select_multiple, required: true): Select all that apply.
	+ Coughing
	+ Eye irritation
	+ Shortness of breath
	+ Chest pain
* **The lethal dose of chlorine gas is generally reached at concentrations** (`question_6`, select_one, required: true): Select the correct answer.
	+ 100 ppm
* **-- Emergency Response --** (`emergency_response`, note, required: false): This section provides information on emergency response procedures for chlorine exposure.
* **If someone is exposed to chlorine gas, first aid is to** (`question_7`, select_one, required: true): Select the correct answer.
	+ Move to fresh air immediately
* **In case of chlorine spill, the area should be** (`question_8`, select_one, required: true): Select the correct answer.
	+ Evacuated and ventilated
* **-- Storage and Handling --** (`storage_handling`, note, required: false): This section provides information on storage and handling procedures for chlorine.
* **Chlorine should be stored** (`question_9`, select_one, required: true): Select the correct answer.
	+ In cool, dry, well-ventilated areas
* **What protective equipment is needed when handling chlorine?** (`question_10`, select_multiple, required: true): Select all that apply.
	+ Gloves
	+ Eye protection
	+ Respiratory protection
	+ Face shield
	+ Apron
* **-- Compliance and Knowledge --** (`compliance`, note, required: false): This section provides information on compliance and knowledge requirements.
* **I have read and understand the chlorine safety manual** (`question_11`, select_one, required: true): Select the correct answer.
	+ Yes
* **I understand my workplace chlorine safety responsibilities** (`question_12`, select_one, required: true): Select the correct answer.
	+ Yes
* **How confident are you in your chlorine safety knowledge?** (`confidence_level`, number, required: true): Rate your confidence level from 1 to 5.
* **I have completed this quiz** (`quiz_completion`, select_one, required: true): Select the correct answer.
	+ Yes

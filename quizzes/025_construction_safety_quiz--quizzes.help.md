<thinking> 
We need to determine if the user has filled in the construction safety quiz and if it is a retake. This should be done by checking the 'passing_status' field. If it is 'Fail', we should display a 'Retake Required' message, otherwise, we should display a 'Quiz Submission Successful'. We also need to verify if the quiz has a participant name, email, employee ID, company name, job title, and quiz date. If any of these fields are empty, we should display a 'Missing Information' message. Finally, we need to make sure that the participant's quiz score is not zero. If it is, we should display a 'Quiz Submission Failed' message.</thinking>

# Construction Safety Quiz - Help Guide
## Purpose
This form is designed to test the knowledge of construction personnel on safety practices and procedures. It consists of multiple-choice questions related to safety guidelines, best practices, and standards.

## How To Complete This Form
1. Fill in your information in the required fields:
	* Participant Name: Enter your full name as per the provided label.
	* Email Address: Enter your company email address.
	* Employee ID: Enter your employee ID number (optional).
	* Company Name: Enter the name of your company.
	* Job Title: Enter your position or job title.
2. Answer the safety questions:
	* Each question is multiple-choice, and you should select the correct answer based on the options provided.
3. Review your information and answers before submitting the form.

## Field-by-Field Explanation
* **Participant Name** (`participant_name`, text, required): Enter your full name as per the provided label.
* **Email Address** (`participant_email`, email, required): Enter your company email address.
* **Employee ID** (`employee_id`, text, optional): Enter your employee ID number (if you have one).
* **Company Name** (`company_name`, text, required): Enter the name of your company.
* **Job Title** (`job_title`, text, required): Enter your position or job title.
* **Quiz Date** (`quiz_date`, date, required): Enter the date of the quiz.
* **What Does PPE Stand For** (`question_1`, select_one, required): Select the correct answer from the provided options.
* **When Should Hard Hats Be Worn** (`question_2`, select_one, required): Select the best answer from the provided options.
* **What Is the Maximum Weight One Person Should Lift Alone** (`question_3`, select_one, required): Select the recommended limit from the provided options.
* **What Color Is Typically Used for Fire Safety Equipment** (`question_4`, select_one, required): Select the standard color coding from the provided options.
* **What Should You Do Before Operating Any Equipment** (`question_5`, select_one, required): Select the best practice from the provided options.
* **What Is the Purpose of a Spotter When Backing Up Vehicles** (`question_6`, select_one, required): Select the main reason from the provided options.
* **How Should You Report a Safety Hazard** (`question_7`, select_one, required): Select the correct procedure from the provided options.
* **What Does Lockout Tagout Prevent** (`question_8`, select_one, required): Select the primary purpose from the provided options.
* **What Is the Minimum Distance to Keep from Power Lines** (`question_9`, select_one, required): Select the safe distance from the provided options.
* **What Should Be Done with Damaged Tools** (`question_10`, select_one, required): Select the correct action from the provided options.
* **True or False - Safety Glasses Are Only Needed When Using Power Tools** (`question_11`, select_one, required): Select true or false from the provided options.
* **What Is the First Step in Case of Fire** (`question_12`, select_one, required): Select the priority action from the provided options.
* **What Does MSDS or SDS Stand For** (`question_13`, select_one, required): Select the chemical safety documentation from the provided options.
* **How Many Points of Contact Should You Maintain on a Ladder** (`question_14`, select_one, required): Select the safe number from the provided options.
* **What Should You Do If You See a Coworker Working Unsafely** (`question_15`, select_one, required): Select the best response from the provided options.
* **Quiz Score** (`quiz_score`, number, optional): Enter the number of correct answers.
* **Passing Status** (`passing_status`, select_one, optional): Select the status (Pass or Fail).
* **Retake Needed** (`retake_needed`, select_one, optional): Select true or false.
* **Participant Signature** (`participant_signature`, text, required): Enter your full name as signature.
* **Supervisor Signature** (`supervisor_signature`, text, optional): Enter your supervisor's full name as signature.

## Tips
* Make sure to fill in all required fields before submitting the form.
* Review your answers carefully before submitting the form.
* If you have any doubts or uncertainties, consult your supervisor or safety officer.
* In case you fail, do not hesitate to retake the quiz.

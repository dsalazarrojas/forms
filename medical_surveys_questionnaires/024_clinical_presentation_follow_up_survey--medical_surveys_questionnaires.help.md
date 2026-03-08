</thinking>

# Clinical Presentation Follow Up Survey - Help Guide
## Purpose

This survey is designed to follow up with you after your recent clinical visit to monitor your progress and ensure you are doing well. It is essential to provide your honest answers to help us understand your current status and make any necessary adjustments to your treatment plan. Please answer each question to the best of your ability.

## How To Complete This Form

1. Please answer each question carefully, and select only the options that apply to your situation.
2. If you are unsure or don't know the answer, please select "Not Applicable" or "Not Sure" as applicable.
3. If you have any additional comments or concerns, please use the "Additional Comments" field at the end of the form.

## Field-by-Field Explanation

* **Clinical Presentation Follow-Up Survey** (`survey_header`, note, not required): This is the header of the survey, providing an overview of the form's purpose.
* **Patient Name** (`patient_name`, text, required): Please enter your name as it appears on your records.
* **Patient ID or MRN** (`patient_id`, text, not required): If you have a patient ID or MRN (Medical Record Number), please enter it here.
* **Original Visit Date** (`visit_date`, date, required): Please enter the date of your recent clinical visit.
* **Today Date** (`survey_date`, date, required): Please enter the current date.
* **Provider You Saw** (`provider_name`, text, not required): If you remember the name of your provider, please enter it here.
* **Primary Diagnosis or Reason for Visit** (`primary_diagnosis`, text, not required): Please describe your primary diagnosis or reason for visit as you understood it.
* **How Have Your Symptoms Changed Since the Visit** (`symptom_improvement`, select_one, required): Select one of the following:
	+ Completely Resolved
	+ Significantly Improved
	+ Moderately Improved
	+ Slightly Improved
	+ No Change
	+ Slightly Worse
	+ Significantly Worse
* **Current Symptom Severity** (`current_symptom_severity`, number, required): Please rate your current symptom severity from 1 (minimal) to 10 (severe).
* **Symptom Severity Before Treatment** (`symptom_severity_before`, number, not required): If applicable, please rate your symptom severity before treatment from 1 (minimal) to 10 (severe).
* **Which Symptoms Are You Still Experiencing** (`symptoms_experienced`, select_multiple, required): Select all the symptoms that still apply to you:
	+ Pain
	+ Fatigue
	+ Nausea
	+ Headache
	+ Dizziness
	+ Shortness of Breath
	+ Cough
	+ Fever
	+ Swelling
	+ Digestive Issues
	+ Sleep Problems
	+ Mood Changes
	+ None
* **Were You Prescribed Medication** (`medication_prescribed`, select_one, required): Select one of the following:
	+ True
	+ False
* **Have You Been Taking Medication as Directed** (`medication_adherence`, select_one, not required): If applicable, select one of the following:
	+ Yes Always
	+ Yes Mostly
	+ Sometimes
	+ Rarely
	+ False
* **How Effective Has the Medication Been** (`medication_effectiveness`, select_one, not required): If applicable, select one of the following:
	+ Very Effective
	+ Effective
	+ Somewhat Effective
	+ Not Very Effective
	+ Not Effective at All
	+ Not Applicable
* **Have You Experienced Any Side Effects** (`side_effects`, select_one, not required): Select one of the following:
	+ Yes Severe
	+ Yes Moderate
	+ Yes Mild
	+ False
	+ Not Applicable
* **Side Effects Details** (`side_effects_details`, text, not required): If applicable, describe any side effects you experienced.
* **Have You Followed the Treatment Plan** (`treatment_plan_followed`, select_one, required): Select one of the following:
	+ Yes Completely
	+ Yes Mostly
	+ Partially
	+ Minimally
	+ False
* **Any Barriers to Following the Plan** (`barriers_to_following_plan`, select_multiple, not required): Select all the barriers that apply to you:
	+ None
	+ Cost
	+ Time Constraints
	+ Side Effects
	+ Lack of Understanding
	+ Physical Limitations
	+ Lack of Support
	+ Forgetfulness
	+ Other
* **Do You Have a Follow-Up Appointment Scheduled** (`follow_up_appointment`, select_one, required): Select one of the following:
	+ True
	+ False
	+ Not Sure
* **Follow-Up Appointment Date** (`follow_up_date`, date, not required): If known, enter the date of your follow-up appointment.
* **Have You Sought Additional Care Since the Visit** (`additional_care_needed`, select_one, not required): Select one of the following:
	+ Yes Emergency Room
	+ Yes Urgent Care
	+ Yes Another Provider
	+ False
* **Reason for Additional Care** (`additional_care_reason`, text, not required): If applicable, describe the reason for any additional care you sought.
* **How Well Do You Understand Your Condition Now** (`understanding_of_condition`, select_one, required): Select one of the following:
	+ Very Well
	+ Well
	+ Moderately Well
	+ Slightly
	+ Not Well at All
* **Confidence in Managing Your Condition** (`confidence_in_management`, select_one, required): Select one of the following:
	+ Very Confident
	+ Confident
	+ Somewhat Confident
	+ Not Very Confident
	+ Not Confident at All
* **Do You Have Any Unanswered Questions or Concerns** (`questions_or_concerns`, select_one, required): Select one of the following:
	+ True
	+ False
* **Please Describe Your Questions or Concerns** (`questions_details`, text, not required): If applicable, describe your questions or concerns.
* **Overall Satisfaction with Your Care** (`overall_satisfaction`, select_one, required): Select one of the following:
	+ Very Satisfied
	+ Satisfied
	+ Neutral
	+ Dissatisfied
	+ Very Dissatisfied
* **Additional Comments** (`additional_comments`, text, not required): If you have any additional comments or concerns, please share them here.

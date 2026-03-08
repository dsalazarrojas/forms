<thinking>
To create a user-facing help guide for the "Balloon Pilot Evaluation Form" form, I need to first consider the form's purpose and relevance. This form appears to be used for evaluating the performance of balloon pilots during flight operations. Based on the provided YAML, the form has several fields that gather information about the pilot, flight details, and evaluation metrics.

The main goal of the form is to assess the pilot's skills and competencies in controlling and navigating a balloon during flight. The form has two main sections: "Pilot Information" and "Aircraft and Flight Details," which gather basic pilot data and flight specifics. 

The "Pilot Performance Metrics" section contains a series of evaluation metrics, with each option rating the pilot's performance in specific skills, such as pre-flight procedures, inflation and launch, in-flight control, and descent and landing. The final section, "Overall Evaluation Result," asks the evaluator to select a final status for the evaluation, while the "Detailed Evaluator Comments" field allows for additional comments or feedback.

The form appears to be relevant to aviation organizations or authorities that need to evaluate balloon pilots for licensing, renewal, or certification purposes.

</thinking>

# Balloon Pilot Evaluation Form - Help Guide
## Purpose
The Balloon Pilot Evaluation Form is used to assess the performance of balloon pilots during flight operations. The form gathers information about the pilot, flight details, and evaluation metrics to determine the pilot's skills and competencies.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the pilot's full name and certificate number in the respective fields.
2. Select the date of the evaluation flight.
3. Enter the pilot's aircraft registration number and the duration of the flight in minutes.
4. Describe the weather conditions encountered during the flight.
5. Evaluate the pilot's performance in the provided metrics, using the options below each field.
6. Select the final status of the evaluation from the options provided.
7. Provide detailed comments about the pilot's performance, if necessary.

## Field-by-Field Explanation

* **Pilot Full Name** (`pilot_name`, text, true): Enter the pilot's full name being evaluated.
* **Pilot Certificate Number** (`certificate_number`, text, true): Enter the FAA or local authority ID number of the pilot.
* **Date of Evaluation** (`evaluation_date`, date, true): Select the date the flight evaluation occurred.
* **Evaluator Name** (`evaluator_name`, text, true): Enter the name of the designated examiner or official.
* **Balloon Registration Number** (`balloon_registration`, text, true): Enter the balloon's registration number, e.g., N-Number.
* **Total Flight Time (Minutes)** (`flight_duration`, number, true): Enter the duration of the evaluation flight.
* **Weather Conditions** (`weather_conditions`, text, true): Briefly describe the weather conditions encountered during the flight.
* **Pre-flight Procedures and Safety Briefing** (`preflight_check`, select_one, true): Rate the pilot's inspection and briefing quality, using the options:
	+ 1 - Unsatisfactory
	+ 2 - Marginal
	+ 3 - Proficient
	+ 4 - Exceptional
* **Inflation and Launch Control** (`inflation_launch`, select_one, true): Evaluate the pilot's ground handling and lift-off, using the options:
	+ 1 - Unsatisfactory
	+ 2 - Marginal
	+ 3 - Proficient
	+ 4 - Exceptional
* **In-flight Control and Maneuvering** (`inflight_maneuvers`, select_one, true): Evaluate the pilot's altitud control and response to wind changes, using the options:
	+ 1 - Unsatisfactory
	+ 2 - Marginal
	+ 3 - Proficient
	+ 4 - Exceptional
* **Descent and Landing Accuracy** (`descent_landing`, select_one, true): Evaluate the pilot's approach and touch down, using the options:
	+ 1 - Unsatisfactory
	+ 2 - Marginal
	+ 3 - Proficient
	+ 4 - Exceptional
* **Overall Evaluation Result** (`overall_result`, select_one, true): Select the final status of this evaluation, using the options:
	+ Pass - Recommended for Renewal
	+ Pass - With Minor Deficiencies
	+ Fail - Retraining Required
* **Detailed Evaluator Comments** (`evaluator_comments`, text, false): Provide specifics on performance or required improvements, if necessary.

<thinking> 
This form is designed to collect information from participants for a baseline cognitive assessment, likely for research or clinical purposes. The form aims to gather demographic details, cognitive function data, and general health information to help assessors make informed decisions or diagnoses. Ensure that you're completing this form for yourself or with the participant's consent. Please note that some questions may have specific scales or options for scoring, so make sure to understand their meaning before answering. If you're filling out this form for someone else, please ensure you have the necessary permissions or consents to do so. If you're unsure about any question, please ask an assessor for clarification. 

</thinking>

# Baseline Cognitive Assessment Form - Help Guide
## Purpose
The Baseline Cognitive Assessment Form is a standardized tool used to evaluate a participant's cognitive functions, general health, and demographic details. It's essential to fill out this form accurately and honestly to ensure reliable results.

## How To Complete This Form
1. Ensure you have the necessary permissions or consents to complete this form, especially if you're filling it out for someone else.
2. Fill out the form in its entirety, answering each question to the best of your ability.
3. Be honest and accurate when answering the questions, as this information will be used to make informed decisions.
4. If you're unsure about any question, ask an assessor for clarification.

## Field-by-Field Explanation

### Participant Information 
* **Participant ID** (`participant_id`, `text`, required): Enter your unique identifier, if applicable.
* **First name** (`first_name`, `text`, required): Enter your first name.
* **Last name** (`last_name`, `text`, required): Enter your last name.
* **Date of birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format YYYY-MM-DD.
* **Email address** (`email`, `email`, required): Enter your email address.
* **Phone number** (`phone`, `text`, optional): Enter your phone number, if applicable.

### Assessment Details 
* **Assessment date** (`assessment_date`, `date`, required): Enter the date this assessment was conducted.
* **Assessor name** (`assessor_name`, `text`, required): Enter the name of the assessor who conducted this assessment.

### Cognitive Screening Questions 
* **Attention and concentration level** (`attention`, `number`, required): Rate your attention and concentration level on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Recent memory function** (`memory_recent`, `number`, required): Rate your recent memory function on a scale of 1-5.
* **Distant memory function** (`memory_distant`, `number`, required): Rate your distant memory function on a scale of 1-5.
* **Orientation to time, place, and person** (`orientation`, `number`, required): Rate your orientation to time, place, and person on a scale of 1-5.
* **Language fluency and comprehension** (`language_fluency`, `number`, required): Rate your language fluency and comprehension on a scale of 1-5.
* **Problem-solving and reasoning ability** (`problem_solving`, `number`, required): Rate your problem-solving and reasoning ability on a scale of 1-5.
* **Executive function (planning, organization)** (`executive_function`, `number`, required): Rate your executive function (planning, organization) on a scale of 1-5.

### General Health Information 
* **Currently taking medications?** (`current_medications`, `select_one`, required): Check if you're currently taking medications.
* **If yes, please list** (`medication_list`, `text`, optional): If you answered "yes" to the previous question, list your medications.
* **Sleep quality (past month)** (`sleep_quality`, `select_one`, optional): Rate your sleep quality over the past month on a scale of Excellent, Good, Fair, or Poor.
* **Stress level** (`stress_level`, `select_one`, optional): Rate your stress level on a scale of Low, Moderate, High, or Very High.

### Consent and Confirmation 
* **I consent to participate in this cognitive assessment** (`consent`, `select_one`, required): Confirm your consent to participate in this assessment.
* **I understand my data will be kept confidential** (`data_privacy`, `select_one`, required): Confirm that you understand your data will be kept confidential.

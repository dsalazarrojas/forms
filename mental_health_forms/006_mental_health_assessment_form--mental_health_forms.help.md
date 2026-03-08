# Mental Health Assessment Form - Help Guide
## Purpose
This form is designed to collect information about a patient's mental health, including their mental state, anxiety and depression levels, substance use, suicidal tendencies, medical conditions, and mental health provider information. The collected data will be used to provide personalized mental health evaluations and recommendations.

## How To Complete This Form

1. **Start by reviewing the form**: Take a few minutes to read through the form and understand its layout.
2. **Complete each field carefully**:
	* **Patient Information**: Enter your name, date, and ID number (if applicable).
	* **Mental State**: Select a number to rate how you currently feel, with 1 being "Normal" and 10 being "Unwell".
	* **Anxiety Level**: Rate your anxiety levels using the same scale as above.
	* **Depression Level**: Rate your depression levels using the same scale as above.
	* **Substance Use**: Choose how often you use substances, with options being "Never", "Sometimes", or "Frequently".
	* **Suicidal Tendencies**: Select all that apply, with options being "Never", "Sometimes", "Frequently", or "Often".
	* **Medical Condition**: Describe any current medical conditions affecting your mental health.
	* **Mental Health Provider**: Enter the name and contact information of your mental health provider.
	* **Mental Health Professional**: Enter the name and contact information of your mental health professional (if applicable).
	* **Mental Health Facility**: Enter the name and contact information of the mental health facility where you receive treatment (if applicable).

## Field-by-Field Explanation

* **Patient Information** (`patient_information`, `text`, required: false): Please enter your name, date, and ID number (if applicable) to help us identify you for follow-up assessments.
* **Mental State** (`mental_state`, `number`, required: false): Rate how you currently feel using the 1-10 scale, with 1 being "Normal" and 10 being "Unwell".
* **Anxiety Level** (`anxiety_level`, `number`, required: false): Rate your anxiety levels using the same 1-10 scale as above.
* **Depression Level** (`depression_level`, `number`, required: false): Rate your depression levels using the same 1-10 scale as above.
* **Substance Use** (`substance_use`, `select_one`, required: false): Select how often you use substances, with options being "Never", "Sometimes", or "Frequently".
* **Suicidal Tendencies** (`suicidal_tendencies`, `select_multiple`, required: true): Select all that apply, with options being "Never", "Sometimes", "Frequently", or "Often".
* **Medical Condition** (`medical_condition`, `text`, required: false): Describe any current medical conditions affecting your mental health.
* **Mental Health Provider** (`mental_health_provider`, `text`, required: true): Enter the name and contact information of your mental health provider.
* **Mental Health Professional** (`mental_health_professional`, `text`, required: false): Enter the name and contact information of your mental health professional (if applicable).
* **Mental Health Facility** (`mental_health_facility`, `text`, required: false): Enter the name and contact information of the mental health facility where you receive treatment (if applicable).

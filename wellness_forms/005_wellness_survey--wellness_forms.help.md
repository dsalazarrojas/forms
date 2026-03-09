# wellness_survey - Help Guide
## Purpose
The Wellness Survey is a form designed to collect demographic information, lifestyle habits, and medical conditions to assess an individual's overall wellness.

## How To Complete This Form
- Please answer each question truthfully and accurately.
- For select_one fields, choose the option that best describes your situation.
- For select_multiple fields, select all options that apply.
- For text fields, provide a clear and concise answer.
- Ensure all required fields are filled in accurately.
- If a field is not relevant to you, mark "No" or select "None" to indicate that it does not apply.

## Field-by-Field Explanation

* **Wellness Survey** (`title`, note, required: false): This is the title of the form.
* **How old are you** (`age`, number, required: false): Please enter your age.
* **height** (`height`, number, required: false): Please enter your height in centimeters (or feet and inches for non-metric units, but this will be used for metric units in calculations).
* **What is your gender** (`gender`, select_one, required: false): Please choose the option that best describes your gender.
	+ **Male**
	+ **Female**
	+ **Other**
* **What is your occupation** (`occupation`, select_multiple, required: false): Select all options that apply:
	+ **Healthcare Professional**
	+ **Student**
	+ **Retiree**
	+ **Unemployed**
	+ **Pensioner**
	+ **Student/Intern**
	+ **Self-Employed**
	+ **Homemaker**
* **Do you smoke** (`smoker`, select_one, required: false): Please choose the option that best describes your smoking habits.
	+ **Yes**
	+ **No**
* **Medical conditions** (`medical_condition`, select_multiple, required: false): Select all medical conditions that apply:
	+ **Yes**
	+ **No**
* **How often do you exercise** (`exercise_frequency`, select_one, required: false): Please choose the option that best describes your exercise frequency.
	+ **Less than once a week**
	+ **1-2 times a week**
	+ **3-4 times a week**
	+ **5-6 times a week**
	+ **Daily**
* **What is your diet** (`diet`, select_multiple, required: false): Select all options that apply:
	+ **Yes**
	+ **No**
* **weight** (`weight`, number, required: false): Please enter your weight in kilograms or pounds.
* **Height unit** (`height_unit`, select_one, required: false): Please select the unit of your height.
	+ **Meter**
	+ **Feet**
* **Exercise frequency** (`exercise_frequency_frequency`, text, required: false): Please provide a brief description of your exercise frequency.
* **Medical condition frequency** (`medical_condition_frequency`, select_multiple, required: false): Select all medical conditions that apply:
	+ **Yes**
	+ **No**
* **Exercise intensity** (`exercise_intensity`, select_one, required: false): Please choose the option that best describes your exercise intensity.
	+ **Yes**
	+ **No**
* **Exercise duration** (`exercise_duration`, select_one, required: false): Please choose the option that best describes your exercise duration.
	+ **Yes**
	+ **No**
* **Exercise type** (`exercise_type`, select_multiple, required: false): Select all types of exercise you do. 
	+ **Yes**
	+ **No**

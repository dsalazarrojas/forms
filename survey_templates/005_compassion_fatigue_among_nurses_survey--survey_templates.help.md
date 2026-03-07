<thinking>As a form designer and technical writer, my goal is to create a user-facing help guide that clearly communicates the purpose and functionality of the "Compassion Fatigue Among Nurses Survey" form. This guide will walk users through the form's purpose, how to complete it, and explain each field in a concise and practical manner. I will base my explanations on the provided YAML fields, ensuring that the guide is concrete and concrete. If a field label is unclear, I will attempt to explain its intended purpose without adding unsupported business logic. The guide will be structured as follows: # Compassion Fatigue Among Nurses Survey - Help Guide## PurposeThis survey is designed to assess and monitor compassion fatigue among nurses, which is a state of emotional exhaustion and decreased empathy that can occur due to prolonged exposure to stressful work environments. The survey is confidential and intended for program improvement, allowing the healthcare organization to better understand the needs and challenges faced by their nursing staff.## How To Complete This FormThis form consists of 10 questions, each designed to gather specific information about the nurse's experience and work environment. Please complete the form carefully and accurately to ensure that the survey results are reliable and useful for program improvement.## Field-by-Field Explanation*

* **Survey Introduction --** (`1`, `note`, required: false): This is an informational note that welcomes the nurse to the survey and provides context about its purpose and confidentiality.
* **Nurse Name** (`2`, `text`, required: false): This is an optional field that allows the nurse to leave their name, but not required. If left blank, the responses will be anonymous.
* **Clinical Department** (`3`, `select_one`, required: false): Select your primary area of clinical work from the options provided:
	+ Emergency
	+ Intensive Care
	+ Pediatrics
	+ Medical Surgical
	+ Other
* **Years of Nursing Experience** (`4`, `number`, required: false): Enter the number of years of nursing experience you have, rounding to the nearest year. For example, if you have 3.5 years of experience, you would enter 3.
* **How Often Do You Experience Compassion Fatigue?** (`5`, `select_one`, required: true): Select the option that best describes your experience with compassion fatigue:
	+ Rarely
	+ Sometimes
	+ Often
	+ Always
* **Current Perceived Stress Level** (`6`, `number`, required: true): Rate your current perceived stress level, where 1 is low and 10 is high.
* **Main Stressors at Work** (`7`, `select_multiple`, required: false): Select up to three stressors that are causing you the most stress at work:
	+ Workload
	+ Emotional burden
	+ Staffing shortages
	+ Administrative tasks
	+ Lack of support
* **Coping Strategies** (`8`, `text`, required: false): Briefly describe the strategies you use to cope with stress and compassion fatigue.
* **Do You Have Access to Mental Health Support at Work?** (`9`, `select_one`, required: true): Select whether you have access to mental health support at work:
	+ True
	+ False
	+ Not sure
* **Suggestions for Organizational Support** (`10`, `text`, required: false): If you have any suggestions on how your organization could improve nurse wellbeing, please include them in the text field.

Note: The survey questions are designed to be completed carefully and accurately to ensure reliable and useful results for program improvement.</thinking>

# Compassion Fatigue Among Nurses Survey - Help Guide

## Purpose
This survey is designed to assess and monitor compassion fatigue among nurses, which is a state of emotional exhaustion and decreased empathy that can occur due to prolonged exposure to stressful work environments. The survey is confidential and intended for program improvement, allowing the healthcare organization to better understand the needs and challenges faced by their nursing staff.

## How To Complete This Form
This form consists of 10 questions, each designed to gather specific information about the nurse's experience and work environment. Please complete the form carefully and accurately to ensure that the survey results are reliable and useful for program improvement.

## Field-by-Field Explanation
* **Survey Introduction --** (`1`, `note`, required: false): This is an informational note that welcomes the nurse to the survey and provides context about its purpose and confidentiality.
* **Nurse Name** (`2`, `text`, required: false): This is an optional field that allows the nurse to leave their name, but not required. If left blank, the responses will be anonymous.
* **Clinical Department** (`3`, `select_one`, required: false): Select your primary area of clinical work from the options provided:
	+ Emergency
	+ Intensive Care
	+ Pediatrics
	+ Medical Surgical
	+ Other
* **Years of Nursing Experience** (`4`, `number`, required: false): Enter the number of years of nursing experience you have, rounding to the nearest year. For example, if you have 3.5 years of experience, you would enter 3.
* **How Often Do You Experience Compassion Fatigue?** (`5`, `select_one`, required: true): Select the option that best describes your experience with compassion fatigue:
	+ Rarely
	+ Sometimes
	+ Often
	+ Always
* **Current Perceived Stress Level** (`6`, `number`, required: true): Rate your current perceived stress level, where 1 is low and 10 is high.
* **Main Stressors at Work** (`7`, `select_multiple`, required: false): Select up to three stressors that are causing you the most stress at work:
	+ Workload
	+ Emotional burden
	+ Staffing shortages
	+ Administrative tasks
	+ Lack of support
* **Coping Strategies** (`8`, `text`, required: false): Briefly describe the strategies you use to cope with stress and compassion fatigue.
* **Do You Have Access to Mental Health Support at Work?** (`9`, `select_one`, required: true): Select whether you have access to mental health support at work:
	+ True
	+ False
	+ Not sure
* **Suggestions for Organizational Support** (`10`, `text`, required: false): If you have any suggestions on how your organization could improve nurse wellbeing, please include them in the text field.

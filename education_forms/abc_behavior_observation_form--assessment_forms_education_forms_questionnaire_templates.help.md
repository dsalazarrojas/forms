# ABC Behavior Observation Form - Help Guide
## Purpose
The ABC (Antecedent-Behavior-Consequence) Behavior Observation Form is designed to collect detailed information on a specific behavior observed in an individual, typically in an educational setting. The form helps in documenting and recording the behavior's antecedent (what happened before), behavior (what was observed), and consequence (what happened after).

## How To Complete This Form

1. Start by filling in the observer's section with your name, role, and date of observation.
2. In the subject's section, provide the individual's full name and age (if applicable).
3. Describe the setting where the behavior occurred (e.g., classroom, playground, etc.).
4. Specify what preceded the behavior (antecedent) and the specific behavior observed.
5. Rate the intensity of the behavior and its duration (if known).
6. Record how others reacted to the behavior (consequence).
7. If relevant, specify any environmental factors that may have contributed to the behavior.
8. Describe any interventions or strategies used to address the behavior.
9. Add any additional observations or notes that may be helpful for future reference.

## Field-by-Field Explanation

* **Observer name**: Your full name as the person conducting the observation.
	+ Type: text
	+ Required: True
* **Observer role**: Your position or relationship to the individual being observed.
	+ Type: text
	+ Required: True
* **Date of observation**: Date the behavior was observed.
	+ Type: date
	+ Required: True
* **Time of observation**: Time the behavior occurred.
	+ Type: time
	+ Required: True
* **Subject name**: Full name of the individual being observed.
	+ Type: text
	+ Required: True
* **Subject age**: Age of the individual being observed.
	+ Type: integer
	+ Required: True
* **Setting/environment**: Where the behavior occurred.
	+ Type: select_one
	+ Required: True
* **Antecedent trigger**: What preceded the behavior.
	+ Type: text
	+ Required: False
* **Activity occurring before behavior**: What the individual was doing before the behavior.
	+ Type: text
	+ Required: False
* **Specific behavior observed**: Clear, objective description of what occurred.
	+ Type: text
	+ Required: True
* **Duration of behavior (minutes)**: How long the behavior lasted (if known).
	+ Type: decimal
	+ Required: False
* **Intensity/Severity level**: Rate the intensity on a scale.
	+ Type: select_one
	+ Required: True
* **Frequency during observation period**: How many times the behavior occurred.
	+ Type: integer
	+ Required: False
* **Immediate response/consequence**: How others reacted.
	+ Type: text
	+ Required: False
* **Effect on subject after behavior**: What happened to the subject.
	+ Type: select_one
	+ Required: False
* **Environmental factors**: Lighting, noise, crowd level, etc.
	+ Type: text
	+ Required: False
* **Intervention strategies used**: What was tried to address the behavior.
	+ Type: text
	+ Required: False
* **Additional observations or notes**: Any other relevant information.
	+ Type: text
	+ Required: False

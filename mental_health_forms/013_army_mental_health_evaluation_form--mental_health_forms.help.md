<thinking>
The form is designed to assess a soldier's mental health and well-being, specifically focusing on symptoms of anxiety, depression, and PTSD, as well as their overall risk level for duty. The form is intended to be used by military personnel or mental health professionals to quickly and efficiently evaluate a soldier's mental health status.
</thinking>

# Army Mental Health Evaluation Form - Help Guide
## Purpose
The Army Mental Health Evaluation Form is designed to provide a quick and efficient way to assess a soldier's mental health and well-being. The form is divided into several sections, each focusing on different aspects of mental health, such as symptoms, risk level, and recommended treatment.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the soldier's full name, service number, rank, and unit assignment in the corresponding fields.
2. Indicate the date of the evaluation in the designated box.
3. Enter the evaluator's name and their relevant credentials.
4. For the symptom assessment, select the relevant options that best describe the soldier's current mental health status.
5. Answer the questions regarding substance use or dependency concerns.
6. Select the overall risk level for duty based on the evaluation.
7. Provide any recommended treatment or interventions for the soldier.
8. Specify the follow-up evaluation timeline.

## Field-by-Field Explanation
### Soldier Full Name
* **Soldier Full Name** (`soldier_name`, text, required): Enter the soldier's full name as it appears on their personnel record.

### Service Number
* **Service Number** (`service_number`, text, required): Enter the soldier's service number as it appears on their personnel record.

### Rank
* **Rank** (`rank`, text, required): Enter the soldier's current rank as per their personnel record.

### Unit Assignment
* **Unit Assignment** (`unit`, text, required): Enter the soldier's current unit assignment as per their personnel record.

### Date of Evaluation
* **Date of Evaluation** (`evaluation_date`, date, required): Enter the date of the evaluation in MM/DD/YYYY format.

### Evaluator Name and Credentials
* **Evaluator Name and Credentials** (`evaluator_name`, text, required): Enter the evaluator's name and relevant credentials.

### Mood and Affect
* **Mood and Affect** (`mood_affect`, select_one, required): Select the option that best describes the soldier's current mood and affect.
	+ Normal and stable
	+ Mildly elevated or depressed
	+ Moderately elevated or depressed
	+ Severely elevated or depressed

### Anxiety Level
* **Anxiety Level** (`anxiety_level`, select_one, required): Select the option that best describes the soldier's current anxiety level.
	+ None
	+ Mild
	+ Moderate
	+ Severe

### Sleep Patterns
* **Sleep Patterns** (`sleep_patterns`, select_one, required): Select the option that best describes the soldier's sleep patterns.
	+ Normal
	+ Slightly disrupted
	+ Moderately disrupted
	+ Severely disrupted

### Concentration and Focus
* **Concentration and Focus** (`concentration`, select_one, required): Select the option that best describes the soldier's current concentration and focus.
	+ Good
	+ Fair
	+ Poor
	+ Very poor

### Intrusive or Unwanted Thoughts
* **Intrusive or Unwanted Thoughts** (`intrusive_thoughts`, select_one, required): Select the option that best describes the soldier's current intrusive or unwanted thoughts.
	+ Not present
	+ Occasional
	+ Frequent
	+ Constant

### Suicidal Ideation or Self-Harm Thoughts
* **Suicidal Ideation or Self-Harm Thoughts** (`suicidal_ideation`, select_one, required): Select the option that best describes the soldier's current suicidal ideation or self-harm thoughts.
	+ None
	+ Mild
	+ Moderate
	+ Severe

### Combat Exposure or Traumatic Events
* **Combat Exposure or Traumatic Events** (`combat_exposure`, select_one, required): Select the option that best describes the soldier's exposure to combat or traumatic events.
	+ No exposure
	+ Minor exposure
	+ Moderate exposure
	+ Severe exposure

### PTSD Symptoms
* **PTSD Symptoms** (`ptsd_symptoms`, select_multiple, required): Select all the options that apply to the soldier's current PTSD symptoms.
	+ Flashbacks or intrusive memories
	+ Hypervigilance
	+ Avoidance behaviors
	+ Emotional numbing
	+ Exaggerated startle response

### Substance Use or Dependency Concern
* **Substance Use or Dependency Concern** (`substance_use_concern`, select_one, required): Select the option that best describes the soldier's current substance use or dependency concern.
	+ None
	+ Mild
	+ Moderate
	+ Severe

### Substances of Concern
* **Substances of Concern** (`substances_used`, select_multiple, required): Select all the options that apply to the soldier's current substance use or dependency.

### Overall Risk Level for Duty
* **Overall Risk Level for Duty** (`overall_risk_level`, select_one, required): Select the option that best describes the soldier's overall risk level for duty.
	+ Low risk - fit for duty
	+ Moderate risk - requires monitoring
	+ High risk - recommend restricted duty
	+ Critical risk - recommend immediate intervention

### Recommended Treatment or Interventions
* **Recommended Treatment or Interventions** (`recommended_treatment`, text, required): Provide any recommended treatment or interventions for the soldier.

### Follow-up Evaluation Timeline
* **Follow-up Evaluation Timeline** (`follow_up_timeline`, select_one, required): Select the option that best describes the follow-up evaluation timeline.
	+ Immediate
	+ Within 1 week
	+ Within 1 month
	+ As needed

## Tips

* Make sure to fill in the form thoroughly and accurately, as any missing or incorrect information may affect the overall assessment.
* If you are unsure about any questions or symptoms, please consult with the soldier or medical professional before proceeding.
* The form is intended for use by military personnel or mental health professionals, who should use their professional judgment when evaluating the soldier's mental health status.
* Please provide any additional comments or recommendations in the "Recommended Treatment or Interventions" field, if necessary.

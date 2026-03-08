# Contraceptive Use Assessment - Help Guide

## Purpose
This form is used to collect data about a patient's contraceptive use and preferences to inform healthcare decisions.

## How To Complete This Form
To complete this form, simply fill out each page with the required information. For select_one and select_multiple fields, choose the option that best answers the question. For date fields, use the MM/DD/YYYY format. Required fields are marked with an asterisk (\*).

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, \*): Enter your full name.
* **Date of Birth** (`date_of_birth`, date, \*): Enter your date of birth in MM/DD/YYYY format.
* **Assessment Date** (`assessment_date`, date, \*): Enter the date of this assessment.
* **Age** (`age`, number, \*): Enter your current age.
* **Relationship Status** (`relationship_status`, select_one, \*): Choose your current relationship status:
	+ Single
	+ In a relationship
	+ Married
	+ Divorced
	+ Widowed
* **Sexually Active** (`sexually_active`, select_one, \*): Choose how you answer to this question:
	+ 'True'
	+ 'False'
	+ Prefer not to answer
* **Pregnancy Intention** (`pregnancy_intention`, select_one, \*): Choose your intention:
	+ Yes, trying to conceive
	+ No, want to prevent pregnancy
	+ Unsure
	+ Not applicable
* **Current Contraceptive Use** (`current_contraceptive_use`, select_one, \*): Choose how you currently use contraception:
	+ 'True'
	+ 'False'
	+ Not applicable
* **Current Method** (`current_method`, select_one, optional): Choose your current method:
	+ Birth control pills
	+ IUD
	+ Implant
	+ Injection
	+ Patch
	+ Vaginal ring
	+ Condoms
	+ Natural family planning
	+ Withdrawal
	+ Other
* **Method Satisfaction** (`method_satisfaction`, select_one, optional): Choose how satisfied you are with your current method:
	+ Very satisfied
	+ Somewhat satisfied
	+ Neutral
	+ Somewhat dissatisfied
	+ Very dissatisfied
* **Past Contraceptive Methods** (`past_contraceptive_methods`, select_multiple, \*): Choose any past methods you have used:
	+ Birth control pills
	+ IUD
	+ Implant
	+ Injection
	+ Patch
	+ Vaginal ring
	+ Condoms
	+ Diaphragm
	+ Emergency contraception
	+ None
* **Reasons for Discontinuation** (`reasons_for_discontinuation`, select_multiple, optional): Choose any reasons you stopped using previous methods:
	+ Side effects
	+ Inconvenient
	+ Cost
	+ Health concerns
	+ Want to conceive
	+ Partner preference
	+ Not effective
	+ Other
* **Side Effects Experienced** (`side_effects_experienced`, text, optional): Describe any side effects you have experienced.
* **Medical History** (`medical_history`, select_multiple, \*): Choose any relevant health conditions:
	+ High blood pressure
	+ Blood clots
	+ Heart disease
	+ Stroke
	+ Liver disease
	+ Breast cancer
	+ Migraines with aura
	+ Diabetes
	+ None
* **Smoking Status** (`smoking_status`, select_one, \*): Choose your smoking status:
	+ Non-smoker
	+ Former smoker
	+ Current smoker
* **Counseling Interest** (`counseling_interest`, select_one, \*): Choose your interest in counseling:
	+ Yes, interested
	+ Maybe
	+ No, thank you
* **Preferred Method Characteristics** (`preferred_method_characteristics`, select_multiple, \*): Choose any characteristics you prefer in a method:
	+ Long-acting
	+ Reversible
	+ Hormone-free
	+ Low maintenance
	+ Private
	+ Affordable
	+ Easily accessible
	+ Menstrual regulation
* **Barriers to Access** (`barriers_to_access`, select_multiple, optional): Choose any barriers to access:
	+ Cost
	+ Lack of insurance
	+ Transportation
	+ Time constraints
	+ Privacy concerns
	+ Partner opposition
	+ Religious beliefs
	+ None
* **Knowledge Level** (`knowledge_level`, select_one, \*): Choose how informed you feel:
	+ Very informed
	+ Somewhat informed
	+ Neutral
	+ Not very informed
	+ Not informed at all
* **Additional Questions** (`additional_questions`, text, optional): Ask any questions you have for the provider.

## Tips

* Please answer all required questions to ensure accurate data collection.
* If you have any questions or concerns, do not hesitate to ask your healthcare provider.

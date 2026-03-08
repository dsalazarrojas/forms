# Antibiotic Use Survey - Help Guide
## Purpose
This survey is designed to gather information from physicians about their antibiotic prescribing practices, with the goal of identifying areas where they may be struggling with antibiotic stewardship.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant answer for each question based on your practice and experience.
2. Be honest and accurate in your responses, as they will help us better understand antibiotic use in healthcare.
3. Take a few minutes to review your answers before submitting the form.

## Field-by-Field Explanation

* **Physician Name** (`physician_name`, `text`, required/optional): Enter your full name as a physician.
* **NPI Number** (`physician_npi`, `text`, required/optional): Enter your National Provider Identifier (NPI) number.
* **Medical Specialty** (`specialty`, `select_one`, required/optional): Select your primary medical specialty:
	+ Internal medicine
	+ Family medicine
	+ Pediatrics
	+ Infectious disease
	+ Emergency medicine
	+ Critical care
	+ Surgery
	+ Hospitalist
	+ Other
* **Practice Setting** (`practice_setting`, `select_one`, required/optional): Select where you practice:
	+ Academic medical center
	+ Community hospital
	+ Private practice
	+ Outpatient clinic
	+ Urgent care
	+ Long-term care facility
	+ Government facility
* **Years in Practice** (`years_in_practice`, `select_one`, required/optional): Select how long you have been practicing:
	+ Less than 5 years
	+ 5 to 10 years
	+ 10 to 20 years
	+ More than 20 years
* **Geographic Region** (`geographic_region`, `select_one`, required/optional): Select your practice location:
	+ Northeast
	+ Southeast
	+ Midwest
	+ Southwest
	+ West
	+ International
* **Primary Patient Population** (`patient_population`, `select_one`, required/optional): Select who you primarily treat:
	+ Adults
	+ Pediatrics
	+ Geriatric
	+ Mixed population
	+ Immunocompromised
	+ Surgical patients
* **Antibiotic Prescribing Frequency** (`antibiotic_prescribing_frequency`, `select_one`, required/optional): Select how often you prescribe antibiotics:
	+ Multiple times daily
	+ Once daily
	+ Several times weekly
	+ Weekly
	+ Rarely
* **Common Infections Treated** (`common_infections_treated`, `select_multiple`, required/optional): Select all the types of infections you commonly treat:
	+ Respiratory infections
	+ Urinary tract infections
	+ Skin and soft tissue infections
	+ Gastrointestinal infections
	+ Sexually transmitted infections
	+ Sepsis
	+ Other (please specify)
* **Most Frequently Prescribed Antibiotic** (`most_prescribed_antibiotic`, `select_one`, required/optional): Select which antibiotic you prescribe most often:
	+ Amoxicillin
	+ Azithromycin
	+ Ciprofloxacin
	+ Doxycycline
	+ Cephalexin
	+ Levofloxacin
	+ Clindamycin
	+ Other (please specify)
* **Prescribing Guidelines** (`prescribing_guidelines`, `select_multiple`, required/optional): Select the guidelines that guide your prescribing:
	+ IDSA guidelines
	+ CDC guidelines
	+ Hospital protocols
	+ Local antibiogram
	+ Personal experience
	+ Specialist consultation
	+ UpToDate or similar
	+ Other resources
* **Culture Testing Before Prescribing** (`culture_testing`, `select_one`, required/optional): Select how often you obtain cultures before prescribing:
	+ Always when possible
	+ Often
	+ Sometimes
	+ Rarely
	+ Never
* **Narrow vs Broad Spectrum Preference** (`narrow_vs_broad_spectrum`, `select_one`, required/optional): Select your preference for narrow vs broad spectrum antibiotics:
	+ Always start narrow
	+ Usually start narrow
	+ Depends on severity
	+ Usually start broad
	+ Always start broad
* **Patient Pressure for Antibiotics** (`patient_pressure`, `select_one`, required/optional): Select how often patients request antibiotics:
	+ Very often
	+ Often
	+ Sometimes
	+ Rarely
	+ Never
* **Resistance to Patient Pressure** (`pressure_resistance`, `select_one`, required/optional): Select how you respond to patient pressure:
	+ Always resist if not indicated
	+ Usually resist
	+ Sometimes prescribe to satisfy
	+ Often prescribe
	+ Always prescribe if requested
* **Antibiotic Stewardship Program** (`stewardship_program`, `select_one`, required/optional): Select if your facility has a stewardship program:
	+ Yes, active and comprehensive
	+ Yes, basic program
	+ No, but planning one
	+ 'False'
	+ Not applicable
* **Participation in Stewardship Activities** (`stewardship_participation`, `select_one`, required/optional): Select your level of participation in stewardship activities:
	+ Very active
	+ Active
	+ Somewhat active
	+ Minimal participation
	+ No participation
* **Concern About Antibiotic Resistance** (`resistance_concern`, `select_one`, required/optional): Select how concerned you are about antibiotic resistance:
	+ Extremely concerned
	+ Very concerned
	+ Moderately concerned
	+ Slightly concerned
	+ Not concerned
* **Impact of Resistance on Practice** (`resistance_impact`, `select_one`, required/optional): Select how antibiotic resistance has affected your practice:
	+ Significantly changed practice
	+ Somewhat changed practice
	+ Slightly changed practice
	+ No change
* **Adverse Events from Antibiotics** (`adverse_events`, `select_one`, required/optional): Select how often you have encountered adverse events from antibiotics:
	+ Frequently
	+ Occasionally
	+ Rarely
	+ Never
* **C. difficile Cases in Past Year** (`c_diff_experience`, `number`, optional/optional): Enter the approximate number of C. difficile cases you have encountered in the past year.
* **Educational Needs** (`education_needs`, `select_multiple`, required/optional): Select the topics for further education:
	+ Latest guidelines
	+ Emerging resistance patterns
	+ New antibiotics
	+ Diagnostic stewardship
	+ Duration optimization
	+ Pediatric dosing
	+ Renal adjustments
	+ Drug interactions
* **Barriers to Antibiotic Stewardship** (`barriers_to_stewardship`, `select_multiple`, required/optional): Select the barriers to antibiotic stewardship:
	+ Time constraints
	+ Patient expectations
	+ Diagnostic uncertainty
	+ Limited resources
	+ Lack of guidelines
	+ Resistance from colleagues
	+ No barriers
	+ Other (please specify)
* **Access to Rapid Diagnostics** (`rapid_diagnostics`, `select_one`, required/optional): Select if you have access to rapid diagnostics:
	+ Always available
	+ Usually available
	+ Sometimes available
	+ Rarely available
	+ Never available
* **IV to Oral Conversion Practice** (`iv_to_oral_conversion`, `select_one`, required/optional): Select how you approach IV to oral conversion:
	+ Always convert when possible
	+ Usually convert
	+ Sometimes convert
	+ Rarely convert
	+ Prefer IV therapy
* **Antibiotic Duration Practice** (`duration_practice`, `select_one`, required/optional): Select how you determine antibiotic duration:
	+ Follow guidelines strictly
	+ Usually follow guidelines
	+ Based on clinical judgment
	+ Patient preference
	+ Standard durations always
* **Additional Comments** (`additional_comments`, `text`, optional/optional): Enter any additional comments or insights.
* **Survey Completion Date** (`survey_date`, `date`, required/optional): Enter the date of submission.

# Chiropractic Treatment Intake Form - Help Guide

## Purpose

The Chiropractic Treatment Intake Form is designed to gather important information about a patient's medical history, symptoms, and treatment goals. This form helps the chiropractor understand the patient's condition and provide effective care. Please fill out the form accurately and completely to ensure the best possible treatment outcome.

## How To Complete This Form

1. Review the form carefully to understand what information is required.
2. Fill out each field with your accurate and complete information.
3. For select options (e.g., "Gender", "Symptoms", "Medical Conditions"), select all that apply.
4. For date fields, use the MM/DD/YYYY format (e.g., 01/01/2022).
5. For text fields, provide a brief description or answer in the space provided.

## Field-by-Field Explanation

* **First Name** (`name: patient_first_name`, type: text, required): Enter your first name.
* **Last Name** (`name: patient_last_name`, type: text, required): Enter your last name.
* **Date of Birth** (`name: date_of_birth`, type: date, required): Enter your date of birth in MM/DD/YYYY format.
* **Age** (`name: age`, type: number, required): Enter your age in years.
* **Gender** (`name: gender`, type: select_one, required): Select one of the following:
	+ Male
	+ Female
	+ Non-binary
	+ Prefer not to say
	+ Other
* **Phone Number** (`name: phone`, type: text, required): Enter your phone number.
* **Email Address** (`name: email`, type: email, optional): Enter your email address, if applicable.
* **Address** (`name: address`, type: text, required): Enter your street address, city, state, and zip code.
* **Emergency Contact Name and Phone** (`name: emergency_contact`, type: text, required): Enter the name and phone number of your emergency contact.
* **Reason for Treatment** (`name: treatment_reason`, type: note, optional): Provide a brief description of why you are seeking chiropractic care.
* **Primary Reason for Seeking Treatment** (`name: primary_reason`, type: text, required): Describe your main reason for seeking treatment.
* **Current Symptoms** (`name: symptoms`, type: select_multiple, required): Select all symptoms that apply:
	+ Back pain
	+ Neck pain
	+ Headaches
	+ Joint pain
	+ Muscle pain
	+ Numbness or tingling
	+ Stiffness
	+ Weakness
	+ Limited mobility
	+ Sciatica
	+ Other
* **Symptom Duration** (`name: symptom_duration`, type: select_one, required): Select one of the following:
	+ Less than 1 week
	+ 1-4 weeks
	+ 1-3 months
	+ 3-6 months
	+ 6 months to 1 year
	+ More than 1 year
* **Current Pain Severity** (`name: pain_severity`, type: number, required): Rate your current pain severity on a scale of 1-10.
* **What Makes Symptoms Worse** (`name: what_makes_worse`, type: text, optional): Describe what makes your symptoms worse.
* **What Makes Symptoms Better** (`name: what_makes_better`, type: text, optional): Describe what makes your symptoms better.
* **Previous Treatments** (`name: previous_treatments`, type: text, optional): List any previous treatments or therapies you have tried.
* **Health History** (`name: health_history`, type: note, optional): Provide a brief description of your medical background.
* **Current Medications** (`name: current_medications`, type: text, optional): List all current medications.
* **Allergies** (`name: allergies`, type: text, optional): List any allergies or sensitivities.
* **Medical Conditions** (`name: medical_conditions`, type: select_multiple, required): Select all medical conditions that apply:
	+ High blood pressure
	+ Heart disease
	+ Diabetes
	+ Arthritis
	+ Osteoporosis
	+ Cancer
	+ Stroke
	+ Blood clotting disorder
	+ Autoimmune disease
	+ Anxiety or depression
	+ Chronic pain
	+ None
* **Previous Surgeries** (`name: previous_surgeries`, type: text, optional): List any previous surgeries with dates.
* **Recent Hospitalizations** (`name: hospitalizations`, type: text, optional): List any recent hospitalizations in the past 5 years.
* **Lifestyle Factors** (`name: lifestyle_factors`, type: note, optional): Describe your daily habits and lifestyle factors.
* **Occupation** (`name: occupation`, type: text, required): Enter your current occupation.
* **Is Your Job Physically Demanding?** (`name: physical_demands`, type: select_one, required): Select one of the following:
	+ Very demanding
	+ Moderately demanding
	+ Light activity
	+ Sedentary
	+ Not working
* **Exercise Frequency** (`name: exercise_frequency`, type: select_one, required): Select one of the following:
	+ Daily
	+ 3-5 times per week
	+ 1-2 times per week
	+ Rarely
	+ Never
* **Sleep Quality** (`name: sleep_quality`, type: select_one, required): Select one of the following:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Very poor
* **Current Stress Level** (`name: stress_level`, type: select_one, required): Select one of the following:
	+ Very low
	+ Low
	+ Moderate
	+ High
	+ Very high
* **Do You Use Tobacco?** (`name: tobacco_use`, type: select_one, required): Select one of the following:
	+ Never
	+ Former user
	+ Current user
* **Alcohol Consumption** (`name: alcohol_use`, type: select_one, required): Select one of the following:
	+ None
	+ Occasional
	+ Moderate
	+ Regular
* **Chiropractic History** (`name: chiropractic_history`, type: note, optional): Provide a brief description of your past experience with chiropractic care.
* **Have You Seen a Chiropractor Before?** (`name: seen_chiro_before`, type: select_one, required): Select one of the following:
	+ Yes, regularly
	+ Yes, a few times
	+ Yes, once
	+ No, never
* **Previous Chiropractic Experience** (`name: previous_experience`, type: select_one, optional): Select one of the following:
	+ Very positive
	+ Positive
	+ Neutral
	+ Negative
	+ Very negative
	+ Not applicable
* **Other Healthcare** (`name: other_care`, type: note, optional): Provide a brief description of your current healthcare treatment.
* **Seeing Another Healthcare Provider** (`name: seeing_other_provider`, type: select_one, required): Select one of the following:
	+ True
	+ False
* **Provider Details** (`name: provider_details`, type: text, optional): Enter the name and type of your current healthcare provider.
* **Treatment Goals** (`name: treatment_goals`, type: note, optional): Describe your treatment goals and expectations.
* **What is Your Primary Treatment Goal?** (`name: primary_goal`, type: text, required): Enter your primary treatment goal.
* **Consent and Agreement** (`name: consent_agreement`, type: note, optional): Acknowledge your understanding of our consent and agreement forms.
* **I Certify That the Information Provided is Accurate** (`name: information_accurate`, type: select_one, required): Select one of the following:
	+ Yes, I certify
	+ False
* **I Consent to Chiropractic Examination and Treatment** (`name: consent_examination`, type: select_one, required): Select one of the following:
	+ Yes, I consent
	+ No, I do not consent
* **Patient Signature** (`name: patient_signature`, type: text, required): Enter your digital signature.
* **Date** (`name: signature_date`, type: date, required): Enter the date in MM/DD/YYYY format.

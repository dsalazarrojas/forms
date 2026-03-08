# Consciousness And Sleep Assessment - Help Guide

## Purpose
This form is designed to assess a patient's consciousness and sleep patterns. It helps clinicians evaluate a patient's overall sleep quality, patterns, and alertness levels, as well as any medical conditions or medications that may be affecting their sleep.

## How To Complete This Form

To complete this form accurately and efficiently, follow these steps:

1. Answer all required questions thoroughly and truthfully.
2. Select the correct options for each question, taking care to select all applicable choices for multiple-choice questions.
3. Enter numerical values for questions that require numbers, such as average hours of sleep and daily caffeine consumption.
4. Provide as much detail as possible in free-text fields, such as "List any current medications affecting sleep or consciousness."

## Field-by-Field Explanation

### Patient Information
* **Full Name** (`patient_full_name`, text, required): Please enter your full name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format YYYY-MM-DD.
* **Gender** (`gender`, select_one, required): Select your gender: Male, Female, Other, or Prefer not to say.

### Sleep Habits and Patterns
* **Average hours of sleep per night** (`avg_hours_sleep`, number, required): Enter the average number of hours you sleep each night.
* **How long does it typically take you to fall asleep?** (`time_to_fall_asleep`, number, required): Enter the time in minutes it typically takes you to fall asleep.
* **Overall sleep quality in the last month** (`sleep_quality_rating`, select_one, required): Rate your sleep quality as Very Good, Fairly Good, Fairly Bad, or Very Bad.
* **Do you experience any of the following?** (`sleep_disruptions`, select_multiple, required): Select all that apply: Difficulty falling asleep, Waking up in the middle of the night, Snoring, Restless legs, Vivid nightmares.
* **Select all that apply, as they are relevant to your sleep habits.**

### Daytime Alertness
* **How likely are you to doze off during the day?** (`epworth_sleepiness_scale`, select_one, required): Rate your likelihood on the scale: 0 is never, 1 is slight chance, 2 is moderate chance, 3 is high chance.
* **How alert do you feel within 30 minutes of waking?** (`morning_alertness_rating`, select_one, required): Rate your alertness level: Fully alert and refreshed, Somewhat alert, Still groggy, Extremely tired.
* **Select the option that best describes your typical experience.**

### Medical Context
* **List any current medications affecting sleep or consciousness** (`current_medications`, text, required): Enter any medications that may be affecting your sleep or consciousness, or type "None" if not applicable.
* **Daily caffeine consumption** (`caffeine_intake`, number, optional): If applicable, enter your daily caffeine consumption, e.g., cups of coffee or tea.

### Consent
* **I consent to this data being used for clinical evaluation** (`data_usage_consent`, select_one, required): Select "I consent" to authorize the use of this data for clinical evaluation.
* **Date of Assessment** (`submission_date`, date, required): Enter the date of this assessment.

Please complete each section thoroughly and accurately to provide the best possible results.

# Patient Feedback Form - Help Guide

## Purpose

The Patient Feedback Form is designed to collect your feedback about your experience with our clinic. Your responses will help us identify areas of improvement and ensure that we continue to provide the best possible service to our patients.

## How To Complete This Form

1. Please answer all the questions that apply to your visit.
2. For questions with options, select the answer that best matches your experience.
3. You can add any additional comments or feedback in the "Additional Comments" section.

## Field-by-Field Explanation

* **What was your overall experience with the clinic?** (`patient_feedback_form`, `text`, required: false): Please describe your overall experience with our clinic in a few sentences.
* **How would you rate the interaction with our staff?** (`staff_interaction`, `number`, required: false): Rate your experience with our staff, with 1 being the lowest and 5 being the highest.
* **How would you rate the cleanliness of our clinic?** (`clinic_environment`, `select_one`, required: false): Select one of the three options to rate the cleanliness of our clinic:
	+ Cleanliness of the clinic is good
	+ Cleanliness of the clinic is average
	+ Cleanliness of the clinic is poor
* **How would you rate your relationship with the clinic staff?** (`patient_clinic_relationship`, `select_multiple`, required: false): Select all that apply to rate your relationship with our staff:
	+ Strong
	+ Average
	+ Poor
* **How would you rate your overall satisfaction with the clinic?** (`overall_satisfaction`, `number`, required: false): Rate your overall satisfaction with the clinic, with 1 being the lowest and 5 being the highest.
* **Do you have any additional comments about your visit?** (`additional_comments`, `note`, required: false): This is your chance to add any comments or feedback about your visit.

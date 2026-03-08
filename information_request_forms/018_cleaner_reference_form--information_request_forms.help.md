# Cleaner Reference Form - Help Guide

## Purpose
The Cleaner Reference Form is a tool used to gather feedback about a candidate's previous work experience. It is intended to help evaluate a candidate's performance, reliability, and overall fit for a position. Please complete this form to provide honest and accurate feedback about the candidate's work history.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by providing the reference header with your name and the name of the candidate you are evaluating.
2. Enter the candidate's name in the "Candidate Name" field.
3. Select your relationship to the candidate (e.g., former employer, supervisor, client, etc.).
4. Enter the duration of the candidate's employment with you.
5. Select the date of the candidate's last service.
6. Evaluate the candidate's performance in the "Quality and Thoroughness of Cleaning" section.
7. Assess the candidate's reliability and punctuality in the "Reliability and Punctuality" section.
8. Rate the candidate's trustworthiness and integrity in the "Trustworthiness and Integrity" section.
9. Evaluate the candidate's communication and professionalism in the "Communication and Professionalism" section.
10. Indicate whether you would hire this person again.
11. Enter any additional comments about the candidate's work.
12. Verify that the information provided is accurate to the best of your knowledge.
13. Enter your contact phone number for verification.
14. Enter your email address for verification.

## Field-by-Field Explanation
* **-- Cleaner Reference Request --** (`reference_header`, note, required: false): This is the header for the reference section.
* **Candidate Name** (`candidate_name`, text, required: true): Enter the name of the person being referenced.
* **Your Full Name** (`referee_name`, text, required: true): Enter your full name as the person providing the reference.
* **Your Company or Household** (`referee_organization`, text, required: false): This is your company or household name.
* **Relationship to Candidate** (`relationship_to_candidate`, select_one, required: true): Select your relationship to the candidate (e.g., former employer, supervisor, client, etc.).
* **Duration of Service** (`employment_duration`, text, required: true): Enter the length of time the candidate worked for you.
* **Date of last service** (`employment_end_date`, date, required: false): Enter the date of the candidate's last service.
* **-- Performance Evaluation --** (`performance_header`, note, required: false): This is the header for the performance evaluation section.
* **Quality and Thoroughness of Cleaning** (`quality_of_cleaning`, select_one, required: true): Select the level of quality and thoroughness of the candidate's cleaning work.
* **Reliability and Punctuality** (`reliability_rating`, select_one, required: true): Assess the candidate's reliability and punctuality.
* **Trustworthiness and Integrity** (`trustworthiness_rating`, select_one, required: true): Rate the candidate's trustworthiness and integrity.
* **Communication and Professionalism** (`communication_skills`, select_one, required: true): Evaluate the candidate's communication and professionalism.
* **Would you hire this person again?** (`rehire_status`, select_one, required: true): Indicate whether you would hire this person again.
* **Any additional comments regarding their work?** (`additional_comments`, text, required: false): Enter any additional comments about the candidate's work.
* **I verify that this information is accurate to the best of my knowledge** (`verification_signature`, select_one, required: true): Verify that the information provided is accurate.
* **Your Contact Phone (for verification)** (`referee_phone`, text, required: true): Enter your contact phone number for verification.
* **Your Contact Email** (`referee_email`, email, required: true): Enter your email address for verification.

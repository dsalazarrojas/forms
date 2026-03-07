<thinking>
This guide will explain the purpose of the Accounting Ethics Survey form, how to complete it, and each field in detail to ensure end-users understand its importance and requirements.

</thinking>

# Accounting Ethics Survey - Help Guide
## Purpose

The Accounting Ethics Survey is designed to gather information on your experiences, perceptions, and suggestions regarding professional ethics in the accounting field. Your responses will help improve the company's policies and procedures to maintain a strong ethical culture. Please answer the questions honestly, and all responses will be kept confidential.

## How To Complete This Form

1. Review each page carefully and answer the questions based on your experiences and perceptions.
2. For questions with options, select the best answer that reflects your situation.
3. If you have any suggestions for improving ethics in the accounting field, feel free to provide them in the "Suggestions for Improving Ethical Culture" field.
4. Once you have completed all the questions, review your responses carefully before submitting.

## Field-by-Field Explanation

* **-- Professional Ethics in Accounting Survey --** (`survey_header`, `note`, required: false): This is the title of the survey, explaining the purpose and importance of your responses.
* **Job Title** (`job_title`, text, required: true): Enter your job title in the accounting field, e.g., Senior Auditor, Junior Accountant.
* **Years of Experience** (`years_of_experience`, number, required: true): Enter the total number of years you have worked in the accounting field.
* **How often do you encounter ethical dilemmas in your work?** (`frequency_of_ethical_dilemmas`, select_one, required: true): Select the option that best describes how often you encounter ethical dilemmas:
	+ Never
	+ Rarely
	+ Occasionally
	+ Frequently
	+ Very Frequently
* **Common Ethical Issues Encountered** (`common_ethical_issues`, select_multiple, required: false): Select all the issues that you have observed or experienced:
	+ Revenue Recognition
	+ Expense Manipulation
	+ Tax Evasion
	+ Disclosure Integrity
	+ Conflict of Interest
* **How much pressure do you feel to compromise ethical standards?** (`pressure_to_compromise_ethics`, select_one, required: true): Select the option that best describes the amount of pressure you feel:
	+ Not at all
	+ Slightly
	+ Moderately
	+ Significantly
* **Are you aware of your firm's whistleblower policy?** (`awareness_of_whistleblower_policy`, select_one, required: true): Select the option that best describes your awareness:
	+ True
	+ False
	+ Not Sure
* **Rate the effectiveness of recent ethics training** (`effectiveness_of_ethics_training`, select_one, required: true): Rate the effectiveness of the recent ethics training:
	+ Poor
	+ Fair
	+ Good
	+ Excellent
	+ N/A (if none taken)
* **Suggestions for Improving Ethical Culture** (`suggestions_for_improving_ethical_culture`, text, required: false): Provide any suggestions you have for improving the ethical culture in your firm.
* **-- Thank you for your feedback --** (`survey_footer`, note, required: false): This is a thank you message after completing the survey.

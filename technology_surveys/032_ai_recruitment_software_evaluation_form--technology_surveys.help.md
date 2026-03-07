<thinking>
We should create a user-facing help guide for the AI Recruitment Software Evaluation Form to ensure that end-users understand the form's purpose, how to complete it, and what each field means. This guide will provide a clear and concise explanation of each field, helping users navigate the form effectively. Before proceeding, let's confirm that the form's purpose is to evaluate the AI Recruitment Software's features, user experience, and overall performance. This form is intended to collect feedback from evaluators on various aspects of the software, including its core features, ease of integration, accuracy of candidate matching, privacy and compliance support, total cost estimate, and recommendation. We should review the form's YAML fields to create a comprehensive explanation of each field's purpose and functionality.</thinking>

# AI Recruitment Software Evaluation Form - Help Guide
## Purpose
This form is designed to collect feedback on the AI Recruitment Software's features, user experience, and overall performance. It will help us evaluate the software's core features, ease of integration, accuracy of candidate matching, and other relevant factors.

## How To Complete This Form

1. Please fill out the form completely, providing as much detail as possible.
2. For each field, provide a brief description or answer.
3. If you're unsure about a field, feel free to ask for clarification.

## Field-by-Field Explanation

* **Evaluator name** (`evaluator_name`, text, required): This is your name, and you will be the one completing this form.
* **Vendor name** (`vendor_name`, text, required): Please enter the name of the product or vendor being evaluated.
* **Core features evaluated** (`core_features`, select_multiple, required): Select all the features that you have evaluated. These include:
	+ Candidate screening
	+ Resume parsing
	+ Interview scheduling
	+ Bias mitigation tools
	+ Analytics and reporting
* **Ease of integration with existing systems** (`integration_ease`, number, required): Rate how easy or difficult it is to integrate the software with your existing systems. Please rate on a scale of 1 (lowest) to 5 (highest).
* **Accuracy of candidate matching** (`accuracy_of_matching`, number, required): Rate how accurate or inaccurate the software is in matching candidates to job openings. Please rate on a scale of 1 (lowest) to 5 (highest).
* **Privacy and compliance support** (`privacy_compliance`, select_multiple, optional): Select all the ways in which the software supports privacy and compliance. These include:
	+ GDPR
	+ CCPA
	+ Local data residency
	+ Data anonymization
* **Total cost estimate** (`total_cost_estimate`, number, optional): Please enter an estimated total cost for the software per year or month (in USD).
* **Recommendation** (`recommendation`, select_one, required): Please select one of the following options:
	+ Recommend
	+ Recommend with reservations
	+ Do not recommend
* **Additional evaluation notes** (`evaluation_notes`, text, optional): Enter any additional comments or notes about the software. This is an optional field, but please use it to provide any further insights or suggestions you may have.

# Financial Series Interest Survey - Help Guide

## Purpose
The Financial Series Interest Survey is designed to gather information about your interests in various financial workshops and topics. Your input will help us tailor our content and programming to better serve your needs.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select your interest in the following workshops:
	* Choose "Yes" if you are interested in the workshop, "No" otherwise.
2. Choose your interest in the following financial topics:
	* Select all the topics that apply to you.
3. Select your preferred format for workshops:
	* Choose the format that suits your needs.
4. If you are an educator, please indicate your years of experience:
	* If you are not an educator, please leave this field blank.
5. Enter the name of your organization:
	* Please ensure the name is accurate and complete.
6. Add any additional financial topics of interest:
	* Please provide any relevant information that may not be listed in the previous question.

## Field-by-Field Explanation

* **What type of workshop would you be interested in?**
	+ (`workshop_interest`, `select_one`, required): This question helps us gauge your interest in different types of workshops. Please choose "Yes" if you are interested in the workshop, and "No" otherwise.
* **Which of the following financial topics would you be interested in?**
	+ (`financial_topics`, `select_multiple`, required): This question is used to determine your level of interest in different financial topics. Please select all the topics that apply to you.
* **What format would you prefer?**
	+ (`format_interest`, `select_one`, required): This question helps us understand your preferred format for workshops. Please choose the format that suits your needs.
* **How many years of educator experience do you have?**
	+ (`educator_background`, `number`, optional): This question is intended for educators to provide their years of experience. If you are not an educator, please leave this field blank.
* **What organization are you from?**
	+ (`org_interest`, `text`, required): Please enter the name of the organization you are from accurately and completely.
* **Additional financial topics of interest.**
	+ (`additional_topics`, `text`, optional): This question allows you to provide any additional financial topics of interest not listed previously.

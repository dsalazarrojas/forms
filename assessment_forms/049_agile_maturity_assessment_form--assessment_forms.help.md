# Agile Maturity Assessment Form - Help Guide
## Purpose
This form is designed to assess the maturity level of an organization in terms of its adoption of Agile principles and practices.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill in your organization's name and the date of the assessment.
2.  Rate the level of leadership commitment to Agile principles and practices.
3.  Indicate the degree of team autonomy in decision-making processes.
4.  List the Agile practices currently adopted by your team (e.g., Scrum, Kanban, XP, Lean, DevOps).
5.  Describe the approach to using metrics and measurement (e.g., robust, basic, none).
6.  Indicate the level of continuous improvement culture within your organization (e.g., strong, moderate, weak).
7.  Select the overall maturity level of your organization.
8.  Provide any suggested next steps to advance maturity.

## Field-by-Field Explanation

* **Organization name** (`organization_name`, text, required): Enter your organization's legal or common name.
* **Assessment date** (`assessment_date`, date, required): Enter the date this assessment was completed.
* **Leadership commitment level** (`leadership_commitment`, select_one, required): Rate the level of executive support for Agile principles and practices. The options are:
	+ Strong: Leadership actively supports Agile principles and practices.
	+ Moderate: Leadership has some support, but there are still obstacles to overcome.
	+ Weak: Leadership has little to no support for Agile principles and practices.
	+ None: Leadership has no interest in Agile principles and practices.
* **Team autonomy** (`team_autonomy`, select_one, required): Indicate the degree of decision making by teams. The options are:
	+ High: Teams have a high degree of autonomy in decision-making processes.
	+ Medium: Teams have some autonomy, but with certain limitations.
	+ Low: Teams have little to no autonomy in decision-making processes.
* **Agile practices adopted** (`agile_practices_adopted`, select_multiple, required): List the Agile practices your team has adopted. Choose one or more from:
	+ Scrum
	+ Kanban
	+ XP
	+ Lean
	+ DevOps
* **Metrics and measurement** (`metrics_and_measurement`, select_one, required): Describe the approach to using metrics and measurement. Choose from:
	+ Robust: Regular use of outcome and flow metrics.
	+ Basic: Limited use of metrics, but some are used.
	+ Minimal: No use of metrics.
	+ None: No use of metrics.
* **Continuous improvement culture** (`continuous_improvement`, select_one, required): Indicate the level of continuous improvement culture within your organization. Choose from:
	+ Strong: Regular retrospectives and learning processes.
	+ Moderate: Some retrospectives and learning, but not regular.
	+ Weak: Little to no continuous improvement culture.
* **Overall maturity level** (`overall_maturity_level`, select_one, required): Select the assessed maturity band for your organization. Choose from:
	+ Level 1: Novice (just starting)
	+ Level 2: Intermediate (some practices adopted)
	+ Level 3: Advanced (most practices adopted)
	+ Level 4: Expert (all practices adopted)
	+ Level 5: Master (leading industry practices)
* **Recommendations** (`recommendations`, text, optional): Suggest any next steps to advance maturity.

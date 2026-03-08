The purpose of the security_breach_information_form is to collect information about a security breach, including its summary, description, date, impact, classification, and other relevant details. This form is intended to be used by security professionals to gather information and report on security incidents in a structured and consistent manner.

## security_breach_information_form - Help Guide

## Purpose
The security_breach_information_form is used to collect information about security breaches, ensuring that incidents are reported and documented consistently and accurately.

## How To Complete This Form

To complete this form, follow these steps:

1. Provide a brief summary of the incident in the **Incident Summary** field.
2. Describe the breach in detail in the **Breach Description** field.
3. If applicable, select a **Breach Date** for the incident.
4. Assess the impact of the breach in the **Incident Impact** field (e.g., using a numerical scale).
5. Identify the **Reporting Officer** responsible for the incident.
6. Specify the **Breach Location** where the incident occurred.
7. Classify the incident as **Incident Classification** (e.g., Type, Severity, Category).
8. Provide the email address for the **Reporting Officer** (if not already provided).

## Field-by-Field Explanation

* **Incident Summary**: A brief overview of the incident. Provide a short description of what happened. (~20-30 words)
	+ Type: text
	+ Required: Yes
* **Breach Description**: A detailed description of the breach, including the steps taken to investigate and respond. (~100-200 words)
	+ Type: text
	+ Required: Yes
* **Breach Date**: The date the breach occurred (leave blank if unknown). (~YYYY-MM-DD format)
	+ Type: date
	+ Required: No
* **Incident Impact**: The severity of the breach on the organization. Use a numerical scale (e.g., 1-5).
	+ Type: number
	+ Required: Yes
* **Reporting Officer**: The person in charge of reporting the incident.
	+ Type: text
	+ Required: Yes
* **Breach Location**: The location where the incident occurred.
	+ Type: text
	+ Required: Yes
* **Incident Classification**: Categorize the incident as Type, Severity, or Category.
	+ Type: select_one
	+ Required: Yes
* **Reporting Officer Email**: The email address of the Reporting Officer (leave blank if not already provided).
	+ Type: email
	+ Required: Yes

# COVID 19 Helpline Report - Help Guide

## Purpose
This form collects data from helpline operators about interactions with patients or callers related to COVID-19 concerns or complaints.

## How To Complete This Form
- Follow the pages and fields as indicated.
- Fill in each field according to the specific instructions for each page.
- If a field is required, ensure it's filled out correctly. If you're unsure, ask your supervisor for clarification.

## Field-by-Field Explanation

* **-- Helpline Report --** (`1`, `note`, required: `false`): This is a title page that indicates the form's purpose and scope.
* **Report Date** (`2`, `date`, required: `true`): Enter the date of the report.
* **Report Time** (`3`, `time`, required: `true`): Enter the time of the report.
* **Helpline Operator Name** (`4`, `text`, required: `true`): Enter your name as a helpline operator.
* **-- Patient Information --** (`5`, `note`, required: `false`): This section serves as a header for the patient's information.
* **Patient Full Name** (`6`, `text`, required: `true`): Enter the patient's full name.
* **Patient Phone Number** (`7`, `text`, required: `true`): Enter the patient's phone number.
* **Patient Email** (`8`, `email`, required: `false`): Enter the patient's email (if applicable).
* **Patient Age** (`9`, `number`, required: `true`): Enter the patient's age.
* **Contact Method** (`10`, `select_one`, required: `true`): Choose how the helpline contact occurred (Phone, Email, Video Call, or In-Person).
* **Call Duration (minutes)** (`11`, `number`, required: `true`): Enter the duration of the call in minutes.
* **-- Chief Complaint --** (`12`, `note`, required: `false`): This section serves as a header for the chief complaint.
* **Type of Complaint or Concern** (`13`, `select_one`, required: `true`): Choose the type of complaint or concern (Health Inquiry, Testing Information, Vaccination Concerns, Mental Health Support, Resource Assistance, or Other).
* **Describe complaint or concern** (`14`, `text`, required: `true`): Describe the complaint or concern in detail.
* **-- Symptoms Reported --** (`15`, `note`, required: `false`): This section serves as a header for the symptoms reported.
* **Symptoms reported** (`16`, `text`, required: `false`): List and describe the symptoms reported.
* **Symptom Severity** (`17`, `select_one`, required: `false`): Choose the severity of the symptoms (Mild, Moderate, Severe, or Critical).
* **-- Treatment or Recommendations --** (`18`, `note`, required: `false`): This section serves as a header for the treatment or recommendations.
* **Treatment or guidance provided** (`19`, `text`, required: `true`): Describe the treatment or guidance provided.
* **Was a referral made** (`20`, `select_one`, required: `true`): Choose if a referral was made ('True' or 'False').
* **Referred to** (`21`, `text`, required: `false`): If a referral was made, enter the destination (e.g., specialist's name or department).
* **Follow-up required** (`22`, `select_one`, required: `true`): Choose if follow-up is required ('True' or 'False').
* **Follow-up Date** (`23`, `date`, required: `false`): Enter the date for follow-up (if follow-up is required).
* **Resources or materials provided** (`24`, `text`, required: `false`): List and describe any resources or materials provided to the patient.

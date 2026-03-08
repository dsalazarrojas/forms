# Employee Referral Questionnaire Centennial - Help Guide

## Purpose

The Employee Referral Questionnaire Centennial is designed to help our company's employees refer their friends and colleagues to available job openings within the company. This form helps us understand the details of the job, the employee referring, and the quality of the referral.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the job location from the options provided (e.g., Denver, Boulder, Colorado Springs).
2. Choose the job type (e.g., Sales, Marketing, Finance, Human Resources, Operations).
3. Select the job level (e.g., Entry-Level, Senior, Manager, Director).
4. Write a brief description of the job.
5. Choose how the employee knew about the job (e.g., Employee Referral Program, Social Media, Employee's friend, Employee's family member, Employee's colleague).
6. Enter the name of the job seeker (the person you are referring).
7. Enter the job seeker's email address.
8. Provide any additional contact information for the job seeker.
9. Add any additional comments about the referral.
10. Rate the referral quality from 1-5.

## Field-by-Field Explanation

* **Location** (`location`, select_one, required): Select the location where the job is available (e.g., Denver, Boulder, Colorado Springs).
* **Job Title** (`job_title`, text, required): Enter a brief title of the job (e.g., Software Engineer, Marketing Manager, etc.).
* **Job Type** (`job_type`, select_one, required): Choose the type of job (e.g., Sales, Marketing, Finance, Human Resources, Operations).
* **Job Level** (`job_level`, select_multiple, required): Select the level of the job (e.g., Entry-Level, Senior, Manager, Director).
* **Job Description** (`job_description`, text, optional): Provide a brief description of the job.
* **Job Seeker Name** (`job_seeker_name`, text, optional): Enter the name of the job seeker (the person you are referring).
* **Job Seeker Email** (`job_seeker_email`, email, optional): Enter the job seeker's email address.
* **Job Seeker Contact Information** (`job_seeker_contact_information`, text, optional): Provide any additional contact information for the job seeker.
* **How Knew About Job** (`how_knew_job`, select_multiple, required): Choose how you knew about the job (e.g., Employee Referral Program, Social Media, Employee's friend, etc.).
* **Employee Referral Score** (`employee_referral_score`, number, required): Rate the referral quality from 1-5.
* **Employee Referral Comments** (`employee_referral_comments`, text, optional): Add any additional comments about the referral.
* **Employee Referral Comments (2)** (`employee_referral_comments2`, text, optional): Add any additional comments about the referral.

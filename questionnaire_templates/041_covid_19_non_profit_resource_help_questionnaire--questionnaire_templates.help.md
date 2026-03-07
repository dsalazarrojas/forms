<thinking>

Before creating this guide, let's consider the form's purpose and potential issues. This form is designed to collect information from individuals or households affected by COVID-19, specifically to gauge their needs and resources during the pandemic. The goal is to gather data on the impact of the pandemic on households, including their economic and social situations. It's likely that this form will be used to identify areas that need support and allocate resources effectively. To prevent duplicate efforts, it's essential to ensure that users provide accurate and complete information.

To avoid duplication of forms, we can check if a user has already responded to this form in the past. We can store the user's ID and form submission in a database to track responses and prevent duplicate submissions.

</thinking>

# COVID 19 Non Profit Resource Help Questionnaire - Help Guide

## Purpose

This form is designed to collect information from households affected by COVID-19 to help non-profit organizations understand their needs and allocate resources effectively. Your input will help us provide better support to individuals and families during this challenging time.

## How To Complete This Form

1. Please fill in the form with accurate and honest information.
2. Be sure to check the "I'm not sure" or "Unknown" options when you're unsure about a question.
3. If you need help with English, please let us know and we'll do our best to assist you.

## Field-by-Field Explanation

* **Head of Household Name** (`contact_name`, `text`, required): Please enter the name of the person responsible for this household.
* **Phone Number** (`contact_phone`, `text`, required): Enter your phone number to help us contact you for further assistance.
* **Email Address** (`contact_email`, `email`, required): Enter your email address to receive updates on resources and support available.
* **Household Size** (`household_size`, `number`, required): Please estimate the number of people living in your household.
* **Zip Code** (`zip_code`, `text`, required): Enter your zip code to help us provide local resources and support.
* **Household Member Ages** (`household_members`, `text`, optional): If you feel comfortable doing so, please provide an age range of household members.
* **Children under 18** (`children_under_18`, `number`, optional): If you have children under 18, please enter their number.
* **Elderly members over 65** (`elderly_members`, `number`, optional): If you have elderly members over 65, please enter their number.
* **Members with health vulnerabilities** (`vulnerable_members`, `number`, optional): If you have members with health vulnerabilities, please enter their number.
* **Job loss due to pandemic** (`job_loss`, `select_one`, required): Have you or any household member lost a job due to the pandemic? Select "True" if yes, otherwise "False".
* **Income reduction percentage** (`income_reduction`, `number`, optional): Estimate the percentage of income reduction due to the pandemic.
* **Housing or rent assistance needed** (`housing_help`, `select_one`, required): Do you or any household member need housing or rent assistance? Select "True" if yes, otherwise "False".
* **Food assistance needed** (`food_help`, `select_one`, required): Do you or any household member need food assistance? Select "True" if yes, otherwise "False".
* **Utility bill assistance needed** (`utility_help`, `select_one`, required): Do you or any household member need utility bill assistance? Select "True" if yes, otherwise "False".
* **Healthcare or medical assistance needed** (`healthcare_help`, `select_one`, required): Do you or any household member need healthcare or medical assistance? Select "True" if yes, otherwise "False".
* **Childcare assistance needed** (`childcare_help`, `select_one`, required): Do you or any household member need childcare assistance? Select "True" if yes, otherwise "False".
* **Mental health support needed** (`mental_health_help`, `select_one`, required): Do you or any household member need mental health support? Select "True" if yes, otherwise "False".
* **Aware of available resources or programs** (`aware_of_resources`, `select_one`, required): Are you aware of available resources or programs? Select "Yes, Many Resources", "Some Resources", or "Not Aware".
* **Barriers to accessing resources** (`access_barriers`, `select_multiple`, optional): If you've identified barriers to accessing resources, select all that apply.
* **Top Priority for Assistance** (`priority_help`, `text`, required): Please describe the top priority for assistance in your household.
* **Additional Comments or Concerns** (`additional_comments`, `text`, optional): If you have any additional comments or concerns, please share them with us.

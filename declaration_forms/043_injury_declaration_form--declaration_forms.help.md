# Injury Declaration Form - Help Guide
## Purpose
The Injury Declaration Form is a tool used to report work-related injuries that have occurred while working for the company. This form is used to gather necessary information to ensure proper support and assistance are provided.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and email address in the corresponding fields.
2. Select "Yes" or "No" for the "Injury Type" field, depending on whether you were injured on the job.
3. Enter the date and time of the injury in the "Injury Date" and "Injury Time" fields, respectively.
4. If a witness was present during the injury, enter their name, phone number, and email address in the corresponding fields.
5. Provide any relevant medical notes in the "Medical Notes" field.
6. If you received medical treatment, select "Yes" or "No" for each option in the "Medical Treatment" field.
7. Select "Yes" or "No" for the "Other Injuries" field, if you have any other injuries that may be relevant to your current injury.

## Field-by-Field Explanation
* **Name** (`name`, text, required): Enter your full name as it appears on your personnel record.
* **Email** (`email`, email, optional): Enter your work email address.
* **Phone** (`phone`, text, optional): Enter your work phone number.
* **Injury Type** (`injury_type`, select_one, required): Select "Yes" if you were injured on the job.
* **Injury Date** (`injury_date`, date, required): Enter the date the injury occurred.
* **Injury Time** (`injury_time`, time, required): Enter the time the injury occurred.
* **Witness Name** (`witness_name`, text, optional): If someone witnessed the injury, enter their name.
* **Witness Phone** (`witness_phone`, text, optional): If someone witnessed the injury, enter their phone number.
* **Witness Email** (`witness_email`, email, optional): If someone witnessed the injury, enter their email address.
* **Medical Notes** (`medical_notes`, text, optional): Provide any relevant medical notes about your injury.
* **Medical Provider** (`medical_provider`, text, optional): Enter the name of your medical provider.
* **Other Injuries** (`other_injuries`, select_multiple, optional): Select "Yes" if you have any other injuries that may be relevant to your current injury.
* **Medical Treatment** (`medical_treatment`, select_multiple, optional): Select "Yes" for any medical treatment you received for your injury.

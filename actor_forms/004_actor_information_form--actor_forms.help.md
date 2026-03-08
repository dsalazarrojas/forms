<thinking>
This form is designed to collect information about an actor's personal details, including their name, birth date, contact email, and union status. This form is used to update or add actor information in the system, and it is essential to ensure accuracy and completeness of the data. To avoid duplication and ensure data consistency, this form should only be completed if there is no existing actor record in the system.
</thinking>

# Actor Information Form - Help Guide
## Purpose
This form is used to collect and update personal details of actors, including their name, birth date, contact email, and union status. It's essential to provide accurate and complete information to ensure the correct functioning of the system.

## How To Complete This Form
1. Please fill in your name as per your full legal or stage name.
2. Enter your birth date in the "Birth date" field, following the format of day month year (e.g., 12-02-1990).
3. Enter your contact email address in the "Contact email" field, which will be used for casting and notifications.
4. Choose your union status from the provided options: Not union, SAG AFTRA, Equity, or Other.
5. (Optional) If you have a mobile phone number, enter it in the "Phone number" field.
6. (Optional) If you have any relevant skills or specialties, enter them in the "Skills and specialties" field.
7. (Optional) If you have an agent representing you, provide their contact details in the "Agent contact details" field.

## Field-by-Field Explanation
* **Name** (`name`, `text`, required): Enter your full legal or stage name.
* **Birth date** (`birth_date`, `date`, required): Enter your birth date in the format of day month year (e.g., 12-02-1990).
* **Contact email** (`contact_email`, `email`, required): Enter your contact email address for casting and notifications.
* **Phone number** (`phone`, `text`, optional): Enter your mobile phone number (optional).
* **Union status** (`union_status`, `select_one`, required): Choose your union status from the provided options: Not union, SAG AFTRA, Equity, or Other.
* **Height cm** (`height_cm`, `number`, optional): Enter your height in centimeters (optional).
* **Weight kg** (`weight_kg`, `number`, optional): Enter your weight in kilograms (optional).
* **Skills and specialties** (`skills_and_specialties`, `text`, optional): Enter any relevant skills or specialties you have (optional).
* **Agent contact details** (`agent_contact`, `text`, optional): Enter your agent's contact details if they are representing you (optional).

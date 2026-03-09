# Air Cargo Route Survey - Help Guide
## Purpose
The Air Cargo Route Survey is designed to collect information about air cargo routes. The data collected will help the industry improve its operations, infrastructure, and services.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and your company's name (if applicable).
2. Provide the origin airport or city of your cargo route.
3. Enter the destination airport or city of your cargo route.
4. Select the frequency of shipments for your route (Daily, Weekly, Monthly, or Irregular).
5. Choose the typical cargo types transported on your route (Perishables, Electronics, Machinery, Documents, or Other).
6. Describe any main challenges you face on your route (Delays, capacity, customs, handling, or other).
7. Mention any infrastructure improvements that would improve your service (if applicable).
8. Enter your contact email for follow-up.

## Field-by-Field Explanation

* **Respondent name** (`respondent_name`, text, required: false): Provide your name as the person completing the form.
* **Company name** (`company_name`, text, required: false): Enter your company's name if you are representing a logistic operator or shipper.
* **Respondent origin** (`origin`, text, required: true): Enter the airport or city where the cargo originates.
* **Respondent destination** (`destination`, text, required: true): Enter the airport or city where the cargo is destined to arrive.
* **Frequency of shipments** (`frequency_of_shipments`, select_one, required: true): Select the frequency of shipments on your route (Daily, Weekly, Monthly, or Irregular).
* **Typical cargo types** (`typical_cargo_types`, select_multiple, required: false): Choose the typical cargo types transported on your route (Perishables, Electronics, Machinery, Documents, or Other).
* **Main challenges** (`main_challenges`, text, required: false): Describe the main challenges you face on your route (Delays, capacity, customs, handling, or other).
* **Infrastructure needs** (`infrastructure_needs`, text, required: false): Mention any infrastructure improvements that would improve your service (if applicable).
* **Contact email** (`contact_email`, email, required: false): Enter your contact email for follow-up.

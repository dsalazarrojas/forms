<thinking>
Is this form intended for customers to register for a specific type of service or appointment? Is it meant for customers to report their medical history, list their allergies, or provide information for a treatment plan? Perhaps it's used to collect demographic information or preferences. Clarifying the purpose of this form will help in structuring the help guide accordingly.
Are there any specific requirements or constraints to be aware of when completing this form? For example, must the customer select a specific option for a field or can they input free-form text?
</thinking>

# Facial Intake Form - Help Guide
## Purpose
The Facial Intake Form is used to gather information from customers for a facial treatment or consultation. This form helps us understand your medical history, allergies, and treatment preferences to provide the best possible service.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer registration form (page 1).
2. Provide your medical history, including any previous experiences with facials (page 2).
3. List any allergies you have (page 3).
4. List your current medications (page 4).
5. Answer questions about your medical history (pages 5-6).
6. Rate your pain level and skin type (pages 7-8).
7. Choose your treatment plan (page 9).

## Field-by-Field Explanation

* **Customer Registration Form** (`customer_registration_form`, text, optional): This is the primary section for you to input your name and any other demographic information.
* **Medical History** (`medical_history`, text, optional): Please describe any medical conditions or previous experiences with facials that may be relevant to your treatment.
* **Allergies** (`allergies`, select_multiple, optional): If you have any allergies, please select them from the options below. You can select multiple options if applicable.
* **Medications** (`medication_use`, text, optional): List your current medications, including any prescription medications.
* **Medical History 2/3** (`medical_history_2`, text, optional, `medical_history_3`, text, optional): Please provide any additional information about your medical history.
* **Facial History** (`facial_history`, text, optional): Describe your past experiences with facials, including any previous treatments or procedures.
* **Pain Level** (`pain_level`, select_one, optional): Rate your current pain level from 0-4:
	+ None (no pain)
	+ Slight
	+ Moderate
	+ Severe
	+ Very Severe
* **Skin Type** (`skin_type`, select_one, optional): Choose your skin type from the options below:
	+ Normal
	+ Combination
	+ Dry
	+ Oily
	+ Sensitive
* **Treatment Plan** (`treatment_plan`, select_one, optional): Do you have a treatment plan in place for your current skin conditions? Yes or No. 

## Tips
* Be as detailed as possible when providing your medical history.
* If you have any allergies, list them clearly.
* Be honest about your current medications.
* Choose the correct options for your pain level and skin type.
* Select "Yes" or "No" for the treatment plan question.

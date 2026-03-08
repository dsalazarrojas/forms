# Animal Nutritionist Estimate Form - Help Guide
## Purpose
The Animal Nutritionist Estimate Form is designed to gather essential information from pet owners to create an estimate for various animal nutritionist services.

## How To Complete This Form

1. Please provide your client's contact information in the "Client Name", "Client Email", and "Client Phone Number" fields.
2. Fill in the "Animal Name" field with the pet's name.
3. Select the pet's "Animal Species" from the available options.
4. Enter the "Animal Age" and "Animal Weight" as accurately as possible.
5. Describe the "Current Diet Description" of the animal.
6. If applicable, list any "Known Health Conditions" the pet may have.
7. Select the "Type of Nutrition Service Needed" that best describes the requested service.
8. Choose your preferred method of "Consultation Preference".
9. If necessary, provide "Insurance Information" if applicable.
10. Mention any "Special Requirements or Requests" the animal may have.
11. Indicate how the user heard about the service from the "How did you hear about us" options.
12. Select a "Preferred Appointment Date" if available.
13. Finally, confirm that you understand that the "Estimated Service Cost" may not be final by selecting "Yes I Understand".

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): Enter the pet owner's full name.
* **Client Email** (`client_email`, email, required): Enter the pet owner's email address for estimate delivery.
* **Client Phone Number** (`client_phone`, text, required): Enter the pet owner's phone contact number.
* **Animal Name** (`animal_name`, text, required): Enter the animal's name.
* **Animal Species** (`animal_species`, select_one, required): Select the species of the animal (Dog, Cat, Horse, Bird, Rabbit, Reptile, Other).
* **Animal Age** (`animal_age`, number, required): Enter the animal's age in years.
* **Animal Weight** (`animal_weight`, number, required): Enter the animal's current weight in pounds or kilograms.
* **Current Diet Description** (`current_diet`, text, required): Describe the animal's current diet.
* **Known Health Conditions** (`health_conditions`, text, optional): List any diagnosed conditions or health concerns the animal may have.
* **Type of Nutrition Service Needed** (`service_type`, select_one, required): Select the primary service required (Initial Consultation, Diet Plan Development, Weight Management Program, Therapeutic Diet Consultation, Performance Nutrition Plan, Follow-up Assessment).
* **Consultation Preference** (`consultation_preference`, select_one, required): Choose the preferred method of consultation (In-Person Visit, Video Call, Phone Consultation).
* **Estimated Service Cost** (`estimated_cost`, note, optional): This field will be populated automatically based on the selected service type.
* **Cost Breakdown** (`cost_breakdown`, text, optional): This field will provide a detailed breakdown of the estimated costs.
* **Payment Options** (`payment_options`, select_multiple, optional): Select available payment methods (Credit Card, Debit Card, Cash, Check, Payment Plan Available).
* **Pet Insurance Information** (`insurance_info`, text, optional): Provide pet insurance information if applicable.
* **Special Requirements or Requests** (`special_requirements`, text, optional): Mention any specific needs or preferences the animal may have.
* **How did you hear about us** (`referral_source`, select_one, optional): Indicate how the user heard about the service (Veterinarian Referral, Online Search, Social Media, Friend or Family, Previous Client, Other).
* **Preferred Appointment Date** (`preferred_appointment_date`, date, optional): Select a preferred appointment date if available.
* **I acknowledge this is an estimate only and final costs may vary** (`terms_acknowledgment`, select_one, required): Confirm that you understand that the estimated cost may not be final.

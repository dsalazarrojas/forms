# CRIPCS Health Screening - Help Guide
## Purpose
The CRIPCS Health Screening form is designed to be completed by health professionals to assess the health status of individuals who have come into contact with a person who has been diagnosed with COVID-19 or who have symptoms that could be indicative of the virus. This form is meant to be used for rapid assessment and guidance on necessary precautions or isolations.

## How To Complete This Form
1. Please ensure you are authorized to complete this form.
2. Answer each question as accurately and thoroughly as possible.
3. Ensure all required fields are completed.
4. Select the corresponding options for each field that best matches your assessment.

## Field-by-Field Explanation
* **Date of Screening** (`screening_date`, Date, required): The date the health screening was performed.
* **Full Name** (`person_name`, Text, required): Enter the individual's full name.
* **Date of Birth** (`date_of_birth`, Date, required): Enter the individual's date of birth.
* **Email Address** (`email`, Email, required): Enter the individual's email address.
* **Phone Number** (`phone`, Text, required): Enter the individual's phone number.
* **Street Address** (`address`, Text, required): Enter the individual's street address.
* **City, State, ZIP Code** (`city_state_zip`, Text, required): Enter the individual's city, state, and ZIP code.
* **Temperature 100.4 or Higher** (`fever`, Select, required): Check 'True' if the individual's temperature is 100.4 or higher, and 'False' otherwise.
* **Current Temperature Reading** (`temperature`, Number, optional): Enter the individual's current temperature reading.
* **New or Worsening Cough** (`cough`, Select, required): Check 'True' if the individual has a new or worsening cough, and 'False' otherwise.
* **Shortness of Breath** (`shortness_of_breath`, Select, required): Check 'True' if the individual has shortness of breath, and 'False' otherwise.
* **Loss of Taste or Smell** (`loss_taste_smell`, Select, required): Check 'True' if the individual has lost their taste or smell, and 'False' otherwise.
* **Other COVID-19-Like Symptoms** (`other_symptoms`, Text, optional): If the individual has other symptoms, enter them here.
* **Diagnosed with COVID-19 in Past 14 Days** (`covid_diagnosis`, Select, required): Check 'True' if the individual has been diagnosed with COVID-19 in the past 14 days, and 'False' otherwise. 
* **Close Contact with COVID-19 Case** (`covid_contact`, Select, required): Check 'True' if the individual has had close contact with a person diagnosed with COVID-19 within the past 14 days, and 'False' otherwise.
* **Currently Under Quarantine or Isolation** (`quarantine_isolation`, Select, required): Check 'True' if the individual is currently under quarantine or isolation, and 'False' otherwise.
* **Health Screening Outcome** (`screening_outcome`, Select, required): Based on the responses above, select the corresponding outcome.
* **Isolation Required** (`isolation_required`, Select, optional): Check 'True' if isolation is recommended, and 'False' otherwise.
* **Follow-Up Instructions Provided** (`follow_up_instructions`, Select, required): Check 'True' if follow-up instructions were provided, and 'False' otherwise.
* **Screened By - Staff Name** (`screening_staff_name`, Text, required): Enter the name of the individual who performed the health screening.

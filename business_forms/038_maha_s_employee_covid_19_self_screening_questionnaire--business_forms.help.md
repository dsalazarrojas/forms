# Mahas-Employee-COVID-19-Self-Screening-Questionnaire - Help Guide
## Purpose
The Mahas-Employee-COVID-19-Self-Screening-Questionnaire is a form used to gather information from employees about their health status related to COVID-19. This information will help management and HR teams identify potential risks and take necessary precautions to maintain a safe working environment.

## How To Complete This Form
To complete this form, please answer the questions based on your current health status related to COVID-19.

## Field-by-Field Explanation
- **Do you have a fever** (`have_fever`, number, not required): Please answer this question based on your current health status. If you are experiencing a fever, please select "Yes" and continue with the next steps.
  - **Do you have a cough** (`cough`, text, not required): Please answer this question based on your current health status. If you are experiencing a cough, please describe its characteristics.
  - **Have you experienced shortness of breath** (`shortness_of_breath`, select_multiple, not required): Please select "Yes" if you have experienced shortness of breath, "No" if you have not, or "Other" if you are unsure.
  - **Have you traveled in the last 14 days** (`have_traveled`, select_one, not required): Please select "Yes" if you have traveled in the last 14 days, "No" if you have not, or "Other" if you are unsure.
  - **Have you come into contact with anyone with COVID 19 in the last 14 days** (`have_come_in_contact`, select_one, not required): Please select "Yes" if you have come into contact with someone with COVID-19 in the last 14 days, "No" if you have not, or "Other" if you are unsure.
  - **Have you had any COVID 19 symptoms** (`have_symptoms`, select_multiple, not required): Please select "Yes" if you have experienced any COVID-19 symptoms, "No" if you have not, or "Other" if you are unsure.
  - **Have you been diagnosed with COVID 19** (`have_been_diagnosed`, select_one, not required): Please select "Yes" if you have been diagnosed with COVID-19, "No" if you have not, or "Other" if you are unsure.
  - **When did you first start experiencing symptoms** (`symptoms_date`, date, not required): If you answered "Yes" to the previous question, please select the date when you first started experiencing symptoms.
  - **Symptoms start date 1** (`symptoms_start_date_1`, date, not required): This question is a duplicate of the previous one, but we will remove it.
  - **Symptoms start date 2** (`symptoms_start_date_2`, date, not required): This question is a duplicate of the previous one, but we will remove it.
  - **Have you visited a doctor or medical center regarding your symptoms** (`been_to_doctor`, select_one, not required): Please select "Yes" if you have visited a doctor or medical center, "No" if you have not, or "Other" if you are unsure.
  - **Have you received your COVID 19 test result** (`received_test_result`, select_one, not required): Please select "Yes" if you have received your test result, "No" if you have not, or "Other" if you are unsure.
  - **When did you receive your test result** (`test_result_date`, date, not required): If you answered "Yes" to the previous question, please select the date when you received your test result.
  - **Have you been quarantined** (`have_been_quarantined`, select_one, not required): Please select "Yes" if you have been quarantined, "No" if you have not, or "Other" if you are unsure.
  - **Have you been symptomatic** (`have_been_symptomatic`, select_one, not required): Please select "Yes" if you have been symptomatic, "No" if you have not, or "Other" if you are unsure.
  - **Has contact tracing been completed** (`contact_tracing_complete`, select_one, not required): Please select "Yes" if contact tracing has been completed, "No" if it has not, or "Other" if you are unsure.
  - **Have you been isolated** (`have_been_isolated`, select_one, not required): Please select "Yes" if you have been isolated, "No" if you have not, or "Other" if you are unsure.
  - **When was your isolation completed** (`isolation_date`, date, not required): If you answered "Yes" to the previous question, please select the date when your isolation was completed.
  - **Have Been Quarantined 2** (`have_been_quarantined_2`, select_one, not required): This question is a duplicate of the previous one, but we will remove it.
  - **Have Been Symptomatic 2** (`have_been_symptomatic_2`, select_one, not required): This question is a duplicate of the previous one, but we will remove it.
  - **Have you been contacted** (`have_been_contacted`, select_one, not required): Please select "Yes" if you have been contacted, "No" if you have not, or "Other" if you are unsure.
  - **Have Been Isolated 2** (`have_been_isolated_2`, select_one, not required): This question is a duplicate of the previous one, but we will remove it.
  - **Have Been Quarantined 3** (`have_been_quarantined_3`, select_one, not required): This question is a duplicate of the previous one, but we will remove it.
  - **Have Been Symptomatic 3** (`have_been_symptomatic_3`, select_one, not required): This question is a duplicate of the previous one, but we will remove it.

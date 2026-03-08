# COVID 19 Screening Questionnaire - Help Guide
## Purpose
The COVID 19 Screening Questionnaire is designed to collect information from individuals to assess their risk of exposure to COVID-19 and identify potential symptoms. This form helps healthcare professionals make informed decisions about further evaluation or treatment.

## How To Complete This Form
To complete the form, follow these steps:

1. Provide your full name.
2. Choose the purpose of your screening (Work Entry, Visitor Entry, Scheduled Appointment, or Travel Clearance).
3. Answer the question about your current health status (Feeling Well/Not Feeling Well).
4. Report on your symptoms (cough, difficulty breathing, loss of taste or smell, unusual fatigue, nasal congestion, nausea, vomiting or diarrhea).
5. Indicate whether you have had close contact with a positive COVID-19 case within the last 14 days.
6. Confirm that your answers are accurate and truthful.
7. Record the current time and date of screening.

## Field-by-Field Explanation
### **Full Name** (1. `person_name_full`, text, required)
Enter your full name as it appears on your official documents.

### **Purpose of Screening** (2. `screening_purpose_cat`, select_one, required)
Choose one of the following options to indicate the purpose of your screening:
*   Work Entry
*   Visitor Entry
*   Scheduled Appointment
*   Travel Clearance

### **Are you feeling well today?** (3. `feeling_well_yn`, select_one, required)
Indicate your current health status:
*   True
*   False

### **Do you have a new or worsening cough?** (4. `symptom_cough_yn`, select_one, required)
Choose one of the following options to report on your respiratory symptoms:
*   True
*   False

### **Do you have difficulty breathing or shortness of breath?** (5. `symptom_breath_yn`, select_one, required)
Indicate if you are experiencing breathing difficulties:
*   True
*   False

### **Have you experienced a loss of taste or smell?** (6. `symptom_taste_yn`, select_one, required)
Choose one of the following options to report on your olfactory symptoms:
*   True
*   False

### **Do you have unusual fatigue or muscle aches?** (7. `symptom_fatigue_yn`, select_one, required)
Indicate if you are experiencing unusual fatigue or muscle aches:
*   True
*   False

### **Do you have nasal congestion or a runny nose?** (8. `symptom_congest_yn`, select_one, required)
Choose one of the following options to report on your nasal symptoms:
*   True
*   False

### **Do you have nausea, vomiting, or diarrhea?** (9. `symptom_nausea_yn`, select_one, required)
Indicate if you are experiencing gastrointestinal symptoms:
*   True
*   False

### **Have you been in close contact with a positive COVID-19 case in 14 days?** (10. `exposure_risk_yn`, select_one, required)
Choose one of the following options to report on recent exposure risk:
*   True
*   False

### **I verify that my answers are true and accurate** (11. `screening_verif_ack`, select_one, required)
Confirm the accuracy and truthfulness of your answers:
*   True
*   I verify

### **Screening Time and Date** (12. `screening_timestamp`, text, required)
Enter the current time and date of screening.

<thinking>
To determine if this form was generated correctly, I will review the provided YAML structure.
</thinking>
# COVID 19 Daily Screening Questions For Vaccinated Clients - Help Guide
## Purpose
This form is designed for vaccinated clients to report their health status on a daily basis, providing essential information to healthcare providers for timely interventions and monitoring.
## How To Complete This Form
To complete this form, simply follow these steps:
1. Click on the first page of the form, which is titled "Screening Date." Enter the date of your health check-in using the calendar picker.
2. On the next page, you will be asked about your basic information:
* **Client Name:** Enter your full name.
* **Email Address:** If you have an email address, enter it (optional).
3. Confirm your vaccination status:
* **I confirm that I am fully vaccinated against COVID-19:** Select "Yes, fully vaccinated" if you have completed your primary vaccine series.
4. Report on any potential health concerns:
* **Have you received a COVID-19 booster dose?** If applicable, select the number of booster doses you have received.
* **Date of Last Booster Dose:** Enter the date of your last booster dose if you've had one.
* **Do you currently have a fever?** Select "Yes" if you have a fever over 100.4°F.
* **Do you have a persistent cough?** Report your cough status: "No," "Yes - mild," "Yes - moderate," or "Yes - severe."
* **Are you experiencing shortness of breath?** Select "Yes" if you're experiencing any level of shortness of breath.
* **Have you experienced loss of taste or smell?** If you have, select the level of loss: "No," "Partial loss," or "Complete loss."
* **Are you experiencing unusual fatigue?** Report your fatigue level: "No," "Mild," "Moderate," or "Severe."
* **Do you have a sore throat?** Select "Yes" if you have any level of sore throat.
* **Do you have body aches or muscle pain?** Report "Yes" if you have any level of body aches or muscle pain.
* **Do you have a headache?** Select "Yes" if you have any level of headache.
* **Do you have nausea or vomiting?** Report "Yes" if you have any level of nausea or vomiting.
* **Do you have diarrhea?** Select "Yes" if you have any level of diarrhea.
5. Report on any potential exposure risks:
* **Have you been exposed to someone with COVID-19?** Select "No exposure" if you haven't been exposed, "Possible exposure" if you may have been exposed, or "Confirmed exposure" if you've been exposed.
* **Have you tested positive for COVID-19 recently?** Select "No" if you haven't tested positive, "Yes" if you've tested positive, or "Prefer not to answer" if you don't want to disclose your status.
6. Report on your recovery progress:
* **If you had COVID, how is your recovery progressing?** Report your recovery status: "Not applicable," "Fully recovered," "Mostly recovered," "Slowly recovering," or "Still experiencing symptoms."
7. Report on any breakthrough infections:
* **Have you had a breakthrough infection despite vaccination?** Select "No" if you haven't had a breakthrough infection, "Yes" if you have, or "Unsure" if you're not sure.
8. Report on your overall health:
* **Overall, how are you feeling today?** Rate your overall health: "Excellent," "Good," "Fair," or "Poor."
9. Provide any additional concerns:
* **Any other health concerns you want to report?** Enter any additional symptoms or health concerns you have.
10. Confirm if you need to follow up with your healthcare provider:
* **Do you need to follow up with your healthcare provider?** Select "No" if you don't need to follow up, "Yes" if you do, or "Unsure" if you're not sure.

## Field-by-Field Explanation

* **Screening Date (1)** (`screening_date`, `date`, required): The date of your health check-in.
* **Client Name (2)** (`client_name`, `text`, required): Your full name.
* **Email Address (3)** (`client_email`, `email`, optional): If you have an email address, enter it (optional).
* **I confirm that I am fully vaccinated against COVID-19 (4)** (`vaccination_confirmation`, `select_one`, required): Select "Yes, fully vaccinated" if you have completed your primary vaccine series.
* **Have you received a COVID-19 booster dose? (5)** (`booster_status`, `select_one`, optional): If you've received a booster dose, select the number of booster doses you've had.
* **Date of Last Booster Dose (6)** (`last_booster_date`, `date`, optional): Enter the date of your last booster dose if you've had one.
* **Do you currently have a fever? (7)** (`fever_present`, `select_one`, required): Select "Yes" if you have a fever over 100.4°F.
* **Do you have a persistent cough? (8)** (`cough`, `select_one`, required): Report your cough status: "No," "Yes - mild," "Yes - moderate," or "Yes - severe."
* **Are you experiencing shortness of breath? (9)** (`shortness_of_breath`, `select_one`, required): Select "Yes" if you're experiencing any level of shortness of breath.
* **Have you experienced loss of taste or smell? (10)** (`loss_taste_smell`, `select_one`, required): If you have, select the level of loss: "No," "Partial loss," or "Complete loss."
* **Are you experiencing unusual fatigue? (11)** (`fatigue`, `select_one`, optional): Report your fatigue level: "No," "Mild," "Moderate," or "Severe."
* **Do you have a sore throat? (12)** (`sore_throat`, `select_one`, optional): Select "Yes" if you have any level of sore throat.
* **Do you have body aches or muscle pain? (13)** (`body_aches`, `select_one`, optional): Report "Yes" if you have any level of body aches or muscle pain.
* **Do you have a headache? (14)** (`headache`, `select_one`, optional): Select "Yes" if you have any level of headache.
* **Do you have nausea or vomiting? (15)** (`nausea_vomiting`, `select_one`, optional): Select "Yes" if you have any level of nausea or vomiting.
* **Do you have diarrhea? (16)** (`diarrhea`, `select_one`, optional): Select "Yes" if you have any level of diarrhea.
* **Have you been exposed to someone with COVID-19? (17)** (`known_covid_exposure`, `select_one`, required): Select "No exposure" if you haven't been exposed, "Possible exposure" if you may have been exposed, or "Confirmed exposure" if you've been exposed.
* **Have you tested positive for COVID-19 recently? (18)** (`tested_positive_recently`, `select_one`, required): Select "No" if you haven't tested positive, "Yes" if you've tested positive, or "Prefer not to answer" if you don't want to disclose your status.
* **If you had COVID, how is your recovery progressing? (19)** (`recovery_progress`, `select_one`, optional): Report your recovery status: "Not applicable," "Fully recovered," "Mostly recovered," "Slowly recovering," or "Still experiencing symptoms."
* **Have you had a breakthrough infection despite vaccination? (20)** (`breakthrough_infection`, `select_one`, optional): Select "No" if you haven't had a breakthrough infection, "Yes" if you have, or "Unsure" if you're not sure.
* **Overall, how are you feeling today? (21)** (`overall_health`, `select_one`, required): Rate your overall health: "Excellent," "Good," "Fair," or "Poor."
* **Any other health concerns you want to report? (22)** (`additional_concerns`, `text`, optional): Enter any additional symptoms or health concerns you have.
* **Do you need to follow up with your healthcare provider? (23)** (`follow_up_needed`, `select_one`, optional): Select "No" if you don't need to follow up, "Yes" if you do, or "Unsure" if you're not sure.

# COVID 19 Risk Survey - Help Guide
## Purpose
This form is designed to assess an individual's risk level of COVID-19 based on various factors such as age, health conditions, behavior, and environment. Please answer the questions honestly and accurately to help us better understand the risk dynamics of the COVID-19 virus.

## How To Complete This Form
To complete this form, follow the instructions below:

* Read each question carefully and choose the best answer from the provided options.
* Enter your full name, age, and other relevant information.
* Answer questions about your health conditions, smoking status, public exposure, and recent interactions with COVID-19 cases.
* Report any symptoms you've experienced in the last 14 days.
* Indicate your vaccination status and perceived risk level.
* Provide the size of your household and your zip code.

## Field-by-Field Explanation

* **Full Name** (`person_name_full`, text, required): Please enter your full name as it appears on your government-issued ID.
* **Age** (`person_age_val`, number, required): Please enter your age in years.
* **Gender** (`person_gender_cat`, select_one, required): Please select your gender.
*   - **Male**
*   - **Female**
*   - **Non-binary**
*   - **Prefer not to say**
* **Do you have any of the following chronic conditions?** (`chronic_cond_list`, select_multiple, required): Select all that apply:
	+ **Diabetes**
	+ **Heart Disease**
	+ **Hypertension**
	+ **Respiratory Issue**
	+ **Immunocompromised**
	+ **None**
* **Smoker Status** (`smoker_status_cat`, select_one, required): Please select your smoking status.
	+ **Never**
	+ **Former Smoker**
	+ **Current Smoker**
	+ **Occasional Smoker**
* **Frequency of Public Exposure** (`public_exposure_cat`, select_one, required): Please select how often you go to public places like grocery stores or public transit.
	+ **Daily**
	+ **2-3 times per week**
	+ **Weekly**
	+ **Rarely**
	+ **Not at all**
* **Recent Exposure to a Known COVID-19 Case** (`exposure_known_case_yn`, select_one, required): Please answer whether you've been exposed to a known COVID-19 case in the last 14 days.
	+ **True**
	+ **False**
	+ **Unsure**
* **Symptoms Experienced in the Last 14 Days** (`symptoms_14d_list`, select_multiple, required): Select all that apply:
	+ **Fever**
	+ **Cough**
	+ **Loss of taste/smell**
	+ **Fatigue**
	+ **Body aches**
	+ **None**
* **Vaccination Status** (`vaccination_status_cat`, select_one, required): Please select your vaccination status.
	+ **Not vaccinated**
	+ **Partially (1 dose)**
	+ **Fully vaccinated (2 doses)**
	+ **Fully vaccinated + Booster**
* **Risk Perception Level** (`risk_percep_val`, number, required): Please select a number between 1 (Low) and 10 (High) that represents how at risk you feel.
* **Household Size** (`household_size_val`, number, required): Please enter the number of people living in your home.
* **Zip Code** (`location_zip_val`, text, required): Please enter your zip code.
* **I understand this survey is for research and risk estimation purposes** (`info_usage_ack`, select_one, required): Please select whether you understand the purpose of this survey.
	+ **I understand**
	+ **Other**

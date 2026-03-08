# Dental Clinic COVID 19 Triage Form - Help Guide
## Purpose
The Dental Clinic COVID-19 Triage Form is designed to help quickly identify and triage patients who may have been exposed to or are showing symptoms of COVID-19. This form will guide you through a series of questions to determine your risk level and inform the clinic's decision on how to proceed.

## How To Complete This Form

To complete this form, follow these steps:

1. Answer all questions honestly and to the best of your ability.
2. Select "True" if you have traveled recently or have had close contact with someone who has been exposed to COVID-19.
3. Select the symptoms you are experiencing from the list.
4. Choose the duration of your symptoms from the options provided.
5. If you are experiencing symptoms, select when they started and when they ended.
6. Provide your exposure and contact history dates, if applicable.
7. Review your answers carefully before submitting the form.

## Field-by-Field Explanation

* **Patient Info**: 
  * **Patient Info** (`patient_info`, text, required): This field is for you to enter your name and any other relevant patient information.
* **Symptoms**: 
  * **Symptoms** (`symptoms`, select_multiple, optional): Select all the symptoms you are experiencing, such as Fever, Cough, Sore Throat, etc.
* **Travel History**: 
  * **Travel History** (`travel_history`, select_one, optional): If you have traveled recently, select "True".
* **Exposure History**: 
  * **Exposure History** (`exposure_history`, select_one, optional): If you have had close contact with someone who has been exposed to COVID-19, select "True".
* **Contact History**: 
  * **Contact History** (`contact_history`, select_one, optional): If you have had close contact with someone who has been exposed to COVID-19, select "True".
* **Symptoms Duration**: 
  * **Symptoms Duration** (`symptoms_duration`, select_one, optional): Select the duration of your symptoms from the options provided, such as Less than 24 hours, 24 to 48 hours, etc.
* **Symptoms Onset**: 
  * **Symptoms Onset** (`symptoms_start`, date, optional): If you are experiencing symptoms, enter when they started.
* **Exposure Date**: 
  * **Exposure Date** (`exposure_date`, date, optional): If you have had close contact with someone who has been exposed to COVID-19, enter the date of exposure.
* **Contact Last**: 
  * **Contact Last** (`contact_last`, date, optional): If you have had close contact with someone who has been exposed to COVID-19, enter the date of last contact.
* **Symptoms End**: 
  * **Symptoms End** (`symptoms_end_date`, date, optional): If you are experiencing symptoms, enter when they ended.

Note: Please be aware that some fields are marked as optional, but it is still important to answer all questions honestly and to the best of your ability.

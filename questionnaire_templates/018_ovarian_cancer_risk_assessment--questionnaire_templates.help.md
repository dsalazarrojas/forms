# Ovarian Cancer Risk Assessment - Help Guide
## Purpose
This form is designed to collect information about a patient's personal and medical history to evaluate their risk factors for ovarian cancer.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your personal details, including your name, email, and phone number.
2. Provide your medical history, including any previous cancers and their types.
3. Answer the question about whether you have a family history of cancer.
4. Provide any additional information about your cancer type (if different from what's listed).
5. Indicate whether you have had any screenings for cancer.
6. List any risk factors you may have.
7. Enter the date and time of your follow-up appointment.
8. Enter the submitter's name, email, and phone number.
9. Provide any comments from the submitter.

## Field-by-Field Explanation
### 1. Personal Details
* **Name** (`personal_details`, text, optional): Enter your name.
* **Email** (`submitter_email`, email, optional): Enter your email address.
* **Phone** (`submitter_phone`, text, optional): Enter your phone number.

### 2. Medical History
* **Medical History** (`medical_history`, text, optional): Describe any previous cancers or medical conditions.

### 3. Family History
* **Family History** (`family_history`, text, optional): Describe any family history of cancer.

### 4. Screening Information
* **Screening Information** (`screening_info`, text, optional): Describe any cancer screenings you have had.
* **Screening Type** (`screening_type`, select_multiple, optional): Select any cancer screenings you have had.
* **Other Screening Type** (`screening_type_other`, text, optional): Describe any other cancer screenings you have had.

### 5. Ovarian Family History
* **Ovarian Family History** (`ovarian_family_history`, text, optional): Describe any family history of ovarian cancer.

### 6. Cancer Type
* **Cancer Type** (`cancer_type`, select_one, optional): Answer whether you have had cancer.
* **Other Cancer Type** (`cancer_type_other`, text, optional): Describe any other cancer type if not listed.

### 7. Risk Factors
* **Risk Factors** (`risk_factors`, text, optional): List any risk factors you may have.
* **Risk Factors List** (`risk_factors_list`, text, optional): Provide a detailed list of risk factors you may have.

### 8. Follow-up Information
* **Follow-up** (`follow_up`, date, optional): Enter the date of your follow-up appointment.
* **Follow-up Time** (`follow_up_time`, time, optional): Enter the time of your follow-up appointment.

### 9. Submit Information
* **Submit Date** (`submit_date`, date, optional): Enter the date you are submitting this form.
* **Submit Time** (`submit_time`, time, optional): Enter the time you are submitting this form.
* **Submitter** (`submitter`, text, optional): Enter your name as the submitter.
* **Submitter Email** (`submitter_email`, email, optional): Enter your email address as the submitter.
* **Submitter Phone** (`submitter_phone`, text, optional): Enter your phone number as the submitter.
* **Submitter Comments** (`submitter_comments`, text, optional): Provide any comments from the submitter.
* **Healthcare Provider** (`healthcare_provider`, text, optional): Enter the name of your healthcare provider.
* **Healthcare Provider Comments** (`healthcare_provider_comments`, text, optional): Enter any comments from your healthcare provider.
* **Healthcare Provider Email** (`healthcare_provider_email`, email, optional): Enter the email address of your healthcare provider.
* **Healthcare Provider Phone** (`healthcare_provider_phone`, text, optional): Enter the phone number of your healthcare provider.
* **Healthcare Provider Institution** (`healthcare_provider_institution`, text, optional): Enter the name of your healthcare provider institution.

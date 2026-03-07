<thinking>
This form is designed to collect personal and medical information from users to assess their risk of cancer. The form is intended to be completed by individuals who are concerned about their cancer risk, and the data collected will be used to guide further medical consultations or assessments. The form is divided into several sections: Personal Information, Lifestyle Factors, Medical and Family History, Symptoms, and Assessment Date. To ensure accurate results, please answer all questions truthfully and provide as much detail as possible. This form is not intended for minors or individuals with severe cognitive impairments. Please note that the data collected will be kept confidential and used only for medical purposes. If you have any concerns or questions, please contact a medical professional.
</thinking>

# Cancer Risk Assessment Survey - Help Guide
## Purpose
The purpose of this survey is to collect information about your personal and medical history to assess your risk of cancer. This information will help guide further medical consultations or assessments.

## How To Complete This Form
1. **Please answer all questions truthfully and to the best of your ability**.
2. **Use the correct units for measurements**. For example, use kilograms (kg) or pounds (lbs) for weight and centimeters (cm) or inches for height.
3. **Select all applicable options for lifestyle factors**.
4. **Be specific when listing relatives with cancer**.
5. **Provide accurate information about your medical and family history**.
6. **Mark all symptoms that concern you**.

## Field-by-Field Explanation

* **Full Name** (`full_name`, required, true): Please enter your full name as it appears on your identification documents.
* **Date of Birth** (`dob`, required, true): Enter your date of birth in the format YYYY-MM-DD.
* **Biological Sex** (`biological_sex`, required, true): Select your biological sex (Male, Female, or Other).
* **Ethnicity or Ancestry** (`ethnicity`, required, true): Select the ethnicity or ancestry that best describes you (Asian, Black or African, Hispanic or Latino, White or Caucasian, or Other).
* **Current Weight** (`weight`, required, true): Enter your current weight in the format (e.g., 70 kg).
* **Height** (`height`, required, true): Enter your height in the format (e.g., 175 cm or 68 inches).
* **Smoking Status** (`smoking_status`, required, true): Select your current smoking status (Never smoked, Former smoker, Occasional smoker, or Daily smoker).
* **Alcohol Consumption** (`alcohol_consumption`, required, true): Select your current alcohol consumption level (Never, Occasional, Moderate, or Heavy).
* **Physical Activity Level** (`physical_activity`, required, true): Select your overall physical activity level (Sedentary, Light, Moderate, or Vigorous).
* **Dietary Habits** (`dietary_habits`, optional, false): Select all the dietary habits that apply to you (High Fruit or Veg, High Processed Food, High Red Meat, Low Fiber, Vegetarian, or Other).
* **Personal History of Cancer** (`personal_cancer_history`, required, true): Select whether you have ever been diagnosed with cancer.
* **Type of Personal Cancer** (`personal_cancer_type`, optional, false): If you have been diagnosed with cancer, enter the primary cancer site and year of diagnosis if applicable.
* **Family History of Cancer** (`family_cancer_history`, required, true): Select the types of cancer that have been diagnosed in your blood relatives.
* **Relatives Affected with Cancer** (`affected_relatives_list`, optional, false): List the relationship (e.g., Mother, Paternal Grandfather) for each selection above.
* **Symptoms** (`symptoms`, optional, false): List any concerning symptoms you are experiencing.
* **Interest in Genetic Counseling** (`genetic_counseling_interest`, required, true): Select whether you are interested in genetic counseling.
* **Assessment Date** (`assessment_date`, required, true): Enter the date of this survey.

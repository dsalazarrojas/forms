# maternity_session_questionnaire - Help Guide
## Purpose
This form is used to gather essential information from pregnant patients, including medical history, allergies, and contact information. It helps healthcare providers ensure that they have accurate and up-to-date information about the patient's health status.

## How To Complete This Form
1.  Start by filling out the `client_info` field, which asks for the patient's general information such as name, date of birth, etc. (Field 1).
2.  Then, provide details about the baby, such as gestational age and any relevant medical history related to the pregnancy (Field 2).
3.  If applicable, fill out the `birth_plan` field with any existing plans or expectations for the delivery and postpartum care (Field 3).
4.  In the `medical_history` field, provide any relevant medical history for the patient, such as previous surgeries, illnesses, or allergies (Field 4).
5.  If the patient has any allergies, provide details in the `medical_allergies` field (Field 6).
6.  For any medical tests the patient has undergone, enter the relevant information in the `medical_tests` field (Field 7).
7.  In the `medical_conditions` field, list any pre-existing medical conditions or illnesses the patient has (Field 9).
8.  If the patient has any medical conditions that are not listed, provide a description in the `medical_conditions_description` field (Field 10).
9.  If the patient has any medical conditions other than those listed, provide a description in the `medical_conditions_description_other` field (Field 11).
10. Similarly, for any medical tests the patient has undergone that are not listed, provide a description in the `medical_tests_description_other` field (Field 16).
11. If the patient has any medical conditions other than those listed, provide a description in the `medical_conditions_other` field (Field 17).
12. If the patient has additional medical history information, enter it in the `medical_history_additional` field (Field 18).
13. Select the types of insurance the patient has (Fields 19).
14. Provide any additional details about the patient's insurance in the `insurance_description` field (Field 20).
15. If the patient has any other insurance coverage, provide details in the `insurance_other` field (Field 21).
16. Enter the patient's address in the `address` field (Field 22).
17. Enter the patient's phone number in the `phone` field (Field 23).
18. Enter the patient's email in the `email` field (Field 24) if applicable.
19. If you need to, enter the emergency contact information in the `emergency_contact` field (Field 25).

## Field-by-Field Explanation

* **client_info** (Field 1, `text`, required): Enter the patient's general information, such as name, date of birth, etc.
* **baby_info** (Field 2, `text`, required): Provide details about the baby, such as gestational age and any relevant medical history related to the pregnancy.
* **birth_plan** (Field 3, `text`, not required): If applicable, enter any existing plans or expectations for the delivery and postpartum care.
* **contact** (Field 4, `text`, required): Enter the patient's contact information, such as phone number and address.
* **medical_history** (Field 5, `text`, required): Enter any relevant medical history for the patient, such as previous surgeries, illnesses, or allergies.
* **medical_allergies** (Field 6, `text`, not required): If the patient has any allergies, provide details in this field.
* **medical_tests** (Field 7, `text`, not required): Enter any medical tests the patient has undergone.
* **medical_tests_results** (Field 8, `text`, not required): Enter any results from medical tests the patient has undergone.
* **medical_conditions** (Field 9, `text`, not required): List any pre-existing medical conditions or illnesses the patient has.
* **medical_conditions_description** (Field 10, `text`, not required): If the patient has any medical conditions that are not listed, provide a description in this field.
* **medical_conditions_description_other** (Field 11, `text`, not required): If the patient has any medical conditions other than those listed, provide a description in this field.
* **medical_tests_description** (Field 12, `text`, not required): For any medical tests the patient has undergone that are not listed, enter a description in this field.
* **medical_tests_description_other** (Field 13, `text`, not required): If the patient has any medical tests other than those listed, enter a description in this field.
* **medical_conditions_other** (Field 14, `text`, not required): If the patient has any medical conditions other than those listed, provide a description in this field.
* **medical_history_additional** (Field 15, `text`, not required): If the patient has additional medical history information, enter it in this field.
* **insurance** (Field 16, `select_multiple`, required): Select the types of insurance the patient has.
* **insurance_description** (Field 17, `text`, not required): Provide any additional details about the patient's insurance in this field.
* **insurance_other** (Field 18, `text`, not required): If the patient has any other insurance coverage, provide details in this field.
* **address** (Field 19, `text`, required): Enter the patient's address.
* **phone** (Field 20, `text`, required): Enter the patient’s phone number.
* **email** (Field 21, `email`, not required): Enter the patient's email if applicable.
* **emergency_contact** (Field 22, `text`, not required): If you need to, enter the emergency contact information in this field.

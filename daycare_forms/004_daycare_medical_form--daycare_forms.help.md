# Daycare Medical Form - Help Guide
## Purpose
The Daycare Medical Form is a crucial document used in child care settings to gather essential information about a child's medical history, emergency contact details, and other relevant health-related information.

## How To Complete This Form
1. Begin by entering the child's first name in the **First Name** field.
2. Enter the child's last name in the **Last Name** field.
3. Enter the child's date of birth in the **Date of Birth** field in the format of MM/DD/YYYY.
4. If applicable, list any **Medical Conditions** that the child is currently experiencing or has experienced in the past.
5. Upload the child's **Medical File** in the specified format (PDF or DOCX).
6. Enter your **Email**, **Phone**, and **Address** to ensure we can contact you in case of an emergency.
7. Identify your **Guardian's Phone** and **Email** to ensure we can reach them as well.
8. Select the **Emergency Contact** (Father, Mother, or Other) who will be available in case of an emergency.
9. Enter the **Emergency Contact's Address** so we can reach them quickly.
10. Provide any additional **Medical Conditions Note** if necessary.
11. Enter the name of your **Healthcare Provider** who is treating the child.
12. If applicable, provide the **Medical File URL**.
13. Confirm that you have read and signed the **Consent Form**.
14. Enter the **Date** and **Time** of this update.
15. Specify the **Medical File Name** and **Medical File Size**.
16. Select the **Medical File Type** (PDF, DOCX, or JPG).
17. Upload the **Medical File**.

## Field-by-Field Explanation
* **First Name** (`user_input_1`, text, required): Enter the child's first name.
* **Last Name** (`user_input_2`, text, required): Enter the child's last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the child's date of birth in MM/DD/YYYY format.
* **Medical Conditions** (`medical_conditions`, text, optional): List any medical conditions the child is experiencing or has experienced.
* **Medical File Upload** (`medical_file_upload`, text, required): Upload the child's medical file in the specified format (PDF or DOCX).
* **Medical Note** (`medical_note`, note, optional): Provide any additional medical notes.
* **HIPAA Compliance** (`hipaa_compliance`, select_one, optional): Select whether you are HIPAA compliant or not.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Address** (`address`, text, required): Enter your address.
* **Guardian Phone** (`guardian_phone`, text, required): Enter the guardian's phone number.
* **Guardian Email** (`guardian_email`, email, optional): Enter the guardian's email address.
* **Emergency Contact** (`emergency_contact`, select_multiple, optional): Select the emergency contact (Father, Mother, or Other).
* **Emergency Address** (`emergency_address`, text, required): Enter the emergency contact's address.
* **Medical Conditions Note** (`medical_conditions_note`, note, optional): Provide any additional medical conditions note.
* **Healthcare Provider** (`healthcare_provider`, text, required): Enter the name of the child's healthcare provider.
* **Medical File URL** (`medical_file_url`, text, optional): Provide the medical file URL if applicable.
* **Consent Form** (`consent_form`, select_one, required): Confirm that you have read and signed the consent form.
* **Signed By** (`signed_by`, text, optional): Enter the person who signed the consent form.
* **Date** (`date`, date, required): Enter the date of this update.
* **Time** (`time`, time, required): Enter the time of this update.
* **Medical File Name** (`medical_file_name`, text, required): Enter the medical file name.
* **Medical File Size** (`medical_file_size`, number, required): Enter the size of the medical file.
* **Medical File Type** (`medical_file_type`, select_one, required): Select the medical file type (PDF, DOCX, or JPG).
* **Medical File** (`medical_file`, text, required): Upload the medical file.

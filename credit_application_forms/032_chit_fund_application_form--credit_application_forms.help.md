<thinking> 
We're designing the Chit Fund Application Form for an organization that requires users to apply for a chit fund, which is essentially an investment scheme where members contribute regularly to a pool, which is then disbursed in installments. This application form is meant to collect detailed information about the applicant, their employment status, income, ID proof, and other relevant details. The purpose of this form is to ensure that the applicant's information is accurate and complete, making it easier for the organization to verify the applicant's identity and approve their application. We will use this form to ensure that the applicant's data is not duplicated and that the organization's rules and regulations are followed.</thinking>

# Chit Fund Application Form - Help Guide
## Purpose

This Chit Fund Application Form is designed to collect detailed information from applicants who want to apply for a chit fund. It is meant to ensure that all necessary data is collected accurately and efficiently, making the application process easier for both the applicant and the organization.

## How To Complete This Form

To complete this form, please follow the following steps:

1. Fill in all the required fields with accurate and true information.
2. Ensure that you have all the necessary documents and information before filling in the form.
3. Review your answers carefully before submitting the form.

## Field-by-Field Explanation

### 1. **First Name**
* (`applicant_first_name`, `text`, required): Enter your first name as it appears on your official documents.
* Hint: This is required to identify you accurately.

### 2. **Last Name**
* (`applicant_last_name`, `text`, required): Enter your last name as it appears on your official documents.
* Hint: This is required to identify you accurately.

### 3. **Date of Birth**
* (`date_of_birth`, `date`, required): Enter your date of birth as it appears on your official documents.
* Hint: This is required to verify your age.

### 4. **Age**
* (`age`, `number`, required): Enter your age as of today.
* Hint: This is required to verify your age.

### 5. **Gender**
* (`gender`, `select_one`, required): Select your gender as it appears on your official documents.
* Hint: Please select one of the options provided.

### 6. **Marital Status**
* (`marital_status`, `select_one`, required): Select your marital status as it appears on your official documents.
* Hint: Please select one of the options provided.

### 7. **Number of Dependents**
* (`number_of_dependents`, `number`, optional): If you have dependents, enter their count. If none, leave blank.
* Hint: This is not required, but will help us understand your financial situation.

### 8. **Contact Information**
* (`contact_information`, `note`, optional): Enter a contact number or email where we can reach you.
* Hint: This is not required, but will help us contact you if needed.

### 9. **Permanent Address**
* (`permanent_address`, `text`, required): Enter your permanent address as it appears on your official documents.
* Hint: This is required to verify your residence.

### 10. **Current Address (if different)**
* (`current_address`, `text`, optional): If different, enter your current address.
* Hint: If same as permanent address, leave blank.

### 11. **Phone Number**
* (`phone_number`, `text`, required): Enter your phone number as it appears on your official documents.
* Hint: This is required for emergency contact.

### 12. **Email Address**
* (`email`, `email`, optional): Enter your official email address.
* Hint: This is not required, but will help us contact you if needed.

### 13. **Identification**
* (`identification`, `note`, optional): Enter your identification details, if applicable.
* Hint: This is not required, but will help us verify your identity.

### 14. **Type of ID**
* (`id_type`, `select_one`, required): Select the type of identification you possess.
* Hint: Please select one of the options provided.

### 15. **ID Number**
* (`id_number`, `text`, required): Enter your identification number as it appears on your official documents.
* Hint: This is required for verification.

### 16. **ID Issue Date**
* (`id_issue_date`, `date`, optional): Enter your ID issue date.
* Hint: If different from today's date, enter the actual issue date.

### 17. **ID Expiry Date (if applicable)**
* (`id_expiry_date`, `date`, optional): Enter your ID expiry date, if applicable.
* Hint: If not applicable, leave blank.

### 18. **Employment Information**
* (`employment_information`, `note`, optional): Enter your employment details.
* Hint: This is not required, but will help us understand your employment status.

### 19. **Employment Status**
* (`employment_status`, `select_one`, required): Select your employment status as it appears on your official documents.
* Hint: Please select one of the options provided.

### 20. **Occupation**
* (`occupation`, `text`, required): Enter your occupation as it appears on your official documents.
* Hint: This is required to verify your employment status.

### 21. **Employer Name**
* (`employer_name`, `text`, optional): Enter your employer's name.
* Hint: If self-employed or retired, leave blank.

### 22. **Employer Address**
* (`employer_address`, `text`, optional): Enter your employer's address.
* Hint: If self-employed or retired, leave blank.

### 23. **Employer Phone**
* (`employer_phone`, `text`, optional): Enter your employer's phone number.
* Hint: If self-employed or retired, leave blank.

### 24. **Years Employed**
* (`years_employed`, `number`, optional): Enter years employed at this job.
* Hint: If self-employed or retired, leave blank.

### 25. **Monthly Income**
* (`monthly_income`, `number`, required): Enter your monthly income as it appears on your official documents.
* Hint: This is required to verify your financial status.

### 26. **Income Proof**
* (`income_proof`, `select_one`, required): Select if you can provide income proof.
* Hint: Please select one of the options provided.

### 27. **Chit Fund Details**
* (`chit_fund_details`, `note`, optional): Enter your chit fund preferences.
* Hint: This is not required, but will help us understand your preferences.

### 28. **Preferred Chit Fund Group**
* (`chit_fund_group`, `select_one`, required): Select your preferred chit fund group.
* Hint: Please select one of the options provided.

### 29. **Preferred Duration**
* (`chit_duration`, `select_one`, required): Select your preferred duration of chit fund.
* Hint: Please select one of the options provided.

### 30. **Preferred Monthly Installment**
* (`monthly_installment`, `number`, required): Enter the amount you can pay monthly.
* Hint: This is required to determine your installment amount.

### 31. **When to Receive Prize Amount**
* (`prize_preference`, `select_one`, required): Select when you would like to receive the prize amount.
* Hint: Please select one of the options provided.

### 32. **Nomination Details**
* (`nomination_details`, `note`, optional): Enter nominee details.
* Hint: This is not required, but will help us understand your nominee's information.

### 33. **Nominee Name**
* (`nominee_name`, `text`, required): Enter your nominee's name.
* Hint: This is required for nomination purposes.

### 34. **Relationship to Nominee**
* (`nominee_relationship`, `text`, required): Enter your relationship with the nominee.
* Hint: This is required for nomination purposes.

### 35. **Nominee Address (if different)**
* (`nominee_address`, `text`, optional): If different, enter nominee's address.
* Hint: If same as applicant's address, leave blank.

### 36. **Nominee Phone (if different)**
* (`nominee_phone`, `text`, optional): If different, enter nominee's phone number.
* Hint: If same as applicant's phone, leave blank.

### 37. **Guarantor Information**
* (`guarantor_information`, `note`, optional): Enter guarantor's information.
* Hint: This is not required, but will help us understand guarantor's details.

### 38. **Guarantor Name**
* (`guarantor_name`, `text`, required): Enter your guarantor's name.
* Hint: This is required for guarantor purposes.

### 39. **Guarantor Address**
* (`guarantor_address`, `text`, required): Enter your guarantor's address.
* Hint: This is required for guarantor purposes.

### 40. **Guarantor Phone Number**
* (`guarantor_phone`, `text`, required): Enter your guarantor's phone number.
* Hint: This is required for guarantor purposes.

### 41. **Guarantor Occupation**
* (`guarantor_occupation`, `text`, required): Enter your guarantor's occupation.
* Hint: This is required for guarantor purposes.

### 42. **Bank Details**
* (`bank_details`, `note`, optional): Enter bank details.
* Hint: This is not required, but will help us understand bank information.

### 43. **Bank Name**
* (`bank_name`, `text`, required): Enter your bank's name.
* Hint: This is required for bank purposes.

### 44. **Branch Name**
* (`branch_name`, `text`, optional): Enter your bank branch's name.
* Hint: If same as bank name, leave blank.

### 45. **Account Number**
* (`account_number`, `text`, required): Enter your account number as it appears on your official documents.
* Hint: This is required for bank purposes.

### 46. **Account Type**
* (`account_type`, `select_one`, required): Select your account type.
* Hint: Please select one of the options provided.

### 47. **IFSC Code**
* (`ifsc_code`, `text`, optional): Enter your IFSC code.
* Hint: If not applicable, leave blank.

### 48. **References**
* (`references`, `note`, optional): Enter personal references.
* Hint: This is not required, but will help us understand personal references.

### 49. **Reference 1 Name**
* (`reference_1_name`, `text`, required): Enter the name of your first reference.
* Hint: This is required for references purposes.

### 50. **Reference 1 Phone**
* (`reference_1_phone`, `text`, required): Enter the phone number of your first reference.
* Hint: This is required for references purposes.

### 51. **Reference 2 Name**
* (`reference_2_name`, `text`, required): Enter the name of your second reference.
* Hint: This is required for references purposes.

### 52. **Reference 2 Phone**
* (`reference_2_phone`, `text`, required): Enter the phone number of your second reference.
* Hint: This is required for references purposes.

### 53. **Declaration**
* (`declaration`, `select_one`, required): Declare that all information provided is true and correct.
* Hint: Please select one of the options provided.

### 54. **Agree to Chit Fund Rules**
* (`agree_terms`, `select_one`, required): Agree to abide by the chit fund rules and regulations.
* Hint: Please select one of the options provided.

### 55. **Applicant Signature**
* (`applicant_signature`, `text`, required): Enter your digital signature.
* Hint: This is required to confirm your application.

### 56. **Date of Application**
* (`application_date`, `date`, required): Enter the date of application.
* Hint: This is required to track your application history.

Please fill in all required fields with accurate information, and make sure to review your answers carefully before submitting. If you have any doubts or questions, feel free to contact us.

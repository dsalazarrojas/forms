# Charity Fund Recipient Intake Form - Help Guide
## Purpose
This form is used to collect information from individuals or families in need of charity fund assistance.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the demographic information: first name, last name, email address, phone number, date of birth, and mailing address.
2. Provide details about your employment status, monthly income, and household size.
3. Specify the type and amount of assistance you need.
4. Describe your current expenses and any other assistance you have received.
5. Confirm your consent to verify the information provided.

## Field-by-Field Explanation
### First Name
* **First Name** (`first_name`, `text`, **required**): Enter your first name.

### Last Name
* **Last Name** (`last_name`, `text`, **required**): Enter your last name.

### Email Address
* **Email Address** (`email`, `email`, **required**): Enter your contact email address.

### Phone Number
* **Phone Number** (`phone`, `text`, **required**): Enter your contact phone number.

### Date of Birth
* **Date of Birth** (`date_of_birth`, `date`, **required**): Enter your date of birth for eligibility purposes.

### Mailing Address
* **Mailing Address** (`mailing_address`, `text`, **required**): Enter your full mailing address.

### Household Size
* **Household Size** (`household_size`, `number`, **required**): Specify the number of people in your household.

### Number of Dependents
* **Number of Dependents** (`dependents`, `number`, **required**): Specify the number of dependents you have.

### Employment Status
* **Employment Status** (`employment_status`, `select_one`, **required**): Select your current employment status:

  - Employed full-time
  - Employed part-time
  - Self-employed
  - Unemployed
  - Retired
  - Disabled
  - Student

### Total Monthly Income
* **Total Monthly Income** (`monthly_income`, `select_one`, **required**): Select your total monthly income:

  - Under $1000
  - $1000 to $2000
  - $2001 to $3000
  - $3001 to $4000
  - $4001 to $5000
  - Over $5000

### Type of Assistance Needed
* **Type of Assistance Needed** (`assistance_type`, `select_multiple`, **required**): Select the type of assistance you need:

  - Emergency rent assistance
  - Utility bill assistance
  - Food assistance
  - Medical expense help
  - Transportation help
  - Educational support
  - Clothing assistance
  - Other

### Amount of Assistance Needed
* **Amount of Assistance Needed** (`assistance_amount`, `number`, **required**): Specify the amount of assistance you need.

### Urgency Level
* **Urgency Level** (`urgency_level`, `select_one`, **required**): Select the urgency level:

  - Immediate emergency
  - Very urgent
  - Urgent
  - Somewhat urgent
  - Not urgent

### Describe Your Situation
* **Describe Your Situation** (`situation_description`, `text`, **required**): Describe what happened.

### Major Monthly Expenses
* **Major Monthly Expenses** (`current_expenses`, `text`, **required**): Specify your major monthly expenses.

### Other Assistance Received
* **Other Assistance Received** (`other_assistance`, `text`, **optional**): If applicable, specify any other assistance you have received from other sources.

### Can You Provide Supporting Documents
* **Can You Provide Supporting Documents** (`supporting_documents`, `select_one`, **required**): Confirm if you can provide supporting documents:

  - Yes I can provide
  - Some documents
  - No documents available

### How Did You Hear About Us
* **How Did You Hear About Us** (`referral_source`, `select_one`, **optional**): Select how you heard about our organization:

  - Social services
  - Community organization
  - Friend or family
  - Website
  - Religious organization
  - Other

### Consent to Verify Information
* **Consent to Verify Information** (`consent_verification`, `select_one`, **required**): Confirm your consent to verify the information provided:

  - Yes I consent
  - No I do not consent

### Additional Comments
* **Additional Comments** (`additional_comments`, `text`, **optional**): Provide any additional comments or information you feel is relevant to your situation.

### Tips
- Please fill out the form accurately and truthfully to ensure a proper evaluation of your needs.
- If you have any questions or concerns, please contact us for assistance.

<thinking>
To create a help guide for the referral partner signup form, we need to ensure that we understand the form's purpose and the expected user behavior. This form is likely used to register a referral partner with a company, providing essential contact and profile information. The user needs to fill in the required fields accurately to create a new partner record. We should also check if there's any duplication or overlap in the form's purpose with other forms within the system to prevent redundant data entry or potential errors. 
</thinking>

# Referral Partner Signup Form - Help Guide
## Purpose
The referral partner signup form is used to register a referral partner with a company. Fill in the required fields accurately to create a new partner record.

## How To Complete This Form
1. Fill in the first and last name fields with your personal details.
2. Enter your company name (if applicable).
3. Provide your email address (make sure it's a valid email address).
4. Enter your phone number (including your area code).
5. Enter your job title and job description (if applicable).
6. Select your job title role (if applicable).
7. Choose your company type (if applicable).
8. Select your partner type (Reseller, Affiliate, or Other).
9. Enter your location (city or state).
10. Fill in your website (if applicable).
11. Add your LinkedIn and Twitter profiles (if applicable).
12. Enter your referral URL (if applicable).
13. Select your partner status (Active, Inactive, or Pending).
14. Fill in the created date, updated date, and created time (if applicable).
15. Add any additional notes.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Company** (`company`, text, optional): Enter your company name (if applicable).
* **Email** (`email`, email, required): Enter a valid email address.
* **Phone** (`phone`, text, required): Enter your phone number including your area code.
* **Job Title** (`job_title`, text, optional): Enter your job title.
* **Job Description** (`job_description`, text, optional): Enter a brief description of your job.
* **Job Title Role** (`job_title_role`, text, optional): Enter your job title role (if applicable).
* **Company Type** (`company_type`, text, optional): Choose your company type.
* **Partner Type** (`partner_type`, select_multiple, required): Select one or more partner types (Reseller, Affiliate, or Other).
* **Location** (`location`, text, required): Enter your city or state.
* **Website** (`website`, text, optional): Enter your website URL (if applicable).
* **LinkedIn** (`linkedin`, text, optional): Enter your LinkedIn profile URL.
* **Twitter** (`twitter`, text, optional): Enter your Twitter profile URL.
* **Referral URL** (`referral_url`, text, optional): Enter your referral URL.
* **Partner Status** (`partner_status`, select_one, required): Select your partner status (Active, Inactive, or Pending).
* **Created At** (`created_at`, date, optional): The date your profile was created.
* **Updated At** (`updated_at`, date, optional): The date your profile was last updated.
* **Created By** (`created_by`, text, optional): The person who created your profile.
* **Updated By** (`updated_by`, text, optional): The person who last updated your profile.
* **Updated At Time** (`updated_at_time`, time, optional): The time your profile was last updated.
* **Notes** (`notes`, text, optional): Add any additional notes.
* **Submitted At** (`submitted_at`, date, optional): The date your profile was submitted.
* **Created At Time** (`created_at_time`, time, optional): The time your profile was created.
* **Active Partner Status** (`partner_status`, select_one, required): This field is required to determine the status of your partner account.
* **Active Partner Status Options** (`partner_status_options`, select_multiple, required): This field is required to determine the status of your partner account. 

Note: This form guide is based on the provided YAML fields and is subject to change based on the actual form requirements and fields.

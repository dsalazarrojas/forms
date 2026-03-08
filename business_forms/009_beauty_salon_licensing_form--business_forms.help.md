<thinking>
To determine the purpose of this form, I'll analyze the fields and their labels. The form appears to be for licensing a beauty salon, which requires providing business details, owner information, and licensing application details. The form likely helps the relevant authorities verify the legitimacy of the salon and ensure it complies with regulations.

To confirm the purpose, let's consider the fields:

*   `legal_business_name`, `dba_name`, and `tax_id_number` suggest a focus on the salon's registration and identification.
*   `business_address` and `business_phone` indicate the salon's contact information.
*   `owner_full_name`, `owner_email`, and `insurance_provider` point to the owner's information and liability insurance.
*   `services_offered` and `salon_capacity` suggest a focus on the salon's offerings and capacity.
*   `square_footage` and `submission_date` imply a focus on facility details and application timing.

The form likely aims to collect comprehensive information about the beauty salon, including its business, owner, and licensing details. This analysis confirms the form's purpose: to facilitate the licensing process for beauty salons.

After analyzing the fields, I'll create the help guide based on the provided YAML fields. Here is the help guide:

# Beauty Salon Licensing Form - Help Guide
## Purpose

This form is used for beauty salons to provide necessary information for the licensing process. It collects details about the salon's business, owner, and licensing application.

## How To Complete This Form

1.  Complete all required fields marked as `required` in the form.
2.  Enter the salon's business details in the `legal_business_name` field.
3.  Provide the doing business as (DBA) name if different from the legal name in the `dba_name` field.
4.  Enter the salon's physical address in the `business_address` field.
5.  Enter the salon's phone number in the `business_phone` field.
6.  Complete the owner's information by entering their full name in the `owner_full_name` field.
7.  Enter the owner's email address in the `owner_email` field.
8.  Provide the Federal Tax ID (EIN) number in the `tax_id_number` field.
9.  Select the application type from the provided options in the `application_type` field.
10.  Select all services offered by the salon by selecting multiple options in the `services_offered` field.
11.  Enter the number of workstations or treatment rooms in the `salon_capacity` field.
12.  Enter the total square footage of the facility in the `square_footage` field.
13.  Enter the professional liability insurance provider and policy number in the `insurance_provider` and `policy_number` fields respectively.
14.  Select the date of application in the `submission_date` field.
15.  Certify that all information provided is true and accurate by selecting the correct option in the `certification_of_accuracy` field.

## Field-by-Field Explanation

*   **Legal Business Name** (`legal_business_name`, text, required): Enter the name of your business as registered with the state.
*   **Doing Business As (DBA)** (`dba_name`, text, optional): If your business has a different name from the legal name, enter it here.
*   **Business Physical Address** (`business_address`, text, required): Enter the address of your business.
*   **Business Phone Number** (`business_phone`, text, required): Enter your business phone number.
*   **Owner Full Name** (`owner_full_name`, text, required): Enter your full name.
*   **Owner Email Address** (`owner_email`, email, required): Enter your email address.
*   **Federal Tax ID (EIN)** (`tax_id_number`, text, required): Enter your Federal Tax ID (EIN) number.
*   **Application Type** (`application_type`, select_one, required): Select the type of application you are submitting.
*   **Services to be Offered** (`services_offered`, select_multiple, required): Select all services offered by your salon.
*   **Number of Work Stations** (`salon_capacity`, number, required): Enter the total number of workstations or treatment rooms in your salon.
*   **Total Square Footage of Facility** (`square_footage`, number, required): Enter the total square footage of your facility.
*   **Professional Liability Insurance Provider** (`insurance_provider`, text, required): Enter the name of your professional liability insurance provider.
*   **Insurance Policy Number** (`policy_number`, text, required): Enter the policy number for your professional liability insurance.
*   **Date of Application** (`submission_date`, date, required): Select the date of your application.
*   **I certify that all information is true and accurate** (`certification_of_accuracy`, select_one, required): Certify that all information provided is true and accurate by selecting the correct option.

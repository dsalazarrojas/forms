<thinking>
This form is used to collect information on an individual's vaccination status and verification method. This form should only be completed for those who have received a vaccination or have not received one, or whose vaccination status is unknown. Please note that the form is designed for individual data collection and should not be used for group or bulk data collection.
</thinking>

# Vaccination Status And Verification Form - Help Guide
## Purpose
This form is used to collect information on an individual's vaccination status and verification method.

## How To Complete This Form
To complete this form, follow these steps:

1.  Choose the correct vaccination status:
    *   Select one of the options: "Vaccinated", "Not vaccinated", or "Unknown".
2.  Choose the method used for verification:
    *   Select one of the options: "Medical Record", "Laboratory Test", "Certificate", or "Unknown".
3.  Enter the vaccination dose number (if applicable):
    *   Enter the number of doses of the vaccine administered.
4.  Enter the vaccine brand:
    *   Type the brand of the vaccine received.
5.  Enter the date and time of vaccination:
    *   Select the date and time when the vaccination was administered.
6.  Enter the date and time of verification:
    *   Select the date and time when the vaccination status was verified.
7.  Add any additional comments:
    *   Provide any additional information about the vaccination or verification process.
8.  Enter contact information (if applicable):
    *   Enter the email address or phone number of the individual.

## Field-by-Field Explanation

*   **vaccination_status** (`user_input_vaccination_status`, select_one): Indicates the individual's vaccination status. Choose one of the options: "Vaccinated", "Not vaccinated", or "Unknown".
*   **verification_method** (`user_input_verification_method`, select_one): Describes the method used to verify the vaccination status. Select one of the options: "Medical Record", "Laboratory Test", "Certificate", or "Unknown".
*   **vaccination_dose_number** (`user_input_dose_number`, number): Enter the number of doses of the vaccine administered.
*   **vaccine_brand** (`user_input_vaccine_brand`, text): Type the brand of the vaccine received.
*   **vaccination_date** (`user_input_vaccination_date`, date): Select the date when the vaccination was administered.
*   **vaccination_time** (`user_input_vaccination_time`, time): Select the time when the vaccination was administered.
*   **verification_date** (`user_input_verification_date`, date): Select the date when the vaccination status was verified.
*   **verification_time** (`user_input_verification_time`, time): Select the time when the vaccination status was verified.
*   **comments** (`user_input_comments`, note): Provide any additional information about the vaccination or verification process.
*   **email** (`user_input_email`, email): Enter the email address of the individual.
*   **phone** (`user_input_phone`, text): Enter the phone number of the individual.
*   **has_taken_additional_vaccination** (`user_input_repeated_vaccination`, select_one): Indicates if the individual has taken additional vaccinations. Choose one of the options: "True", "False", or "Unknown".

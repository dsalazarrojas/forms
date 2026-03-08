# Bail Jumping Notification Form - Help Guide
## Purpose
This form is designed to report a missed court appearance by a defendant, providing details about the appearance date, time, and circumstances. It is used to notify the relevant authorities and facilitate the defendant's return to court.

## How To Complete This Form
To complete this form, please follow these steps:

1. Start by reviewing the form's purpose and fields.
2. Fill in the required fields with the accurate and relevant information.
3. Ensure that all necessary fields are filled out, as indicated by the asterisk (\*) symbol next to each required field.

## Field-by-Field Explanation

* **Reporting Agency or Office** (`reporting_agency`, text, *): The name of the reporting agency or office that is handling the case. This field is required.
* **Report Date** (`report_date`, date, *): The date that the defendant failed to appear in court. This field is required and should be formatted as mm/dd/yyyy. For example, 01/01/2024.
* **Reporting Officer Name** (`reporting_officer`, text, *): The name of the officer submitting the report. This field is required.
* **Officer Badge Number** (`officer_badge`, text, ): The badge number of the reporting officer. This field is optional.
* **Defendant Full Name** (`defendant_name`, text, *): The full name of the defendant. This field is required.
* **Date of Birth** (`defendant_dob`, date, *): The date of birth of the defendant. This field is required and should be formatted as mm/dd/yyyy. For example, 01/01/1960.
* **Last Known Address** (`defendant_address`, text, *): The defendant's last known address. This field is required.
* **Phone Number (if available)** (`defendant_phone`, phone, ): The phone number of the defendant, if available. This field is optional.
* **Known Aliases or Nicknames** (`alias_names`, text, ): Any known aliases or nicknames of the defendant. This field is optional.
* **Case Number** (`case_number`, text, *): The number of the court case. This field is required.
* **Court Name** (`court_name`, text, *): The name of the court where the defendant failed to appear. This field is required.
* **Charges** (`charges`, text, *): The offense(s) that the defendant is charged with. This field is required.
* **Original Bail Amount** (`bail_amount`, decimal, *): The amount of bail originally set. This field is required and should be formatted as a decimal value. For example, 100.00.
* **Bail Conditions** (`bail_conditions`, text, ): Any special conditions of the bail release. This field is optional.
* **Scheduled Court Appearance Date** (`scheduled_appearance_date`, date, *): The date that the defendant was scheduled to appear in court. This field is required and should be formatted as mm/dd/yyyy. For example, 02/01/2024.
* **Scheduled Appearance Time** (`appearance_time`, time, *): The time that the defendant was scheduled to appear in court. This field is required.
* **Reason for Failure to Appear** (`failure_to_appear_reason`, select_one, *): The reason for the defendant's failure to appear, from the following options: No Show, Unknown Location, Defendant Fled, Communication Failure, Unknown.
* **Has a Warrant Been Issued?** (`warrant_issued`, select_one, *): Whether a warrant has been issued, from the following options: Yes, No, Pending.
* **Warrant Number (if issued)** (`warrant_number`, text, ): The number of the warrant, if issued. This field is optional.
* **Additional Notes or Comments** (`additional_notes`, text, ): Any additional comments or notes that the reporting officer wants to include. This field is optional.

## Tips

* Ensure that all required fields are filled out accurately and thoroughly.
* If you are unsure about any field, refer to the provided hints or contact the relevant authorities for guidance.
* Double-check your responses before submitting the form to avoid errors.

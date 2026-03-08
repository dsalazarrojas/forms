# Batch Consistency Validation Report Form - Help Guide
## Purpose
This form is designed to be completed by a validation officer to verify the consistency of a batch of products. It gathers information on the batch's metadata, validation officer, batch details, consistency parameters, and overall consistency status.

## How To Complete This Form

1. Begin by filling out the metadata section, which includes the report title and any other relevant details.
2. Enter your name and role as the validation officer in the designated field.
3. Fill out the batch details section with the batch reference number and date of validation.
4. In the consistency parameters section, enter the viscosity and pH level of the batch, as well as the color matching result.
5. Determine the overall consistency status of the batch and enter it in the designated field.
6. If there are any deviations or failures, provide a summary in the failures summary field.
7. If a corrective action has been taken, enter it in the corrective action field.
8. Specify if a follow-up validation is required.
9. Finally, certify that the report is accurate and complete by selecting the appropriate option.

## Field-by-Field Explanation

* **Validation Officer Name** (`validation_officer`, text, required): Enter your full name as the validation officer who completed this report.
* **Batch Reference Number** (`batch_reference_number`, text, required): Enter the unique reference number of the batch being validated.
* **Date of Validation** (`validation_date`, date, required): Enter the date on which the validation was performed.
* **Production Line ID** (`production_line_id`, text, required): Enter the production line ID of the batch.
* **Parameter - Viscosity (cP)** (`parameter_viscosity`, number, required): Enter the expected range of viscosity, which is 1200-1500.
* **Parameter - pH Level** (`parameter_ph_level`, number, required): Enter the expected range of pH level, which is 6.5-7.5.
* **Color Matching Result** (`parameter_color_match`, select_one, required): Select the color matching result, which should be either "Matches Standard", "Minor Variance", or "Significant Variance (Fail)".
* **Overall Consistency Status** (`overall_consistency_status`, select_one, required): Determine the overall consistency status, which should be either "Validated - Consistent", "Marginal - Conditional Release", or "Invalid - Inconsistent".
* **Summary of Deviations or Failures** (`failures_summary`, text, optional): Enter a summary of any deviations or failures.
* **Corrective Action Taken** (`corrective_action_taken`, text, optional): Enter any corrective action taken if deviations or failures were found.
* **Is a follow-up validation required?** (`follow_up_required`, select_one, required): Specify if a follow-up validation is required, which should be either "True" or "False".
* **I certify that this report is accurate and complete** (`signature_acknowledgment`, select_one, required): Select the option "I Certify" to confirm the report's accuracy and completeness.
* **Final Approval Date** (`final_approval_date`, date, required): Enter the date on which the report is finalized and approved.

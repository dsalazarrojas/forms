# Construction Project Discharge Form - Help Guide
## Purpose
The Construction Project Discharge Form is used to document the completion of a construction project and ensure that all necessary steps and checks are completed before officially discharging the project. This form is essential for closing out the project's administrative and financial aspects, ensuring that the project is fully settled and completed.

## How To Complete This Form

1.  Please fill out the form with the required information, which includes:
   *   Project identification details (project name, location, and contract number)
   *   Official discharge/completion date
   *   Certificate of Substantial Completion Issued status
   *   Punch list items completion status
   *   Final building inspection passed status
   *   Documentation and close-out handover details
   *   Final as-built drawings handed over to client
   *   O&M manuals and warranties handed over to client
   *   List of spare materials left on site
   *   Financial discharge details
   *   Retainage release date
   *   Client acknowledgment details
   *   Client representative name
   *   Overall client satisfaction rating
   *   Authorized by name and title
   *   Date signed

## Field-by-Field Explanation

* **Full Project Name** (`project_name`, text, required): Enter the full name of the project, which should match the project's contract or agreement.
* **Project Location/Address** (`project_location`, text, required): Enter the project's location or address, which should match the project's site or site address.
* **Contract/Job Number** (`contract_number`, text, required): Enter the project's contract or job number, which is a unique identifier for the project.
* **Official Discharge/Completion Date** (`discharge_date`, date, required): Enter the official discharge or completion date of the project, which marks the end of the project.
* **Certificate of Substantial Completion Issued** (`substantial_completion_cert`, select_one, required):
	+   Choose "Yes - Attached/Issued" if a certificate has been issued.
	+   Choose "Pending Final Review" if the certificate is pending final review.
	+   Choose "N/A" if the certificate is not applicable.
* **All Punch List Items Fully Rectified** (`punch_list_complete`, select_one, required):
	+   Choose "Yes - All items closed" if all punch list items have been completed.
	+   Choose "No - Minor items pending" if there are still some minor items pending.
	+   Choose "N/A" if there are no punch list items.
* **Final Building Inspection Passed** (`final_inspection_passed`, select_one, required):
	+   Choose "Yes - Passed 100%" if the final inspection passed without any issues.
	+   Choose "Passed with Minor Corrections" if there were minor issues during the final inspection.
	+   Choose "Failed - Re-inspection scheduled" if the final inspection failed and re-inspection is scheduled.
	+   Choose "N/A" if the final inspection is not applicable.
* **Final As-built Drawings Handed Over to Client** (`as_built_docs_handed_over`, select_one, required):
	+   Choose "True" if the final as-built drawings have been handed over to the client.
	+   Choose "False" if the drawings have not been handed over.
	+   Choose "N/A" if the drawings are not applicable.
* **O&M Manuals and Warranties Handed Over** (`manual_om_handover`, select_one, required):
	+   Choose "True" if the O&M manuals and warranties have been handed over to the client.
	+   Choose "False" if the manuals and warranties have not been handed over.
	+   Choose "N/A" if the manuals and warranties are not applicable.
* **List Spare Materials or Attic Stock Left on Site** (`materials_spares_left_on_site`, text, optional): If there are spare materials or attic stock left on site, describe them here.
* **Final Project Invoice Approved for Payment** (`final_invoice_approved`, select_one, required):
	+   Choose "True" if the final project invoice has been approved for payment.
	+   Choose "No - Pending Final Calculation" if the invoice is pending final calculation.
* **Target Date for Retainage Release** (`retainage_release_date`, date, optional): If the retainage release date is not yet determined, leave this field empty.
* **Client Acknowledgment** (`client_ack`, note, optional): Add any additional information or comments from the client regarding the project's completion.
* **Client Representative Name** (`client_rep_name`, text, required): Enter the name and title of the client's representative.
* **Overall Client Satisfaction Rating** (`project_satisfaction_rating`, number, required): Rate the client's satisfaction with the project completion, on a scale of 1-10.
* **Additional Discharge or Close-out Notes** (`additional_discharge_notes`, text, optional): Add any additional information or comments regarding the project's completion.
* **Authorized By (Name and Title)** (`discharge_officer_name`, text, required): Enter the name and title of the person authorizing the project's discharge.
* **Date Signed** (`submission_date`, date, required): Enter the date when the form is signed and submitted.

## Tips

*   Please ensure that all required fields are completed before submitting the form.
*   If a field is not applicable, choose "N/A" instead of leaving it blank.
*   Use the "Additional Discharge or Close-out Notes" field to add any additional comments or information regarding the project's completion.
*   Verify that all necessary steps and checks are completed before officially discharging the project.

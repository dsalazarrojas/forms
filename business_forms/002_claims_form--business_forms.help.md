# Claims Form - Help Guide
## Purpose
This form is designed to collect essential business claims information for various types of incidents. Please ensure that the information is accurate and complete as possible.

## How To Complete This Form
- Fill out the form in its entirety, ensuring all required fields are completed.
- Enter the business name as it appears on your official records.
- Provide a valid contact email and phone number for the business.
- Select the type of claim from the dropdown menu.
- Enter the date of the incident in the correct format (YYYY-MM-DD).
- Enter a detailed description of the loss or incident.
- Enter an estimated claim amount.
- If applicable, provide witness names and contact information.
- If the police or local authority was notified, select 'Yes'.

## Field-by-Field Explanation
- **Business Name** (`business_name`, text, required): Enter the name of your business as it appears on your official records.
- **Contact Person** (`contact_person`, text, required): Enter the name of the person handling the claim.
- **Contact Email** (`contact_email`, email, required): Enter a valid email address.
- **Contact Phone** (`contact_phone`, text, required): Enter a valid phone number.
- **Type of Claim** (`claim_type`, select_one, required): Select the type of claim from the dropdown menu.
  - Property Damage: For damage to company property.
  - Liability: For accidents or injuries involving employees or customers.
  - Business Interruption: For disruptions to business operations.
  - Theft: For stolen goods or assets.
  - Workers Compensation: For employee injuries or illnesses.
  - Other: For other types of claims not listed.
- **Date of Incident** (`incident_date`, date, required): Enter the date of the incident in YYYY-MM-DD format.
- **Incident Location** (`incident_location`, text, required): Enter the location where the incident occurred.
- **Description of Loss or Incident** (`description_of_loss`, text, required): Provide a detailed account of what happened.
- **Estimated Claim Amount** (`estimated_claim_amount`, number, required): Enter the estimated amount of the claim.
- **Are there any witnesses?** (`witness_available`, select_one, required): Select 'Yes' if there are witnesses, 'No' otherwise.
- **Witness Names and Contact Info** (`witness_names`, text, optional): If there are witnesses, enter their names and contact information.
- **Was the police or local authority notified?** (`police_notified`, select_one, required): Select 'Yes' if notified, 'No' otherwise.
- **Report Reference Number** (`report_reference`, text, optional): If applicable, enter the police or local authority reference number.
- **Additional Comments** (`additional_comments`, text, optional): Add any additional information or comments about the claim.

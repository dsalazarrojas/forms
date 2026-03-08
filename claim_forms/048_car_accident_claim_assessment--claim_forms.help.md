<thinking>...</thinking>

# Car Accident Claim Assessment - Help Guide
## Purpose
This form is used to conduct a thorough assessment of a car accident claim. It gathers information about the claims adjuster, claimant, and accident details to determine the liability, damage, and injury assessment of the claim.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the claims adjuster's information, including their name and employee ID.
2. Enter the claimant's name, policy number, and claim type.
3. Provide details about the accident, including the date, location, and weather conditions.
4. Determine the fault of the accident and the claimant's fault percentage.
5. Assess the damage to the vehicle, if any, and provide a repair estimate.
6. Evaluate the total loss determination, if applicable.
7. Report any injuries sustained during the accident.
8. Provide medical treatment information, if applicable.
9. List any documents received during the assessment.
10. Specify any outstanding documentation needed.

## Field-by-Field Explanation

* **Claims Adjuster Information** (`adjuster_name`, `text`, **required**): Enter the name of the claims adjuster who is conducting the assessment.
* **Claims Adjuster Information** (`adjuster_id`, `text`, **required**): Enter the employee ID of the claims adjuster.
* **Insurance Company Name** (`company_name`, `text`, **required**): Enter the name of the insurance company.
* **Assessment Date** (`assessment_date`, `date`, **required**): Enter the date of the assessment.
* **Claim Number** (`claim_number`, `text`, **required**): Enter the reference number for the claim.
* **Claimant Information** (`claimant_name`, `text`, **required**): Enter the name of the claimant (insured).
* **Policy Number** (`policy_number`, `text`, **required**): Enter the policy number for the claimant.
* **Claim Type** (`claim_type`, `select_one`, **required**): Select the type of claim (First party, Third party, Uninsured motorist, Underinsured motorist, or Other).
* **Date of Accident** (`accident_date`, `date`, **required**): Enter the date of the accident.
* **Location of Accident** (`accident_location`, `text`, **required**): Enter the street address where the accident occurred.
* **Weather Conditions** (`weather_conditions`, `select_one`, **required**): Select the weather conditions at the time of the accident (Clear, Cloudy, Rainy, Snowy, Icy, Foggy, or Other).
* **Road Conditions** (`road_conditions`, `select_one`, **required**): Select the road conditions at the time of the accident (Dry, Wet, Icy, Pothole, Poor maintenance, or Other).
* **Fault Determination** (`fault_determination`, `select_one`, **required**): Select who was at fault in the accident (Claimant, Third party, Shared, Unable to determine, or Pending investigation).
* **Claimant Fault Percentage** (`fault_percentage`, `number`, **optional**): Enter the percentage of fault attributed to the claimant.
* **Contributing Factors** (`negligence_factors`, `select_multiple`, **optional**): Select any contributing factors to the accident (Speeding, Distracted driving, Impaired driving, Reckless driving, Failure to yield, Following too closely, Poor visibility, Vehicle defect, or Other).
* **Vehicle Damage Rating** (`vehicle_damage_rating`, `select_one`, **required**): Select the severity of vehicle damage (Minimal, Minor, Moderate, Major, Total loss).
* **Repair Estimate (if available)** (`repair_estimate`, `number`, **optional**): Enter a dollar amount for repair estimate, if applicable.
* **Total Loss Determination (if applicable)** (`total_loss_determination`, `select_one`, **optional**): Select whether the vehicle was a total loss.
* **Injuries Reported?** (`injuries_reported`, `select_one`, **required**): Select whether injuries were reported (Yes, No, Unclear).
* **Injury Severity Assessment** (`injury_severity`, `select_one`, **optional**): Select the severity of injuries (Minor, Moderate, Severe, Critical, Not applicable).
* **Medical Treatment Received?** (`medical_treatment`, `select_one`, **required**): Select whether medical treatment was received (Yes, No, Pending).
* **Documents Received** (`documents_received`, `select_multiple`, **optional**): Select all documents received (Police report, Witness statements, Photos, Medical reports, Repair estimates, Proof of loss, or Other).
* **Outstanding Documentation Needed** (`pending_documentation`, `text`, **optional**): List any outstanding documents needed. 

Note: This help guide is for internal use and is based on the provided YAML fields.

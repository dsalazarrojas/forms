# Health Insurance Declaration Form - Help Guide
## Purpose
This form is used to collect information about a patient's insurance coverage. It's meant to be completed by patients or their representatives and will help the organization understand their insurance details.

## How To Complete This Form
To complete this form, follow these steps:

* Review the form carefully to ensure you have all the necessary information.
* Fill in the required fields, marked with an asterisk (\*).
* If you're unsure about any field, try to best-effort to provide the most accurate information available to you.
* Submit the form once you have completed all the required fields.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, select_one, required): This field requires you to select one of the provided options, specifying which option best describes the patient's status.
  * Option 1: This is the first available option for patient status.
  * Option 2: This is the second available option for patient status.
  * Option 3: This is the third available option for patient status.

* **Insurance Plan** (`insurance_plan`, select_multiple, required): This field allows you to select one or more insurance plans that apply to the patient.
  * Option 1: This is the first available insurance plan.
  * Option 2: This is the second available insurance plan.
  * Option 3: This is the third available insurance plan.

* **Coverage Start Date** (`coverage_start_date`, date, required): This field is used to enter the date when the insurance coverage started.
* **Policy Holder Information** (`policy_holder`, text, required): This field is used to enter the name of the policy holder.
* **Policy Holder Contact Information** (`policy_holder_contact_info`, text, required): This field is used to enter the contact information of the policy holder.
* **Coverage End Date** (`coverage_end_date`, date, required): This field is used to enter the date when the insurance coverage ends.
* **Policy Holder Phone** (`policy_holder_phone`, text, required): This field is used to enter the phone number of the policy holder.
* **Policy Holder Email** (`policy_holder_email`, email, required): This field is used to enter the email of the policy holder.
* **Policy Holder Relationship** (`policy_holder_relationship`, text, required): This field is used to enter the relationship of the policy holder to the patient.

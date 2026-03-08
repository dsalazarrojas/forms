# svch_encounterengagereferlink - Help Guide
## Purpose
This form is used to record patient referral information for healthcare facilities.

## How To Complete This Form

To complete this form, follow these steps:

1. Ensure that you are entering information for a patient who has been referred to a facility for care.
2. Enter the date of the referral in the `Refer Date` field.
3. Enter the time of the referral in the `Refer Time` field.
4. Indicate if a `Provider` was involved in the referral (`Yes` or `No`).
5. If a `Provider` was involved, enter their `Patient Referral Number`.
6. Enter the patient's `Name`, `Date of Birth` (`DOB`), and `Gender`.
7. Select the `Facility Type` (`Hospital`, `Clinic`, `Outpatient`, or `Other`) and enter the `Facility Location`.
8. Enter the `Department` where the patient was referred to.
9. Enter the patient's `Condition`, `Status`, and `Reason for Visit`.
10. Select the patient's `Age`.
11. Select the patient's `Race`, `Ethnicity`, and `Language`.
12. Select the patient's `Marital Status`.
13. Enter the `Facility Contact Person`, `Facility Contact Relationship`, `Facility Phone`, `Facility Email`, and `Facility Fax` fields if applicable.

## Field-by-Field Explanation

* **Refer Date** (`1`, `date`, required): Enter the date of the referral.
* **Refer Time** (`2`, `time`, required): Enter the time of the referral.
* **Provider** (`3`, `select_one`, optional): Indicate if a provider was involved in the referral.
* **Patient Referral Number** (`4`, `number`, optional): Enter the patient's referral number if a provider was involved.
* **Patient Name** (`5`, `text`, optional): Enter the patient's name.
* **Patient DOB** (`6`, `date`, optional): Enter the patient's date of birth.
* **Provider Name** (`7`, `text`, optional): Enter the provider's name if a provider was involved.
* **Facility ID** (`8`, `text`, optional): Enter the facility's ID.
* **Facility Type** (`9`, `select_multiple`, optional): Select the type of facility where the patient was referred to (`Hospital`, `Clinic`, `Outpatient`, or `Other`).
* **Facility Location** (`10`, `text`, optional): Enter the facility's location.
* **Department** (`11`, `text`, optional): Enter the department where the patient was referred to.
* **Patient Condition** (`12`, `text`, optional): Enter the patient's condition.
* **Patient Status** (`13`, `text`, optional): Enter the patient's status.
* **Reason for Visit** (`14`, `text`, optional): Enter the reason for the visit.
* **Patient Gender** (`15`, `select_one`, optional): Select the patient's gender.
* **Patient Age** (`16`, `number`, optional): Enter the patient's age.
* **Patient Race** (`17`, `select_multiple`, optional): Select the patient's race.
* **Patient Ethnicity** (`18`, `select_multiple`, optional): Select the patient's ethnicity.
* **Patient Language** (`19`, `select_one`, optional): Select the patient's language.
* **Patient Marital Status** (`20`, `select_multiple`, optional): Select the patient's marital status.
* **Facility Contact Person** (`21`, `text`, optional): Enter the facility contact person's name.
* **Facility Contact Relationship** (`22`, `text`, optional): Enter the facility contact person's relationship to the facility.
* **Facility Phone** (`23`, `text`, optional): Enter the facility's phone number.
* **Facility Email** (`24`, `email`, optional): Enter the facility's email address.
* **Facility Fax** (`25`, `text`, optional): Enter the facility's fax number.

Note: All fields are optional unless specified otherwise by the form designer.

# AV Fistula Access Assessment Form - Help Guide
## Purpose
The purpose of this form is to assess the AV fistula access site after cannulation has been performed. This form helps clinicians evaluate the patient's condition, assess the fistula's maturity, and determine the next course of action for the patient.

## How To Complete This Form
To complete this form, follow the instructions on each page to provide accurate and detailed information about the patient's condition and the fistula access site.

## Field-by-Field Explanation

* **Patient full name** (`patient_full_name`, text, required): Please enter the patient's full name as it appears on their medical record.
* **Patient date of birth** (`patient_date_of_birth`, date, required): Enter the patient's date of birth in YYYY-MM-DD format (e.g., 1995-02-01).
* **Medical record number** (`medical_record_number`, text, required): Enter the patient's medical record number as it appears on their medical record.
* **Date of assessment** (`assessment_date`, date, required): Enter the date and time of the assessment in YYYY-MM-DD format (e.g., 2023-03-01 14:00).
* **Name of assessing clinician** (`assessing_clinician`, text, required): Enter the name of the clinician performing the assessment.
* **Location of AV fistula** (`fistula_location`, select_one, required): Select the location of the fistula:
	+ Left forearm (radiocephalic)
	+ Right forearm (radiocephalic)
	+ Left upper arm (brachiocephalic)
	+ Right upper arm (brachiocephalic)
	+ Left upper arm (brachiobasilic)
	+ Right upper arm (brachiobasilic)
	+ Other
* **Fistula maturity status** (`fistula_maturity`, select_one, required): Select the maturity status of the fistula:
	+ Mature - ready for cannulation
	+ Developing - not yet mature
	+ Failed - requires revision
	+ Unknown
* **Is a thrill present on palpation** (`thrill_present`, select_one, required): Select if a continuous vibration is felt over the fistula:
	+ Yes - strong
	+ Yes - weak
	+ No
* **Is a bruit audible on auscultation** (`bruit_present`, select_one, required): Select if a continuous humming sound is heard with a stethoscope:
	+ Yes - continuous
	+ Yes - intermittent
	+ No
* **Are there signs of infection at the access site** (`signs_of_infection`, select_one, required): Select if any signs of infection are present:
	+ None
	+ Redness
	+ Swelling
	+ Warmth
	+ Drainage or discharge
	+ Multiple signs present
* **Are there signs of stenosis** (`signs_of_stenosis`, select_one, required): Select if any signs of stenosis are present:
	+ None observed
	+ Prolonged bleeding post-dialysis
	+ Difficulty with cannulation
	+ Elevated venous pressure
	+ Arm swelling
* **Cannulation technique used** (`cannulation_technique`, select_one, required): Select the cannulation technique used:
	+ Rope ladder
	+ Buttonhole
	+ Area puncture
	+ Not applicable
* **Needle gauge used** (`needle_gauge`, select_one, optional): Select the needle gauge used:
	+ 15 gauge
	+ 16 gauge
	+ 17 gauge
	+ Other
* **Blood flow rate achieved (mL/min)** (`blood_flow_rate`, number, required): Enter the blood flow rate achieved in milliliters per minute.
* **Complications observed during access** (`complications_observed`, select_multiple, required): Select all complications observed during access:
	+ None
	+ Hematoma
	+ Infiltration
	+ Prolonged bleeding
	+ Clotting
	+ Pain at access site
* **Is a referral to vascular surgery needed** (`referral_needed`, select_one, required): Select if a referral to vascular surgery is needed:
	+ Yes
	+ No
	+ Already referred
* **Recommended date for next assessment** (`next_assessment_date`, date, optional): Enter the recommended date for the next assessment.
* **Additional clinical notes** (`additional_notes`, text, optional): Record any other observations or concerns about the patient's condition.

Note: Please answer all required fields.

# first_aid_risk_assessment_form - Help Guide
## Purpose
The first aid risk assessment form is designed to evaluate the first aid risk level and facilities' preparedness in a given environment.

## How To Complete This Form
1. Start by entering the facility name in the "Facility Name" field.
2. Answer the question about having a first aid kit by selecting "First Aid Kit" or "No First Aid Kit".
3. Select all applicable first aid supplies and trained personnel you have in the facility.
4. Determine the first aid risk level by choosing from the options "Low", "Moderate", or "High".
5. Identify the first aid risk areas by selecting all relevant options from "Floor", "Office", "Restroom", or "Other".
6. Choose the frequency of first aid inspections by selecting from "Daily", "Weekly", "Monthly", "Quarterly", or "Never".
7. Provide a description of the first aid supplies location, if applicable.
8. Briefly describe the first aid risk, if applicable.
9. Add any additional comments about first aid risks, if necessary.

## Field-by-Field Explanation

* **Facility Name** (`facility_name`, text, required): Enter the name of the facility where this assessment is being performed.
* **Has First Aid Kit** (`has_first_aid_kit`, select_one, required): Select "First Aid Kit" if you have a first aid kit available.
* **Has First Aid Supplies** (`has_first_aid_supplies`, select_multiple, required): List all first aid supplies you have, such as bandages, antiseptic wipes, etc.
* **Has First Aid Trained Person** (`has_first_aid_trained_person`, select_one, required): Select "First Aid Trained Person" if you have a trained first aid provider on staff.
* **First Aid Supplies Description** (`first_aid_supplies_description`, text, required): Describe the first aid supplies you have on hand.
* **First Aid Risk Level** (`risk_level`, select_one, required): Choose the level of first aid risk, with "Low" being the lowest and "High" being the highest.
* **First Aid Risk Area** (`first_aid_risk_area`, select_multiple, required): Identify all areas of the facility where first aid risks are present.
* **First Aid Inspection Frequency** (`first_aid_inspection_frequency`, select_one, required): Select the frequency of first aid inspections, from "Daily" to "Never".
* **First Aid Supplies Location** (`first_aid_supplies_location`, text, required): Describe the location of your first aid supplies.
* **First Aid Risk Description** (`first_aid_risk_description`, text, required): Provide a brief description of the first aid risk, if applicable.
* **First Aid Risk Comment** (`first_aid_risk_comment`, text, optional): Add any additional comments or concerns about first aid risks.

## Tips
* Be honest and accurate when completing this form.
* Take your time to carefully review and answer each question.
* If you are unsure about any question, please ask for clarification.
* This form is for internal use only and should not be shared outside the facility without permission.

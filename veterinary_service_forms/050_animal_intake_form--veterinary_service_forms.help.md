<thinking>...</thinking>

# Animal Intake Form - Help Guide
## Purpose
This form is used to gather essential information about the animals brought to the shelter, ensuring their proper care and attention. It provides a comprehensive record of the animal's intake details, including physical condition, medical history, and behavioral observations.

## How To Complete This Form
To complete this form accurately and effectively, please follow these steps:

1. Fill in the required fields marked with an asterisk (\*).
2. Use the date field to enter the current date.
3. For the "Intake Type" field, select the most accurate option from the list.
4. Enter the animal's basic details in the "Animal Information" field.
5. Fill in the animal's species, breed, age, weight, and color/marking information.
6. For the "Health Assessment" field, note any medical observations or conditions.
7. Select the correct vaccination status and enter any administered vaccines.
8. Provide information about deworming and flea treatment.
9. Enter the spay/neuter status and any other relevant information.
10. Take photos of the animal if possible.
11. Enter the source information about who brought the animal to the shelter.
12. Add any additional comments or observations in the "Reason for Surrender" field.

## Field-by-Field Explanation

*   **Intake Date** (`intake_date`, date, required): Date the animal was brought to the shelter.
*   **Intake Time** (`intake_time`, time, required): Time the animal was brought to the shelter.
*   **Intake Form** (`intake_intro`, note, required): Brief introduction to the animal intake form.
*   **Type of Intake** (`intake_type`, select_one, required): How the animal arrived at the shelter.
*   **Previous Location** (`previous_location`, text, optional): Where the animal came from.
*   **Animal Information** (`animal_information`, note, optional): Basic details about the animal.
*   **Animal's Name** (`animal_name`, text, optional): If known.
*   **Assigned Shelter Name** (`assigned_name`, text, required): The shelter designation for the animal.
*   **Species** (`species`, select_one, required): Type of animal.
*   **Breed** (`breed`, text, optional): Breed or mix.
*   **Sex** (`sex`, select_one, required): Male or female.
*   **Estimated Age** (`age`, text, required): Age of the animal in years and months.
*   **Color and Markings** (`color_markings`, text, required): Description of the animal's color and markings.
*   **Weight** (`weight`, text, required): Weight of the animal in pounds.
*   **Is the Animal Microchipped?** (`microchip`, select_one, required): Chip status.
*   **Microchip Number** (`microchip_number`, text, optional): If the animal is microchipped.
*   **Health Assessment** (`health_assessment`, note, optional): Medical evaluation of the animal.
*   **Body Condition Score** (`body_condition`, select_one, required): 1-9 scale.
*   **Visible Injuries** (`visible_injuries`, select_one, required): Injury status.
*   **Describe Any Injuries** (`injury_description`, text, optional): Details of any injuries.
*   **Health Concerns** (`health_concerns`, text, optional): Any health concerns or observations.
*   **Initial Behavior Observations** (`behavior_notes`, text, required): Temperament and behavior of the animal.
*   **Vaccination Status at Intake** (`vaccination_status`, select_one, required): Vaccine history.
*   **Vaccines Given at Intake** (`vaccines_given`, select_multiple, optional): Select all administered vaccines.
*   **Was Deworming Administered?** (`deworming`, select_one, required): Parasite control.
*   **Was Flea Treatment Administered?** (`flea_treatment`, select_one, required): Flea control.
*   **Spay or Neuter Status** (`spay_neuter_status`, select_one, required): Surgical status.
*   **Were Intake Photos Taken?** (`intake_photos`, select_one, required): Documentation.
*   **Source Information** (`source_information`, note, optional): About who brought the animal.
*   **Surrenderer Name** (`surrenderer_name`, text, optional): If applicable.
*   **Surrenderer Contact** (`surrenderer_contact`, text, optional): Phone and email.
*   **Reason for Surrender** (`surrender_reason`, text, optional): Why the animal was surrendered.
*   **Finder Name** (`finder_name`, text, optional): If the animal was found.
*   **Finder Contact** (`finder_contact`, text, optional): Phone and email.
*   **Where Was Animal Found?** (`found_location`, text, optional): Location.
*   **Staff Member Completing Intake** (`staff_name`, text, required): Name of the staff member.
*   **Staff Signature** (`staff_signature`, text, required): Type name.

# Blood Draw Log Form - Help Guide
## Purpose
The Blood Draw Log Form is a document used to record details about a blood draw procedure. This includes patient information, blood draw details, and outcome of the procedure. The form is used for documentation and patient care.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields completely and accurately.
2. Use the provided options for select fields to choose the correct answer.
3. Be thorough in your entries, as the information will be used for patient care and medical decision-making.

## Field-by-Field Explanation
### Page 1: Log Entry
* **-- Blood Draw Log Entry --** (`log_intro`, note, optional): This is a note field for recording any additional information about the blood draw procedure.
### Page 2
* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Patient ID** (`patient_id`, text, required): Enter the patient's ID number.
### Page 3
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth.
* **Visit Date** (`visit_date`, date, required): Enter the date of the blood draw visit.
* **Visit Time** (`visit_time`, time, required): Enter the time of the blood draw visit.
### Page 4
* **Phlebotomist Name** (`phlebotomist_name`, text, required): Enter the name of the phlebotomist performing the blood draw.
* **Blood Draw Location** (`draw_location`, select_one, required): Choose where the blood draw was performed (Left arm, Right arm, Left hand, Right hand, Other).
* **Venipuncture Site Condition** (`draw_site_condition`, select_one, required): Choose the condition of the venipuncture site (Normal, Difficult access, Scarred, Bruised, Edematous).
* **Number of Needle Sticks** (`number_of_attempts`, number, required): Enter the number of needle sticks required.
### Page 5
* **Collection Tube Type** (`tube_type`, select_multiple, required): Choose the type of collection tube used (EDTA (lavender), SST (gold), Heparin (green), Citrate (blue), Other).
* **Total Blood Volume Collected (mL)** (`total_volume`, number, required): Enter the total blood volume collected.
* **Specimen Quality** (`specimen_quality`, select_one, required): Choose the quality of the specimen (Adequate, Hemolyzed, Clotted, Insufficient, Contaminated).
### Page 6
* **Tests Ordered** (`tests_ordered`, text, required): List all tests ordered on this specimen.
* **Specimen Properly Labeled** (`specimen_labeling`, select_one, required): Choose whether the specimen was properly labeled (Yes, No).
* **Patient Reaction to Draw** (`patient_reaction`, select_one, optional): Choose the patient's reaction to the draw (Normal, Mild dizziness, Vasovagal response, Other complication).
### Page 7
* **Complications Noted** (`complications`, text, optional): If any complications occurred, record them here.
* **Specimen Storage Instructions Followed** (`specimen_storage`, select_one, required): Choose whether the specimen storage instructions were followed (Yes, No).

Please note that some fields may not be applicable based on your selections.

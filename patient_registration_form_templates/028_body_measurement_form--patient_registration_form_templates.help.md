# Body Measurement Form - Help Guide
## Purpose
This form is used to collect body measurements from clients for various purposes such as clothing fitting, fitness tracking, medical assessment, bodybuilding, and health monitoring.

## How To Complete This Form
1. Fill out the client information section with the client's name, date of measurement, and person taking the measurements.
2. Take the measurements for each body part according to the hints provided.
3. Choose the correct purpose of measurement from the options provided.
4. Enter the measurements in the corresponding fields.
5. If necessary, select the measurement method used and enter the recommended clothing size.
6. Acknowledge and verify the measurements with the client.

## Field-by-Field Explanation

* **Client Name (1)** (`client_name`, text, required): Enter the client's full name.
* **Date of Measurement (2)** (`measurement_date`, date, required): Enter the date when the measurements were taken.
* **Person Taking Measurements (3)** (`measurer_name`, text, required): Enter the name and title (e.g., "Measurement Specialist") of the person taking the measurements.
* **Purpose of Measurements (4)** (`measurement_purpose`, select_one, required): Select the reason for taking the measurements from the provided options.
* **Height in Inches (5)** (`height_inches`, number, required): Measure and enter the client's height in inches.
* **Weight in Pounds (6)** (`weight_pounds`, number, required): Measure and enter the client's weight in pounds.
* **Chest Circumference in Inches (7)** (`chest_measurement`, number, required): Measure around the fullest part of the client's chest.
* **Waist Circumference in Inches (8)** (`waist_measurement`, number, required): Measure around the natural waistline.
* **Hip Circumference in Inches (9)** (`hip_measurement`, number, required): Measure around the fullest part of the client's hips.
* **Arm Circumference in Inches (10)** (`arm_measurement`, number, optional): Measure around the widest part of the client's upper arm.
* **Thigh Circumference in Inches (11)** (`thigh_measurement`, number, optional): Measure around the widest part of the client's thighs.
* **Calf Circumference in Inches (12)** (`calf_measurement`, number, optional): Measure around the widest part of the client's calf.
* **Neck Circumference in Inches (13)** (`neck_measurement`, number, optional): Measure around the base of the neck.
* **Forearm Circumference in Inches (14)** (`forearm_measurement`, number, optional): Measure around the widest part of the client's forearm.
* **Inseam Length in Inches (15)** (`inseam_measurement`, number, optional): Measure from the crotch to the ankle.
* **Shoulder Width in Inches (16)** (`shoulder_width`, number, optional): Measure from the shoulder to the shoulder.
* **Torso Length in Inches (17)** (`torso_length`, number, optional): Measure from the shoulder to the waist.
* **Body Fat Percentage (18)** (`body_fat_percentage`, number, optional): Enter the body fat percentage if available from testing.
* **Notes on Measurements (19)** (`body_measurements_notes`, text, optional): Enter any observations or special notes on the measurements.
* **Measurement Method Used (20)** (`measurement_method`, select_one, optional): Select the method used to take the measurements from the provided options.
* **Recommended Clothing Size (21)** (`clothing_size_recommendation`, text, optional): Enter the recommended clothing size.
* **Changes from Previous Measurement (22)** (`comparison_to_previous`, text, optional): Enter any changes from previous measurements.
* **Recommended Follow-up Date (23)** (`follow_up_measurement_date`, date, optional): Enter the recommended date for next measurement appointment.
* **Client Acknowledges Measurements (24)** (`client_acknowledgment`, select_one, required): The client must acknowledge and understand their measurements.

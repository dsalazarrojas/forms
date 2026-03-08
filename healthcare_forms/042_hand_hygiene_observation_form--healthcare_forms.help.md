# hand_hygiene_observation_form - Help Guide
## Purpose
This form is designed to collect data on hand hygiene practices in a healthcare facility. It captures information on hand hygiene adherence, training, policy, and supervisory level and frequency.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the patient's ID to identify the patient being observed.
2. Select the facility where the observation took place.
3. Enter the date and time of the observation.
4. Record the number of handwashes performed during the observation.
5. Select the method used for handwashing (handwashing, handrub, hand sanitizer, or other).
6. Choose the frequency of handwashing (never, occasionally, usually, or always).
7. Evaluate the hand hygiene hygiene level (very good, good, fair, or poor).
8. Enter any additional handwashing notes if necessary.
9. Indicate whether handwashing recommendation was made (True, False, or unsure).
10. Enter any handwashing recommendation notes if necessary.
11. Confirm if hand hygiene training was received (True, False, or unsure).
12. Enter any hand hygiene training notes if necessary.
13. Check if the facility has a hand hygiene policy (True, False, or unsure).
14. Enter any hand hygiene policy notes if necessary.
15. Select the supervisory level (0, 1, 2, or 3).
16. Enter any hand hygiene supervisory notes if necessary.
17. Choose the frequency of supervisory visits (none, daily, weekly, or monthly).
18. Enter any hand hygiene supervisory notes if necessary.

## Field-by-Field Explanation

* **Patient ID (1)** (`patient_id`, number, optional): Enter the patient's ID to identify the patient being observed.
* **Facility (2)** (`facility`, text, optional): Select the facility where the observation took place.
* **Date (3)** (`date`, date, optional): Enter the date of the observation.
* **Time (4)** (`time`, time, optional): Enter the time of the observation.
* **Observation Date (5)** (`observation_date`, date, optional): Confirm the date of the observation.
* **Observation Time (6)** (`observation_time`, time, optional): Confirm the time of the observation.
* **Observed By (7)** (`observed_by`, text, optional): Enter the name of the person who observed hand hygiene practices.
* **Handwashing Count (8)** (`handwashing_count`, number, optional): Record the number of handwashes performed during the observation.
* **Method (9)** (`hands_cleansed_with`, select_one, optional): Select the method used for handwashing (handwashing, handrub, hand sanitizer, or other).
* **Location (10)** (`soap_location`, text, optional): Enter the location where handwashing took place.
* **Method (11)** (`handwashing_method`, select_one, required): Select the method used for handwashing (handwashing, handrub, hand sanitizer, or other).
* **Frequency (12)** (`handwashing_frequency`, select_multiple, required): Choose the frequency of handwashing (never, occasionally, usually, or always).
* **Hygiene Level (13)** (`handwashing_hygiene`, select_multiple, required): Evaluate the hand hygiene hygiene level (very good, good, fair, or poor).
* **Note (14)** (`handwashing_note`, note, optional): Enter any additional handwashing notes if necessary.
* **Comment (15)** (`handwashing_comment`, text, optional): Enter any handwashing comment if necessary.
* **Recommendation (16)** (`handwashing_recommendation`, select_multiple, required): Indicate whether handwashing recommendation was made (True, False, or unsure).
* **Recommendation Note (17)** (`handwashing_recommendation_note`, text, optional): Enter any handwashing recommendation notes if necessary.
* **Training (18)** (`hand_hygiene_training`, select_multiple, required): Confirm if hand hygiene training was received (True, False, or unsure).
* **Training Note (19)** (`hand_hygiene_training_note`, text, optional): Enter any hand hygiene training notes if necessary.
* **Policy (20)** (`hand_hygiene_policy`, select_multiple, required): Check if the facility has a hand hygiene policy (True, False, or unsure).
* **Policy Note (21)** (`hand_hygiene_policy_note`, text, optional): Enter any hand hygiene policy notes if necessary.
* **Supervisory Level (22)** (`hand_hygiene_supervisory_level`, select_one, required): Select the supervisory level (0, 1, 2, or 3).
* **Supervisory Note (23)** (`hand_hygiene_supervisory_note`, text, optional): Enter any hand hygiene supervisory notes if necessary.
* **Supervisory Frequency (24)** (`hand_hygiene_supervisory_frequency`, select_one, required): Choose the frequency of supervisory visits (none, daily, weekly, or monthly).
* **Supervisory Note (25)** (`hand_hygiene_supervisory_note`, text, optional): Enter any hand hygiene supervisory notes if necessary.

## Tips

* Please make sure to enter accurate and honest information to ensure the effectiveness of hand hygiene practices in the facility.
* If unsure about any field, select the "unsure" option and provide additional notes if necessary.
* Enter any additional notes or comments if necessary to provide more information about hand hygiene practices.

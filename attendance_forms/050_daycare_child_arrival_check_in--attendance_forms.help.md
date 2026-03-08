<thinking>...</thinking>

# daycare_child_arrival_check_in - Help Guide
## Purpose
This form is used to track the details of a child's arrival at daycare, including the arrival time, caregiver information, and any notes related to the child's presence. It is intended to help daycare staff efficiently manage child arrival and departure processes. Ensure to only submit the form once for each child's arrival.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the "Arrival Details" page.
2. Fill in the necessary information for the child's arrival, including the "Arrival Time" and "Drop off Time" fields.
3. If applicable, select whether the child is arriving with a "Caregiver".
4. If the child is arriving with a caregiver, provide their name and phone number.
5. Specify the relationship between the caregiver and the child.
6. Add any additional "Notes" if necessary.
7. Submit the form once you have entered all the required information.

## Field-by-Field Explanation

* **Arrival Details** (`arrival_details`, text, required): This page is where you provide general information about the child's arrival.
* **Child** (`child`, select_one, optional): Select "Yes" if the child is arriving with a caregiver, otherwise, choose "No".
* **Drop off Time** (`drop_off_time`, time, optional): Enter the time when the caregiver will drop off the child.
* **Caregiver Name** (`caregiver_name`, text, optional): Enter the name of the caregiver accompanying the child.
* **Phone Number** (`phone_number`, text, optional): Enter the phone number of the caregiver.
* **Arrival Time** (`arrival_time`, time, optional): Enter the time the child arrives at the daycare.
* **Relationship** (`caregiver_relationship`, select_one, optional): Select the relationship between the caregiver and the child (e.g., "Yes" for parent, "No" for other).
* **Notes** (`notes`, note, optional): Add any additional notes related to the child's arrival.
* **Pickup Time** (`pickup_time`, time, optional): Enter the time the child will be picked up.
* **Child Name** (`child_name`, text, optional): Enter the name of the child.

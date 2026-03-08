# Battery Donation Drop Off Form - Help Guide
## Purpose
This form is designed to collect information from individuals or organizations who want to donate batteries for recycling. This information will be used by recycling centers to track and manage the drop-off of batteries.

## How To Complete This Form
To complete this form, please follow these steps:
1. Fill in your full name or business name in the "Full Name or Business Name" field.
2. Provide your email address in the "Email Address" field. This is for your donation receipt.
3. Choose your classification as a donor in the "Donor Classification" field. Choose from the options provided.
4. Select the types of batteries you are donating in the "Types of Batteries Included" field.
5. Estimate the quantity or weight of the batteries in the "Estimated Quantity or Weight" field. For example, "5 lbs" or "Approx 20 units".
6. Check if any batteries are visibly leaking, bloated, or corroded in the "Are any batteries visibly leaking, bloated, or corroded?" field.
7. Confirm if you have taped the terminals of 9V and Lithium batteries in the "Have you taped the terminals of 9V and Lithium batteries?" field.
8. Choose the location where you are dropping off the batteries in the "Drop-Off Location" field.
9. Confirm that you authorize the proper recycling and disposal of the materials in the "I authorize the proper recycling and disposal of these materials" field.
10. Decide if you want to receive environmental tips and event notices in the "Would you like to receive environmental tips and event notices?" field.
11. Enter the date you are planning to drop off the batteries in the "Date of Drop-Off" field.
12. If required, sign with your initials in the "Staff/Volunteer Initials" field.

## Field-by-Field Explanation
* **Full Name or Business Name** (`donor_name`, `text`, required): Please fill in your full name or business name as it appears on your identification.
* **Email Address** (`contact_email`, `email`, required): Provide your email address for your donation receipt.
* **Donor Classification** (`donor_type`, `select_one`, required): Choose your classification as a donor from the options provided.
* **Types of Batteries Included** (`battery_chemistries_donated`, `select_multiple`, required): Select all the types of batteries you are donating. You can select multiple options.
* **Estimated Quantity or Weight** (`quantity_estimate`, `text`, required): Estimate the weight or quantity of the batteries in pounds or units.
* **Are any batteries visibly leaking, bloated, or corroded?** (`safety_check`, `select_one`, required): Check if any batteries are leaking, bloated, or corroded.
* **Have you taped the terminals of 9V and Lithium batteries?** (`terminal_protection_ack`, `select_one`, required): Confirm if you have taped the terminals of 9V and Lithium batteries.
* **Drop-Off Location** (`drop_off_location`, `select_one`, required): Choose the location where you are dropping off the batteries.
* **I authorize the proper recycling and disposal of these materials** (`recycling_consent`, `select_one`, required): Confirm that you authorize the proper recycling and disposal of the materials.
* **Would you like to receive environmental tips and event notices?** (`promotional_signup`, `select_one`, optional): Decide if you want to receive environmental tips and event notices.
* **Date of Drop-Off** (`drop_off_date`, `date`, required): Enter the date you are planning to drop off the batteries.
* **Staff/Volunteer Initials** (`volunteer_initials`, `text`, optional): If required, sign with your initials here.

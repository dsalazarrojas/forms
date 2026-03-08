# halloween_candy_donation_form - Help Guide
## Purpose
The Halloween candy donation form is used to collect information for a Halloween candy donation drive. It is used to gather details on the location of the donation, the number of children benefiting from the donation, the type of candy being donated, and other relevant details.

## How To Complete This Form
1. To start, select the location where the candy is being donated (e.g., home or store).
2. Specify the number of children benefiting from the donation.
3. Select the type(s) of candy being donated (multiple selections are allowed).
4. Enter the amount of candy being donated.
5. Add any additional comments or information related to the donation.
6. Fill out the phone and email fields for contact details (these are optional but recommended for follow-up purposes).
7. Finally, enter any additional comments or information in the last text field.

## Field-by-Field Explanation
* **Donation Location** (`donation_location`, select_one, required/optional): Select the location where the candy is being donated. This can be your home, a store, or another location.
* **Number of children** (`number_of_children`, number, required/optional): Enter the number of children benefiting from the donation.
* **Type of Candy** (`type_of_candy`, select_multiple, required/optional): Choose one or more of the listed candy types you are donating (e.g., M&M's, Reese's Pieces, etc.). Multiple selections are allowed.
* **Amount of Candy** (`amount_of_candy`, number, required/optional): Enter the amount of candy being donated (e.g., number of pieces or pounds).
* **Comments** (`comments`, note, required/optional): Add any additional comments or information related to the donation.
* **Phone** (`phone`, text, required/optional): Enter your phone number for contact purposes (optional but recommended for follow-up).
* **Email** (`email`, email, required/optional): Enter your email address for contact purposes (optional but recommended for follow-up).
* **Additional Comments** (`comments`, note, required/optional): Add any additional comments or information in this field.
* **Date** (`date`, date, required/optional): Enter the date of the donation.
* **Time** (`time`, time, required/optional): Enter the time of the donation.

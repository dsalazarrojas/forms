<thinking>
We need to create a user-facing help guide for the "travel_agent_quote_template" form, which is used for generating travel agency quotes. The form collects information about the customer, their travel plans, and the travel details. To ensure the form is completed correctly and efficiently, we need to provide clear instructions and field explanations for each section. This will help travel agents provide accurate quotes and avoid errors in the process.

Form purpose:
The form is used to create quotes for travel agencies, which will be used to communicate with customers about the estimated cost of their trips. 

To complete this form, travel agents should follow the steps outlined below:

</thinking>
# travel_agent_quote_template - Help Guide
## Purpose
The "travel_agent_quote_template" form is used to create quotes for travel agencies to communicate with customers about the estimated cost of their trips.

## How To Complete This Form
1. Enter the customer's **First Name**, **Last Name**, and **Email** (optional) on the first page.
2. Select the **Travel Date** of the customer's trip and enter the **Travel Duration** in the corresponding fields.
3. Choose the **Type of Travel** (Domestic or International) for the customer's trip.
4. Enter the estimated **Travel Cost** and **Total Cost** for the trip.
5. Select the **Travel Destination** (Destination 1, Destination 2, Destination 3) and **Travel Agencies** (Agency 1, Agency 2, Agency 3) involved in the trip.
6. Enter the estimated **Travel Discount** (if applicable) and indicate if **Tax is Included**.
7. Add any **Travel Notes** and click "Submit" to generate the quote.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Please enter the customer's first name.
* **Last Name** (`last_name`, text, required): Please enter the customer's last name.
* **Email** (`email`, email, optional): Please enter the customer's email address (if available).
* **Travel Date** (`travel_date`, date, required): Please enter the date of the customer's trip.
* **Travel Duration** (`travel_duration`, number, required): Please enter the duration of the customer's trip.
* **Type of Travel** (`travel_type`, select_one, required): Choose the type of travel (Domestic or International).
* **Travel Cost** (`travel_cost`, number, required): Please enter the estimated cost of the travel.
* **Travel Destination** (`travel_destination`, select_multiple, required): Select all destinations involved in the customer's trip.
* **Travel Agencies** (`travel_agencies`, select_multiple, required): Select all travel agencies involved in the customer's trip.
* **Total Cost** (`total_cost`, number, required): Please enter the total estimated cost of the travel.
* **Travel Discount** (`travel_discount`, number, optional): Please enter the estimated travel discount (if applicable).
* **Tax Included** (`tax_included`, select_one, required): Indicate if tax is included in the cost.
* **Travel Notes** (`travel_notes`, note, optional): Add any additional notes about the customer's travel.
* **Travel Destination Options:** Please select all destinations involved in the customer's trip from the options provided.
* **Travel Agencies Options:** Please select all travel agencies involved in the customer's trip from the options provided.
* **Travel Cost Options:** Please enter a valid number for the estimated travel cost.
* **Total Cost Options:** Please enter a valid number for the total estimated cost.
* **Travel Discount Options:** Please enter a valid number for the estimated travel discount (if applicable).

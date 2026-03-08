# dividend_distribution_confirmation_form - Help Guide
## Purpose
This form is used to record the details of a dividend distribution, including the distribution date, amount, distribution method, and shareholder information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **dividend distribution confirmation** details on the first page.
	* Enter the date of the dividend distribution in the **distribution_date** field.
	* Enter the amount of the dividend distribution in the **dividend_amount** field.
2. On the second page, provide details about the company and shareholder involved.
	* Enter the name of the company in the **company** field.
	* Enter the name of the shareholder in the **shareholder** field.
3. Confirm the distribution method and status.
	* Choose the method of confirmation from the options in the **confirmation_method** field.
	* Select the current status of the confirmation from the options in the **confirmation_status** field.
4. Add any necessary notes or comments in the **confirmation_notes** field.
5. Review and submit the form to complete the confirmation process.

## Field-by-Field Explanation
* **dividend_distribution_confirmation** (`1`, text, required): Enter a brief description of the dividend distribution confirmation.
* **company** (`2`, text, optional): Enter the name of the company involved in the distribution.
* **dividend_details** (`3`, text, optional): Enter additional details about the dividend distribution.
* **distribution_date** (`4`, date, required): Enter the date of the dividend distribution.
* **dividend_amount** (`5`, number, optional): Enter the amount of the dividend distribution (if applicable).
* **distribution_confirmation_date** (`6`, date, optional): Enter the date of the confirmation of the distribution.
* **confirmation_method** (`7`, select_one, optional): Choose the method of confirmation (e.g., email, phone call, etc.).
* **confirmation_status** (`8`, select_one, optional): Select the current status of the confirmation (e.g., pending, confirmed, etc.).
* **shareholder** (`9`, text, optional): Enter the name of the shareholder involved in the distribution.
* **shareholder_address** (`10`, text, optional): Enter the address of the shareholder (if applicable).
* **confirmation_notes** (`11`, note, optional): Add any additional notes or comments about the confirmation.
* **form_id** (`12`, text, optional): Enter the ID of the form (not required for this form).
* **assigned_tool** (`13`, text, optional): Enter the tool assigned to the confirmation process (not required for this form).

Note: The fields marked as "optional" can be left blank if not applicable.

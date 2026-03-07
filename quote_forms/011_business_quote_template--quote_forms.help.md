<thinking>
To create a comprehensive help guide for the Business Quote Template form, we must first consider its purpose. This form appears to be designed for creating business quotes or estimates for specific projects or services, gathering information such as quote numbers, client details, project descriptions, prices, and payment terms. To ensure that users understand the form's purpose and usage correctly, we should check that the form is being used for its intended purpose and not duplicating any other forms or features that serve similar purposes. If this form is meant to be used for multiple types of quotes or projects, the instructions should be clear and concise enough to guide users through each type of usage correctly.

The Business Quote Template form has 23 fields, including unique identifiers, dates, client information, project details, pricing, and payment terms. To make the most of this form, users should be guided through each field with a clear understanding of its purpose and requiredness.

</thinking>

# Business Quote Template - Help Guide
## Purpose
The Business Quote Template is designed to create a comprehensive quote or estimate for a specific project or service, gathering essential information from clients and detailing prices, terms, and conditions.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a unique quote number.
2. Select the date the quote was issued.
3. Provide the client's name and email address.
4. Enter the client's phone number and company name (if applicable).
5. Describe the project or services being quoted.
6. Provide the expected commencement and completion dates.
7. Add line item details, including a brief description, quantity, unit price, and total cost.
8. Enter the tax rate and calculate the total tax amount.
9. Calculate the subtotal, including any applicable discount.
10. Add any payment terms or conditions.

## Field-by-Field Explanation
* **quote_number** (`quote_number`, `text`, Required): Enter a unique identifier for this quote.
* **quote_date** (`quote_date`, `date`, Required): Select the date this quote was issued.
* **client_name** (`client_name`, `text`, Required): Enter the name of the client.
* **client_email** (`client_email`, `email`, Required): Enter the client's email address.
* **client_phone** (`client_phone`, `text`, Optional): Enter the client's contact number (not required but recommended).
* **client_company** (`client_company`, `text`, Optional): Enter the name of the client's company (not required but recommended).
* **project_description** (`project_description`, `text`, Required): Provide a description of the work or services being quoted.
* **commencement_date** (`commencement_date`, `date`, Required): Enter the expected date of commencement.
* **completion_date** (`completion_date`, `date`, Required): Enter the expected date of completion.
* **line_item_description** (`line_item_description`, `text`, Required): Provide a detailed description of each line item.
* **quantity** (`quantity`, `number`, Required): Enter the quantity or number of units or hours required.
* **unit_price** (`unit_price`, `number`, Required): Enter the price per unit or hour.
* **item_total** (`item_total`, `number`, Required): Calculate the total cost of each line item (quantity multiplied by unit price).
* **subtotal** (`subtotal`, `number`, Required): Calculate the subtotal of all line items (excluding discount).
* **discount_percentage** (`discount_percentage`, `number`, Optional): Enter any applicable discount as a percentage (not required but recommended).
* **discount_amount** (`discount_amount`, `number`, Optional): Enter the total discount amount (not required but recommended).
* **subtotal_after_discount** (`subtotal_after_discount`, `number`, Required): Calculate the subtotal minus any applicable discount.
* **tax_rate** (`tax_rate`, `number`, Required): Enter the applicable tax rate.
* **tax_amount** (`tax_amount`, `number`, Required): Calculate the total tax amount.
* **total_amount** (`total_amount`, `number`, Required): Calculate the final total including tax and discount.
* **payment_terms** (`payment_terms`, `text`, Optional): Enter any payment terms or conditions (not required but recommended).
* **validity_period** (`validity_period`, `text`, Optional): Enter the quote validity period (not required but recommended).
* **notes** (`notes`, `text`, Optional): Enter any additional terms or notes.

## Tips
* Double-check all required fields to ensure accurate quote creation.
* Review the form carefully before submission to avoid errors.
* Use the calculated totals and tax amount to ensure accurate pricing.
* Customize the form for different types of projects or quotes as needed.

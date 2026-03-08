# Scale Ticket Form Template - Help Guide
## Purpose
This form is designed to create a standard template for generating scale tickets, used to record and track sales-related transactions involving weights.

## How To Complete This Form
1. Fill out the customer information fields (customer_info and customer_email, customer_phone).
2. Enter product details (product_info).
3. Record weights for each item on the scale (weight_measurement fields, scale_ticket_weight_1 to scale_ticket_weight_9).
4. Calculate the total weight (scale_ticket_total_weight).
5. Complete any additional comments or notes if necessary.
6. Sign and date the document.

## Field-by-Field Explanation

*   **scale_ticket_form_template**:
    *   (`scale_ticket_form_template`, text, optional): This field is not used for data entry but rather to store a template name for the generated document. You can enter a name or a number to identify this template.
*   **customer_info**:
    *   (`customer_info`, text, optional): Enter the customer's name and other relevant details.
*   **product_info**:
    *   (`product_info`, text, optional): Enter the product name, description, or details.
*   **weight_measurement**:
    *   (`weight_measurement`, number, optional): Enter the weight measurement (in units such as pounds, kilograms, etc.) for the item being sold or weighed.
*   **scale_ticket_number**:
    *   (`scale_ticket_number`, number, optional): Enter the scale ticket number for the transaction.
*   **scale_ticket_date**:
    *   (`scale_ticket_date`, date, optional): Enter the date of the transaction.
*   **scale_ticket_time**:
    *   (`scale_ticket_time`, time, optional): Enter the time of the transaction.
*   **customer_signature**:
    *   (`customer_signature`, text, optional): The customer must sign this document to confirm the transaction details.
*   **customer_comments**:
    *   (`customer_comments`, text, optional): If the customer has any additional comments, enter them here.
*   **salesperson_signature**:
    *   (`salesperson_signature`, text, optional): The salesperson must sign this document to confirm they sold the item(s).
*   **salesperson_comments**:
    *   (`salesperson_comments`, text, optional): If the salesperson has any comments, enter them here.
*   **product_comments**:
    *   (`product_comments`, text, optional): Enter any additional comments for the product being sold.
*   **notes**:
    *   (`notes`, text, optional): Enter any additional comments or notes for the transaction.
*   **customer_email**:
    *   (`customer_email`, email, optional): Enter the customer's email address.
*   **customer_phone**:
    *   (`customer_phone`, text, optional): Enter the customer's phone number.
*   **scale_ticket_weight_1**:
    *   (`scale_ticket_weight_1`, number, optional): Enter the weight for item 1.
*   **scale_ticket_weight_2**:
    *   (`scale_ticket_weight_2`, number, optional): Enter the weight for item 2.
*   **scale_ticket_weight_3**:
    *   (`scale_ticket_weight_3`, number, optional): Enter the weight for item 3.
*   **scale_ticket_weight_4**:
    *   (`scale_ticket_weight_4`, number, optional): Enter the weight for item 4.
*   **scale_ticket_weight_5**:
    *   (`scale_ticket_weight_5`, number, optional): Enter the weight for item 5.
*   **scale_ticket_weight_6**:
    *   (`scale_ticket_weight_6`, number, optional): Enter the weight for item 6.
*   **scale_ticket_weight_7**:
    *   (`scale_ticket_weight_7`, number, optional): Enter the weight for item 7.
*   **scale_ticket_weight_8**:
    *   (`scale_ticket_weight_8`, number, optional): Enter the weight for item 8.
*   **scale_ticket_weight_9**:
    *   (`scale_ticket_weight_9`, number, optional): Enter the weight for item 9.
*   **scale_ticket_total_weight**:
    *   (`scale_ticket_total_weight`, number, optional): Calculate the total weight by adding up all the individual weights.

## Tips
*   Double-check that all fields are filled out correctly to avoid errors.
*   Use the correct unit of measurement for weights (pounds, kilograms, etc.).
*   Make sure the customer signature is obtained before completing the form.
*   Use the product comments field to note any specific product-related issues.

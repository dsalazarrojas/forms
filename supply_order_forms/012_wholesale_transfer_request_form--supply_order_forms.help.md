<thinking>
This form is used for wholesalers to request a transfer of stock from one location to another. It's a simple, three-page form that allows users to choose between 'Yes' or 'No' answers for each page, select a collection location from which to transfer, and enter a quantity and transfer date/time. This form should only be completed by authorized personnel, as it does not appear to be required in any case. It's worth noting that the "quantity" field seems to be a numeric field but is not validated in the YAML, so users may enter non-numeric characters. It's also unclear what the "notes" field is for, as it's labeled as a "note" but doesn't have any additional options or hints. Lastly, the form seems to be asking for both "assigned to" and "assigned by" options, which may be redundant or contradictory.
</thinking>

# Wholesale Transfer Request Form - Help Guide
## Purpose
The Wholesale Transfer Request Form is used to request a transfer of stock from one location to another.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer "Yes" or "No" to the "Supply Order Forms" question on the first page.
2. Select "Yes" or "No" to the "request form" question.
3. Enter the location from which you want to transfer stock in the "from location" field.
4. Enter the location to which you want to transfer stock in the "to location" field.
5. Choose the date of transfer in the "transfer date" field.
6. Choose the time of transfer in the "transfer time" field.
7. Enter the quantity of stock to be transferred in the "quantity" field.
8. Enter any additional notes in the "notes" field.
9. Choose whether the request has been "assigned to" anyone in the "assigned to" field.
10. Choose whether the request was made by someone in the "assigned by" field.

## Field-by-Field Explanation
### Supply Order Forms
* **Supply Order Forms** (`wholesale_transfer_request_form_1`, select_multiple, required/optional): This field asks whether the stock you want to transfer is a supply order form.
*   - Answer "Yes" or "No" to this question.

### request form
*   **request form** (`transfer_request_1`, select_one, required/optional): This field asks whether this is a valid request form.
*   - Answer "Yes" or "No" to this question.

### from location
*   **from location** (`collection_location_1`, text, required/optional): This field asks for the location from which you want to transfer stock.
*   - Enter the location from which you want to transfer stock.

### to location
*   **to location** (`collection_location_1`, text, required/optional): This field asks for the location to which you want to transfer stock.
*   - Enter the location to which you want to transfer stock.

### transfer date
*   **transfer date** (`transfer_date_1`, date, required/optional): This field asks for the date of transfer.
*   - Choose the date of transfer.

### transfer time
*   **transfer time** (`transfer_time_1`, time, required/optional): This field asks for the time of transfer.
*   - Choose the time of transfer.

### quantity
*   **quantity** (`quantity_1`, number, required/optional): This field asks for the quantity of stock to be transferred.
*   - Enter the quantity of stock to be transferred.

### notes
*   **notes** (`notes_1`, note, required/optional): This field allows for any additional notes or comments.
*   - Enter any additional notes or comments.

### assigned to
*   **assigned to** (`assigned_to_1`, select_one, required/optional): This field asks whether the request has been assigned to anyone.
*   - Answer "Yes" or "No" to this question.

### assigned by
*   **assigned by** (`assigned_by_1`, select_one, required/optional): This field asks whether the request was made by someone.
*   - Answer "Yes" or "No" to this question.

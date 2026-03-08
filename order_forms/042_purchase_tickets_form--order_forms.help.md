# purchase_tickets_form - Help Guide
## Purpose
The "purchase_tickets_form" is designed to help users decide whether or not to purchase tickets. It guides users through a series of questions to collect relevant information about ticket purchasing.

## How To Complete This Form
To complete this form, follow these steps:
1.  On the first page, select "Yes" or "No" to confirm if tickets are to be purchased.
2.  If you answered "Yes", input the details about the gift registry on the second page.
3.  On the same page, input the number of available tickets.
4.  On the same page, input the number of tickets purchased.

## Field-by-Field Explanation
*   **select_tickets** (`select_tickets`, select_one, required): Confirm if tickets are to be purchased. Select "Yes" if you want to purchase tickets.
*   **gift_registry** (`gift_registry_widget`, text, required): If you answered "Yes" to the previous question, input the details about the gift registry.
*   **available_tickets** (`available_tickets`, number, required): Input the number of available tickets.
*   **tickets_purchased** (`tickets_purchased`, number, required): Input the number of tickets purchased.

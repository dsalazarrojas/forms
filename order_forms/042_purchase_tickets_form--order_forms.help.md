<thinking>
To create a user-facing help guide for the "purchase_tickets_form", we need to consider the following fields and their purposes:
*   The form is designed to help users indicate whether or not to purchase tickets, which implies that the form is primarily a decision-making process.
*   There are five fields in the form, each serving a distinct purpose:
    *   The first field "select_tickets" on "purchase_tickets_form_page_1" is a select-one field that asks users to select 'Yes' or 'No' to confirm if tickets are to be purchased.
    *   The second field "gift_registry" on "purchase_tickets_form_page_1" is a text field where users can input information about the gift registry, likely in case tickets are being purchased as a gift.
    *   The third field "available_tickets" on "purchase_tickets_form_page_1" is a numeric field that asks users to input the number of available tickets.
    *   The fourth field "tickets_purchased" on "purchase_tickets_form_page_1" is also a numeric field that asks users to input the number of tickets purchased.
    *   The fifth field "purchase_tickets" on "purchase_tickets_form_page_1" is another numeric field that, based on the provided information, appears to be a duplicate or redundant field, as it has the same label as the field "tickets_purchased".
*   Given the field "purchase_tickets" is redundant, we can remove it from the form to avoid confusion.

</thinking>

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

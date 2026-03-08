# customer_search_filter_form - Help Guide
## Purpose
This form is designed to help users search for customers based on various filters, making it easier to find specific customers quickly.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill out the "Customer Search Form" section with your search query.
2.  Select the desired filters from the "Search Filters" dropdown list.
3.  Select one or multiple options from the "Select One" or "Select Multiple" dropdown lists, respectively.
4.  Use the "Date Picker" and "Time Picker" fields to select specific dates and times, if applicable.
5.  Enter notes or comments in the "Note" and "Another Note" fields.
6.  Enter the customer's E-mail address in the "E-mail" field, if applicable.
7.  Enter the customer's phone number in the "Phone" field, if applicable.
8.  Finally, click the "Search" button to view the search results.

## Field-by-Field Explanation

*   **Customer Search Form (1)** (`customer_search_form`, `text`, required: false): This is the main search bar where you can enter your search query. Type in the customer's name, ID, or any other relevant information to find the desired customer.
*   **Search Filters (2)** (`search_filters`, `text`, required: false): Here, select one or multiple options from the dropdown list to refine your search based on the filters provided.
*   **Select One (3)** (`select_one`, `select_one`, required: false): Choose one option from the dropdown list to narrow down your search results.
*   **Select Multiple (4)** (`select_multiple`, `select_multiple`, required: false): Choose multiple options from the dropdown list to broaden your search results.
*   **Date Picker (5)** (`date_picker`, `date`, required: false): Select a specific date using the date picker tool to filter your search results based on the date.
*   **Time Picker (6)** (`time_picker`, `time`, required: false): Select a specific time using the time picker tool to filter your search results based on the time.
*   **Note (7)** (`note`, `note`, required: false): Enter any additional information or notes about the customer.
*   **E-mail (8)** (`email`, `email`, required: false): Enter the customer's email address to search for customers with the specified email.
*   **Phone (9)** (`phone`, `text`, required: false): Enter the customer's phone number to search for customers with the specified phone number.
*   **Another Note (10)** (`note_2`, `note`, required: false): Enter any additional information or notes about the customer.
*   **Search (11)** (`search_button`, `select_one`, required: false): Click this button to view the search results after filtering the customers based on your search query.
*   **Reset (12)** (`reset_button`, `select_one`, required: false): Click this button to reset the search form and start fresh. 

Note that this guide is based on the provided YAML structure and explanations are best-effort. If the provided YAML fields are weak or unclear, the explanation has been made to provide the best possible interpretation.

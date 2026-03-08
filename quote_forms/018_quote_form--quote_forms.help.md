# Quote Form - Help Guide
## Purpose
The Quote Form is a tool used to collect quotes from customers. It is typically used when a customer requests information on a service or product. The form gathers the necessary details to process the quote and provide an accurate response to the customer.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the required information in the designated fields. The form is divided into several sections and pages.
2. Ensure that all required fields (Quote Info, Price, and Date) are filled out.
3. Enter any additional information you wish to provide in the Quote Info field.
4. Select the appropriate options in the Customer Info field.
5. Enter the price of the quote in the Price field.
6. Choose the desired date for the quote in the Date field.
7. Enter any message you wish to convey in the Message field.
8. If you want to submit the customer information, select the appropriate options in the Customer Info field.

## Field-by-Field Explanation
- **Quote Form** (`quote_form_page`, text, optional): This field is the title of the form. Enter a brief description of the quote.
- **Customer Info** (`customer_info`, select_one, optional): Select the customer from the options provided. If no customer is selected, the form will not be submitted.
- **Quote Info** (`quote_info`, text, required): Enter any additional information you wish to provide about the quote.
- **Price** (`quote_price`, number, required): Enter the price of the quote.
- **Date** (`quote_date`, date, required): Choose the desired date for the quote.
- **Message** (`quote_message`, text, required): Enter any message you wish to convey in the quote.
- **Submit Customer Info** (`customer_info_submit`, select_multiple, optional): If you have already submitted the customer information, select the "Yes" option. If not, select "No".

## Tips
- Please ensure that all required fields are filled out before submitting the form.
- If you have any additional information or comments, use the Quote Info field.
- If you need to provide multiple customer options, use the Customer Info field.
- The Date field is a date format field, ensure that you use the correct format (YYYY-MM-DD).

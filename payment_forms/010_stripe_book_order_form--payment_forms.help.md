# Stripe Book Order Form - Help Guide
## Purpose
The Stripe Book Order Form is a form designed to help users process book orders. This form collects necessary book and payment information to facilitate a smooth and efficient booking experience.

## How To Complete This Form

1.  **Fill out all required fields**: Please complete all fields marked as "required".
2.  **Choose your payment method**: Select one of the payment options to proceed with your order.
3.  **Submit your order**: Click the "Submit" button to finalize your order.

## Field-by-Field Explanation

*   **Book Title**: `book_title` (`book_title`, text, required/optional)
    Enter the title of the book you would like to order.
*   **Book Author**: `book_author` (`book_author`, text, required/optional)
    Enter the author of the book you would like to order.
*   **Book Price**: `book_price` (`book_price`, number, required)
    Enter the price of the book you would like to order.
*   **Quantity**: `quantity` (`quantity`, number, required)
    Enter the quantity of the book you would like to order.
*   **Order Type**: `order_type` (`order_type`, select_one, required/optional)
    Select whether this is a "Yes" or "No" order, which might be used to indicate a subscription or special order type.
*   **Customer Email**: `customer_email` (`customer_email`, email, required/optional)
    Enter your email address.
*   **Customer Phone**: `customer_phone` (`customer_phone`, text, required/optional)
    Enter your phone number.
*   **Payment Method**: `payment_method` (`payment_method`, select_one, required)
    Select one of the payment methods, which is required for the order to be processed.
*   **Customer Note**: `customer_note` (`customer_note`, note, required/optional)
    Enter any additional comments or notes about your order.
*   **Form Token**: `form_token` (`form_token`, note, required/optional)
    Enter any additional notes about the form itself.
*   **Back**: `back` (`back`, text, required/optional)
    Click the "Back" button to return to a previous page or the beginning of the form.

## Tips

*   Please fill out all required fields to avoid errors.
*   Ensure that you select a payment method to proceed with your order.
*   If you encounter any issues or have questions, please contact our support team.

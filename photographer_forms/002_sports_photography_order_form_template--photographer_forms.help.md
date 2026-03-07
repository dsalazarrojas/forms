<thinking>
This guide is intended for end users who will be using the sports photography order form template. The purpose of this form is to gather information from clients about their photography session needs, preferences, and payment details. 
</thinking>

# sports_photography_order_form_template - Help Guide
## Purpose
The sports photography order form template is designed to collect essential information from clients about their photography session needs, preferences, and payment details. This form is meant to be a comprehensive guide for clients to ensure that all necessary information is provided, making the process of ordering a photography session smoother and more efficient.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with your name, email address, and phone number.
2. Provide the date and time of your photography session.
3. Choose the location of your session (studio or on-location).
4. Select one or multiple photography sessions (half or full).
5. Choose a package (Basic or Premium).
6. If not paying immediately, please add any notes about your order.
7. Review your order for accuracy and completeness.
8. Confirm your order by entering your payment information.

## Field-by-Field Explanation
### 1. Client Info
* **What is your name?** (`client_info`, `text`, required): Please enter your name.
* **Email address** (`email`, `email`, required): Enter your email address.
* **Phone number** (`phone`, `text`, required): Enter your phone number.

### 2. Session Details
* **Session details** (`session_details`, `text`, required): Please provide the date and time of the photography session.

### 3. Location
* **Location** (`location`, `select_one`, required): Please select the location of your session (Studio or on-location).

### 4. Photography Session
* **Choose a photography session** (`photography_session`, `select_multiple`, required): Please select one or multiple photography sessions (half or full).

### 5. Packages
* **Packages** (`packages`, `select_one`, required): Please select a package (Basic or Premium).

### 6. Payment Information (Optional)
* **Payment information** (`payment_info`, `text`, optional): If you are not paying immediately, please add any notes about your order.

### 7. Order Note (Optional)
* **Order note** (`order_note`, `note`, optional): Please add any additional notes about your order.

### 8. Review and Confirmation
* **Review** (`review`, `text`, optional): Please review your order for accuracy and completeness.
* **Confirmation** (`confirmation`, `text`, required): Please confirm your order.
* **Payment confirmation** (`payment_confirmation`, `text`, optional): If you are paying immediately, please confirm your payment information.

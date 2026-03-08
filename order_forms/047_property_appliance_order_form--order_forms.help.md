<thinking>
To create an effective user-facing help guide for the "Property Appliance Order Form", you must first understand the form's purpose and the intent behind each field. The form is designed to collect relevant information about a property appliance order, which can be used by property managers or administrators to process and track orders.

When reviewing the form's structure and fields, ensure you don't duplicate any information that's already been explained in the "Purpose" section. This will prevent redundant explanations and make the guide more concise.

Here's a brief overview of the form's fields and their intended use:

*   "order_form_page": This field is not explicitly used in the YAML, but it might be a page header or introduction.
*   "order_details": Collects information about the order, such as its description or details.
*   "property_manager_details": This field is likely used to capture contact information for the property manager or administrator responsible for the order.
*   "property_details": Gather information about the property, such as its address or location.
*   "order_notes": Allows users to add any additional notes or comments about the order.
*   "contact_details": Collects contact information for the person placing the order.
*   "order_date": This field is likely used to select or input the date the order was placed or expected to be completed.
*   "status": This field seems to be a status update, possibly indicating whether the order is "Draft", "Open", or "Closed".
*   "order_date_time": Similar to "order_date", this field might collect the time of the order or completion.
*   "contact_phone": Capture the contact phone number for the person placing the order.
*   "contact_email": Collects the email address for the person placing the order.
*   "order_form_comments": This field is likely a notes section for any additional comments about the order.
</thinking>

# Property Appliance Order Form - Help Guide
## Purpose
This form is designed to collect information about property appliance orders. It gathers essential details to help property managers and administrators process and track orders efficiently.

## How To Complete This Form

1.  To begin, fill in the form's fields as instructed below.
2.  Ensure you provide accurate information for all fields, as this will help process the order efficiently.
3.  If any fields are marked as required, please fill them in accordingly.

## Field-by-Field Explanation

*   **Order Details** (`order_details`, text, required): Please enter a brief description or details of the order.
*   **Property Manager Details** (`property_manager_details`, text, required): Enter the contact information for the property manager or administrator responsible for the order.
*   **Property Details** (`property_details`, text, required): Provide information about the property, such as its address or location.
*   **Order Notes** (`order_notes`, text, optional): Add any additional notes or comments about the order.
*   **Contact Details** (`contact_details`, text, required): Enter the contact information for the person placing the order.
*   **Order Date** (`order_date`, date, optional): Select or input the date the order was placed or expected to be completed.
*   **Status** (`status`, select_one, optional): Update the status of the order as "Draft", "Open", or "Closed".
*   **Order Date/Time** (`order_date_time`, time, optional): Enter the time of the order or completion.
*   **Contact Phone** (`contact_phone`, text, optional): Capture the contact phone number for the person placing the order.
*   **Contact Email** (`contact_email`, email, optional): Enter the email address for the person placing the order.
*   **Order Form Comments** (`order_form_comments`, note, optional): Add any additional comments or notes about the order.

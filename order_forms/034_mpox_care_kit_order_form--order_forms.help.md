<thinking> 
This form is intended to gather order details from customers, including shipping information, order date, time, and status. The order details section allows customers to provide their order specifics, while the shipping details section allows them to select their preferred shipping option. The date and time fields are for specifying the order date and time, respectively. The notes section is for any additional comments or notes. The order status field allows customers to select their order status. The email and phone number fields are for contact information. This form is likely used for orders that require specific delivery times or shipping options.

Please note that some fields are not required, as indicated by the `required: false` property. This means that customers can leave these fields blank or select options that do not apply to their order.

The form is split into multiple pages, but the page structure is not explicitly defined in the YAML inputSchema. Therefore, the "pages" property is not further analyzed in this guide.

The fields in this form have the following types:
- Text: `order_details`, `phone_number`
- Select Multiple: `shipping_details`
- Date: `order_date`
- Time: `order_time`
- Note: `notes`
- Select One: `order_status`
- Email: `email`

This form does not explicitly define a submission button or confirmation mechanism, so we assume that once the form is completed, it will be submitted by clicking a button not shown in this schema. 
</thinking>

# Mpox Care Kit Order Form - Help Guide
## Purpose

This form gathers order details from customers, including shipping information, order date, time, and status. It is likely used for orders that require specific delivery times or shipping options.

## How To Complete This Form

To complete this form, follow these steps:

1. Provide your order details in the Order Details section.
2. Select your preferred shipping options in the Shipping Details section.
3. Specify your order date and time.
4. Add any additional comments or notes in the Notes section.
5. Select your order status.
6. Enter your email address.
7. Enter your phone number.

## Field-by-Field Explanation

* **Order Details** (`order_details`, text, optional): This section is for providing the specifics of your order.
* **Shipping Details** (`shipping_details`, select_multiple, optional): This section allows you to select your preferred shipping options.
* **Date** (`order_date`, date, optional): Enter the date of your order.
* **Time** (`order_time`, time, optional): Enter the time of your order.
* **Notes** (`notes`, note, optional): Add any additional comments or notes about your order.
* **Order Status** (`order_status`, select_one, optional): Select your order status.
* **Email** (`email`, email, optional): Enter your email address.
* **Phone Number** (`phone_number`, text, optional): Enter your phone number.

## Tips

* Please ensure that all required fields are filled in before submitting the form.
* Double-check your information before submitting the form.
* If you have any issues with your order, please contact us.
* If you have any additional questions, please don't hesitate to ask. 

Note: This guide assumes that the fields are in the order they appear in the provided YAML schema. If the form fields are not exactly as described, please let me know so I can adjust the guide accordingly.

# e_commerce_return_label_order_form - Help Guide
## Purpose
The e_commerce_return_label_order_form is a form used to initiate the return and refund process for online orders. It collects essential information to facilitate efficient processing and resolution of return requests.

## How To Complete This Form
To fill out this form correctly, follow these steps:
1. Enter the **Order ID** number found on the original order confirmation email or receipt.
2. Select the **Order Date** of the original order.
3. Choose the **Reason for Return** that best describes why you are requesting a return.
4. Select the **Return Status** of your return request.
5. If applicable, attach a photo of the returned item in the **Attach Photo** field.
6. Provide any additional **Return Notes** in the text box.
7. Choose the **Ship Method** used for the original delivery.
8. Select the **Ship Carrier** used for the original delivery.
9. Enter the **Ship Tracking Number** for the original shipment.

## Field-by-Field Explanation
- **Order ID** (`order_id`, number, required): Enter the unique number assigned to your order.
  - **Order Date** (`order_date`, date, required): Select the date the order was placed.
  - **Reason for Return** (`reason_for_return`, select_one, required): Choose one of the provided reasons for return, such as "Product Defective" or "Order Cancellation".
  - **Return Status** (`return_status`, select_one, required): Select the current status of your return request.
  - **Attach Photo** (`return_photo`, text, optional): Attach a photo of the returned item, if applicable.
  - **Return Notes** (`return_notes`, text, optional): Provide any additional notes regarding the return.
  - **Ship Method** (`ship_method`, select_one, required): Choose the method used for the original shipment, such as "Ground" or "Express".
  - **Ship Carrier** (`ship_carrier`, select_one, required): Select the carrier used for the original shipment, such as "USPS" or "FedEx".
  - **Ship Tracking Number** (`ship_tracking_number`, text, required): Enter the tracking number associated with the original shipment.

## Tips
- Ensure that the form is filled out correctly and completely to avoid delays in processing your return request.
- Double-check the accuracy of the information provided to ensure that it is correct and up-to-date.
- If you are unsure about any field or have questions, please contact our customer support team for assistance.

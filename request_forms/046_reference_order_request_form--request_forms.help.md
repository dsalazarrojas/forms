# Reference Order Request Form - Help Guide
## Purpose
The Reference Order Request Form is a form used to request a reference order from a university. This form is used to gather all the necessary information to process the order request.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the university ID in the "university" field. This is required to identify the university that the order is for.
2. Select the delivery preference for the order in the "Delivery Preference" field. This will determine whether the order will be delivered or not.
3. In the "Delivery Authorization" field, select the type of delivery authorization required for the order.
4. Enter the order details in the "Order Details" field. This is a text field where you can enter any additional information about the order.
5. Enter the contact name, email, and phone number of the person responsible for the order in the "Contact Name", "Contact Email", and "Contact Phone" fields respectively.
6. Enter the order date in the "Order Date" field. This is the date when the order was placed.
7. Select the reference type in the "Reference Type" field. This will determine the type of reference required for the order.
8. In the "Comments" field, enter any additional comments about the order.
9. Enter the delivery details in the "Delivery Street", "Delivery City", "Delivery State", and "Delivery ZIP" fields.
10. Enter the university's name, address, contact information, and department name in their respective fields.
11. Select the order status in the "Order Status" field. This will determine the status of the order.
12. Finally, click the "Submit" button to submit the form.

## Field-by-Field Explanation
* **University** (`university_id`, text, required): Enter the university ID to identify the university that the order is for.
* **Delivery Preference** (`delivery_preference`, select_one, required): Select "Yes" if the order will be delivered, or "No" if it will not be delivered.
* **Delivery Authorization** (`delivery_authorization`, select_multiple, required): Select the types of delivery authorization required for the order.
* **Order Details** (`order_details`, text, required): Enter any additional information about the order.
* **Contact Name** (`contact_name`, text, optional): Enter the name of the person responsible for the order.
* **Contact Email** (`contact_email`, email, optional): Enter the email of the person responsible for the order.
* **Contact Phone** (`contact_phone`, text, optional): Enter the phone number of the person responsible for the order.
* **Order Date** (`order_date`, date, required): Enter the date when the order was placed.
* **Reference Type** (`reference_type`, select_multiple, optional): Select the type of reference required for the order.
* **Comments** (`comments`, text, optional): Enter any additional comments about the order.
* **Delivery Street** (`delivery_street`, text, optional): Enter the delivery street address.
* **Delivery City** (`delivery_city`, text, optional): Enter the delivery city.
* **Delivery State** (`delivery_state`, text, optional): Enter the delivery state.
* **Delivery ZIP** (`delivery_zip`, text, optional): Enter the delivery ZIP code.
* **University Name** (`university_name`, text, required): Enter the name of the university.
* **University Address** (`university_address`, text, required): Enter the address of the university.
* **University Contact** (`university_contact`, text, optional): Enter the contact information of the university.
* **University Email** (`university_email`, email, optional): Enter the email of the university.
* **University Phone** (`university_phone`, text, optional): Enter the phone number of the university.
* **Department** (`department`, text, optional): Enter the department name.
* **Department Name** (`department_name`, text, optional): Enter the name of the department.
* **Order Status** (`order_status`, select_one, required): Select the status of the order.
* **Submit** (`submit`, text, required): Click this button to submit the form.

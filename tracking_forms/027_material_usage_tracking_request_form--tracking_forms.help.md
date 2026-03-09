# Material Usage Tracking Request Form - Help Guide
## Purpose
This form is used to track material usage requests for various departments and employees. It helps in managing material needs accurately and effectively.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the material type from the list provided.
2. Enter the material name.
3. Enter the requested amount and unit of measurement.
4. Provide the supplier's email and phone number.
5. Select the department and employee responsible for the request.
6. Enter the date and time of the request.
7. Enter the purpose of the request.
8. Optionally, select the requested delivery date.

## Field-by-Field Explanation
* **Material Type** (`material_type`, select_one, required): Choose the type of material you are requesting from the list provided (Wood, Metal, Plastic, Ceramic, Glass, Leather, Fabric, or Stone).
* **Material Name** (`material_name`, text, optional): Enter the name of the material you are requesting.
* **Requested Amount** (`requested_amount`, number, optional): Enter the quantity of the material you are requesting.
* **Unit of Measurement** (`unit_of_measurement`, select_one, required): Select the unit of measurement (oz, lb, kg, g, ml, L, cm, in, mm) for the requested amount.
* **Supplier** (`supplier`, text, optional): Enter the supplier's name or company.
* **Supplier Email** (`supplier_email`, email, optional): Enter the supplier's email address.
* **Supplier Phone** (`supplier_phone`, text, optional): Enter the supplier's phone number.
* **Department** (`department`, select_multiple, required): Select all departments that need to be informed about this request.
* **Employee** (`employee`, select_multiple, optional): Check if the employee has approved this request.
* **Date of Request** (`date_of_request`, date, optional): Enter the date the request was made.
* **Time of Request** (`time_of_request`, time, optional): Enter the time the request was made.
* **Purpose of Request** (`purpose`, text, optional): Enter the reason or purpose of this material request.
* **Requested Delivery Date** (`requested_delivery_date`, date, optional): Enter the expected delivery date for the material.

## Tips
- Ensure you fill out all required fields accurately and completely.
- Select the correct material type and unit of measurement for your request.
- Enter the correct email and phone number for the supplier.
- Select all departments and employees who need to be informed about this request.
- If possible, select the expected delivery date to help in scheduling and planning.

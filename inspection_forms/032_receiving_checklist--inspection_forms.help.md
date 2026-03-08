# Receiving Checklist - Help Guide
## Purpose
The purpose of this form is to collect information about the receiving of an item in inventory.

## How To Complete This Form
To complete this form, follow these steps:

*   Enter the **Job Number** of the item being received.
*   Check the **delivery_company** field to confirm whether the delivery company is present or not.
*   Select the **Vehicle Type** that matches the characteristics of the item being received.
*   Enter the **Vehicle Date** of the item, in the format MM/DD/YY.
*   Check the **Side Lights** field to confirm whether the side lights are present or not.
*   Check the **Fog Lights** field to confirm whether the fog lights are present or not.
*   Check the **Main Beam** field to confirm whether the main beam is present or not.
*   Enter any additional information in the **Vehicle Check** field, as necessary.
*   Enter the **Delivery Company** name in the corresponding field.

## Field-by-Field Explanation
### Job Number (`job_number`, text, required)
The **Job Number** field is used to enter the unique identifier for the job or order number associated with the item being received.

### delivery_company (`delivery_company`, select_one, optional)
The **delivery_company** field allows you to confirm whether the delivery company is present or not. Select "Yes" if the delivery company is present, and "No" otherwise.

### Vehicle Type (`vehicle_type`, select_multiple, optional)
The **Vehicle Type** field is used to select the type of vehicle that matches the characteristics of the item being received. Select all that apply.

### Vehicle Date (`vehicle_date`, date, optional)
The **Vehicle Date** field is used to enter the date of the vehicle, in the format MM/DD/YY.

### Side Lights (`vehicle_side_lights`, select_one, optional)
The **Side Lights** field is used to confirm whether the side lights are present or not. Select "Yes" if present, and "No" otherwise.

### Fog Lights (`vehicle_fog_lights`, select_one, optional)
The **Fog Lights** field is used to confirm whether the fog lights are present or not. Select "Yes" if present, and "No" otherwise.

### Main Beam (`vehicle_main_beam`, select_one, optional)
The **Main Beam** field is used to confirm whether the main beam is present or not. Select "Yes" if present, and "No" otherwise.

### Vehicle Check (`vehicle_check`, text, optional)
The **Vehicle Check** field is used to enter any additional information about the item being received.

### Delivery Company (`delivery_company`, text, optional)
The **Delivery Company** field is used to enter the name of the delivery company that sent the item.

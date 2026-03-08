<thinking>
This form is designed to collect information for uniform orders from healthcare staff members. It is intended for use by hospital staff to request uniforms from the hospital's uniform vendor. The form will help the vendor to fulfill the order accurately and efficiently. The form fields are divided into two main sections: Staff Information and Order Details. 

The form is used to collect data such as staff ID, staff name, uniform type, style, size (in multiple units), date, time, email, phone number, and vendor information. The vendor information includes the vendor's name, representative's name, and manager's name.
</thinking>

# healthcare_uniform_order_form - Help Guide
## Purpose
This form is used to collect information for uniform orders from healthcare staff members.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your Staff ID number.
2. Enter your staff name.
3. Select the correct Uniform Type (F or M).
4. Select the desired Uniform Style.
5. Enter the size of the uniform in multiple units (XL, Large, XLT, and LargeT).
6. Enter the Date for the uniform order.
7. Enter the Time for the uniform order.
8. Enter your Email address.
9. Enter your Phone number.
10. Enter the Vendor's name.
11. Enter the Vendor's Representative's name.
12. Enter the Vendor's Manager's name.
13. Optionally, you can enter additional details in the Note fields.
14. Submit the form.

## Field-by-Field Explanation
- **Staff ID** (`staff_id`, `number`, required): Enter your staff ID number.
- **Staff Name** (`staff_name`, `text`, required): Enter your full name.
- **Uniform Type** (`uniform_type`, `select_one`, required): Select the correct uniform type (F or M).
- **Uniform Style** (`uniform_style`, `select_multiple`, required): Select the desired uniform style.
- **Size (XL)** (`size_xl`, `number`, optional): Enter the size of the uniform in Extra Large units.
- **Size (Large)** (`size_large`, `number`, optional): Enter the size of the uniform in Large units.
- **Size (XL Alt)** (`size_xl_alt`, `number`, optional): Enter the size of the uniform in Extra Large units (Alternate).
- **Size (Large Alt)** (`size_large_alt`, `number`, optional): Enter the size of the uniform in Large units (Alternate).
- **Date** (`date`, `date`, required): Enter the date for the uniform order.
- **Time** (`time`, `time`, optional): Enter the time for the uniform order.
- **Note** (`note`, `note`, optional): Enter any additional details or comments.
- **Email** (`email`, `email`, required): Enter your email address.
- **Phone** (`phone`, `text`, required): Enter your phone number.
- **Department** (`department`, `text`, optional): Enter your department name.
- **Building** (`building`, `text`, optional): Enter the building name.
- **Floor** (`floor`, `text`, optional): Enter the floor number.
- **Room** (`room`, `text`, optional): Enter the room number.
- **Order Date** (`order_date`, `date`, required): Enter the date for the uniform order.
- **Order Time** (`order_time`, `time`, optional): Enter the time for the uniform order.
- **Staff Notes** (`staff_notes`, `note`, optional): Enter any additional details or comments from staff.
- **Supervisor Notes** (`supervisor_notes`, `note`, optional): Enter any additional details or comments from supervisor.
- **Vendor** (`vendor`, `text`, required): Enter the vendor's name.
- **Vendor Representative** (`vendor_rep`, `text`, optional): Enter the vendor's representative's name.
- **Vendor Manager** (`vendor_manager`, `text`, optional): Enter the vendor's manager's name.
- **Submitter** (`submittor`, `text`, required): Enter the name of the person submitting the form.

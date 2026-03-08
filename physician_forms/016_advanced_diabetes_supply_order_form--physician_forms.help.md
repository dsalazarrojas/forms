# Advanced Diabetes Supply Order Form - Help Guide
## Purpose
This form is designed for healthcare professionals to order supplies related to diabetes care, specifically insulin, glucose monitoring, and other related supplies. It is used for logistics and ordering purposes within a healthcare setting.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the ordering physician information section with your details.
2. Specify the types and quantities of insulin needed.
3. Select the required glucose monitoring and continuous glucose monitoring supplies.
4. Choose the necessary insulin delivery supplies.
5. Select educational materials for the patient, if needed.
6. Provide any special requirements for storage.
7. Choose the delivery timing for the order.
8. Indicate if the order has been approved by the finance department.
9. Add any additional comments or instructions.

## Field-by-Field Explanation

* **Physician Name** (`physician_name`, `text`, required): Enter your full name as a physician.
* **Physician License Number** (`physician_license_number`, `text`, required): Enter your medical license number.
* **Hospital Department** (`hospital_department`, `text`, required): Enter the department placing the order.
* **Hospital Name** (`hospital_name`, `text`, required): Enter the name of the hospital or medical facility.
* **Shipping Address** (`shipping_address`, `text`, required): Enter the complete address for delivery of supplies.
* **Contact Person Name** (`contact_person_name`, `text`, required): Enter the name of the person to contact regarding the order.
* **Contact Person Phone** (`contact_person_phone`, `text`, required): Enter the phone number for order inquiries.
* **Insulin Types Ordered** (`insulin_types_ordered`, `select_multiple`, required): Select the types of insulin being ordered (Rapid-acting, Short-acting, Intermediate-acting, Long-acting, Ultra-long acting, Premixed, or None).
* **Insulin Quantities** (`insulin_quantities`, `text`, required): Enter the quantity needed for each insulin type (in vials or pens).
* **Glucose Monitoring Supplies** (`glucose_monitoring_supplies`, `select_multiple`, required): Select the glucose monitoring supplies needed (Blood glucose meters, Test strips, Lancets, Control solution, Carrying case, or None).
* **Continuous Glucose Monitoring Supplies** (`continuous_glucose_monitoring_supplies`, `select_multiple`, required): Select the continuous glucose monitoring supplies needed (CGM sensors, Transmitters, Receivers, Calibration supplies, Adhesive patches, or None).
* **Insulin Delivery Supplies** (`insulin_delivery_supplies`, `select_multiple`, required): Select the insulin delivery supplies needed (Insulin syringes, Insulin pens, Pen needles, Insulin pumps, Infusion sets, Reservoirs, or None).
* **Diabetes Education Materials** (`diabetes_education_materials`, `select_multiple`, optional): Select the educational materials needed for the patient (Instructional pamphlets, Injection technique guides, Nutritional guidelines, Monitoring logs, or None).
* **Special Requirements** (`special_requirements`, `text`, optional): Enter any special storage requirements for the supplies.
* **Delivery Timing** (`delivery_timing`, `select_one`, required): Choose when you need the supplies delivered (As soon as possible, Within 1 week, Within 2 weeks, Specific date, or Standard delivery).
* **Budget Approval** (`budget_approval`, `select_one`, required): Indicate if the order has been approved by the finance department (Yes, No, or Pending approval).
* **Additional Comments** (`additional_comments`, `text`, optional): Enter any special instructions or comments about the order.

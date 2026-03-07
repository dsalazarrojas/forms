<thinking>
This form is designed to collect information about vehicle repairs, allowing customers to submit a service request and provide details about their vehicle's problems. The form is likely to be used by mechanics or repair shop staff to diagnose and estimate the cost of repairs.
</thinking>

# vehicle_repair_form - Help Guide
## Purpose
This form is used to collect information about vehicle repairs from customers.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the vehicle problem description field to explain the issue you are experiencing with your vehicle.
2. Select your vehicle's year from the provided options.
3. Choose the make of your vehicle from the list.
4. Choose the model of your vehicle from the list.
5. Select the type of problem your vehicle is experiencing (e.g. engine, transmission, etc.).
6. Enter your name and contact phone number (if applicable).
7. Enter your email address (if applicable).
8. Leave any additional comments or notes about the repair request.
9. Estimate the service request and labor cost (if you have an idea of the time and cost involved in the repair).
10. Estimate the part cost involved in the repair (if applicable).

## Field-by-Field Explanation
- **Vehicle Problem Description** (`vehicle_problem_description`, text, optional): Describe the problem you are experiencing with your vehicle, including any symptoms or details.
- **Vehicle Year** (`vehicle_year`, number, required): Select the year of your vehicle.
- **Vehicle Make** (`vehicle_make`, select_one, required): Choose the make of your vehicle from the list.
- **Vehicle Model** (`vehicle_model`, select_one, required): Choose the model of your vehicle from the list.
- **Vehicle Problem Type** (`vehicle_problem_type`, select_multiple, optional): Select the type of problem your vehicle is experiencing (e.g. engine, transmission, etc.).
- **Customer Name** (`customer_name`, text, optional): Enter your name, if you would like to be contacted.
- **Contact Phone** (`contact_phone`, text, optional): Enter your contact phone number, if you would like to be contacted.
- **Email** (`email`, email, optional): Enter your email address, if you would like to be contacted.
- **Comments** (`comments`, note, optional): Leave any additional comments or notes about the repair request.
- **Service Request** (`service_request`, time, optional): Estimate the service request and labor cost involved in the repair (if you have an idea of the time and cost involved).
- **Labor Cost** (`labor_cost`, number, optional): Estimate the labor cost involved in the repair (if applicable).
- **Part Cost** (`part_cost`, number, optional): Estimate the part cost involved in the repair (if applicable).

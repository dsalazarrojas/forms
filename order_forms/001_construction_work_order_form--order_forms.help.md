<thinking>
This form is designed to collect information for a construction work order. It's intended for use by clients who need to request and manage construction services. Before proceeding, ensure this is the correct form for your needs and that you don't already have a similar form in your system that you'd rather use.
</thinking>

# Construction Work Order Form - Help Guide
## Purpose

The Construction Work Order Form is used to capture information about a client's construction project, including their contact details, work order specifics, and payment terms. This form will help you efficiently collect and organize the necessary data to manage and fulfill the client's request.

## How To Complete This Form

1. Start by filling out the client's contact information, including the Company Name, Contact Person, Email Address, and Phone Number.
2. Provide the full address where the project will be performed in the Project Site Address field.
3. Select the Date the work order is issued and the Scheduled Start Date for the project.
4. Choose the Type of Service Required from the list provided.
5. Add a Detailed Work Description of the project in the Work Description field.
6. If necessary, specify any Materials Required and Estimated Labor Hours expected for the project.
7. Set the Hourly Rate and Material Cost for the project.
8. Enter the Additional Fees or charges associated with the project.
9. Calculate the Total Amount Due based on labor and material costs.
10. Select the Payment Terms from the list provided.
11. If needed, add any Special Instructions or Notes about the project.
12. List any specific Safety Requirements for the project.
13. Finally, ensure you've entered the Authorized By field with the name of the person authorizing this work order.

## Field-by-Field Explanation

* **Client Company Name (1)** (`client_company_name`, `text`, required): This field is for the name of the company requesting the construction services.
* **Client Contact Person (2)** (`client_contact_person`, `text`, required): Enter the primary contact person's name for this project.
* **Client Email Address (3)** (`client_email`, `email`, required): Provide the email address used for correspondence with the client.
* **Client Phone Number (4)** (`client_phone`, `text`, required): Enter the client's contact phone number.
* **Project Site Address (5)** (`project_site_address`, `text`, required): The full address where the project will be performed.
* **Work Order Date (6)** (`work_order_date`, `date`, required): Select the Date the work order is issued.
* **Work Start Date (7)** (`work_start_date`, `date`, required): Choose the Scheduled Start Date for the project.
* **Expected Completion Date (8)** (`work_completion_date`, `date`, optional): Enter the Expected date work will be completed. This field is not required.
* **Type of Service Required (9)** (`service_type`, `select_one`, required): Select the primary service needed for the project from the provided options.
* **Work Description (10)** (`work_description`, `text`, required): Describe the project in detail, outlining the work to be performed.
* **Materials Required (11)** (`materials_required`, `text`, optional): If necessary, list any materials needed for the job.
* **Estimated Labor Hours (12)** (`labor_hours`, `number`, required): Enter the Number of hours expected for project completion.
* **Hourly Rate (13)** (`hourly_rate`, `number`, required): Set the Rate per hour in dollars for the project.
* **Material Cost (14)** (`material_cost`, `number`, optional): Enter the Total cost of materials for the project.
* **Additional Fees (15)** (`additional_fees`, `number`, optional): If applicable, enter any additional charges or fees associated with the project.
* **Total Amount Due (16)** (`total_amount_due`, `number`, required): This field is calculated based on labor and material costs.
* **Payment Terms (17)** (`payment_terms`, `select_one`, required): Select the payment terms from the provided options.
* **Special Instructions or Notes (18)** (`special_instructions`, `text`, optional): Add any additional information or requirements for the project.
* **Safety Requirements (19)** (`safety_requirements`, `text`, optional): List any specific safety protocols to follow for the project.
* **Authorized By (20)** (`authorized_by`, `text`, required): Enter the name of the person authorizing this work order.

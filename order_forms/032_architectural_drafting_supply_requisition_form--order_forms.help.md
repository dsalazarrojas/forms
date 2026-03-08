# Architectural Drafting Supply Requisition Form - Help Guide
## Purpose
This form is designed to collect information from a requestor for architectural drafting supplies. It is used to officially request supplies within an organization for architectural drafting projects. The form captures personal and project information, supply details, and urgency level for procurement purposes.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your name and email address in the **Requestor Information** section.
2.  Identify the department or project that requires the supplies in the **Department or Project** field.
3.  Enter the date you need the supplies in the **Date Needed By** field.
4.  Select the urgency level of the request in the **Urgency Level** field.
5.  List the supplies you need, along with their quantity, in the **Supply Items** section.
6.  If additional supplies or notes are required, enter them in the **Additional Items or Notes** field.
7.  Specify any special dimensions or material requirements for the supplies in the **Size or Specifications** field.
8.  If applicable, select the quality standard needed for the supplies in the **Quality Standards Required** field.
9.  Identify the supervisor who must approve the request in the **Manager or Approver Name** field.
10.  Finally, estimate the total cost for the supplies in the **Estimated Total Cost** field.

## Field-by-Field Explanation

### Requestor Information
*   **Requestor Name** (`requestor_name`, `text`, required): Enter your name as the person making the request.
*   **Email Address** (`requestor_email`, `email`, required): Enter your email address for contact purposes.
*   **Department or Project** (`requestor_department`, `text`, required): Identify which team within the organization needs these supplies.

### Supply Items
*   **First Supply Item** (`supply_item_1`, `text`, required): Enter the name or SKU of the first supply item needed.
*   **Quantity for Item 1** (`quantity_1`, `number`, required): Enter the quantity of the first supply item needed.
*   **Second Supply Item** (`supply_item_2`, `text`, optional): Enter the name or SKU of the second supply item needed, if applicable.
*   **Quantity for Item 2** (`quantity_2`, `number`, optional): Enter the quantity of the second supply item needed, if applicable.
*   **Third Supply Item** (`supply_item_3`, `text`, optional): Enter the name or SKU of the third supply item needed, if applicable.
*   **Quantity for Item 3** (`quantity_3`, `number`, optional): Enter the quantity of the third supply item needed, if applicable.
*   **Additional Items or Notes** (`additional_items`, `text`, optional): Enter any additional supply items or notes, if not covered above.

### Specifications
*   **Dimensions, sizes, or special requirements** (`size_specifications`, `text`, optional): Specify any dimensions, sizes, or special requirements for the supplies requested.
*   **Quality Standards Required** (`quality_standards`, `select_one`, optional): Select the quality standard required for the supplies if applicable, Standard, Professional grade, Premium grade, or Archival quality.

### Timeline and Approval
*   **Date Needed By** (`delivery_date_needed`, `date`, required): Enter the date by which the supplies are needed.
*   **Urgency Level** (`urgency_level`, `select_one`, required): Select the urgency level for the request, Routine, Standard, Expedited, or Emergency.
*   **Manager or Approver Name** (`approver_name`, `text`, optional): Enter the name of the supervisor who must approve the request, if applicable.

### Additional Information
*   **Estimated Total Cost** (`estimated_cost`, `number`, optional): Estimate the total cost for the supplies requested, if applicable.

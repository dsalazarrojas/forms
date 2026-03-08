# Cinema Concession Requisition Form - Help Guide
## Purpose
The Cinema Concession Requisition Form is used by cinema staff to request restocking of concession supplies. The form helps ensure that the correct supplies are ordered in a timely manner, and that the requested date matches the delivery schedule.

## How To Complete This Form
1.  Fill in your Full Name and Employee ID to identify yourself as the requestor.
2.  Select the Cinema Location where the supplies are needed.
3.  Choose the Concession Stand Number that requires restocking.
4.  Enter the Date of Request when you're submitting the form.
5.  Select the Priority Level of your request, based on the urgency.
6.  Select all the required supplies from the respective sections.
7.  Choose the Current Inventory Level as an estimate of the remaining supplies.
8.  Enter the Expected Delivery Date for the restocking.
9.  Add any Special Instructions or Notes.
10.  If you have any Equipment Issues to report, enter them here.
11.  Check the Manager Approval Status, which will be updated once reviewed.
12.  Finally, confirm the Delivery Status.

## Field-by-Field Explanation

*   **Requester Full Name** (`requester_name`, text, required): Enter your full name to identify yourself as the requestor.
*   **Employee ID** (`employee_id`, text, required): Enter your employee ID for reference.
*   **Cinema Location** (`location`, select_one, required): Select the location of the cinema where the supplies are needed.
*   **Concession Stand Number** (`concession_stand`, select_one, required): Choose the number of the concession stand that requires restocking.
*   **Date of Request** (`request_date`, date, required): Enter the date when the request is submitted.
*   **Priority Level** (`priority_level`, select_one, required): Choose the urgency of the request, with options from Low to Critical.
*   **Popcorn Supplies** (`popcorn_needed`, select_multiple, required): Select all required popcorn supplies, including kernels, oil, salt, butter, and packaging.
*   **Beverage Supplies** (`beverages_needed`, select_multiple, required): Select all required beverage supplies, including syrups and cups.
*   **Candy Supplies** (`candy_needed`, select_multiple, required): Select all required candy supplies.
*   **Snack Supplies** (`snacks_needed`, select_multiple, required): Select all required snack supplies.
*   **Condiment Supplies** (`condiments_needed`, select_multiple, required): Select all required condiment supplies.
*   **Packaging Supplies** (`packaging_needed`, select_multiple, required): Select all required packaging supplies, including cups, trays, and bags.
*   **Current Inventory Level** (`current_inventory`, select_one, required): Estimate the current inventory level as a percentage.
*   **Expected Delivery Date** (`expected_delivery`, date, required): Enter the date when the delivery is expected.
*   **Special Instructions** (`special_instructions`, text, optional): Add any special requirements or notes.
*   **Equipment Issues** (`equipment_issues`, text, optional): Report any equipment issues, if applicable.
*   **Manager Approval Status** (`manager_approval`, select_one, required): Select the status of the manager's approval, with options from Approved to Needs Review.
*   **Delivery Confirmation** (`delivery_confirmation`, select_one, optional): Confirm the delivery status, with options from Delivered Complete to Not Yet Delivered.

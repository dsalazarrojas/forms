# Catering Vendor Substitution Request Form - Help Guide

## Purpose

This form is used to request substitution of a catering vendor for an event due to various reasons such as vendor cancellation, quality issues, or budget concerns. The form helps event planners gather information necessary to evaluate and make decisions on the substitution request.

## How To Complete This Form

1. **Fill out the request header**: Provide the date the request is submitted.
2. **Enter basic contact information**: Fill in the requestor's name, email, and phone number.
3. **Enter event details**: Specify the event name, date, and location.
4. **Specify the reason for substitution**: Choose a reason from the dropdown list or enter a custom reason.
5. **Provide detailed explanation**: Enter a brief description of the reason for substitution.
6. **Propose a new vendor**: Enter the name, contact information, and relevant experience of the proposed vendor.
7. **Financial information**: Enter the original and proposed contract amounts and indicate if additional budget is available.
8. **Confirm approval status**: Specify if the substitution request is approved, pending review, rejected, or needs further discussion.

## Field-by-Field Explanation

* **Request Date** (`request_date`, `date`, required): The date when the request is submitted.
* **Requestor Name** (`requestor_name`, `text`, required): The person submitting the request.
* **Email Address** (`requestor_email`, `email`, required): The email address of the person submitting the request.
* **Phone Number** (`requestor_phone`, `text`, required): The phone number of the person submitting the request.
* **Event Name** (`event_name`, `text`, required): The name of the event.
* **Event Date** (`event_date`, `date`, required): The date of the event.
* **Event Location** (`event_location`, `text`, required): The location of the event.
* **Days Until Event** (`days_until_event`, `number`, optional): The number of days until the event.
* **Current Catering Vendor** (`current_vendor_name`, `text`, required): The name of the current catering vendor.
* **Current Vendor Contact** (`current_vendor_contact`, `text`, optional): The contact information of the current vendor.
* **Reason for Substitution Request** (`reason_for_substitution`, `select_one`, required): Choose from the dropdown list or enter a custom reason.
* **Detailed Explanation** (`reason_details`, `text`, required): A brief description of the reason for substitution.
* **Proposed New Catering Vendor** (`proposed_vendor_name`, `text`, required): The name of the proposed vendor.
* **Proposed Vendor Contact Information** (`proposed_vendor_contact`, `text`, required): The contact information of the proposed vendor.
* **Vendor Experience Relevant to Event** (`proposed_vendor_experience`, `text`, optional): Any relevant experience of the proposed vendor related to the event.
* **Original Contract Amount** (`original_contract_amount`, `number`, required): The original contract amount.
* **Proposed Contract Amount** (`proposed_contract_amount`, `number`, required): The proposed contract amount.
* **Financial Impact** (`financial_impact`, `number`, optional): The cost difference between the original and proposed contract amounts.
* **Is additional budget available if needed?** (`budget_available`, `select_one`, required): Specify if additional budget is available.
* **Substitution Request Approved** (`approval_status`, `select_one`, required): Specify if the substitution request is approved, pending review, rejected, or needs further discussion.

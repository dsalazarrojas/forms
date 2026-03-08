<thinking>
This form is designed for requesting the acquisition of new assets for the organization, such as equipment or software. It is intended for use by employees with the authority to make asset acquisition requests, typically from department managers or purchasing agents. This form ensures that all necessary information is collected for the acquisition process, including the requesting department, the asset's title and description, the primary purpose of acquisition, estimated cost, preferred vendor, alternative vendors, budget code, estimated asset lifecycle, and ongoing maintenance requirements. It also includes a field for the date of the request and a flag to indicate if the request is urgent. This form is designed to be completed by the person requesting the asset, and is intended to facilitate the acquisition process and ensure that all relevant information is captured.

Please note that this form is part of a larger system, and some fields may be required or have specific constraints that are not explained in this help guide. If you are unsure about any field, please consult with your department manager or purchasing agent.

Also, please ensure that you are completing this form accurately and thoroughly, as the information collected will be used to make decisions about the acquisition process.
</thinking>

# Asset Acquisition Form - Help Guide

## Purpose
This form is used to request the acquisition of new assets for the organization.

## How To Complete This Form
1. Fill out the form completely and accurately, following the instructions for each field.
2. Review the form carefully before submitting it for approval.

## Field-by-Field Explanation

* **Requester Full Name** (`asset_requester_name`, text, required): Enter the full name of the person requesting the asset.
* **Requesting Department** (`requesting_department`, text, required): Enter the name of the department making the request.
* **Asset Title and Brief Description** (`asset_title_description`, text, required): Enter a concise description of the asset being requested, including its title (e.g. "MacBook Pro M3, Industrial Laser Cutter").
* **Primary Purpose of Acquisition** (`acquisition_purpose`, text, required): Describe how the asset will be used to support operations.
* **Total Estimated Cost** (`estimated_cost_acquisition`, number, required): Enter the estimated total cost of the asset, including shipping and taxes, in USD.
* **Preferred Vendor Name** (`primary_vendor_name`, text, required): Enter the name of the preferred vendor for the asset.
* **Alternative Vendors Considered** (`alternative_vendors_list`, text, optional): Briefly explain why the preferred vendor was chosen (if applicable).
* **Budget Code or Project ID** (`budget_project_code`, text, required): Enter the budget code or project ID for financial allocation.
* **Estimated Asset Lifecycle in Years** (`asset_lifecycle_years`, number, required): Estimate how long the asset is expected to remain in service.
* **Ongoing Maintenance and Support Requirements** (`maintenance_req_notes`, text, optional): Describe any ongoing maintenance or support requirements for the asset (e.g. "Annual service contract needed").
* **Note - This acquisition requires department manager sign-off** (`manager_approval_notice_acq`, note, optional): This field will be reviewed and approved by the department manager before submission.
* **Date of Request** (`request_date_acq`, date, required): Enter the date the request was made.
* **Is this an urgent acquisition request?** (`urgent_need_flag_acq`, select_one, optional): Check this box if the request is urgent and needs to be processed quickly.

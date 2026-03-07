<thinking>
This form is designed to help internal users understand how to create a Strata Records Search Request form. The form is used to request access to certain records within a strata complex. This form should only be used for valid and legitimate reasons, and users should ensure that they are not duplicating requests for the same records. 
</thinking>

# Strata Records Search Request - Help Guide
## Purpose
The Strata Records Search Request form is a tool to facilitate access to specific strata records. It's used to request access to building plans, financial reports, or other types of documents within a strata complex.

## How To Complete This Form
1. To complete this form, select a strata type (e.g., strata plan, freehold) from the strata type dropdown menu.
2. Select the type of document you are looking for (e.g., building plans, financial reports).
3. Enter the document ID or reference number if applicable.
4. Enter the address or location of the property (optional).
5. Select the date and time you would like to search for records.
6. Enter any additional comments or context (optional).

## Field-by-Field Explanation

* **Strata Records Search Request** (`strata_records_search_request`, text, optional): A description of your search request.
* **Strata Type** (`strata_type`, select_one, required): Select the type of strata you are requesting access to (e.g., strata plan, freehold).
* **Strata Manager ID** (`strata_manager_id`, text, optional): If known, enter the manager's ID for faster search results.
* **Strata Document Type** (`strata_document_type`, select_one, required): Select the type of document you are looking for (e.g., building plans, financial reports).
* **Strata Plan ID** (`strata_plan_id`, text, optional): If known, enter the strata plan ID for faster search results.
* **Address** (`address`, text, optional): Enter the address or location of the property (optional).
* **Document Type** (`document_type`, select_one, required): Select the type of document you are looking for (e.g., building plans, financial reports).
* **Document ID** (`document_id`, text, optional): If known, enter the document ID for faster search results.
* **Search Date** (`search_date`, date, optional): Enter the date you would like to search for records.
* **Search Time** (`search_time`, time, optional): Enter the time you would like to search for records.
* **Strata Name** (`strata_name`, text, optional): Enter the name of the strata complex (optional).
* **Comments** (`search_date`, text, optional): Enter any additional comments or context for the search request.

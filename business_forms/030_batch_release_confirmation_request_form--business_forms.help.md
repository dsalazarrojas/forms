# Batch Release Confirmation Request Form - Help Guide
## Purpose
This form is used to request the final release of manufactured goods. It ensures that all required checks and criteria have been met before allowing the batch to proceed with release. The form requires the submission of specific details to confirm that the batch is ready for release.

## How To Complete This Form
To complete this form, follow these steps:

*   Review the provided fields and ensure you have the necessary information.
*   Fill in the required fields with accurate and up-to-date information.
*   Review the select one fields carefully and choose the correct option that best represents the status or condition of the batch.
*   Once complete, submit the form for review and processing.

## Field-by-Field Explanation

*   **Request Tracking ID** (`request_id`, text, required): This is a unique identifier assigned to each request for batch release. Enter the tracking ID provided to you.
*   **Batch ID for Release** (`batch_id_to_release`, text, required): Enter the ID of the batch you are requesting for release.
*   **Product SKU or Item Number** (`product_sku`, text, required): Enter the product SKU or item number of the batch being released.
*   **Final QC Report Reference Number** (`qc_report_link`, text, required): Enter the reference number of the final quality control report.
*   **Are all manufacturing logs and records complete?** (`manufacturing_docs_complete`, select_one, required): Choose Yes - Verified if all logs and records are complete.
*   **Have product labels been verified for accuracy?** (`labels_verified`, select_one, required): Choose Yes - Verified if all product labels have been verified for accuracy.
*   **Were any deviations logged during production?** (`deviations_logged`, select_one, required): Choose No Deviations, Yes - Resolved and Closed, or Yes - Pending Resolution (Cannot Release) as per the production records.
*   **Proposed Release Condition** (`release_conditions`, select_one, required): Choose the proposed release condition from the options: Full Commercial Release, Restricted Release (Internal Use Only), Sample Release, or Reword/Hold.
*   **Authorizing Quality Manager** (`authorizing_manager`, text, required): Enter the name of the authorizing quality manager.
*   **Planned Release Date** (`planned_release_date`, date, required): Enter the planned release date of the batch.
*   **Intended Inventory Destination** (`inventory_destination`, select_one, required): Choose the destination where the batch will be stored: Warehouse A (Main), Distribution Center West, External Logistics Partner, or Quarantine Zone.
*   **Date of Request** (`request_submission_date`, date, required): Enter the date the request was submitted.
*   **I confirm that all release criteria have been met** (`signature_acknowledgment`, select_one, required): Choose I Confirm to indicate that all release criteria have been met.

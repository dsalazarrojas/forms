# Missing Loyalty Points Claim Form - Help Guide
## Purpose
The Missing Loyalty Points Claim Form is designed to help customers claim missing loyalty points. Customers can use this form to report issues with their loyalty points and provide necessary information to resolve the issue.

## How To Complete This Form
1. On the first page, select the relevant "customer service forms" dropdown menu to specify where the issue occurred.
2. On the first page, select the correct method for "verify_purchases" to confirm whether the purchase was online or in-store.
3. On the second page, select the correct method for "gather_proof" to gather proof of the missing points.
4. Select the correct method for "resolve_points_issues" to resolve the issue.
5. Enter the "store_name" where the issue occurred.
6. Enter the "purchase_date" of the transaction.
7. Enter the "purchase_time" of the transaction.

## Field-by-Field Explanation
* **missing_loyalty_points_claim_form** (`missing_loyalty_points_claim_form`, text, required: false): Enter a brief description of the issue with your loyalty points.
* **customer_service_forms** (`customer_service_forms`, select, required: false): Select the channel where the issue occurred.
	+ loyalty teams
	+ online channels
	+ stores
* **verify_purchases** (`verify_purchases`, select, required: false): Confirm the purchase method.
	+ verify online
	+ verify in store
* **gather_proof** (`gather_proof`, select, required: false): Choose how to gather proof.
	+ gather online
	+ gather in store
* **resolve_points_issues** (`resolve_points_issues`, select, required: false): Select the method to resolve the issue.
	+ resolve online
	+ resolve in store
* **store_name** (`store_name`, text, required: false): Enter the store where the issue occurred.
* **purchase_date** (`purchase_date`, date, required: false): Enter the date of the transaction.
* **purchase_time** (`purchase_time`, time, required: false): Enter the time of the transaction.

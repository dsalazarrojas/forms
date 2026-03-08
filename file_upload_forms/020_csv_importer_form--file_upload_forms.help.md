# CSV Importer Form - Help Guide

## Purpose

## How To Complete This Form

To complete this form, please follow these steps:

1. Select the department and priority of the import request.
2. Choose the target system where the data will be imported.
3. Specify the object type (e.g. Users, Orders, Inventory).
4. Select the action type (e.g. Insert, Update, Upsert, Delete).
5. Enter the estimated number of rows to be imported.
6. Decide if custom column mapping is required.
7. Choose the file encoding and delimiter (e.g. Comma, Semicolon, Tab, Pipe).
8. Confirm that the target data has been backed up.
9. Request a dry-run report (recommended for large imports).
10. Select the error handling strategy (e.g. Stop on first error, Skip errored rows and continue).
11. Add any additional import instructions.

## Field-by-Field Explanation

* **Requested By** (`requester_name`, `text`, required): Enter the name of the person requesting the import.
* **Department** (`department`, `select_one`, required): Select the department responsible for the import request.
* **Import Priority** (`priority`, `select_one`, required): Choose the priority of the import request (Standard, Urgent - Time Sensitive, Critical - Production Blocker).
* **Target System** (`target_system`, `select_one`, required): Select the system where the data will be imported (e.g. Production Database, Sandbox Environment, CRM, Analytics Warehouse, Billing Platform).
* **Object or Table Name** (`object_type`, `text`, required): Enter the name of the object or table to be imported (e.g. Users, Orders, Inventory).
* **Action Type** (`action_type`, `select_one`, required): Choose the action to be performed on the target system (e.g. Insert - New records only, Update - Existing records, Upsert - Mixed, Delete - Bulk removal).
* **Estimated Number of Rows** (`row_count`, `number`, required): Enter the estimated number of rows to be imported.
* **Is Custom Column Mapping Required?** (`column_mapping_required`, `select_one`, required): Decide if custom column mapping is required for the import.
* **File Encoding** (`encoding`, `select_one`, required): Select the file encoding (e.g. UTF-8, ISO-8859-1, ASCII, Other).
* **Column Delimiter** (`delimiter`, `select_one`, required): Choose the column delimiter (e.g. Comma, Semicolon, Tab, Pipe).
* **Target Data Backed Up?** (`backup_confirmed`, `select_one`, required): Confirm that the target data has been backed up.
* **Request Dry-Run Report?** (`dry_run_requested`, `select_one`, required): Request a dry-run report for the import (recommended for large imports).
* **Error Handling Strategy** (`error_handling`, `select_one`, required): Select the error handling strategy (e.g. Stop on first error, Skip errored rows and continue).
* **Additional Import Instructions** (`additional_instructions`, `text`, optional): Enter any additional instructions for the import.

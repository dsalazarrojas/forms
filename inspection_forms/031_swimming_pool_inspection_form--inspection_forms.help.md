# Swimming Pool Inspection Form - Help Guide

## Purpose
This form is designed to collect data about swimming pools for inspection, monitoring, and reporting purposes. It helps professionals and local government agencies ensure that pools meet safety and maintenance standards.

## How To Complete This Form
1. Fill in the required fields to provide general information about the pool, such as its name and location.
2. Enter the owner's information, including their name and contact details.
3. Specify the inspection dates when the pool was last inspected and when it will be inspected next.
4. Select all applicable pool contents, such as the pool floor, walls, and equipment.
5. Indicate whether the pool is safe for use or not.
6. Choose the current maintenance schedule for the pool, such as weekly, bi-weekly, or monthly cleaning.
7. Determine the pool's current status, whether it is active or inactive.
8. Enter any notes about the pool's condition or issues.
9. Enter any additional notes from the inspector about the pool's condition or issues.

## Field-by-Field Explanation
* **General Information** (`general_information`, `text`, required: false): Fill in the basic details about the pool, such as its name and location.
* **Owner Information** (`owner_information`, `text`, required: false): Provide the owner's name and contact details for follow-up actions.
* **Inspection Dates** (`inspection_dates`, `text`, required: false): Record the dates of the last and next inspections.
* **Pool Contents** (`pool_contents`, `select_multiple`, required: true): Select all applicable pool contents, such as pool floor, walls, and equipment.
	+ Pool Floor: Select if the pool has a floor.
	+ Pool Walls: Select if the pool has walls.
	+ Pool Surrounds: Select if the pool has a surrounding structure.
	+ Pool Deck: Select if the pool has a deck.
	+ Pool Equipment: Select if the pool has equipment, such as filters or pumps.
* **Pool Safety** (`pool_safety`, `select_one`, required: true): Indicate whether the pool is safe for use or not.
* **Pool Maintenance** (`pool_maintenance`, `select_multiple`, required: true): Choose the current maintenance schedule for the pool.
	+ Weekly: Select if the pool is cleaned weekly.
	+ Bi-weekly: Select if the pool is cleaned bi-weekly.
	+ Monthly: Select if the pool is cleaned monthly.
	+ Quarterly: Select if the pool is cleaned quarterly.
	+ Semi-annually: Select if the pool is cleaned semi-annually.
	+ Annually: Select if the pool is cleaned annually.
* **Pool Status** (`pool_status`, `select_one`, required: true): Indicate the current status of the pool, whether active or inactive.
* **Pool Notes** (`pool_notes`, `note`, required: true): Enter any notes about the pool's condition or issues.
* **Inspector Notes** (`inspector_notes`, `note`, required: true): Enter any additional notes from the inspector about the pool's condition or issues.

<thinking>...</thinking>

# AI Inventory Tracking Pilot Application - Help Guide
## Purpose
The AI Inventory Tracking Pilot Application is a form designed to gather information from organizations interested in evaluating the feasibility and effectiveness of AI-powered inventory tracking solutions. The form asks for basic details about the applying entity, such as name and contact information, and more in-depth information about their current inventory management practices and pain points. It also asks about their desired AI features and the expected outcomes of a pilot program.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your primary contact's name and your company/organization name.
2. Select your business sector and current inventory size.
3. Describe your current inventory management system and the number of storage/warehouse locations.
4. List the top 3 challenges you hope to solve with the pilot.
5. Choose the desired AI features for evaluation.
6. Indicate your technical infrastructure readiness.
7. Confirm the availability of historical data for at least 12 months.
8. Choose a preferred start date for the pilot and estimate the number of staff participating.
9. Describe what constitutes a "successful" pilot for your organization.
10. Confirm your budget authorization status.
11. Agree to sign a Non-Disclosure Agreement (NDA).

## Field-by-Field Explanation
* **Primary Contact Name** (`applicant_name`, Text, Required): Enter your name as the primary contact person for this application.
* **Company/Organization Name** (`company_name`, Text, Required): Enter your company/organization name.
* **Business Sector** (`business_sector`, Select One, Required): Select one of the following:
	+ Manufacturing
	+ Warehousing & Distribution
	+ Retail / Consumer Goods
	+ Healthcare / Medical Supplies
	+ E-commerce
	+ Other
* **Current Inventory Size** (`inventory_size`, Select One, Required): Select one of the following:
	+ Under 1,000
	+ 1,000 - 10,000
	+ 10,001 - 50,000
	+ Over 50,000
* **Current Inventory Management System** (`current_system`, Select One, Required): Select one of the following:
	+ Manual (Paper/Whiteboard)
	+ Spreadsheets (Excel / Google Sheets)
	+ Dedicated Inventory Software
	+ Enterprise Resource Planning (ERP)
* **Number of Storage/Warehouse Locations** (`number_of_locations`, Number, Required): Enter the number of locations where inventory is stored.
* **Primary Inventory Challenges** (`primary_challenges`, Select Multiple, Required): Select up to three of the following challenges:
	+ Low Inventory Accuracy
	+ Frequent Stockouts / Overstocks
	+ Inaccurate Demand Forecasting
	+ Time-consuming Manual Audits
	+ Poor Visibility Across Multiple Sites
* **Desired AI Features** (`desired_ai_features`, Select Multiple, Required): Select up to three of the following features:
	+ Predictive Demand Forecasting
	+ Computer Vision for Visual Counting
	+ Anomaly Detection (Theft/Damage/Loss)
	+ Automated Reorder Optimization
	+ Warehouse Slotting Optimization
* **Technical Infrastructure Readiness** (`technical_readiness`, Select One, Required): Select one of the following:
	+ High Readiness (Reliable Fiber/Cloud Integrated)
	+ Moderate Readiness (Standard Internet/Willing to upgrade)
	+ Low Readiness (Spotty connection/Legacy hardware)
* **Historical Data Availability** (`historical_data_availability`, Select One, Required): Confirm if you have at least 12 months of historical data available:
	+ Yes, structured and digital
	+ Yes, but needs cleaning
	+ 'False'
* **Proposed Pilot Start Date** (`proposed_pilot_start_date`, Date, Required): Choose a date for the pilot to start.
* **Estimated Staff Involvement** (`staff_involvement_count`, Number, Required): Estimate the number of staff participating in the pilot.
* **Expected Success Metrics** (`expected_outcomes`, Text, Required): Describe what constitutes a "successful" pilot for your organization.
* **Budget Authorization Status** (`budget_status`, Select One, Required): Select one of the following:
	+ Budget Approved for Pilot
	+ Seeking Approval / Research phase
	+ Requesting Fully Funded Pilot (Grant)
* **NDA Acceptance** (`nda_acceptance`, Select One, Required): Confirm if you are willing to sign a Non-Disclosure Agreement (NDA):
	+ True
	+ No / Need Legal Review

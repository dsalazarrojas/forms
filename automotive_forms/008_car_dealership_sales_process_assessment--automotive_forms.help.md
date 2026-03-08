# Car Dealership Sales Process Assessment - Help Guide
## Purpose
This guide is a comprehensive help document for users to understand how to complete the Car Dealership Sales Process Assessment form. The form is designed to evaluate the sales process of your dealership, identifying areas of improvement and areas of excellence.

## How To Complete This Form

1. Start by filling in your dealership information, including the name, location, and size.
2. Select your role within the dealership.
3. Choose the period for which you are assessing the sales process (e.g., weekly, monthly, quarterly, or yearly).
4. Select your primary lead sources.
5. Provide the average number of leads per month.
6. Indicate how quickly you respond to leads.
7. Select your sales process.
8. Indicate which CRM system you use.
9. Describe whether you have a documented sales process.
10. Select the average time from first contact to sale.
11. Select your current conversion metrics.
12. Enter the percentage of leads that become appointments.
13. Enter the percentage of appointments that become sales.
14. Select how you follow up with prospects.
15. Indicate how you measure customer satisfaction.
16. Enter your current CSI score.
17. Select whether you collect online reviews.
18. Identify your biggest challenges.
19. Select areas of improvement for your sales process.
20. Enter any additional feedback or comments.
21. Finally, enter the date of this assessment.

## Field-by-Field Explanation

* **Dealership Name** (`name`, `text`, `required`: true): Enter the name of your dealership.
* **Dealership Location** (`location`, `text`, `required`: true): Enter the city and state of your dealership.
* **Dealership Size** (`size`, `select_one`, `required`: true): Select the number of vehicles in your inventory:
	+ Small (under 50)
	+ Medium (50-200)
	+ Large (200-500)
	+ Very Large (over 500)
* **Your Role** (`role`, `select_one`, `required`: true): Select your position at the dealership:
	+ Owner/General Manager
	+ Sales Manager
	+ Finance Manager
	+ Salesperson
	+ BDC Manager
	+ Other
* **Assessment Period** (`period`, `select_one`, `required`: true): Select the period for which you are assessing the sales process:
	+ Weekly
	+ Monthly
	+ Quarterly
	+ Annual
* **Primary Lead Sources** (`lead_sources`, `select_multiple`, `required`: true): Select all that apply:
	+ Website Inquiries
	+ Phone Calls
	+ Walk-ins
	+ Social Media
	+ Third-party Sites (AutoTrader, etc.)
	+ Referrals
	+ Advertising
	+ Service Department
* **Monthly Lead Volume** (`monthly_lead_volume`, `select_one`, `required`: true): Select the average number of leads per month:
	+ Under 100
	+ 100-250
	+ 251-500
	+ 501-1000
	+ Over 1000
* **Average Lead Response Time** (`lead_response_time`, `select_one`, `required`: true): Select how quickly you respond to leads:
	+ Under 5 minutes
	+ 5-15 minutes
	+ 15-30 minutes
	+ 30 minutes to 1 hour
	+ Over 1 hour
* **Sales Process** (`sales_process`, `note`, `required`: false): Describe your sales process (no multiple selection).
* **CRM System** (`crm_system`, `select_one`, `required`: true): Select the CRM system you use:
	+ DealerSocket
	+ VinSolutions
	+ eLead
	+ HubSpot
	+ Salesforce
	+ Proprietary System
	+ None
* **Sales Steps Documented** (`sales_steps_documented`, `select_one`, `required`: true): Select whether you have a documented sales process:
	+ Yes - fully documented and followed
	+ Yes - but not always followed
	+ Partially documented
	+ No formal process
* **Average Sales Cycle** (`average_sales_cycle`, `select_one`, `required`: true): Select the average time from first contact to sale:
	+ Same day
	+ 1-3 days
	+ 4-7 days
	+ 1-2 weeks
	+ Over 2 weeks
* **Conversion Metrics** (`conversion_metrics`, `note`, `required`: false): Describe your conversion metrics (no multiple selection).
* **Lead to Appointment Rate** (`lead_to_appointment_rate`, `select_one`, `required`: true): Enter the percentage of leads that become appointments:
	+ Under 10%
	+ 10-20%
	+ 21-30%
	+ 31-40%
	+ Over 40%
* **Appointment to Sale Rate** (`appointment_to_sale_rate`, `select_one`, `required`: true): Enter the percentage of appointments that become sales:
	+ Under 20%
	+ 20-30%
	+ 31-40%
	+ 41-50%
	+ Over 50%
* **Follow-Up Process** (`follow_up_process`, `select_one`, `required`: true): Select how you follow up with prospects:
	+ Automated system
	+ Manual follow-up
	+ Combination of both
	+ Inconsistent
* **Customer Satisfaction** (`customer_satisfaction`, `note`, `required`: false): Describe how you measure customer satisfaction (no multiple selection).
* **Current CSI Score** (`csi_score`, `select_one`, `required`: true): Enter your current CSI score:
	+ 90-100%
	+ 80-89%
	+ 70-79%
	+ 60-69%
	+ Under 60%
	+ Not tracked
* **Online Review Collection** (`online_review_collection`, `select_one`, `required`: true): Select whether you collect online reviews:
	+ Yes - automated system
	+ Yes - manual requests
	+ Occasionally
	+ False
* **Current Challenges** (`challenges`, `select_multiple`, `required`: true): Select all that apply:
	+ Lead Quality
	+ Lead Response Time
	+ Closing Rate
	+ Follow-Up Consistency
	+ Staff Training
	+ Technology/CRM
	+ Inventory Management
	+ Customer Retention
* **Improvement Priorities** (`improvement_priorities`, `select_multiple`, `required`: true): Select all that apply:
	+ Response Time
	+ Conversion Rates
	+ Customer Experience
	+ Staff Training
	+ Technology Integration
	+ Follow-Up Process
	+ Lead Generation
* **Additional Feedback** (`additional_feedback`, `text`, `required`: false): Enter any additional comments or feedback.
* **Assessment Date** (`assessment_date`, `date`, `required`: true): Enter the date of this assessment.

# COVID 19 Risk Assessment - Help Guide
## Purpose
The COVID-19 Risk Assessment form is designed to help you evaluate your risk level for contracting and spreading COVID-19. It will guide you through a series of questions about your daily activities, social interactions, and health status to help you identify areas where you may be at risk and provide advice on how to reduce your risk.

## How to Complete This Form

1. Please answer each question based on your current situation.
2. For most fields, select the option that best describes your usual behavior or condition.
3. If you are unsure or cannot determine your risk level, select the option that best reflects your current situation.
4. Answer every question carefully, as this will help you receive the most accurate assessment.

## Field-by-Field Explanation

* **Assessment Date** (`assessment_date`, date, required): This is the date of your risk assessment. Enter the date you complete this form.
* **Full Name** (`respondent_name`, text, required): Please enter your full name, including your first and last name.
* **Organization Name** (`organization_name`, text, required): Enter the name of your company or organization.
* **Job Title** (`job_title`, text, required): This is your current job title or position.
* **Email Address** (`email_address`, email, required): Enter your contact email address.
* **Phone Number** (`phone_number`, text, required): Enter your contact phone number.
* **Work Environment** (`work_environment`, select_one, required): Select the option that best describes your primary work environment:
	+ Office
	+ Remote from home
	+ Hybrid
	+ Retail store
	+ Healthcare facility
	+ Manufacturing facility
	+ Construction site
	+ Restaurant or food service
	+ School or educational institution
	+ Other
* **Daily Contact Level** (`daily_contact_level`, select_one, required): Select the option that best describes how many people you come into close contact with daily:
	+ None - I work alone
	+ 1-5 people
	+ 6-10 people
	+ 11-25 people
	+ 26-50 people
	+ More than 50 people
* **High-Risk Population Contact** (`high_risk_population_contact`, select_one, required): Select the option that best describes your regular contact with high-risk populations:
	+ Yes regularly
	+ Yes occasionally
	+ 'False'
	+ Not sure
* **Household Members** (`household_members`, number, required): Enter the number of people living in your household, including yourself.
* **High-Risk Household Members** (`household_high_risk`, select_multiple, required): Select all conditions that apply to any household members:
	+ None
	+ Age 65 or older
	+ Chronic lung disease
	+ Heart condition
	+ Diabetes
	+ Obesity
	+ Immunocompromised
	+ Cancer
	+ Kidney disease
	+ Liver disease
* **Personal Health Conditions** (`personal_health_conditions`, select_multiple, required): Select all health conditions that apply to you:
	+ None
	+ Age 65 or older
	+ Chronic lung disease
	+ Heart condition
	+ Diabetes
	+ Obesity
	+ Immunocompromised
	+ Cancer
	+ Kidney disease
	+ Liver disease
* **Public Transportation Use** (`public_transportation_use`, select_one, required): Select the option that best describes your use of public transportation:
	+ Yes daily
	+ Yes occasionally
	+ No never
* **Travel Frequency** (`travel_frequency`, select_one, required): Select the option that best describes how often you travel outside your local area:
	+ Never
	+ Once a month or less
	+ 2-3 times per month
	+ Weekly
	+ Multiple times per week
* **Mask Compliance** (`mask_compliance`, select_one, required): Select the option that best describes your mask-wearing habits in public:
	+ Always
	+ Most of the time
	+ Sometimes
	+ Rarely
	+ Never
* **Social Distancing Compliance** (`social_distancing_compliance`, select_one, required): Select the option that best describes how often you maintain social distancing:
	+ Always
	+ Most of the time
	+ Sometimes
	+ Rarely
	+ Never
* **Hand Hygiene** (`hand_hygiene`, select_one, required): Select the option that best describes how often you wash or sanitize your hands:
	+ Very frequently - multiple times per hour
	+ Frequently - hourly
	+ Moderately - several times per day
	+ Occasionally - once or twice per day
	+ Rarely
* **Gathering Attendance** (`gathering_attendance`, select_one, required): Select the option that best describes how often you attend indoor gatherings:
	+ Never
	+ Once a month or less
	+ 2-3 times per month
	+ Weekly
	+ Multiple times per week
* **Dining Out** (`dining_out_frequency`, select_one, required): Select the option that best describes how often you dine indoors at restaurants:
	+ Never
	+ Once a month or less
	+ 2-3 times per month
	+ Weekly
	+ Multiple times per week
* **Grocery Shopping Method** (`grocery_shopping_method`, select_one, required): Select the option that best describes how you shop for groceries:
	+ In-person during off-peak hours
	+ In-person during peak hours
	+ Curbside pickup
	+ Delivery service
	+ Someone else shops for me
* **Vaccination Status** (`vaccination_status`, select_one, required): Select the option that best describes your COVID-19 vaccination status:
	+ Fully vaccinated with booster
	+ Fully vaccinated
	+ Partially vaccinated
	+ Not vaccinated but planning to
	+ Not vaccinated and not planning to
* **Recent Symptoms** (`recent_symptoms`, select_one, required): Select the option that best describes if you have experienced any COVID-19 symptoms in the past 14 days:
	+ 'False'
	+ 'True'
* **Recent Exposure** (`recent_exposure`, select_one, required): Select the option that best describes if you have been exposed to anyone with COVID-19 in the past 14 days:
	+ 'False'
	+ 'True'
	+ Not sure
* **Overall Risk Level** (`overall_risk_level`, select_one, required): Select the option that best describes your self-assessment of your overall COVID-19 risk level:
	+ Very Low
	+ Low
	+ Moderate
	+ High
	+ Very High
* **Additional Risk Factors** (`additional_risk_factors`, text, optional): If there are any other concerns or risk factors not listed above, enter them here.

## Tips

- Answer honestly about your daily life and behavior to ensure accurate risk assessment.
- Review the assessment results and follow any recommended precautions or actions.
- If you have any questions or concerns, contact the relevant authorities or health services.

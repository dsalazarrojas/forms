# Case Management Needs Questionnaire - Help Guide
## Purpose

The Case Management Needs Questionnaire is a tool used to assess the needs and risks of individuals or families who are in need of social support and services. The questionnaire helps assessors gather information about the individual's or family's basic needs, risks, and circumstances to determine the level of support and services required.

## How To Complete This Form

1.  Fill out the form with as much information as possible, being as accurate as you can.
2.  Answer each question based on your current situation.
3.  If you are unsure or have questions, please ask your assessor for help.

## Field-by-Field Explanation

### Assessment Date (2)
*   **Assessment Date** (`assessment_date`, date, required): The date on which the assessment is completed.

### Case Manager Name (3)
*   **Case Manager Name** (`assessor_name`, text, required): The name of the case manager who is completing the form.

### Client Name (4)
*   **Client Name** (`client_name`, text, required): The name of the client being assessed.

### Client ID Number (5)
*   **Client ID Number** (`client_id`, text, required): The client's ID number or case number.

### Basic Needs Assessment (6)
*   **Basic Needs Assessment** (`basic_needs`, note, required): A note field to document essential requirements.

### Housing Stability (7)
*   **How Stable Is Your Current Housing** (`housing_stability`, select_one, required): Select one of the following:
    *   Very stable - long term
    *   Stable - lease agreement
    *   Somewhat stable - month to month
    *   Unstable - temporary
    *   Homeless - no housing

### Food Security (8)
*   **Do You Have Reliable Access to Food** (`food_security`, select_one, required): Select one of the following:
    *   Yes - always enough
    *   Sometimes - occasionally short
    *   Often - frequently short
    *   No - regularly without food

### Utilities (9)
*   **Are Utilities Current** (`utilities_status`, select_one, required): Select one of the following:
    *   Yes - all current
    *   Mostly current - occasionally late
    *   Behind on some utilities
    *   Utilities shut off
    *   Utilities included in rent

### Transportation (10)
*   **Do You Have Reliable Transportation** (`transportation_access`, select_one, required): Select one of the following:
    *   Yes - own vehicle
    *   Yes - reliable public transit
    *   Sometimes - depends on others
    *   No - limited transportation
    *   No - no transportation

### Financial Needs (11)
*   **Financial Needs Assessment** (`financial_needs`, note, required): A note field to document economic situation.

### Can You Pay Rent or Mortgage This Month (12)
*   **Can You Pay Rent or Mortgage This Month** (`ability_pay_rent`, select_one, required): Select one of the following:
    *   Yes - easily
    *   Yes - with difficulty
    *   Uncertain
    *   No - cannot pay
    *   Not applicable

### Overwhelming Debt (13)
*   **Do You Have Overwhelming Debt** (`outstanding_debts`, select_one, required): Select one of the following:
    *   No - manageable
    *   Some - concerning
    *   Yes - overwhelming
    *   Yes - unmanageable

### Emergency Savings (14)
*   **Do You Have Emergency Savings** (`savings_available`, select_one, required): Select one of the following:
    *   Yes - 6 plus months
    *   Yes - 3 to 6 months
    *   Yes - less than 3 months
    *   No - no savings

### Current Employment (16)
*   **Are You Currently Employed** (`current_employment`, select_one, required): Select one of the following:
    *   Yes - full-time
    *   Yes - part-time
    *   Yes - self-employed
    *   No - seeking work
    *   No - not seeking
    *   Unable to work

### Employment Needs (15)
*   **Employment Needs** (`employment_needs`, note, required): A note field to document employment status.

### Job Satisfaction (17)
*   **Are You Satisfied with Current Employment** (`job_satisfaction`, select_one, required): Select one of the following:
    *   Very satisfied
    *   Satisfied
    *   Neutral
    *   Dissatisfied
    *   Very dissatisfied

### Job Training Needed (18)
*   **Do You Need Job Training** (`job_training_needed`, select_one, required): Select one of the following:
    *   No - skills adequate
    *   Maybe - some improvement
    *   Yes - need new skills
    *   Yes - need career change

### Childcare Needs (19)
*   **Do You Need Childcare Assistance** (`childcare_needs`, select_one, required): Select one of the following:
    *   No - not needed
    *   No - have adequate care
    *   Yes - need part-time
    *   Yes - need full-time
    *   Yes - need emergency care

### Health Needs (20)
*   **Health Needs Assessment** (`health_needs`, note, required): A note field to document healthcare status.

### Health Insurance (21)
*   **Do You Have Health Insurance** (`health_insurance`, select_one, required): Select one of the following:
    *   Yes - comprehensive
    *   Yes - limited
    *   No - applying
    *   No - not eligible
    *   No - cannot afford

### Unmet Medical Needs (22)
*   **Do You Have Unmet Medical Needs** (`medical_needs`, select_one, required): Select one of the following:
    *   No - all needs met
    *   Minor - routine care
    *   Moderate - some concerns
    *   Significant - major concerns

### Mental Health Needs (23)
*   **Do You Have Mental Health Needs** (`mental_health_needs`, select_one, required): Select one of the following:
    *   No - doing well
    *   Mild - some stress
    *   Moderate - need support
    *   Severe - need immediate help

### Substance Use Concerns (24)
*   **Do You Have Substance Use Concerns** (`substance_use_concerns`, select_one, required): Select one of the following:
    *   No concerns
    *   Past - in recovery
    *   Current - mild
    *   Current - moderate
    *   Current - severe

### Disability Status (25)
*   **Do You Have a Disability** (`disability_status`, select_one, required): Select one of the following:
    *   False
    *   Yes - physical
    *   Yes - mental or emotional
    *   Yes - developmental
    *   Yes - multiple

### Social Support (26)
*   **Social Support Assessment** (`social_support`, note, required): A note field to document support network.

### Family Support (27)
*   **Do You Have Family Support** (`family_support`, select_one, required): Select one of the following:
    *   Very supportive
    *   Somewhat supportive
    *   Limited support
    *   No support
    *   Estranged

### Friend Support (28)
*   **Do You Have Friend Support** (`friend_support`, select_one, required): Select one of the following:
    *   Strong network
    *   Some friends
    *   Few friends
    *   Isolated

### Community Involvement (29)
*   **Are You Involved in Community** (`community_involvement`, select_one, required): Select one of the following:
    *   Very involved
    *   Somewhat involved
    *   Minimally involved
    *   Not involved

### Safety Assessment (30)
*   **Safety Assessment** (`safety_assessment`, note, required): A note field to document personal safety.

### Home Safety (31)
*   **Are You Safe at Home** (`domestic_violence`, select_one, required): Select one of the following:
    *   Yes - always safe
    *   Usually safe
    *   Sometimes unsafe
    *   No - currently unsafe

### Neighborhood Safety (32)
*   **Is Your Neighborhood Safe** (`neighborhood_safety`, select_one, required): Select one of the following:
    *   Very safe
    *   Safe
    *   Somewhat unsafe
    *   Unsafe
    *   Very unsafe

### Risk Factors (33)
*   **Risk Factors Present** (`risk_factors`, select_multiple, required): Select all that apply:
    *   None
    *   History of trauma
    *   Recent loss
    *   Social isolation
    *   Financial crisis
    *   Housing instability
    *   Health crisis
    *   Legal issues
    *   Caregiver burden
    *   Suicidal thoughts
    *   Self-harm history
    *   Substance use
    *   Domestic violence
    *   Child welfare involvement
    *   Elder abuse risk

### Protective Factors (34)
*   **Protective Factors Present** (`protective_factors`, select_multiple, required): Select all that apply:
    *   Strong coping skills
    *   Positive relationships
    *   Stable housing
    *   Steady income
    *   Good health
    *   Faith or spirituality
    *   Community connections
    *   Access to services
    *   Problem-solving skills
    *   Hope for future
    *   Other

### Overall Needs Assessment (35)
*   **Overall Needs Assessment** (`overall_assessment`, note, required): A note field to document overall situation.

### Overall Risk Level (36)
*   **Overall Risk Level** (`risk_level`, select_one, required): Select one of the following:
    *   Low - minimal intervention
    *   Moderate - some support needed
    *   High - intensive support needed
    *   Critical - immediate intervention

### Top Three Priority Needs (37)
*   **Top Three Priority Needs** (`priority_needs`, text, required): Text field to document the top three priority needs.

### Recommended Services (38)
*   **Recommended Services** (`recommended_services`, text, required): Text field to document service plan.

### Client Readiness for Change (39)
*   **Client Readiness for Change** (`client_readiness`, select_one, required): Select one of the following:
    *   Very ready - eager
    *   Ready - willing
    *   Ambivalent - unsure
    *   Not ready - resistant

### Assessor Comments (40)
*   **Assessor Comments** (`assessor_comments`, text, required): Text field to document additional observations.

### Assessor Signature Date (41)
*   **Assessor Signature Date** (`assessor_signature_date`, date, required): Date field to document date signed.

## Tips

*   Answer the questions based on your current situation.
*   If you are unsure or have questions, please ask your assessor for help.

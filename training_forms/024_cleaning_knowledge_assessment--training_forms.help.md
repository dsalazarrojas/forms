# Cleaning Knowledge Assessment - Help Guide
## Purpose
This form is designed to assess the cleaning knowledge of employees to identify areas where they may need additional training or support. It is intended for employees who work in a cleaning role and are expected to follow proper cleaning procedures, use safety equipment, and demonstrate customer service skills.

## How To Complete This Form
1. Fill in the employee's name and ID number.
2. Complete the safety and general knowledge section by selecting all the necessary safety equipment to wear while cleaning and indicating whether you should mix cleaning chemicals or not.
3. Choose the correct procedure for cleaning a bathroom.
4. Select the best method for mopping a floor.
5. Determine the length of time to wait before wiping down a surface after disinfecting.
6. Choose the best method for dusting surfaces.
7. In the "Cleaning Products and Equipment" section, select the importance of reading product labels.
8. Identify why microfiber cloths are better than cotton.
9. In the "Customer Service and Professionalism" section, choose the correct course of action when a customer asks you to use a specific product.
10. Select the most important aspect of professional appearance.
11. In the "Special Situations" section, choose what to do if you cause a stain.
12. Determine what to do if a job takes longer than expected.
13. In the "Assessment Completion" section, rate your confidence level in your cleaning knowledge and identify areas where you need more training.

## Field-by-Field Explanation
- **Employee Name**: Enter your full name as an employee.
  (`employee_name`, text, required)
  - This is the first field where you enter your name as an employee.
- **Employee ID**: Enter your employee identification number.
  (`employee_id`, text, required: false)
  - This is an optional field to enter your employee ID number.
- **Assessment Date**: Enter the date of this assessment.
  (`assessment_date`, date, required)
  - This is the date when this assessment is being taken.
- **Supervisor Name**: Enter the name of your supervising manager.
  (`supervisor_name`, text, required: false)
  - This is an optional field to enter your supervisor's name.
- **-- Safety and General Knowledge --**: This section is to ensure you know the necessary safety equipment to wear and the correct procedures for mixing cleaning chemicals.
  (note, required)
  - In this section, you will select all the necessary safety equipment to wear while cleaning and whether you should mix cleaning chemicals.
- **What should you wear while cleaning? Select all that apply**: Choose the necessary safety equipment to wear while cleaning.
  (`safety_equipment`, select_multiple, required)
  - Select all the necessary safety equipment to wear while cleaning.
- **Should you mix cleaning chemicals together?**: Choose the correct answer.
  (`chemical_mixing`, select_one, required)
  - This question is to determine if you should mix cleaning chemicals together.
- **What should you do if you spill a chemical?**: Choose the correct course of action.
  (`spill_response`, select_one, required)
  - This question is to determine the correct action to take if you spill a chemical.
- **-- Cleaning Procedures --**: This section is to ensure you know the correct procedures for cleaning different areas, such as bathrooms.
  (note, required)
  - In this section, you will select the correct procedures for cleaning a bathroom.
- **What is the correct order to clean a bathroom?**: Choose the correct order to clean a bathroom.
  (`bathroom_order`, select_one, required)
  - Select the correct order to clean a bathroom.
- **How should you properly mop a floor?**: Choose the correct method for mopping a floor.
  (`proper_mopping`, select_one, required)
  - Select the correct method for mopping a floor.
- **How long should you wait before wiping down a surface after disinfecting?**: Choose the correct length of time to wait before wiping down a surface.
  (`disinfection`, select_one, required)
  - Select the correct length of time to wait before wiping down a surface.
- **What is the best way to dust surfaces?**: Choose the correct method for dusting surfaces.
  (`dust_method`, select_one, required)
  - Select the correct method for dusting surfaces.
- **-- Cleaning Products and Equipment --**: This section is to ensure you know the importance of reading product labels.
  (note, required)
  - In this section, you will select the importance of reading product labels.
- **Why is it important to read product labels?**: Choose the correct answer.
  (`product_labels`, select_one, required)
  - Select the correct answer to understand why reading product labels is important.
- **Why are microfiber cloths better than cotton?**: Choose the correct answer.
  (`microfiber_cloth`, select_one, required)
  - Select the correct answer to understand why microfiber cloths are better than cotton.
- **-- Customer Service and Professionalism --**: This section is to ensure you know the correct course of action when a customer asks you to use a specific product.
  (note, required)
  - In this section, you will choose the correct course of action when a customer asks you to use a specific product.
- **What should you do if a customer asks you to use a specific product?**: Choose the correct course of action.
  (`customer_interaction`, select_one, required)
  - Select the correct course of action when a customer asks you to use a specific product.
- **What is the most important aspect of professional appearance?**: Choose the correct answer.
  (`professional_appearance`, select_one, required)
  - Select the correct answer to understand the most important aspect of professional appearance.
- **-- Special Situations --**: This section is to ensure you know the correct course of action in special situations, such as causing a stain or a job taking longer than expected.
  (note, required)
  - In this section, you will choose the correct course of action in special situations.
- **What should you do if you cause a stain?**: Choose the correct course of action.
  (`stain_removal`, select_one, required)
  - Select the correct course of action if you cause a stain.
- **A job takes longer than expected. What do you do?**: Choose the correct course of action.
  (`time_management`, select_one, required)
  - Select the correct course of action if a job takes longer than expected.
- **-- Assessment Completion --**: This section is to rate your confidence level in your cleaning knowledge and identify areas where you need more training.
  (note, required)
  - In this section, you will rate your confidence level in your cleaning knowledge and identify areas where you need more training.
- **How confident are you in your cleaning knowledge?**: Rate your confidence level in your cleaning knowledge.
  (`confidence_level`, select_one, required)
  - Rate your confidence level in your cleaning knowledge.
- **Areas where you need more training?**: Enter areas where you need more training.
  (`training_needs`, text, required: false)
  - This is an optional field to enter areas where you need more training.
- **Assessment Score**: This is the score of your assessment.
  (`assessment_score`, number, required: false)
  - This is the score of your assessment.
- **Assessment Result**: This is the result of your assessment.
  (`assessment_result`, select_one, required: false)
  - This is the result of your assessment.

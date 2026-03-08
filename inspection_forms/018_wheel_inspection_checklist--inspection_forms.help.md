<thinking>

To create a comprehensive user-facing help guide for the Wheel Inspection Checklist form, I will first clarify the internal reasoning and considerations for its design and purpose.

*   **Purpose:** The form is designed for wheel inspection, likely for vehicles such as cars, trucks, motorcycles, or forklifts, focusing on the condition of their wheels, tires, bearings, seals, and hubs. The form might be used in a maintenance or inspection context, possibly for quality control or regulatory compliance. The form's purpose is to gather specific information about the vehicle's wheel components, including their condition and maintenance history.
*   **Non-duplication consideration:** It is assumed that the form is used in a scenario where the inspection or maintenance history for a specific vehicle is not well-documented, and the goal is to ensure consistent and thorough inspection processes across different vehicles and contexts.
*   **Relevance and completeness consideration:** Given the form's focus on wheel components, it is likely that the target audience is someone inspecting or maintaining vehicles, possibly in a workshop or service setting. The form might be used by mechanics, maintenance staff, or quality control personnel.

</thinking>

# Wheel Inspection Checklist - Help Guide
## Purpose
The Wheel Inspection Checklist form is designed to help you inspect and evaluate the condition of a vehicle's wheels and related components. This form is intended for use in inspection, maintenance, or quality control contexts, such as in a workshop or service setting.

## How To Complete This Form

1.  Select the type of vehicle being inspected from the "Vehicle Type" dropdown. This will help us understand the specific wheel components relevant to the vehicle.
2.  Indicate which wheels are being inspected (if any) by selecting the corresponding "Wheel Side" from the available options.
3.  Specify the position of the wheel(s) being inspected using the "Wheel Position" option.
4.  Evaluate each wheel's condition by selecting "tire\_condition" options: "new," "worn," "damaged," "flat," or "missing."
5.  Assess the condition of the wheel's bearing, selecting options: "good," "worn," "damaged," "loose," or "missing."
6.  Determine the condition of the wheel's seal, selecting options: "good," "worn," "damaged," "missing."
7.  Evaluate the condition of the wheel's hub, choosing from: "good," "worn," "damaged," "loose," or "missing."
8.  If applicable, indicate the type of bearing used ("sealed" or "unsealed").
9.  Record the maintenance history of the wheel by inputting the date (if available).
10. Input the last maintenance date for the wheel (if available).
11. Enter the next scheduled maintenance date for the wheel (if available).

## Field-by-Field Explanation

*   *Vehicle Type* (`vehicle_type`, select_one): Select the type of vehicle you are inspecting to help us understand the relevant wheel components.
*   *Wheel Side* (`wheel_side`, select_multiple): Indicate which wheel(s) you are inspecting.
*   *Wheel Position* (`wheel_position`, select_one): Specify the position of the wheel(s) being inspected.
*   *Tire Condition* (`tire_condition`, select_one): Evaluate the condition of the wheel's tire. Select from "new," "worn," "damaged," "flat," or "missing."
*   *Bearing Condition* (`bearing_condition`, select_one): Assess the condition of the wheel's bearing. Select from "good," "worn," "damaged," "loose," or "missing."
*   *Seal Condition* (`seal_condition`, select_one): Determine the condition of the wheel's seal. Choose from "good," "worn," "damaged," "missing."
*   *Hub Condition* (`hub_condition`, select_one): Evaluate the condition of the wheel's hub. Select from "good," "worn," "damaged," "loose," or "missing."
*   *Bearing Type* (`bearing_type`, select_one): If applicable, indicate the type of bearing used: "sealed" or "unsealed."
*   *Maintenance History* (`maintenance_history`, date): Record any available maintenance history for the wheel.
*   *Last Maintenance Date* (`last_maintenance_date`, date): Input the last known maintenance date for the wheel.
*   *Next Scheduled Maintenance Date* (`next_scheduled_maintenance_date`, date): Input the next scheduled maintenance date for the wheel.

## Tips

*   Be thorough in inspecting each wheel component, ensuring accurate and detailed entries in the form.
*   If unsure about the condition of a component, consult with a professional or refer to relevant standards or manuals.
*   Use the form for each vehicle inspected, keeping records organized and easily accessible.
*   Review and update the form regularly to reflect changes in the vehicle's wheel components and maintenance status.

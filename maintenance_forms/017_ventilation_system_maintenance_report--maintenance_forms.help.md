<figure class="table">
</figure>

# Ventilation System Maintenance Report - Help Guide

## Purpose
The Ventilation System Maintenance Report is a form used to document the maintenance of ventilation systems. It helps in tracking and recording the maintenance history, costs, and details of each service visit.

## How To Complete This Form

*   To complete this form, follow these steps:
    1.  Fill in the required fields as follows:
        *   **System Condition**: Describe the condition of the ventilation system.
        *   **Service Visits**: Choose the services performed during the visit.
        *   **Date of Service Visit**: Enter the date of the service visit.
        *   **Start Time**: Enter the start time of the service visit.
        *   **End Time**: Enter the end time of the service visit.
        *   **Technician**: Enter the name of the technician who performed the service.
        *   **Last Maintenance**: Enter the date of the last maintenance visit.
        *   **Next Maintenance**: Enter the date of the next maintenance visit.
        *   **Maintenance Cost**: Enter the cost of the maintenance visit.
        *   **Total Cost**: Enter the total cost of the maintenance visit.
        *   **Facility ID**: Enter the facility ID.
        *   **Facility Name**: Enter the name of the facility.
        *   **Serial Number**: Enter the serial number of the equipment (if applicable).
        *   **Make Model**: Enter the make and model of the equipment (if applicable).
        *   **Notes**: Add any additional comments or notes about the service visit.
        *   **Comments**: Add any additional comments or notes about the maintenance visit.
    2.  Fill in the optional fields as follows:
        *   **Facility Manager**: Enter the name of the facility manager.
        *   **Assigned Tool**: Choose the tool assigned for the maintenance visit (if applicable).
        *   **Equipment Status**: Choose the status of the equipment (if applicable).
        *   **System Type**: Choose the type of system (if applicable).
        *   **Maintenance History**: Add any additional maintenance history.
        *   **Maintenance Notes**: Add any additional maintenance notes.

## Field-by-Field Explanation

*   **System Condition** (`system_condition`, text, required): Describe the condition of the ventilation system.
*   **Service Visits** (`service_visits`, select\_multiple, required): Choose the services performed during the visit from the list of options.
*   **Maintenance History** (`maintenance_history`, note, false): Add any additional maintenance history.
*   **Date of Service Visit** (`date_service_visit`, date, required): Enter the date of the service visit.
*   **Start Time** (`start_time`, time, required): Enter the start time of the service visit.
*   **End Time** (`end_time`, time, required): Enter the end time of the service visit.
*   **Technician** (`technician`, text, required): Enter the name of the technician who performed the service.
*   **Facility Manager** (`facility_manager`, text, false): Enter the name of the facility manager.
*   **Assigned Tool** (`assigned_tool`, select\_one, false): Choose the tool assigned for the maintenance visit.
*   **Equipment Status** (`equipment_status`, select\_one, false): Choose the status of the equipment.
*   **System Type** (`system_type`, select\_one, false): Choose the type of system.
*   **Serial Number** (`serial_number`, text, false): Enter the serial number of the equipment (if applicable).
*   **Make Model** (`make_model`, text, false): Enter the make and model of the equipment (if applicable).
*   **Notes** (`notes`, note, false): Add any additional comments or notes about the service visit.
*   **Comments** (`comments`, text, false): Add any additional comments or notes about the maintenance visit.
*   **Maintenance Cost** (`maintenance_cost`, number, false): Enter the cost of the maintenance visit.
*   **Total Cost** (`total_cost`, number, false): Enter the total cost of the maintenance visit.
*   **Maintenance Notes** (`maintenance_notes`, note, false): Add any additional maintenance notes.
*   **Comments about Maintenance** (`comments_maintenance`, text, false): Add any additional comments or notes about the maintenance visit.
*   **Facility ID** (`facility_id`, text, false): Enter the facility ID.
*   **Facility Name** (`facility_name`, text, false): Enter the name of the facility.

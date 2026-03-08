<thinking>

To confirm the form purpose and relevance, I'll review the provided YAML fields. The form appears to be for reporting incidents of cargo loss or damage, likely for insurance, logistics, or shipping companies to track and investigate such events.

Upon reviewing the fields, I notice that the form collects information on various aspects of the incident, including:

1. Incident details (e.g., Report ID, date reported, reporter's name, and role)
2. Shipment information (e.g., shipment ID, carrier name, and vehicle/truck number)
3. Loss details (e.g., date and time of incident, location, type, and estimated value)
4. Investigation and witness information (e.g., witness name, contact info)
5. Final declaration (e.g., digital signature)

This form appears to be a comprehensive incident report that covers all essential aspects of cargo loss or damage incidents. There doesn't seem to be any duplication or unnecessary fields.

</thinking>

# Cargo Loss Incident Form - Help Guide
## Purpose

This form is designed to report incidents of cargo loss or damage. Fill it out to provide details on the incident, including shipment information, loss circumstances, and investigation results.

## How To Complete This Form

1. Fill out the form in English.
2. Answer each field carefully and accurately to provide complete and clear information.
3. If a field is marked as "required", it must be filled out.
4. If a field has options, choose the most accurate option from the list.
5. For fields with hints, use them for guidance but answer according to your best knowledge.

## Field-by-Field Explanation

* **Incident Report ID** (`incident_report_id`, text, required): Enter the internal tracking number for this incident if available.
* **Date Reported** (`report_date`, date, required): Enter the date you reported this incident.
* **Reporter Name** (`reporter_name`, text, required): Enter your name as the person reporting this incident.
* **Reporter Role** (`reporter_role`, select_one, required): Choose your role in the company (e.g., Driver, Warehouse Staff, Dispatcher, Manager, Customer Service, or Other).
* **Shipment or Tracking Number** (`shipment_id`, text, required): Enter the main tracking code for the shipment.
* **Bill of Lading (BOL) Number** (`bill_of_lading`, text, optional): Enter the BOL number if available.
* **Carrier Name** (`carrier_name`, text, required): Enter the name of the shipping company responsible.
* **Truck or Container Number** (`vehicle_id`, text, optional): Enter the number of the truck or container involved.
* **Date of Incident** (`incident_date`, date, required): Enter the date the loss or damage occurred or was discovered.
* **Time of Incident** (`incident_time`, time, optional): If available, enter the time of the incident.
* **Location of Incident** (`incident_location`, text, required): Describe the location where the incident happened.
* **Type of Incident** (`incident_type`, select_one, required): Choose the type of incident (e.g., Partial Loss, Total Loss, Damage, Theft, Misplacement, Contamination).
* **Condition of Cargo at Arrival** (`cargo_condition`, text, required): Describe the state of the cargo at arrival.
* **State of packaging** (`packaging_state`, select_one, required): Choose the best description of the packaging state (e.g., Intact, Crushed, Torn, Wet, Broken Seal, Other).
* **Estimated Value of Lost or Damaged Goods** (`estimated_value_lost`, number, required): Enter the numeric value of the lost or damaged goods.
* **Currency** (`currency`, select_one, required): Choose the currency (e.g., USD, EUR, GBP, CAD, AUD, Other).
* **Immediate actions taken after discovery** (`immediate_action`, text, required): Describe the actions taken immediately after discovery (e.g., reported to police, contacted supervisor, stopped loading).
* **Witness Name (if any)** (`witness_name`, text, optional): Enter the name of any witness.
* **Witness Contact Information** (`witness_contact`, text, optional): Enter the contact information (e.g., email, phone) of any witness.
* **Digital Signature** (`digital_signature`, text, required): Type your full name as acknowledgment of the report's accuracy.

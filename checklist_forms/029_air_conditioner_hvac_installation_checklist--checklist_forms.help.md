# Air Conditioner (HVAC) Installation Checklist - Help Guide
## Purpose
The purpose of this form is to collect and document information on the installation of air conditioner (HVAC) units, ensuring a smooth and accurate installation process.

## How To Complete This Form
1. Provide the client's name and address.
2. Enter the installation date.
3. Fill in the equipment model number and serial number.
4. Confirm that the site survey was completed and clearances verified.
5. Check if the electrical supply was verified as Pass or Fail.
6. Confirm if the unit level and secure on pad is True or False.
7. Check if the lineset is insulated and sealed as True or False.
8. Enter the vacuum pulled to (in microns) for the refrigerant charge added (if applicable).
9. Check if the nitrogen leak test was held at a pressure of Pass or Fail.
10. Confirm if the condensate drain was connected as True or False.
11. Check if the system operation is Pass or Fail after testing.
12. Confirm if the thermostat demo was given to the client as True or False.
13. Enter your signature and name.

## Field-by-Field Explanation
* **Client Name** (`client_name`, text, **required**): Enter the client's name.
* **Installation Address** (`address`, text, **required**): Enter the client's address.
* **Installation Date** (`install_date`, date, **required**): Enter the date of the installation.
* **Technician Name** (`technician_name`, text, **required**): Enter your name as the lead installer.
* **Unit Model Number** (`model_number`, text, **required**): Enter the model number of the outdoor unit.
* **Unit Serial Number** (`serial_number`, text, **required**): Enter the serial number of the outdoor unit.
* **Site Survey Complete** (`site_survey`, select_one, **required**): Check if the site survey was completed and clearances verified as Pass or Fail.
* **Electrical Supply Verified** (`electrical_check`, select_one, **required**): Check if the electrical supply was verified as Pass or Fail.
* **Unit Level & Secure on Pad** (`unit_level`, select_one, **required**): Confirm if the unit level and secure on pad is True or False.
* **Lineset Insulated & Sealed** (`lineset_insulated`, select_one, **required**): Check if the lineset is insulated and sealed as True or False.
* **Vacuum Pulled to (Microns)** (`vacuum_pulled`, number, **required**): Enter the vacuum pulled to (in microns) for the refrigerant charge added (if applicable).
* **Refrigerant Charge Added (lbs)** (`refrigerant_charge`, number, **optional**): Enter the refrigerant charge added (if applicable).
* **Nitrogen Leak Test** (`leak_test`, select_one, **required**): Check if the nitrogen leak test was held at a pressure of Pass or Fail.
* **Condensate Drain Connected** (`drain_line`, select_one, **required**): Confirm if the condensate drain was connected as True or False.
* **System Operation Check** (`system_operation`, select_one, **required**): Check if the system operation is Pass or Fail after testing.
* **Thermostat Demo to Client** (`client_demo`, select_one, **required**): Confirm if the thermostat demo was given to the client as True or False.
* **Technician Signature** (`signature`, text, **required**): Enter your name as the lead installer.

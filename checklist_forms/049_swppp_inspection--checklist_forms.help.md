# SWPPP Inspection - Help Guide
## Purpose
This form is used to collect information about Stormwater Pollution Prevention Plan (SWPPP) inspections. It's designed to guide you through the process of documenting site-specific details, stormwater management practices, and other relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a brief description of the site being inspected.
2. Provide the address of the site.
3. Select the appropriate SWPPP practices in place at the site.
4. Identify the stormwater containment and spill containment measures in place.
5. Select the training received by the site's SWPPP supervisor or administrator.
6. Choose the methods used for erosion control at the site.
7. Select the sediment basin and spill basin used at the site.
8. Identify the stormwater inlet or outlet used at the site.
9. Enter the name and contact information of the site's SWPPP supervisor or administrator.
10. Select the frequency of SWPPP inspections at the site.
11. Choose the unit of measurement for frequency intervals.
12. Enter any comments or observations from the SWPPP inspection.
13. Enter any additional comments or notes about the SWPPP inspection.
14. Add the supervisor's signature to confirm the inspection.

## Field-by-Field Explanation

* **site_description** (`site_description`, text, optional): Provide a brief description of the site being inspected.
* **site_address** (`site_address`, text, optional): Enter the address of the site.
* **swppps** (`swppps`, select_multiple, required): Select the SWPPP practices in place at the site.
* **stormwater_containment** (`stormwater_containment`, note, optional): This field is likely intended for general notes or comments about stormwater containment measures.
* **spill_containment** (`spill_containment`, select_one, required): Select the spill containment measures in place at the site.
* **swppp_training** (`swppp_training`, select_multiple, optional): Select the training received by the site's SWPPP supervisor or administrator.
* **erosion_control** (`erosion_control`, select_one, required): Choose the methods used for erosion control at the site.
* **sediment_basin** (`sediment_basin`, select_one, optional): Select the sediment basin used at the site.
* **spill_basin** (`spill_basin`, select_one, optional): Select the spill basin used at the site.
* **stormwater_inlet_outlet** (`stormwater_inlet_outlet`, select_one, optional): Identify the stormwater inlet or outlet used at the site.
* **swppp_supervisor_name** (`swppp_supervisor_name`, text, optional): Enter the name of the site's SWPPP supervisor or administrator.
* **swppp_supervisor_phone** (`swppp_supervisor_phone`, text, optional): Enter the phone number of the site's SWPPP supervisor or administrator.
* **swppp_supervisor_email** (`swppp_supervisor_email`, email, optional): Enter the email address of the site's SWPPP supervisor or administrator.
* **swppp_supervisor_address** (`swppp_supervisor_address`, text, optional): Enter the address of the site's SWPPP supervisor or administrator.
* **site_survey** (`site_survey`, select_multiple, required): Select the site survey methods used during the SWPPP inspection.
* **stormwater_pollutant_source** (`stormwater_pollutant_source`, select_multiple, required): Select the sources of stormwater pollutants at the site.
* **stormwater_pollutant** (`stormwater_pollutant`, select_multiple, required): Select the types of stormwater pollutants at the site.
* **ssp** (`ssp`, select_multiple, required): Select the types of Stormwater Sedimentation and Pollutant Prevention (SSP) measures at the site.
* **ssp_description** (`ssp_description`, text, optional): Provide a description of the SSP measures in place at the site.
* **ssp_frequency** (`ssp_frequency`, select_multiple, optional): Select the frequency of SWPPP inspections at the site.
* **ssp_frequency_interval** (`ssp_frequency_interval`, text, optional): Enter the interval for frequency measurements.
* **ssp_frequency_unit** (`ssp_frequency_unit`, select_one, required): Select the unit of measurement for SSP frequency.
* **ssp_comments** (`ssp_comments`, text, optional): Enter any comments or observations from the SWPPP inspection.
* **ssp_comments_notes** (`ssp_comments_notes`, text, optional): Enter any additional comments or notes about the SWPPP inspection.
* **swppp_supervisor_signature** (`swppp_supervisor_signature`, text, optional): Add the supervisor's signature to confirm the inspection.

Please note that the fields and their explanations are based on the provided YAML and might not be exhaustive or entirely accurate without further review and context. It's essential to ensure that this form accurately reflects the actual requirements and context of the SWPPP inspections in your area.

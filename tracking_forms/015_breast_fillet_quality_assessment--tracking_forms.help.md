# Breast Fillet Quality Assessment - Help Guide

## Purpose
This form is designed to help assess the quality of breast fillets at different stages of production and handling. It collects data on product appearance, texture, and other attributes to ensure that the fillets meet the required standards for sale or consumption.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the assessment date and time from the calendar picker.
2.  Enter the product batch number.
3.  Enter the name of the supplier.
4.  Select the production date.
5.  Select the expiration or use-by date.
6.  Choose how the product was stored (Frozen, Refrigerated, Ambient, or Compromised storage).
7.  Enter the quantity received.
8.  Rate the visual appearance quality (Excellent - No discololoration, Good - Minimal discololoration, Acceptable - Some discololoration, Poor - Significant discololoration, Unacceptable - Severe damage).
9.  Evaluate the color of the fillets (Bright pink or white, Light pink, Pale, Grayish, Darker than normal).
10.  Assess the texture and firmness (Firm and intact, Slightly soft, Soft, Very soft or mushy, Deteriorated).
11.  Rate the odor (Fresh - Typical seafood odor, Slightly fishy - Acceptable, Strong fish odor - Marginal, Sour or off odor - Unacceptable, Rotten smell - Reject).
12.  Check for contamination (No contamination, Scales or bones, Foreign material, Bacterial slime, Mold, Parasites).
13.  If the fillets were frozen, assess the ice glaze quality (Good protective glaze, Adequate glaze, Thin or damaged glaze, Ice burn visible, No ice protection).
14.  Assess the packaging condition (Intact and sealed, Sealed but worn, Torn or compromised, Severely damaged).
15.  Enter the temperature at delivery (if available).
16.  Check for parasites or worms (None detected, Possible parasites - Further inspection, Parasites confirmed - Reject batch).
17.  Select the overall quality rating (Grade A - Premium quality, Grade B - Good quality, Grade C - Acceptable quality, Grade D - Poor quality, Reject - Unsuitable for sale).
18.  Choose the recommended action (Accept and shelve, Accept with monitoring, Quarantine for inspection, Return to supplier, Dispose of batch).
19.  Enter the name of the quality inspector.
20.  Provide any additional notes or observations.

## Field-by-Field Explanation

* **Assessment Date** (`assessment_date`, `date`, required): Date of quality assessment.
* **Assessment Time** (`assessment_time`, `time`, required): Time assessment was conducted.
* **Product Batch Number** (`product_batch_number`, `text`, required): Batch or lot number of the fillet.
* **Supplier Name** (`supplier_name`, `text`, required): Name of the supplier.
* **Production Date** (`production_date`, `date`, required): Date the fillets were produced.
* **Expiration or Use-By Date** (`expiration_date`, `date`, required): Best-by or expiration date.
* **Storage Condition** (`storage_condition`, `select_one`, required): How was product stored (Frozen, Refrigerated, Ambient, Compromised storage).
* **Quantity Received** (`quantity_received`, `number`, required): Weight or quantity in kilograms or pounds.
* **Visual Appearance Quality** (`visual_appearance`, `select_one`, required): Rate the visual quality (Excellent - No discoloration, Good - Minimal discoloration, Acceptable - Some discoloration, Poor - Significant discoloration, Unacceptable - Severe damage).
* **Color Assessment** (`color_assessment`, `select_one`, required): Evaluate the color (Bright pink or white, Light pink, Pale, Grayish, Darker than normal).
* **Texture and Firmness** (`texture_quality`, `select_one`, required): Assess the texture (Firm and intact, Slightly soft, Soft, Very soft or mushy, Deteriorated).
* **Odor Assessment** (`odor_assessment`, `select_one`, required): Rate the smell (Fresh - Typical seafood odor, Slightly fishy - Acceptable, Strong fish odor - Marginal, Sour or off odor - Unacceptable, Rotten smell - Reject).
* **Contamination Check** (`contamination_check`, `select_multiple`, required): Check for any visible contamination (No contamination, Scales or bones, Foreign material, Bacterial slime, Mold, Parasites).
* **Ice Glaze Quality** (`ice_glaze`, `select_one`, optional): If frozen, assess ice layer (Good protective glaze, Adequate glaze, Thin or damaged glaze, Ice burn visible, No ice protection).
* **Packaging Condition** (`packaging_condition`, `select_one`, required): Assess packaging integrity (Intact and sealed, Sealed but worn, Torn or compromised, Severely damaged).
* **Temperature at Delivery** (`temperature_check`, `number`, optional): Temperature reading if available.
* **Parasite or Worm Check** (`parasites_present`, `select_one`, optional): Check for parasites or worms (None detected, Possible parasites - Further inspection, Parasites confirmed - Reject batch).
* **Overall Quality Rating** (`overall_quality_rating`, `select_one`, required): Final quality assessment (Grade A - Premium quality, Grade B - Good quality, Grade C - Acceptable quality, Grade D - Poor quality, Reject - Unsuitable for sale).
* **Action Required** (`action_required`, `select_one`, required): Recommended action (Accept and shelve, Accept with monitoring, Quarantine for inspection, Return to supplier, Dispose of batch).
* **Inspector Name** (`inspector_name`, `text`, required): Name of quality inspector.
* **Additional Notes** (`additional_notes`, `text`, optional): Any other observations.

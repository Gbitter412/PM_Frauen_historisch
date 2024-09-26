export { introText, unknownCompoundText, knownCompoundText, successMessage };

const introText = "<p>Hi! My name is Marie Curie.</p>" + 
                "<p>I was the first woman to be awarded the Nobel Prize for my work discovering " +
                "<strong>radium</strong> and <strong>polonium</strong>.</p>" +
                "<p>Let us combine some elements! Try and combine up to 6 of them.<br>" +
                "If you are having trouble finding any, try and combine from different groups.<br>" +
                "Nonmetals (blue) seem to combine quite well with others.</p>";

const unknownCompoundText = "<p>That's unfortunate! I'm afraid I have never seen this compound before.</p>" +
                            "I might be just unfamiliar with it or it might not exist.<br>" +
                            "Remember that nonmetals (blue) combine quite well with others. Even with each other!</p>";

const successMessage = "<p><strong>Congratulations!</strong></p>" +
                        "You've discovered the following compounds...";

const knownCompoundText = new Map([
    [["H", "O"], {
        info: `
            <p><strong>Water (H₂O)</strong><br>Essential for life. Makes up 70% of Earth's surface.</p>
            <p><strong>Hydrogen Peroxide (H₂O₂)</strong><br>Used as a disinfectant and bleach.</p>
        `
    }],
    [["C", "O"], {
        info: `
            <p><strong>Carbon Monoxide (CO)</strong><br>A colorless, odorless gas that can be toxic.</p>
            <p><strong>Carbon Dioxide (CO₂)</strong><br>Produced during respiration and combustion, absorbed by plants.</p>
        `
    }],
    [["Na", "Cl"], {
        info: `
            <p><strong>Sodium Chloride (NaCl)</strong><br>Common table salt, used in food and industry.</p>
        `
    }],
    [["N", "H"], {
        info: `
            <p><strong>Ammonia (NH₃)</strong><br>A colorless gas with a pungent smell, used in fertilizers.</p>
        `
    }],
    [["C", "H"], {
        info: `
            <p><strong>Methane (CH₄)</strong><br>A simple hydrocarbon, major component of natural gas.</p>
            <p><strong>Butane (C₄H₁₀)</strong><br>Used as a fuel, especially in lighters.</p>
            <p><strong>Benzene (C₆H₆)</strong><br>A basic organic chemical, used in the production of plastics.</p>
            <p><strong>Polyethylene (PE) (C₂H₄)ₙ</strong><br>Common plastic used in packaging, bottles, and containers.</p>
            <p><strong>Polypropylene (PP) (C₃H₆)ₙ</strong><br>Used in automotive parts, textiles, and packaging.</p>
            <p><strong>Polystyrene (PS) (C₈H₈)ₙ</strong><br>Found in foam cups, packaging, and insulation materials.</p>
            <p><strong>Polybutadiene (PBD) (C₄H₆)ₙ</strong><br>A rubber used in tires and other flexible materials.</p>
            <p><strong>Styrene-Butadiene Rubber (SBR) (C₈H₈ · C₄H₆)ₙ</strong><br>Used in car tires, shoes, and flooring.</p>
            <p><strong>Polybutylene (PB) (C₄H₈)ₙ</strong><br>Used in water piping and plumbing systems.</p>
        `
    }],
    [["C", "H", "O"], {
        info: `<div class="compound-list">
            <p><strong>Vitamin A (Retinol) (C₁₈H₃₄O)</strong><br>Essential for vision and immune function.</p>
            <p><strong>Vitamin D (Cholecalciferol) (C₂₇H₄₄O)</strong><br>Regulates calcium and bone health.</p>
            <p><strong>Vitamin E (Tocopherol) (C₂₉H₄₈O₁)</strong><br>Antioxidant protecting cell membranes.</p>
            <p><strong>Vitamin K1 (Phylloquinone) (C₃₃H₄₁O₂)</strong><br>Essential for blood clotting.</p>
            <p><strong>Glucose (C₆H₁₂O₆)</strong><br>A simple sugar and key energy source.</p>
            <p><strong>Fructose (C₆H₁₂O₆)</strong><br>Found in fruit, a natural sugar.</p>
            <p><strong>Sucrose (C₁₂H₂₂O₁₁)</strong><br>Common table sugar.</p>
            <p><strong>Cholesterol (C₂₇H₄₆O)</strong><br>Vital for cell membranes and hormone production.</p>
            <p><strong>Ethanol (C₂H₅OH)</strong><br>Alcohol used in beverages, fuel, and disinfectants.</p>
            <p><strong>Acetic Acid (C₂H₄O₂)</strong><br>Primary component of vinegar.</p>
            <p><strong>Acetone (C₃H₆O)</strong><br>Common solvent used in nail polish remover.</p>
            <p><strong>Glycerol (C₃H₈O₃)</strong><br>Used in pharmaceuticals and cosmetics.</p>
            <p><strong>Isopropyl Alcohol (C₃H₈O)</strong><br>Used as a disinfectant.</p>
            <p><strong>Citric Acid (C₆H₈O₇)</strong><br>Found in citrus fruits, used as a preservative and flavor enhancer.</p>
            <p><strong>Palmitic Acid (C₁₆H₃₂O₂)</strong><br>Saturated fatty acid, common in body fat.</p>
            <p><strong>Stearic Acid (C₁₈H₃₆O₂)</strong><br>Saturated fat, found in animal fat.</p>
            <p><strong>Oleic Acid (C₁₈H₃₄O₂)</strong><br>Monounsaturated fat, found in olive oil.</p>
            <p><strong>Linoleic Acid (C₁₈H₃₂O₂)</strong><br>Polyunsaturated fat, important for heart health.</p>
            <p><strong>Polyethylene Terephthalate (PET) (C₁₀H₈O₄)ₙ</strong><br>Used for water bottles, food containers, and synthetic fibers.</p>
            <p><strong>Polymethyl Methacrylate (PMMA) (C₅H₈O₂)ₙ</strong><br>Known as acrylic or Plexiglas; used in lenses, windows, and signs.</p>
            <p><strong>Polycarbonate (PC) (C₁₅H₁₆O₂)ₙ</strong><br>Strong plastic used in eyewear, CDs, and electrical components.</p>
            <p><strong>Polyurethane (PU) (C₆H₅O₂Rₙ)ₙ</strong><br>Used in foam, insulation, furniture, and coatings.</p>
            <p><strong>Polyethylene Glycol (PEG) (C₂H₄O)ₙ</strong><br>Used in pharmaceuticals, cosmetics, and lubricants.</p>
            <p><strong>Poly(lactic acid) (PLA) (C₃H₄O₂)ₙ</strong><br>A biodegradable plastic used in packaging and 3D printing.</p>
            <p><strong>Polyphenylene Oxide (PPO) (C₈H₈O)ₙ</strong><br>Used in electronics and automotive parts.</p>
            <p><strong>Polyvinyl Alcohol (PVA) (C₂H₄O)ₙ</strong><br>Used in paper coatings, adhesives, and textile sizing.</p>
            <p><strong>Polyoxymethylene (POM) (CH₂O)ₙ</strong><br>Known as acetal or Delrin; used in gears and mechanical parts.</p>
            <p><strong>Polyethylene Vinyl Acetate (PEVA) (C₄H₆O₂)ₙ</strong><br>Used in packaging, foam sheets, and sports equipment.</p>
            <p><strong>Polycaprolactone (PCL) (C₆H₁₀O₂)ₙ</strong><br>A biodegradable plastic used in medical devices and 3D printing.</p>
            <p><strong>Polyester (PET) (C₁₀H₈O₄)ₙ</strong><br>A synthetic fabric used in clothing, textiles, and upholstery.</p>
        </div>`
    }],
    [["C", "H", "Cl"], {
        info: `
            <p><strong>Polyvinyl Chloride (PVC) (C₂H₃Cl)ₙ</strong><br>Used in pipes, cable insulation, and clothing.</p>
        `
    }],
    [["C", "H", "Cl", "O"], {
        info: `
            <p><strong>Epoxy Resin (C₂₁H₂₅ClO₅)ₙ</strong><br>Used in adhesives, coatings, and composite materials.</p>
        `
    }],
    [["C", "F"], {
        info: `
            <p><strong>Polytetrafluoroethylene (PTFE) (C₂F₄)ₙ</strong><br>Known as Teflon; used in non-stick cookware and seals.</p>
        `
    }],
    [["C", "H", "F"], {
        info: `
            <p><strong>Polyvinylidene Fluoride (PVDF) (C₂H₂F₂)ₙ</strong><br>Used in electrical insulation, piping, and coatings.</p>
        `
    }],
    [["C", "H", "N", "O"], {
        info: `
            <p><strong>Polyamide (Nylon) (C₆H₁₁NO)ₙ</strong><br>Used in textiles, ropes, and mechanical parts.</p>
            <p><strong>Polyurethane Foam (C₂₇H₃₆N₂O₁₀)ₙ</strong><br>Flexible and rigid foams for furniture, insulation, and mattresses.</p>
            <p><strong>Melamine Formaldehyde (C₃H₆N₆O₃)ₙ</strong><br>Used in countertops, laminate, and tableware.</p>
            <p><strong>Polyimide (PI) (C₂₂H₁₀N₂O₅)ₙ</strong><br>High-temperature polymer used in electronics and aerospace.</p>
            <p><strong>Kevlar (C₁₄H₁₀N₂O₂)ₙ</strong><br>A high-strength synthetic fiber used in bulletproof vests and aerospace.</p>
            <p><strong>Vitamin B2 (Riboflavin) (C₁₄H₁₈N₄O₆)</strong><br>Helps in energy production and cell function.</p>
            <p><strong>Vitamin B3 (Niacin) (C₆H₆N₂O)</strong><br>Important for metabolism and DNA repair.</p>
            <p><strong>Vitamin B5 (Pantothenic Acid) (C₁₄H₂₅NO₅)</strong><br>Involved in synthesizing coenzyme A.</p>
            <p><strong>Vitamin B6 (Pyridoxine) (C₈H₁₁N₃O₃)</strong><br>Helps with neurotransmitter production.</p>
            <p><strong>Glycine (C₂H₅NO₂)</strong><br>Simplest amino acid, aids in collagen production.</p>
            <p><strong>Alanine (C₃H₇NO₂)</strong><br>Important in glucose metabolism.</p>
            <p><strong>Serine (C₃H₇NO₃)</strong><br>Plays a role in the biosynthesis of proteins.</p>
            <p><strong>Valine (C₅H₁₁NO₂)</strong><br>Essential amino acid for muscle growth.</p>
            <p><strong>Leucine (C₆H₁₃NO₂)</strong><br>Key for protein synthesis.</p>
            <p><strong>Isoleucine (C₆H₁₃NO₂)</strong><br>Important for muscle recovery.</p>
            <p><strong>Threonine (C₄H₉NO₃)</strong><br>Helps maintain protein balance.</p>
            <p><strong>Phenylalanine (C₉H₁₁NO₂)</strong><br>Precursor to neurotransmitters like dopamine.</p>
            <p><strong>Tyrosine (C₉H₁₁NO₃)</strong><br>Important for producing hormones.</p>
            <p><strong>Tryptophan (C₁₁H₁₂N₂O₂)</strong><br>Precursor for serotonin, involved in mood regulation.</p>
            <p><strong>Asparagine (C₄H₈N₂O₃)</strong><br>Helps in the synthesis of glycoproteins.</p>
            <p><strong>Glutamine (C₅H₁₁N₂O₃)</strong><br>Supports muscle growth and immune function.</p>
            <p><strong>Aspartic Acid (C₄H₇NO₄)</strong><br>Plays a role in the urea cycle.</p>
            <p><strong>Glutamic Acid (C₅H₉NO₄)</strong><br>Important in brain function as an excitatory neurotransmitter.</p>
            <p><strong>Urea (CH₄N₂O)</strong><br>A waste product formed in the liver, excreted by the kidneys.</p>
        `
    }],
    [["C", "H", "N", "O", "S"], {
        info: `
            <p><strong>Vitamin B1 (Thiamine) (C₁₂H₁₄N₄OS)</strong><br>Vital for energy metabolism.</p>
            <p><strong>Vitamin B7 (Biotin) (C₁₀H₁₃N₃O₃S)</strong><br>Important for healthy skin and metabolism.</p>
            <p><strong>Cysteine (C₃H₇NO₂S)</strong><br>A sulfur-containing amino acid.</p>
            <p><strong>Methionine (C₅H₁₁NO₂S)</strong><br>Essential amino acid, helps in tissue growth.</p>
            <p><strong>Insulin (C₂₅H₃₁N₉O₁₅S₃)</strong><br>Regulates blood glucose levels.</p>
        ` 
    }],
    [["C", "H", "N", "O", "P"], {
        info: `
            <p><strong>Adenosine Triphosphate (ATP) (C₁₁H₁₅N₁₅O₁₃P₃)</strong><br>The primary energy carrier in cells.</p>
            <p><strong>Cytidine Triphosphate (CTP) (C₉H₁₄N₃O₁₄P)</strong><br>Involved in nucleic acid metabolism.</p>
            <p><strong>Guanosine Triphosphate (GTP) (C₁₀H₁₅N₅O₁₄P)</strong><br>Important in protein synthesis and signal transduction.</p>
            <p><strong>Uridine Triphosphate (UTP) (C₉H₁₄N₄O₁₂P)</strong><br>Essential for carbohydrate metabolism.</p>
        ` 
    }],
    [["C", "H", "N", "O", "I"], {
        info: `
            <p><strong>Thyroxine (T4) (C₁₄H₁₃I₄N₁₄O₄)</strong><br>A thyroid hormone that regulates metabolism.</p>
        ` 
    }],
    [["C", "H", "O", "N", "Fe", "S"], {
        info: `
            <p><strong>Heme (C₃₄H₃₂FeN₄O₄S)</strong><br>Component of hemoglobin, essential for oxygen transport.</p>
        ` 
    }],
    [["C", "H", "Co", "N", "O", "P"], {
        info: `
            <p><strong>Vitamin B12 (Cobalamin) (C₆₃H₈₈CoN₁₄O₁₄P)</strong><br>Crucial for nerve function and blood cell production.</p>
        ` 
    }],
    [["C", "H", "N"], {
        info: `
            <p><strong>Acrylonitrile Butadiene Styrene (ABS) (C₈H₈ · C₄H₆ · C₃H₃N)ₙ</strong><br>Used in Lego bricks, automotive parts, and electronics.</p>
            <p><strong>Polyaniline (PANI) (C₆H₇N)ₙ</strong><br>Conductive polymer used in sensors and anti-corrosion coatings.</p>
        `
    }],
    [["C", "H", "O", "S"], {
        info: `
            <p><strong>Polysulfone (PSU) (C₁₅H₁₄O₃S)ₙ</strong><br>High-performance plastic used in medical and food-processing equipment.</p>
        `
    }],
    [["C", "H", "O", "Si"], {
        info: `
            <p><strong>Polysiloxane (Silicone) (C₂H₆OSi)ₙ</strong><br>Used in sealants, lubricants, and medical devices.</p>
        `
    }],
    [["H", "S", "O"], {
        info: `
            <p><strong>Sulfuric Acid (H₂SO₄)</strong><br>Strong acid used in various industrial processes.</p>
        `
    }],
    [["N", "H", "S", "O"], {
        info: `
            <p><strong>Ammonium Sulfate ((NH₄)₂SO₄)</strong><br>Used as a fertilizer.</p>
        `
    }],
    [["H", "Cl"], {
        info: `
            <p><strong>Hydrochloric Acid (HCl)</strong><br>Strong acid, found in stomach acid and used in industrial processes.</p>
        `
    }],
    [["H", "N", "O"], {
        info: `
            <p><strong>Nitric Acid (HNO₃)</strong><br>Used in the production of fertilizers and explosives.</p>
        `
    }],
    [["Na", "H", "C", "O"], {
        info: `
            <p><strong>Baking Soda (Sodium Bicarbonate, NaHCO₃)</strong><br>Used in baking and as an antacid.</p>
        `
    }],
    [["Ca", "C", "O"], {
        info: `
            <p><strong>Calcium Carbonate (CaCO₃)</strong><br>Found in rocks and used in construction, also in antacids.</p>
        `
    }],
    [["Ca", "S", "O"], {
        info: `
            <p><strong>Calcium Sulfate (CaSO₄)</strong><br>Used in construction (plaster of Paris) and in dentistry.</p>
        `
    }],
    [["Na", "O", "H"], {
        info: `
            <p><strong>Sodium Hydroxide (NaOH)</strong><br>Also known as lye, used in soap-making and as a strong base.</p>
        `
    }],
    [["K", "Cl"], {
        info: `
            <p><strong>Potassium Chloride (KCl)</strong><br>Used in fertilizers and as a salt substitute.</p>
        `
    }],
    [["H", "P", "O"], {
        info: `
            <p><strong>Phosphoric Acid (H₃PO₄)</strong><br>Used in fertilizers and soft drinks.</p>
        `
    }],
    [["Mg", "S", "O"], {
        info: `
            <p><strong>Magnesium Sulfate (MgSO₄)</strong><br>Also known as Epsom salt, used in medicine and agriculture.</p>
        `
    }],
    [["Al", "O"], {
        info: `
            <p><strong>Aluminum Oxide (Al₂O₃)</strong><br>Used in the production of aluminum and as an abrasive.</p>
        `
    }],
    [["Fe", "O"], {
        info: `
            <p><strong>Iron(III) Oxide (Fe₂O₃)</strong><br>Also known as rust, used as a pigment.</p>
        `
    }],
    [["H", "Na", "C", "O"], {
        info: `
            <p><strong>Sodium Acetate (C₂H₃NaO₂)</strong><br>Used in the food industry as a preservative and flavoring agent.</p>
        `
    }],
    [["N", "O"], {
        info: `
            <p><strong>Nitrogen Dioxide (NO₂)</strong><br>A toxic gas, contributes to air pollution.</p>
        `
    }],
    [["O"], {
        info: `
            <p><strong>Ozone (O₃)</strong><br>A protective layer in the Earth's atmosphere, but harmful at ground level.</p>
        `
    }],
    [["C", "S"], {
        info: `
            <p><strong>Carbon Disulfide (CS₂)</strong><br>Used in the production of rayon and cellophane.</p>
        `
    }],
    [["Cl"], {
        info: `
            <p><strong>Chlorine Gas (Cl₂)</strong><br>Used in water treatment and as a disinfectant.</p>
        `
    }],
    [["Na", "N", "O"], {
        info: `
            <p><strong>Sodium Nitrite (NaNO₂)</strong><br>Used as a preservative in processed meats.</p>
        `
    }],
    [["Ca", "O", "H"], {
        info: `
            <p><strong>Calcium Hydroxide (Ca(OH)₂)</strong><br>Also known as slaked lime, used in construction.</p>
        `
    }],
    [["K", "N", "O"], {
        info: `
            <p><strong>Potassium Nitrate (KNO₃)</strong><br>Used in fertilizers and explosives.</p>
        `
    }],
    [["Li", "C", "O"], {
        info: `
            <p><strong>Lithium Carbonate (Li₂CO₃)</strong><br>Used in the treatment of bipolar disorder.</p>
        `
    }],
    [["Ba", "S", "O"], {
        info: `
            <p><strong>Barium Sulfate (BaSO₄)</strong><br>Used in medical imaging and industrial applications.</p>
        `
    }],
    [["Pb", "N", "O"], {
        info: `
            <p><strong>Lead(II) Nitrate (Pb(NO₃)₂)</strong><br>Used in the production of pigments and matches.</p>
        `
    }],
    [["Si", "O"], {
        info: `
            <p><strong>Silica (SiO₂)</strong><br>Found in sand, used in glass-making and as a desiccant.</p>
        `
    }],
    [["Sr", "C", "O"], {
        info: `
            <p><strong>Strontium Carbonate (SrCO₃)</strong><br>Used in the production of ceramics and fireworks.</p>
        `
    }],
    [["Ca", "P", "O"], {
        info: `
            <p><strong>Calcium Phosphate (Ca₃(PO₄)₂)</strong><br>Used in fertilizers and as a supplement.</p>
        `
    }],
    [["Na", "S", "O"], {
        info: `
            <p><strong>Sodium Sulfate (Na₂SO₄)</strong><br>Used in detergents and paper manufacturing.</p>
        `
    }],
    [["H", "B", "O"], {
        info: `
            <p><strong>Boric Acid (H₃BO₃)</strong><br>Used as an antiseptic and in insecticides.</p>
        `
    }],
    [["H", "F"], {
        info: `
            <p><strong>Hydrofluoric Acid (HF)</strong><br>Used to etch glass and in the production of fluorine compounds.</p>
        `
    }],
    [["Fe", "C"], {
        info: `
            <p><strong>Steel (Fe + C)</strong><br>Steel is an alloy of iron and carbon, used widely in construction and manufacturing. Its carbon content can be up to 2%.</p>
        `
    }],
    [["Fe", "C", "Cr"], {
        info: `
            <p><strong>Stainless Steel (Fe + C + Cr)</strong><br>An iron-carbon alloy with at least 10.5% chromium, offering corrosion resistance, making it ideal for kitchenware, medical instruments, and building materials.</p>
        `
    }],
    [["Cu", "Sn"], {
        info: `
            <p><strong>Bronze (Cu + Sn)</strong><br>Historically significant alloy made of copper and tin, commonly 60-90% copper and 10-40% tin. Used in sculptures, coins, and tools.</p>
        `
    }],
    [["Cu", "Zn"], {
        info: `
            <p><strong>Brass (Cu + Zn)</strong><br>A versatile alloy, commonly 55-85% copper and 15-45% zinc, used for plumbing, musical instruments, and decorative items.</p>
        `
    }],
    [["Al", "Cu", "Mg", "Si"], {
        info: `
            <p><strong>Aluminum Alloys (Al + Cu, Mg, Si)</strong><br>A group of lightweight, strong alloys commonly used in aerospace, automotive, and construction industries. Example 6061 has 0.4-0.8% Cu, 0.8-1.2% Mg, and 0.4-0.8% Si.</p>
        `
    }],
    [["Al", "Cu"], {
        info: `
            <p><strong>Duralumin (Al + Cu)</strong><br>An aluminum-copper alloy with typically 4-5% copper, offering high strength and low weight, commonly used in aircraft.</p>
        `
    }],
    [["Sn", "Pb"], {
        info: `
            <p><strong>Solder (Sn + Pb)</strong><br>A traditional solder alloy, often 60% tin and 40% lead, used for electrical connections. Lead-free versions also exist, containing around 95.5% tin and 4% silver.</p>
        `
    }],
    [["Cu", "Ni", "Zn"], {
        info: `
            <p><strong>Nickel Silver (Cu + Ni + Zn)</strong><br>Despite its name, it contains no silver, commonly 60% copper, 20% nickel, and 20% zinc. Used for cutlery, musical instruments, and jewelry.</p>
        `
    }],
    [["Sn", "Cu", "Sb"], {
        info: `
            <p><strong>Pewter (Sn + Cu, Sb)</strong><br>A soft, malleable alloy historically composed of around 85% tin, with smaller amounts of copper and antimony. Used for decorative items and tableware.</p>
        `
    }],
    [["Ti", "Al", "V"], {
        info: `
            <p><strong>Titanium Alloys (Ti + Al, V)</strong><br>Lightweight and strong, used in aerospace and medical implants. A common example is Ti-6Al-4V, containing 90% titanium, 6% aluminum, and 4% vanadium.</p>
        `
    }],
    [["Ni", "Cr", "Fe"], {
        info: `
            <p><strong>Inconel (Ni + Cr + Fe)</strong><br>A high-performance alloy, resistant to heat and corrosion, with 15-25% chromium and up to 72% nickel. Used in jet engines and gas turbines.</p>
        `
    }],
    [["Ni", "Mo", "Cr"], {
        info: `
            <p><strong>Hastelloy (Ni + Mo + Cr)</strong><br>A corrosion-resistant alloy with varying compositions. Hastelloy C-276, for example, contains approximately 57% nickel, 15% molybdenum, and 14.5% chromium.</p>
        `
    }],
    [["Ni", "Cu"], {
        info: `
            <p><strong>Monel (Ni + Cu)</strong><br>A nickel-copper alloy, typically 67% nickel and 30% copper, known for its resistance to corrosion in seawater. Used in marine and chemical environments.</p>
        `
    }],
    [["Sn", "Sb", "Cu"], {
        info: `
            <p><strong>Babbitt Metal (Sn + Sb + Cu)</strong><br>Commonly used as a bearing material, often composed of 88% tin, 7% antimony, and 5% copper, providing low friction and high wear resistance.</p>
        `
    }],
    [["Al", "Ni", "Co", "Fe"], {
        info: `
            <p><strong>Alnico (Al + Ni + Co + Fe)</strong><br>A group of high-strength permanent magnet alloys. A common composition is 8% aluminum, 14% nickel, 24% cobalt, and the balance iron.</p>
        `
    }],
    [["Fe", "Cr", "Ni", "Mo"], {
        info: `
            <p><strong>Carpenter's Stainless Steel (Fe + Cr + Ni + Mo)</strong><br>A specialized stainless steel, typically containing 16-25% chromium, 8-20% nickel, and molybdenum, used in the aerospace and medical industries.</p>
        `
    }],
    [["Zn", "Al", "Mg", "Cu"], {
        info: `
            <p><strong>Zamak (Zn + Al + Mg + Cu)</strong><br>A family of zinc-aluminum alloys, commonly containing 4% aluminum, 0.5% magnesium, and 0.5% copper. Used in die casting.</p>
        `
    }],
    [["Co", "Cr", "Mo"], {
        info: `
            <p><strong>Cobalt Alloys (Co + Cr + Mo)</strong><br>Known for high wear resistance and strength at elevated temperatures, used in cutting tools and medical implants. Stellite, a common alloy, contains 50% cobalt and 30% chromium.</p>
        `
    }],
    [["Pb", "Sn", "Ca"], {
        info: `
            <p><strong>Lead Alloys (Pb + Sn, Ca)</strong><br>Lead-tin alloys are often 60% lead and 40% tin, while lead-calcium alloys are used in lead-acid batteries.</p>
        `
    }],
    [["Ag", "Cu", "Zn"], {
        info: `
            <p><strong>Silver Solder (Ag + Cu + Zn)</strong><br>Used in brazing, commonly containing around 40% silver, with copper and zinc making up the balance.</p>
        `
    }],
    [["Fe", "C", "Si"], {
        info: `
            <p><strong>Cast Iron (Fe + C + Si)</strong><br>An iron-carbon alloy with typically 2-4% carbon and 1-3% silicon. Cast iron is used in cookware, pipes, and engine blocks.</p>
        `
    }],
    [["Fe", "C", "W", "Cr"], {
        info: `
            <p><strong>Tool Steel (Fe + C + W + Cr)</strong><br>High-carbon alloy used in cutting and shaping tools. Example: D2 tool steel contains 1.5% carbon, 12% chromium, and 1% molybdenum.</p>
        `
    }],
    [["Fe", "C", "Si", "Mn"], {
        info: `
            <p><strong>Spring Steel (Fe + C + Si + Mn)</strong><br>Contains 0.5-1% carbon, with silicon and manganese. It's used for springs and high-stress applications.</p>
        `
    }],
    [["Fe", "C", "Mn"], {
        info: `
            <p><strong>Manganese Steel (Fe + C + Mn)</strong><br>An alloy containing around 12-14% manganese and 1% carbon, used in high-impact wear-resistant applications like railroad tracks and rock crushers.</p>
        `
    }],
    [["Al", "Li"], {
        info: `
            <p><strong>Aluminum-Lithium Alloy (Al + Li)</strong><br>A lightweight aluminum alloy with 1-2% lithium, offering high strength and low density, commonly used in aerospace applications.</p>
        `
    }],
    [["Cu", "Ni"], {
        info: `
            <p><strong>Copper-Nickel Alloy (Cu + Ni)</strong><br>An alloy with usually around 90% copper and 10% nickel, used in marine applications due to its corrosion resistance.</p>
        `
    }],
    [["Fe", "Si"], {
        info: `
            <p><strong>Silicon Steel (Fe + Si)</strong><br>An alloy containing around 3% silicon, used in electrical transformers and motors due to its magnetic properties.</p>
        `
    }],
    [["K", "Fe", "O"], {
        info: `
            <p><strong>Potassium Ferrate (K₂FeO₄)</strong><br>An oxidizing agent used in water treatment.</p>
        `
    }],
    [["K", "Os", "O"], {
        info: `
            <p><strong>Potassium Osmate (K₂OsO₄)</strong><br>Used as a catalyst in organic synthesis.</p>
        `
    }],
    [["K", "Mn", "O"], {
        info: `
            <p><strong>Potassium Permanganate (KMnO₄)</strong><br>A strong oxidizer used in disinfectants and treatments.</p>
        `
    }],
    [["Ca", "B"], {
        info: `
            <p><strong>Calcium Hexaboride (CaB₆)</strong><br>A ceramic material used in high-temperature applications.</p>
        `
    }],
    [["Ca", "Ti", "O"], {
        info: `
            <p><strong>Calcium Titanate (CaTiO₃)</strong><br>A perovskite mineral used in capacitors and electronics.</p>
        `
    }],
    [["Ca", "S"], {
        info: `
            <p><strong>Calcium Sulfide (CaS)</strong><br>Found in luminescent materials.</p>
        `
    }],
    [["Sc", "N"], {
        info: `
            <p><strong>Scandium Nitride (ScN)</strong><br>A semiconductor material used in electronics.</p>
        `
    }],
    [["Sc", "O"], {
        info: `
            <p><strong>Scandium Oxide (Sc₂O₃)</strong><br>Used in high-performance materials and catalysts.</p>
        `
    }],
    [["Sc", "F"], {
        info: `
            <p><strong>Scandium Fluoride (ScF₃)</strong><br>Used in optical coatings and as a dopant in fiber optics.</p>
        `
    }],
    [["Ti", "Cl"], {
        info: `
            <p><strong>Titanium Tetrachloride (TiCl₄)</strong><br>A precursor in the production of titanium metal and pigments.</p>
        `
    }],
    [["Ti", "N"], {
        info: `
            <p><strong>Titanium Nitride (TiN)</strong><br>Used as a coating on tools and in aerospace applications.</p>
        `
    }],
    [["Ti", "B"], {
        info: `
            <p><strong>Titanium Boride (TiB₂)</strong><br>A ceramic material with high hardness used in cutting tools.</p>
        `
    }],
    [["V", "O"], {
        info: `
            <p><strong>Vanadium Pentoxide (V₂O₅)</strong><br>Used as a catalyst and in ceramics.</p>
        `
    }],
    [["V", "C"], {
        info: `
            <p><strong>Vanadium Carbide (VC)</strong><br>Used in steel alloys and for hard coatings.</p>
        `
    }],
    [["V", "N"], {
        info: `
            <p><strong>Vanadium Nitride (VN)</strong><br>A compound used to improve steel's hardness.</p>
        `
    }],
    [["Cr", "C"], {
        info: `
            <p><strong>Chromium Carbide (Cr₃C₂)</strong><br>Used in wear-resistant coatings.</p>
        `
    }],
    [["Cr", "O"], {
        info: `
            <p><strong>Chromium Trioxide (CrO₃)</strong><br>A powerful oxidizing agent used in chrome plating.</p>
        `
    }],
    [["Cr", "CO"], {
        info: `
            <p><strong>Chromium Hexacarbonyl (Cr(CO)₆)</strong><br>A coordination compound used in organic chemistry.</p>
        `
    }],
    [["Mn", "O"], {
        info: `
            <p><strong>Manganese Dioxide (MnO₂)</strong><br>Used in dry cell batteries and as a catalyst.</p>
        `
    }],
    [["Mn", "P"], {
        info: `
            <p><strong>Manganese Phosphide (MnP)</strong><br>Used in semiconductor technology.</p>
        `
    }],
    [["Mn", "SO"], {
        info: `
            <p><strong>Manganese Sulfate (MnSO₄)</strong><br>A precursor for other manganese compounds used in agriculture.</p>
        `
    }],
    [["Fe", "C", "O"], {
        info: `
            <p><strong>Iron Pentacarbonyl (Fe(CO)₅)</strong><br>A reagent in organometallic chemistry.</p>
            <p><strong>Ferric Oxalate (Fe₂(C₂O₄)₃)</strong><br>Used in photographic processes.</p>
        `
    }],
    [["Fe", "As"], {
        info: `
            <p><strong>Iron Arsenide (FeAs)</strong><br>Used in superconductors and specialized electronics.</p>
        `
    }],
    [["Co", "N", "O"], {
        info: `
            <p><strong>Cobalt Nitrate (Co(NO₃)₂)</strong><br>Used in pigments and electroplating.</p>
        `
    }],
    [["Co", "Si"], {
        info: `
            <p><strong>Cobalt Silicide (CoSi₂)</strong><br>Used in microelectronics for silicon-based circuits.</p>
        `
    }],
    [["Co", "C", "O"], {
        info: `
            <p><strong>Cobalt Carbonyl (Co₂(CO)₈)</strong><br>Used in the synthesis of fine chemicals and as a catalyst.</p>
        `
    }],
    [["Ni", "F"], {
        info: `
            <p><strong>Nickel Fluoride (NiF₂)</strong><br>Used in catalytic processes and battery applications.</p>
        `
    }],
    [["Ni", "S"], {
        info: `
            <p><strong>Nickel Sulfide (NiS)</strong><br>Found in nickel ores and used in electrochemical applications.</p>
        `
    }],
    [["Ni", "B"], {
        info: `
            <p><strong>Nickel Boride (Ni₂B)</strong><br>A catalyst in organic reactions.</p>
        `
    }],
    [["Cu", "I"], {
        info: `
            <p><strong>Copper(I) Iodide (CuI)</strong><br>Used in cloud-seeding and organic synthesis.</p>
        `
    }],
    [["Cu", "As", "O"], {
        info: `
            <p><strong>Copper Arsenate (Cu₃(AsO₄)₂)</strong><br>Historically used as an insecticide.</p>
        `
    }],
    [["Cu", "C", "H", "O"], {
        info: `
            <p><strong>Copper(II) Acetate (Cu(CH₃COO)₂)</strong><br>A compound used in pigments and electroplating.</p>
        `
    }],
    [["Zn", "Se"], {
        info: `
            <p><strong>Zinc Selenide (ZnSe)</strong><br>Used in infrared optics and semiconductors.</p>
        `
    }],
    [["Zn", "B", "O"], {
        info: `
            <p><strong>Zinc Borate (Zn₃(BO₃)₂)</strong><br>Used as a flame retardant in plastics.</p>
        `
    }],
    [["Zn", "Fe", "O"], {
        info: `
            <p><strong>Zinc Ferrite (ZnFe₂O₄)</strong><br>Used in magnetic materials and electronics.</p>
        `
    }],
    [["Y", "Al", "O"], {
        info: `
            <p><strong>Yttrium Aluminum Garnet (YAG) (Y₃Al₅O₁₂)</strong><br>A material used in lasers and as a gemstone.</p>
        `
    }],
    [["Y", "Ba", "Cu", "O"], {
        info: `
            <p><strong>Yttrium Barium Copper Oxide (YBCO) (YBa₂Cu₃O₇)</strong><br>A high-temperature superconductor.</p>
        `
    }],
    [["Y", "N", "O"], {
        info: `
            <p><strong>Yttrium Nitrate (Y(NO₃)₃)</strong><br>Used in phosphors and ceramics.</p>
        `
    }],
    [["Zr", "Si", "O"], {
        info: `
            <p><strong>Zirconium Silicate (ZrSiO₄)</strong><br>Used in ceramics and refractories.</p>
        `
    }],
    [["Zr", "C"], {
        info: `
            <p><strong>Zirconium Carbide (ZrC)</strong><br>Used in high-temperature structural materials.</p>
        `
    }],
    [["Zr", "H"], {
        info: `
            <p><strong>Zirconium Hydride (ZrH₂)</strong><br>Used in nuclear reactors.</p>
        `
    }],
    [["Nb", "Cl"], {
        info: `
            <p><strong>Niobium Pentachloride (NbCl₅)</strong><br>A precursor for niobium compounds used in catalysis.</p>
        `
    }],
    [["Nb", "C"], {
        info: `
            <p><strong>Niobium Carbide (NbC)</strong><br>Used in hard metals for cutting tools.</p>
        `
    }],
    [["Nb", "N"], {
        info: `
            <p><strong>Niobium Nitride (NbN)</strong><br>A superconductor used in quantum computing.</p>
        `
    }],
    [["Mo", "S"], {
        info: `
            <p><strong>Molybdenum Disulfide (MoS₂)</strong><br>Used as a lubricant and in electronics.</p>
        `
    }],
    [["Mo", "C", "O"], {
        info: `
            <p><strong>Molybdenum Hexacarbonyl (Mo(CO)₆)</strong><br>A catalyst in organic synthesis.</p>
        `
    }],
    [["Mo", "C"], {
        info: `
            <p><strong>Molybdenum Carbide (Mo₂C)</strong><br>Used in catalytic converters.</p>
        `
    }],
    [["W", "F"], {
        info: `
            <p><strong>Tungsten Hexafluoride (WF₆)</strong><br>Used in chemical vapor deposition for electronics.</p>
        `
    }],
    [["W", "C"], {
        info: `
            <p><strong>Tungsten Carbide (WC)</strong><br>A very hard material used in cutting tools and abrasives.</p>
        `
    }],
    [["Pr", "O"], {
        info: `
            <p><strong>Praseodymium(III) Oxide (Pr₂O₃)</strong><br>Used in ceramics and specialized glasses.</p>
        `
    }],
    [["Pr", "N", "O"], {
        info: `
            <p><strong>Praseodymium Nitrate (Pr(NO₃)₃)</strong><br>Used in catalysts and glass polishing agents.</p>
        `
    }],
    [["Pr", "Cl"], {
        info: `
            <p><strong>Praseodymium Chloride (PrCl₃)</strong><br>Used in alloys and high-strength permanent magnets.</p>
        `
    }],
    [["Nd", "O"], {
        info: `
            <p><strong>Neodymium(III) Oxide (Nd₂O₃)</strong><br>Used in ceramics, glass coloration, and lasers.</p>
        `
    }],
    [["Nd", "F"], {
        info: `
            <p><strong>Neodymium Fluoride (NdF₃)</strong><br>Used in manufacturing high-strength neodymium magnets.</p>
        `
    }],
    [["Nd", "N", "O"], {
        info: `
            <p><strong>Neodymium Nitrate (Nd(NO₃)₃)</strong><br>Used in specialized glass and catalysts.</p>
        `
    }],
    [["Pm", "O"], {
        info: `
            <p><strong>Promethium Oxide (Pm₂O₃)</strong><br>A radioactive compound used in luminescent paints and nuclear batteries.</p>
        `
    }],
    [["Pm", "Cl"], {
        info: `
            <p><strong>Promethium Chloride (PmCl₃)</strong><br>Used in research related to nuclear reactions.</p>
        `
    }],
    [["Pm", "N", "O"], {
        info: `
            <p><strong>Promethium Nitrate (Pm(NO₃)₃)</strong><br>A radioactive compound primarily used for scientific study.</p>
        `
    }],
    [["Sm", "Co"], {
        info: `
            <p><strong>Samarium Cobalt (SmCo₅)</strong><br>Used in the creation of high-strength permanent magnets.</p>
        `
    }],
    [["Sm", "O"], {
        info: `
            <p><strong>Samarium(III) Oxide (Sm₂O₃)</strong><br>Used in ceramics and nuclear reactor control rods.</p>
        `
    }],
    [["Sm", "B"], {
        info: `
            <p><strong>Samarium Hexaboride (SmB₆)</strong><br>A material of interest in quantum computing.</p>
        `
    }],
    [["Ra"], {
        info: `
            <p>Through the work of my husband Pierre Curie and I, we managed to discover <strong>radium</strong> on 21 December 1898.<br>
            While studying the mineral earlier, we removed uranium from it and found that the remaining material was still radioactive.<br>
            In July 1898, while studying pitchblende, we isolated an element similar to bismuth which turned out to be <strong>polonium</strong>.<br>
            We then isolated a radioactive mixture consisting of two components: compounds of barium, which gave a brilliant green flame color,<br>
            and unknown radioactive compounds which gave carmine spectral lines that had never been documented before.<br>
            We found the radioactive compounds to be very similar to the barium compounds, except they were less soluble.<br>
            This discovery made it possible for us to isolate the radioactive compounds and discover a new element in them.</p>
        `
    }],
    [["Po"], {
        info: `
            <p>Through the work of my husband Pierre Curie and I, we managed to discover <strong>polonium</strong> in July 1898.<br>
            I named it after my native land Poland, because at the time it was under Russian, German and Austro-Hungarian partition,<br>
            and it did not exist as an independent country.</p>
        `
    }],
    [["Eu", "O"], {
        info: `
            <p><strong>Europium(III) Oxide (Eu₂O₃)</strong><br>Used in phosphors for color TV and LEDs.</p>
        `
    }],
    [["Eu", "S"], {
        info: `
            <p><strong>Europium Sulfide (EuS)</strong><br>A magnetic semiconductor used in spintronic devices.</p>
        `
    }],
    [["Eu", "F"], {
        info: `
            <p><strong>Europium Fluoride (EuF₃)</strong><br>Used in lasers and luminescent materials.</p>
        `
    }],
    [["Gd", "O"], {
        info: `
            <p><strong>Gadolinium(III) Oxide (Gd₂O₃)</strong><br>Used in MRI contrast agents and neutron shielding.</p>
        `
    }],
    [["Gd", "Ga", "O"], {
        info: `
            <p><strong>Gadolinium Gallium Garnet (GGG) (Gd₃Ga₅O₁₂)</strong><br>Used in microwave and laser technologies.</p>
        `
    }],
    [["Gd", "N", "O"], {
        info: `
            <p><strong>Gadolinium(III) Nitrate (Gd(NO₃)₃)</strong><br>Used in nuclear reactors and MRI diagnostics.</p>
        `
    }],
    [["Tb", "O"], {
        info: `
            <p><strong>Terbium(III) Oxide (Tb₄O₇)</strong><br>Used in fluorescent lamps and solid-state devices.</p>
        `
    }],
    [["Tb", "F"], {
        info: `
            <p><strong>Terbium Fluoride (TbF₃)</strong><br>Used in laser materials and high-performance magnets.</p>
        `
    }],
    [["Tb", "B"], {
        info: `
            <p><strong>Terbium Boride (TbB₄)</strong><br>Used in high-temperature electronics and research.</p>
        `
    }],
    [["Dy", "O"], {
        info: `
            <p><strong>Dysprosium(III) Oxide (Dy₂O₃)</strong><br>Used in nuclear reactors and as an additive in magnets.</p>
        `
    }],
    [["Dy", "I"], {
        info: `
            <p><strong>Dysprosium Iodide (DyI₃)</strong><br>Used in high-intensity discharge lamps.</p>
        `
    }],
    [["Dy", "Cl"], {
        info: `
            <p><strong>Dysprosium Chloride (DyCl₃)</strong><br>Used in research and manufacturing of dysprosium alloys.</p>
        `
    }],
    [["Ho", "O"], {
        info: `
            <p><strong>Holmium(III) Oxide (Ho₂O₃)</strong><br>Used in high-strength magnets and solid-state lasers.</p>
        `
    }],
    [["Ho", "F"], {
        info: `
            <p><strong>Holmium Fluoride (HoF₃)</strong><br>Used in research and in certain optical materials.</p>
        `
    }],
    [["Ho", "N", "O"], {
        info: `
            <p><strong>Holmium Nitrate (Ho(NO₃)₃)</strong><br>Used in nuclear reactor control rods.</p>
        `
    }],
    [["Er", "O"], {
        info: `
            <p><strong>Erbium(III) Oxide (Er₂O₃)</strong><br>Used in optical amplifiers and laser systems.</p>
        `
    }],
    [["Er", "F"], {
        info: `
            <p><strong>Erbium Fluoride (ErF₃)</strong><br>Used in high-tech laser systems and optics.</p>
        `
    }],
    [["Er", "Cl"], {
        info: `
            <p><strong>Erbium Chloride (ErCl₃)</strong><br>Used in glass and ceramic coloration and lasers.</p>
        `
    }],
    [["Tm", "O"], {
        info: `
            <p><strong>Thulium(III) Oxide (Tm₂O₃)</strong><br>Used in portable X-ray devices and laser technologies.</p>
        `
    }],
    [["Tm", "I"], {
        info: `
            <p><strong>Thulium Iodide (TmI₃)</strong><br>Used in high-intensity arc lamps.</p>
        `
    }],
    [["Tm", "N", "O"], {
        info: `
            <p><strong>Thulium Nitrate (Tm(NO₃)₃)</strong><br>A compound used in scientific research.</p>
        `
    }],
    [["Yb", "O"], {
        info: `
            <p><strong>Ytterbium(III) Oxide (Yb₂O₃)</strong><br>Used in ceramics, phosphors, and specialized alloys.</p>
        `
    }],
    [["Yb", "F"], {
        info: `
            <p><strong>Ytterbium Fluoride (YbF₃)</strong><br>Used in lasers and optical devices.</p>
        `
    }],
    [["Yb", "Cl"], {
        info: `
            <p><strong>Ytterbium Chloride (YbCl₃)</strong><br>Used as a catalyst in organic reactions.</p>
        `
    }],
    [["Lu", "O"], {
        info: `
            <p><strong>Lutetium(III) Oxide (Lu₂O₃)</strong><br>Used in phosphors and high-refractive index glass.</p>
        `
    }],
    [["Lu", "Ta", "O"], {
        info: `
            <p><strong>Lutetium Tantalate (LuTaO₄)</strong><br>A dense material used in X-ray phosphors.</p>
        `
    }],
    [["Lu", "Cl"], {
        info: `
            <p><strong>Lutetium(III) Chloride (LuCl₃)</strong><br>Used in catalysis and nuclear medicine.</p>
        `
    }],
    [["Hf", "C"], {
        info: `
            <p><strong>Hafnium Carbide (HfC)</strong><br>Used in high-temperature aerospace components.</p>
        `
    }],
    [["Hf", "O"], {
        info: `
            <p><strong>Hafnium Dioxide (HfO₂)</strong><br>Used in optical coatings and semiconductor technology.</p>
        `
    }],
    [["Hf", "Cl"], {
        info: `
            <p><strong>Hafnium Tetrachloride (HfCl₄)</strong><br>Used in organic synthesis and high-temperature materials.</p>
        `
    }],
    [["Ta", "C"], {
        info: `
            <p><strong>Tantalum Carbide (TaC)</strong><br>Used in cutting tools and high-temperature structural materials.</p>
        `
    }],
    [["Ta", "O"], {
        info: `
            <p><strong>Tantalum Pentoxide (Ta₂O₅)</strong><br>Used in capacitors and thin-film coatings.</p>
        `
    }],
    [["Ta", "N"], {
        info: `
            <p><strong>Tantalum Nitride (TaN)</strong><br>Used in microelectronics and hard coatings.</p>
        `
    }],
    [["Re", "F"], {
        info: `
            <p><strong>Rhenium Hexafluoride (ReF₆)</strong><br>Used in high-performance catalysts.</p>
        `
    }],
    [["Re", "O"], {
        info: `
            <p><strong>Rhenium Trioxide (ReO₃)</strong><br>A metallic compound with unique electrical properties.</p>
        `
    }],
    [["Re", "S"], {
        info: `
            <p><strong>Rhenium Disulfide (ReS₂)</strong><br>Used in lubricants and semiconductor research.</p>
        `
    }],
    [["U", "O"], {
        info: `
            <p><strong>Uranium Dioxide (UO₂)</strong><br>Used as nuclear fuel in reactors.</p>
        `
    }],
    [["U", "F"], {
        info: `
            <p><strong>Uranium Hexafluoride (UF₆)</strong><br>Used in the uranium enrichment process for nuclear fuel.</p>
        `
    }]
]);

export const thankYouMessage = "<p><strong>Thank you for noticing!</strong></p>";

export function checkSurprise(value) {
    return ((value.toString() === "Ra") || (value.toString() === "Po"));
}
export { color, symbol, name, atomicNumber, atomicMass, group }

const color = [
  0x1E90FF, 0xA70AD7, 0xE94848, 0xEA8B1E, 0x3CE9E3, 0x1E90FF, 0x1E90FF, 0x1E90FF, 0xD98EF0, 0xA70AD7,
  0xE94848, 0xEA8B1E, 0x079712, 0x3CE9E3, 0x1E90FF, 0x1E90FF, 0xD98EF0, 0xA70AD7, 0xE94848, 0xEA8B1E,
  0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347,
  0x079712, 0x3CE9E3, 0x3CE9E3, 0x1E90FF, 0xD98EF0, 0xA70AD7, 0xE94848, 0xEA8B1E, 0xE6E347, 0xE6E347,
  0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0x079712, 0x079712,
  0x3CE9E3, 0x3CE9E3, 0xD98EF0, 0xA70AD7, 0xE94848, 0xEA8B1E, 0xFCD1EA, 0xFCD1EA, 0xFCD1EA, 0xFCD1EA,
  0xFCD1EA, 0xFCD1EA, 0xFCD1EA, 0xFCD1EA, 0xFCD1EA, 0xFCD1EA, 0xFCD1EA, 0xFCD1EA, 0xFCD1EA, 0xFCD1EA,
  0xFCD1EA, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347,
  0x079712, 0x079712, 0x079712, 0x3CE9E3, 0xD98EF0, 0xA70AD7, 0xE94848, 0xEA8B1E, 0xF77BC3, 0xF77BC3,
  0xF77BC3, 0xF77BC3, 0xF77BC3, 0xF77BC3, 0xF77BC3, 0xF77BC3, 0xF77BC3, 0xF77BC3, 0xF77BC3, 0xF77BC3,
  0xF77BC3, 0xF77BC3, 0xF77BC3, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347, 0xE6E347,
  0xE6E347, 0xE6E347, 0x079712, 0x079712, 0x079712, 0x079712, 0xD98EF0, 0xA70AD7
];

const symbol = [
  "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", 
  "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", 
  "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", 
  "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", 
  "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", 
  "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", 
  "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", 
  "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", 
  "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", 
  "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", 
  "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", 
  "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const name = [
  "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
  "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", 
  "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", 
  "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", 
  "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", 
  "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", 
  "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", 
  "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", 
  "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", 
  "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", 
  "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", 
  "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"
];

const atomicNumber = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", 
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", 
  "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", 
  "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", 
  "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", 
  "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", 
  "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", 
  "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", 
  "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", 
  "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", 
  "111", "112", "113", "114", "115", "116", "117", "118"
];

const atomicMass = [
  "1.008", "4.0026", "6.94", "9.0122", "10.81", "12.011", "14.007", "15.999", "18.998", "20.180", 
  "22.990", "24.305", "26.982", "28.085", "30.974", "32.06", "35.45", "39.948", "39.098", "40.078", 
  "44.956", "47.867", "50.942", "51.996", "54.938", "55.845", "58.933", "58.693", "63.546", "65.38", 
  "69.723", "72.63", "74.922", "78.971", "79.904", "83.798", "85.468", "87.62", "88.906", "91.224", 
  "92.906", "95.95", "98", "101.07", "102.91", "106.42", "107.87", "112.41", "114.82", "118.71", 
  "121.76", "127.60", "126.90", "131.29", "132.91", "137.33", "138.91", "140.12", "140.91", "144.24", 
  "145", "150.36", "151.96", "157.25", "158.93", "162.50", "164.93", "167.26", "168.93", "173.05", 
  "174.97", "178.49", "180.95", "183.84", "186.21", "190.23", "192.22", "195.08", "196.97", "200.59", 
  "204.38", "207.2", "208.98", "209", "210", "222", "223", "226", "227", "232.04", 
  "231.04", "238.03", "237", "244", "243", "247", "247", "251", "252", "257", 
  "258", "259", "262", "267", "270", "271", "270", "277", "276", "281", 
  "282", "285", "286", "289", "290", "293", "294", "294"
];

const group = [
  "Nonmetals", "Noble Gases", "Alkali Metals", "Alkaline Earth Metals", "Metalloids", "Nonmetals", "Nonmetals", "Nonmetals", "Halogens", "Noble Gases", 
  "Alkali Metals", "Alkaline Earth Metals", "Post-transition Metals", "Metalloids", "Nonmetals", "Nonmetals", "Halogens", "Noble Gases", "Alkali Metals", "Alkaline Earth Metals", 
  "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", 
  "Post-transition Metals", "Metalloids", "Metalloids", "Nonmetals", "Halogens", "Noble Gases", "Alkali Metals", "Alkaline Earth Metals", "Transition Metals", "Transition Metals", 
  "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Post-transition Metals", "Post-transition Metals", 
  "Metalloids", "Metalloids", "Halogens", "Noble Gases", "Alkali Metals", "Alkaline Earth Metals", "Lanthanides", "Lanthanides", "Lanthanides", "Lanthanides", 
  "Lanthanides", "Lanthanides", "Lanthanides", "Lanthanides", "Lanthanides", "Lanthanides", "Lanthanides", "Lanthanides", "Lanthanides", "Lanthanides", 
  "Lanthanides", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", 
  "Post-transition Metals", "Post-transition Metals", "Post-transition Metals", "Post-transition Metals", "Post-transition Metals", "Noble Gases", "Alkali Metals", "Alkaline Earth Metals", "Actinides", "Actinides", 
  "Actinides", "Actinides", "Actinides", "Actinides", "Actinides", "Actinides", "Actinides", "Actinides", "Actinides", "Actinides", 
  "Actinides", "Actinides", "Actinides", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", 
  "Transition Metals", "Transition Metals", "Post-transition Metals", "Post-transition Metals", "Post-transition Metals", "Post-transition Metals", "Metalloids", "Noble Gases"
];
export { introText, successMessage1, successMessage2, dinosaurInfo };

const introText = `<p>Hi! My name is Mary Anning. Welcome to the excavation site!</p><p>I was an English fossil collector, dealer,
                     and palaeontologist. My discoveries included the first correctly identified ichthyosaur skeleton when I was
                      twelve years old; the first two nearly complete plesiosaur skeletons;
                       the first pterosaur skeleton located outside Germany; and fish fossils.</p>
                       <p>Help me find a fossil!</p>`;
const successMessage1 = "Congratulations! You've found the fossil of a dinosaur!";
const successMessage2 = "WOW! You've found a fossil that I've found before!";


const dinosaurInfo = new Map([
    [1, {name: "Pterodactylus", 
        region: "Europe (Germany, England)", 
        time: "Late Jurassic (150 million years ago)", 
        description: "Flying reptile (pterosaur), not a true dinosaur, but important in paleontology.", 
        image: "../assets/img/pterodactylus.jpg"}],
    [2, {name: "Plesiosaurus", 
        region: "Europe (England)", 
        time: "Early Jurassic (201-183 million years ago)", 
        description: "Marine reptile, long neck, and flippers for swimming; not a true dinosaur.", 
        image: "../assets/img/plesiosaurus.jpg"}],
    [3, {name: "Ichthyosaurus", 
        region: "Europe (England)", 
        time: "Early Jurassic (201-182 million years ago)", 
        description: "Dolphin-like marine reptile; another of Anning's important discoveries.", 
        image: "../assets/img/ichthyosaurus.jpg"}],
    [4, {name: "Mosasaurus", 
        region: "Europe (England, Netherlands)", 
        time: "Late Cretaceous (70-66 million years ago)", 
        description: "Large marine reptile, with sharp teeth, dominating the seas.", 
        image: "../assets/img/mosasaurus.jpg"}],
    [5, {name: "Dimorphodon", 
        region: "Europe (England)", 
        time: "Early Jurassic (200-190 million years ago)", 
        description: "Flying reptile (pterosaur) with a large head and varied teeth for different diets.", 
        image: "../assets/img/dimorphodon.jpg"}],
    [6, {name: "Tyrannosaurus rex", 
        region: "North America", 
        time: "Late Cretaceous (68-66 million years ago)", 
        description: "Large carnivore; one of the most famous predators with strong jaws and small arms.", 
        image: "../assets/img/t-rex.jpg"}],
    [7, {name: "Triceratops", 
        region: "North America", 
        time: "Late Cretaceous (68-66 million years ago)", 
        description: "Large herbivore with three facial horns and a bony frill.", 
        image: "../assets/img/triceratops.jpg"}],
    [8, {name: "Velociraptor", 
        region: "Central Asia (Mongolia)", 
        time: "Late Cretaceous (75-71 million years ago)", 
        description: "Small, agile carnivore known for hunting in packs.", 
        image: "../assets/img/velociraptor.jpg"}],
    [9, {name: "Stegosaurus", 
        region: "North America", 
        time: "Late Jurassic (155-150 million years ago)", 
        description: "Herbivore with plates along its back and spikes on its tail.", 
        image: "../assets/img/stegosaurus.jpg"}],
    [10, {name: "Brachiosaurus", 
        region: "North America", 
        time: "Late Jurassic (154-153 million years ago)", 
        description: "Massive herbivore with long neck and forelimbs longer than hind limbs.", 
        image: "../assets/img/brachiosaurus.jpg"}],
    [11, {name: "Ankylosaurus", 
        region: "North America", 
        time: "Late Cretaceous (68-66 million years ago)", 
        description: "Heavily armored herbivore with a large, clubbed tail for defense.", 
        image: "../assets/img/ankylosaurus.jpg"}],
    [12, {name: "Spinosaurus", 
        region: "North Africa (Egypt, Morocco)", 
        time: "Late Cretaceous (112-93 million years ago)", 
        description: "Large carnivore and piscivore (fish-eater) with a distinctive sail on its back.", 
        image: "../assets/img/spinosaurus.jpg"}],
    [13, {name: "Iguanodon", 
        region: "Europe (England, Belgium)", 
        time: "Early Cretaceous (126-122 million years ago)", 
        description: "Herbivore known for its thumb spikes, possibly used for defense.", 
        image: "../assets/img/iguanodon.jpg"}],
    [14, {name: "Deinonychus", 
        region: "North America", 
        time: "Early Cretaceous (115-108 million years ago)", 
        description: "Carnivorous raptor with sharp claws on each foot, likely hunted in packs.", 
        image: "../assets/img/deinonychus.jpg"}],
    [15, {name: "Allosaurus", 
        region: "North America", 
        time: "Late Jurassic (155-150 million years ago)", 
        description: "Large carnivore, one of the top predators of its time.", 
        image: "../assets/img/allosaurus.jpg"}],
    [16, {name: "Diplodocus", 
        region: "North America", 
        time: "Late Jurassic (154-152 million years ago)", 
        description: "Long-necked herbivore with a whip-like tail.", 
        image: "../assets/img/diplodocus.jpg"}],
    [17, {name: "Oviraptor", 
        region: "Central Asia (Mongolia)", 
        time: "Late Cretaceous (85-75 million years ago)", 
        description: "Small, egg-eating carnivore, once thought to steal other dinosaurs' eggs.", 
        image: "../assets/img/oviraptor.jpg"}],
    [18, {name: "Camarasaurus", 
        region: "North America", 
        time: "Late Jurassic (155-145 million years ago)", 
        description: "Large herbivore with a short, boxy skull.", 
        image: "../assets/img/camarasaurus.jpg"}],
    [19, {name: "Protoceratops", 
        region: "Central Asia (Mongolia)", 
        time: "Late Cretaceous (83-70 million years ago)", 
        description: "Small herbivore, ancestor of larger horned dinosaurs like Triceratops.", 
        image: "../assets/img/protoceratops.jpg"}],
    [20, {name: "Pachycephalosaurus", 
        region: "North America", 
        time: "Late Cretaceous (70-66 million years ago)", 
        description: "Herbivore with a thick, dome-shaped skull possibly used for head-butting.", 
        image: "../assets/img/pachycephalosaurus.jpg"}],
    [21, {name: "Saurophaganax", 
        region: "North America", 
        time: "Late Jurassic (150 million years ago)", 
        description: "Large carnivorous theropod, possibly a species of Allosaurus.", 
        image: "../assets/img/saurophaganax.jpg"}],
    [22, {name: "Megalosaurus", 
        region: "Europe (England)", 
        time: "Middle Jurassic (166 million years ago)", 
        description: "Carnivorous theropod, one of the first dinosaurs to be scientifically described.", 
        image: "../assets/img/megalosaurus.jpg"}],
    [23, {name: "Compsognathus", 
        region: "Europe (Germany, France)", 
        time: "Late Jurassic (150 million years ago)", 
        description: "Small carnivorous dinosaur, likely a fast, agile hunter.", 
        image: "../assets/img/compsognathus.jpg"}],
    [24, {name: "Coelophysis", 
        region: "North America", 
        time: "Late Triassic (203-196 million years ago)", 
        description: "Small, early carnivorous dinosaur, known for its slender build and speed.", 
        image: "../assets/img/coelophysis.jpg"}],
    [25, {name: "Archaeopteryx", 
        region: "Europe (Germany)", 
        time: "Late Jurassic (150 million years ago)", 
        description: "Bird-like dinosaur, transitional species between dinosaurs and birds.", 
        image: "../assets/img/archaeopteryx.jpg"}],
    [26, {name: "Gallimimus", 
        region: "Central Asia (Mongolia)", 
        time: "Late Cretaceous (70 million years ago)", 
        description: "Fast, ostrich-like herbivore or omnivore with a long neck and legs.", 
        image: "../assets/img/gallimimus.jpg"}],
    [27, {name: "Giganotosaurus", 
        region: "South America (Argentina)", 
        time: "Late Cretaceous (98-97 million years ago)", 
        description: "Giant carnivore, one of the largest known theropods, possibly larger than T. rex.", 
        image: "../assets/img/giganotosaurus.jpg"}],
    [28, {name: "Mamenchisaurus", 
        region: "East Asia (China)", 
        time: "Late Jurassic (160 million years ago)", 
        description: "Long-necked herbivore with an extremely long neck relative to its body size.", 
        image: "../assets/img/mamenchisaurus.jpg"}],
    [29, {name: "Carnotaurus", 
        region: "South America (Argentina)", 
        time: "Late Cretaceous (72-69 million years ago)", 
        description: "Carnivore with distinctive horns above its eyes and a lightly built body.", 
        image: "../assets/img/carnotaurus.jpg"}],
    [30, {name: "Dunkleosteus", 
        region: "North America and Europe", 
        time: "Late Devonian (358-382 million years ago)", 
        description: "Armored fish predator, though not a dinosaur, it is part of the fossil record that Anning contributed to.", 
        image: "../assets/img/dunkleosteus.jpg"}]
  ]);


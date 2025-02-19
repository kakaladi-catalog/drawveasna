document.addEventListener('DOMContentLoaded', () => {
    const goToTopBtn = document.getElementById('goToTopBtn');

    // Show the button when the user scrolls down 200px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            goToTopBtn.style.display = 'block';
        } else {
            goToTopBtn.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    goToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    });
});


// Add event listener to the checkbox
document.getElementById('toggleContainer').addEventListener('change', function () {
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');

if (this.checked) {
    container2.style.display = 'none'; // Hide container2
    container3.style.display = 'block'; // Show container3
} else {
    container2.style.display = 'block'; // Show container2
    container3.style.display = 'none'; // Hide container3
}
});


let images = {}; // Global variable to hold the images mapping
let prompts = {}; // Global variable to hold the prompts

// Function to create dynamic selects and search box
function createSelects() {
const selectContainer = document.getElementById("dynamicSelects");

// Create the first select element
const select1 = document.createElement("select");
select1.className = "style-select";
select1.onchange = function () {
    updateImage(); // Update image when the style is changed
    updateText(); // Update text when the style is changed

    // Show or hide the search box based on the selected option
    const searchBox = document.getElementById("searchBox");
    if (select1.value === "None") {
        searchBox.style.display = "block"; // Show search box
    } else {
        searchBox.style.display = "none"; // Hide search box
    }
};

// Add options to the select element
const options1 = [
    "None",
    "cinematic-default",
    "3d-model",
    "analog film",
    "anime",
    "cinematic",
    "comic book",
    "craft clay",
    "digital art",
    "enhance",
    "fantasy art",
    "isometric",
    "line art",
    "lowpoly",
    "neonpunk",
    "origami",
    "photographic",
    "pixel art",
    "texture",
    "ads-advertising",
    "ads-automotive",
    "ads-corporate",
    "ads-fashion editorial",
    "ads-food photography",
    "ads-luxury",
    "ads-real estate",
    "ads-retail",
    "artstyle-abstract",
    "artstyle-abstract expressionism",
    "artstyle-art deco",
    "artstyle-art nouveau",
    "artstyle-constructivist",
    "artstyle-cubist",
    "artstyle-expressionist",
    "artstyle-graffiti",
    "artstyle-hyperrealism",
    "artstyle-impressionist",
    "artstyle-pointillism",
    "artstyle-pop art",
    "artstyle-psychedelic",
    "artstyle-renaissance",
    "artstyle-steampunk",
    "artstyle-surrealist",
    "artstyle-typography",
    "artstyle-watercolor",
    "futuristic-biomechanical",
    "futuristic-biomechanical cyberpunk",
    "futuristic-cybernetic",
    "futuristic-cybernetic robot",
    "futuristic-cyberpunk cityscape",
    "futuristic-futuristic",
    "futuristic-retro cyberpunk",
    "futuristic-retro futurism",
    "futuristic-sci-fi",
    "futuristic-vaporwave",
    "game-bubble bobble",
    "game-cyberpunk game",
    "game-fighting game",
    "game-gta",
    "game-mario",
    "game-minecraft",
    "game-pokemon",
    "game-retro arcade",
    "game-retro game",
    "game-rpg fantasy game",
    "game-strategy game",
    "game-streetfighter",
    "game-zelda",
    "misc-architectural",
    "misc-disco",
    "misc-dreamscape",
    "misc-dystopian",
    "misc-fairy tale",
    "misc-gothic",
    "misc-grunge",
    "misc-horror",
    "misc-kawaii",
    "misc-lovecraftian",
    "misc-macabre",
    "misc-manga",
    "misc-metropolis",
    "misc-minimalist",
    "misc-monochrome",
    "misc-nautical",
    "misc-space",
    "misc-stained glass",
    "misc-techwear fashion",
    "misc-tribal",
    "misc-zentangle",
    "papercraft-collage",
    "papercraft-flat papercut",
    "papercraft-kirigami",
    "papercraft-paper mache",
    "papercraft-paper quilling",
    "papercraft-papercut collage",
    "papercraft-papercut shadow box",
    "papercraft-stacked papercut",
    "papercraft-thick layered papercut",
    "photo-alien",
    "photo-film noir",
    "photo-hdr",
    "photo-long exposure",
    "photo-neon noir",
    "photo-silhouette",
    "photo-tilt-shift",
    "cinematic-diva",
    "Abstract Expressionism",
    "Academia",
    "Action Figure",
    "Adorable 3D Character",
    "Adorable Kawaii",
    "Art Deco",
    "Art Nouveau",
    "Astral Aura",
    "Avant-garde",
    "Baroque",
    "Bauhaus-Style Poster",
    "Blueprint Schematic Drawing",
    "Caricature",
    "Cel Shaded Art",
    "Character Design Sheet",
    "Classicism Art",
    "Color Field Painting",
    "Colored Pencil Art",
    "Conceptual Art",
    "Constructivism",
    "Cubism",
    "Dadaism",
    "Dark Fantasy",
    "Dark Moody Atmosphere",
    "DMT Art Style",
    "Doodle Art",
    "Double Exposure",
    "Dripping Paint Splatter Art",
    "Expressionism",
    "Faded Polaroid Photo",
    "Fauvism",
    "Flat 2D Art",
    "Fortnite Art Style",
    "Futurism",
    "Glitchcore",
    "Glo-fi",
    "Googie Art Style",
    "Graffiti Art",
    "Harlem Renaissance Art",
    "High Fashion",
    "Idyllic",
    "Impressionism",
    "Infographic Drawing",
    "Ink Dripping Drawing",
    "Japanese Ink Drawing",
    "Knolling Photography",
    "Light Cheery Atmosphere",
    "crayon drawing",
    "Logo Design",
    "Luxurious Elegance",
    "Macro Photography",
    "Mandola Art",
    "Marker Drawing",
    "Medievalism",
    "Minimalism",
    "Neo-Baroque",
    "Neo-Byzantine",
    "Neo-Futurism",
    "Neo-Impressionism",
    "Neo-Rococo",
    "Neoclassicism",
    "Op Art",
    "Ornate and Intricate",
    "Pencil Sketch Drawing",
    "Pop Art 2",
    "Rococo",
    "Silhouette Art",
    "Simple Vector Art",
    "Sketchup",
    "Steampunk 2",
    "Surrealism",
    "Suprematism",
    "Terragen",
    "Tranquil Relaxing Atmosphere",
    "Sticker Designs",
    "Vibrant Rim Light",
    "Volumetric Lighting",
    "Watercolor 2",
    "Whimsical and Playful",
    "Cardboard-Style",
    "oil painting-Realism",
    "Cute figurine",
    "tattoo design",
    "molding-style",
    "Cute Anime，Ghibli",
    "Cute 3D icon",
    "Japan Anime",
    "1980s Photo",
    "Embroidery and Needlework",
    "Patchwork and Quilting",
    "Felting and Fiber Arts",
    "Knitting and Crocheting",
    "Crocheting Characters",
    "T-Shirt Printing-Style",
    "T-Shirt Printing-Style: Vintage Retro Illustration",
    "T-Shirt Printing-Style: Abstract Artwork",
    "T-Shirt Printing-Style: Pop Culture Iconography",
    "T-Shirt Printing-Style: Nature and Wildlife",
    "Cardboard crafts: Furniture Design",
    "Cardboard crafts: Costume or Prop",
    "Cardboard crafts: Model Making",
    "Realistic Sticker Design",
    "Cardboard crafts: helmet ",
    "Helmet design",
    "AutoCAD-style",
    "3D Print-style",
    "Manga Characters",
    "Realistic 3D character-Style",
    "Packing design-style",
    "Animal shape vase-style",
    "Animal shape Chinese vase-style",
    "handicapped-style",
    "Human pose-style",
    "4K movie-style",
    "1960s movie-style",
    "old photos torn-style",
    "3D logo Design",
    "water bottle-style",
    "Geometric Acrylic Banner",
    "Colored Pencils Drawing: full-body",
    "sketching",
    "wooden toy ",
    "Wooden Furniture-style",
    "Realistic Caricature-Style",
    "Full body Vector",
    "Pop-up card-Style",
    "Mug-style",
    "Copper sculpture-Style",
    "Thai silver art-Style",
    "Furniture Design",
    "Realistic Cute figurine",
    "Acrylic furniture-Stlye",
    "Giant animal transported",
    "Architecture design",
    "Fan-Design",
    "sculpture Wooden Design",
    "spice cans design",
    "vacuum design",
    "Kid motorcycle design",
    "buildings-fruits Vegetables Design",
    "Motorbike modified, mobile café shop",
    "CNC 3D puzzles ",
    "Kid's Toy Design",
    "Ceramic tile design",
    "Vehicle design",
    "Trailer design",
    "GTA-6 style",
    "wooden sculpture ",
    "vehicle plastic design",
    "vehicle Fruit design",
    "Paper cutting design",
    "Ecological art",
    " Collectible toy",
    "PC Case Model Design",
    "Mobile motorcycle Cafe bar",
    "Gaming PC case",
    "Flat Art Style 2",
    "porcelain style",
    "rattan style",
    "Polar Panorama-style",
    "group anime characters",
    "portrait paper cutout",
    "3D rock-shaped",
    "Motor Front Car",
    "Fruit Crying",
    "Draw with thread-realism ",
    "stylized line art-style",
    "Sculpture scene inside",
    "Realism-style",
    "Leaves-shaped",
    "African boy and crushed wood",
    "crushed wood-shaped",
    "garbage-style",
    "plastic bag-shaped",
    "chalk art-Style",
    "Optical illusions art",
    "Animal 3D Effect",
    "3D polygonal paper",
    "Animal grumpy look",
    "Complicated facial contours",
    "shadow box LED",
    "Mechanical sculpture",
    "Smoke art",
    "Bonfire smoke art",
    "Mechanical Art",
    "Silicone mold-style",
    "across frames-style",
    "flip-flops pattern Design",
    "Sandstone-Style",
    "Old tires-style",
    "Bag-Wallet Design",
    "Bag-Wallet Design 2",
    "Breaking wall-style",
    "Wall decoration art",
    "Name card design",
    "Animal head wall decor",
    "Collage Mixed media",
    "Draw with threa-Colorful",
    "Gouache Painting",
    "Fresco Painting",
    "Mosaic Painting:",
    "Nihonga Painting",
    "anime drawing",
    "oil painting-portrait",
    "T-Shirt Design",
    "Bauhaus-style poster 2",
    "Living Room design",
    "bedroom design",
    "Kitchen design",
    "Shop Design",
    "Palm tree-style",
    "Coconut shell-style",
    "coconut shell",
    "Sand Art",
    "Indian henna designs",
    "Rain art-style",
    "Flame-style",
    "Flame art",
    "Wall art print",
    "Flower-style",
    "idol-style",
    "Pottery-style",
    "Polymer clay-style",
    "clay-style",
    "Walnut Shell Art",
    "Pebbles art",
    "emerald-style",
    "ruby-style",
    "Sapphire-style",
    "Jadeite-style",
    "Money-style",
    "paper cutting silhouette",
    "Throw water art",
    "Product sketching",
    "Room design",
    "Cardboard Three-dimensional",
    "Stylized artistic sculpture",
    "strawberries-Style",
    "vehicle Wooden body",
    "vehicle-style",
    "Pixar-style",
    "Realistic monster-style",
    "Realistic alien-style",
    "Security camera screen view",
    "Hot wheel Racing",
    "Hot Wheels Collection",
    "digital painting-Style",
    "Forza Horizon 5 racing",
    "DIRT 5 racing",
    "DIRT RALLY 2.0 racing",
    "Minimal Style",
    "Pixar Character",
    "Pixar Animals",
    "Pixar Fantasy",
    "Modern Condo design",
    "MotoGP design",
    "Motorcycle design",
    "Futuristic Animal robot",
    "Fallout 4 Car-style",
    "Kids Car",
    "office design",
    "warrior suit",
    "Graphic novel-style",
    "Woven Bamboo House Design",
    "Woven Bamboo Home Deco",
    "Straw House Design",
    "woven bamboo building",
    "skeleton Art",
    "Vehicle skeletal",
    "Pebbles art",
    "architectural drawing",
    "Animal head wall decor 2",
    "kids clothes design",
    "whimsical bookshelf",
    "3D anaglyph",
    "3D render",
    "8-bit art",
    "Abstract design",
    "Abstract style",
    "Aerial photo",
    "Alternate history",
    "Ambrotype",
    "Art brut",
    "Art deco",
    "Baroque",
    "Bird’s eye view",
    "Black and white photo",
    "Caravaggism",
    "Caricature",
    "Cartoon",
    "Cinematic style",
    "Classic",
    "Close-up",
    "Cloud design",
    "Collage art",
    "Conceptual photo",
    "Cross processing",
    "Cyber gothic",
    "Cyberpunk style",
    "Daguerreotype",
    "Digital art",
    "Documentary style",
    "Double exposure effect",
    "Dystopian",
    "Extreme close-up",
    "Eye level",
    "Fairy tale",
    "Fantasy photo",
    "Film noir",
    "Fine art photo",
    "Fish-eye",
    "Fisheye lens",
    "Flat design",
    "Flat lay",
    "Folk art",
    "Food photo",
    "Freeze frame",
    "Futurism",
    "Futuristic",
    "Glamour photo",
    "Glitch art",
    "Gothic horror",
    "Hand-drawn animation",
    "High contrast",
    "High poly",
    "Horror",
    "Hyper realistic",
    "Impressionist style",
    "Industrial",
    "folk art style",
    "Low angle",
    "Low contrast",
    "Low poly",
    "Magazine style",
    "Magical realism",
    "Makeup transformation",
    "Manipulated",
    "Masked portrait",
    "Medical",
    "Mid-century modern wedding",
    "Minimalist",
    "Mixed media",
    "Modern",
    "Monochrome photo",
    "Moody photo",
    "Motion blur",
    "Multiple exposure",
    "Mythological",
    "Neon glow",
    "Noir",
    "Oil Painting",
    "Op art",
    "Overexposed",
    "Panoramic photo",
    "Pastel colors",
    "Photo collage",
    "Photogrammetry",
    "Pixelated",
    "Pointillism",
    "Polaroid style",
    "Pop art",
    "Portrait photo",
    "Post-apocalyptic",
    "Prismatic",

];
options1.forEach(optionText => {
    const option = document.createElement("option");
    option.textContent = optionText;
    select1.appendChild(option);
});
selectContainer.appendChild(select1);
}

// Function to update the displayed image
function updateImage() {
const select = document.querySelector(".style-select"); // Get the select element
const selectedValue = select.value; // Get the selected value
const imageContainer = document.getElementById("imageContainer"); // Get the image container

// Use the global images object to get the image source
if (images[selectedValue]) {
    imageContainer.innerHTML = `
        <div class="imageContainer">
            <img alt="${selectedValue} image" class="rounded-md" height="300" src="${images[selectedValue]}" width="300"/>
        </div>
    `;
} else {
    imageContainer.innerHTML = ''; // Clear the image if no valid selection
}
}

// Function to update the displayed text
function updateText() {
const inputText = document.getElementById("dogInput").value; // Get the input text
const select = document.querySelector(".style-select"); // Get the select element
const selectedValue = select.value; // Get the selected value
const dynamicTextElement = document.getElementById("dynamicText");

// Update the dynamic text based on the input and selected value
dynamicTextElement.innerText = inputText || prompts[selectedValue] || "prompt"; // Use input text or prompt

// If the selected value is valid, append the prompt
if (prompts[selectedValue]) {
    dynamicTextElement.innerText += " - " + prompts[selectedValue];
}
}

// Function to copy text to clipboard
function copyToClipboard() {
const textToCopy = document.getElementById("copyText").innerText;
navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Text copied to clipboard!");
}).catch(err => {
    console.error("Failed to copy: ", err);
});
}

// Function to create a checkbox and select pair
function createCheckboxSelect(checkboxId, options) {
const outerDiv = document.createElement('div');
outerDiv.className = 'mt-2';

const flexContainer = document.createElement('div');
flexContainer.className = 'flex items-center space-x-2';

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.className = 'form-checkbox';
checkbox.id = checkboxId;

const select = document.createElement('select');
select.className = 'style-select w-full';

options.forEach(optionText => {
    const option = document.createElement('option');
    option.textContent = optionText;
    select.appendChild(option);
});

flexContainer.appendChild(checkbox);
flexContainer.appendChild(select);
outerDiv.appendChild(flexContainer);

return outerDiv;
}

// Function to generate the table
function createTable() {
const data = [
    {
        styleName: "None",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/xjrKrAM_H3LEAK4wadJLV30ILMgXn1DDFCJpWIHXx-k.jpg",
        prompt: "A Young Asian Woman"
    },
    {
        styleName: "cinematic-default",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ZDhM6kRZUnyZaa6X1kgEGtBmJfQ-oFqvkmzJMoXiv_o.jpg",
        prompt: "cinematic still, emotional, harmonious, vignette, highly detailed, high budget, bokeh, cinemascope, moody, epic, gorgeous, film grain, grainy"
    },
    {
        styleName: "3d-model",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/nrVRKiSvD-_xHo8Yyr_2ipAh2DSbsA8O4sU3TZ7oTO4.jpg",
        prompt: "3d model, octane render, highly detailed, volumetric, dramatic lighting"
    },
    {
        styleName: "analog film",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/U-gBmQdVO7Rwmn029aU8Ev6r1-bp565eNR3Xl45lgEs.jpg",
        prompt: "analog film photo, faded film, desaturated, 35mm photo, grainy, vignette, vintage, Kodachrome, Lomography, stained, highly detailed, found footage"
    },
    {
        styleName: "anime",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/0TVzOPMfPeadQSauWCCMgQYG9FmbwMYh7P6opo9awyM.jpg",
        prompt: "anime, highly detailed, colorful, expressive, stylized, vibrant"
    },
    {
        styleName: "cinematic",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/7nEd5tgm3Lko4w7sLP9lECaQe4vjIGggiv130euppss.jpg",
        prompt: "cinematic film still, shallow depth of field, vignette, highly detailed, high budget, bokeh, cinemascope, moody, epic, gorgeous, film grain, grainy"
    },
    {
        styleName: "comic book",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/GcjAT80iScPXGXNrVpXp3k-9NGrH83IXJgXKoJaPevc.jpg",
        prompt: "comic, graphic illustration, comic art, graphic novel art, vibrant, highly detailed"
    },
    {
        styleName: "craft clay",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/XLBkIy5fCSbA-UV1rxN9SclCOCQV0P8AD4OwdN3Qq8E.jpg",
        prompt: "play-doh style, sculpture, clay art, centered composition, Claymation"
    },
    {
        styleName: "digital art",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/PGVhYeJjJ_DxDOiD2vbIW4ygPsrw8S-_Hp0i31csQAA.jpg",
        prompt: "concept art, digital artwork, illustrative, painterly, matte painting, highly detailed"
    },
    {
        styleName: "enhance",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/DlZn6a1CeLrpAwXuss9NOG2kd5XuHkukiDyeFKwPaUE.jpg",
        prompt: "breathtaking, award-winning, professional, highly detailed"
    },
    {
        styleName: "fantasy art",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/imGkOmlkDqX5qXuyuvY70cH7WCl4zZWNhO4zA5DhM3E.jpg",
        prompt: "ethereal fantasy concept art of, magnificent, celestial, ethereal, painterly, epic, majestic, magical, fantasy art, cover art, dreamy"
    },
    {
        styleName: "isometric",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/FHLYYY7eU2hsrdX_fraDYvPE-Qy9IrSJBgLUvexZFPw.jpg",
        prompt: "isometric style, vibrant, beautiful, crisp, detailed, ultra detailed, intricate"
    },
    {
        styleName: "line art",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/lineart.png",
        prompt: "line art drawing, professional, sleek, modern, minimalist, graphic, line art, vector graphics"
    },
    {
        styleName: "lowpoly",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Ci4PUB9U7AQcX8QWZyk6UbD5mghuAzI6tJPA9UeE15A.jpg",
        prompt: "low-poly style, low-poly game art, polygon mesh, jagged, blocky, wireframe edges, centered composition"
    },
    {
        styleName: "neonpunk",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/K7apGEkZPJKih9x6Dt50cljPLv6MpguVX84i_IVfXoQ.jpg",
        prompt: "neon punk style, cyberpunk, vaporwave, neon, vibes, vibrant, stunningly beautiful, crisp, detailed, sleek, ultramodern, magenta highlights, dark purple shadows, high contrast, cinematic, ultra detailed, intricate, professional"
    },
    {
        styleName: "origami",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/9tkFD5IbWngcw_P-Ho1pMbRB4vbsOiWopmf7U7L6c1U.jpg",
        prompt: "origami style, paper art, pleated paper, folded, origami art, pleats, cut and fold, centered composition"
    },
    {
        styleName: "photographic",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ybRi9QcWetCFswnMJa9gIlETSPbSKndEH3lw8TtbpAQ.jpg",
        prompt: "cinematic photo, 35mm photograph, film, bokeh, professional, 4k, highly detailed"
    },
    {
        styleName: "pixel art",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/q8epYoBXj8oyGmjG8BVTvE2Skvk5kga1s8oY6h57ji8.jpg",
        prompt: "pixel-art, low-res, blocky, pixel art style, 8-bit graphics"
    },
    {
        styleName: "texture",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/n1aJqU_OABGpu_oUxncIocpsnYIv2FqUrxXXmP7GHxI.jpg",
        prompt: "texture top-down close-up"
    },
    {
        styleName: "ads-advertising",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ymqjaxtkzAjwSmirH1PTpKO3Ch5NTqiqAUFoCxDKRz8.jpg",
        prompt: "Advertising poster style, Professional, modern, product-focused, commercial, eye-catching, highly detailed"
    },
    {
        styleName: "ads-automotive",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/L8LvdMIlZixH6RC8h-kf5ipnCzuSBRsfdZcvrS1J0cQ.jpg",
        prompt: "Automotive advertisement style, Sleek, dynamic, professional, commercial, vehicle-focused, high-resolution, highly detailed"
    },
    {
        styleName: "ads-corporate",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LfGvRpJ2Ak8x5FI5huVWVeaPuq2dpE5ncYsvkSXuPBY.jpg",
        prompt: "Corporate branding style, Professional, clean, modern, sleek, minimalist, business-oriented, highly detailed"
    },
    {
        styleName: "ads-fashion editorial",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/VteJ9FSWBA0ioHXMDwwiFUno_Z8HRYdVY75SVaEq6Ps.jpg",
        prompt: "Fashion editorial style, High fashion, trendy, stylish, editorial, magazine style, professional, highly detailed"
    },
    {
        styleName: "ads-food photography",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/T4etsPwWCV3tXH4wIzxs5jl2LOyH2T1zudCqdxROU_8.jpg",
        prompt: "Food photography style {Animal}. Appetizing, professional, culinary, high-resolution, commercial, highly detailed"
    },
    {
        styleName: "ads-luxury",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pB06TWdAAMt0nE8kqTtE8ksSejz9n8g5eaI4TXBklEY.jpg",
        prompt: "Luxury product style {Animal}. Elegant, sophisticated, high-end, luxurious, professional, highly detailed"
    },
    {
        styleName: "ads-real estate",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/I355XTqVjLbmxfpBpVHw4p_gyhaEcaYndSoq1DbN1yM.jpg",
        prompt: "Real estate photography style {Animal}. Professional, inviting, well-lit, high-resolution, property-focused, commercial, highly detailed"
    },
    {
        styleName: "ads-retail",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/rf8UxUa-VWURV1pv_ys2jjkaHxwvv-t7DFP27kn0jX0.jpg",
        prompt: "Retail packaging style {Animal}. Vibrant, enticing, commercial, product-focused, eye-catching, professional, highly detailed"
    },
    {
        styleName: "artstyle-abstract",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/q3p2tx8_u7A8QklHE7JaEyfdXbvLj1kRwOrfW-ESLtc.jpg",
        prompt: "abstract style {Animal}. non-representational, colors and shapes, expression of feelings, imaginative, highly detailed"
    },
    {
        styleName: "artstyle-abstract expressionism",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/PDChfr2PfJmPIfMmARNfsFv0uaK2bWV-rMixqoov2PQ.jpg",
        prompt: "abstract expressionist painting {Animal}. energetic brushwork, bold colors, abstract forms, expressive, emotional"
    },
    {
        styleName: "artstyle-art deco",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/z_N6puDHC28tQ-dylRqcup6dKvFV9zodBHEsyrnX04U.jpg",
        prompt: "Art Deco style {Animal}. geometric shapes, bold colors, luxurious, elegant, decorative, symmetrical, ornate, detailed"
    },
    {
        styleName: "artstyle-art nouveau",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/SJB7O8mL7m6JAzJiEWkwz4kVmk3y72i8b-mKZEESRyg.jpg",
        prompt: "Art Nouveau style {Animal}. elegant, decorative, curvilinear forms, nature-inspired, ornate, detailed"
    },
    {
        styleName: "artstyle-constructivist",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/G7zSnSwiTG8DUyWrIZt-ZNYoFSOtWjxX8MerDQROj6g.jpg",
        prompt: "constructivist style {Animal}. geometric shapes, bold colors, dynamic composition, propaganda art style"
    },
    {
        styleName: "artstyle-cubist",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/JhmP77SO0-3eQe7v0rPNuWTObRAMdLVgTuA3chvU33s.jpg",
        prompt: "cubist artwork {Animal}. geometric shapes, abstract, innovative, revolutionary"
    },
    {
        styleName: "artstyle-expressionist",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/HUExvWqFYA__qPB2T7WDKX031qqtoY2Y59B985KoASM.jpg",
        prompt: "expressionist style {Animal}. raw, emotional, dynamic, distortion for emotional effect, vibrant, use of unusual colors, detailed"
    },
    {
        styleName: "artstyle-graffiti",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/9uuvF2VryrycpKSPrFf2FolJDXM-Npd-P4TCYWepGRE.jpg",
        prompt: "graffiti style {Animal}. street art, vibrant , urban, detailed, tag, mural"
    },
    {
        styleName: "ads-fashion editorial",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/VteJ9FSWBA0ioHXMDwwiFUno_Z8HRYdVY75SVaEq6Ps.jpg",
        prompt: "Fashion editorial style {Animal}. Stylish, modern, high-fashion, editorial, professional, highly detailed"
    },
    {
        styleName: "artstyle-hyperrealism",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Z-2P3AiNoBA1a1fxyBOXCc9RTkWyu26UgFrr8nGh23I.jpg",
        prompt: "hyper realistic art, extremely high-resolution details, photographic, realism pushed to extreme, fine texture, incredibly lifelike"
    },
    {
        styleName: "artstyle-impressionist",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/XIqxMCnKJM9EvXzgJBFKsXHJnXs-zGbzblFr65lLFoo.jpg",
        prompt: "impressionist painting, loose brushwork, vibrant color, light and shadow play, captures feeling over form"
    },
    {
        styleName: "artstyle-pointillism",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/a4ODFvq9puNoUf3ty79NQKXQ9wXBhOtpGKKjLwIV_C8.jpg",
        prompt: "pointillism style, composed entirely of small, distinct dots of color, vibrant, highly detailed"
    },
    {
        styleName: "artstyle-pop art",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/95KcYqC0grIAJrTmFBKAfyddWiSLVNvrbHHBIolJowc.jpg",
        prompt: "Pop Art style, bright colors, bold outlines, popular culture themes, ironic or kitsch"
    },
    {
        styleName: "artstyle-psychedelic",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/0fUQvoexT5KSIoBXXVIj-pumSaE_5Xg4fDjKGpr9alA.jpg",
        prompt: "psychedelic style, vibrant colors, swirling patterns, abstract forms, surreal, trippy"
    },
    {
        styleName: "artstyle-renaissance",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/iPUpcZlewdETEaqLR7Bu7qiONrj15zAxyDt1kIZk4XY.jpg",
        prompt: "Renaissance style, realistic, perspective, light and shadow, religious or mythological themes, highly detailed"
    },
    {
        styleName: "artstyle-steampunk",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/yKJ5S4vJby0qweu4dC_zwi-oyiA31Ogxys_B8Be-FfI.jpg",
        prompt: "steampunk style, antique, mechanical, brass and copper tones, gears, intricate, detailed"
    },
    {
        styleName: "artstyle-surrealist",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/rNO38cadMMHc-iFb913jrG7gCGXSEH6stsCJGDokUbg.jpg",
        prompt: "surrealist art, dreamlike, mysterious, provocative, symbolic, intricate, detailed"
    },
    {
        styleName: "artstyle-typography",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/MguhGHS7y2KwJibJP3DAGpYxQ7h5BOPu1h7XZGAefbg.jpg",
        prompt: "typographic art, stylized, intricate, detailed, artistic, text-based"
    },
    {
        styleName: "artstyle-watercolor",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/QgMRYvTbvP1PR27m87a6-N-XA9D1FhZGVWOrR7uA5U8.jpg",
        prompt: "watercolor painting, vibrant, beautiful, painterly, detailed, textural, artistic"
    },
    {
        styleName: "futuristic-biomechanical",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/TcSl8Z5cUCoq6upSJdmExCE5q7s90BxyUai-yLoX464.jpg",
        prompt: "biomechanical style, blend of organic and mechanical elements, futuristic, cybernetic, detailed, intricate"
    },
    {
        styleName: "futuristic-biomechanical cyberpunk",
        imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/TaykA0Od1WDkaXz_mI98A3vdM84UinrBZOz9uMqfx2s.jpg",
        prompt: "biomechanical cyberpunk, cybernetics, human-machine fusion, dystopian, organic meets artificial, dark, intricate, highly detailed"
    },
    {
        styleName: "futuristic-cybernetic",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/zMUFyf3pQrki3uHiTzzVxmf4UKhIGkFDtJq3CBpoYoA.jpg",
            prompt: "cybernetic style. futuristic, technological, cybernetic enhancements, robotics, artificial intelligence themes"
        },
        {
            styleName: "futuristic-cybernetic robot",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/OYUS6skSdLJQhKZiyjGotZKtDYPO7-hI4WzQ7ycyDDM.jpg",
            prompt: "cybernetic robot. android, AI, machine, metal, wires, tech, futuristic, highly detailed"
        },
        {
            styleName: "futuristic-cyberpunk cityscape",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ordyT87bqw3lkEIEIa30TljHRdEskbVaYTxNoFFotl0.jpg",
            prompt: "cyberpunk cityscape. neon lights, dark alleys, skyscrapers, futuristic, vibrant colors, high contrast, highly detailed"
        },
        {
            styleName: "futuristic-futuristic",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/gprnDXuxgFCYHli297XJ-4hEVipnpCfIWzsgfxCU3Ic.jpg",
            prompt: "futuristic style. sleek, modern, ultramodern, high tech, detailed"
        },
        {
            styleName: "futuristic-retro cyberpunk",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pLMALty3kYiOJBVz8GtwRWjDQqQvN7q8GPNXYmj6340.jpg",
            prompt: "retro cyberpunk. 80's inspired, synthwave, neon, vibrant, detailed, retro futurism"
        },
        {
            styleName: "futuristic-retro futurism",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/vw8wpW1ajRwhZUZH_QyPxJBQtfFnDnkZMfFOWGHj-DQ.jpg",
            prompt: "retro-futuristic. vintage sci-fi, 50s and 60s style, atomic age, vibrant, highly detailed"
        },
        {
            styleName: "futuristic-sci-fi",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/BgHmRbOypnQaPY73wnVVzjkwHkignCyQIZp1R4x0mRg.jpg",
            prompt: "sci-fi style. futuristic, technological, alien worlds, space themes, advanced civilizations"
        },
        {
            styleName: "futuristic-vaporwave",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/eay_Zs5MjeK1ACh7KizxcHuZPLfgHMol5qSvix3Pvrw.jpg",
            prompt: "vaporwave style. retro aesthetic, cyberpunk, vibrant, neon colors, vintage 80s and 90s style, highly detailed"
        },
        {
            styleName: "game-bubble bobble",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/c-rRJ7CEvWMwQxiVj7Gxp3CWOXM_VENQcuQfXOIhbTE.jpg",
            prompt: "Bubble Bobble style. 8-bit, cute, pixelated, fantasy, vibrant, reminiscent of Bubble Bobble game"
        },
        {
            styleName: "game-cyberpunk game",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/kVdw0_oG6CyHNGPi_H5JdUK5_Wam22ppqmMGDw1F7w0.jpg",
            prompt: "cyberpunk game style. neon, dystopian, futuristic, digital, vibrant, detailed, high contrast, reminiscent of cyberpunk genre video games"
        },
        {
            styleName: "game-fighting game",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/YZVU8MURCLLbgwI158XraAlCiE7Q7cFycNAiaNw0O_Q.jpg",
            prompt: "fighting game style. dynamic, vibrant, action-packed, detailed character design, reminiscent of fighting video games"
        },
        {
            styleName: "game-gta",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/szgeVQqzjEpOWqX8xIw_U5Fj5E0wjxmYAY2LB0Q-o68.jpg",
            prompt: "GTA-style artwork. satirical, exaggerated, pop art style, vibrant colors, iconic characters, action-packed"
        },
        {
            styleName: "game-mario",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/j6jt470BdpVRfJp0ZIVqOxqs_NeETkHaBy8h9KRy6Wk.jpg",
            prompt: "Super Mario style. vibrant, cute, cartoon, fantasy, playful, reminiscent of Super Mario series"
        },
        {
            styleName: "game-minecraft",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/L8Gqhqc8mchYOJ831CpM9B8rYh8PK8SWzFvrOQx7p0I.jpg",
            prompt: "Minecraft style. blocky, pixelated, vibrant colors, recognizable characters and objects, game assets"
        },
        {
            styleName: "game-minecraft",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/yO0Lj4bMcUwoMu42gobaWpYkCGbcXLubT6gCNhnVI3A.jpg",
            prompt: "Minecraft style. blocky, pixelated, vibrant colors, recognizable characters and objects, game assets"
        },
        {
            styleName: "game-pokemon",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Yx_CdHPWI81EGsQZU2eCHNoYiuHBtfejB7MUuhBdmmQ.jpg",
            prompt: "Pokemon style. vibrant, cute, anime, fantasy, reminiscent of Pokemon series"
        },
        {
            styleName: "game-retro arcade",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/kTBoSqObOCwscJ5SYIx_FngscyVvz9E0eRrED3i2rf8.jpg",
            prompt: "retro arcade style. 8-bit, pixelated, vibrant, classic video game, old school gaming, reminiscent of 80s and 90s arcade games"
        },
        {
            styleName: "game-retro game",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/12n6yXQEWAW7u78ZVnf5UMR3gHT-14dy5zvhAOkzl7M.jpg",
            prompt: "retro game art. 16-bit, vibrant colors, pixelated, nostalgic, charming, fun"
        },
        {
            styleName: "game-rpg fantasy game",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/TqbB29ytKmSUgBcCoZK5QoV0jP2EvjRU_fwFxmKZiVA.jpg",
            prompt: "role-playing game (RPG) style fantasy. detailed, vibrant, immersive, reminiscent of high fantasy RPG games"
        },
        {
            styleName: "game-strategy game",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ad8MIK7KEQ42JfUjOxElNgYvJmmFGtU4xjExhxPOZeE.jpg",
            prompt: "strategy game style. overhead view, detailed map, units, reminiscent of real-time strategy video games"
        },
        {
            styleName: "game-streetfighter",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ylp_y9XXfDBNItvibBeaH3M2X8XOBNepUr262ijmAbg.jpg",
            prompt: "Street Fighter style. vibrant, dynamic, arcade, 2D fighting game, highly detailed, reminiscent of Street Fighter series"
        },
        {
            styleName: "game-zelda",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/CJaPp1ZajYJNaV0y65FsAuWwghsfqK4y8e_pOgV1okM.jpg",
            prompt: "Legend of Zelda style. vibrant, fantasy, detailed, epic, heroic, reminiscent of The Legend of Zelda series"
        },
        {
            styleName: "misc-architectural",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/SajOBeRa7Cm84LFU9UUnMmn8ijn18yAmXZvPhNGc2xM.jpg",
            prompt: "architectural style. clean lines, geometric shapes, minimalist, modern, architectural drawing, highly detailed"
        },
        {
            styleName: "misc-disco",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/mY_bun9D26pfIw5Zx8xmxQDgZgqgrTzbK2XUL7L0FjQ.jpg",
            prompt: "disco-themed. vibrant, groovy, retro 70s style, shiny disco balls, neon lights, dance floor, highly detailed"
        },
        {
            styleName: "misc-dreamscape",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pmY-UwWna8SJPEXMaXnFvc1RKmnZimLXygJjrudm_PM.jpg",
            prompt: "dreamscape. surreal, ethereal, dreamy, mysterious, fantasy, highly detailed"
        },
        {
            styleName: "misc-dystopian",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/56TTKKA495AVbLSJ4K9LleyTN2RHeEkhVUe-Da1ASk0.jpg",
            prompt: "dystopian style. bleak, post-apocalyptic, somber, dramatic, highly detailed"
        },
        {
            styleName: "misc-fairy tale",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Ku7PcLcu3RsgAhJJfZeDEQ4ENQeCHM-Z_C2oUUWAwtw.jpg",
            prompt: "fairy tale. magical, fantastical, enchanting, storybook style, highly detailed"
        },
        {
            styleName: "misc-gothic",
            imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/O2G3hChxvfpTDLyV8-Pdnz4pZThBRIt1gXc7fATswGo.jpg",
            prompt: "gothic style. dark, mysterious, haunting, dramatic, ornate, detailed"
        },
        {
    styleName: "misc-grunge",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/v88ezqOZ5gYpWRItyzy78vUvKvA7lJQhyPlEe0-cmiY.jpg",
    prompt: "grunge style. textured, distressed, vintage, edgy, punk rock vibe, dirty, noisy"
},
{
    styleName: "misc-horror",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/7-ULVaitFXdkUNVXblPiL5qrdfAdgojHAMM4Hr_LkaE.jpg",
    prompt: "horror-themed. eerie, unsettling, dark, spooky, suspenseful, grim, highly detailed"
},
{
    styleName: "misc-kawaii",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LZLJpu9SOFUFB0mgLjXQeEeuVbkTdpKU2YyM6e7t7rI.jpg",
    prompt: "kawaii style. cute, adorable, brightly colored, cheerful, anime influence, highly detailed"
},
{
    styleName: "misc-lovecraftian",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/dPZufSfLEeGuQ1XrmrqJ1BBkqszCHAqE7Q9iT6vOo-0.jpg",
    prompt: "lovecraftian horror. eldritch, cosmic horror, unknown, mysterious, surreal, highly detailed"
},
{
    styleName: "misc-macabre",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/EsljKVmKQQ-q1EizsExtEjalyawjGQIbW8ncJf9JYIg.jpg",
    prompt: "macabre style. dark, gothic, grim, haunting, highly detailed"
},
{
    styleName: "misc-manga",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3ifqEpb7U0vNvTcRHAgNBa3n5s3Irzd_0T6MFo3mn4U.jpg",
    prompt: "manga style. vibrant, high-energy, detailed, iconic, Japanese comic style"
},
{
    styleName: "misc-metropolis",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/dxzDgv2MEeG-E7Km89ngG3BmoPWjSRu5kF8NCR_SeKs.jpg",
    prompt: "metropolis-themed. urban, cityscape, skyscrapers, modern, futuristic, highly detailed"
},
{
    styleName: "misc-minimalist",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/2MH5WS9wecYzKTF-8H5yfI7--DHblHeFsFxBjs-TKts.jpg",
    prompt: "minimalist style. simple, clean, uncluttered, modern, elegant"
},
{
    styleName: "misc-monochrome",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/75E6granvpz5iDsqeIQ08z9m3UiiuelqhUE47AHO8H8.jpg",
    prompt: "monochrome. black and white, contrast, tone, texture, detailed"
},
{
    styleName: "misc-nautical",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pTFNP0I4oq1KfEUEEY9TXXLrn2vSbKwXZEVCBWQFmBg.jpg",
    prompt: "nautical-themed. sea, ocean, ships, maritime, beach, marine life, highly detailed"
},
{
    styleName: "misc-space",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/RiKQUhdgZtiVyZMhQKLkhMfpv3a6mZ2IpPrEKCAzWaU.jpg",
    prompt: "space-themed. cosmic, celestial, stars, galaxies, nebulas, planets, science fiction, highly detailed"
},
{
    styleName: "misc-stained glass",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/iEZwxRzkuZF5K1ruoLTQYpRYjmt0EEaGgm8RgeNU9Mw.jpg",
    prompt: "stained glass style. vibrant, beautiful, translucent, intricate, detailed"
},
{
    styleName: "misc-techwear fashion",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/8OUtQXDtgC21PIq_FuZUcjW7aT0mT0ETz46HhI0rmuE.jpg",
    prompt: "techwear fashion. futuristic, cyberpunk, urban, tactical, sleek, dark, highly detailed"
},
{
    styleName: "misc-tribal",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/BVYvhkGOZTk41MbrD6qX7UIIGwTNLYSXXeP2Njn7L0k.jpg",
    prompt: "tribal style. indigenous, ethnic, traditional patterns, bold, natural colors, highly detailed"
},
{
    styleName: "misc-zentangle",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/UC4TpEeIaa532mpygsodttGj7EpqPnbiATxrVotnCGE.jpg",
    prompt: "zentangle. intricate, abstract, monochrome, patterns, meditative, highly detailed"
},
{
    styleName: "papercraft-collage",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/1j-2pMTSPAz8Bmrp_0TujPWEy5QRE9di4VkmODDAkAI.jpg",
    prompt: "collage style. mixed media, layered, textural, detailed, artistic"
},
{
    styleName: "papercraft-flat papercut",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Ms5afk47rH9l2hoheLg7BIMm3PVVvJVMteZywlBC7bE.jpg",
    prompt: "flat papercut style. silhouette, clean cuts, paper, sharp edges, minimalist, color block"
},
{
    styleName: "papercraft-kirigami",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/oqfan7tXMJdCmTdrl57O4ovaFQBegVi4DBOBTwCT7GI.jpg",
    prompt: "kirigami representation of. 3D, paper folding, paper cutting, Japanese, intricate, symmetrical, precision, clean lines"
},
{
    styleName: "papercraft-paper mache",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KS34r_4nOJJSvpt7roB6PXTaYC356ZSCFMgnaskfpaw.jpg",
    prompt: "paper mache representation of. 3D, sculptural, textured, handmade, vibrant, fun"
},
{
    styleName: "papercraft-paper quilling",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/th06TanqD1Wt08Ke8ShxC2FPdFqb196CDpynrUzxftA.jpg",
    prompt: "paper quilling art of. intricate, delicate, curling, rolling, shaping, coiling, loops, 3D, dimensional, ornamental"
},
{
    styleName: "papercraft-papercut collage",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Xwjcb7CdIkKBPtIckuyBOnIRyt2LWJRHo4o5XH3UO08.jpg",
    prompt: "papercut collage of. mixed media, textured paper, overlapping, asymmetrical, abstract, vibrant"
},
{
    styleName: "papercraft-papercut shadow box",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/hCByFMbG9W9692q8gLUAJTx5ibFZmBBclKw7wqXEF2g.jpg",
    prompt: "3D papercut shadow box of. layered, dimensional, depth, silhouette, shadow, papercut, handmade, high contrast"
},
{
    styleName: "papercraft-stacked papercut",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/nOuccJDQlvW7P0CxqM644Gzbvx-P9ftLRj-nnlxPiZw.jpg",
    prompt: "stacked papercut art of. 3D, layered, dimensional, depth, precision cut, stacked layers, papercut, high contrast"
},
{
    styleName: "papercraft-thick layered papercut",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Hayfy4l3ifS8U9eUi1GoR4mY5yGYsK_1exMh8pl-ypA.jpg",
    prompt: "thick layered papercut art of. deep 3D, volumetric, dimensional, depth, thick paper, high stack, heavy texture, tangible layers"
},
{
    styleName: "photo-alien",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/D2Ew1iYQFX_4Nx-M3DTQBZhjtv423zkG5SAUnqlpnaA.jpg",
    prompt: "alien-themed. extraterrestrial, cosmic, otherworldly, mysterious, sci-fi, highly detailed"
},
{
    styleName: "photo-film noir",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/TBEbTpeLXh9Q-e-wQVAMb3-xihnFFn0WMZS2WcwcLS4.jpg",
    prompt: "film noir style. monochrome, high contrast, dramatic shadows, 1940s style, mysterious, cinematic"
},
{
    styleName: "photo-hdr",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/9nubNdd0a9xnk36TnY3J_rlDsbMO3528cpayT48YRCU.jpg",
    prompt: "HDR photo of. high dynamic range, vivid, rich details, clear shadows and highlights, realistic, intense, enhanced contrast, highly detailed"
},
{
    styleName: "photo-long exposure",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/fUKv0OX8WE_nUz92rBmpQA1MYMBgpmEaC07YfCAwlcU.jpg",
    prompt: "long exposure photo of. blurred motion, streaks of light, surreal, dreamy, ghosting effect, highly detailed"
},
{
    styleName: "photo-neon noir",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/-ig6zt0zwrm2h8RCIxEGZT1G6rBjPmMJONBM38ohKVA.jpg",
    prompt: "neon noir cyberpunk, dark, rainy streets, neon signs, high contrast, low light, vibrant, highly detailed"
},
{
    styleName: "photo-silhouette",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/zWDLlvLysMxOpidkTVAWvnffWqtSdF7Vd-_sG-9NJaM.jpg",
    prompt: "silhouette style high contrast, minimalistic, black and white, stark, dramatic"
},
{
    styleName: "photo-tilt-shift",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pxtUZIgJFt8LfdmrPL-RVOGz1LQo9HCfEAW7pSglU1E.jpg",
    prompt: "tilt-shift photo of selective focus, miniature effect, blurred background, highly detailed, vibrant, perspective control"
},
{
    styleName: "cinematic-diva",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/bHMjm6xjHo94JEi0myRQ9StGR2k7zgUbyT6PpGsP5HI.jpg",
    prompt: "UHD, 8K, ultra detailed, a cinematic photograph of beautiful lighting, great composition"
},
{
    styleName: "Abstract Expressionism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3C4T-CnFo1XlMlkFwmDXyKK_jBeyh8-CX8s8bzzMMF0.jpg",
    prompt: "Abstract Expressionism Art, high contrast, minimalistic, colorful, stark, dramatic, expressionism"
},
{
    styleName: "Academia",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/sUuspuqyqnHdW7i-Uz2w4NOO8v4Q0W1lJADpivl2I3o.jpg",
    prompt: "Academia, preppy Ivy League style, stark, dramatic, chic boarding school, academia"
},
{
    styleName: "Action Figure",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/xVHY_6sLIPCxOoISpciwTflMP4HzUoBs_PBNLBq3BdU.jpg",
    prompt: "Action Figure, plastic collectable action figure, collectable toy action figure"
},
{
    styleName: "Adorable 3D Character",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/9ZNYr1zOro2Dq67_qDTk31y_qYLKsEqFPZr4QbR7TIM.jpg",
    prompt: "Adorable 3D Character, 3D render, adorable character, 3D art"
},
{
    styleName: "Adorable Kawaii",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/4vuxCRsKay-Lk7lQ6jms1fW-BhfbFhsGMDE7CukVzds.jpg",
    prompt: "Adorable Kawaii, pretty, cute, adorable, kawaii"
},
{
    styleName: "Art Deco",
    imageSrc: "https://storage.googleapis.com/a1aa/image/vP14DFutQI85JkqJutlEivCap7ZBIvSKOB3-dW5zECE.jpg",
    prompt: "Art Deco, sleek, geometric forms, art deco style"
},
{
    styleName: "Art Nouveau",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/XcIDnXjIuCIaGN46HWAFrLhdvtoO0ph-M0fGyNWzM-Y.jpg",
    prompt: "Art Nouveau, beautiful art, sleek, organic forms, long, sinuous, art nouveau style"
},
{
    styleName: "Astral Aura",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/drLLyLwj19Pql1HZFpIYIpf9O8W1Uzey_m2aa9dC-y4.jpg",
    prompt: "Astral Aura, astral, colorful aura, vibrant energy"
},
{
    styleName: "Avant-garde",
    imageSrc: "https://storage.googleapis.com/a1aa/image/v4FkRX3TGSBzntjnR4Mut1NXYpB4UbKQMKSomtlnxaM.jpg",
    prompt: "Avant-garde, unusual, experimental, avant-garde art"
},
{
    styleName: "Baroque",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/o9M2lqxIoT1snYWSh7L9DAZpyNgYdKNuAIurRpZTF40.jpg",
    prompt: "Baroque, dramatic, exuberant, grandeur, baroque art"
},
{
    styleName: "Bauhaus-Style Poster",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/t5T2TLix5sr_u4NaiYe4nZY7ESQrDhb8HEN8WatK1xk.jpg",
    prompt: "Bauhaus-Style Poster, simple geometric shapes, clean lines, primary colors"
},
{
    styleName: "Blueprint Schematic Drawing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/EoTk4W5gKGqq73RzCr9eyenlH044epmIMRZMFnKRoCE.jpg",
    prompt: "Blueprint Schematic Drawing, technical drawing, blueprint, schematic"
},
{
    styleName: "Caricature",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/rW3mlvoKKp4wawZ-M9j-B1zNwtO7pkExUwd1NpOQjTs.jpg",
    prompt: "Caricature, exaggerated, comical, caricature"
},
{
    styleName: "Cel Shaded Art",
    imageSrc: "https://storage.googleapis.com/a1aa/image/UWviNCtwtGcuduocENFBx6ED07zlXiJoLpMkMvyY9aY.jpg",
    prompt: "Cel Shaded Art, 2D, flat color, toon shading, cel shaded style"
},
{
    styleName: "Character Design Sheet",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/HpaLFh3zqmFo_hEfgXi3e8asRoPb5esTgXpJIKBCIX0.jpg",
    prompt: "Character Design Sheet, character reference sheet, character turn around"
},
{
    styleName: "Classicism Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3IY0RNaXDup9yhcKfL3ntO2FIAKBaXKz6N_eZb982PA.jpg",
    prompt: "Classicism Art, inspired by Roman and Greek culture, clarity, harmonious, classicism art"
},
{
    styleName: "Color Field Painting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/eXk19pjxsGhk7U6syxQqd3vvQDpUjrZcs0BVIl9oOyQ.jpg",
    prompt: "Color Field Painting, abstract, simple, geometric, color field painting style"
},
{
    styleName: "Colored Pencil Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ia2zijEW1HIaKoMOWmNOmgiVdeNcktUhV42edFROZes.jpg",
    prompt: "Colored Pencil Art, colored pencil strokes, light color, visible paper texture, colored pencil art, and art supplies resting above the paper."
},
{
    styleName: "Conceptual Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/sqIA1Oq795CaRbmCjss8HpZU9D02NBQETIQqqxU5Kgc.jpg",
    prompt: "Conceptual Art, concept art"
},
{
    styleName: "Constructivism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/58j3txNz6zBaWmIbFch3zSuoMfgYKe5cEqkHcoeFH4o.jpg",
    prompt: "Constructivism Art, minimalistic, geometric forms, constructivism art"
},
{
    styleName: "Cubism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/WnfB7hocaVJqOZIyLSYUyqsUKiQG9m-T1OSh1ZlURtM.jpg",
    prompt: "Cubism Art, flat geometric forms, cubism art"
},
{
    styleName: "Dadaism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/DvAWb_N5pW4WEgjIpfy2AZADJscLdFz6j2eKOpXgxIA.jpg",
    prompt: "Dadaism Art, satirical, nonsensical, dadaism art"
},
{
    styleName: "Dark Fantasy",
    imageSrc: "https://storage.googleapis.com/a1aa/image/VrJKLMzK3xgCj8Jwpwv7bdUTdlVH49yoOq9SgwwW5c0.jpg",
    prompt: "Dark Fantasy Art, dark, moody, dark fantasy style"
},
{
    styleName: "Dark Moody Atmosphere",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Ev8x97Zi1oPrA9YiF6e1ji0JZH1RIhOSuQT0FK8WfGk.jpg",
    prompt: "Dark Moody Atmosphere, dramatic, mysterious, dark moody atmosphere"
},
{
    styleName: "DMT Art Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/m6x0X3K_CFox12WZK6JIavq9PNdK-zDxf9pSJfNhmfY.jpg",
    prompt: "DMT Art Style, bright colors, surreal visuals, swirling patterns, DMT art style"
},
{
    styleName: "Doodle Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/p7SYNwT0RoE3ahbqn8EsjclYcDTywBKB7Q2ZlcWbzOU.jpg",
    prompt: "Doodle Art Style, drawing, freeform, swirling patterns, doodle art style"
},
{
    styleName: "Double Exposure",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/IPWHowoUGp9sbFBrtoI37SCxbmcGfJmMhthcu4nRMqA.jpg",
    prompt: "Double Exposure Style, double image ghost effect, image combination, double exposure style"
},
{
    styleName: "Dripping Paint Splatter Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/BkScRkENBN4vO1oTBYJTN-5KBcLANHYzhLv2JhFFmWs.jpg",
    prompt: "Dripping Paint Splatter Art, dramatic, paint drips, splatters, dripping paint"
},
{
    styleName: "Expressionism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/T2qrrRbwUegXTsDcEeFpsgoJygxTq5LEiUKJSTnf8U8.jpg",
    prompt: "Expressionism Art Style, movement, contrast, emotional, exaggerated forms, expressionism art style"
},
{
    styleName: "Faded Polaroid Photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/So1MXE5ZzEXbu0QvRqQG_z7KkgzTDT9dKb1kcQTcTKA.jpg",
    prompt: "Faded Polaroid Photo, analog, old, faded photo, old polaroid"
},
{
    styleName: "Fauvism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/DkmAKhWrruTVkixLUB1Bj41UAmdMmxveQXcLYN0RzkE.jpg",
    prompt: "Fauvism Art, painterly, bold colors, textured brushwork, fauvism art"
},
{
    styleName: "Flat 2D Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/OTCCuAkTYYRCOnzKm-HBgtA0zhEiXFs_mF62bZ0Ro3E.jpg",
    prompt: "Flat 2D Art, simple flat color, 2-dimensional, Flat 2D Art Style"
},
{
    styleName: "Fortnite Art Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Z0LW_0pXNnpzx_SQlQV26Ror3-vCJvxjHxzID97cnzE.jpg",
    prompt: "Fortnite Art Style, 3D cartoon, colorful, Fortnite Art Style"
},
{
    styleName: "Futurism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Gjkg6vYkYXHznagygC_noBW16e8zGsYYmWr3keGnc5s.jpg",
    prompt: "Futurism Art Style, dynamic, dramatic, Futurism Art Style"
},
{
    styleName: "Glitchcore",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/DtKvS0ZLcxBakd10SlDB4LLAmsLO2B-SSa5TWkzW39M.jpg",
    prompt: "Glitchcore Art Style, dynamic, dramatic, distorted, vibrant colors, glitchcore art style"
},
{
    styleName: "Glo-fi",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/m75f5pWeOlZtOEYJGY7gHqdfTx3NAPQAHtoPz9ZCH-I.jpg",
    prompt: "Glo-fi Art Style, dynamic, dramatic, vibrant colors, glo-fi art style"
},
{
    styleName: "Googie Art Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/FfetjHhSR-sdk6dmRtFH0j8r0OlTyfYg4EvQzEyD1kI.jpg",
    prompt: "Googie Art Style, dynamic, dramatic, 1950's futurism, bold boomerang angles, Googie art style"
},
{
    styleName: "Graffiti Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Q5Wi5SX8I0dbrYgLVBORkjaMNSHOH7cyDqHJJ8qcC-Y.jpg",
    prompt: "Graffiti Art Style, dynamic, dramatic, vibrant colors, graffiti art style"
},
{
    styleName: "Harlem Renaissance Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/g7KZ0iWHMOw5AoGqqMD-Vk8Nw1hDM1c_BiOcxfVgGTY.jpg",
    prompt: "Harlem Renaissance Art Style, dynamic, dramatic, 1920s African American culture, Harlem Renaissance art style"
},
{
    styleName: "High Fashion",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/s1Pc8l9phxOfAX3GJTwfGjP-Fwk9a1HeZ5-zALkhZHY.jpg",
    prompt: "High Fashion, dynamic, dramatic, haute couture, elegant, ornate clothing, High Fashion"
},
{
    styleName: "Idyllic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Lj1B0npdho2QytLY-44Ql43NJWa4PxUuvQZf3CWkztI.jpg",
    prompt: "Idyllic, peaceful, happy, pleasant, happy, harmonious, picturesque, charming"
},
{
    styleName: "Impressionism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/x14-Up8o7c00YiLFJIxa_shoQ__MUfkHHe8nTYrLL4o.jpg",
    prompt: "Impressionism, painterly, small brushstrokes, visible brushstrokes, impressionistic style"
},
{
    styleName: "Infographic Drawing",
    imageSrc: "https://storage.googleapis.com/a1aa/image/UwdiIzE2SiavGKBfE3cLZJKQeFgS2c_r0dRmkN7C4Uo.jpg",
    prompt: "Infographic Drawing, diagram, infographic"
},
{
    styleName: "Ink Dripping Drawing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/J7s0kgdtdMJredSgSSJ-sTlV41CI2PlqyXOWX_gvYKQ.jpg",
    prompt: "Ink Dripping Drawing, ink drawing, dripping ink"
},
{
    styleName: "Japanese Ink Drawing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/hl67CKllkCxPKyvcVKKyjaMQVmmmYjKhxjEvheHBWMw.jpg",
    prompt: "Japanese Ink Drawing, ink drawing, inkwash, Japanese Ink Drawing"
},
{
    styleName: "Knolling Photography",
    imageSrc: "https://storage.googleapis.com/a1aa/image/WarkT848Njv4PEfNvIxHli6U10s9G-2KKxs2MQp-1C4.jpg",
    prompt: "Knolling Photography, flat lay photography, object arrangement, knolling photography"
},
{
    styleName: "Light Cheery Atmosphere",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/N0jz5_7udvkUKkFttajLZ_dZ5pA_Ob5XO_dEVCjqf_s.jpg",
    prompt: "Light Cheery Atmosphere, happy, joyful, cheerful, carefree, gleeful, lighthearted, pleasant atmosphere"
},
{
    styleName: "crayon drawing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/fzJm-D_Q91aqFkt6fgfv2CBBowUz6Zkzu3_FDmLr4yM.jpg",
    prompt: "crayon drawing-style, drawn in a vibrant crayon style, visible crayon strokes for a textured look."
},
{
    styleName: "Logo Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LQJEddXgiK4wRnSiGIYjLEnS707xhk-ml_7YhEnme7U.jpg",
    prompt: "Logo Design, dynamic graphic art, vector art, minimalist, professional logo design"
},
{
    styleName: "Luxurious Elegance",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/NF41rCdHLRw0jESsLSaiqYSYZV-b8C27bFCHWeZ4PRQ.jpg",
    prompt: "Luxurious Elegance, extravagant, ornate, designer, opulent, picturesque, lavish"
},
{
    styleName: "Macro Photography",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Z04zex0PZc3cMOXh3vqMf9gHEiGTWMfDfztNrEwSN3E.jpg",
    prompt: "Macro Photography, close-up, macro 100mm, macro photography"
},
{
    styleName: "Mandola Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pcGypK9gT7ZLo-2hE4X4f-OWu9bfcGQMyQK8yhDVzYE.jpg",
    prompt: "Mandola art style, complex, circular design, mandola"
},
{
    styleName: "Marker Drawing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/m9lBAa4nO4D8MQTQPQQoM58fFtJAM_vz4TAgRNT_s_8.jpg",
    prompt: "Marker Drawing, bold marker lines, visible paper texture, marker drawing"
},
{
    styleName: "Medievalism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/n3cwK0xNTzCMm9ZXluZHxTPrJMRs1DftB163n7Sry2Q.jpg",
    prompt: "Medievalism, inspired by The Middle Ages, medieval art, elaborate patterns and decoration, Medievalism"
},
{
    styleName: "Minimalism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/egW92Jggp9sh1o2KDtr6Gh0XlxzAn-k0iXf3XSTHd2M.jpg",
    prompt: "Minimalism, abstract, simple geometric shapes, hard edges, sleek contours, Minimalism"
},
{
    styleName: "Neo-Baroque",
    imageSrc: "https://storage.googleapis.com/a1aa/image/wEmyhJ5mxh0BSfJDOPvRLmcCI0skXAFP-K2HPt9cdI8.jpg",
    prompt: "Neo-Baroque, ornate and elaborate, dynamic, Neo-Baroque"
},
{
    styleName: "Neo-Byzantine",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/I1W07O8H0hXkm4yn0t9XM1oEGrwRV81ojH3kNSd7mNk.jpg",
    prompt: "Neo-Byzantine, grand decorative religious style, Orthodox Christian inspired, Neo-Byzantine"
},
{
    styleName: "Neo-Futurism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/2sLCw3OVWlSC_xNXCNyvk6u57UOcsMV6oUlFj3JsylY.jpg",
    prompt: "Neo-Futurism, high-tech, curves, spirals, flowing lines, idealistic future, Neo-Futurism"
},
{
    styleName: "Neo-Impressionism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ou0666hnzcrtNVSINjZfBu2eEYWz1kDfRxKz9RclmK8.jpg",
    prompt: "Neo-Impressionism, tiny dabs of color, Pointillism, painterly, Neo-Impressionism"
},
{
    styleName: "Neo-Rococo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Cnj2Spgfqs8BAIXmD1yqj1H2I3sf1LGkKj7yShKp778.jpg",
    prompt: "Neo-Rococo, curved forms, naturalistic ornamentation, elaborate, decorative, gaudy, Neo-Rococo"
},
{
    styleName: "Neoclassicism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pqhzh6mBTh9rSAsDXhv5Bb-ZnyFcPmTrCPnW0x9_VXw.jpg",
    prompt: "Neoclassicism, ancient Rome and Greece inspired, idealic, sober colors, Neoclassicism"
},
{
    styleName: "Op Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Ykzyh3hiitInqHozOi6_fKyM-b-EH9hMoWfyKpQmZXQ.jpg",
    prompt: "Op Art, optical illusion, abstract, geometric pattern, impression of movement, Op Art"
},
{
    styleName: "Ornate and Intricate",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/nR6a5SF4kokYeBh6-x3xCgqQoQSSZIVgtl_Xfzgwqio.jpg",
    prompt: "Ornate and Intricate, decorative, highly detailed, elaborate, ornate, intricate"
},
{
    styleName: "Pencil Sketch Drawing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/e0vtQe-UBRKDgatGXKYuMc1NRT6dTMEpAdKBkjry8-s.jpg",
    prompt: "Pencil Sketch Drawing, black and white drawing, graphite drawing, and art supplies resting above the paper. Signature"
},
{
    styleName: "Pop Art 2",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/kZ77MzrR3hpSKW4DYoKMBxT_iCy4kYdaw097hjbppV4.jpg",
    prompt: "Pop Art, vivid colors, flat color, 2D, strong lines, Pop Art"
},
{
    styleName: "Rococo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/im0YLEoD67ZNiGNUFtrSi8KhhPX6iGciKk95ajf2ySI.jpg",
    prompt: "Rococo, flamboyant, pastel colors, curved lines, elaborate detail, Rococo"
},
{
    styleName: "Silhouette Art",
    imageSrc: "https://storage.googleapis.com/a1aa/image/wKeKGmLYtQz7_M0MHHtlZSwrmE9Uomf_AUrJvjXEego.jpg",
    prompt: "Silhouette Art, high contrast, well defined, Silhouette Art"
},
{
    styleName: "Simple Vector Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/SYY274fw1MG9ahQxUFDeoL25NqCX5bmleGJOe6WZJdY.jpg",
    prompt: "Simple Vector Art, 2D flat, simple shapes, minimalistic, professional graphic, flat color, high contrast, Simple Vector Art"
},
{
    styleName: "Sketchup",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/1uEa9Mu5gsBmi9zkXYEWA5cv7MF0Bn6YmDDnTWia2Y8.jpg",
    prompt: "Sketchup, CAD, professional design, Sketchup"
},
{
    styleName: "Steampunk 2",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/eyZ3EFJeOiNUydcHgOZC5Eq4rYc171moZAYZ8V4V79c.jpg",
    prompt: "Steampunk, retrofuturistic science fantasy, steam-powered tech, vintage industry, gears, neo-victorian, steampunk"
},
{
    styleName: "Surrealism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Ed9h_2R7EIkeaCeZP8dz8maJUaz5d8azobfpyU9fSzo.jpg",
    prompt: "Surrealism, expressive, dramatic, organic lines and forms, dreamlike and mysterious, Surrealism"
},
{
    styleName: "Suprematism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/N-XuoRqALvbuzHcdKK_xXcmJ1PmmEKDmdIl-VCeiSME.jpg",
    prompt: "Suprematism, abstract, limited color palette, geometric forms, Suprematism"
},
{
    styleName: "Terragen",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/0SneOILOFQa8YWNyhL4bZeyKYCZt3h6os2xBr80mnHA.jpg",
    prompt: "Terragen, beautiful massive landscape, epic scenery, Terragen"
},
{
    styleName: "Tranquil Relaxing Atmosphere",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LAKV_gF4IqGwkib1y9G5yt7UOVNxMCIp1ZM5M0D9jDg.jpg",
    prompt: "Tranquil Relaxing Atmosphere, calming style, soothing colors, peaceful, idealic, Tranquil Relaxing Atmosphere"
},
{
    styleName: "Sticker Designs",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/zN3nM9QOPyD-7mlWdOu_wRTqBCLeInIlcJ7tZNqQpYY.jpg",
    prompt: "Vector Art Stickers, professional vector design, sticker designs, Sticker Sheet"
},
{
    styleName: "Vibrant Rim Light",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/EDoZCsNam_vQOvtJ0Yl33f0mDf70VoB9WNVk8rKKFaE.jpg",
    prompt: "Vibrant Rim Light, bright rim light, high contrast, bold edge light"
},
{
    styleName: "Volumetric Lighting",
    imageSrc: "https://storage.googleapis.com/a1aa/image/WtNl07A7XrHBX-2oO4Kqc9GvG7_AFOj1OkCVsR1bP9M.jpg",
    prompt: "Volumetric Lighting, light depth, dramatic atmospheric lighting, Volumetric Lighting"
},
{
    styleName: "Watercolor 2",
    imageSrc: "https://storage.googleapis.com/a1aa/image/wEfnn2E8CpghmOC4aC_Jd_Wu3jqBWgXCajHy6Tk4xa0.jpg",
    prompt: "Watercolor style painting, visible paper texture, colorwash, watercolor"
},
{
    styleName: "Whimsical and Playful",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KkBo6PqZOWF8aTBnzdsBv2wWdXa_y20bFmQTsgWGRPg.jpg",
    prompt: "Whimsical and Playful, imaginative, fantastical, bright colors, stylized, happy, Whimsical and Playful"
},
{
    styleName: "Cardboard-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/R5QJBCQZsyadKlsrIlIaGh1zZAXQpS7NtBR-wKwaWSM.jpg",
    prompt: "cardboard {Animal}, realistic design, detailed craftsmanship, eco-friendly materials, intricate textures, paper sculpture, life-sized model, creative art, handmade, recycled materials, artistic creation"
},
{
    styleName: "oil painting-Realism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/K9DQY7wmi0Btsk7Xe3GX67aNJpMfXr0T4xz6AVjr7Nc.jpg",
    prompt: "breathtaking oil painting,{Animal}, photorealistic oil painting, by charlie bowater, fine details, by wlop, trending on artstation, texture detailed."
},
{
    styleName: "Cute figurine",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/wjo_bCdgDVYC1bFCeyCoka2Szgk3alRrKQb6wBYpiAE.jpg",
    prompt: "Cute figurine, {Animal}, figurine, modern Dizney style, octane render, chibi"
},
{
    styleName: "tattoo design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/beduj-XRLZtAhdHHZqRWqwQAUP51gHpFMc_cYCM6wEQ.jpg",
    prompt: "amazing tattoo design, {Animal}, breathtaking tattoo design, incredible tattoo design"
},
{
    styleName: "molding-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Mwjj_hip7gexkxQXjnxQePWusVSIdWFPNYnEmiRoe8E.jpg",
    prompt: "molding-style depicting intricate details, 3D depth, flowing lines, textured surfaces, layered composition, sculptural relief artistry, visually compelling, nuanced form"
},
{
    styleName: "Cute Anime Ghibli",
    imageSrc: "https://storage.googleapis.com/a1aa/image/wFzvKBInJrraFw84saU5Qx-s608SUV0TblBp6Kfcko0.jpg",
    prompt: "adorable, cute, Kawaii, {Animal}, Ghibli art style, Spirited Away art style, cute moe anime character portrait, adorable, featured on Pixi, kawai moé masterpiece, cuteness overload, very detailed, so adorable!!!, subtle nuances, wonderful"
},
{
    styleName: "Cute 3D icon",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/BgQ3F4xUf7ep40RPycAeASAo9CFL3UX-MtsI00NiInQ.jpg",
    prompt: "Cute 3D {young Asian Woman} Icon, Cartoon Style, Stylized Octane Render, 8K, Masterpiece, Adorable, Beautiful, Soft Lighting, Soft Colors, Centered, High Resolution, Gradient Background"
},
{
    styleName: "Japan Anime",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/s2Om18aa3RE6ddr78OekIGhJHKA0ZfOaaKIhzKunGUQ.jpg",
    prompt: "studio Ghibli style art:1.3{ young Asian woman}, sharp, very detailed, high resolution, inspired by Hayao Miyazaki, anime, art from Ghibli movie"
},
{
    styleName: "1980s Photo",
    imageSrc: "https://storage.googleapis.com/a1aa/image/UGGYQFGZzIa9xFVQv8_qkBnxXMqFTxA_HnjM8ZLj9jY.jpg",
    prompt: "Vintage 80s Photo, Grainy, Kodacholor II, Vignetting, Retro, Old-School, Wear and Tear, Creasing, Scratches, Vintage Colors"
},
{
    styleName: "Embroidery and Needlework",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/npTpA4Y5DA-qsMcftoUgHshMpTw2kGdskZCFP4Y-Jwg.jpg",
    prompt: "Textile crafts-style, intricate embroidery, depicting {young Asian woman}. The embroidery features a rich textured composition with a blend of satin stitches and detailed cross-stitch patterns"
},
{
    styleName: "Patchwork and Quilting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/12NxOFHLgT0grBtLjMS3eJPqzrC9vEHs2dwFdQzf3V0.jpg",
    prompt: "Textile crafts-style, patchwork, quilting techniques, depicting {a Thai girl}, geometric patterns, layered textures, pieced blocks, appliqué designs, quilted motifs, cozy structured composition"
},
{
    styleName: "Felting and Fiber Arts",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/FTs5BuoOXQfunoSqqoKQMvKanF-oA0y0Jtn9HZ4lPDM.jpg",
    prompt: "Textile crafts 3D artwork, felting and fiber arts, sculptural forms, soft textures, needle felting, wet felting, mixed fiber compositions, tactile expressive composition"
},
{
    styleName: "Knitting and Crocheting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/PwDv8pX-pXV6AjpKGIew6G8joziGZxt5ju3s6rXggXA.jpg",
    prompt: "Crocheting, depicting, Making clothing, accessories, and home decor items like scarves, hats, blankets, and more"
},
{
    styleName: "Crocheting Characters",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/1XRStbBRJ1Ul4vhKwfwZPJTHQVoLF0MUFKJ6t8q-hhA.jpg",
    prompt: "Amigurumi Crochet, Characters, Handmade, Yarn Art, Cute Toy, Detailed, Creative Design, Fiber Art, Crafting, Soft Sculpture"
},
{
    styleName: "T-Shirt Printing-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/5fj2P_K3r8n4nzVjWhuNIAvYx3ULxx-_-iYqZNiqMQU.jpg",
    prompt: "T-shirt printing style, visually compelling graphic, bold lines, vibrant colors, stylized typography, iconic symbols, modern t-shirt graphics, contemporary guidance"
},
{
    styleName: "T-Shirt Printing-Style: Vintage Retro Illustration",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pmi9A8axs5qeeSqroSwPp9A0KcDOMM6eZF-ot0PxDm8.jpg",
    prompt: "T-shirt printing style, vintage-inspired illustration, retro colors, distressed textures, nostalgic motifs, classic aesthetics, modern appeal."
},
{
    styleName: "T-Shirt Printing-Style: Abstract Artwork",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/5qYFXneOP2RzAq5Y6sjKA9Y6Jzo2IWYI48muZFqoYCE.jpg",
    prompt: "T-shirt printing style, abstract artistic approach, fluid shapes, experimental color combinations, mixed media techniques, contemporary dynamic composition."
},
{
    styleName: "T-Shirt Printing-Style: Pop Culture Iconography",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/R8FsslvkfyuroFh6I_48q1X73yrEcpPuKT19x6oPFiU.jpg",
    prompt: "T-shirt Design, Pop Culture Iconography, Iconic Symbols, Recognizable Characters, Emblematic Motifs, Thematic Appeal."
},
{
    styleName: "T-Shirt Printing-Style: Nature and Wildlife",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ylkMlgr2DTUIfL47igWG37QGoIHsntm3JucD41EBvgY.jpg",
    prompt: "T-shirt design, Nature and Wildlife Themes, Intricate Foliage, Wildlife Silhouettes, Natural Textures, Beauty of Nature."
},
{
    styleName: "Cardboard crafts: Furniture Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/qWGQptZM8g0PHFah6yF-FNA02s3f4ZIhR-R9MBehXao.jpg",
    prompt: "Cardboard Furniture Design, Functional Innovation, Structural Integrity, Ergonomic, Creative Embellishments, Sustainable Material."
},
{
    styleName: "Cardboard crafts: Costume or Prop",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/s5LpOMX92_v5egGz6diJ6tQKnR09v96NellIrSuC-tE.jpg",
    prompt: " -Inspiration, Cardboard Costume/Prop, Lightweight Durability, Intricate Detailing, Movable Parts, Thematic Embellishments, Imaginative Cosplay."
},
{
    styleName: "Cardboard crafts: Model Making",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/9fdsJSo9IezL3da18D0xe-Ibdk663pc2vRyxcSMifKM.jpg",
    prompt: "Detailed Cardboard Model, Precise Measurements, Intricate Assembly, Scaled-Down Proportions, Realistic Textures, Functional Components, Craftsmanship, Engineering Possibilities, {Coffee shop}"
},
{
    styleName: "Realistic Sticker Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/SEezDawAcsa7LXo-qrWRjwXadHSOf0PTmoq3dDlvl_A.jpg",
    prompt: "Pixar Animation sticker, {Animal With [expression]}, full-body, black background."
},
{
    styleName: "Cardboard crafts: helmet",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/-p5uGWOzLOyXiN0TG9LmvlUk2WIH7sOUY6kqatH2VVw.jpg",
    prompt: "Cardboard Helmet, {Aardwolf} Style, Detailed Craftsmanship, Realistic Textures, Intricate Folds, Playful Embellishments, Wearable Design, Imaginative Cardboard Creation, setting in store."
},
{
    styleName: "Helmet design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/iwWrh62Yr3_UN6EQYWM_jK3fM1VNmP8KAZvVnht7u8g.jpg",
    prompt: "{Tiger}-shaped design, Realistic helmet photo, helmet store setting, high resolution, detailed, vibrant colors, integrated animal features, futuristic sleek, display shelves, authentic materials, retail lighting."
},
{
    styleName: "AutoCAD-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/DaE3x_yxLB11jSRl9VC_nuqyqvKBQNcg3fBfYBAZPAM.jpg",
    prompt: "AutoCAD-style depicting {a building} with precise and detailed technical drawings. Features should include clear lines, dimensional annotations, isometric views, and cross-sectional details, capturing the essence of professional technical drafting."
},
{
    styleName: "3D Print-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KW35Jmi6dBtFFGD2qW77OiwfTYasiKiNPZH4L004rPA.jpg",
    prompt: "3D Print-style, On Pedestal, Detailed, Precise, Layers, Textures, Material Properties, Intricate Details, Realistic, 3D Printing Aesthetics."
},
{
    styleName: "Manga Characters",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/5elus9XgjOTWiEJnoSbOj48wea77QneZFqP6tOfgrjQ.jpg",
    prompt: "Manga Style, Full-Body Character, {Setting/Scenario}, Exaggerated Proportions, Dynamic Poses, Expressive Facial Features, Intricate Details, Classic Manga Characteristics."
},
{
    styleName: "Realistic 3D character-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/TuGYb1zTHaHaGtV0m2kqU5Pfc_Ky3liS41nF6lhEPhE.jpg",
    prompt: "Full-body Realistic 3D character, high detail, lifelike textures, dynamic pose, expressive face."
},
{
    styleName: "Packing design-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/bm9VaHBzw1b304Whzx6vaPrdNkpPS9PeT8OLIjtXfUM.jpg",
    prompt: "packing template design-style depicting {Product or Package}, with creative and eye-catching packaging aesthetics. The design should feature Specific elements such as branding elements, product visuals, labeling details, and packaging materials, capturing the essence of effective packaging design in a visually appealing and functional format."
},
{
    styleName: "Animal shape vase-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Z98tb3lGCWuaNsNv5REiXSrzOvUs_rhUwPmweBisGVM.jpg",
    prompt: "Whimsical design, {animal}-shaped {vase}, realistic representation, artistic elements, lifelike features, intricate craftsmanship, narrative and emotion, functional art, decorative piece."
},
{
    styleName: "Animal shape Chinese vase-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/9JJGI0mpcmFqGtG9hkRzFufZOaGk4kJYEO5ylV-TOOA.jpg",
    prompt: "Whimsical design, {animal}-shaped vase, realistic representation, white and blue porcelain, traditional motifs, artistic expression, lifelike features, cultural significance, decorative art, intricate craftsmanship, Exhibition Venue Background."
},
{
    styleName: "handicapped-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/evnNzcJjCaDr_6I2BmpEbqpVNYOTJd1GyGOzFBr0rJ0.jpg",
    prompt: "Wheelchair, {a young Asian woman}, Accessibility, Inclusive Design, Mobility Aid, Adaptive Equipment, Disability Representation, Inclusive Environment, Supportive Technology."
},
{
    styleName: "Human pose-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/424fIpxG7VdD0t-s8KH8U8VEAqJK5jjpnpjdXI5KeKc.jpg",
    prompt: "Human posing, {{}}, dynamic stance, expressive gesture, natural lighting, clean background."
},
{
    styleName: "4K movie-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/S9-W_ptn8q4yEbxoPp5e5c7VlxFP87O9TSl7_4pQfn0.jpg",
    prompt: "4K, cinematic excellence, {{Scene/Subject}}, dramatic lighting, detailed textures, dynamic composition, realistic depth of field, immersive, visually compelling."
},
{
    styleName: "1960s movie-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/kXwxGMqdLXSZldEv1jIJV6dDod48ceqs0plOs1aPwqA.jpg",
    prompt: "1960s movie-style depicting {{Scene or Subject}} with nostalgic charm and cinematic flair reminiscent of classic films from the 1960s era. The image should feature Specific elements such as vintage color palette, retro fashion, iconic props, and classic cinematography techniques, evoking the spirit and aesthetic of that cinematic period."
},
{
    styleName: "old photos torn-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/19HWJ_ev3lh5W-VgRe-lYU5eDy0uWEQZnmjCvqjBoJo.jpg",
    prompt: "Old Photos Torn-Style, {{Selena Gomez 20-year-old}}, Aged Photograph Appearance, Sepia Tones, Faded Colors, Creases, Torn Edges, Realistic Aging Effects, Nostalgic Vintage Aesthetic."
},
{
    styleName: "3D logo Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/A-Wnlxms7mhUqsCDEfGUXiBPVeK5hYFjjXNp-SKgR_s.jpg",
    prompt: "3D logo, {{Hot Wheels}}, modern design, bold colors, intricate details, high depth, clear background."
},
{
    styleName: "water bottle-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/gQxn-qUR22qaljqqfm0DKI9adKdo-LOzgyjg6Btjz4Y.jpg",
    prompt: "Creative water bottle, {Cat}-Shape design, durable materials, eco-friendly, ergonomic shape, expressive features, hydration accessory, whimsical charm."
},
{
    styleName: "Ge ometric Acrylic Banner",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3WdUboLVSuUxWfyoa-Mc3lVA2kvq7yWQ4MpDYGSrYMU.jpg",
    prompt: "a geometric acrylic banner showcasing {a Khmer girl}, with precise shapes and bold patterns. The banner should incorporate Specific elements like symmetrical designs, contrasting colors, or optical illusions, creating a modern and visually impactful statement piece."
},
{
    styleName: "Colored Pencils Drawing: full-body",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ltuDFZYmkzkJnaYxqSEwGvK1BvBjQ72q4Ho1Vvv9CK4.jpg",
    prompt: "Full body colored pencil drawing, {a young Asian woman}, A4 size, vibrant colors, meticulous detail, light and shadow, texture, depth, artistic expression, visual impact, technique, lifelike portrayal, Signature @drawaesna."
},
{
    styleName: "sketching",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/rDxq6r31tloxhI20gv2O-HLIZPTOdSW9-tj9Ju-Yjdc.jpg",
    prompt: "artist sketching on a drawing pad, using pencils and erasers, {{cat}} detailed and focused, creative process, artistic workspace, realistic hand movements, varied shades and textures."
},
{
    styleName: "wooden toy",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/cm0n6QMNbHV-bMXCSDzTXw-UqZDvcJuD_E9kHEYYTrw.jpg",
    prompt: "Handcrafted {{}-Shaped Wooden Toy | Eco-Friendly Wooden Animal Figures | Artisanal Wooden Toys for Kids."
},
{
    styleName: "Wooden Furniture-style",
    imageSrc: "https://storage.googleapis.com/a1aa/image/udWLKGidSyLXyTvlxphsIYREaMLJO-fkttVD40HG4lk.jpg",
    prompt: "Wooden furniture, {cat}-shaped, a bed, artistic design, carved details, functional, natural finish, unique decor."
},
{
    styleName: "Realistic Caricature-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/JF3io6zUwEV8FWsZ5LOabffjAmaVQR3aJwnqEx1kn30.jpg",
    prompt: "Realistic caricature, {Animal}, detailed features, exaggerated expressions, lifelike colors, humorous style, high-resolution, background."
},
{
    styleName: "Full body Vector",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/w5ZUbfDLEsidqTcn-6UDHaam4sokS8fh7dFL_dlxGT8.jpg",
    prompt: "Full-body vector, {a Khmer girl} illustration, clean lines, bold colors, modern, stylized, proportions, details, depth, simple background, complementary background, shading."
},
{
    styleName: "Pop-up card-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/nkOg02i63QqDn7V6sNrdJ-CPUKkxk6yEtfHqPm7gkWw.jpg",
    prompt: "Pop-up card, {young Asian woman}, 3D scene, flat-to-rising design, specific details, folded paper, layered depth, interactive features, whimsical, engaging."
},
{
    styleName: "Mug-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/5BkulFDKbJkJhFophATsd-kfP3HK5O-B-r1QFMAFJ60.jpg",
    prompt: "Whimsical mug, {Cat}-shaped design, high-quality ceramic, playful contours, vibrant glaze, comfortable grip, textured details, joyful drinking experience, kitchenware, artistic flair."
},
{
    styleName: "Copper sculpture-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/YIInJ518_epcdDMkJ5i2Hw6fXqIj23_xjGaQmVt-Sa4.jpg",
    prompt: "Copper sculpture-style depicting {Animal}, emphasizing three-dimensional form, intricate textures, and the metallic sheen of copper. The design of the seat appears to be carved from copper, featuring smooth curves, detailed contours, and a reflective surface."
},
{
    styleName: "Thai silver art-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/qFIqgffVdKoscr2ijWg0USdB_ZBvDuvf-0KuUc6OZXY.jpg",
    prompt: "Thai silver art, {cat}-shaped, intricate design, cultural motifs, detailed craftsmanship, traditional style, metallic finish."
},
{
    styleName: "Furniture Design",
    imageSrc : "https://kakaladi-catalog.github.io/drawveasna/images/IBEwyeZlWSSJ7fzD3Qhvx-sgedWdqXVaW7GdOc42iak.jpg",
    prompt: "Furniture design, {Tiger}-shaped, artistic style, creative concept, functional decor, unique craftsmanship, whimsical form, Located in the bedroom."
},
{
    styleName: "Realistic Cute figurine",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/RvLcK7PMqlgfePial7cwYNYdHe0RPKvcwUmqMZDfKSU.jpg",
    prompt: "Realistic cute figurine, {a young Asian woman}, highly detailed, soft lighting, lifelike features, vibrant colors, adorable expression."
},
{
    styleName: "Acrylic furniture-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/WV1InRnofUnCiULQu8UXY2f3ALqLxFRWjxATLtbRLOI.jpg",
    prompt: "Acrylic {Monkey sitting on a branch}, modernity, sophistication, clear acrylic, transparent, minimalist design, openness, elegance, tinted acrylic, serene ambiance, contemporary artwork, understated luxury."
},
{
    styleName: "Giant animal transported",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/GA_2lgvyOaThJREczX-1Oh3fnQA9GGuMwZTaTP-GtVk.jpg",
    prompt: "Giant {monkey}, transport, truck, stuck mud, surrounded people, monkey size, muddy terrain, people’s reactions, realistic, dramatic, detailed, challenge, spectacle, scale, environmental details, human activity, compelling narrative."
},
{
    styleName: "Architecture design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/oJhZm-ijpwXbLnD_ck2BoeINq3e01MSYoIb-UTrXhxk.jpg",
    prompt: "Animal-shaped {house} exterior, {young Asian woman}, whimsical architecture, creative design, animal-themed building, tourist attraction, unique home."
},
{
    styleName: "Fan-Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/bgn9XwE-0PbpzkUnyI25wOHiTYXn5q3uAkKPyTv3Yso.jpg",
    prompt: "Creative {Pedestal fan}, {cat}-shaped, creative design, artistic features, functional decor, whimsical style, unique appearance."
},
{
    styleName: "sculpture Wooden Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/oZS8IVtk5l3tzix57mcqEe6CAKctIifoXF12w8v3odA.jpg",
    prompt: "Whimsical sculpture, {Monkey}-shaped design, handcrafted wood, artistic expression, natural materials, rich grain, expressive features, smooth polish, hand-painted accents, versatile décor."
},
{
    styleName: "spice cans design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/9tAOyAgYOkJkgWTqYBMX5r9HEY_7T1FoysIHI4OcPys.jpg",
    prompt: "Whimsical spice cans, {{animal}}-shaped design, kitchen decor and setting, food-safe materials, vibrant colors, expressive features, functional and decorative, removable lid, labeled containers, charming addition."
},
{
    styleName: "vacuum design",
    imageSrc: "https://storage.googleapis.com/a1aa/image/vn5GG2zDtZ2DJCPEiTqFb671y1RT0UWZeEXujEZDVh8.jpg",
    prompt: "Realistic whimsical {{vacuum}}, {{cat}}-shaped design, charming household appliance, setting in Livingroom."
},
{
    styleName: "Kid motorcycle design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/-DQcgeFFp11L-jTcx6yRTl1EApTuPtmcNUAGmgi3QN0.jpg",
    prompt: "Kid motorcycle, {{Monkey}}-shaped, playful design, child-friendly, creative craftsmanship, Height safety, setting in kids' room, colorful decor, playful environment, toys, and books."
},
{
    styleName: "buildings-fruits Vegetables Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/saYJlTZKEhs_c58hjWFPPelLHweEsRCkP0o7UnV2oS0.jpg",
    prompt: "Whimsical luxurious {{carrot}} {{house}}, soft fur exterior, cozy impression, ornamental plants, magical serene atmosphere, bright sunny weather, natural daylight."
},
{
    styleName: "Motorbike modified, mobile café shop",
    imageSrc: "https://storage.googleapis.com/a1aa/image/uzJd2-7vAOIlVYqfqb3GFCIHrCEaKT0ksZBDjBghu5M.jpg",
    prompt: "Modified {{motorbike}} café, compact, functional, coffee equipment, barista station, serving counter, seating, retractable awning, storage, aesthetic design, urban mobility, outdoor setup, customer engagement, customizable menu, espresso machine, grinder, milk frother, sink, electricity, LED lighting, branding, innovative."
},
{
    styleName: "CNC 3D puzzles",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/J8NzX_jNU6OxbHvibs1TMNRsxll_H0bo74eqTLQW9YM.jpg",
    prompt: "3D puzzles, {{an Elephant}}, CNC machining, Precision design, Engaging assembly, Intricate pieces, Interlocking tabs and slots, CAD software, Wood, acrylic, metal, Detailed 3D models, Structural integrity, Clear assembly instructions, Engraving and etching, Themed puzzles, Prototyping and testing."
},
{
    styleName: "Kid's Toy Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3YpH8SHjMLyHg9SaZImm95eOYSGvIGng_9mSvCqjzQY.jpg",
    prompt: "Realistic Kid's toy, {{Animal}}, whimsical design, interactive elements, educational play, imaginative exploration, safe materials, age-appropriate, colorful design, kids room Background."
},
{
    styleName: "Ceramic tile design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/MDp7PhcbSjUUttE73jZzw65BL24H3I5mdOG6tknoJlU.jpg",
    prompt: "Ceramic tile design, geometric patterns, vibrant colors, intricate motifs, depicting {{a Thai girl}}, glossy finish, symmetrical layout."
},
{
    styleName: "Vehicle design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/rRbcHO97-QTfAP-e6SC35gF3e8fvmuD-ivnzZP8anvM.jpg",
    prompt: "Animal-shaped vehicle, creative design, whimsical transportation, {{Cat}}-themed car, unique vehicle, eye-catching automobile."
},
{
    styleName: "Trailer design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/OmSF8LuZLWu03OqYaOayB9_SlvoaG-U2bsbtHXtFQnc.jpg",
    prompt: "{{Cat}}-shaped trailer, creative RV design, animal-themed mobile home, unique camper, whimsical travel vehicle, eye-catching caravan."
},
{
    styleName: "GTA-6 style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/-3H1YordIL8aXLr3rpqevormaeU5zxeyG8zI7XMjfrg.jpg",
    prompt: "Realism, GTA6 style, {{detailed scene}}, urban environment, diverse characters, realistic shadows, reflections, vibrant atmosphere, lifelike textures, expressions, clothing details, hair details, facial details, immersive, action-packed, iconic style, energetic."
},
{
    styleName: "wooden sculpture",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/cJEUHDWmCdThXu2i6geWZHremntVuXY_8Sx9ETKFnjw.jpg",
    prompt: "A young African boy standing next to a large carved wooden sculpture of a {{Lionel Messi's head}}, in a rural outdoor setting with trees and bushes in the background."
},
{
    styleName: "vehicle plastic design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/QxwDvwkbBS5mdNses6jNig5kUZfqMaCVYvEvfC7fapQ.jpg",
    prompt: "Vehicle made from {{plastic bottles}}, recycled materials, eco-friendly transportation, {{young boy}} standing, field background, environmental awareness, sustainability, recycling innovation."
},
{
    styleName: "vehicle Fruit design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/qRk4Gkuk1eDwUIQMBpE0Yb5FpNNJR2eaBNkdcEB3918.jpg",
    prompt: "Vehicle Fruit {{vehicle}}, farm setting, young boy standing, agricultural scene, environmental awareness, sustainability, creative reuse, natural materials, whimsical transportation."
},
{
    styleName: "Paper cutting design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/OITzJ-k5sUrnZXsgs-aIPgtL66o9qF1ZOAxlE2xIl6w.jpg",
    prompt: "Paper cutting, {cat}-shaped art, intricate details, craftsmanship, artistic technique, paper medium, cultural symbolism, wildlife conservation, black background."
},
{
    styleName: "Ecological art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Bcj1IHfvmXa0guLr2TBl3qQZk6ZBUdYa6TcG0HlUm0Y.jpg",
    prompt: "Ecological art, {animal}-shaped designs, sustainable materials, natural aesthetic, symbolism, community engagement, educational impact, artistic innovation, biodiversity conservation."
},
{
    styleName: "Collectible toy",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/H68zKb9nRifNwE-f4fItarROiN9_fvJ5u8SnZxyqpOA.jpg",
    prompt: "a Collectible toy {animal} figure, packaging box, display presentation, detail and craftsmanship, collectors' appeal, artistic presentation, toy collecting."
},
{
    styleName: "PC Case Model Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/NhtTJ0VmbRRA51ryvJMkiZA6tn9yZDYNfFhXMgAQQSc.jpg",
    prompt: "(goat) Warrior Head, Robot, PC Case, Sleek and Sporty Design, Aerodynamic Shape, Glossy Black and white Stripes Finish, Carbon Fiber Elements, RBG LED String Highlights, Cybernetic Features, High-Performance Aesthetic, Japanese Craftsmanship, Elegant Lines, Futuristic Detailing, Racing Spirit, Luxury Technology."
},
{
    styleName: "Mobile motorcycle Cafe bar",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/-SxVqZNDgA-LoU0h1idspsg7v06Dj61QUn1sGjuboxk.jpg",
    prompt: "Envision a {motorcycle} modified with a sidecar that doubles as a compact coffee bar. The motorcycle exudes a blend of retro and contemporary styling, equipped with an espresso machine, compact storage for barista tools, and fold-out counters for serving freshly brewed coffee and snacks."
},
{
    styleName: "Gaming PC case",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/zyERL_VoE250OZ-Va6JkBayzpg8anbUVU1uyNU24dMQ.jpg",
    prompt: "Gaming PC case, {dog-shaped}, sleek design, RGB lighting, transparent panel, modern, high-tech, cooling system, stylish, compact, futuristic."
},
{
    styleName: "Flat Art Style 2",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/n4CiL_eQbaQBEKUYIGTSp5bFnLyGCUNjtG_iWjCWOwY.jpg",
    prompt: "Flat design, {Animals}, Minimalist, Vector art, Bold colors, Simplified shapes, Clean lines, Graphic style, Cartoonish, Abstract, Modern."
},
{
    styleName: "porcelain style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/sPzAHEFMU5KXuSiNdXBp_wmAEjG2ChwC8PrBy2bBieM.jpg",
    prompt: "Photorealistic porcelain {cat}, Blue and white patterns, Sitting pose, Intricate details, Delicate porcelain texture, Lifelike appearance, Subtle variations, Realistic lighting, Artistic craftsmanship, Decorative ornamentation."
},
{
    styleName: "rattan style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/euFtTKVs_OZciiiyg2Q5h7rffABJmRaT__0XGfDjiGU.jpg",
    prompt: "{animal} figure made of rattan, Whimsical design, Cozy house interior, Natural texture, Flexibility of rattan, Artistic interpretation, Intricate weaving, Charming details, Mythical creatures, Imaginative concept, Creative and imaginative."
},
{
    styleName: "Polar Panorama-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/lEbgIEfu7L-GdRyR75b02tlkvT8XSAEQX9iaOrZ3yeE.jpg",
    prompt: "Polar Panorama, {animal}, 360-degree view, spherical layout, immersive scene, expansive."
},
{
    styleName: "group anime characters",
    imageSrc: "https://storage.googleapis.com/a1aa/image/vC2BpWRQuXuq5RQ7oh5yaqOG9MyTpauHltJjmDlc5LA.jpg",
    prompt: "A group of anime characters from the {Naruto} series, in chibi style, standing in a black box with straw-like material on the bottom. The characters are all wearing their iconic outfits and have different poses."
},
{
    styleName: "portrait paper cutout",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/B4beVmeRHpTY4fHK2GtsTlbLsnvF1qj7Qh550HrZOWc.jpg",
    prompt: "A black and white portrait of {a woman}, made of layout paper cutout artwork, looking at the viewer, against a black background, displayed on a wooden background."
},
{
    styleName: "3D rock-shaped",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ob3Lvu9VwgMOl-O4k44FY76CJcgHiZ-KguHbeHko2ag.jpg",
    prompt: "3D rock-shaped {Cat figure} with natural textures, organic forms, rough and rugged appearance, realistic surface details, cracks and crevices, fine and coarse textures, integrated figure, subtle details, character and interest, set on a rocky terrain background, in STL format for CNC machining, considering material properties."
},
{
    styleName: "Motor Front Car",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/rvAnlpUCoz4c-VAnE_02wnh3KSeCyjQUCgu_OKpql0U.jpg",
    prompt: "{Lamborghini Islero} motorcycle in front of a {green} supercar, front view, sleek design, glossy finish, sunlight reflections, high-performance vehicles, detailed surfaces, metallic accents."
},
{
    styleName: "Fruit Crying",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/HlLC4DtkSlwn3sYJw4ylY1UVyup1NZFLrpPFA-Tgep8.jpg",
    prompt: "[Banana] crying face, much white liquid, hanging stalk, a young woman with long black hair walking away, lush green field, sunny day, main focus on [Banana], blurry background."
},
{
    styleName: "Draw with thread-realism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/84Wxbvv3UYJCmv5BzTkQKdzajJXUYW4NU0dgxyyyqhc.jpg",
    prompt: "{[a girl reading book]}, thread drawing, on pedestal, wooden table, delicate, artistic design, intricate details, realism colors, minimalist style, round framed, natural wood, distressed finish, rustic charm, polished table surface, craftsmanship, handmade artistry, serene atmosphere."
},
{
    styleName: "stylized line art-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/SmDRHBiGduuBGppnwGLdFjPbS0MyF3hyOOXK9mpoAH4.jpg",
    prompt: "stylized line art of {[Animal]}, all contained within a black frame on a white wall."
},
{
    styleName: "Sculpture scene inside",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/NHgYGi30G6M2_vVXFgNhZA6JfWO2BCe136-VKE_ZMFI.jpg",
    prompt: "A wooden sculpture of a {[howling wolf]} with a detailed forest scene inside it, lit from behind casting a warm glow."
},
{
    styleName: "Realism-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LJw_TkQ1tU2AK7CFfUF1Qec5DpOtgO6TWH02RNUj3NM.jpg",
    prompt: "realism style, {[Animal]}, highly detailed, lifelike representation, accurate proportions, realistic textures, precise attention to detail, natural colors, intricate details, advanced shading, highlighting techniques, depth, three-dimensional, realistic portrait, realistic landscape, realistic still life, complementary background, contextual background, realistic composition."
},
{
    styleName: "Leaves-shaped",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/mQuuufPJicac1putEhh_gILtN12XJF2fuBQ1CH9k6KY.jpg",
    prompt: "Anthropomorphic figure, {[Mona Lisa]}, Leaves-shaped, Nature, Organic beauty, Foliage, Maple leaves, Oak leaves, Ferns, Vibrant colors, Textures, Natural patterns, Fluidity, Human-like expression, Harmony, Dew drops, Insects, Serene setting, Lush forest, Tranquil pond, Soft lighting, Depth, Realism."
},
{
    styleName: "African boy and crushed wood",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/7phvtimVG4XYPi64rWcTKJVgjJiTQG9ZE2vzlEQ3L04.jpg",
    prompt: "Close-up portrait of {[an African boy]} standing next to an anthropomorphic {[owl]}-shaped figure made of crushed and splintered wood, embodying resilience and the beauty of nature, in a tranquil forest clearing with natural lighting effects."
},
{
    styleName: "crushed wood-shaped",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/so6K92c2Edl41zQXa_0_A7RTTmUOOhlA9m1f9-XPNF8.jpg",
    prompt: "Anthropomorphic figure, {[Mona Lisa]}, Crushed wood-shaped, Natural materials, Resilience, Beauty of nature, Splintered wood, Organic movement, Texture, Tones (browns, grains), Imperfections, Strength, Contemplation, Transformative power of nature, Moss, Lichen growth, Natural setting, Forest clearing, Tranquil environment, Lighting effects, Organic beauty."
},
{
    styleName: "garbage-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/JA7Jf7oHneu9b5X3QkzQFS4C1EuQJYtKD0rT5n4Glsk.jpg",
    prompt: "An anthropomorphic figure resembling {[Mona Lisa]}, shaped from garbage to symbolize environmental awareness and waste management. The figure is crafted from discarded materials like crumpled paper, plastic bottles, metal cans, and debris, embodying resilience and transformation. Recycled objects are artistically integrated, creating a symbolic and grotesque expression that critiques consumerism's impact. The urban setting is enhanced with creative lighting effects to emphasize upcycling and creative renewal."
},
{
    styleName: "plastic bag-shaped",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/bpsgCqHXHH-BkyytW-_CM8M0fVfEGx3FDVO-agyS2WY.jpg",
    prompt: "{[a Khmer girl]} figure, Plastic bags-shaped, Environmental consciousness, Plastic waste, Humanoid form, Intertwined plastic bags, Translucent, Colored, Patterned bags, Textured appearance, Crinkled edges, Torn edges, Hands, Legs, Printed text, Movement, Emotion, Artificial vs. organic, Floating fragments, Urban setting, Natural setting, City street, Landfill, Polluted beach, Reflective qualities, Translucent qualities, Unique texture."
},
{
    styleName: "chalk art-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/cdQMIFu6WL0HmBArZOiUh0eXZDAx1micYuKKyT-a0nQ.jpg",
    prompt: "chalk art of {[Animal]} on a black chalkboard, framed, with vibrant and textured chalk lines, realistic, hand-drawn quality, dusty appearance, black and white, depth, dimension, lively composition, engaging, charming."
},
{
    styleName: "Optical illusions art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Sv_65PBsJrucrq7MfOxziy0Hub5vG14LqOL8tCPim3M.jpg",
    prompt: "Optical illusions art, {[Animal]}, perception manipulation, visual effects, perspective tricks, trompe-l'oeil, geometric patterns, moiré patterns, op art, ambiguous figures, hidden images, surrealism, abstract art, visual distortions, depth perception, 3D effects."
},
{
    styleName: "Animal 3D Effect",
    imageSrc: "https://storage.googleapis.com/a1aa/image/WTrdLFaGOIWPzoQd-Sk22OLbrSzIKCW6xfA3eX9ATTk.jpg",
    prompt: "{[Animal]} peeking out of round wood frame with black background, playful, curious animal, realistic detail, picture frame, surprise element, cute animal, artistic composition, with cement texture wallpaper background."
},
{
    styleName: "3D polygonal paper",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/4sV9E2YZZt0dn4xTcj01ySTMp7nHTGeb5lC6ganGoek.jpg",
    prompt: "Whimsical 3D polygonal paper, {cat}, on a paper shelf attached to wall, geometric shapes, playful, artistic, minimalist, wall art, paper craft, colorful, modern decor."
},
{
    styleName: "Animal grumpy look",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/OHDaeN1qyjKWXO41nGumsvFR2MCGHcIMd9Rg34foYlA.jpg",
    prompt: "Grumpy {rooster}, messy hair, long beard, striped pajamas, slippers, coffee mug, messy room, window background."
},
{
    styleName: "Complicated facial contours",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/My4fVN8lVbRnxaIywtkosyP5Tble5jmF7s3onSpllu4.jpg",
    prompt: "Pattern-style {cat}, stylized, colorful, complicated facial contours, geometric, abstract elements, intricate designs, mechanical motifs."
},
{
    styleName: "shadow box LED",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/BCbNZHfy1VAmrgN_UDoGt2xMUaa8CiJlk9ejyodmHIU.jpg",
    prompt: "shadow box, {Dogs and cats sitting in a room}, decorative LED lightbox, layered paper art, illuminated design, intricate details, soft glow, artistic decor, night light."
},
{
    styleName: "Mechanical sculpture",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/O0v7TFCU_maObmpMP9BV5XttTUFq0FGd1Z6PhpNeuSA.jpg",
    prompt: "Mechanical {cat} sculpture with intricate design, gears, metalwork, steampunk style, industrial art, detailed craftsmanship, and moving parts."
},
{
    styleName: "Smoke art",
    imageSrc: "https://storage.googleapis.com/a1aa/image/VoT7kaNuw7CJtPYNPbm3TTxkJU-SJTrBxuwMTY-lOAQ.jpg",
    prompt: "Smoke art of {a cat}, with wispy patterns, abstract design, ethereal, flowing shapes, monochrome, delicate artistic swirls, smoke trails."
},
{
    styleName: "Bonfire smoke art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ftMhQ1KovSRCY4Sxak51T0NjyuiZH6OhyP-JSjiLgLM.jpg",
    prompt: "Bonfire with smoke art of {tiger}, swirling patterns, ethereal textures, abstract design, flowing shapes, artistic composition, dark background, atmospheric, natural elements."
},
{
    styleName: "Mechanical Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/PEsnexhK_dZneec0ybHyUhPTg-uYSfCs-35OWOP0LI8.jpg",
    prompt: "A mechanical {a girl with tiger} with intricate gear designs, metal components, and a steampunk aesthetic."
},
{
    styleName: "Silicone mold-style",
    imageSrc: "https://storage.googleapis.com/a1aa/image/WIC2b9UpYeZPWoiAcHOaOvfgYndicRpth5V9EEdfFAI.jpg",
    prompt: "Silicone mold, {Animal}, flexible material, detailed design, smooth texture, casting mold, intricate patterns, crafting tool, soft rubbery."
},
{
    styleName: "across frames-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/-iXw9Qt5WhZThV_bkVsueneLl_3cJL6Jw8EWMRvK6rw.jpg",
    prompt: "Three black frames with white background, each frame containing a section of {a motorcycle} photo divided across the frames to form a complete image when viewed together, Attach to the wall with a gray wooden wall in the background."
},
{
    styleName: "flip-flops pattern Design",
    imageSrc: "https://storage.googleapis.com/a1aa/image/Tm0WZvOQKW2YcayJlYqYvmWgBJmeMd0H1q7UecZZJWU.jpg",
    prompt: "A pair of flip-flops, {dog} with Khmer Art Patterns, cut out, the flip-flops are white color and the pattern is black, top view."
},
{
    styleName: "Sandstone-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/sMColRjdzkZ9mwgYFwWx9GbZ0N0M4KNJwpgJi8q2dvU.jpg",
    prompt: "Sandstone, {wildlife sculpture}, natural texture, earthy tones, layered rock, rustic, organic design, geologically detailed patterns, sedimentary rock."
},
{
    styleName: "Old tires-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/0GnWarUyOIbxFke7QCRnn5N2ilEaQNa5W6UIinjCifs.jpg",
    prompt: "Old tires, {wildlife sculpture}, weathered texture, rubber, recycling, rugged, abandoned, worn-out, industrial, grungy, stacked tires."
},
{
    styleName: "Bag-Wallet Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/OHhmHlLsJaAkeXsfDMz1FdYyLtmS6Ft0N7O3ZOVmhqI.jpg",
    prompt: "[bag/wallet], {{Animal}}-shaped, cute design, fabric, whimsical."
},
{
    styleName: "Bag-Wallet Design 2",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ZxwZKhU3FXkZCUpdPOz2UuHlyutJLjcQB1NPsBSBLPY.jpg",
    prompt: "{{cat}}-shaped leather Clutch Wallet, handcrafted design, whimsical accessory, animal-themed purse, unique leather goods, playful fashion item."
},
{
    styleName: "Breaking wall-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Yyyl4L0OP3o4rGSM0-X0xYnY4Fn9ptJAg6P8QYYKGBs.jpg",
    prompt: "realistic Breaking through a stone wall, dramatic impact, forceful, dynamic movement, debris, destruction, strength, power, action, dramatic, wall sticker, {{a tiger}}."
},
{
    styleName: "Wall decoration art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/r6s4NZWe8jTSsVYqO1VtTZLBS3XAROKA2USBEOmBgAg.jpg",
    prompt: "Wall art print, {{Animal}}, modern design, vibrant colors, abstract, framed, stylish decor, artistic, home interior, detailed patterns, contemporary."
},
{
    styleName: "Name card design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/BEOJ9PbSgWIBPJrM6ALYDZoBjsy3IuVYxUlGBT7fD6w.jpg",
    prompt: "Name card design of {{Fragrance Store}}, professional, minimalist, sleek, modern, typography, branding, contact information, creative, elegant."
},
{
    styleName: "Animal head wall decor",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/E8MSjGvgbc4Zyn0KUEQGRiStoBwkyxYUQPuQyYsQ0kQ.jpg",
    prompt: "head wall decor, realistic, artistic, mounted, detailed features, rustic, natural materials, stylish, home decoration, {{Animal}}."
},
{
    styleName: "Collage Mixed media",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/MSqxBJIsaoRs36K6252O2kBRGmmbrCPmSAGTNMP_BiU.jpg",
    prompt: "Collage Mixed media, {{Animals}}, Layered textures, Cut-out shapes, Overlapping elements, Vibrant colors, Textured, Paper-like, Handmade feel, Artistic composition."
},
{
    styleName: "Draw with thread-Colorful",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ahlxY8RdKyjKceK7MYD5YS7ysolGF8AfD1OEHjNos0I.jpg",
    prompt: "Draw with thread, string art, intricate patterns, detailed design, embroidery, textile art, colorful threads, artistic craft, handmade. The expressive artwork is round framed in natural wood, on the pedestal stand, {{a girl}}."
},
{
    styleName: "Gouache Painting",
    imageSrc: "https://storage.googleapis.com/a1aa/image/uLBOAMufIKm2saDcsmCXOcTQuTYRbCwoo3xoELdz1kQ.jpg",
    prompt: "Gouache, {{Animals}}, Opaque, Matte finish, Bold colors, Thick brushstrokes, Smooth gradients, Oil paint textures, Luminous, Layered, Hand-painted."
},
{
    styleName: "Fresco Painting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/bWfAgOrdv7tcjF-jWGw2jdq3yPTsMWQsVGjMp12gyTM.jpg",
    prompt: "Fresco, {{Animals}}, Wall painting, Ancient technique, Earthy tones, Plaster texture, Natural pigments, Layered, Weathered look, Historical, Hand-painted."
},
{
    styleName: "Mosaic Painting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LcF-2y3wSh6NA33ChXH1ymL4s7BuSTzyhKOyocleRU8.jpg",
    prompt: "a mosaic-style painting of {{Animal}}, using glass tiles and stones to depict the vibrant colors and textures, framed."
},
{
    styleName: "Nihonga Painting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/rVGR1hr5YcJE1bf530GrtcuCsITM5uQ2XIudNdgHDXk.jpg",
    prompt: "japanese nihonga painting about {{a girl}}, Nihonga, ancient japanese painting, intricate, detailed."
},
{
    styleName: "anime drawing",
    imageSrc: "https://storage.googleapis.com/a1aa/image/WZCLWWdy5eayibVBGkkY8_aZnYIEOQszh_F_TggHHRg.jpg",
    prompt: "digital art drawing, illustration of {{Animal}}, anime drawing/art, bold linework, illustration, cel shaded, painterly style, digital art, masterpiece."
},
{
    styleName: "oil painting-portrait",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/CRxThqMNCgO9c04w5P489x4Zd5MHa-M-tVLsf8QzWJ0.jpg",
    prompt: "Oil painting, smooth glazing skin, detailed impasto clothing, muted earthy palette, softly blended background, visible brush strokes hair, (young Khmer woman)."
},
{
    styleName: "T-Shirt Design",
    imageSrc: "https://storage.googleapis.com/a1aa/image/_GtGGVeabD7g9DcbpJMgc_nT9mCdkpuUKuIA1JtYo0I.jpg",
    prompt: "T-shirt design, trendy, graphic, stylish, bold patterns, vibrant colors, creative, fashion, casual wear, unique artwork, (Leonardo DiCaprio)."
},
{
    styleName: "Bauhaus-style poster 2",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/C3q73xw7EDlxkWIJ9WQJQhP1WwixrTtm2dDJ1BYJdZM.jpg",
    prompt: "Bauhaus-style poster, geometric shapes, primary colors, minimalist, abstract design, bold typography, modern, artistic, clean lines, functional, vibrant colors, creative, Framed, (a Khmer girl)."
},
{
    styleName: "Living Room design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/kK1IQ2l0KXH78v9P0qy7VeKGSxjQn5KRc-_FKcCE6u0.jpg",
    prompt: "Animal-shaped living room design, creative interior decor, whimsical furniture, ([Cat])-themed layout, unique home design, playful living space."
},
{
    styleName: "bedroom design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/L2HNk8TYc_Jl7LBUFvt1Io87W03pxVRy_awmed9fIUo.jpg",
    prompt: "animal-shaped bedroom design, creative interior decor, whimsical bedroom layout, ([Cat])-themed furniture, unique room concept, playful sleeping space."
},
{
    styleName: "Kitchen design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/T_Y8aLtogeSzAtdEDNm0lo2xw4pcCMk8Pmf7B2VlkJ8.jpg",
    prompt: "Animal-shaped kitchen design, creative interior, playful kitchen layout, ([Cat])-themed cabinetry, unique home decor, whimsical cooking space."
},
{
    styleName: "Shop Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/CfmeHUvRQpM3Op3teytfgjYONRabn59dUn3-c3d6vsE.jpg",
    prompt: "Animal-shaped shop design, whimsical, creative architecture, vibrant colors, eye-catching, playful, themed storefront, detailed features, lively atmosphere, unique entrance, urban street setting, inviting facade, ([Cat])."
},
{
    styleName: "Palm tree-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Fd0DX1gtmP8VojYjP9B-T453d8rXJLiuEVg7DaD8GyI.jpg",
    prompt: "Made of palm tree, ([Animal]), natural materials, palm leaves, palm wood, eco-friendly, tropical, rustic, organic, handmade, sustainable."
},
{
    styleName: "Coconut shell-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/EKuYGA-EODRAHTwzCgcNwPHKO5UMeHKAcx3gEnRoAqA.jpg",
    prompt: "Coconut shell, ([Animal]), natural texture, brown, tropical, open shell, rustic, organic, detailed, beach, tropical fruit. on pedestal."
},
{
    styleName: "coconut shell",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/x5bFKynE4iM0PQdLQ1u0S2hx2xX_LWPmL1sjzMhJ2HY.jpg",
    prompt: "Animal-shaped coconut shell, creative natural craft, whimsical coconut carving, ([Cat])-themed decor, unique handmade art, imaginative coconut shell design."
},
{
    styleName: "Sand Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/I2Eptavrwbf_fwj-pic1htK3p0DRGs3qJkVnhqDLPjM.jpg",
    prompt: "Sand art, intricate designs, natural material, beach, detailed patterns, ephemeral, textured, creative, artistic, sand sculptures, ([Animal])."
},
{
    styleName: "Indian henna designs",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/YhJoIYG5rdrEaJpxNWtCRIZEU5P39xUR84KnZLeWdKg.jpg",
    prompt: "Indian henna designs, ([Animal]), intricate patterns, traditional, cultural, hand art, mehndi, detailed, floral motifs, symmetrical, festive."
},
{
    styleName: "Rain art-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Q94-OG4-pE_VQUNdGG8KIbK6dssBfaIDDkeMoJWfgBw.jpg",
    prompt: "Rain art, ([Animal]), abstract, watercolor effect, wet surface, reflections, rainy day, artistic, nature, atmospheric, urban."
},
{
    styleName: "Flame-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KQ01Zlih4kB-ku2ignFMieosoygMc5XK1rd4EsSy5YU.jpg",
    prompt: "{{Animal}}, Flame, fiery, bright, orange and red, dynamic, intense heat, burning, glowing, realistic, fire."
},
{
    styleName: "Flame art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/oCGXMmNeLur_x5Np2ChHCD-xGjCb8YlugzYZaD5Xbs0.jpg",
    prompt: "Flame art, fiery, abstract, vibrant colors, dynamic shapes, glowing, artistic fire, intense heat, creative design, {{Animal}}."
},
{
    styleName: "Wall art print",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/vLZhsY0wXqtlaq2mJGZFAbkt-97J19ZzC70lmdE0PEo.jpg",
    prompt: "Art print, high-quality, detailed, vibrant colors, framed, stylish, artistic, contemporary, home decor, modern design, {{Animal}}."
},
{
    styleName: "Flower-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/a1TXTOJCbcohLT7J3vQfRFrWZz14fiw2C5insS2WWjE.jpg",
    prompt: "Made of flowers, {{Animal}}, floral arrangement, artistic, intricate design, natural materials, vibrant colors, delicate petals, creative, botanical, elegant, On disk."
},
{
    styleName: "Idol-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/8BTVsv0hkrtbx4V8GhSLDMFjDsVjPoiS_urjEoW6zq4.jpg",
    prompt: "An idol representing {{a Khmer girl}}, embodying the essence of a deity, with religious and spiritual symbolism, sculpted to reflect divine worship, sacredness, and cultural heritage."
},
{
    styleName: "Pottery-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/y7FPEihrWYqcGHu_0icEnzPIq0O5OzozW4L6POB8vPw.jpg",
    prompt: "Pottery, handmade, ceramic, clay, artisanal, wheel-thrown, glaze, kiln-fired, decorative, functional, {{Animal}}."
},
{
    styleName: "Polymer clay-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/GTvw5FOGxqoYpT-HlGpXhR5o7WjaIxblrt2v6MVSjs4.jpg",
    prompt: "Polymer clay, {{Animal}}, vibrant colors, sculpting material, handmade, detailed, artistic, flexible, creative, versatile, miniature."
},
{
    styleName: "Clay-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3PYnm6xeYl8owE39Xf3XHmsjxa0vyhMwApzsPzdkroU.jpg",
    prompt: "Clay, {{Animal}}, earthy, sculpting, natural material, handmade, pottery, ceramic, artistic, molding, textured."
},
{
    styleName: "Walnut Shell Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/R0AO_ECRQ1cvDMEtxVkxz4WNyp5ZEjwjeBLlkgZpNHY.jpg",
    prompt: "Walnut shell art, miniature, creative, intricate details, handcrafted, decorative, natural material, eco-friendly, imaginative, {{Cat}}."
},
{
    styleName: "Pebbles art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/2-xc6YQq0ta4UUgAfG1ndwJ2H37REcO0bSZeXJnvoaM.jpg",
    prompt: "Pebble art, {{Cat}}, creative stone arrangement, intricate rock designs, natural material art, detailed stone mosaic, whimsical pebble sculptures."
},
{
    styleName: "Emerald-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/8gLLwyofvMd6E00jMU24MxRbs1w0DSq7mUDyKKMFRH4.jpg",
    prompt: "{{a cat}} Made of emerald, gemstone, green, precious, jewelry, polished, shiny, luxurious, natural, elegant."
},
{
    styleName: "Ruby-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ggHOvTzI5WKxXVMJKm_q6BCm2nDF5BQf9l5-ZkRroHc.jpg",
    prompt: "Made of ruby, {{a cat}}, gemstone, red, precious, luxurious, shiny, jewelry, polished, elegant, vibrant."
},
{
    styleName: "Sapphire-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/fAWXE8Rxw5mmo7GnMKmXg_2yBvVYzGXLswC4u4fjw4A.jpg",
    prompt: "Made of sapphire, {{Animal}}, gemstone, blue, precious, luxurious, shiny, jewelry, polished, elegant, vibrant."
},
{
    styleName: "Jadeite-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/DOkT95a_5p1GOzyu8jr0O-LIqq05_vpdTKpARdwHbzk.jpg",
    prompt: "{Cat}. Made of jadeite, gemstone, green, precious, luxurious, polished, shiny, jewelry, elegant, intricate."
},
{
    styleName: "Money-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/WQpjrWuoBbtu-wrf5lVq2ZNeliZMVdMAr9kd5-LI-jE.jpg",
    prompt: "Made of money, {Cat}, dollar bills, cash, intricate, creative, financial, artistic, paper, wealth, unique."
},
{
    styleName: "paper cutting silhouette",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/V0CkQ8XoB560T3ICf09lKJXe9OaND-KzbBBGEk0bYHI.jpg",
    prompt: "{cat} Intricate paper cutting silhouette, detailed handmade design, delicate paper art, black and white cutout, artistic shadow shapes, traditional paper craft."
},
{
    styleName: "Throw water art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/kTHNbOpzyVKJs78QFN02FSFMFd_s86pyJcDjnqPTwXI.jpg",
    prompt: "Animal-shaped water splash artwork, dynamic water art, creative splash forms, animal-themed water shapes, imaginative fluid design, artistic water sculpture, {cat}."
},
{
    styleName: "Product sketching",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/d6amRr0rOvLZleW866IZhvnSZw7GKMVRpSg0pnZsRRs.jpg",
    prompt: "Product sketching, detailed, design concept, pencil drawing, technical, innovative, creative, blueprint, precise, illustrative. {a cup}."
},
{
    styleName: "Room design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/XGn_D0EX-FoQ8YQ5U1b7ZD-_Rv_S7QV44VfpamZzSeU.jpg",
    prompt: "animal-shaped room, creative interior design, {cat}-themed space, whimsical decor, unique room layout, imaginative living area."
},
{
    styleName: "Cardboard Three-dimensional",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/n8B1mG4ehEGUODkK3gr-NupRiYUEjhA4o4NrPqizxXk.jpg",
    prompt: "Three-dimensional, Cardboard {bear} head, Mounted on wall, Floral wallpaper background, Interlocking pieces, Crafted appearance, Geometric appearance."
},
{
    styleName: "Stylized artistic sculpture",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/qZoFfah4C7o_GCr6IkO_BIJeMAlR5_FR2iN6uVMdPCk.jpg",
    prompt: "Stylized artistic sculpture, abstract, modern art, intricate design, minimalistic, fluid shapes, bold colors, contemporary, dynamic composition, natural lighting, peaceful ambiance, surrounding greenery, {cat}."
},
{
    styleName: "strawberries-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/8j_Bh76-HX61vFUsxDrGFUCqBAwMR91oENONqWnquD4.jpg",
    prompt: "{dog} made of strawberries, Green leafy wings, Green leafy Hair, Perched on moss-covered branch, Lush forest, Friendly expression, Looking curiously, Strawberry beside it."
},
{
    styleName: "vehicle Wooden body",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/29Hc2tTJHG0AeHVGEZv4rbcIIlm444xGEyF2OqueRCQ.jpg",
    prompt: "{Porsche 550 Spyder} with Wooden body, rustic, wooden texture, unique design, natural materials, detailed, handcrafted, eco-friendly, innovative, artistic."
},
{
    styleName: "vehicle-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/w5NUMdtxvrirEqqOsxnZ-D-ogy0Fj1Tlo4J9i9jhMlY.jpg",
    prompt: "modern design, high-resolution, large off-road tires, sleek, photorealistic, lifelike, advanced technology, automotive, precise, perched on road in forest, {Toyota Camry}."
},
{
    styleName: "Pixar-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/8TV08tlbGGEIQ38bE0Qrxylf401gcKPKXXOB8ItuxMc.jpg",
    prompt: "Cheerful Pixar-style {character}, round face, big expressive eyes, friendly smile, colorful outfit, playful demeanor, animated and lively, magical background, warm and inviting atmosphere."
},
{
    styleName: "Realistic monster-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/A_YJFRaoH8zvbgNaK-hkL5mGpBCwhGuWyM8UKm1Ze9E.jpg",
    prompt: "Realistic monster, {Animal}, detailed, lifelike, terrifying, intricate textures, sharp features, menacing, high-resolution, photorealistic, creature design."
},
{
    styleName: "Realistic alien-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3m1ZA_I1S8kt5bwdumDogLuxLOMRnjLM4JLkTKXQhmY.jpg",
    prompt: "Realistic alien, {Animal}, detailed, lifelike, otherworldly, intricate textures, humanoid, high-resolution, photorealistic, extraterrestrial, advanced technology."
},
{
    styleName: "Security camera screen view",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/cuoOmq_6-ITLZwXVOUR8_pzXp7V5HxR4J_lc8vdZfa8.jpg",
    prompt: "Resembling security camera view, {surveillance screen, camera feed, live footage, black and white, timestamp, CCTV.}"
},
{
    styleName: "Hot wheel Racing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/WAflmWqvX09zloGEEZkYAft9LtsoWPTwAMdumWeO5Ig.jpg",
    prompt: "Hot Wheels Unleashed 2 {Lamborghini Espada} Racing: Vibrant action, miniature cars, high-speed track, dynamic angles, {Jungle river edge}, detailed design, loop-de-loops, blazing tires, childlike excitement, competitive race."
},
{
    styleName: "Hot Wheels Collection",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/FYci37-X6eF2pYuBKJkLKvctQf6Y1O_7-ukjSE6BGg4.jpg",
    prompt: "A hand holding a Hot Wheels car with a blue and red box. The car is a Volkswagen Beetle with the words 'New for 2024' written on the box. There are other Hot Wheels cars in the background. The background is blurry."
},
{
    styleName: "digital painting-Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LQ3V1Sep_1bWPccAun4ZOpUIul_dwXdGpTp1zOMvmeY.jpg",
    prompt: "Digital Painting Style, {Animal}, Soft brush strokes, vivid colors, detailed textures, ethereal ambiance, creative composition, painterly look, layered hues, artistic rendering, smooth gradients, dynamic lighting."
},
{
    styleName: "Forza Horizon 5 racing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/spZmUQTeX1Lc3HXYFIlayFGP26W3GEVjoykWQlSeYOc.jpg",
    prompt: "Forza Horizon 5 Racing, Realistic graphics, high-speed cars, dynamic action, detailed textures, vibrant lighting, open-world racing, adrenaline rush, motion blur, competitive atmosphere, exotic locations. {Lamborghini}."
},
{
    styleName: "DIRT 5 racing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/74Uqxg8Y6hiAcGpwAzkOG9jWhhGre7mQM6eFY77kzW4.jpg",
    prompt: "DIRT 5 {Lamborghini} Racing: Off-road excitement, rugged terrain, dynamic action, detailed vehicles, {Boreal forest} tracks, motion blur, bright colors, intense competition, realistic dust effects, adrenaline-filled race, vibrant landscapes."
},
{
    styleName: "DIRT RALLY 2.0 racing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/QFA0qXrV7MYrv7WMLTdazkU65fowXZUiEEqKg1A90D0.jpg",
    prompt: "DIRT Rally 2.0 {Lamborghini} Racing Game: Intense off-road racing, realistic graphics, detailed rally cars, rugged terrain, dynamic action, {muddy} tracks, sharp turns, dust clouds, competitive atmosphere, motion blur, gritty visuals, adrenaline rush."
},
{
    styleName: "Minimal Style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/8pq1WLq8fVAWuHirpAfq-O0IFbDZoPz_bCrHg8tmj7Q.jpg",
    prompt: "Minimal black and white illustration, simple lines, clean design, high contrast, artistic style, sprinkles for hand coloring. There should be an empty white background, no shadow. {a girl}."
},
{
    styleName: "Pixar Character",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/2TFMFpJWLYOzuHBNj5ZDY4M_6txuG3CSqB8aiiDMRNg.jpg",
    prompt: "Pixar-style character, colorful, animated, expressive, {a man and his wife and daughter, living room}."
},
{
    styleName: "Pixar Animals",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/TD1-Zl5mC6zBMh-87AYfkloarhEgSLqwyTUpSuMHsh0.jpg",
    prompt: "Pixar-style animals, {Cat with its owner}, cute, cartoonish, lively."
},
{
    styleName: "Pixar Fantasy",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/2kHqFu82cpWsCtziudW3RvP1psT3xPt96DtcEZSRX4w.jpg",
    prompt: "Pixar-style fantasy world, Jungle, magical, enchanting, vivid, {a girl}."
},
{
    styleName: "Modern Condo design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pUWhmAd_qcmz8fSeEpBcOcrOxn-PV3EmYTUgrurqNBo.jpg",
    prompt: "{cat}-shaped modern condo, creative architecture, animal-themed building, unique residential design, whimsical urban living, innovative condo exterior."
},
{
    styleName: "MotoGP design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/-xloTnH5yyjadlxwcff8GPdKOkabyqAwg2nqNt_QrGI.jpg",
    prompt: "Animal-shaped MotoGP bike, creative racing motorcycle, {Tiger}-themed sportbike, high-performance whimsical design, unique race bike."
},
{
    styleName: "Motorcycle design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/2anmeTGAa8f4Q4K6fBPTRHSVq6MeVudXgbnyBEKxhTA.jpg",
    prompt: "Animal-shaped sportbike, creative motorcycle design, {Cat}-themed superbike, unique sportbike, imaginative two-wheeler, whimsical high-performance bike."
},
{
    styleName: "Futuristic Animal robot",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/p6czy-V9ZYFEYH5k-mC_YFiUi_oqKxRAj9mVhezgjlk.jpg",
    prompt: "Animal-shaped futuristic robot, {cat}, innovative design, sci-fi mechanical creature, high-tech animal robot, imaginative robotics, advanced technology."
},
{
    styleName: "Fallout 4 Car-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/FOBCH2m35_h7wYoUAV0KdETj4dnZe_GQxRMCftj51Pk.jpg",
    prompt: "Post-apocalyptic {car} from Fallout 4, rugged design, rusty metal, retro-futuristic aesthetic, and wasteland details."
},
{
    styleName: "Kids Car",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/hrb3_6yu5qRD5mibunBAYkjb9CYv-ZOlGYMs6NyF7hI.jpg",
    prompt: "realistic toy car for Khmer kids, {Lamborghini}, playful environment, happy child driving."
},
{
    styleName: "office design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/BgZYCvfCatzZwQuWwhYrSRfeDYeLlG03T6UmMQm5rDg.jpg",
    prompt: "Animal-shaped office design, {Tiger}-inspired, sleek lines, cozy nooks, feline theme, eco-friendly materials, whimsical aesthetics, innovative architecture, nature integration, ergonomic layout."
},
{
    styleName: "warrior suit",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/jj6TNhdaijmsvdHAAWZZi2z_E0tejtuG_VuYpbtPyXw.jpg",
    prompt: "{Animal}-shaped warrior suit, detailed armor, fierce and powerful, tribal designs, earthy tones, battle-ready."
},
{
    styleName: "Graphic novel-style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3y2vrVab6Lf_Gn2moPglVGbiBdmSWV8KGLz0raWEc70.jpg",
    prompt: "Graphic novel, bold outlines, dramatic look, narrative, vivid colors, comic book style, action-packed, dark tones, cinematic, intense."
},
{
    styleName: "Woven Bamboo House Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/voBqHyPld-ZzhAWqeuIYI6IDv4gadcY9oxx4AhZ64mk.jpg",
    prompt: "Intricate Woven Bamboo {cat}-Shaped House Design, Eco-Friendly Bamboo Architecture, red joints, Crafting Animal Figures with Sustainable Materials."
},
{
    styleName: "Woven Bamboo Home Deco",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/zdbO5bTtDq9a1FD221zX6jIpBqd2bRsMERp9ASEp6H4.jpg",
    prompt: "Eco-Friendly Woven Bamboo {Animal}-Shaped Home Decor, Intricate Bamboo Art Pieces, red joints, Sustainable Animal Figurine Decoration."
},
{
    styleName: "Straw House Design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Jr0SyLdf6KfMe5KkMJoIKMYDrwTvm3eFgBsNZqkBak4.jpg",
    prompt: "Straw {Animal}-Shaped House Design, Eco-Friendly Straw Architecture, red joints, Unique Animal Figures with Natural Straw Materials."
},
{
    styleName: "woven bamboo building",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Lzmsfx29rX5ITrCr4BaPkn6JbWe5HUN9mLOoLbRkAyo.jpg",
    prompt: "{Animal}-shaped woven bamboo building structure, intricately designed, natural materials, architectural marvel, eco-friendly construction, forest background."
},
{
    styleName: "skeleton Art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ox9xHdULK-WkYj9rzObfXkRtwNpy5AZZIYk3U5SKbmg.jpg",
    prompt: "{ young Asian woman} skeleton, black frame, ornate gold corners, central focus, facing camera, black background, blurry white wall background, signature Veasna."
},
{
    styleName: "Vehicle skeletal",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/fH16O64SzN2CJgLU6GSkMQXvJXuPf-SX2WfnfCajHPg.jpg",
    prompt: "A futuristic, small, black and white electric Lamborghini SC18 with a skeletal frame. The car has a single seat with a black leather seat. The car is on a Vegetated area background."
},
{
    styleName: "Pebbles art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/1trw3ZUe8RA2gN_gi3Dz7LS8XQmra_b8AiFMFRl6AAM.jpg",
    prompt: "A detailed portrait of a French Bulldog made out of pebbles and stones on Sand. The pebbles are arranged in a realistic fashion and create a sense of depth and texture. The background is very simple and helps to emphasize the image."
},
{
    styleName: "architectural drawing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/lPPgylVZqdAO_YfRDBI7EW9bYsjZjZFxCH7FYRwSCdI.jpg",
    prompt: "Modern house cutaway view: Art Deco house design with dark walls, wooden panels, large glass windows, and flat roof with solar panels. Interior: living room, kitchen, bedroom, bathroom. Exterior: garden, elongated pool, steps. Include floor plans, architectural drawings, cross-sections, site plan. Logo: 'Design by VEASNA' bottom right."
},
{
    styleName: "Animal head wall decor 2",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/iyGvOPgFfJHrQaCJNCL5_u7N1RVtKOv3Ay-nzoHNsOY.jpg",
    prompt: "A realistic and detailed image of a majestic deer head mount displayed on a wooden wall. The mount features an intricately designed plaque, highlighting the texture of the animal's fur, scales, or feathers. The lighting should accentuate the lifelike qualities of the mount, giving a sense of elegance and tradition."
},
{
    styleName: "kids clothes design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/s9tTJVyYZ8E1OvaAr8K7c2vlljLYwwv5ppinwnENjwo.jpg",
    prompt: "Naga Serpent-shaped kids clothes design, incorporating playful and imaginative features, vibrant animal prints, soft and comfortable fabrics, creative embellishments, Cartoon-Like animal faces, colorful and whimsical patterns, child-friendly fastenings, themed outfits for play and adventure."
},
{
    styleName: "whimsical bookshelf",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/gm1IuPr2s3pDqfxv6MFc5ghprsje8uTJnOJ4dhMqSa4.jpg",
    prompt: "A whimsical, Cat-shaped bookshelf crafted from light oak wood, mounted on a wall in a living room. The bookshelf displays a variety of colorful books and small potted plants."
},
{
    styleName: "3D anaglyph",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/T5UtnOPC_ppMwpaLc2jtZ3QWeg6CMSdnJ7Oj7DTfmTc.jpg",
    prompt: "Young Asian woman in water, 3D anaglyph, red and blue, 3D glasses"
},
{
    styleName: "3D render",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/wYQUTljFvopYB8NmPbhkksYbi8KJCT9ie18Ji4KMiHM.jpg",
    prompt: "Young Asian woman in water, 3D render, computer generated, realistic 3D"
},
{
    styleName: "8-bit art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/WP0yrH34GMi-tPbH72G4ZI2Hs27Pw3Q9ZFwT8aZggXQ.jpg",
    prompt: "Young Asian woman in water, 8-bit art, pixelated, video game style"
},
{
    styleName: "Abstract design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/H73o9SlIlXISlYMXbPHr1J3TCWPYCd57Wg1q8NGN3VE.jpg",
    prompt: "Young Asian woman in water, Abstract design, enigmatic forms, conceptual style, avant-garde"
},
{
    styleName: "Abstract style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KUxa0UxNjZl5Z43xOEv91fpnAY-g0V5ZUM695vxXRcA.jpg",
    prompt: "Young Asian woman in water, Abstract style, non-representational, shapes and colors, artistic"
},
{
    styleName: "Aerial photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/dL2Qu_xNhKw1dCOTaqk-k2s9rFjjNEsJAE7VCxZd7Gs.jpg",
    prompt: "Young Asian woman in water, Aerial photo, bird's eye view, high altitude, wide perspective"
},
{
    styleName: "Alternate history",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/hU4A8hhSAdCyoWp1MEG7DF-zmOsnm3do96FKODEIm2k.jpg",
    prompt: "Young Asian woman in water, Alternate history, reimagined past, speculative fiction"
},
{
    styleName: "Ambrotype",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Aua1ISnlSbwVIVyUzfhVYrC1zw0r-KZckCXcNxKGVn8.jpg",
    prompt: "Young Asian woman in water, Ambrotype, early photography, glass plate, historic effect"
},
{
    styleName: "Art brut",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/wjKyW0vEIg6rPuqJxkj91sG1D2PzTQPtC2gq2MxmEl8.jpg",
    prompt: "Young Asian woman in water, Art brut, raw creativity, outsider art, untutored talent"
},
{
    styleName: "Art deco",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/HqJkFscSKTYju4shjc2ssiHBvJcajOYxyvj4AMm2wfU.jpg",
    prompt: "Young Asian woman in water, Art deco, 1920s glamour, geometric shapes"
},
{
    styleName: "Baroque",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/4L0ii9Gw2pDVoiPAvoupvnA66VEhkSZdHdhFBbazKEk.jpg",
    prompt: "Young Asian woman in water, Baroque, ornate detail, dramatic lighting, rich colors"
},
{
    styleName: "Bird's eye view",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/w8O0BX7dBOb5MERUkcab910HTyqYDKZnfQIGb28PnJw.jpg",
    prompt: "Young Asian woman in water, Bird's eye view, aerial, high perspective, wide scope"
},
{
    styleName: "Black and white photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/hCCR9-ZvJELvrXEJVLjlqO6PdLiriV_VZ2RcqBsKK-s.jpg",
    prompt: "Young Asian woman in water, Black and white photo, monochrome, high contrast"
},
{
    styleName: "Caravaggism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/EZsM8AmhkxT8jG7-dszGVlQhtw1jwdSZ6MzEGdkoBDg.jpg",
    prompt: "Young Asian woman in water, Caravaggism, Baroque art style, intense lighting, realistic detail"
},
{
    styleName: "Caricature",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/knvoyerExt-EKgVPPizb77xbXHONPiCHAmLQKBFUiVY.jpg",
    prompt: "Young Asian woman in water, Caricature, exaggerated features, humorous"
},
{
    styleName: "Cartoon",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/brE37capIm0WRlogMea9T-TprCpfZWULoBOM5282iew.jpg",
    prompt: "Young Asian woman in water, Cartoon, animated style, hand-drawn, exaggerated"
},
{
    styleName: "Cinematic style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/B6yx06WcB_7HUq0T1ixQBuS-HfyVwmoVkEhx_1RszUE.jpg",
    prompt: "Young Asian woman in water, Cinematic style, dramatic lighting, film-like quality, widescreen aspect ratio"
},
{
    styleName: "Classic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/HFibrq0PepE50xoetGU-Eo7k723BQmpnH_bKUAo2Odc.jpg",
    prompt: "Young Asian woman in water, Classic, timeless, elegant, enduring"
},
{
    styleName: "Close-up",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/FJRMyqRdnyF2hfmaFP3N4vR8QT_yfYA-XYKn5lXPDpc.jpg",
    prompt: "Young Asian woman in water, Close-up, detailed, intimate, macro-like"
},
{
    styleName: "Cloud design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KekOHp0rkIftUWeqQKD-xeZfTAw07JMDqKTDYBfEUTM.jpg",
    prompt: "Young Asian woman in water, Cloud design, mist elements, ephemeral appearance, ethereal themes"
},
{
    styleName: "Collage art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/bGDvze9Xd5_u74np567CAdP5W9xqmPAVihJsw-zoaLQ.jpg",
    prompt: "Young Asian woman in water, Collage art, assembled images, mixed media"
},
{
    styleName: "Conceptual photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Y90-IcZo7MZ21WqvVV5Z37C8mkMRDzvX7CRs7g_mw10.jpg",
    prompt: "Young Asian woman in water, Conceptual photo, abstract idea, symbolic elements, artistic interpretation"
},
{
    styleName: "Cross processing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KdM0EK26xtv0uKl_tw-lml43ZHDTKMpgAW5l8yDYoCA.jpg",
    prompt: "Young Asian woman in water, Cross processing, unconventional color shift, retro look"
},
{
    styleName: "Cyber gothic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/oFcLgGg5ATg7cpIBWY3fucwXIev8PiMr4qczdQPVSs0.jpg",
    prompt: "Cyber gothic, futuristic, dark, industrial"
},
{
    styleName: "Cyberpunk style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/YCPhBKEnbVNfTMzOHFVhoPkiDYB2liRNIjsFiAWG6dU.jpg",
    prompt: "Cyberpunk style, neon lights, urban dystopia, futuristic elements"
},
{
    styleName: "Daguerreotype",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KU-dUr4pKRSD2u8BFh3sMmGsr7Vh5JCO17rqBSUFtQA.jpg",
    prompt: "Daguerreotype, antique photo, silver plate, historical"
},
{
    styleName: "Digital art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/rSMvwI4b7DWzhiTNh7y3Xa5jIVyGmomlBb7rVzLAmjs.jpg",
    prompt: "Digital art, computer generated, graphical"
},
{
    styleName: "Documentary style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/lcOy048AtqQnnu3gidDTeVQod6QRvT0lGl7swFnbG_E.jpg",
    prompt: "Documentary style, real life, candid moments, storytelling"
},
{
    styleName: "Double exposure effect",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/qhRhlLOPH2OKt72bmLWWmc5sAUnfORUoqCM0Xdh4t2w.jpg",
    prompt: "Double exposure effect, two overlapping images, artistic"
},
{
    styleName: "Dystopian",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/azauflS9qOIsTVbQflOWODead36kAakktqIeju05iM8.jpg",
    prompt: "Dystopian, bleak future, oppressive society, dark themes"
},
{
    styleName: "Extreme close-up",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pRVRsIPV7FJZX3ai2on_ANCoNjyoplRbFJ4QCEn2ky0.jpg",
    prompt: "Extreme close-up, very detailed, focusing on small area"
},
{
    styleName: "Eye level",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Gd4BxrGuNDgRS2s9fc-4-CtB0yPXtb51KYcgVMCUGWc.jpg",
    prompt: "Eye level, neutral view, relatable perspective, direct"
},
{
    styleName: "Fairy tale",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/mQ9Pn6Kb-AN7jShCi3Q1yM7a3actY1R68aIxYx1kuGw.jpg",
    prompt: "Fairy tale, whimsical, magical, storybook"
},
{
    styleName: "Fantasy photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/E9t9AMz9Vil6oPUe0utFrDLA-n9F3gaXBepVYL6lXq8.jpg",
    prompt: "Fantasy photo, mythical themes, imaginative settings, magical elements"
},
{
    styleName: "Film noir",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/l5MiJQF_k-6BoVLYbD6-TWmhXafCgL67WytYKnHk3Co.jpg",
    prompt: "Film noir, black and white, moody atmosphere, dramatic shadows"
},
{
    styleName: "Fine art photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/U7cXpVFEyMwyA7v5rFOk4QliIUiwRSlGddcWcOVic-c.jpg",
    prompt: "Fine art photo, artistic interpretation, high aesthetic value"
},
{
    styleName: "Fish-eye",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/VEDzbKYffC-JZ3cjc-pXTAGvHGy8OxrK6xZp5M49_vA.jpg",
    prompt: "Fish-eye, ultra-wide angle, curved distortions, dramatic"
},
{
    styleName: "Fisheye lens",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/0wAvEew0GyxflMyEZXsmivbKSAZs9DJUOvo1VW1Bzu4.jpg",
    prompt: "Fisheye lens, wide distortion, bulbous effect"
},
{
    styleName: "Flat design",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/qLc9TiiT3B9ELOSwybKCp4kZUZwv0r6s51hbZ7QbLQs.jpg",
    prompt: "Flat design, minimal, clean, modern"
},
{
    styleName: "Flat lay",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/YaVDLoQPjAwVqBReQXHx8RNRvgwqNsvFBve42lhqEJs.jpg",
    prompt: "Flat lay, top-down view, arranged items, organized"
},
{
    styleName: "Folk art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Ozqv3zk1oMPTr4t_zY_MZt2NGtROu-CNm5-fHy32h1U.jpg",
    prompt: "Folk art, traditional, cultural, handcrafted"
},
{
    styleName: "Food photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/aWqWwHxsWE3IeJC1GlC5vkCjhzVmE_Vz-yr6oRIGiNY.jpg",
    prompt: "Food photo, appetizing dishes, styled plating, close-up"
},
{
    styleName: "Freeze frame",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/QOphXNGk1azavCZCVlDPGbZI70W_vL1SqPrCGMiLy_c.jpg",
    prompt: "Freeze frame, paused action, clear detail, moment in time"
},
{
    styleName: "Futurism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/IjNm8eFIpfu98dSWR2XlMTBXYuBvtVcTJvEwrcvd-Ic.jpg",
    prompt: "Futurism, dynamic lines, machine aesthetic, modernism"
},
{
    styleName: "Futuristic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/4NGMbdIDYJP3eRfCibg8k3Lipa3nmbb6Cku04oONpzI.jpg",
    prompt: "Futuristic, advanced technology, sleek design, sci-fi elements"
},
{
    styleName: "Glamour photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/qlVoVHVbVcCAw3S3nlI6nMVn_zBSf__RFawDLLtkcko.jpg",
    prompt: "Glamour photo, stylish, beauty shots, flattering light"
},
{
    styleName: "Gothic horror",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/XAFBrk_R6Ctg1imNCvDcehPr46nKuww-BcOE-oU8JQo.jpg",
    prompt: "Gothic horror, dark setting, haunting themes, vintage"
},
{
    styleName: "Hand-drawn animation",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/HfDL9fhFYzjKN9Ws7cLgZJagLeMIRXxZRmlhgXmvOBA.jpg",
    prompt: "Hand-drawn animation, traditional, artistic"
},
{
    styleName: "High contrast",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/F0iIKuk9-iviOgqYFNUH90uWZo4tExzk5NYIyqVh_DI.jpg",
    prompt: "High contrast, strong highlights and shadows, bold colors"
},
{
    styleName: "High poly",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ExS81XPv5jGrhvMiBkVjOkWRMV9xPAJTAjdsFOrQfyY.jpg",
    prompt: "High poly, detailed 3D model"
},
{
    styleName: "Horror",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pycDnKekFxdYDtbARV2mGUdogNjAh5CK2XnBS8d5Fx0.jpg",
    prompt: "Horror, eerie, scary, dark atmosphere"
},
{
    styleName: "Hyper realistic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/4LKSTPFn6SXVLGvTRqAHRaTY3afU8rGzHW6iertXT48.jpg",
    prompt: "Hyper realistic, lifelike detail, meticulous, true-to-life"
},
{
    styleName: "Impressionist style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LNRvcw5RHGLZOCDRbuuiZ4gzakaf8AMqd0hK7XSxu0E.jpg",
    prompt: "Impressionist style, soft focus, painterly effect, vibrant colors"
},
{
    styleName: "Industrial",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/qJQH6yZgbnlq8HQh6HPD3SyfMTaRyj6HMYLxOP9ITiA.jpg",
    prompt: "Industrial, factories, machinery, urban grit"
},
{
    styleName: "Folk art style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/RWFHyKGHsxWTaP31KjbC3AqNxcZ8Sf9TCfOkl_nxjfk.jpg",
    prompt: "folk art style, figure crafted, showcasing traditional, cultural, and handcrafted elements"
},
{
    styleName: "Low angle",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/e9F7ziA4OLAm2gO00J7hrGqq_XL-wXDQRNZK0IBasNA.jpg",
    prompt: "Low angle, looking up, powerful perspective, dramatic"
},
{
    styleName: "Low contrast",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/tqurNbC0aOpQE44g77Y3IBxSwjUL8c_tjGs83wp5UHY.jpg",
    prompt: "Low contrast, muted colors, soft tones, gentle transitions"
},
{
    styleName: "Low poly",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/4VY-npRYZCN8icQ8_A0z3ED1K--_SWib8mw8u9PmdyQ.jpg",
    prompt: "Low poly, geometric, polygon shapes"
},
{
    styleName: "Magazine style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ZFaumvILDzdO9doD6QYhFeOSEmgMrn5xuieSGskUCwA.jpg",
    prompt: "Magazine style, polished, editorial, professional look"
},
{
    styleName: "Magical realism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/bjBpZLnMbPme5x1_6mh_AENZwg2v6udBW9kzR55muuQ.jpg",
    prompt: "Magical realism, everyday with magical elements, subtle magic"
},
{
    styleName: "Makeup transformation",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KNZu8-cG8BdHRMt2fyxr9--ZRcfTnJQU39vO5-qEq0k.jpg",
    prompt: "Makeup transformation, dramatic change"
},
{
    styleName: "Manipulated",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/0u4w9opD5-KGBfmnOjM3WjKzawd5g9iR6bcbHSMtHy4.jpg",
    prompt: "Manipulated, digitally altered, surreal"
},
{
    styleName: "Masked portrait",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/dsnbJYI33nrRTmkbTsHKwC3VlUax0FHDiUEQRaej7sM.jpg",
    prompt: "Masked portrait, concealed identity, dramatic, mysterious"
},
{
    styleName: "Medical",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/orWeE_zNl33utvOMdVTniW6Mp4WAV89O6wlXmmiuVKU.jpg",
    prompt: "Medical, clinical, healthcare, scientific"
},
{
    styleName: "Mid-century modern wedding",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/7Jxhb4WDKT9Q51Xq0gDDA9gey5eZFW8tFf1ufo3HiYM.jpg",
    prompt: "Mid-century modern wedding, 1950s-60s, retro"
},
{
    styleName: "Minimalist",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/BKTrYJTp1shcTw-CUDtXVzcmRIPipFYDfKrdaqzjCFM.jpg",
    prompt: "Minimalist, clean lines, simple composition, few elements"
},
{
    styleName: "Mixed media",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/07YGhNxzfhbNvIyB3IgF_jUK3SC9dS64hiApRL6xjpM.jpg",
    prompt: "Mixed media, various materials, artistic combination"
},
{
    styleName: "Modern",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/EssE-_lXE6VjVv0ziMpyZy4cxDQuP9v11TKTW0bIpeM.jpg",
    prompt: "Modern, contemporary, clean lines, current style"
},
{
    styleName: "Monochrome photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/k7WBI5Cghbig_arOMA1K-2eSGrgjO7IlKeMeKIdgyA0.jpg",
    prompt: "Monochrome photo, single color tone, varying shades"
},
{
    styleName: "Moody photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LPbEzSoOfqJGL-oHuv39A3viT3d8faAjFBkkFyy2Nas.jpg",
    prompt: "Moody photo, dark tones, atmospheric, emotional"
},
{
    styleName: "Motion blur",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/iaKX8lhvMyAnTH_4RSzPK2L7MahVmTUOcp-3ZytxP0E.jpg",
    prompt: "Motion blur, sense of movement, blurred elements, dynamic"
},
{
    styleName: "Multiple exposure",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/fz781C9tYbqDJAV4rxSCo0MW1fABXhl_Od1dmwvMIoQ.jpg",
    prompt: "Multiple exposure, several overlapping shots, experimental"
},
{
    styleName: "Mythological",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/nBjcXwnGykUxwftglBpbgNQQ46WhFa8x2ISkbu__pLw.jpg",
    prompt: "Mythological, ancient legends, mythical creatures"
},
{
    styleName: "Neon glow",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/IM-KcWaA0nDk5-PgxnMYEkTrisErPWvewtfcxBCIWo0.jpg",
    prompt: "Neon glow, luminous, bright colors"
},
{
    styleName: "Noir",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/944qERkWEE4J2yoxHBHVBdpboRYhrnD7pe8w8-61T-Y.jpg",
    prompt: "Noir, dark, moody, detective aesthetic"
},
{
    styleName: "Oil Painting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/z0A8c4JtnmDeqA3invBh7JW3ZUX9eYduaB0ATwWCaxg.jpg",
    prompt: "Oil Painting, Converts an image to resemble an oil painting with visible brushstrokes"
},
{
    styleName: "Op art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/NSk6zu4Yufy9Dt5fKUULXlb9oNn7_xA6XvgHvfFdkTc.jpg",
    prompt: "Op art, optical illusions, visual effects, movement"
},
{
    styleName: "Overexposed",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/xwi0akcw_DqfzNXw2zmBiEf4ptyBiA2Mse6qFlkQhyo.jpg",
    prompt: "Overexposed, bright light, washed out, high exposure"
},
{
    styleName: "Panoramic photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/SzImqD8BIY-HFawEnyatGI7OnCXLWphEeLa92B8wFZk.jpg",
    prompt: "Panoramic photo, wide view, landscape sweep, stitched image"
},
{
    styleName: "Pastel colors",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/EXcOmmSvUGJaAob9pgA1cEOLTbjG9ELrSsl1ReWV-cs.jpg",
    prompt: "Pastel colors, soft tones, gentle hues, calming effect"
},
{
    styleName: "Photo collage",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/boHWJwYkLZ1WaDFamxSyQMTaF8l05xClOucu-I2t7IA.jpg",
    prompt: "Photo collage, multiple images, creative layout, mixed media"
},
{
    styleName: "Photogrammetry",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/iXObCPMWeoU0_4YfncKnUWNoZ7kMhUSG7Iy4sKbG_AI.jpg",
    prompt: "Photogrammetry, 3D scan, high detail"
},
{
    styleName: "Pixelated",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/8VKucdA77NwSvr4wcTsElj7d8FPxZQhOMnWJBm9gULg.jpg",
    prompt: "Pixelated, digital pixel effect, low resolution"
},
{
    styleName: "Pointillism",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/nWX7etGquPoLhxfBcDZvlnwoTCKYaqemoTB64Ws1a0E.jpg",
    prompt: "Pointillism, dots, impressionist technique"
},
{
    styleName: "Polaroid style",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ghIBE4gAsBVFf_Q1eSxdEYkTUATUHVuTKjIl-PcD2Kw.jpg",
    prompt: "Polaroid style, instant photo, white border, retro look"
},
{
    styleName: "Pop art",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/01R2mJzHiw9anwoEDhElPsYq2vYShh5KpHZRgym_oIA.jpg",
    prompt: "Pop art, bright colors, bold outlines, cultural references"
},
{
    styleName: "Portrait photo",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/4Dih04N2GyQniMhx4RowytPa4mnt-782xhAUQYr6roE.jpg",
    prompt: "Portrait photo, headshot, expressive face, person-focused"
},
{
    styleName: "Post-apocalyptic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/xEUX96XV14laZuXt9S-N4j6m1Y6T4WUA9w5TTK449NM.jpg",
    prompt: "Post-apocalyptic, dystopian, ruined world, survival"
},
{
    styleName: "Prismatic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/oeiNZfuD9Pn0wb3nSUH-2zQMEGAXB8RMgfU55-fXDB4.jpg",
    prompt: "Prismatic, light refraction, rainbow effect, colorful"
},


// emotional styles 😀😁😂

{
    styleName: "Exaggerated Laughter",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/_rNaUoMSHAn9GpDvmPj7FxgAXY_CmHQJCndcx8CoYhY.jpg",
    prompt: "Exaggerated Laughter, Wide-open mouth, eyes squeezed shut, uncontrolled giggles"
},
{
    styleName: "Rolling Laughing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/4ZBeO3X7R6yC6fuH2BAAIV8zi-_trvL_yXbKuQh8ATE.jpg",
    prompt: "Rolling Laughing, Body sprawled out, tears of joy, clutching stomach"
},
{
    styleName: "Comically Surprised",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/WpNVNChlyVBsyOvP2HifRJ0fIQuK9hQWVUQMPd9W4x0.jpg",
    prompt: "Comically Surprised, exophthalmos, mouth agape, exaggerated gasp"
},
{
    styleName: "Belly Laugh",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/7BJeVNvbgfFP1Q_tyMPOdO03MVFFEhsHR28O_mDse34.jpg",
    prompt: "Belly Laugh, Shaking with laughter, holding sides, hearty chuckles"
},
{
    styleName: "Playful Winking",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/k92LZbl_eAR_l-YUDLoynKcAuxa2CLNA-2KLANIFyhs.jpg",
    prompt: "Playful Winking, Over-the-top wink, cheeky smirk, exaggerated tongue-out"
},
{
    styleName: "Goofi Face",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/xmWuhYZA2Kq74KMdGyWNlx1fgylnghPwSE5lArKNBeo.jpg",
    prompt: "Goofi Face, Crossed eyes, lopsided grin, exaggerated facial contortions"
},
{
    styleName: "Zany Smile",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/gzSN8HGEgwOINoRpRAYTrw6_svhcAw65TjFxGbnqZUE.jpg",
    prompt: "Zany Smile, Wide, crooked grin, sparkling eyes, mischievous expression"
},
{
    styleName: "Bursting with Laughter",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/hMBlGpQula6wEISd-rTo34mxeONOev5nAySGebUXVqo.jpg",
    prompt: "Bursting with Laughter, Face flushed, mouth wide open, clutching chest"
},
{
    styleName: "Hilarious Shock",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/gzYsCslt-lF1v3VVtrSFKTzVeuDtGsaWmJKiBP6lRLU.jpg",
    prompt: "Hilarious Shock, Jaw dropped, hands on cheeks, eyes wide in amusement"
},
 {
    styleName: "Silly Grimace",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ok0p315FWyDCMj3e0V4iVu-jT0rJcQ1LIo65W8y4WRs.jpg",
    prompt: "Silly Grimace, Twisted mouth, scrunched nose, playful squinting"
},
{
    styleName: "Teary-Eyed Happiness",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/YiLz3QdQFHI-C1hmpad5uadVEqu28plkPAHoNSRXMwA.jpg",
    prompt: "Teary-Eyed Happiness, Streaming tears, joyful grin, eyebrows raised"
},
{
    styleName: "Hyperactive Chuckling",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Ww1HPxEawFEUeM6Kcg5CvbI5KF-qBhMo64SnkFKa3Qo.jpg",
    prompt: "Hyperactive Chuckling, Body shaking, rapid laughter, wide-open eyes"
},
{
    styleName: "Mock Sincerity",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ne7nOwtTowtm9np0W_fRIRji68vQghaGLmfpIrQmGsg.jpg",
    prompt: "Mock Sincerity, Overdone earnest look, exaggerated hand gestures, playful"
},
{
    styleName: "Cheeky Grin",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/afdaCNZo_GOY1Y86C6AE7DabogfuDWol_zpHG7YAnAg.jpg",
    prompt: "Cheeky Grin, Big toothy smile, tilted head, eyes glinting mischievously"
},
{
    styleName: "Laughing Fit",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/55XtW4lFjTwxewkan29PJW1IOoU0R9PL86dtWXN-Rac.jpg",
    prompt: "Laughing Fit, Red faced, eyes streaming, uncontrollable giggles"
},
{
    styleName: "Dramatic Eye Roll",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Vv457tgNm8z-V_P2tsicSis2JKILII-OW01Sa1UK8NU.jpg",
    prompt: "Dramatic Eye Roll, Eyes rolling exaggeratedly, playful sigh, mock disdain"
},
{
    styleName: "Slapstick Crazy",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/OQN12GsDAVGdpIffTWjTPZDby1_zCzqY4mAXD1rP5x8.jpg",
    prompt: "Slapstick Crazy, Exaggerated flailing, comical bewilderment, wide-eyed"
},
{
    styleName: "Crazy Laughter",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/djHXMd7Od1LChmokKit3aMonFZ8OrGtUf4TU7TMh9Is.jpg",
    prompt: "Crazy Laughter, Spirals in eyes, cackling wildly, arms thrown up"
},
{
    styleName: "Gleeful Overreaction",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/J46NKb2JhPU6_3pGW32jnlpcGsEX5hcN3XKxRJQi5RI.jpg",
    prompt: "Gleeful Overreaction, Big wide eyes, exaggerated head tilt, wide-open smile"
},
{
    styleName: "Exuberant Guffaw",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/xZhfRtcTRusiiOmKdx6RWaVm4IKfzxPLEQbG91kohWw.jpg",
    prompt: "Exuberant Guffaw, Hands clapping, head thrown back, boisterous laughter"
},
{
    styleName: "Cheeks-in -Hand Chuckles",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/8cAiNgdWR3fn22YA8pq18JzSmwDvx4fU5vFdX_aHp90.jpg",
    prompt: "Cheeks-in-Hand Chuckles, Resting chin on hands, eyes bright with amusement"
},
{
    styleName: "Tilted Head Jester",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/RbecNFRWBxG5j4wHd-PdHZi1RGmy0oS35GOmxUTMkL0.jpg",
    prompt: "Tilted Head Jester, Head cocked to one side, sly smile, playful eyes"
},
{
    styleName: "Eyebrow Wiggle",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/lbGKPiPpcDOneFm-kWdBfPHDLjRI6l1zcSf6VBVzLq8.jpg",
    prompt: "Eyebrow Wiggle, Rapid eyebrow movement, cheeky grin, knowing wink"
},
{
    styleName: "Fish Gape",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/z1R6On-fZFA7xMFmZQBYmERsmapJe40bY28ccAIcK2k.jpg",
    prompt: "Fish Gape, Wide-open mouth, puckered lips, wide eyes"
},
{
    styleName: "Fake Serious Pout",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/zq0Xz-r_k5mIUkZpqlO7MHPd1bVVGwXkUD8gJ-In11w.jpg",
    prompt: "Fake Serious Pout, Purse lips, narrowed eyes, exaggerated seriousness"
},
{
    styleName: "Wide-Eyed Grin",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/-SvHVIzEZBMkwz1fYkuhTDsTpBIaYCVfZxYE4VzDHkE.jpg",
    prompt: "Wide-Eyed Grin, Big smile, eyes wide open, enthusiastic expression"
},
{
    styleName: "Finger Guns and Wink",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pWoDrltgeykG7Vp35TJl8XOX0koCA_XLNUywoy9vthU.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Finger Guns and Wink, Pointing fingers like guns, exaggerated wink"
},
{
    styleName: "Tongue Out Concentration",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/g0NjMaNc7XdbMEs9IqRNFOhnBWPvOBNJVGVB115lU00.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Tongue Out Concentration, Tongue sticking out, brows furrowed, comical"
},
{
    styleName: "Chipmunk Cheeks",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ZTEPZFKj-m1nJMTDPYls5uEuOs4wGQjuntYGXbY3Pdg.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Chipmunk Cheeks, Puffing out cheeks, wide eyes, curious smile"
},
{
    styleName: "Air Kiss Blow",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/VY4EC2lroGohGuh9dgWSYU2gNGGeyLuhLVFPRQCLMng.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Air Kiss Blow, Exaggerated puckered lips, blowing kiss into the air"
},
{
    styleName: "Mock Sympathy",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Y91PFvzFUNqb2mIfuU0PP1NnBoxIp79uYagUfBhHg7w.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Mock Sympathy, Over-the-top pout, wide eyes, hand to heart"
},
{
    styleName: "Hysterical Clap",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/XjyLv544shKjhlB_5-z5Jebzdn3uu9RGexkaEZdyJgs.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Hysterical Clap, Clapping hands, laughing uncontrollably, head thrown back"
},
{
    styleName: "Exaggerated Yawn",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Zui1Jv_q9WYCVYJPkAkx8uPdShYQgEylVLRITA3bwc8.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Exaggerated Yawn, Stretching mouth wide, eyes watery, playful sleepiness"
},
{
    styleName: "Backwards Sneer",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/G9xfeR_g29Dn4xlu5zEcTWYFKtMHQhnhe7EQYhn7XAI.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Backwards Sneer, Lopsided grin, squinted eye, playful sneer"
},
{
    styleName: "Twinkle Eyed Grin",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/CTSUcKX3ce82EzUfh83Mt324mlZK-9kwT5XXq3e4OTU.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Twinkle Eyed Grin, Eyes sparkling with mischief, wide, playful grin"
},
{
    styleName: "Major Facepalm",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/c7IWt6sSIyxLw8pKu9huGjP8wLiq9C-9TZ5BIUhdW7g.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Major Facepalm, Slapping forehead, exaggerated frustration, playfully dramatic"
},
{
    styleName: "Sardonic Smirk",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/4QQyEEypU-SB9RlFi6RCWFNbAAzY02TgMYe7Db-GcOs.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Sardonic Smirk, Curled lip, side glance, humorous skepticism"
},
{
    styleName: "Giggling Fit",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/m9mArikMZKDtqc_YOGy-at762s9Z41oo70_NGWEldcA.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Giggling Fit, Slapping knee, tears of joy, uncontrollable laughter"
},
{
    styleName: "Cheshire Cat Smile",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/qynhx2zsEHvsTaJAg2_9G4Oj6bOqWBBzPfxgOmG5VD4.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Cheshire Cat Smile, Enormous grin, eyes narrowing playfully, mystery"
},
{
    styleName: "Mock Panic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/N0f47AHPPCN4QFvb4SWvaUxKa6HGFq2RwtLJu3358ls.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Mock Panic, Hands thrown up, wide eyes, exaggerated gasp"
},
{
    styleName: "Bulging Eyes",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/n9A_hQrZjVuKAyf_Ojmj8xi-6lEFoOPfLpHoK-59wns.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Bulging Eyes, Eyes wide and popping, mouth agape, shock mixed with humor"
},
{
    styleName: "Dizzy Spin",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/8AgejFom1OKJxHIMRzjxfYRjnzSuw4BRpPhi-92ps9k.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Dizzy Spin, Eyes swirling, spinning head, dazed but amused look"
},
{
    styleName: "Head Tilt Chuckle",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/lbdjKgYiHFJ79lh_GVzT__zgnaZFS6-UsW61TrxO_x0.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Head Tilt Chuckle, Head tilted back, hearty chuckle, joyful eyes"
},
{
    styleName: "Over-The-Top Wink",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/9Anx9TmwtEW_0Ki70Q_xfGQvHC6AGLdMEAOr5pCqRGo.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Over-The-Top Wink, Exaggerated wink, cheek raised, playful grin"
},
{
    styleName: "Fearsome Giggle",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/x2wzrj7GS4V1xeyYIIB89Y22TM5mLGnoqUqH4NaRucU.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Fearsome Giggle, Trying to look scary while giggling, mock-serious"
},
{
    styleName: "Crinkled Nose Smile",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/I4NQ9mc4HdUl4vMvn-ModV13DysINstZTSGxxwdfRPo.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Crinkled Nose Smile, Nose wrinkled in delight, wide grin, squinted eyes"
},
{
    styleName: "Double Take Look",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/RyQH1uqj-qHRkj14t2-iLlYxyoNPwe1ThectAA8XCUU.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Double Take Look, Quick head turn, confused then amused expression"
},
{
    styleName: "Exaggerated Bashfulness",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/-_dzcceEfGzov5oFLVF_Zx17RjJzRVEzwEWMg3AIMRM.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Exaggerated Bashfulness, Covering face with hands, peeking through fingers"
},
{
    styleName: "Deadpan Stare",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Fe209ER3xTJpp4GgjBYKzsXc3jT1iIeUEreDnMcD6gQ.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Deadpan Stare, Blank face, subdued burst of laughter afterwards"
},
{
    styleName: "Mock Lost",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/awJiQ7mZO2pXOJuuTYZa1QTZ83jqs3wwDvZKt_AH6DY.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Mock Lost, Scratching head, puzzled yet comical expression"
},
{
    styleName: "Awkward Waving",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/TZgKM9bDbnnu94TT-YTA9gFxC7ovjdyOgfQKMzgMwSc.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Awkward Waving, Shy wave, embarrassed chuckle, wide smile"
},
{
    styleName: "Juggling Eyes",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/RBnEVOX0B4R8SNsU8q-GWq5yk30e53KmKeMvQmDxd9U.jpg",
    prompt: "Sheer Kimono + Silk Nightgown, Juggling Eyes, Rapid eye movement, mock focus, amused"
},
{
    styleName: "Crisscross Eyes",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/PLACEHOLDER.jpg", // Placeholder for the last image
    prompt: "Sheer Kimono + Silk Nightgown, Crisscross Eyes, Description goes here"
},
{
    styleName: "Peeking Between Fingers",
    prompt: "Sheer Kimono + Silk Nightgown, Peeking Between Fingers, Hands covering face, peeking curiously",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/5Xl0_lFdJnh8W2ui0Cc27OfIkLZBrWYOT89i4MpkOCs.jpg"
},
{
    styleName: "Delayed Reaction Gasp",
    prompt: "Sheer Kimono + Silk Nightgown, Delayed Reaction Gasp, Slow to realize surprise, exaggerated gasp",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/lrq8HKUJxmsatSWW0x9Kxb6bpNZJ2FKwA3GTlcaIkm8.jpg"
},
{
    styleName: "Gobsmacked Glance",
    prompt: "Sheer Kimono + Silk Nightgown, Gobsmacked Glance, Mouth open in astonishment, humorously exaggerated",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/GGD9t3zvGf3YIShfscA0Dn_P5tkUIdoJ4n5f8xc-xoE.jpg"
},
{
    styleName: "Knee-Slapping Laughter",
    prompt: "Sheer Kimono + Silk Nightgown, Knee-Slapping Laughter, Bent over double, hand slapping knee, joyous laugh",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Z8p-1L5pCc0wscPUeVzrETrcIfOL7SYna8MwlWSFU3E.jpg"
},
{
    styleName: "Boisterous Roar",
    prompt: "Sheer Kimono + Silk Nightgown, Boisterous Roar, Mouth wide open, roaring with laughter, animated expression",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/CR5JKEKRcSYCFQJORmDpUSJvbPQ6s7ei7JahF9sG1Go.jpg"
},
{
    styleName: "Fake Pious Look",
    prompt: "Sheer Kimono + Silk Nightgown, Fake Pious Look, Hands in prayer position, exaggerated sanctimoniousness",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/CHEkGWsSr-bupxSf1NMOLDlLN-jWXBOlCb3sFMUtFpc.jpg"
},
{
    styleName: "Overwhelmed by Adorability",
    prompt: "Sheer Kimono + Silk Nightgown, Overwhelmed by Adorability, Clutching chest, eyes wide, dramatic swoon",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/brg4ZLOhddqCEC18oUg6i_zAzH8Xb6T5nLRld2Ks-Mk.jpg"
},
{
    styleName: "Confetti Explosion Laugh",
    prompt: "Sheer Kimono + Silk Nightgown, Confetti Explosion Laugh, Imagining confetti bursting while laughing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/xt6o2cFqdYdg-IF_tUb8luy8_pGFuWdbTzWek4zAFFw.jpg"
},
{
    styleName: "Overjoyed Frog Leap",
    prompt: "Sheer Kimono + Silk Nightgown, Overjoyed Frog Leap, Jumping up like a frog, laughing all the way up",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/F6nGljhiD-ZHwX-yLtk0SgSTXpuSQ8yC4FbttlK7JTU.jpg"
},
{
    styleName: "Slow-Mo Laugh Wave",
    prompt: "Sheer Kimono + Silk Nightgown, Slow-Mo Laugh Wave, Pretending to laugh in exaggerated slow motion",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/ibfTvnNey43lG2DleXPFfPk-xJRZ5K1RhOhLeXVAXQw.jpg"
},
{
    styleName: "Swollen Cheek Chuckle",
    prompt: "Sheer Kimono + Silk Nightgown, Swollen Cheek Chuckle, One cheek full of air, goofi smile",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/KvSQsuOAcJOvdZyndmvWL19eH_lD8F21RKNx35nIoz4.jpg"
},
{
    styleName: "Epic “Eureka!” Moment",
    prompt: "Sheer Kimono + Silk Nightgown, Epic “Eureka!” Moment, Wide eyes, pointing finger up, big grin",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/DIiLuePtEGyN_6C1-sVB8C-aWniD41UVxZFOCtx7B8M.jpg"
},
{
    styleName: "Failed Whisper",
    prompt: "Sheer Kimono + Silk Nightgown, Failed Whisper, Mouth exaggeratedly forming a whisper, eyes darting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/F2F1xXzqIRyxe-RBGbIveDb3CZq5eRfu4YCscBiL0QE.jpg"
},
{
    styleName: "Overly Exaggerated Bow",
    prompt: "Sheer Kimono + Silk Nightgown, Overly Exaggerated Bow, Deep, theatrical bow, with a mischievous smile",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Wu2v-YOIN0qy0n8dB9JtEBVzB0Q1kQ1szK8Q-T4sTn4.jpg"
},
{
    styleName: "Behind-The-Back Peek",
    prompt: "Sheer Kimono + Silk Nightgown, Behind-The-Back Peek, Looking over shoulder with a playful expression",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/zNAZbdS1aCOjNEngR3w-fpN2c03OC48C0bn2b0SqP5Q.jpg"
},
{
    styleName: "Laughing Against the Wind",
    prompt: "Sheer Kimono + Silk Nightgown, Laughing Against the Wind, Pretending to resist the wind with laughter",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/cEaX4aIhcDGp0kVgMk5WnXcAY8k5Gj_Soy3U8plqUco.jpg"
},
{
    styleName: "Exaggerated Confusion",
    prompt: "Sheer Kimono + Silk Nightgown, Exaggerated Confusion, Crazy eye movements, goofi grin, scratching head",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Uaaii_Yu3w89MRI_B4EsrAkprBOvDecN3K7rrtsn5vs.jpg"
},
{
    styleName: "Suddenly Serious Look",
    prompt: "Sheer Kimono + Silk Nightgown, Suddenly Serious Look, Quick shift to serious face, burst of laughter",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/XrasQxq5Yi3PrPV0BNqfhVl7DsaaEfK0X9ryKqgVjKI.jpg"
},
{
    styleName: "Squeaky Toy Scream",
    prompt: "Sheer Kimono + Silk Nightgown, Squeaky Toy Scream, High-pitched scream, eyes wide, playfully scared",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/rkSbeCSqXstEpGokTB0_4BmN2f54ZvhcDAuHhklU8Ic.jpg"
},
{
    styleName: "Dramatic Helpless Gasp",
    prompt: "Sheer Kimono + Silk Nightgown, Dramatic Helpless Gasp, Flailing hands, wide eyes, theater-style gasp",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/mEwza31Joe0VP4R6-6a3bGgfnMQI2746yJG2fHFgxK4.jpg"
},
{
    styleName: "Pirate Cackle",
    prompt: "Sheer Kimono + Silk Nightgown, Pirate Cackle, Hand over one eye, loud cackling laughter",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/_QwePhCnJLkdUuojBJ0ZLkGlKH468fsZE1LYzaiuQ1U.jpg"
},
{
    styleName: "Imaginary Rope Pull",
    prompt: "Sheer Kimono + Silk Nightgown, Imaginary Rope Pull, Pretending to pull an invisible rope, funny struggle",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/TJUR4Ksl6fCHlLWlNjsxUFdHVOeXc68RafU6TxWmnMU.jpg"
},
{
    styleName: "Epic Fall Pretend",
    prompt: "Sheer Kimono + Silk Nightgown, Epic Fall Pretend, Fake trip, over-exaggerated fall, delighted smirk",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/yddA2aXbCQByMk3whcTS27im6ses7etMbK8_LLE5ZgM.jpg"
},
{
    styleName: "Trampoline Hilarity",
    prompt: "Sheer Kimono + Silk Nightgown, Trampoline Hilarity, Pretending to bounce up with an infectious laugh",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/xi_jvFg8WZEMaaRhKuWBDryZIAoHoNMba20s90ZCPtw.jpg"
},
{
    styleName: "Invisible Wall Bump",
    prompt: "Sheer Kimono + Silk Nightgown, Invisible Wall Bump, Walking into an invisible wall, funny reaction",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/WxjdvsyfyBE0k9pKn2Fge37eSE-ea_ij6ISya_RC6oE.jpg"
},
{
    styleName: "Mad Scientist Laugh",
    prompt: "Sheer Kimono + Silk Nightgown, Mad Scientist Laugh, Manic cackling, rubbing hands together",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/yCwICx_KFEcIMzA94yOvznJXayYBjiXts2T_vyxCCD8.jpg"
},
{
    styleName: "Dizzy Dance",
    prompt: "Sheer Kimono + Silk Nightgown, Dizzy Dance, Pretending to spin around while laughing",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/PLACEHOLDER.jpg" // Placeholder for the last image
},
{
    styleName: "Volcano Eruption Chuckle",
    prompt: "Sheer Kimono + Silk Nightgown, Volcano Eruption Chuckle, Humourously expanding cheeks, explosive laughter",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/7Kb6TYUIJ8PEAy2AhB5yOJVeVLRbH9KYGABIJe4nE9E.jpg"
},
{
    styleName: "Shuffling Feet Snicker",
    prompt: "Sheer Kimono + Silk Nightgown, Shuffling Feet Snicker, Shyly shuffling, wide grin, playful glance",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/as_vhaBK_Vm-FE9mHkh3auv2Rr2zXU5e3e10YS4f604.jpg"
},
{
    styleName: "Imaginary Lasso Swing",
    prompt: "Sheer Kimono + Silk Nightgown, Imaginary Lasso Swing, Pretending to swing a lasso, cowboy laughter",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/DutwJ8d3EY5Z-zZBWT40HUobuyvyZfdVQVOP9B8UkHU.jpg"
},
{
    styleName: "Emotion Overload Wiggle",
    prompt: "Sheer Kimono + Silk Nightgown, Emotion Overload Wiggle, Excitable full-body wiggle, face scrunched in joy",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/LDiWTGoX0qRDwiRXN2qEFJr9xvlGFxJN2CHrhVuw5Qs.jpg"
},
{
    styleName: "Roly-Poly Laughter",
    prompt: "Sheer Kimono + Silk Nightgown, Roly-Poly Laughter, Rolling around while laughing, uncontrollable joy",
    imageSrc: "https://placehold.co/50x50"
},
{
    styleName: "Twitching Nose Giggle",
    prompt: "Sheer Kimono + Silk Nightgown, Twitching Nose Giggle, Cute nose twitching, bubbly giggles",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/fPF6ypmQh3PvrS4xrA7DfLIUoEMr0MiY2g_aiywE8ig.jpg"
},
{
    styleName: "Nonsensical Expression",
    prompt: "Sheer Kimono + Silk Nightgown, Nonsensical Expression, Making funny, nonsensical face for fun",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/RxxOhQ9o00z61kjEC4HSxbHhRyoKEcfPwHB-1nxmrK8.jpg"
},
{
    styleName: "Pretend-Whisper Secret",
    prompt: "Sheer Kimono + Silk Nightgown, Pretend-Whisper Secret, Exaggerated secret-sharing, super animated",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3JVVqmBcj18_OjHXZtkxcCDr3d8m5fimilVSzaGx-NY.jpg"
},
{
    styleName: "Overestimated Wink",
    prompt: "Sheer Kimono + Silk Nightgown, Overestimated Wink, Trying too hard to wink, exaggerated eyes",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/EOg4ASYSbR6rkOiDxowKojMbJgJR397_2G5Xwf5Gbqs.jpg"
},
{
    styleName: "Imaginary Prize Winner",
    prompt: "Sheer Kimono + Silk Nightgown, Imaginary Prize Winner, Acting like winning a trophy, big smile, pointing gesture",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Oc6mFXnikKpGgoYNsytXOgCW3C6zUrRg_iwcxeU1tqE.jpg"
},
{
    styleName: "Mascot Dance Cheer",
    prompt: "Sheer Kimono + Silk Nightgown, Mascot Dance Cheer, Pretending to be a team mascot, goofy dance, cheerful laugh",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/W9cADmZIJN7h5Tny8Br1JrshK7DaU_5GP3b8yXs37Tg.jpg"
},
{
    styleName: "Magic Trick Surprise",
    prompt: "Sheer Kimono + Silk Nightgown, Magic Trick Surprise, Acting amazed by imaginary magic trick, wide-eyed",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/3wg0LxuKc0hyrWIEbAqW4hgi2u_i5CG9hvV_E4tlsHE.jpg"
},
{
    styleName: "Full Tooth Smile Grit",
    prompt: "Sheer Kimono + Silk Nightgown, Full Tooth Smile Grit, All teeth showing, eyes gleaming, huge smile",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/xOXSX-WPnvGD8QGVmpMyK-q2zGeNAgIwgzzEfkAd_pg.jpg"
},
{
    styleName: "Synchronized Snapping",
    prompt: "Sheer Kimono + Silk Nightgown, Synchronized Snapping, Pretending to snap fingers in rhythm, joyful grin",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/pCHneS7F8f9afQ9WZ0JqurTYiIkiPAfGOD1Au1X7650.jpg"
},
{
    styleName: "Joyous Foot Stomp",
    prompt: "Sheer Kimono + Silk Nightgown, Joyous Foot Stomp, Stomping one foot happily, arms open wide",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/l-bwq1Hopk2o41QmjU-62Ocd2YMsDD362eqlxQMCSDk.jpg"
},
{
    styleName: "Invisible Tug-of-War",
    prompt: "Sheer Kimono + Silk Nightgown, Invisible Tug-of-War, Pretending to pull against an imaginary force, delighted struggle",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/HA--2IywSGfN4ZctMis_gHqiKTp3R0ShcNuEiJq4bhs.jpg"
},
{
    styleName: "Dramatic Water Splash",
    prompt: "Sheer Kimono + Silk Nightgown, Dramatic Water Splash, Fake splash reaction, wide eyes, animated gestures",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/12JTMied-oYtWzzYoVUUQbnao8F37UoOCvh7m6AV9O8.jpg"
},
{
    styleName: "Imaginary Jazz Hands",
    prompt: "Sheer Kimono + Silk Nightgown, Imaginary Jazz Hands, Flashing spirit fingers, unease satisfaction, sparkling eyes",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/0J-pfWMtIHtxtNw_jllXr7dltTq6_xmAhbRJLRDTV4A.jpg"
},
{
    styleName: "Mock Surprise Peek-a-Boo",
    prompt: "Sheer Kimono + Silk Nightgown, Mock Surprise Peek-a-Boo, Peering through hands, mock surprise",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/1TrneLCLbHd-V89aLxFYN87Zoc3DrliqjLn9fJ0hhcU.jpg"
},
{
    styleName: "Beaming Halo Glow",
    prompt: "Sheer Kimono + Silk Nightgown, Beaming Halo Glow, Imagining a halo, innocent smile, wide eyes",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Id5Lgq3ue761ebsY2VwSQkvYk9yk0kOU64iaMT3ukpg.jpg"
},
{
    styleName: "Nervous Nodding",
    prompt: "Sheer Kimono + Silk Nightgown, Nervous Nodding, Overly exaggerated head shakes and nods",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/swIWD2onshnwKRC8klKsjuwPmZ8QbT1uEqpiXh_UPbg.jpg"
},
{
    styleName: "Slip and Slide Laugh",
    prompt: "Sheer Kimono + Silk Nightgown, Slip and Slide Laugh, Act like sliding on ice, laughter following the act",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/TnMpzfyTVg4yzxb4inSkWtVx6fu4p GXa7PaDJy0whVw.jpg"
},
{
    styleName: "Shocking Hair Ruffle",
    prompt: "Sheer Kimono + Silk Nightgown, Shocking Hair Ruffle, Frantically ruffling hair, shocked expression",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/0orljpw_qC9fSCqLIxVlvw6sGF1t2QM8x1GG-1Im7h4.jpg"
},
{
    styleName: "Overly Dramatic Arm Wave",
    prompt: "Sheer Kimono + Silk Nightgown, Overly Dramatic Arm Wave, Over-the-top arm waving, coordination chaos",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Q1mDBz60AOBEd2lQq-3itfR9hNmhNYSU6a4V7_53fe8.jpg"
},
{
    styleName: "Hidden Smirk Reveal",
    prompt: "Sheer Kimono + Silk Nightgown, Hidden Smirk Reveal, Sneaky smirk turning into a full blown giggle",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/V_mjvlnFeG_Zd5igyBW9IUSjpcy9Zwy2Q_W8bpB-G0Y.jpg"
},
{
    styleName: "Unstoppable Smile Attack",
    prompt: "Sheer Kimono + Silk Nightgown, Unstoppable Smile Attack, Big smile that grows bigger, almost comical",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/images/Vmexns6KgiggHhcPiuq9GsyM5xSkr5p_GwHffJ0q2l8.jpg"
},
{
    styleName: "Overreaching Stretch Yawn",
    prompt: "Overreaching Stretch Yawn, Pretending to yawn while stretching arms wide like cat scratches",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/MC0RAXfWD_3lybBvTGv8u-7caASZUIWUwiNf6ZHyH14.jpg"
},
{
    styleName: "Comic Relief Wobble",
    prompt: "Comic Relief Wobble, Act like becoming wobbly with every laugh attack",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/efLs4cH_B8JbrndzhP_11mdQ203l1qsbrIbdyLD3-u8.jpg"
},
{
    styleName: "Inside Out Jacket Laughter",
    prompt: "Inside Out Jacket Laughter, Pretending not to realize jacket is inside-out, amused look",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/9ubFeq7ldJVT_QeCgRiZdodw_h_ebrqM-rql7sed9Zg.jpg"
},
{
    styleName: "Balloon Face Inflated",
    prompt: "Balloon Face Inflated, Filling cheeks with air, silly giggles",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/m1-y4_0hpxBWpK_rWYEa9d6g7segWgFOnmeNhy62stA.jpg"
},
{
    styleName: "Goofi",
    prompt: "Fitted Hoodie + Pleather Leggings + Chunky Rain Boots, Goofi, playful smile, quirky expression",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/3tQlXzOvEdkTUjvLeiA6Ace8AX0-LZYo-6s2q1QIFcM.jpg"
},
{
    styleName: "Giddy",
    prompt: "Oversized Sweater + Denim Shorts + Ankle Rain Boots, Giddy, joyful laughter, bright eyes, energetic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/m21-wI699pmLwu7Q0wRzlwttz5DPtCMnJWRSQgzQOAA.jpg"
},
{
    styleName: "Playful",
    prompt: "Waterproof Poncho + Cargo Pants + Knee-High Rain Boots, Playful, mischievous grin, frolicking, lively colors",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/b0ji89HXSskljxtldTXdAvVLiHNHhB7qGhM8AiwgdLw.jpg"
},
{
    styleName: "Wacky",
    prompt: "Lace-Up Bodysuit + High-Waist Trousers + Waterproof Loafers, Wacky, exaggerated features, whimsical, zany antics",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/yDHCU79VhPTM092A3vEFE_zpvff1u-P9Y2II9lmb3sM.jpg"
},
{
    styleName: "Zany",
    prompt: "Raincoat + Skinny Jeans + Lace-Up Boots, Zany, quirky outfit, bizarre pose, fun chaos",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/rhqgXaCxss6VoqFt-1mIewjP9h-jQV0ijV5ZLAb7plU.jpg"
},
{
    styleName: "Quirky",
    prompt: "Cropped Windbreaker + Pleated Skirt + Rain Sneakers, Quirky, unusual style, eclectic, endearing charm",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/jyqCaSfDDhnOEfRbOFHLJnqEJnidpD3nAI-uaGtFgyw.jpg"
},
{
    styleName: "Chucklesome",
    prompt: "Sheer Top + Vinyl Pants + Heeled Boots, Chucklesome, laughing eyes, gentle humor, cozy setting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/-MZaPvhRfzxR6i46s5ARhbERy-a9NJ1_piJf6oX1rKg.jpg"
},
{
    styleName: "Jocular",
    prompt: "Rain Poncho + Slip Dress + Waterproof Sneakers, Jocular, hearty laugh, humorous, carefree",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/VnqR75kIgk7-CfkMam6m-FhHtbZ5z6cZJhE_SCGrtBA.jpg"
},
{
    styleName: "Whimsical",
    prompt: "Waterproof Blazer + Fitted Dress + Heeled Loafers, Whimsical, fairy-tale vibe, soft colors, imaginative",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/DgCoFf5UJ05Kzm3V9npmWY_AnJF4RYyTShvOIc1iEUU.jpg"
},
{
    styleName: "Lighthearted",
    prompt: "Trench Vest + Leather Leggings + Chunky Boots, Lighthearted, peaceful smile, soft hues, serene background",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/LX6KXvVXeosjVBG0e0CQbRLfZySxIdNHDagjaHao6ME.jpg"
},
{
    styleName: "Tickled",
    prompt: "Mesh Insert Sweater + Cargo Skirt + Combat Rain Boots, Tickled, giggling face, tickling sensation, soft pastel",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/urd-U3Q9njd3K-fpQdKRel8tHaUvztWQM kiYeLIOy3I.jpg"
},
{
    styleName: "Blithe",
    prompt: "Rubberized Jacket + Boyfriend Jeans + Rubber Flats, Blithe, carefree, relaxed expression, natural setting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/_Ssn_L6E0XW8lZDTLrH1howkLJ9rOUy3nPqS0DgKdXk.jpg"
},
{
    styleName: "Frolicsome",
    prompt: "Fleece-Lined Raincoat + Fitted Jeans + Rain Boots, Frolicsome, energetic leap, joyful motion, vibrant",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/ES0q8ZlyXaNY817_p77HP757766SDhHudLT5qvGq_OA.jpg"
},
{
    styleName: "Gleeful",
    prompt: "Waterproof Hoodie + Leather Pants + Ankle Strap Heels, Gleeful, overjoyed expression, bright surroundings",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/_XFSBjfQdWZ5ocAN0ItvPazO8d80dFybz1UH0AwXX48.jpg"
},
{
    styleName: "Sassy",
    prompt: "Layered Rain Poncho + T-Shirt Dress + Rain Boots, Sassy, confident smirk, bold style, expressive",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/jBKvZ42tPxLaAJ8xmQUCTe7sBygDH16w_H7KdKLA8G0.jpg"
},
{
    styleName: "Sprightly",
    prompt: "Slicker Jacket + Midi Dress + Platform Sneakers, Sprightly, nimble motion, quick actions, lively",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/Ouz-6KS2WTnU-AtH8Wohsh5e3X2PEMSjY1NjhtPpnVs.jpg"
},
{
    styleName: "Cheeky",
    prompt: "Denim Jacket + Vinyl Shorts + Waterproof Combat Boots, Cheeky, sly smile, teasing gesture, informal",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/TE_b4gWVH_OTAILb0RWnhtyryEpajqVjEfg3avW9FKQ.jpg"
},
{
    styleName: "Impish",
    prompt: "Utility Jacket + Turtleneck + Joggers + Rain Boots, Impish, playful mischief, twinkling eyes, soft lighting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/Sz8w8b9TDqU72ZgGHy_RI8yxMIAFIa5q4VKmLkUpVpY.jpg"
},
{
    styleName: "Bubbly",
    prompt: "Puffer Vest + Leggings + Waterproof Running Shoes, Bubbly, effervescent, lively aura, colorful bubbles",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/Pv5Lbd-WLKrPQ3DoMQJri6xOBwANT0NaQP8eZv4JWbc.jpg"
},
{
    styleName: "Chirpy",
    prompt: "Trench Cape + Mini Skirt + Rain Heels, Chirpy, bright spirit, upbeat mood, cheerful setting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/-pQzu4f_wfixEBVkmtbk-09hdZX_jEkmb6E29zKKj3o.jpg"
},
{
    styleName: "Impish",
    prompt: "Utility Jacket + Turtleneck + Joggers + Rain Boots, Impish, playful mischief, twinkling eyes, soft lighting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/YHub7WSof4AVsLxzf9mTzCC4kDXqfjuCk89JXdIt3To.jpg"
},
{
    styleName: "Bubbly",
    prompt: "Puffer Vest + Leggings + Waterproof Running Shoes, Bubbly, effervescent, lively aura, colorful bubbles",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/PO2BMzXgpPXdtF6eWxVSu1F7TYPro4FMNv3SSozsIEY.jpg"
},
{
    styleName: "Chirpy",
    prompt: "Trench Cape + Mini Skirt + Rain Heels, Chirpy, bright spirit, upbeat mood, cheerful setting",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/_wa_1EAJO2yutmaBnKmW4tmA0vu1hdZzptWOFkGaw-g.jpg"
},
{
    styleName: "Frisky",
    prompt: "Rain-Resistant Jacket + Tunic + Over-the-Knee Boots, Frisky, spirited movement, lively, playful",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/KKvRacqdt9K5AFZ_eCABcgDKefKud8ICsCJOUuBhDoI.jpg"
},
{
    styleName: "Facetious",
    prompt: "Poncho Top + Culottes + Waterproof Loafers, Facetious, witty face, joking pose, light atmosphere",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/gFgSb_NhaPDvbTdjNNJYuZHh9XE7ePaU_RNgHWIRdkE.jpg"
},
{
    styleName: "Mischievous",
    prompt: "Hooded Cape + Leggings + Waterproof Ankle Boots, Mischievous, sly expression, playful prank, cheeky",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/dR-3YepqDaGSV5hQncX9H0RuzoTBLUbaMwQIxuKyoq8.jpg"
},
{
    styleName: "Fanciful",
    prompt: "Waterproof Blazer Dress + Knee-High Rubber Boots, Fanciful, dreamlike, imaginative scenery, fairy-like",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/Alc23-ys8ACky2tNXCD2k43B3E5ZcLtBbzY_ETaWcqE.jpg"
},
{
    styleName: "Merry",
    prompt: "Transparent Raincoat + Fitted Velvet Dress + Pumps, Merry, festive colors, joyful, warm smile",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/clFpVu-GVD-IfSrgYvQPRceZo_XiBZfR8pNLtsGW1qs.jpg"
},
{
    styleName: "Snappy",
    prompt: "Belted Trench + Jumpsuit + Waterproof Booties, Snappy, crisp action, upbeat, lively expression",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/P2C-aSPC65Y0g76_zURiiVUPxQfVQnlQqZliCTNKyTc.jpg"
},
{
    styleName: "Jubilant",
    prompt: "Layered Knit + Windbreaker + Skinny Jeans, Jubilant, celebratory atmosphere, radiant smile",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/GTtNlffQDNERSE4Jh-jEDFtIqUKdQI--c_Vy4eVy_R8.jpg"
},
{
    styleName: "Jolly",
    prompt: "Waterproof Parka + Palazzo Pants + Rain Sandals, Jolly, round face, big smile, cheerful environment",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/4N9I0a7vhKd33_ZZPFUtlW01_WM8uzd5jK1zFDO2FPk.jpg"
},
{
    styleName: "Peppy",
    prompt: "Outdoorsy Fleece + Pleather Skirt + Rain Sneakers, Peppy, energetic, bright eyes, bouncy",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/uuBmJCX-w68Mnq5MFbit0LGBPVUfwt0qwG_HOpy98XM.jpg"
},
{
    styleName: "Perky",
    prompt: "Button-Down Vinyl Top + Skinny Jeans + Chunky Rubber Boots, Perky, alert expression, bright atmosphere, cheerful",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/Lr7AS_QXy6qPhYZw5hAe8GDqnREZMGVS_KpLEvvnbzQ.jpg"
},
{
    styleName: "Snazzy",
    prompt: "Rain Cape + Tapered Pants + Waterproof Oxfords, Snazzy, stylish, eye-catching, fun accessories",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/x_aS_uc_oTvjix_QC6Nj1Deqp3Nf4ddcOG1b4RkIPuA.jpg"
},
{
    styleName: "Spirited",
    prompt: "Waterproof Vest + Knit Dress + Rubber Flats, Spirited, lively energy, animated expression, vivid colors",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/nzDimY61_G-l6_tGQwlWg6NnpbtfwgSo_ywZdHc5oxQ.jpg"
},
{
    styleName: "High-spirited",
    prompt: "Rubberized Hoodie + Track Pants + Heeled Mules, High-spirited, enthusiastic, joyful action, bright world",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/gVUGlTRl98EEoxqJwt-SFzqhhrxr3OtmVLIyH1TKetc.jpg"
},
{
    styleName: "Zestful",
    prompt: "A-Line Raincoat + Denim Capris + Rain Booties, Zestful, enthusiasm, bright and fresh look, animated",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/An2H0XKkOx90GaVFkOR9tjNpTh8rVEZH5-25gZOsNpE.jpg"
},
{
    styleName: "Carefree",
    prompt: "Structured Raincoat + Bodycon Dress + Combat Boots, Carefree, relaxed pose, sunny day, gentle breeze",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/OkJPkEafEGju182SVCuPmjdv9prilzNMLxkRuCud4Fs.jpg"
},
{
    styleName: "Sproingy",
    prompt: "Striped Shirt Dress + Waterproof Wedges, Sproingy, springy movement, bouncy, vibrant",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/zlPAlyD4pD869WNoTRBvsS2GWboAXcabSVylUnDbNp8.jpg"
},
{
    styleName: "Capering",
    prompt: "Utility Shirt + Skinny Jeans + Rubber High-Tops, Capering, playful leap, spontaneous, lively scene",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/cXhOTl53qq58pnUh50xEVq3J3FM1P2-MxGiYJE7VzEc.jpg"
},
{
    styleName: "In high spirits",
    prompt: "Hooded Rain Cape + Cargo Pants + Waterproof Mary Janes, In high spirits, smiling face, vibrant background, lively mood",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/KVWRlaVcqTZlhE1WGOW4hi5inDDbsqsK_dcYKsmjQdg.jpg"
},
{
    styleName: "Overjoyed",
    prompt: "Vinyl Overall Dress + Long Sleeve Top + Heeled Boots, Overjoyed, pure joy, exuberant, soaring",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/r3QI-sm2z_0b9Uavv6mEhOUKI-EOuBDSmhLXEsrV1sk.jpg"
},
{
    styleName: "Lively",
    prompt: "Waterproof Jacket + Distressed Denim + Loafers, Lively, animated, quick movements, vivid environment",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/J5WRhMfO3oAiTLcEvKqINEdXVQgd2lJojKiczuoNjE0.jpg"
},
{
    styleName: "Jestful",
    prompt: "Mesh-Topped Raincoat + Fleece Leggings + Rain Boots, Jestful, playfully teasing, humorous air, smile",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/ZlYrkNC7w6jbZwO_s8TKR2sqfqc6hnK2q_0j3tx1FTE.jpg"
},
{
    styleName: "Mirthful",
    prompt: "Transparent Poncho + Wrap Dress + Waterproof Ankle Boots, Mirthful, merry expression, joyful surrounding, contentment",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/hLDc0xVaByh8wEFiNsugmA6kwynJPvmNFbB5woeLnBw.jpg"
},
{
    styleName: "Hilarious",
    prompt: "Rainproof Blazer + Turtleneck + Maxi Skirt, Hilarious, exploding laughter, contagious, funny",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/5ES4tdqtNAbpmpVdp35ZEMM7Fw1jGD1LzFi6Vw8lLCU.jpg"
},
{
    styleName: "Zippy",
    prompt: "Fleece Jacket + Vinyl Shorts + Rain Sneakers, Zippy, quick motion, energetic, swift",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/2N4oe-qWjHiJQVZSLHspP1Cu-tNVrMBW77prdutVI5c.jpg"
},
{
    styleName: "Animated",
    prompt: "Rain Slicker + Palazzo Pants + Rubber Flats, Animated, lively characters, expressive, full of action",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/qKZwMxge1Hf6YHq47ltV0RVj55CTdGhpU0PZXBslquY.jpg"
},
{
    styleName: "Vivacious",
    prompt: "Waterproof Duster + Jumpsuit + Heeled Booties, Vivacious, full of life, radiant energy, colorful",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/KdinEiMzY6nkC1cdaQra0ENk9vnfzy1cOIaN0Le7JoU.jpg"
},
{
    styleName: "Loony",
    prompt: "Rainproof Overshirt + Pencil Skirt + Wedges, Loony, eccentric, silly antics, comedic",
    imageSrc: "https://kakaladi-catalog.github.io/drawveasna/image/nPjAaOHv8kjvBotSkN9JxOb_fdTBEATacdpUWxfUJ40.jpg"
},
{
    styleName: "Eccentric",
    prompt: "Rubberized Cape + Wide-Leg Pants + Rain Loafers, Eccentric, unique style, quirky pose, whimsical",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/m6Y8HPNlu6FgIhKCeAcjyNPgzskUbpIzjMhpG5AS0eY.jpg"
},
{
    styleName: "Unconventional",
    prompt: "Vinyl Crop Top + Joggers + Waterproof Sneakers, Unconventional, offbeat, charming oddness, creative",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/HP7MKbr29C6Z6T8s-VAvUJOW5_ki-IKcFyxut3IoiPQ.jpg"
},
{
    styleName: "Unpredictable",
    prompt: "Rainproof Poncho + Tunic Dress + Rubber Booties, Unpredictable, surprising, spontaneous, dynamic",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/BJdw84XgyzsSgXPKMsCJ9HJALFTZKGIcOuA73m7l-bE.jpg"
},
{
    styleName: "Jestingly",
    prompt: "Utility Blazer + Skinny Jeans + Waterproof Flats, Jestingly, lighthearted teasing, bright setting, humorous",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/k_H84VxmsD91zpzmdVYlXH_0FX7IImqxG49XWHRi_wY.jpg"
},
{
    styleName: "Light-hearted",
    prompt: "Rain-Repellent Tank + Denim Overalls + Strappy Sandals, Light-hearted, easy-going, peaceful expression, warm colors",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/5gfgYmvgCkP1jUn0UqbUjPtBLdrcBOT5cHjeK6CXKR4.jpg"
},
{
    styleName: "Glibly",
    prompt: "Layered Poncho + Bodysuit + Fitted Skirt, Glibly, smooth talking, witty, flirtatious",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/EHVZL-0_Qdk1XXgCsy9WmiA6fyTPBekKiyMIgO1Qd5Y.jpg"
},
{
    styleName: "Frothy",
    prompt: "Rainproof Vest + Thermal Leggings + Ankle Boots, Frothy, airy, delicate bubbles, light atmosphere",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/xltHl69nKh_Sas6sZ3R7N-PBjfZvwyH6gNf2Zl4PmIQ.jpg"
},
{
    styleName: "Whackadoodle",
    prompt: "Ribbed Sweater + Vinyl Skirt + Thigh-High Rain Boots, Whackadoodle, off-the-wall, peculiar expression, zany",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/BGhm6d7HuiOIcaYgd5HBtOiYaWcRYyXeYVthHl08sRc.jpg"
},
{
    styleName: "Jazzy",
    prompt: "Rubberized Rain Jacket + Cut-Off Shorts + Flat Boots, Jazzy, rhythmic, vibrant, colorful patterns",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/PudJabXHqMudM6RLc92mFuF2JNUj00ziI__eidJ0jns.jpg"
},
{
    styleName: "Jumpy",
    prompt: "Waterproof Parka + A-Line Skirt + Waterproof Boots, Jumpy, sudden movements, energetic, lively",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/qbNfJvDVQMJ_liHsqJ3xpeh7JphvpG8DfP4nTGcgpAA.jpg"
},
{
    styleName: "Popcorny",
    prompt: "Rain-Resistant Wrap + Midi Dress + Heeled Rubber Boots, Popcorny, popping, playful, burst of fun",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/zGwko64IdATshN5KPWd5CzhIP95ANVrhkIbwR8-Mi6I.jpg"
},
{
    styleName: "Zazzy",
    prompt: "Hooded Sweater + Cargo Pants + Combat Boots, Zazzy, flashy, lively, sparkly",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/NZyHQw2ClG4PNEjpp4DLlc3waQCcYuihy1Hr21UQ7Vc.jpg"
},
{
    styleName: "Boomsy",
    prompt: "Vinyl Shirt + Fleece-Lined Leggings + Waterproof Flats, Boomsy, bubbly energy, spirited, energetic",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/hoCvf4vdvZ5SSa0L39gUFm3AKPSrzUnIu1RhXS4H-oQ.jpg"
},
{
    styleName: "Fizzy",
    prompt: "Rainproof Blazer + T-Shirt Dress + Platform Sneakers, Fizzy, effervescent, bubbly personality, bright colors",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/Hv3-Yuz7nkrRLKjjNmlUeTmHcPaI_NUDXru_lh7F3Uc.jpg"
},
{
    styleName: "Breezy",
    prompt: "Anorak + High-Waist Trousers + Waterproof Heeled Booties, Breezy, lighthearted, airy atmosphere, carefree",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/kGzKbktHAMDMezgAY-hvjhUM76eRe8WRtMaS9kELZUM.jpg"
},
{
    styleName: "Breezily",
    prompt: "Waterproof Puffer Jacket + Pencil Skirt + Flats, Breezily, relaxed, easygoing, gentle wind",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/WlcpnH6X1YUealkQWkJzpKt92o1cVaGe9Pes4MUK1n0.jpg"
},
{
    styleName: "Smirkish",
    prompt: "Patchwork Poncho + Maxi Skirt + Chunky Boots, Smirkish, slight smile, playful glance, cheeky",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/BjpQF61-nE2dDg-XsBRVkxSzBxm4ir9VbmXkRNxHZw8.jpg"
},
{
    styleName: "Sunshiny",
    prompt: "Knit Top + Vinyl Pants + Waterproof Boots, Sunshiny, bright and sunny, warm glow, smile",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/N3Yh63BGPAtcWlfsvDMBT_W-cM_yIKEtfwU5e36jazQ.jpg"
},
{
    styleName: "Squeaky",
    prompt: "Rainproof Parka + High-Waist Skirt + Ankle Boots, Squeaky, high-pitched joy, playful, vibrant",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/izvGQqn2V5uv18PEZbHUFlaz_a5UUxjctGgMsa17tNc.jpg"
},
{
    styleName: "Quippy",
    prompt: "Fleece Lined Raincoat + Dress + Tall Boots, Quippy, witty, sharp expression, playful humor",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/UzwC4fXvU4IB10YQvaXxh1CcNUlHFZlKd_JG8mqfwCA.jpg"
},
{
    styleName: "Zizzling",
    prompt: "Rainproof Sleeveless Top + Skinny Jeans + Heeled Mules, Zizzling, enthusiasm, bright and fresh look, animated",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/WbziW-LsspKU1GfGGnLK2wFoTGTXcYRGgDike2v8qT8.jpg"
},
{
    styleName: "Percolating",
    prompt: "Puffer Coat + Denim Skirt + Rain Sneakers, Percolating, bubbling excitement, rising energy, lively",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/mDKO_h4_0AgELPWcY4V66yRJcdCXyIiU5zFX911W3vI.jpg"
},
{
    styleName: "Rambling",
    prompt: "Rain-Repellent Jacket + Culottes + Platform Shoes, Rambling, wandering, light-hearted, carefree path",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/pvUId8DqgClO9R1HgCR73PY7x5B0POOZy6dcEXNG6rs.jpg"
},
{
    styleName: "Scampish",
    prompt: "Button-Front Poncho + Striped Top + Tapered Pants, Scampish, playful troublemaker, light-hearted mischief",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/KxU5HSxUBro5zYek7xDvId0G_2-cpNlE5e10vn26hNo.jpg"
},
{
    styleName: "Skittish",
    prompt: "Layered Raincoat + Wide-Leg Trousers + Sandals, Skittish, jumpy, lively reactions, playful surprise",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/C7ngjcCVFSWfcuawke5-KhGDHS69CWuQs2Jcu9nFDVk.jpg"
},
{
    styleName: "Skippy",
    prompt: "Oversized Sweater Dress + Heeled Rubber Boots, Skippy, bouncy steps, energetic, fun movement",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/dxJ9Cx7OB3fv1rWaSsDjqfL-OvAxfAfB0VOOr3n73Uw.jpg"
},
{
    styleName: "Snapping",
    prompt: "Rainproof Cape + Knit Bodycon Dress + Ankle Boots, Snapping, quick actions, responsive, lively",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/0GA6QSN6k0ekc4IXiZ40iIzEvTCjBVUsC4qSNIIdgZ4.jpg"
},
{
    styleName: "Recharging",
    prompt: "Vinyl Trench + High-Waisted Jeans + Waterproof Sneakers, Recharging, refreshed, relaxed energy, gentle light",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/Opa2RmpotapOPmDZJlH7_dw3-S098tq25RH7fRQ2CaI.jpg"
},
{
    styleName: "Energized",
    prompt: "Rain-Repellent Blouse + Corduroy Pants + Loafers, Energized, high energy, lively actions, bright",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/LdCOb3buY95kzdNkUqDa3q5RcUHc_1cEnGNpx2sleEg.jpg"
},
{
    styleName: "Zizzling (again)",
    prompt: "Paddle Coat + Blouse + Mini Skirt, Zizzling (again), sizzling energy, crackling fun",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/SbdqAvlw4FFRu4-GbJANgVR8smxD5Pg8Txzn_scwyXQ.jpg"
},
{
    styleName: "Swirly",
    prompt: "Rain-Resistant Hooded Top + Khakis + Rubber Boots, Swirly, twirling patterns, dynamic, fluid motion",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/8feGlBV5W5tSlJB_Ze8ucTpN0mUBoCsM-OfrE92BluQ.jpg"
},
{
    styleName: "Zigzagging",
    prompt: "Rainproof Vest + Fleece-Lined Dress + Ankle Boots, Zigzagging, quick changes, dynamic movement, playful",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/l5_Z_qSW4To_ajBjDp_K8RnvNfczv5IIA2c_TJzWkt8.jpg"
},
{
    styleName: "Zoomy",
    prompt: "Rubberized Cape + Jogger Pants + Platform Sneakers, Zoomy, speedy, fast-moving, lively scene",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/kuHcDhxpjWo73c9mq8K744rAe_Aty8Xrtf80ke9uB-w.jpg"
},
{
    styleName: "Flibbertigibbet",
    prompt: "Hooded Poncho + Distressed Jeans + Chunky Sandals, Flibbertigibbet, whimsical, flighty, light-hearted fun",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/vdcGyKy7-NCwPsV0c-sHGCy57Py5sx58ArV_3ab2p4I.jpg"
},
{
    styleName: "Dizzied",
    prompt: "Vinyl Peacoat + Culottes + Waterproof Flats, Dizzied, swirling, spinning fun, bright colors",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/8W9xcpZovdb2bnN6H8y8Wxgc_IOekN_MPTMxrDgg_Wc.jpg"
},
{
    styleName: "Buffoonish",
    prompt: "Transparent Trench + Slit Skirt + Combat Boots, Buffoonish, clownish antics, silly expression, comedic",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/BvjPfdcgwB8-A1heX__Eo2TDnevrJH4WvFImB7Ft4q0.jpg"
},
{
    styleName: "Clownish",
    prompt: "Utility Jacket + Fleece Shorts + Heeled Booties, Clownish, exaggerated features, humorous, playful",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/Xo3V-KRYldCknOoFqxL_5a9ZmLXjEROwYiQkRylSzmI.jpg"
},
{
    styleName: "Wanderlusting",
    prompt: "Rubberized Tank + Flared Jeans + Waterproof Heels, Wanderlusting, dreamy, adventurous, inquisitive",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/wDKpYmHzLbg7C6wPz9ZPzcpBdH6U7HYYfZ-7yr_BsZA.jpg"
},
{
    styleName: "Cloud-happy",
    prompt: "Short Raincoat + Dress + Tall Waterproof Boots, Cloud-happy, daydreamy, floating sensation, peaceful",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/ENUlDE9s83SdtIzuyNMmZf9FBs8ogeMIPFVtHEitvmo.jpg"
},
{
    styleName: "Bonkers",
    prompt: "Hooded Cape + Tie-Waist Pants + Loafers, Bonkers, crazy fun, wild antics, colorful",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/wOsdnmKc83tfifJNMzYW8QG9JISIcdetvd4xY18v0gU.jpg"
},
{
    styleName: "Screwball",
    prompt: "Cross-Front Poncho + Skinny Jeans + Ankle Boots, Screwball, offbeat, zany expressions, merry chaos",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/kDnrSZjF7kl50NoZjHpS1mZuADvRL58A52tZZmbHm-8.jpg"
},
{
    styleName: "Crackbrained",
    prompt: "Waterproof Tunic + Leggings + Platform Sneakers, Crackbrained, whimsical, nonsensical actions, cheerful",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/N8G1ElNi50hhdyU79qQ6wPqlGKaOQaNnJG613z5PrZ4.jpg"
},
{
    styleName: "Doo-lolly",
    prompt: "Rainproof Cardigan + Cargo Skirt + Heeled Boots, Doo-lolly, eccentric, kooky, comically charming",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/jmHmz9IyyWW42D61QjcBTmFVww7MN_stvQvFooFy4Qc.jpg"
},
{
    styleName: "Loopy",
    prompt: "Paddle Jacket + Cutoff Shorts + Waterproof Sandals, Loopy, silly, roundabout actions, light-hearted",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/Qq44cL-FkkJ79ktWaa8FKjGiBCS3iMGnvS3IFBewNQg.jpg"
},
{
    styleName: "Nutty",
    prompt: "Quilted Raincoat + Culottes + Boots, Nutty, a little crazy, chaos, cheerful setting",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/x9Rj6NQQQFf4YTvYFhWm1smZy1A1DKt58xRVvnDdXk.jpg"
},
{
    styleName: "Dingy",
    prompt: "Utility Overshirt + Printed Pants + Wedge Heels, Dingy, quirky, offbeat pattern, funny",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/tMD5JUyvz0fhFJtRUexjhGNIhuo-FCdHcEmDN-ZE-Vc.jpg"
},
{
    styleName: "Puckish",
    prompt: "Waterproof Hoodie + Slit Maxi with Rain Boots, Puckish, mischievously charming, playful expression",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/lS3iQq_BkQzAP4WNBX27NHmWT7si2hDmt35b3NwX22k.jpg"
},
{
    styleName: "Scampy",
    prompt: "Rainproof Dress and Coat with Ankle Strap Heels, Scampy, playful troublemaker, roguish charm, sweet",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/AIb0_MBsn5eRHwUklw4R2I7U3T3Yu-zdOMKAqT5JqAI.jpg"
},
{
    styleName: "Shimmering",
    prompt: "Slicker Jacket + Pencil Skirt + Flats, Shimmering, sparkling light, bright aura, magical",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/Jfdcd-o691xpjvNB3E4saH6NZdqjF-MAx2nPScvOC_8.jpg"
},
{
    styleName: "Zuggily",
    prompt: "Raincape + Comfy Leggings + Belted Boots, Zuggily, quirky, zany antics, off-the-wall",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/TqPenI7UZSBdiMDXFdsp0goXnH1nLKpUGpdS83o73Qc.jpg"
},
{
    styleName: "Fiddly",
    prompt: "Fur-Lined Raincoat + Cargo Pants + Combat Boots, Fiddly, intricate actions, fun details, lively",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/N8G1ElNi50hhdyU79qQ6wPqlGKaOQaNnJG613z5PrZ4.jpg"
},
{
    styleName: "Tumbling",
    prompt: "Fluid Vinyl Coat + Tank Dress + Rain Boots, Tumbling, playful roll, dynamic, fun movement",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/QmfnCw1e6EzFnGoS9MbHSwg44tYIg3gpSjjNqZIcCU4.jpg"
},
{
    styleName: "Jiving",
    prompt: "Rain-Resistant Fleece + Shirtdress + Wedge Sandals, Jiving, rhythmic, lively dance, light-hearted",
    imageSrc: "hhttps://kakaladi-catalog.github.io/drawveasna/image/ZHKBA88xaAol9KCmJ0TIbKXVKjEHiUFy8q8-ry447TU.jpg"
}


];


// Create the images mapping and prompts mapping
data.forEach(item => {
    images[item.styleName] = item.imageSrc; // Map style names to image sources
    prompts[item.styleName] = item.prompt; // Map style names to prompts
});

// Create the table and its header
const table = document.createElement('table');
table.className = 'custom-table';

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
headerRow.innerHTML = `
    <th class="table-header">Style Name</th>
    <th class="table-header">Image</th>
    <th class="table-header">Prompt</th>
`;
thead.appendChild(headerRow);
table.appendChild(thead);

// Create the table body
const tbody = document.createElement('tbody');
data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="table-cell">${item.styleName}</td>
        <td class="table-cell">
            <img alt="${item.styleName} image" height="100" src="${item.imageSrc}" width="100"/>
        </td>
        <td class="table-cell">${item.prompt}</td>
    `;
    tbody.appendChild(row);
});
table.appendChild(tbody);

// Append the table to the container
const container = document.querySelector('.container2');
container.appendChild(table);
}

// Call the function to create selects when the page loads
window.onload = function () {
createSelects();
createTable();
};

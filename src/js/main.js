window.onload = function() {
    const gallery = document.getElementById("gallery");
    const path = window.location.pathname;

    if (path.includes("/animals/index.html")) {
        // Display images from the animals directory
        const directory = "../images/animals/";
        const imageUrls = [
            directory + "babybaldeagle.jpg",
            directory + "baldeagle.jpg",
            directory + "baldeagle1.jpg",
            directory + "baldeagle2.jpg",
            directory + "bear.jpg",
            directory + "bear1.jpg",
            directory + "bear2.jpg",
            directory + "bear3.jpg",
            directory + "bear4.jpg",
            directory + "birdflying.jpg",
            directory + "bison.jpg",
            directory + "bison1.jpg",
            directory + "bison2.jpg",
            directory + "blueheron.jpg",
            directory + "caribo.jpg",
            directory + "caribo1.jpg",
            directory + "deer.jpg",
            directory + "deer1.jpg",
            directory + "deer2.jpg",
            directory + "dolphin.jpg",
            directory + "dolphin1.jpg",
            directory + "dolphin2.jpg",
            directory + "dolphin3.jpg",
            directory + "elk.jpg",
            directory + "elk1.jpg",
            directory + "elk2.jpg",
            directory + "elk3.jpg",
            directory + "elk4.jpg",
            directory + "elk5.jpg",
            directory + "elkfight.jpg",
            directory + "emu.jpg",
            directory + "flimingo1.jpg",
            directory + "flimingo2.jpg",
            directory + "fox.jpg",
            directory + "fox1.jpg",
            directory + "fox3.jpg",
            directory + "gorilla.jpg",
            directory + "hawiianmonksea.jpg",
            directory + "hawk.jpg",
            directory + "hawk1.jpg",
            directory + "jaguar.jpg",
            directory + "kangaroo1.jpg",
            directory + "kangaroo2.jpg",
            directory + "kangaroo3.jpg",
            directory + "komododragon.jpg",
            directory + "links.jpg",
            directory + "links1.jpg",
            directory + "lions1.jpg",
            directory + "lions2.jpg",
            directory + "lizard.jpg",
            directory + "monkeys.jpg",
            directory + "mountaingoat.jpg",
            directory + "mountaingoat1.jpg",
            directory + "orangutan1.jpg",
            directory + "orangutan2.jpg",
            directory + "orangutan3.jpg",
            directory + "otter.jpg",
            directory + "otter1.jpg",
            directory + "peacock.jpg",
            directory + "penguin.jpg",
            directory + "rabit.jpg",
            directory + "racoon.jpg",
            directory + "racoon1.jpg",
            directory + "racoon2.jpg",
            directory + "rams.jpg",
            directory + "redpanda.jpg",
            directory + "rhinoceros.jpg",
            directory + "seagul.jpg",
            directory + "seagul1.jpg",
            directory + "seal.jpg",
            directory + "seaturtle.jpg",
            directory + "snowyowl.jpg",
            directory + "stork.jpg",
            directory + "tiger.jpg",
            directory + "turkey.jpg",
            directory + "two elk.jpg",
            directory + "wolf.jpg",
            directory + "wolf1.jpg",
            directory + "wolf2.jpg",
            directory + "wolf3.jpg",
            directory + "wolf4.jpg",
            directory + "wolveren.jpg",
            directory + "zebra.jpg",

            // Add more image URLs here
        ];

        imageUrls.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = url; 
            gallery.appendChild(img);
        });
    } else if (path.includes("/nature/index.html")) {
        // Display images from the nature directory
        const directory = "../images/nature/";
        const imageUrls = [
            directory + "alpinelake.jpg",
            directory + "alpinelake1.jpg",
            directory + "alpinelake3.jpg",
            directory + "alpinelake4.jpg",
            directory + "bannas.jpg",
            directory + "beach.jpg",
            directory + "diamondhead.jpg",
            directory + "fallentree.jpg",
            directory + "flower.jpg",
            directory + "flower2.jpg",
            directory + "flower3.jpg",
            directory + "flower4.jpg",
            directory + "flower5.jpg",
            directory + "flower6.jpg",
            directory + "forestpath.jpg",
            directory + "forestroad.jpg",
            directory + "glacier.jpg",
            directory + "glacier1.jpg",
            directory + "landscape.jpg",
            directory + "landscape1.jpg",
            directory + "landscape2.jpg",
            directory + "mountain.jpg",
            directory + "mountain1.jpg",
            directory + "mountain2.jpg",
            directory + "mountain3.jpg",
            directory + "ocean.jpg",
            directory + "ocean1.jpg",
            directory + "ocean2.jpg",
            directory + "ocean3.jpg",
            directory + "rainbow.jpg",
            directory + "rainer.jpg",
            directory + "rainer1.jpg",
            directory + "river.jpg",
            directory + "river1.jpg",
            directory + "river2.jpg",
            directory + "river3.jpg",
            directory + "river4.jpg",
            directory + "river5.jpg",
            directory + "river6.jpg",
            directory + "sky.jpg",
            directory + "sky1.jpg",
            directory + "sky2.jpg",
            directory + "sky3.jpg",
            directory + "snowmelt.jpg",
            directory + "sunset.jpg",
            directory + "sunset1.jpg",
            directory + "sunset2.jpg",
            directory + "sunset3.jpg",
            directory + "sunset4.jpg",
            directory + "tree.jpg",
            directory + "trees.jpg",
            directory + "valley.jpg",
            directory + "valley1.jpg",
            directory + "valley2.jpg",
            directory + "valley4.jpg",
            directory + "valley5.jpg",
            directory + "valley6.jpg",
            directory + "water.jpg",
            directory + "waterfall.jpg",
            directory + "waterfall1.jpg",
            directory + "waterfall2.jpg",
            directory + "waterfall3.jpg",
            directory + "waterfall4.jpg",
            directory + "waterfall5.jpg",
            directory + "waterfall6.jpg",
            directory + "waterfall7.jpg",
            directory + "waterfall8.jpg",
            directory + "waterfall9.jpg",
            directory + "waterfalllake.jpg",
            // Add more image URLs here
        ];

        imageUrls.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = url; 
            gallery.appendChild(img);
        });
    }
};

/*window.onload = function() {
    const imageUrls = [
        "../images/animals/babybaldeagle.jpg",
        "../images/animals/baldeagle.jpg",
        "../images/animals/baldeagle1.jpg"
        // Add more image URLs here
    ];

    const gallery = document.getElementById("gallery");
    imageUrls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = url; 
        gallery.appendChild(img);
    });
}*/
/*window.onload = function() {
    const directory ="../images/animals/";

    fetch(directory)
        .then(response => response.text())
        .then(text =>{
            const files = text.split("/n").filter(file =>file.trim() !== "");
            const gallery = document.getElementById("gallery");
            files.forEach(file => {
                const img = document.createElement("img");
                img.src = directory + file;
                img.alt = file; 
            gallery.appendChild(img);
            }); 
        })
        .catch(error => console.error("Error fetching images:", error));
}*/

/*window.onload = function() {
    const imageUrls = [
        "../images/nature/alpinelake.jpg",
        "../images/nature/alpinelake1.jpg",
        "../images/nature/alpinelake3.jpg",
        "../images/nature/alpinelake4.jpg",
        "../images/nature/bannas.jpg",
        "../images/nature/beach.jpg",
        "../images/nature/diamondhead.jpg",
        "../images/nature/fallentree.jpg",
        "../images/nature/flower.jpg",
        "../images/nature/flower2.jpg",
        "../images/nature/flower3.jpg",
        "../images/nature/flower4.jpg",
        "../images/nature/flower5.jpg",
        "../images/nature/flower6.jpg",
        "../images/nature/forestpath.jpg",
        "../images/nature/forestroad.jpg",
        "../images/nature/glacier.jpg",
        "../images/nature/glacier1.jpg",
        "../images/nature/landscape.jpg",
        "../images/nature/landscape1.jpg",
        "../images/nature/landscape2.jpg",
        "../images/nature/mountain.jpg",
        "../images/nature/mountain1.jpg",
        "../images/nature/mountain2.jpg",
        "../images/nature/mountain3.jpg",
        "../images/nature/ocean.jpg",
        "../images/nature/ocean1.jpg",
        "../images/nature/ocean2.jpg",
        "../images/nature/ocean3.jpg",
        "../images/nature/rainbow.jpg",
        "../images/nature/rainer.jpg",
        "../images/nature/rainer1.jpg",
        "../images/nature/river.jpg",
        "../images/nature/river1.jpg",
        "../images/nature/river2.jpg",
        "../images/nature/river3.jpg",
        "../images/nature/river4.jpg",
        "../images/nature/river5.jpg",
        "../images/nature/river6.jpg",
        "../images/nature/sky.jpg",
        "../images/nature/sky1.jpg",
        "../images/nature/sky2.jpg",
        "../images/nature/sky3.jpg",
        "../images/nature/snowmelt.jpg",
        "../images/nature/sunset.jpg",
        "../images/nature/sunset1.jpg",
        "../images/nature/sunset2.jpg",
        "../images/nature/sunset3.jpg",
        "../images/nature/sunset4.jpg",
        "../images/nature/tree.jpg",
        "../images/nature/trees.jpg",
        "../images/nature/valley.jpg",
        "../images/nature/valley1.jpg",
        "../images/nature/valley2.jpg",
        "../images/nature/valley4.jpg",
        "../images/nature/valley5.jpg",
        "../images/nature/valley6.jpg",
        "../images/nature/water.jpg",
        "../images/nature/waterfall.jpg",
        "../images/nature/waterfall1.jpg",
        "../images/nature/waterfall2.jpg",
        "../images/nature/waterfall3.jpg",
        "../images/nature/waterfall4.jpg",
        "../images/nature/waterfall5.jpg",
        "../images/nature/waterfall6.jpg",
        "../images/nature/waterfall7.jpg",
        "../images/nature/waterfall8.jpg",
        "../images/nature/waterfall9.jpg",
        "../images/nature/waterfalllake.jpg"
    ];

    const gallery1 = document.getElementById("gallery1");
    imageUrls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = url; 
        gallery1.appendChild(img);
    });
}*/

/*window.onload = function() {
    const directory1 ="../images/nature/";

    fetch(directory1)
        .then(response => response.text())
        .then(text =>{
            const files = text.split("/n").filter(file =>file.trim() !== "");
            const gallery1 = document.getElementById("gallery1");
            files.forEach(file => {
                const img = document.createElement("img");
                img.src = directory1 + file;
                img.alt = file; 
            gallery1.appendChild(img);
            }); 
        })
        .catch(error => console.error("Error fetching images:", error));
}*/
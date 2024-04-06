window.onload = function() {
    const directory ="src/images/animals/";

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
}
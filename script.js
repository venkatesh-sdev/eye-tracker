window.onload = () => {
    
    document.addEventListener("mousemove", (event) => {
        const div = document.querySelectorAll(".div");
        const x = event.clientX;
        const y = event.clientY;
        rotateElement(div[0], x, y);
        rotateElement(div[1], x, y);
    });

    function rotateElement(div, x, y) {
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        
        console.log("middleX")
        console.log(middleX)

        console.log("middleY")
        console.log(middleY)

        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((y - middleY) / middleY) * 45;
        div.style.setProperty("--rotateX", offsetX + "deg");
        div.style.setProperty("--rotateY", -1 * offsetY + "deg");
    }
}

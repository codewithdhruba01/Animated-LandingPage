document.addEventListener("mousemove", (event)=>{
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerWidth - 0.5;

    document.querySelectorAll(".parallax").forEach((element)=>{
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    })
})
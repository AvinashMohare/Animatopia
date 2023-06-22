function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function (elem) {
        //Create 2 spans
        var parent = document.createElement("span"); // <span></span>
        var child = document.createElement("span");

        //set the class of parent and child
        parent.classList.add("parent"); // <span class = "parent"></span>
        child.classList.add("child");

        //span parent gets child and child gets elem details
        child.innerHTML = elem.innerHTML; // <span class = "parent">Design Portfolio</span>
        parent.appendChild(child);

        //elem replaces its value with parent span
        elem.innerHTML = "";
        elem.appendChild(parent);
    });
}

revealToSpan();

var tl = gsap.timeline();

tl.from(".child span", {
    x: 200,
    stagger: 0.2,
    duration: 1.4,
    ease: Power3.easeInOut,
})
    .to(".parent .child", {
        y: "-100%",
        duration: 1,
        delay: 0,
        ease: Circ.easeInOut,
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        delay: 0,
        ease: Circ.easeInOut,
    })
    .to("#green", {
        height: "100%",
        top: 0,
        duration: 1,
        delay: -0.8,
        ease: Circ.easeInOut,
    })
    .to("#green", {
        height: "0%",
        duration: 1,
        delay: -0.3,
        ease: Circ.easeInOut,
    });

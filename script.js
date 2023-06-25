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

function valueSetters() {
    //fot HomePage
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home span .child", { y: "100%" });
    gsap.set("#home .row img", { opacity: 0 });

    //for SVG
    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];

        character.style.strokeDasharray = character.getTotalLength() + "px";
        character.style.strokeDashoffset = character.getTotalLength() + "px";
    });
}

function loaderAnimation() {
    var tl = gsap.timeline();

    tl.from("#loader .child span", {
        x: 200,
        stagger: 0.2,
        duration: 1.4,
        opacity: 0,
        ease: Power3.easeInOut,
    })
        .to("#loader .parent .child", {
            y: "-100%",
            duration: 1,
            delay: 0,
            opacity: 1,
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
            // onComplete: function () {
            //     animateHomepage();
            // },

            onComplete: function () {
                animateHomepage();
            },
        });
}

function animateHomepage() {
    var tl = gsap.timeline();

    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: Expo.easeInOut,
    }).to("#home .parent .child", {
        y: 0,
        stagger: 0.1,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
        onComplete: function () {
            animateSvg();
        },
    });
}

function animateSvg() {
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 3,
        ease: Expo.easeInOut,
        delay: -1,
    });
}

revealToSpan();
valueSetters();
loaderAnimation();

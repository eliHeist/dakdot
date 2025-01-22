// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger)

// const sections: NodeListOf<HTMLElement> =
//     document.querySelectorAll(".hww .step");

// sections.forEach((section, index) => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         pin: true,
//         pinSpacing: false,
//         snap: 1
//     })
//     gsap.from(section.children, {
//         y: 50,
//         opacity: 0,
//         scrollTrigger: {
//             trigger: section,
//             start: "top center",
//             end: "top top",
//             toggleActions: "play none reverse reset",
//         }
//     })
// });
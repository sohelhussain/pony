const scroll = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};
scroll();

let clutter = "";
const hed = document.querySelector(`.hero-h1`);
hed.textContent.split("").forEach((words) => {
  clutter += `<span class="uppercase text-[37vw] translate-y-7 inline-block tilet-font">${words}</sapn>`;
});
document.querySelector(`.hero`).innerHTML = clutter;

const loader = gsap.timeline();
const speed = Math.random() * 0.1;
loader
  .to(`.shape_1`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_2`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_2`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_3`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_3`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_4`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_4`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_5`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_5`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_6`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_6`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_7`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_7`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_8`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_8`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_9`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_9`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_10`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_10`, {
    display: `none`,
    duration: speed,
  })
  .from(`.shape_11`, {
    opacity: 0,
    duration: speed,
  })
  .to(`.shape_11`, {
    display: `none`,
    duration: speed,
  })
  .to(`.shape_1`, {
    display: `block`,
    duration: speed,
  })
  .to(
    `.page1`,
    {
      y: "0%",
      ease: "expo.out",
    },
    "sam"
  )
  .to(
    `.p_letter`,
    {
      display: `block`,
      opacity: 1,
    },
    "sam"
  )
  .to(
    `.n_letter`,
    {
      display: `block`,
      opacity: 1,
    },
    "sam"
  )
  .to(
    `.y_letter`,
    {
      display: `block`,
      opacity: 1,
    },
    "sam"
  )
  .to(
    `.menu`,
    {
      display: `block`,
      opacity: 1,
    },
    "sam"
  );

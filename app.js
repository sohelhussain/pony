const scroll = () => {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)
};
scroll();



let clutter = "";
const text = document.querySelector(`.hero-h1`);
text.textContent.split("").forEach((words) => {
  clutter += `<span class="spa text-black uppercase text-[37vw] translate-y-[80%] inline-block tilet-font">${words}</span>`;
});
text.innerHTML = clutter;

const loader = gsap.timeline();
const speed = Math.random() * 0.1;

//this is a background color change for the page1 that give a random color every time that the page are loaded.
const hueColor = Math.floor(Math.random() * 360);
const min = 50;
const max = 100;
const seturation = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(seturation);
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
      backgroundColor: `hsl(${hueColor}, 80%, 88%)`,
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
  )
  .to(
    `.spa`,
    {
      y: "-6%",
      stagger: {
        amount: 0.3,
      },
      ease: "expo.out",
    },
    "sam"
  );
gsap.to(".spa",{
  opacity: 0,
  scrollTrigger: {
    trigger: ".spa",
    scroller: "body",
    // markers: true,
    start:"-380% 0%",
    end: "-250% 100%",
    scrub: 1
  }
})
const time = gsap.timeline({
  scrollTrigger:{
    trigger: ".page1",
    scroller: "body",
    // markers: true,
    start: "-60% 0%",
    end: "100% 100%",
    scrub: 1
  }
});
time.to(".lazy",{
  rotate:5,
  y:"10%"
},"box")
time.to(".let",{
  rotate:-5,
  y:"-20%"
},"box")
time.to(".lazy-girl",{
  y:"20%"
},"box")
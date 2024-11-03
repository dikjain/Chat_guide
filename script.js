// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

// Disable text selection
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
});


var tl = gsap.timeline();


tl.from("#imgcont",{
    y:100,
    duration:0.5,
},"a")
tl.to("#imgcont",{
    translateY:5,
    translateX:0,
    width:"70%",
    duration:1.5,
})
gsap.to("#imgcont",{
    height:"70vh",
    duration:1.5,
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"1% top",
        end:"10% top",
        scrub:1,
    }
})
gsap.to(".intros",{
   opacity:1,
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"1% top",
        end:"10% top",
        scrub:1,
    },
    stagger:0.1
})
gsap.to("#imgcont",{
   opacity:0.7,
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"20% top",
        end:"30% top",
        scrub:1,
        },
    stagger:0.1
})
gsap.to("#intro",{
   opacity:0.6,
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"20% top",
        end:"30% top",
        scrub:1,
        }
})
gsap.to("#heading",{
   opacity:0,
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"20% top",
        end:"30% top",
        scrub:1,
        },
    stagger:0.1
})
gsap.to("#card1",{
   translateY:"0%",
   rotateZ:"7deg",
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"20% top",
        end:"30% top",
        scrub:1,
        }
})
gsap.to("#card2",{
   translateY:"0%",
   rotateZ:"-9deg",
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"35% top",
        end:"45% top",
        scrub:1,
        }
})
gsap.to("#card3",{
   translateY:"0%",
   rotateZ:"2deg",
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"50% top",
        end:"60% top",
        scrub:1,
        }
})
gsap.to("#card4",{
   translateY:"0%",
   rotateZ:"-1deg",
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"65% top",
        end:"75% top",
        scrub:1,
        }
})
gsap.to("#ExtraSpace",{
   translateY:"-10vh",
    scrollTrigger:{
        trigger:"#pg1cont",
        start:"105% top",
        end:"125% top",
        scrub:1,
        }
})

// gsap.to('#carouselname', {
//     scrollTrigger: {
//       trigger: ".viddabba",
//       scrub: 0.1,
//       start: "102% top",
//       end: "120% top",
//     },
//     opacity:1,
//     y:0
//   });

// Function to adjust the path's "d" attribute based on SVG width


function baadwaale(){
  document.querySelector("#pg-4").hidden = false
  gsap.to("#allcont",{
    translateX:"-200vw",
    scrollTrigger:{
      trigger: "#pg3cont",
      start: "33.33% bottom",
      end: "50% bottom",
      scrub: 0.1,
    },
  })
  gsap.to(".circle",{
    translateY :"0%",
    duration: 0.7,
    ease: "power3.out",
 })
  gsap.to(".texxts",{
    scrollTrigger: {
      trigger: "#pg3cont",
      start: "top 70%",
      end: "bottom 20%",
    },
    stagger:0.1,
    opacity:1,
    y:0+"px",
  })
  gsap.to("#allcont",{
    scrollTrigger: {
      trigger: "#pg3cont",
      start: "25% 70%",
      end: "27% 70%",
      scrub:0.2,
    },
    backgroundColor:"#48bb78",
  })
  gsap.to("#pg3_2cont",{
    scrollTrigger: {
      trigger: "#pg3cont",
      start: "27% 70%",
      end: "32% 70%",
      scrub:0.2,
    },
    rotate:"0deg",
  })
  gsap.to(".dibbas",{
    scrollTrigger: {
      trigger: "#pg3cont",
      start: "25% 70%",
      end: "27% 70%",
      scrub:0.2,
    },
    backgroundColor:"#48bb78",
  })
  gsap.to("#pg3_2cont",{
    scrollTrigger: {
      trigger: "#pg3cont",
      start: "26% 70%",
      end: "29% 70%",
      scrub:0.2,
    },
    opacity:1,
  })


  gsap.to("#pg-4",{
    scrollTrigger: {
      trigger: "#pg3cont",
      start: "70% 70%",
      end: "70% 70%",
      scrub:0.2,
    },
    display:"none",
  })
}

let a = 0
const circle = document.querySelector('.circle')
const plts = document.querySelector('.plts')

let bbc = 100
let mbc = 900
if(screen.width<768){
  bbc = 0
  mbc = 500
}
if(screen.width<540){
  bbc = 0
  mbc = 400
}

let inpath = `M ${bbc} 30 Q ${(mbc+bbc)/2} 30 ${mbc} 30`;
const vw = window.innerWidth; // Get viewport width
// const inpath = `M ${vw * 0.1} 30 Q ${vw * 0.5} 30 ${vw * 0.9} 30`; 


gsap.to("svg path", {
  attr: { d: inpath },
  duration: 0.1,
  ease: "power3.out",
});
let q = 0



let dhaga = document.querySelector("#strng");
let newpg = document.querySelector("#pg2cont");
let isDragging = false;
let startY = 0;
let ui;

// Helper function to get the correct event (for both mouse and touch)
function getEventPosition(event) {
  if (event.type.includes('touch')) {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  } else {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }
}

let pg2cont = document.querySelector("#pg2cont");
let pg3cont = document.querySelector("#pg3cont");

function newpgchng() {
  plts.style.opacity = "0";
  a+=1
  setTimeout(() => {
    pg2cont.style.height = "300vh"
    circle.style.display = "block";
    plts.style.display = "none";
    pg3cont.style.display = "flex";
    q = 1
    baadwaale()

  }, 200);
}

// Start dragging (mouse or touch)
dhaga.addEventListener("mousedown", startDrag);
dhaga.addEventListener("touchstart", startDrag);

function startDrag(event) {
  console.log(getEventPosition(event));
  
  isDragging = true;
  const { y } = getEventPosition(event);
  startY = y; // Record the initial Y position
  dhaga.style.cursor = "grabbing"; // Change cursor to grabbing
}

// Perform actions while dragging (mouse or touch)
dhaga.addEventListener("mousemove", onDrag);
dhaga.addEventListener("touchmove", onDrag);

function onDrag(event) {
  if (isDragging) {
    const { x, y } = getEventPosition(event);
    let dist = newpg.clientHeight / 2;
    let deltaY = y - startY; // Difference between current and start Y positions

    // Prevent scrolling on touch devices during dragging
    if (event.type.includes('touch')) {
      event.preventDefault();
    }

    if (y < dist) {
      ui = Number(y) - dist;
    } else if (y > dist) {
      ui = Number(y) - dist + 50;
    }

    if (ui <= 350 && ui >= -300) {
      if(screen.width<768){
        inpath = `M ${bbc} 30 Q ${x} ${ui * 2} ${mbc} 30`;
      }else{
        inpath = `M ${bbc} 30 Q ${x - 500} ${ui * 2} ${mbc} 30`;
      }
    } else {
      inpath = `M ${bbc} 30 Q ${(mbc+bbc)/2} 30 ${mbc} 30`;
      setTimeout(() => {
        dhaga.style.opacity = 0;
        newpgchng();
      }, 300);
    }

    gsap.to("svg path", {
      attr: { d: inpath },
      duration: 0.2,
      ease: "power3.out",
    });
  }
}

// Stop dragging (mouse or touch)
dhaga.addEventListener("mouseup", stopDrag);
dhaga.addEventListener("touchend", stopDrag);

function stopDrag() {
  isDragging = false;
  dhaga.style.cursor = "grab"; // Change cursor back to grab
  gsap.to("svg path", {
    attr: { d: `M ${bbc} 30 Q ${(mbc+bbc)/2} 30 ${mbc} 30` },
    duration: 0.5,
    ease: "elastic.out(2,0.3)",
  });
}

// Cancel dragging when mouse or touch leaves the element
dhaga.addEventListener("mouseleave", cancelDrag);
dhaga.addEventListener("touchcancel", cancelDrag);

function cancelDrag() {
  if (isDragging) {
    isDragging = false;
    dhaga.style.cursor = "grab"; // Change cursor back to grab
    gsap.to("svg path", {
      attr: { d: `M ${bbc} 30 Q ${(mbc+bbc)/2} 30 ${mbc} 30` },
      duration: 0.5,
      ease: "elastic.out(2,0.3)",
    });
  }
}



  gsap.to(".circle",{
    rotate: "360deg",
    scrollTrigger:{
      trigger: "#pg2cont",
      start: "0% top",
      end: "100% top",
      scrub: 0.1,
    },
    ease: "linear"
  })
  gsap.to("#innercircle",{
    width:"100%",
    height:"100%",
    opacity:1,
    scrollTrigger:{
      trigger: "#pg2cont",
      start: "0% top",
      end: "100% top",
      scrub: 0.1,
    },
    ease: "linear"
  })

  if(screen.width>768){
  gsap.to("#techss",{
    translateY:"4vh",
    opacity:1,
    scale:1,
    scrollTrigger:{
      trigger: "#pg2cont",
      start: "0% top",
      end: "100% top",
      scrub: 0.1,
    },
    stagger:0.55
  })
}else if(screen.width<768){
  document.querySelector(".circle").style.zIndex = "1000"
  gsap.to("#techss",{
    translateY:"-45vh",
    opacity:1,
    scale:1,
    scrollTrigger:{
      trigger: "#pg2cont",
      start: "0% top",
      end: "100% top",
      scrub: 0.1,
    },
    stagger:0.55
  })
}

  const dibbas = document.querySelectorAll('.dibbas');

  dibbas.forEach(dibba => {
    dibba.addEventListener('mouseenter', (e) => {
      const rect = dibba.getBoundingClientRect();
      const circle = dibba.querySelector('.absolute');      
      // Calculate relative mouse position
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      // Reset circle size and position it at mouse entry point
      circle.style.width = '0px';
      circle.style.opacity = 1;
      circle.style.height = '0px';
      circle.style.left = x + '%';
      circle.style.top = y + '%';
      // Animate circle to full size using CSS transition
      requestAnimationFrame(() => {
        circle.style.transition = 'width 1s ease-in, height 1s ease-in';
        circle.style.width = '3000px';
        circle.style.height = '3000px';
      });
    });

    dibba.addEventListener('mouseleave', (e) => {
      const circle = dibba.querySelector('.absolute');
      // Animate circle back to original size
      circle.style.transition = 'width 0.3s ease-in, height 0.3s ease-in';
      circle.style.width = '0px';
      circle.style.height = '0px';
      circle.style.opacity = 0;
    });
  });



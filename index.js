

gsap.to(".box", { x: 300,y:200,
  stagger:1, 
  duration: 3,
  rotation:360,
  repeat:-1,
  yoyo:true,
  ease:"sine"
  // ease: "bounce({strength:0.5, endAtStart:true})" //advanced
});
// gsap.fromTo(".box",
//   {x:700,y:400,opacity:0},
//   { x: 30,y:20,opacity:1,
//   duration: 3,
//   rotation:360,
// });

let animation = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" }});
animation
.to("#green-box",{y:300})
.to("#orange-box",{y:300},)
.to("#yellow-box",{x:300},)
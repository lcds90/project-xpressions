const slider = document.querySelector(".slider")
const messageStart = document.querySelector("#startMessage")
const messageGreeting = document.querySelector('#greetings')
const messageText01 = document.querySelector('#text01')
const messageText02 = document.querySelector('#text02')
const messageImage = document.querySelector('#startImage')
const button = document.querySelector("#btn-termos")

const navbar = document.querySelector("#navbar")
const navbarHeader = document.querySelector("#navbarHeader")
const account = document.querySelector("#navbarAccount")
const content = document.querySelector("#main")
const section = document.querySelector("#sectionAccount")
const gsap = new TimelineMax()

content.style.display = "none"
navbar.style.display = "none"
account.style.display = "none"
navbarHeader.style.display = "none"

gsap.fromTo(
  messageStart,
  2.5,
  { x: "-120%" },
  { x: "0%", ease: Power2.easeInOut }
).fromTo(
  slider,
  2,
  { x: "100%" },
  { x: "0%", ease: Power2.easeInOut },
  "-=1.8"
).fromTo(
  messageGreeting,
  2,
  { x: "100%" },
  { x: "0%", ease: Power2.easeInOut },
  "-=2.0"
).fromTo(
  messageImage,
  2,
  { x: "100%" },
  { x: "0%", ease: Power2.easeInOut },
  "-=2.5"
).fromTo(
  messageText01,
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power2.easeInOut },
).fromTo(
  messageText02,
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power2.easeInOut },
)


button.addEventListener("click", function () {
  content.style.display = ""
  navbar.style.display = ''
  navbarHeader.style.display = ""
  account.style.display = ""

  gsap.fromTo(
    messageStart,
    2.5,
    { x: "0%" },
    { x: "-120%", ease: Power2.easeInOut }
  )
    .fromTo(
      slider,
      2,
      { x: "0%" },
      { x: "100%", ease: Power2.easeInOut },
      "-=1.8"
    )
    .fromTo(content, 2.5, { y: "-150%" }, { y: "0%", ease: Power2.easeInOut })
    .fromTo(
      navbarHeader,
      2.5,
      { y: "150%" },
      { y: "0%", ease: Power2.easeInOut },
      "-=2.0"
    )
    .fromTo(
      account,
      2.5,
      { y: "150%" },
      { y: "0%", ease: Power2.easeInOut },
      "-=2.5"
    )
    .fromTo(
      navbar,
      2.5,
      { opacity: 0 },
      { opacity: 1, ease: Power1.easeInOut },
      "-=2.5")

  setTimeout(function () {
    messageStart.style.display = "none"
    slider.style.display = "none"
  }, 4000)

})
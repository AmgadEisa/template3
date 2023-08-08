let megaMenu = document.querySelector(".mega-menu");
let otherLinks = document.querySelector(".nav-bar .links > li:last-child a ");
console.log(otherLinks);
// otherLinks.onClick = function () {
//   console.log("ff");
// };
otherLinks.addEventListener("mouseover", (e) => {
  e.preventDefault();
  megaMenu.style.cssText = `
    transform: translateY(0);
    opacity: 100%;display: block
  `;
});
document.body.onclick = () => {
  megaMenu.style.cssText = `
transform: translateY(-150%);
opacity: 0%
`;
};
// otherLinks.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   megaMenu.style.cssText = `
//     transform: translateY(0);
//     opacity: 100%;
//     display: block
//   `;
// });
// megaMenu.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   megaMenu.style.cssText = `
//     transform: translateY(60%);
//     opacity: 0%;
//     display: none
//   `;
// });

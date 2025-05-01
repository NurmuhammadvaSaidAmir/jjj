document.addEventListener("DOMContentLoaded", function () {
const elements = document.querySelectorAll("*");
  elements.forEach(el => {
    el.style.boxSizing = 'border-box';
    el.style.margin = '0';
    el.style.padding = '0';
    el.style.listStyle = 'none';
    el.style.textDecoration = 'none';
    el.style.fontFamily = 'inherit';
  });

  const header = document.querySelector("header");
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.paddingTop = '17px';
  header.style.paddingBottom = '18px';

  const nuriTop = document.querySelector(".nuri-top");
  nuriTop.style.maxWidth = '1280px';
  nuriTop.style.width = '100%';
  nuriTop.style.margin = '0 auto';
  nuriTop.style.paddingLeft = '24px';
  nuriTop.style.paddingRight = '35px';

  const nav = document.querySelector("nav");
  nav.style.display = 'flex';
  nav.style.alignItems = 'center';
  nav.style.justifyContent = 'space-between';

  const headerLeft = document.querySelector(".header__left");
  headerLeft.style.display = 'flex';
  headerLeft.style.alignItems = 'center';
  headerLeft.style.gap = '15px';

  const headerBtn = document.querySelector(".header__btn");
  headerBtn.style.display = 'flex';
  headerBtn.style.alignItems = 'center';
  headerBtn.style.gap = '15px';
  headerBtn.style.width = '256px';
  headerBtn.style.height = '36px';
  headerBtn.style.border = 'none';
  headerBtn.style.borderRadius = '12px';
  headerBtn.style.background = 'rgb(252, 0, 74)';
  headerBtn.style.justifyContent = 'center';
  headerBtn.style.padding = '0 41px';
  headerBtn.style.color = 'white';
  headerBtn.style.fontFamily = 'Inter';
  headerBtn.style.fontSize = '14.75px';
  headerBtn.style.fontWeight = '400';
  headerBtn.style.lineHeight = '24px';
  headerBtn.style.textAlign = 'center';
  headerBtn.style.transition = '0.3s ease-in-out';

  headerBtn.addEventListener("mouseover", () => {
    headerBtn.style.backgroundColor = 'black';
  });
  headerBtn.addEventListener("mouseout", () => {
    headerBtn.style.backgroundColor = 'rgb(252, 0, 74)';
  });

  const headerList = document.querySelector(".header__list");
  headerList.style.display = 'flex';
  headerList.style.alignItems = 'center';
  headerList.style.gap = '15px';

  const hero = document.querySelector(".hero");
  hero.style.paddingTop = '87px';

  const listItems = document.querySelectorAll(".list");
  listItems.forEach(el => {
    el.style.padding = '0 12px 12px';
    el.style.borderRadius = '15px';
    el.style.boxShadow = '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)';
    el.style.background = 'white';
  });

  const textItems = document.querySelectorAll(".text");
  textItems.forEach(el => {
    el.style.color = 'black';
    el.style.fontSize = '17.66px';
    el.style.fontWeight = '700';
    el.style.lineHeight = '28px';
    el.style.marginTop = '16px';
  });

  const text2Items = document.querySelectorAll(".text2");
  text2Items.forEach(el => {
    el.style.color = 'rgb(252, 0, 74)';
    el.style.fontSize = '18.28px';
    el.style.fontWeight = '500';
    el.style.lineHeight = '28px';
    el.style.marginTop = '8px';
  });

  const plusButtons = document.querySelectorAll(".plus");
  plusButtons.forEach(el => {
    el.style.backgroundColor = 'rgb(252, 0, 74)';
    el.style.border = 'none';
    el.style.borderRadius = '15px';
    el.style.width = '40px';
    el.style.height = '40px';
    el.style.padding = '6px';
    el.style.marginLeft = '170px';
  });

  const heroImages = document.querySelectorAll(".hero__img");
  heroImages.forEach(el => {
    el.style.borderRadius = '15px';
    el.style.width = '976px';
    el.style.height = '293.66px';
  });

  const title = document.querySelector(".title");
  title.style.color = 'rgb(38, 38, 38)';
  title.style.fontFamily = 'Inter';
  title.style.fontSize = '32.48px';
  title.style.fontWeight = '400';
  title.style.lineHeight = '40px';
  title.style.textAlign = 'left';

  const listBox = document.querySelectorAll(".list__box");
  listBox.forEach(el => {
    el.style.marginTop = '44px';
    el.style.display = 'flex';
    el.style.flexWrap = 'wrap';
    el.style.gap = '24px 12px';
  })
});

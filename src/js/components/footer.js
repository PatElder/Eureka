import footerTemplate from "../../hbs/footer.hbs";

export const createFooter = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = footerTemplate();
  // footer.innerHTML = style
  document.documentElement.appendChild(footer);
};

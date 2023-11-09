function init() {
  // Check if already set theme in local Storage
  if (!localStorage.getItem('theme')) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      window.localStorage.setItem("theme", "modern");
    else
      window.localStorage.setItem("theme", "green");
  };
  if (!localStorage.getItem('theme-radius')) window.localStorage.setItem("theme-radius", "radius-large");
  if (!localStorage.getItem('theme-font-size')) window.localStorage.setItem("theme-font-size", "font-regular");

  //  Add the set themes to the HTML
  htmx.find('html').classList.add(localStorage.getItem('theme'), localStorage.getItem('theme-radius'), localStorage.getItem('theme-font-size'));

};

init();
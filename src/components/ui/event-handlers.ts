/**
 * Inline JS scripts for handling different aria-state of the ui components
 */
export const ariaExpand = (extraEffect?: string) =>
  `event.stopPropagation();
  if (this.hasAttribute('aria-expanded')) { 
    ${extraEffect}
    this.removeAttribute('aria-expanded'); 
  } else { 
    this.setAttribute('aria-expanded', 'true');
  };`;

export const ariaSelect = (indicator: string, extraScript?: string) =>
  `${extraScript} htmx.takeClass(htmx.closest(event.target, 'button'),'${indicator}');`;

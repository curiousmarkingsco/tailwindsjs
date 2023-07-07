document.querySelectorAll('[class*="anim-group-click:"]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    handleAnimationGroup(trigger);
  });
});

document.querySelectorAll('[class*="anim-group-mouseover:"]').forEach((trigger) => {
  trigger.addEventListener('mouseover', () => {
    handleAnimationGroup(trigger);
  });
});

document.querySelectorAll('[class*="anim-group-mouseout:"]').forEach((trigger) => {
  trigger.addEventListener('mouseout', () => {
    handleAnimationGroup(trigger);
  });
});

function handleAnimationGroup(trigger) {
  const groupClass = trigger.className
    .split(' ')
    .find(name => /anim-group-(click|mouseover|mouseout):/.test(name));

  const groupId = groupClass.split(':')[1]; // remove 'anim-group-[action]:'

  // Find elements in the same group
  const elements = document.querySelectorAll(`[class*="anim-group:${groupId}"]`);

  elements.forEach((element) => {
    // Animate the element
    animateElement(element);

    updateAnimateFormElements(element);
  });
}

function animateElement(element) {
  const classNames = element.className.split(' ');
  let fromClasses = [], toClasses = [];

  // Extract 'from' and 'to' classes
  classNames.forEach(name => {
    if (name.startsWith('anim-from:')) fromClasses.push(name.slice(10)); // remove 'anim-from:'
    if (name.startsWith('anim-to:')) toClasses.push(name.slice(8)); // remove 'anim-to:'
  });

  // Toggle classes
  fromClasses.forEach((fromClass, index) => {
    if (element.classList.contains(fromClass)) {
      element.classList.remove(fromClass);
      element.classList.add(toClasses[index]);
    } else {
      element.classList.remove(toClasses[index]);
      element.classList.add(fromClass);
    }
  });
}

function updateAnimateFormElements(element) {
  // Toggle 'aria-checked' attribute if role is 'switch'
  if (element.getAttribute('role') === 'switch') {
    const isChecked = element.getAttribute('aria-checked') === 'true';
    element.setAttribute('aria-checked', !isChecked);
  }
}

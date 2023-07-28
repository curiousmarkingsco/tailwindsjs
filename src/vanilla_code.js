document.querySelectorAll('[class*="group-anim-click:"]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    handleAnimationGroup(trigger);
  });
});

document.querySelectorAll('[class*="group-anim-mouseover:"]').forEach((trigger) => {
  trigger.addEventListener('mouseover', () => {
    handleAnimationGroup(trigger);
  });
});

document.querySelectorAll('[class*="group-anim-mouseout:"]').forEach((trigger) => {
  trigger.addEventListener('mouseout', () => {
    handleAnimationGroup(trigger);
  });
});

document.querySelectorAll('[class*="group-anim-mouseenter:"]').forEach((trigger) => {
  trigger.addEventListener('mouseenter', () => {
    handleAnimationGroup(trigger);
  });
});

document.querySelectorAll('[class*="group-anim-mouseleave:"]').forEach((trigger) => {
  trigger.addEventListener('mouseleave', () => {
    handleAnimationGroup(trigger);
  });
});

document.querySelectorAll('[class*="group-anim-change:"]').forEach((trigger) => {
  trigger.addEventListener('change', () => {
    handleAnimationGroup(trigger);
  });
});

document.querySelectorAll('[class*="group-anim-submit:"]').forEach((trigger) => {
  trigger.addEventListener('submit', () => {
    handleAnimationGroup(trigger);
  });
});

function handleAnimationGroup(trigger) {
  const groupClass = trigger.className
    .split(' ')
    .find(name => /group-anim-(click|mouseover|mouseout|mouseenter|mouseleave|change|submit):/.test(name));

  const groupId = groupClass.split(':')[1]; // remove 'group-anim-[action]:'

  // Find elements in the same group
  const elements = document.querySelectorAll(`[class*="group-anim:${groupId}"]`);

  elements.forEach((element) => {
    // Animate the element
    animateElement(element);

    updateAnimateFormElements(element);
  });
}

function animateElement(element) {
  let classNames = null;
  if (element.tagName === 'svg'){
    classNames = element.className.baseVal.split(' ');
  } else {
    classNames = element.className.split(' ');
  }
  let fromClasses = [], toClasses = [];

  // Extract 'from' and 'to' classes
  classNames.forEach(name => {
    if (name.startsWith('from-anim:')) fromClasses.push(name.slice(10)); // remove 'from-anim:'
    if (name.startsWith('to-anim:')) toClasses.push(name.slice(8)); // remove 'to-anim:'
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

import { gsap } from 'gsap';

// Page transition animations
export function pageEnterAnimation(node: HTMLElement, delay = 0) {
  // Create a timeline for complex animations
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  
  // Initial state
  gsap.set(node, { opacity: 0, y: 20 });
  
  // Animation sequence
  tl.to(node, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: delay,
  });
  
  return tl;
}

// Element hover animations
export function hoverAnimation(node: HTMLElement) {
  // Scale up slightly and add a box shadow on hover
  const onMouseEnter = () => {
    gsap.to(node, {
      scale: 1.02,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      duration: 0.3
    });
  };
  
  // Scale back to normal and remove the shadow on mouse leave
  const onMouseLeave = () => {
    gsap.to(node, {
      scale: 1,
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
      duration: 0.3
    });
  };
  
  // Add event listeners
  node.addEventListener('mouseenter', onMouseEnter);
  node.addEventListener('mouseleave', onMouseLeave);
  
  // Return clean-up function
  return {
    destroy() {
      node.removeEventListener('mouseenter', onMouseEnter);
      node.removeEventListener('mouseleave', onMouseLeave);
    }
  };
}

// Text reveal animation
export function textReveal(node: HTMLElement, delay = 0) {
  // Split text into spans for individual character animation
  const text = node.textContent || '';
  const chars = text.split('');
  
  // Clear original text
  node.textContent = '';
  
  // Create a span for each character
  chars.forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    span.style.transform = 'translateY(20px)';
    node.appendChild(span);
  });
  
  // Animate each character
  gsap.to(node.children, {
    opacity: 1,
    y: 0,
    stagger: 0.03,
    duration: 0.4,
    ease: 'power2.out',
    delay: delay
  });
  
  return {
    destroy() {
      // Remove the spans and restore the original text
      node.textContent = text;
    }
  };
}
const UPDATE = ({target, x, y }) => {
    const bounds = target.getBoundingClientRect()
    target.style.setProperty('--x', x - bounds.left)
    target.style.setProperty('--y', y - bounds.top)
  }
  
  const BTNS = document.querySelectorAll('button')
  BTNS.forEach(BTN => BTN.addEventListener('pointermove', UPDATE))
  
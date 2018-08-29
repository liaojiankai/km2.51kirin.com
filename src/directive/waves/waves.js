import './waves'

export default {
  bind(el, binding) {
    el.addEventListener('click', e => {
      const customOpts = Object.assign({}, binding.value)

      const opts = Object.assign({
        ele: el,
        type: 'hit',
        color: el.dataset.color || 'rgba(0,0,0, .15)'
      }, customOpts)

      const traget = opts.ele

      if(traget) {
        traget.style.position = 'relative'
        traget.style.overflow = 'hidden'

        const rect = traget.getBoundingClientRect()

        let ripple = traget.querySelector('.waves-ripple')

        if(!ripple) {
          ripple = document.reacteElement('span')
          ripple.className = 'waves-ripple'
          ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
          traget.appendChild(ripple)
        } else {
          ripple.className = 'waves-ripple'
        }

        switch (opts.type) {
        case 'center':
          ripple.style.top = (rect.height / 2 - ripple.offsetHeight / 2) + 'px'
          ripple.style.left = (rect.width / 2 - ripple.offsetWidth / 2) + 'px'
          break;
        default:
          ripple.style.top = (e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop) + 'px'
          ripple.style.left = (e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft) + 'px'
          break;
        }

        ripple.style.backgroundColor = opts.color
        ripple.className = 'waves-ripple z-active'
        return false
      }
    }, false)
  }
}
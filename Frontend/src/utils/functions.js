/*公用函数*/

  /**
   * Show hidden
   * @param {*} ele 
   * @param {*} click 
   * @param {*} second 
   */
export const show = (ele,click, second = 2) => {
  ele.current.style.display = 'block'
    const time = setTimeout(() => {
      ele.current.style.display = 'none'
      click && click(true)
      clearTimeout(time)
    },second * 1000)
}


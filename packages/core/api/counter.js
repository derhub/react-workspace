export const calculateAsync = (prevValue, value) => {
  return new Promise((res, err) => {
    setTimeout(() => {
      if (prevValue < 10 && prevValue > -10) {
        res({
          value: prevValue + value
        })
      } else {
        err('reach the max counter')
      }
    }, 200)

  })
}
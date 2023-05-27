// const { default: Swal } = require("sweetalert2");

function enviarRespostas() {
    let timerInterval
Swal.fire({
  title: 'Aguarde alguns segundos...',
  html: 'Estamos analisando o melhor time para você!',
  timer: 3000,
  timerProgressBar: false,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 1000)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}
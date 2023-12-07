// fonte: https://www.youtube.com/watch?v=zh1xus05Kl8&ab_channel=ByteGrad

const btnElList = document.querySelectorAll('.btn');

btnElList.forEach(btnEl => {
  btnEl.addEventListener('click', () => {
    document.querySelector('.special')?.classList.remove('special');
    btnEl.classList.add('special');
    document.querySelector('.active')?.classList.remove('active');
    btnEl.classList.add('special');
  })
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});




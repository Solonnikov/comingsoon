const countdown = document.querySelector('.countdown');

// Set launch date
const launchDate = new Date('Jan 4, 2019 17:00:00').getTime();

// Update every second
const intv = setInterval(() => {
  // Get todays date and time
  const now = new Date().getTime();

  // Distance from now to launchdate
  const distance = launchDate - now;

  // Time calc
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div>${days} <span>Days</span></div>
    <div>${hours} <span>Hours</span></div>
    <div>${mins} <span>Minutes</span></div>
    <div>${seconds} <span>Seconds</span></div>
  `;

  // If launchdate passed
  if(days < 0) {
    // stop countdown
    clearInterval(intvl);
    // Style 
    countdown.style.color ='#17a2b8'
    countdown.innerHTML = 'Launched';
  }
}, 1000);
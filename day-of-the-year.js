function dayOfTheYear(date) {
  const dt = new Date(date);
  dt.setUTCFullYear(date.getUTCFullYear(), 0, 1);
  const diff = date - dt
  const days = diff / (1000 * 60 * 60 * 24);
    // console.log(Math.floor(days) + 1);
}

dayOfTheYear(new Date('1664-08-09'));

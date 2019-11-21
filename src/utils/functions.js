function toFarsiNumber(n) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  if (n || n === 0) {
    return n.toString().replace(/\d/g, x => farsiDigits[x]);
  }
}

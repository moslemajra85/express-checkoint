function isAvailable(req, res, next) {
  const date = new Date();
  const workingDay = date.getDay();
  const hours = date.getHours();
  if (workingDay >= 1 && workingDay <= 5 && hours >= 9 && hours <= 17) {
    next();
  } else {
    res.render('non-available', {
      mytitle: 'Out Of Service',
      message: `It is ${new Date()}, App is out of service!`,
    });
  }
}

module.exports = isAvailable;

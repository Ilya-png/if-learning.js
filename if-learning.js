function isItLong(val1) {
  if (val1.length > 20) {
    return "That's a long string!";
  }
}

function isItMedium(val1) {
  if (val1.length <= 20 && val1.length >= 10) {
    return "That's a regular sized string!";
  }
}

function isItShort(val1) {
  if (val1.length < 10) {
    return "That's a small string!";
  } else {
    return "That's not a small string!";
  }
}

function howLongIsMyString(val1) {
  if (val1.length > 20) {
    return "That's a long string!";
  } else if (val1.length <= 20 && val1.length >= 10) {
    return "That's a regular sized string!";
  } else {
    val1.length < 10;
    return "That's a small string!";
  }
}

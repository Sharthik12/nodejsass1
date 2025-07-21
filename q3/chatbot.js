function getResponse(userInput) {
  const input = userInput.toLowerCase().trim();

  if (input.includes("car")) {
    return "We have information on various cars. Please specify the make or model.";
  } else if (input.includes("available")) {
    return "Yes, the car is available for a test drive.";
  } else if (input.includes("timing") || input.includes("hours") || input.includes("open")) {
    return "The showroom is open from 9 AM to 6 PM on weekdays.";
  } else if (input.includes("membership") || input.includes("subscribe")) {
    return "To join our car club membership, please register at the front desk.";
  } else if (input.includes("bye") || input.includes("exit")) {
    return "Goodbye! Drive safe.";
  } else {
    return "Sorry, I didn't understand that. Can you rephrase?";
  }
}

module.exports = { getResponse };
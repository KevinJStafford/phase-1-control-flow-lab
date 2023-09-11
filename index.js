function scuberGreetingForFeet(feet){
  let message
  if (feet <= 400) {
    message = `This one is on me!`;
  } else if (feet < 2000) {
    message = 'That will be twenty bucks.';
  } else if (feet <= 2500) {
    message = `I will gladly take your thirty bucks.`;
  } else if (feet > 2500) {
    message = `No can do.`;
  }
  return message;
};

function ternaryCheckCity(city){
  let cityMessage = city == 'NYC' ? "Ok, sounds good." : "No go.";

  return cityMessage;
}

function switchOnCharmFromTip(tipAmount){

  let charmResponse;

  switch (tipAmount) {
    case 'generous':
      charmResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      charmResponse = 'Thank you.'
      break;
    default:
      charmResponse = "Bye.";
      break;
  };
  return charmResponse;
};
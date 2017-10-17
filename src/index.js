//let allEvents; - removing from global scope - causes conflicts
//let event; - removing from Global scope
const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };

const getAllEvents = () => {
	return ['Marathon', 'Triathlon', 'Decathlon'];
};

/* this is used a few places and it is vulnerable */ 


const getRandomEvent = () => {
	const allEvents = getAllEvents();//replacing array below
  //allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  //event = allEvents[Math.floor(Math.random() * allEvents.length)];
  const event = allEvents[Math.floor(Math.random() * allEvents.length)];
  return event;
};


const getEventActivities = (event) => {
	const allEvents = getAllEvents();

  if (!allEvents.includes(event)) {
    return null; 
  }
  
  if (event === 'Marathon') {
    const activities = ['Running'];
    return activities.join(', '); 
  } 
  if (event === 'Triathlon') {
    const activities = ['Running', 'Cycling', 'Swimming'];
    return activities.join(', '); 
  } 
  if (event === 'Decathlon') {
    const activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    return activities.join(', '); 
  }
  
};

const getDaysToTrain = (event) => {
	const allEvents = getAllEvents();
  if (!allEvents.includes(event)) {
    return null; 
  }
  
  return eventTrainingTimes[event];
};


getRandomEvent();
console.log('Your event is a ' + 'placeholder' + '. Your event activities consist of ' + getEventActivities() + '. You have ' + getDaysToTrain() +  ' days to train.');


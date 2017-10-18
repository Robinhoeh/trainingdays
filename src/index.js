//let allEvents; - removing from global scope - causes conflicts
//let event; - removing from Global scope
//const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };//only declared once - moving to getDaysToTrain

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
    let activities = ['Running'];//changed from const to let to loosen scope 
    return activities.join(', '); 
  } 
  if (event === 'Triathlon') {
    let activities = ['Running', 'Cycling', 'Swimming'];
    return activities.join(', '); 
  } 
  if (event === 'Decathlon') {
    let activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    return activities.join(', '); 
  }
  
};

const getDaysToTrain = (event) => {
	const allEvents = getAllEvents();
  if (!allEvents.includes(event)) {
    return null; 
  }
  
  const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
  return eventTrainingTimes[event];//event is placeholder - ie Marathon
};

const getEventMessage = () => {
	const myEvent = getRandomEvent();//randomly selects event from array
	console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities(myEvent) + '. You have ' + getDaysToTrain(myEvent) +  ' days to train.');
}//myEvent when passed  logs - An event at random - when used as param - runs through each functions if/else
//myEvent param is a vehicle for info that doesnt hold a specific value

getEventMessage();


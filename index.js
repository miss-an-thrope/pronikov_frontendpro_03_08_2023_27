const clockDigits = document.querySelectorAll('.digit');

const updateClockView = (digit) => {
	for (let i = 0; i < clockDigits.length; i++){
		clockDigits[i].textContent = digit[i];
	}
}

const updateClock = () => {
	const currentTime = new Date();
	
	const hours = formatTimeValue(currentTime.getHours());
    const minutes = formatTimeValue(currentTime.getMinutes());
    const seconds = formatTimeValue(currentTime.getSeconds());
	
	const digits = `${hours}${minutes}${seconds}`;
	updateClockView(digits);
	
	//Escape from setInterval:
	const nextUpdateDelay = 1000 - currentTime.getMilliseconds();
	setTimeout(updateClock, nextUpdateDelay);
}

const formatTimeValue = (value) => String(value).padStart(2, '0');
updateClock();
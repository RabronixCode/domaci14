document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const dateTimeOutput = document.getElementById('dateTime');
    dateTimeOutput.innerHTML = `Current date and time: ${now}`;
  });
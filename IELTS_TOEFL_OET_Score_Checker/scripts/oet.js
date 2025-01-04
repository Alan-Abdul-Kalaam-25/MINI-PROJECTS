function calculateOET(event) {
  event.preventDefault();
  const listening = parseInt(document.getElementById("listening").value) || 0;
  const reading = parseInt(document.getElementById("reading").value) || 0;
  const writing = parseInt(document.getElementById("writing").value) || 0;
  const speaking = parseInt(document.getElementById("speaking").value) || 0;

  if (
    isNaN(listening) ||
    listening < 0 ||
    listening > 500 ||
    isNaN(reading) ||
    reading < 0 ||
    reading > 500 ||
    isNaN(writing) ||
    writing < 0 ||
    writing > 500 ||
    isNaN(speaking) ||
    speaking < 0 ||
    speaking > 500
  ) {
    document.getElementById("result").innerText =
      "Please enter valid scores between 0 and 500 for all fields.";
    return;
  }

  const grades = {
    A: [450, 500],
    B: [350, 440],
    "C+": [300, 340],
    C: [200, 290],
    D: [100, 190],
    E: [0, 90],
  };

  function getGrade(score) {
    for (const grade in grades) {
      const [min, max] = grades[grade];
      if (score >= min && score <= max) {
        return grade;
      }
    }
    return "Invalid";
  }

  const listeningGrade = getGrade(listening);
  const readingGrade = getGrade(reading);
  const writingGrade = getGrade(writing);
  const speakingGrade = getGrade(speaking);

  document.getElementById("result").innerHTML = `
        <p>Listening: ${listening} (${listeningGrade})</p>
        <p>Reading: ${reading} (${readingGrade})</p>
        <p>Writing: ${writing} (${writingGrade})</p>
        <p>Speaking: ${speaking} (${speakingGrade})</p>
    `;
}

function reload() {
  location.reload();
}

function checkScore(event) {
  event.preventDefault();

  const listen = parseFloat(document.getElementById("listening").value);
  const read = parseFloat(document.getElementById("reading").value);
  const write = parseFloat(document.getElementById("writing").value);
  const speak = parseFloat(document.getElementById("speaking").value);

  if (
    isNaN(listen) ||
    listen < 0 ||
    listen > 9 ||
    isNaN(read) ||
    read < 0 ||
    read > 9 ||
    isNaN(write) ||
    write < 0 ||
    write > 9 ||
    isNaN(speak) ||
    speak < 0 ||
    speak > 9
  ) {
    document.getElementById("result").innerText =
      "Please enter scores between 0 and 9 (inclusive).";
    return;
  }

  const average = (listen + read + write + speak) / 4;
  const overallBand = Math.round(average * 2) / 2;

  document.getElementById(
    "result"
  ).innerText = `Your Overall Band Score is: ${overallBand}`;
}

function reload() {
  location.reload();
}

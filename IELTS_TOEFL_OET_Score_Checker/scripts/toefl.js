function toeflCalc(event) {
  event.preventDefault();

  const listen = parseFloat(document.getElementById("listening").value);
  const read = parseFloat(document.getElementById("reading").value);
  const write = parseFloat(document.getElementById("writing").value);
  const speak = parseFloat(document.getElementById("speaking").value);

  if (
    isNaN(listen) ||
    listen < 0 ||
    listen > 30 ||
    isNaN(read) ||
    read < 0 ||
    read > 30 ||
    isNaN(write) ||
    write < 0 ||
    write > 30 ||
    isNaN(speak) ||
    speak < 0 ||
    speak > 30
  ) {
    document.querySelector(".result").innerText =
      "Please enter scores between 0 and 30 (inclusive).";
    return;
  }

  const totalScore = read + listen + speak + write;
  document.getElementById(
    "result"
  ).innerText = `Your Total TOEFL Score is: ${totalScore}`;
}

function reload() {
  location.reload();
}

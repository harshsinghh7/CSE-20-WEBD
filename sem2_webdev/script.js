function calculateResult() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    // Check empty fields
    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || isNaN(s4) || isNaN(s5)) {
        alert("Please enter marks for all subjects.");
        return;
    }

    // Each subject out of 20
    if (s1 > 100 || s2 > 100 || s3 > 100 || s4 > 100 || s5 > 100 ||
        s1 < 0 || s2 < 0 || s3 < 0 || s4 < 0 || s5 < 0) {
        alert("Each subject marks should be between 0 and 100.");
        return;
    }

    let total = s1 + s2 + s3 + s4 + s5;   
    let percentage = total;               

    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "F";

    let result;

    // Pass if every subject has at least 7 marks (33% of 20 ≈ 7)
    if (s1 >= 7 && s2 >= 7 && s3 >= 7 && s4 >= 7 && s5 >= 7)
        result = "PASS";
    else
        result = "FAIL";

    document.getElementById("result").innerHTML =
        "<b>Total Marks:</b> " + total + " / 100<br>" +
        "<b>Percentage:</b> " + percentage.toFixed(2) + "%<br>" +
        "<b>Grade:</b> " + grade + "<br>" +
        "<b>Result:</b> " + result;
}
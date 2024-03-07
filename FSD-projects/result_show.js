let students = [];

const check_result = () => {
    let k = JSON.parse(localStorage.getItem("studs"));
    let rollNo = document.getElementById("rno").value;
    if(rollNo!="")
    {
        if (k == null) {
            alert("List is empty");
        } else {
            students = k;
            let temp_list = students.filter((temp) => temp.rollNo == rollNo);

            if (temp_list.length != 0) {
                document.getElementById("r_rno").innerHTML = "Roll No :" + temp_list[0].rollNo;
                document.getElementById("name").innerHTML = "Name :" + temp_list[0].Name;
                document.getElementById("sci").innerHTML = temp_list[0].sci;
                document.getElementById("maths").innerHTML = temp_list[0].maths;
                document.getElementById("hindi").innerHTML = temp_list[0].hindi;
                document.getElementById("eng").innerHTML = temp_list[0].English;

                let total_marks = parseInt(temp_list[0].sci) + parseInt(temp_list[0].maths) +
                    parseInt(temp_list[0].hindi) + parseInt(temp_list[0].English);
                let avg = total_marks / 4;

                if (avg >= 80) {
                    document.getElementById("grade").innerHTML = "Grade :" + " A";
                } else if (avg >= 70 && avg < 80) {
                    document.getElementById("grade").innerHTML = "Grade :" + " B";
                } else if (avg >= 35 && avg < 70) {
                    document.getElementById("grade").innerHTML = "Grade :" + " C";
                } else {
                    document.getElementById("grade").innerHTML = "";
                }

                document.getElementById("total").innerHTML = total_marks;

                if (avg >= 35) {
                    document.getElementById("result").innerHTML = "Result : <span style='color:green;'>Pass</span>";
                } else {
                    document.getElementById("result").innerHTML = "Result : <span style='color:red;'>Fail</span>";
                }

                document.getElementById("r_card").style.visibility = "visible";
                document.getElementById("btn").style.visibility = "visible";
            } else {
                document.getElementById("msg").style.color = "red";
                document.getElementById("msg").innerHTML = "Student not found";
            }
        }
    }
    else{
        document.getElementById("msg").style.color = "red";
        document.getElementById("msg").innerHTML = "Please enter Roll No.";
    }
};

const downloadPDF = () => {
    // Get the HTML content to be converted to PDF
    const element = document.getElementById("r_card");

    // Options for html2pdf
    const options = {
        margin: 10,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Use html2pdf library to generate PDF
    html2pdf(element, options);
};
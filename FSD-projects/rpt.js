const show_report=()=>
{
    let rollNo=localStorage.getItem("roll_no");
    let k= JSON.parse(localStorage.getItem("studs"))
    // alert(rollNo);
    if(k==null)
    {
        alert("list is empty")
    }
    else
    {   students=k
        let temp_list=students.filter((temp)=> temp.rollNo==rollNo)
        if(temp_list.length!=0)
        {
            document.getElementById("r_rno").innerHTML="Roll No :"+temp_list[0].rollNo
            document.getElementById("name").innerHTML="Name :"+temp_list[0].Name
            document.getElementById("sci").innerHTML=temp_list[0].sci
            document.getElementById("maths").innerHTML=temp_list[0].maths
            document.getElementById("hindi").innerHTML=temp_list[0].hindi
            document.getElementById("eng").innerHTML=temp_list[0].English
            let total_marks=parseInt(temp_list[0].sci)+parseInt(temp_list[0].maths)+
                            parseInt(temp_list[0].hindi)+parseInt(temp_list[0].English);
            let avg=total_marks/4;
            if(avg>=80)
            {
                
                document.getElementById("grade").innerHTML="Grade :"+" A"
            }
            else if(avg>=70 && avg<80)
            {
                document.getElementById("grade").innerHTML="Grade :"+" B"
            }
            else if(avg>=35 && avg<70)
            {
                document.getElementById("grade").innerHTML="Grade :"+" C"

            }
            else{
                document.getElementById("grade").innerHTML="";
            }
            document.getElementById("total").innerHTML=total_marks;
            if(avg>=35)
            {  
                //document.getElementById("result").style.color="green";
                document.getElementById("result").innerHTML="Result : <span style='color:green;'>Pass</span>";
            }
            else{
                // document.getElementById("result").style.color="red";
                document.getElementById("result").innerHTML="Result : <span style='color:red;'>Fail</span>";
            }
            // document.getElementById("r_card").style.visibility="visible"


        }
        else
        {
            
            document.getElementById("msg").style.color="red";
            document.getElementById("msg").innerHTML="Student not found";
        }
    }

 
}
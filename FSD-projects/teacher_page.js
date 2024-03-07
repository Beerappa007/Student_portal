
//let k= JSON.parse(localStorage.getItem("studs"))

let students=[]

const addStudent=()=>

{
    
     
     
     
    let k= JSON.parse(localStorage.getItem("studs"))

let rollNo=document.getElementById("rno").value
let Name=document.getElementById("nm").value
let sci=document.getElementById("sci").value
let maths=document.getElementById("maths").value
let hindi=document.getElementById("hd").value
let English=document.getElementById("eng").value

//students=[...students,user]
if(sci=="")
{
    sci=0;
}
if(maths=="")
{
    maths=0;
}
if(hindi=="")
{
    hindi=0;
}
if(English=="")
{
    English=0;
}
let user={rollNo,Name,sci,maths,hindi,English}
let flag=false;
    if(rollNo!="" && Name!="")
    {   
            
            if(k==null)
            {
                students=[...students,user]
                //alert("student added")
                flag=true
            }
            else{

                // console.log(students)
                students=k;
                let temp_list=students.filter((temp)=> temp.rollNo==rollNo)
                console.log(temp_list.length)
                if(temp_list.length===0)
                {  
                    students=[...students,user] 
                    flag=true
                 }
                else{
                    
                    document.getElementById("dis").style.color="red";
                    document.getElementById("dis").innerHTML="Error: Student with this Roll No already exists";
                }
            }
            if(flag==true)
            {
            localStorage.setItem("studs",JSON.stringify(students))
            document.getElementById("dis").style.color="green";
            document.getElementById("dis").innerHTML="student added"
            }
    }
    else{
        document.getElementById("dis").style.color="red";
        document.getElementById("dis").innerHTML="Roll No. and Name cannot be empty"
    }
    
}
const remove_stud=()=>
{   
    let k= JSON.parse(localStorage.getItem("studs"))
    let rollNo=document.getElementById("rno").value
    if(rollNo!="")
    {
        if(k==null)
        {
            alert("list is empty")
        }
        else
        {   
            students=k
            let temp_list=students.filter((temp)=> temp.rollNo!=rollNo)
            if(temp_list.length!=students.length)
            {
            students=temp_list      
            localStorage.setItem("studs",JSON.stringify(students))
            document.getElementById("dis").innerHTML="student Removed"
            }
            else{
                alert("user not found")
            }
        }
    }
    else{
        document.getElementById("dis").style.color="red";
        document.getElementById("dis").innerHTML="Roll No. is required"
    }
}

const search=()=>
{
    let k= JSON.parse(localStorage.getItem("studs"))
    let rollNo=document.getElementById("rno").value
    if(rollNo!="")
    {
        if(k==null)
        {
            alert("list is empty")
        }
        else
        {   students=k
            let temp_list=students.filter((temp)=> temp.rollNo==rollNo)
            //console.log(temp_list.length)
            if(temp_list.length!=0)
            {
                //document.getElementById("rno").value=temp_list[0].rollNo
                document.getElementById("nm").value=temp_list[0].Name
                document.getElementById("sci").value=temp_list[0].sci
                document.getElementById("maths").value=temp_list[0].maths
                document.getElementById("hd").value=temp_list[0].hindi
                document.getElementById("eng").value=temp_list[0].English

            }
            else
            {
            alert("User not found")
            }
        }
    }
    else{
        document.getElementById("dis").style.color="red";
        document.getElementById("dis").innerHTML="Roll No. is required"
    }
}

const update=()=>
{
    let k= JSON.parse(localStorage.getItem("studs"))
    let rollNo=document.getElementById("rno").value
    if(rollNo!="")
    {
        if(k==null)
        {
            alert("list is empty")
        }
        else
        {       
                students=k
                let Name=document.getElementById("nm").value
                let sci=document.getElementById("sci").value
                let maths=document.getElementById("maths").value
                let hindi=document.getElementById("hd").value
                let English=document.getElementById("eng").value
                let flag=false
                students=students.filter((temp)=> {
                if(temp.rollNo==rollNo)
                {
                    flag=true                   
                    return  temp.Name=Name,
                            temp.sci=sci,
                            temp.maths=maths,
                            temp.hindi=hindi,
                            temp.English=English
                            
                }
                else{
                    return temp;
                }
            })

            if(flag)
            {
                localStorage.setItem("studs",JSON.stringify(students))
                console.log(students)
                document.getElementById("dis").style.color="green";
                document.getElementById("dis").innerHTML="Updated successfully"
            }
            else
            {
                alert("User not found")
            }

        }
    }
    else{
        document.getElementById("dis").style.color="red";
        document.getElementById("dis").innerHTML="Roll No. is required"
    }
}

function generate_report()
{
    let k= JSON.parse(localStorage.getItem("studs"))
    let rollNo=document.getElementById("rno").value
    if(rollNo!="")
    {   if(k==null)
        {
            alert("list is empty")
        }
        else
        {   students=k
            let temp_list=students.filter((temp)=> temp.rollNo==rollNo)
            //console.log(temp_list.length)
            if(temp_list.length!=0)
            {
                localStorage.setItem("roll_no",rollNo)
                location.href="rpt.html";
            }
            else
            {
            alert("User not found")
            }
        }
        
    }
    else{
        document.getElementById("dis").style.color="red";
        document.getElementById("dis").innerHTML="Roll No. is required"
    }
}
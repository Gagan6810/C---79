var student = [];
function submit(){
    var name_1 = document.getElementById("student_1").value;
    var name_2 = document.getElementById("student_2").value;
    var name_3 = document.getElementById("student_3").value;
    var name_4 = document.getElementById("student_4").value;
    student.push(name_1 , name_2 , name_3 , name_4);
    console.log(student);
    document.getElementById("display_name").innerHTML = student;
    document.getElementById("submit").style.display = "none";
    //document.getElementById("sorty").style.display = "inline-block";
}
function sorting(){
    student.sort();
    console.log("student");
    document.getElementById("display_name").innerHTML = student;
}
function goto_messge_main()
{
    //location.href = "../revised_sj_v2/message_main.html";  
    parent.document.getElementById("iframe_messageCenter").contentWindow.clear_newly_arrived_msgs();
    parent.document.getElementById('iframe_controller').contentWindow.document.getElementById("new_msg_cnt").innerHTML ="";
    parent.control_div("message");
}
function goto_photo_main()
{
    //location.href = "../revised_sj_v2/message_main.html";  
    parent.document.getElementById("iframe_photoCenter").contentWindow.clear_newly_arrived_photos();
    parent.document.getElementById('iframe_controller').contentWindow.document.getElementById("new_photo_cnt").innerHTML ="";
    parent.control_div("photo");
}

function goto_attendance_main()
{
    //location.href = "../revised_sj_v2/message_main.html";  
    parent.control_div("attendance");
}


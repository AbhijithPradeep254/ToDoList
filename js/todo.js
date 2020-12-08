var userName = document.getElementById("userName");
var passWord = document.getElementById("passWord");
var userString = "admin";
var passString = "12345";

userValid = () =>
{
    return userName.value == userString ? true:false;
} 

passValid = () =>
{
    return passWord.value == passString ? true:false;
}

passEntry = () =>
{
    $("#formId").attr("action","main.html");
    return true;
}

validation = callback =>
{
    if (userValid() && passValid())
    {
        callback();
    }
    else
    {
        alert("incorrect credentials");
        return false;
    }
}


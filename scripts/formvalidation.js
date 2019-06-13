function validateForm() {
    var fnm = document.frm.firstName;
    var lnm = document.frm.lastName;
    var eml = document.frm.email;
    var sbj = document.frm.message;
    if(Validation(fnm)){
        if(Validation(lnm)){
            if(Validation(eml)){
                if(Validation(sbj)){
                    return true;
                }
            }
        }
    }
    return false;
}

function Validation(obj)
{
    var len = obj.value.length;
    if (len == 0)
    {
        alert('something is missing. make sure to full required fields.');
        return false;
    }else
    return true;
}

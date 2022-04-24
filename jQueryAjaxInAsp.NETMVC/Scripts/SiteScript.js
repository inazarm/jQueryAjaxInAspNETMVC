function ShowImagePreview(imageUploader, previewImage) {
    if (imageUploader.files && imageUploader.files[0]) {
        var read = new FileReader();
        read.onload = function (e) {
            $(previewImage).attr('src', e.target.result);
        }
        read.readAsDataURL(imageUploader.files[0]);

    }
}


function jQueryAjaxPost(form) {
    $.validator.unobtrusive.parse(form);
    if ($(form).valid()) {
        var ajaxConfig = {
            type: 'POST',
            url: form.action,
            data: new FormData(form),
            success: function (response) {
                $("#firstTab").html(response);
                refreshAddNewTab($(form).attr('data-restUrl'), true);
            }
        }
        if ($(form).attr('enctype') == "multipart/form-data") {
            ajaxConfig["contentType"] = false;
            ajaxConfig["processData"] = false;
        }
        $.ajax(ajaxConfig);
    }
    return false;
}

//function jqueryajaxpost(form) {
//    $.validator.unobtrusive.parse(form);
//    if ($(form).valid()) {
//        var ajaxconfig = {
//            type: 'post',
//            url: form.action,
//            data: new formdata(form),
//            success: function (response) {
//                $("#firsttab").html(response.html);
//                refreshaddnewtab($(form).attr('data-resturl'), true);
//            }
//        }
//        if ($(form).attr('enctype') == "multipart/form-data") {
//            ajaxconfig["contenttype"] = false;
//            ajaxconfig["processdata"] = false;
//        }
//        $.ajax(ajaxconfig);

//    }
//    return false;
//}
function refreshAddNewTab(resetUrl, showViewTab) {
    debugger
    $.ajax({
        type: 'GET',
        url: resetUrl,
        success: function (response) {
            $("#secondTab").html(response);
            $('ul.nav.nav-tabs a:eq(1)').html('Add New');
            if (showViewTab)
                $('ul.nav.nav-tabs a:eq(0)').tab('show');
        }

    });
}
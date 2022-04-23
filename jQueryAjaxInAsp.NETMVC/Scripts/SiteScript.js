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
            data: new formData(form),
            success: function (response) {
                $("firstTab").html(response);
            }
        }
        if ($(form).attr('enctype') == "multitype/form-data") {
            ajaxConfig["contentType"] = false;
            ajaxConfig["processData"] = false;
        }
        $.ajax(ajaxConfig);
    }
    return false;

}
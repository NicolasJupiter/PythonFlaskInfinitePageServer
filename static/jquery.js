function getMoreData(){
        $.ajax({
            type:           "POST",
            url:            "/ajax",
            success:    function(data, textStatus, jqXHR){
                var appendHTML = "";
                 for(i = 0; i < data.length; i++){
                    appendHTML += "<li><img src=" + data[i] + "/></li>\n";
                }
                $("#images").append(appendHTML);
            },
            contentType:    "application/json",
            data:           JSON.stringify(3),    
        });    
    }

$(document).ready(function(){
    $.ajax({
            type:           "POST",
            url:            "/ajax",
            success:    function(data, textStatus, jqXHR){
                var appendHTML = "";
                for(i = 0; i < data.length; i++){
                    appendHTML += "<li><img src=" + data[i] + "/></li>\n";
                }
                $("#images").append(appendHTML);
            },
            contentType:    "application/json",
            data:           JSON.stringify(20),    
    });

    $("#images").scroll(function(){
        if($("#images").outerHeight() == $("#images").prop("scrollHeight") - $("#images").scrollTop()){ //checks whether the scrollbar has hit bottom
            getMoreData();
        }
    })
})


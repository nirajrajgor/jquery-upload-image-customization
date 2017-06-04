$(function(){
	$('body').on("change", "#my-profile-file-selector", function(){
		checkProfileSize({
			size: 200,
			width: 1280,
			// height: null
		});
	})
	$('#remove-profile-btn').on('click', function(event) {
        event.preventDefault();
        // make image view empty
        $('#upload-profile-image').attr('src', '');
        // make file name empty
        $('#upload-profile-file-info').html('');
        // make input file value empty
        $('input#my-profile-file-selector[type=file]').val('')
        // remove hide button
        $('#remove-profile-btn').hide();
        // show upload button again
        $('label.profile').show();
    });
});
function checkProfileSize(arg){
    $('#upload-profile-image').attr('src', '');
    $('#upload-profile-file-info').html('');
    $('#upload-profile-error').html('');
    var fileInput = $('form').find("input#my-profile-file-selector[type=file]")[0],
    file = fileInput.files && fileInput.files[0];
    var sizeKB = file.size / 1024;
    var tmppath = URL.createObjectURL(event.target.files[0]);
    var maxSize = arg.size || sizeKB;
    var imgHeight, imgWidth;
    console.log("maxSize "+maxSize);
    if( file ) {
        var img = new Image();
        img.src = window.URL.createObjectURL( file );
        img.onload = function() {
            var width = img.naturalWidth, height = img.naturalHeight;
            window.URL.revokeObjectURL( img.src );
            imgWidth = arg.width || width;
            console.log("imgWidth "+imgWidth);
			imgHeight = arg.height || height;
            if( sizeKB <= maxSize) {
            	if( width == imgWidth && height == imgHeight){
            		var fileName = $('input#my-profile-file-selector[type=file]').val();
	                fileName = fileName.substr(fileName.lastIndexOf("\\")+1);
	                $('#upload-profile-image').attr('src', tmppath);
	                $('#upload-profile-file-info').html(fileName);
	                $('label.profile').hide();
	                $('#remove-profile-btn').show();
            	}
            	else{
                    imgWidth = arg.width || "any";
                    imgHeight = arg.height || "any";
            		$('#upload-profile-error')
            			.html('Uploaded Picture Width should be '+
            			imgWidth+' and Height should be '+imgHeight);
	                var fileName = $('input#my-profile-file-selector[type=file]').val();
	                console.log(fileName);
            	}
            }
            else {
                $('#upload-profile-error').html('Uploaded Profile picture size should be less than '+maxSize+'KB');
                var fileName = $('input#my-profile-file-selector[type=file]').val();
                console.log(fileName);
            }
        };
    }
    else { //No file was input or browser doesn't support client side reading
        console.log('No file selected');
    }
}
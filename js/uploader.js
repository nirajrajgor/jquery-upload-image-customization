$(function(){
	$('body').on("change", "#my-profile-file-selector", function(){
		checkProfileSize({
			// size: 200,
			// width: 1280,
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
    var tmppath = URL.createObjectURL(fileInput.files[0]);
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

$(function(){
    $('body').on("change", "#my-profile-file-selector-1", function(){
        checkProfileSize1({
            size: 200
        });
    })
    $('#remove-profile-btn-1').on('click', function(event) {
        event.preventDefault();
        // make image view empty
        $('#upload-profile-image-1').attr('src', '');
        // make file name empty
        $('#upload-profile-file-info-1').html('');
        // make input file value empty
        $('input#my-profile-file-selector-1[type=file]').val('')
        // remove hide button
        $('#remove-profile-btn-1').hide();
        // show upload button again
        $('label.profile-1').show();
    });
});
function checkProfileSize1(arg){
    $('#upload-profile-image-1').attr('src', '');
    $('#upload-profile-file-info-1').html('');
    $('#upload-profile-error-1').html('');
    var fileInput = $('form').find("input#my-profile-file-selector-1[type=file]")[0],
    file = fileInput.files && fileInput.files[0];
    var sizeKB = file.size / 1024;
    var tmppath = URL.createObjectURL(fileInput.files[0]);
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
                    var fileName = $('input#my-profile-file-selector-1[type=file]').val();
                    fileName = fileName.substr(fileName.lastIndexOf("\\")+1);
                    $('#upload-profile-image-1').attr('src', tmppath);
                    $('#upload-profile-file-info-1').html(fileName);
                    $('label.profile-1').hide();
                    $('#remove-profile-btn-1').show();
                }
                else{
                    imgWidth = arg.width || "any";
                    imgHeight = arg.height || "any";
                    $('#upload-profile-error-1')
                        .html('Uploaded Picture Width should be '+
                        imgWidth+' and Height should be '+imgHeight);
                    var fileName = $('input#my-profile-file-selector-1[type=file]').val();
                    console.log(fileName);
                }
            }
            else {
                $('#upload-profile-error-1').html('Uploaded Profile picture size should be less than '+maxSize+'KB');
                var fileName = $('input#my-profile-file-selector-1[type=file]').val();
                console.log(fileName);
            }
        };
    }
    else { //No file was input or browser doesn't support client side reading
        console.log('No file selected');
    }
}


// Copy to Clipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
function setTooltip(element,message) {
  $(element).tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}
function hideTooltip(element) {
  setTimeout(function() {
    $(element).tooltip('hide');
  }, 2000);
}

$(function(){
    $('.html-copy').tooltip({
      trigger: 'click',
      placement: 'top'
    });
    $('.css-copy').tooltip({
      trigger: 'click',
      placement: 'top'
    });
    $('.js-copy').tooltip({
      trigger: 'click',
      placement: 'top'
    });

    $('.html-copy-1').tooltip({
      trigger: 'click',
      placement: 'top'
    });
    $('.css-copy-1').tooltip({
      trigger: 'click',
      placement: 'top'
    });
    $('.js-copy-1').tooltip({
      trigger: 'click',
      placement: 'top'
    });

    $('.html-copy').on('click',function(){
        copyToClipboard('#html-code');
        setTooltip($(this),'Copied!');
        hideTooltip($(this));
    });
    $('.css-copy').on('click',function(){
        copyToClipboard('#css-code');
        setTooltip($(this),'Copied!');
        hideTooltip($(this));
    });
    $('.js-copy').on('click',function(){
        copyToClipboard('#js-code');
        setTooltip($(this),'Copied!');
        hideTooltip($(this));
    });

    $('.html-copy-1').on('click',function(){
        copyToClipboard('#html-code-1');
        setTooltip($(this),'Copied!');
        hideTooltip($(this));
    });
    $('.css-copy-1').on('click',function(){
        copyToClipboard('#css-code-1');
        setTooltip($(this),'Copied!');
        hideTooltip($(this));
    });
    $('.js-copy-1').on('click',function(){
        copyToClipboard('#js-code-1');
        setTooltip($(this),'Copied!');
        hideTooltip($(this));
    });


});
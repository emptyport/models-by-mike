function showInstructions() {
    $('#posting-instructions').show(400);
    $('body').addClass('modal-open');

    document.getElementById('posting-instructions').innerHTML = `
    <div id="resultsmodal" class="modal fade show d-block" tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> 
        <div class="modal-dialog shadow-lg" role="document">
            <div class="modal-content">
                <div class="modal-header" id="modtit">
                    <h4>Sharing Instructions</h4>
                    <button type="button" class="close" id="btnxx" data-dismiss="modal" aria-label="Close">
                        &times;
                    </button>
                </div>
                <div class="modal-body">
                    <p>There are a couple different ways to share a 3D post.</p>
                    <h4>Download the model</h4>
                    <p>The first way to share a 3D post is to download the model and then upload it to Facebook. You must be on a desktop or laptop computer to do this.</p>
                        <ol>
                            <li>Click the "Download!" button.</li>
                            <li>Go to Facebook and click "Write a post..." to start a post.</li>
                            <li>Click and drag the file from your computer into your post.</li>
                        </ol>
                    <p>If you need help, there is a video <a target="_blank" href="https://developers.facebook.com/docs/sharing/3d-posts/">on this page</a> which demonstrates how to do it.</p>

                    <h4>Share the model</h4>
                    <p>The second way to share a 3D post is to click the "Share to Facebook!" button. This will open up Facebook and prepare the post. This works on both a desktop or laptop computer as well as on a mobile device. On mobile browsers, the 3D preview may not generate and instead you will just see a box with the name of the model. That is okay, the model will appear on Facebook after you publish your post.</p>
                
                </div>
                <div class="modal-footer">
                    <button id="btnxx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
}

$(function() {
    $("#posting-instructions").on('click', '#btnxx', function () {
        $('#posting-instructions').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});
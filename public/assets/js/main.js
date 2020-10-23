/*
 * jQuery File Upload Plugin JS Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global $, window */


function getFileList(temppath, previewid)
{
    $.ajax({
        type:'get',
        url:'/utilities/getFileList?temppath='+temppath,             
        success:function(reasult){
          previewid="#"+previewid;
          var trHTML="";
          if (reasult.IsSuccess && reasult.Data.length > 0) { 
            $.each(reasult.Data, function (key, item) {  
              trHTML += '<img src="/'+item+'" style="max-width:240px;"/>';  
            });
          }
          else{
            trHTML += '<img src="/img/default.jpg" style="max-width:240px;"/>';  
          }

          $(previewid).html(trHTML);
        },
        error:function(reasult){

          console.log(reasult);
        }
      });
}


// $('body').toggleClass('quick-sidebar-toggler');


// $('body').toggleClass('quick-sidebar-toggler');


function deleteUploadedFileList(temppath, previewid)
{
    $.ajax({
        type:'get',
        url:'/utilities/deleteUploadedFileList?temppath='+temppath,             
        success:function(reasult){
          getFileList(temppath,previewid)
        },
        error:function(reasult){

          console.log(reasult);
        }
      });
}

$(function () {
    'use strict';

    $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

    //    $('#fileupload').fileupload({
    //     // Uncomment the following to send cross-domain cookies:
    //     //xhrFields: {withCredentials: true},
    //      maxChunkSize:2000000,
    //      url: '/utilities/upload',
    //      add: function (e, data) {

    //                var _progressid = $(e.target).attr('data-progressid');
    //                var progressid = "#"+_progressid;


    //              var maxsize = $(e.target).attr('data-maxsize');
    //              var acceptedtype= $(e.target).attr('data-accepttype');
    //              maxsize = parseInt(maxsize);

    //            var uploadErrors = [];
    //            var regex = new RegExp(acceptedtype, 'gi');

    //             var acceptFileTypes = acceptedtype;
    //             if(data.originalFiles[0]['type'].length && !(data.originalFiles[0]['type']).match(regex)) {
    //                 uploadErrors.push('Not an accepted file type');
    //             }
    //             if(data.originalFiles[0]['size'].length && data.originalFiles[0]['size'] > maxsize) {
    //                 uploadErrors.push('Filesize is too big');
    //             }
    //             if(uploadErrors.length > 0) {
    //                 alert(uploadErrors.join("\n"));
    //             } else {
    //                 $(progressid).css('display','none');
    //                 data.submit();
    //             }

    //    // var jqXHR = data.submit();
    //         // .success(function (result, textStatus, jqXHR) {/* ... */})
    //         // .error(function (jqXHR, textStatus, errorThrown) {/* ... */})
    //         // .complete(function (result, textStatus, jqXHR) {/* ... */});
    //     },
    //     done: function (e, data) {
    //         getFileList($(e.target).attr('data-temppath'), $(e.target).attr('data-previewid'));
    //     },
    //     progressall: function (e, data) {
    //        var progress = parseInt(data.loaded / data.total * 100, 10);
    //         var _progressid = $(e.target).attr('data-progressid');

    //         var progresscontainer ="#"+_progressid;
    //         $(progresscontainer).css('display', 'block');

    //        var progressid = "#"+_progressid + "_width";
    //        $(progressid).css(
    //            'width',
    //            progress + '%'
    //        );
    //        var textper =progresscontainer + "_per";
    //        $(textper).html(progress + " % Complete");
    //      //  console.log(progress);
    //    },
    // });

       

});

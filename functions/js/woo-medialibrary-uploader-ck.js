/*-----------------------------------------------------------------------------------*//* WooThemes Media Library-driven AJAX File Uploader Module - JavaScript Functions *//* 2010-11-05. *//*
/* The code below is designed to work as a part of the WooThemes Media Library-driven
/* AJAX File Uploader Module. It is included only on screens where this module is used.
/*-----------------------------------------------------------------------------------*/(function(e){woothemesMLU={removeFile:function(){e(".mlu_remove").live("click",function(t){e(this).hide();e(this).parents().parents().children(".upload").attr("value","");e(this).parents(".screenshot").slideUp();return!1});e("a.delete-inline","#option-1").hide()},recreateFileField:function(){e("input.file").each(function(){var t='<input class="upload_file_button" type="button" value="Upload" />';e(this).wrap('<div class="file_wrap" />');e(this).addClass("file").css("opacity",0);e(this).parent().append(e('<div class="fake_file" />').append(e('<input type="text" class="upload" />').attr("id",e(this).attr("id")+"_file")).val(e(this).val()).append(t));e(this).bind("change",function(){e("#"+e(this).attr("id")+"_file").val(e(this).val())});e(this).bind("mouseout",function(){e("#"+e(this).attr("id")+"_file").val(e(this).val())})})},mediaUpload:function(){jQuery.noConflict();e("input.upload_button").removeAttr("style");var t,n,r=!0;e("input.upload_button").live("click",function(){t=e(this).prev("input").attr("name");n=e(this).attr("rel");var r="";e(this).parents(".section").find(".heading")&&(r=e(this).parents(".section").find(".heading").text());r==""&&e(this).parents(".woo_metabox_fields").prev("th").find("label")&&(r=e(this).parents(".woo_metabox_fields").prev("th").find("label").text());tb_show(r,"media-upload.php?post_id="+n+"&amp;title="+r+"&amp;is_woothemes=yes&amp;TB_iframe=1");return!1});window.original_send_to_editor=window.send_to_editor;window.send_to_editor=function(n){if(t){if(e(n).html(n).find("img").length>0)itemurl=e(n).html(n).find("img").attr("src");else{var i=n.split("'");itemurl=i[1];var s=i[2];s=s.replace(">","");s=s.replace("</a>","")}var o=/(^.*\.jpg|jpeg|png|gif|ico*)/gi,u=/(^.*\.pdf|doc|docx|ppt|pptx|odt*)/gi,a=/(^.*\.mp3|m4a|ogg|wav*)/gi,f=/(^.*\.mp4|m4v|mov|wmv|avi|mpg|ogv|3gp|3g2*)/gi;if(itemurl.match(o))r='<img src="'+itemurl+'" alt="" /><a href="#" class="mlu_remove button">Remove Image</a>';else{n='<a href="'+itemurl+'" target="_blank" rel="external">View File</a>';r='<div class="no_image"><span class="file_link">'+n+'</span><a href="#" class="mlu_remove button">Remove</a></div>'}e("#"+t).val(itemurl);e("#"+t).siblings(".screenshot").slideDown().html(r);tb_remove()}else window.original_send_to_editor(n);t=""}}};e(document).ready(function(){woothemesMLU.removeFile();woothemesMLU.recreateFileField();woothemesMLU.mediaUpload()})})(jQuery);
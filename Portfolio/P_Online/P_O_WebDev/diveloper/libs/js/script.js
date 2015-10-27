// JavaScript Document

$(document).ready(function() {
	
	$('#settingsHeading').click(function(e){
			$('#settingsContainer').slideToggle();
	});
	
	$('#exportHTML').click(function(){
		var popOutHtml = window.open("", "_blank", "width=200, height=200");
		var htmlCode = $('#workArea').html();
		$(popOutHtml.document.body).text(htmlCode);
		});
		
	$('#exportCSS').click(function(){
		var popOutCss = window.open("", "_blank", "width=200, height=200");
		var cssCode = {};
		$("#workArea").find('div').each(function() {
    		cssCode[this.id] = $(this).attr('style');
			});
		$(popOutCss.document.body).text(JSON.stringify(cssCode, null, 5));
		});
		
	$('#exportImg').click(function(){
		html2canvas($('#targetDiv'), 
		{
			onrendered: function(canvas){
				var img = canvas.toDataURL();
				window.open(img, "_blank", "width=500, height=500");
			}
		})
	});
		
	$('#delete').tooltip().click(function(e){
		e.preventDefault();
		$('#targetDiv').remove();
		var newDiv = document.createElement("div");
		newDiv.id = "targetDiv";
		$('#workArea').append(newDiv);
		});
					
    $('#textArea').keyup(function(){
		$('#targetDiv').text($(this).val());
	});
	
	$('#fontChoice').change(function(){
		$('#targetDiv').css("font-family", $(this).val());
	});
	
	$('#fontSize').slider({
		min: 12,
		max: 42,
		slide: function(event, ui){
			$('#targetDiv').css("font-size", ui.value)
		}
	});
	
	$('#fontColour').spectrum({
		clickoutFiresChange: true,
		change: function(color){
			$('#targetDiv').animate({color: color.toHexString()}, 1000);
		}
	})
	
	$('#bgColour').spectrum({
		clickoutFiresChange: true,
		change: function(color){
			$('#targetDiv').animate({backgroundColor: color.toHexString()}, 1000);
		}
	})
	
	$('#sizeHeading').click(function(){
		$('#sizeChanger').slideToggle();	
	});
	
	$('#divWidth').slider({
		min: 100,
		max: 450,
		step: 10,
		slide: function(event, ui){
			$('#targetDiv').css("width", ui.value)
		}
	});
	
	$('#divHeight').slider({
		min: 100,
		max: 200,
		step: 5,
		slide: function(event, ui){
			$('#targetDiv').css("height", ui.value)
		}
	});
	
	$('#borderHeading').click(function(){
		$('#borderchanger').slideToggle();	
	});
	
	$('#divBorderSize').slider({
		min: 0,
		max: 20,
		step: 2,
		slide: function(event, ui){
			$('#targetDiv').css("border-style", "solid").css("border-width", ui.value)
		}
	});
	
	$('#divBorderColour').spectrum({
		clickoutFiresChange: true,
		change: function(color){
			$('#targetDiv').animate({borderColor: color.toHexString()}, 1000);
		}
	})
	
	$('#cornerHeading').click(function(){
		$('#cornerChanger').slideToggle();	
	});
	
	$('#divCornerRoundness').slider({
		min: 0,
		max: 100,
		step: 10,
		slide: function(event, ui){
			$('#targetDiv').css("border-radius", ui.value)
		}
	});
	
	$('#paddingHeading').click(function(){
		$('#paddingChanger').slideToggle();	
	});
	
	$('#divPadding').slider({
		min: 0,
		max: 20,
		step: 2,
		slide: function(event, ui){
			$('#targetDiv').css("padding", ui.value)
		}
	});
});
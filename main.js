$(document).ready(function(){
	$("#dars").click(function(){
          $(".main").toggle('slow');
          $("#img").hide('slow').show();


	});
	$("#video").click(function(){
		$('.main1').toggle('slow');

	});
});
$(document).ready(function(){
	$("#video").click(function(){
		$('.main1').toggle('slow');
		 $("#img").hide('slow').show();
	});
});
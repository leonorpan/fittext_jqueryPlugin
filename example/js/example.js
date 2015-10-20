$(".inputText").keyup(function() {
	$(".outputText").text($(this).val());	
	localStorage.setItem("text", $(this).val());
	$("#outputDiv").fittext({storeFont: "yes"});
	checkIfSuccess();
});

$(".inputRange").change(function(){
		var sliderValue = parseInt($(this).val());
		$(".outputBox").width(sliderValue);
		localStorage.setItem("sliderValue", sliderValue);
		$("#outputDiv").fittext({storeFont: "yes"});
		checkIfSuccess();
});

 function checkIfSuccess(){
	if (parseInt(localStorage.getItem("fontSize"))===0){
		console.log(localStorage.getItem("fontSize"));
		$("#failAlert").removeClass("hiddenAlert");
	}else {
		$("#failAlert").addClass("hiddenAlert");
	}
	console.log("wtf");
}

$( document ).ready(function() {
	if (localStorage.getItem("sliderValue")){
		$(".outputBox").width(parseInt(localStorage.getItem("sliderValue")));
		$(".inputRange").val(parseInt(localStorage.getItem("sliderValue")));
	}
	var fontSize = parseInt(localStorage.getItem("fontSize"));
	$(".outputText").css({ 'font-size': fontSize});
	if (localStorage.getItem("text")){
		$(".outputBox span").text(localStorage.getItem("text"));
		$(".inputText").val(localStorage.getItem("text"));
	}
	$(".hiddenElement").removeClass("hiddenElement");
	localStorage.clear();
});


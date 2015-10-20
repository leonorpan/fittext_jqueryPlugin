//testing example.js first
function init (){
	var $defaultDiv = $('#testingParent');
	$defaultDiv.append("<span 'white-space:nowrap display:inline-block'></span>");
}

function disinit(){
	$('#testingParent').children().first().remove();
}

QUnit.test("Small Text, Big Div", function(assert) {
	init();
  var $divBox = $("#testingParent");
  $divBox.width(640);
  $divBox.height(50);
  var $span = $divBox.find("span:first");
  $span.text("Small Text");
  $divBox.fittext();
  assert.equal($span.css('font-size'), '39px');
  disinit();
});

QUnit.test("Big Text, Small Div", function(assert) {
	init();
  var $divBox = $("#testingParent");
  $divBox.width(5);
  $divBox.height(50);
  var $span = $divBox.find("span:first");
  $span.text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. So Lorem Ipsum is dummy");
  $divBox.fittext();
  assert.equal($span.css('font-size'), '0px');
  disinit();
});

//ensure that text does not overlap div borders

QUnit.test("Big Text, Average Div", function(assert) {
	init();
  var $divBox = $("#testingParent");
  $divBox.width(320);
  $divBox.height(50);
  var $span = $divBox.find("span:first");
  $span.text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. So Lorem Ipsum is dummy");
  $divBox.fittext();
  assert.ok($divBox.width()>$span.width(), "Span does not overlap Div after fitting text");
  disinit();
});

QUnit.test("Huge Text, Big Div", function(assert) {
	init();
  var $divBox = $("#testingParent");
  $divBox.width(630);
  $divBox.height(50);
  var $span = $divBox.find("span:first");
  $span.text("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'");
  $divBox.fittext();
  assert.ok($divBox.width()>$span.width(), "Span does not overlap Div after fitting text");
  disinit();
});

QUnit.test("Big Text, Small Div", function(assert) {
	init();
  var $divBox = $("#testingParent");
  $divBox.width(200);
  $divBox.height(50);
  var $span = $divBox.find("span:first");
  $span.text("et ipsum efficitur at. Nunc bibendum felis fermentum augue hendrerit sagittis. Proin molestie finibus porta. Sed a facilisis sem. Morbi vitae fermentum dui, ac facilisis odio. Curabitur eget accumsan nulla.");
  $divBox.fittext();
  assert.ok($divBox.width()>$span.width(), "Span does not overlap Div after fitting text");
  disinit();
});

QUnit.test("Big Text, Big Div", function(assert) {
	init();
  var $divBox = $("#testingParent");
  $divBox.width(555);
  $divBox.height(50);
  var $span = $divBox.find("span:first");
  $span.text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  $divBox.fittext();
  assert.ok($divBox.width()>$span.width(), "Span does not overlap Div after fitting text");
  disinit();
});

QUnit.test("Big Text, Tiny Div", function(assert) {
	init();
  var $divBox = $("#testingParent");
  $divBox.width(10);
  $divBox.height(50);
  var $span = $divBox.find("span:first");
  $span.text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  $divBox.fittext();
  assert.ok($divBox.width()>$span.width(), "Span does not overlap Div after fitting text");
  disinit();
});

//ensure that font-size is as big as possible

QUnit.test("Average Text, Tiny Div", function(assert) {
	init();
  var $divBox = $("#testingParent");
  $divBox.width(5);
  $divBox.height(50);
  var $span = $divBox.find("span:first");
  $span.text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. So Lorem Ipsum is dummy");
  $divBox.fittext();
  assert.equal($span.css('font-size'), '0px');
  $span.css(('font-size'),'1px');
  assert.ok($divBox.width()<$span.width(), "Span does overlap Div when increasing font by one after fitting text");
  disinit();
});

QUnit.test("Big Text, Average Div", function(assert) {
	init();
  var $divBox = $("#testingParent");
  $divBox.width(400);
  $divBox.height(50);
  var $span = $divBox.find("span:first");
  $span.text("Curabitur non libero non risus consequat scelerisque id a sem. Ut eleifend lectus vel ante semper posuere. Nunc sed elementum leo, eget varius dui. Donec id massa vehicula, iaculis justo ut, ultricies libero. Sed dapibus vulputate tellus, vel aliquam nulla placerat ac. Nulla blandit magna a ante suscipit pulvinar.");
  $divBox.fittext();
  var increasedFont = parseInt($span.css('font-size'))+1;
  $span.css('font-size',increasedFont);
  assert.ok($divBox.width()<$span.width(), "Span does overlap Div when increasing font by one after fitting text");
  disinit();
});
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "http://mirfix.ru/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка Отправлена! С Вами свяжутся в ближайшее время!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(document).ready(function(){
  $('.slider__container').slick({
  	autoplay: true,
  	dots: true,
  	// fade: true,

  });
});

var $page = $('html, body');
$('a[href*="#contacts"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

var $page = $('html, body');
$('a[href*="#about"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

var $page = $('html, body');
$('a[href*="#slider"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$("form").submit(function(e) {
    var ref = $(this).find("[required]");
    $(ref).each(function(){
        if ( $(this).val() == '' )
        {
            alert("Заполните поля Имя и Телефон");
            $(this).focus();
            e.preventDefault();
            return false;
        }
    });  return true;
});
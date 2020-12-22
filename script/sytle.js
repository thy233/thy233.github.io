let nav = $('#nav');
$('#open-nav').on('click', () => {
	nav.addClass('open');
});
$('#close-nav').on('click', () => {
	nav.removeClass('open');
});

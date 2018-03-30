var thumbs = document.querySelectorAll('.thumb');
for(var i = 0; i < thumbs.length; i++) {
	thumbs[i].onclick = function() {
		document.getElementById('bigimg').src = this.dataset.image;
	};
}

/* $(document).ready(function(){
	//ファイルの読み込み
	$.ajax({url: 'data.json', dataType: 'json'})
	.done(fanction(data){
		$(data).each(fanction(){
			if(this.crowded === 'yes') {
				var idName = '#' + this.id;
				$(idName).find('.check').addClass('crowded');
			}
		});
	})
	.fail(function(){
		window.alert('読み読みエラー');
	});

	//クリックされたら空き席状況を表示
	$('.check').on('click', function(){
		if($(this).hasClass('crowded')) {
			$(this).text('残りわずか').addClass('red');
	} else {
			$(this).text('お席あります').addClass('green');
	}
});
});
  */
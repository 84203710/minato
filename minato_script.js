var thumbs = document.querySelectorAll('.thumb');
for(var i = 0; i < thumbs.length; i++) {
	thumbs[i].onclick = function() {
		document.getElementById('bigimg').src = this.dataset.image;
	};
}

/* $(document).ready(function(){
	//�t�@�C���̓ǂݍ���
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
		window.alert('�ǂݓǂ݃G���[');
	});

	//�N���b�N���ꂽ��󂫐ȏ󋵂�\��
	$('.check').on('click', function(){
		if($(this).hasClass('crowded')) {
			$(this).text('�c��킸��').addClass('red');
	} else {
			$(this).text('���Ȃ���܂�').addClass('green');
	}
});
});
  */
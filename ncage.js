(function () {
	//nCage 
	var main = function ($) {

		var self = $.nCage = new function () { };

		$.extend(self, {
			nCageImgs: [
				'https://upload.wikimedia.org/wikipedia/en/6/63/Feels_good_man.jpg',
				'https://www.seekpng.com/png/detail/21-211386_image-mccoy-who-wiki-svg-free-library-pepe.png',
				'https://www.iconspng.com/uploads/happy-pepe-feelsgoodman.png',
				'https://www.iconspng.com/uploads/angry-pepe.png',
				'https://www.iconspng.com/uploads/happy-pepe.png',
				'https://www.freeiconspng.com/uploads/pepe-png-free-download-16.png',
				'https://www.seekpng.com/png/detail/948-9486303_316-kb-png-pepe-the-frog-icon.png',
				'https://i.redd.it/5bth5mxuupm51.png',
				'https://rarepepewallet.com/images/pepemoney.png',
				'http://rarepepedirectory.com/wp-content/uploads/2018/03/ONSENPEPE.png',
				'http://rarepepedirectory.com/wp-content/uploads/2018/03/YODAPEP.png',
				'http://rarepepedirectory.com/wp-content/uploads/2018/03/PEPCASSO.png',
				'http://rarepepedirectory.com/wp-content/uploads/2018/03/PINCHAN.jpeg',
				'http://rarepepedirectory.com/wp-content/uploads/2018/03/PEPETAR.png',
				'http://rarepepedirectory.com/wp-content/uploads/2018/02/CLUBSPEPE.png',
				'http://rarepepedirectory.com/wp-content/uploads/2017/09/PEPEBANDICUT.jpeg',
				'http://rarepepedirectory.com/wp-content/uploads/2017/09/GTAPEP.jpeg',
				'http://rarepepedirectory.com/wp-content/uploads/2017/09/BETTYPEPE.jpeg',
				'http://rarepepedirectory.com/wp-content/uploads/2017/09/PENIC.jpeg',
				'http://rarepepedirectory.com/wp-content/uploads/2017/09/PEPESTORM.png',
				'http://rarepepedirectory.com/wp-content/uploads/2017/08/RAIJINPEPE.png',
				'http://rarepepedirectory.com/wp-content/uploads/2017/08/SENJUPEPE.png',
				'http://rarepepedirectory.com/wp-content/uploads/2017/07/DRAGONKEK.jpeg',
				'http://rarepepedirectory.com/wp-content/uploads/2017/07/PEPEGOKU.jpeg',
				'http://rarepepedirectory.com/wp-content/uploads/2017/07/PEPENARUTO.jpeg',
				'http://rarepepedirectory.com/wp-content/uploads/2017/05/pepermaid.png',
			],
			handleImages: function (lstImgs, time) {
				$.each($('img'), function (i, item) {
					//Skip if image is already replaced
					if ($.inArray($(item).attr('src'), lstImgs) == -1) {
						var h = $(item).height();
						var w = $(item).width();

						//If image loaded
						if (h > 0 && w > 0) {
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
						}
						else {
							//Replace when loaded
							$(item).load(function () {
								//Prevent 'infinite' loop
								if ($.inArray($(item).attr('src'), lstImgs) == -1) {
									var h = $(item).height();
									var w = $(item).width();
									$(item).css('width', w + 'px').css('height', h + 'px');
									$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
								}
							});
						}
					}
				});

				//Keep replacing
				if (time > 0)
					setTimeout(function () { self.handleImages(lstImgs, time); }, time);
			}
		});

		//Run on jQuery ready
		$(function () {
			self.handleImages(self.nCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function () {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}

	//Add jQuery if not present, then run main
	if (typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', function () {
			jQuery.noConflict();
			main(jQuery);
		});
	} else {
		main(jQuery);
	}
})();
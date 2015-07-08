$(document).ready(function(){
		$('.mainHeader p a').click(function(){
			$('.mainHeader p a').removeClass('active');
			var lan = $(this).attr('class'); 
			if(lan == 'lang_selector lan-arabic')
			{	
				$(this).addClass('active');
				var myStylesLocation = "css/arabic-style.css";
				$('<link rel="stylesheet" type="text/css" href="'+myStylesLocation+'" >').appendTo("head");

				/*var len = $('.clsTable tr td').length;
				for(var i = 0; i < len; i++) {
					var first = $('.clsTable tr td').eq(0).html();
					$('.clsTable tr td').eq((len-1)-i).after('<td>'+first+'</td>');
					$('.clsTable tr td').eq(0).remove();
				}*/

				$('.clsTable').find('tr').each(function(){
					var len = $(this).find('td').length;
					for(var i = 0; i < len; i++) {
						var first = $(this).find('td').eq(0).html();
						$(this).find('td').eq((len-1)-i).after('<td>'+first+'</td>');
						$(this).find('td').eq(0).remove();
					}
				});
				
			}
			else if(lan == 'lang_selector lan-english')
			{	
				$(this).addClass('active');
				var myStylesLocation = "css/english-style.css";
				$('<link rel="stylesheet" type="text/css" href="'+myStylesLocation+'" >').appendTo("head");
			
				$('.clsTable').find('tr').each(function(){
					var len = $(this).find('td').length;
					for(var i = 0; i < len; i++) {
						var first = $(this).find('td').eq(0).html();
						$(this).find('td').eq((len-1)-i).after('<td>'+first+'</td>');
						$(this).find('td').eq(0).remove();
					}
				});
				
			}
			
		});
});

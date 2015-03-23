/**
 * @package WordPress
 * @subpackage Medicure
 * @since Medicure 1.0
 * 
 * Services Sorting Run Script for jQuery Isotope Plugin
 * Created by CMSMasters
 * 
 */


jQuery(document).ready(function () { 
	(function ($) { 
		var container = $('section.services');
		
		
		setColumnWidth();
		
		
		container.isotope( { 
			itemSelector : 'article.service', 
			layoutMode : 'fitRows', 
			resizable : false, 
			getSortData : { 
				s_name : function (el) { 
					return el.find('.entry-title').text();
				}, 
				s_date : function (el) { 
					return parseInt(el.find('.meta-date').text());
				} 
			} 
		} );
		
		
		
		function getNumbColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			
			
			if (winWidth > 850) {
				if (container.hasClass('four_columns')) {
					columnNumb = 4;
				} else if (container.hasClass('three_columns')) {
					columnNumb = 3;
				} else if (container.hasClass('two_columns')) {
					columnNumb = 2;
				}
			} else if (winWidth > 480) {
				columnNumb = 2;
			}
			
			
			return columnNumb;
		}
		
		
		
		function setColumnWidth() { 
			var contWidth = container.width(), 
				columnNumb = getNumbColumns(), 
				postWidth = Math.floor(contWidth / columnNumb);
			
			
			container.find('article.service').each(function () { 
				$(this).css( { 
					width : postWidth + 'px' 
				} );
			} );
		}
		
		
		
		function reArrangeProjects() { 
			setColumnWidth();
			
			
			container.isotope('reLayout');
		}
		
		
		
		$('.s_options_block .s_filter a').bind('click', function () { 
			var selector = $(this).attr('data-filter'), 
				text = $(this).text(), 
				filter_el = $(this).parent().parent().parent().find('.s_cat_filter');
			
			
			$(this).parent().parent().find('>li.current').removeClass('current');
			
			$(this).parent().addClass('current');
			
			
			filter_el.attr( { 
				title : text, 
				'data-filter' : selector 
			} ).find('span').text(text);
			
			
			container.isotope( { 
				filter : selector 
			} );
			
			
			setTimeout(function () { 
				reArrangeProjects();
			}, 300);
			
			
			return false;
		} );
		
		
		
		$('.s_options_block .s_sort > a').bind('click', function () { 
			var type = $(this).attr('name'), 
				asc = (type === 's_name') ? true : false, 
				current = ($(this).hasClass('current')) ? true : false, 
				reversed = ($(this).hasClass('reversed')) ? true : false;
			
			
			if (current) { 
				if (reversed) { 
					$(this).removeClass('reversed');
					
					
					asc = true;
				} else { 
					$(this).addClass('reversed');
					
					
					asc = false;
				}
			} else { 
				$(this).parent().find('.current').removeClass('current');
				
				$(this).parent().find('.reversed').removeClass('reversed');
				
				
				if (type === 's_name') { 
					$(this).addClass('current');
				} else { 
					$(this).addClass('current reversed');
				}
			}
			
			
			container.isotope( { 
				sortBy : type, 
				sortAscending : asc 
			} );
			
			
			setTimeout(function () { 
				reArrangeProjects();
			}, 300);
			
			
			return false;
		} );
		
		
		
		$(window).on('debouncedresize', function () { 
			reArrangeProjects();
		} );
	} )(jQuery);
} );


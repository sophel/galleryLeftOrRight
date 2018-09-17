//Gallery Constractor
		function Gallery( dom,options ){
			if( !dom || typeof dom !=='object' )
			return {};
			//galleryElement
			this.gallery = dom;
			//slide direction
			this.direction = dom.dataset.direction?dom.dataset.direction:'left';
			//loop gallery item1
			this.content1 = this.gallery.getElementsByClassName('my-gallery-wrapper')[0].getElementsByClassName('my-gallery-loop-item')[0];
			//loop gallery item2
			this.content2 = this.gallery.getElementsByClassName('my-gallery-wrapper')[0].getElementsByClassName('my-gallery-loop-item')[1];
			//slide speed
			this.speed = !!options && !!options.speed?options.speed:5;
			this.init();
		}
		Gallery.prototype = {
			init:function(){
				if( this.direction == "right" ){
				this.gallery.scrollLeft = this.gallery.scrollWidth-this.gallery.offsetWidth;
				}
				this.start();
				this.addEvents();
			},
			addEvents:function(){
				this.gallery.addEventListener('mouseenter',(function(e){
					this.stop();
				}).bind(this));
				this.gallery.addEventListener('mouseleave',(function(e){
					this.start();
				}).bind(this));
			},
			start:function(){
				this.i = setInterval( this.scroll.bind(this) ,this.speed);
			},
			stop:function(){
				clearInterval( this.i );
			},
			scroll:function(){
				if( this.direction === "left" ){//向左
					if( this.gallery.scrollLeft >= this.content1.scrollWidth ){
						this.gallery.scrollLeft = 0;
					}
					else{
						this.gallery.scrollLeft++;
					}
				}
				else if( this.direction === "right" ){//向右
					var refdist = this.gallery.scrollWidth-( this.content2.scrollWidth+this.gallery.offsetWidth );
					if( this.gallery.scrollLeft <= refdist ){
						this.gallery.scrollLeft = this.gallery.scrollWidth-this.gallery.offsetWidth;
					}
					else{
						this.gallery.scrollLeft--;
					}
				}
				else return;
			}
		};
		
		(function(options){
			var galleryDoms = document.querySelectorAll('.my-gallery');
			//console.log( galleryDoms );
			var myGalleries = [];
			Array.prototype.forEach.call(galleryDoms,function(dom){
				//console.log( dom );
				myGalleries.push( new Gallery( dom,options ) );
			}  );
			
			return myGalleries;
		})({speed:5});
//Wait for document to load
document.addEventListener("DOMContentLoaded", function(){
	const buttons=document.querySelectorAll('.button-dot');
	const slides=document.querySelectorAll('.slide');
	
	buttons.forEach((button,index)=>{
		button.addEventListener('click',function(){
			//remove the active class fromall slides and buttons
			slides.forEach(slide => slide.classList.remove('active'));
			buttons.forEach(btn => btn.classList.remove('active'));
			
			
			//Add the active class to the clicked sprite or button
			slides[index].classList.add('active');
			button.classList.add('active');
		});
	});
	
	//set the first image and button active by default
	slides[0].classList.add('active');
	buttons[0].classList.add('active');
});
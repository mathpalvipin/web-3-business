const menu = document.querySelector('.menu')
const navbar =document.querySelector('.navbar')
menu.addEventListener('click', ()=>
{
	navbar.classList.toggle('change')
	menu.classList.toggle('change')

})


const vedio= document.querySelector('.vedio');
const btn=document.querySelector('.button i')
const bar=document.querySelector('.vedio-bar')

const playpause =()=>{
	
if(vedio.paused){
	vedio.play()
	btn.className='far fa-pause-circle'
	vedio.style.opacity='.7'
} 
else{

	vedio.pause()
	btn.className='far fa-play-circle'
	vedio.style.opacity='.3'

}


}
btn.addEventListener('click',()=>{
	playpause()
})
vedio.addEventListener('timeupdate',()=>{

const barwidth=vedio.currentTime/vedio.duration;

bar.style.width=`${barwidth*100}%`
if(vedio.ended){
	vedio.pause()
	btn.className='far fa-play-circle'
	vedio.style.opacity='.3'  	
}
}
	)

  var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
     
    });

/*1. 웹 문서에 있는 이미지 갤러리중 하나의 이미지를 클릭하면,
 모달 창으 생성하도록 하는 구문 */
new LuminousGallery(document.querySelectorAll('grid-gallery'),{
caption: function(trigger){
    return trigger.querySelector('img').getAttribute('alt');
}
}); 
AOS.init({
    duration: 1000
})
/*question = 질문 / 질의문*/ 




 /*2. 마우스 휠로 드래그 하였을때, 스크롤이 반응함에 따라 부드럽게 요소가 나타날수 있도록 하는 구문 */ 








/*new LuminousGallery(document.querySelectorAll('.grid-gallery'), {}, {
    caption: function(trigger) {
    
      return trigger.querySelector('img').getAttribute('alt');
    }
  });
  AOS.init({
    duration: 1000
  });*/
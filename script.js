// 이 파일은 헤더에 필요한 자바스크립트 코드를 넣는 곳이에요.
// 지금은 특별한 기능이 없어서 비워둘게요.
// 나중에 로그인 기능이나 메뉴 클릭 기능을 추가할 수 있어요. 

// 아래는 히어로 캐러셀(슬라이드) 기능을 위한 코드에요.
let currentSlide = 0; // 지금 보여주는 슬라이드 번호
const slides = document.querySelectorAll('.slide'); // 모든 슬라이드를 가져와요
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn'); // 왼쪽 화살표
const nextBtn = document.getElementById('nextBtn'); // 오른쪽 화살표
let slideInterval = null; // 자동 넘김을 위한 변수

// 슬라이드를 보여주는 함수에요
function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
  currentSlide = idx;
}

// 다음 슬라이드로 넘어가는 함수에요
function nextSlide() {
  let next = (currentSlide + 1) % totalSlides;
  showSlide(next);
}

// 이전 슬라이드로 가는 함수에요
function prevSlide() {
  let prev = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(prev);
}

// 자동으로 슬라이드가 넘어가게 해요 (3초마다)
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 3000);
}
// 마우스를 올리면 자동 넘김을 멈춰요
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// 화살표 버튼에 클릭 이벤트를 넣어요
prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

// 슬라이드에 마우스를 올리면 자동 넘김이 멈춰요
slides.forEach(slide => {
  slide.addEventListener('mouseenter', stopAutoSlide);
  slide.addEventListener('mouseleave', startAutoSlide);
});

// 처음에 첫 슬라이드를 보여주고, 자동 넘김을 시작해요
showSlide(0);
startAutoSlide();

// 아래는 제품 설명의 '더보기' 버튼을 위한 코드에요.
document.querySelectorAll('.product-card').forEach(card => {
  const moreBtn = card.querySelector('.more-btn');
  const shortDesc = card.querySelector('.desc-short');
  const fullDesc = card.querySelector('.desc-full');
  moreBtn.addEventListener('click', function() {
    if (fullDesc.style.display === 'none' || fullDesc.style.display === '') {
      fullDesc.style.display = 'block'; // 전체 설명을 보여줘요
      shortDesc.style.display = 'none'; // 짧은 설명은 숨겨요
      moreBtn.textContent = '닫기';
    } else {
      fullDesc.style.display = 'none'; // 전체 설명을 숨겨요
      shortDesc.style.display = 'block'; // 짧은 설명을 다시 보여줘요
      moreBtn.textContent = '더보기';
    }
  });
});

// 아래는 사장님 인사말의 '더보기' 버튼을 위한 코드에요.
const ceoMoreBtn = document.querySelector('.ceo-more-btn');
if (ceoMoreBtn) {
  const ceoShort = document.querySelector('.ceo-short');
  const ceoFull = document.querySelector('.ceo-full');
  ceoMoreBtn.addEventListener('click', function() {
    if (ceoFull.style.display === 'none' || ceoFull.style.display === '') {
      ceoFull.style.display = 'block'; // 전체 인사말을 보여줘요
      ceoShort.style.display = 'none'; // 4줄만 보이는 부분은 숨겨요
      ceoMoreBtn.textContent = '닫기';
    } else {
      ceoFull.style.display = 'none'; // 전체 인사말을 숨겨요
      ceoShort.style.display = 'block'; // 4줄만 보이는 부분을 다시 보여줘요
      ceoMoreBtn.textContent = '더보기';
    }
  });
}

// 아래는 Q&A 질문 등록 폼의 자동 댓글을 위한 코드에요.
const qaForm = document.querySelector('.qa-form');
if (qaForm) {
  const qaComment = document.querySelector('.qa-comment');
  qaForm.addEventListener('submit', function(e) {
    e.preventDefault(); // 폼이 새로고침되지 않게 막아요
    qaComment.style.display = 'block'; // 자동 댓글을 보여줘요
    qaForm.reset(); // 입력란을 비워줘요
    setTimeout(() => {
      qaComment.style.display = 'none'; // 5초 후 자동 댓글을 숨겨요
    }, 5000);
  });
} 
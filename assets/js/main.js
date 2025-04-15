/* 개인정보제공동의 JS */
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("privacy_modal");
    const openBtn = document.getElementById("open_privacy");
    const closeBtn = document.querySelector(".close");

    // 모달 열기 이벤트 (자세히 보기 클릭 시)
    openBtn.addEventListener("click", function (event) {
        event.preventDefault(); // 링크 기본 동작 방지
        modal.style.display = "flex";
    });

    // 모달 닫기 이벤트 (X 버튼 클릭 시)
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // 초기 로딩 시 모달이 열리지 않도록 설정
    modal.style.display = "none";
});



/* 지도이동 */
document.querySelector("#mapImg").addEventListener("click", function () {
    const mapUrl = "https://map.naver.com/v5/search/서울특별시 중랑구 상봉로 105-1"; // 네이버 지도 예시
    window.open(mapUrl, "_blank"); // 새 창에서 지도 열기
});



/* 문자발송(예약하기) */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".reserve_btn").addEventListener("click", function () {
        const privacyCheck = document.getElementById("privacy_check");

        if (!privacyCheck.checked) {
            alert("개인정보 수집·이용에 동의해주세요.");
            return;
        }

        const phoneNumber = "01052054651"; // 문자 받을 번호
        const message = encodeURIComponent("안녕하세요! 상봉 더샵 퍼스트월드 예약을 신청합니다."); // 전송할 메시지

        // 문자 앱 실행 (사용자 확인 필요)
        window.location.href = `sms:${phoneNumber}?body=${message}`;
    });
});



/* 하단 전화, 문자 버튼 */
document.getElementById("call2").addEventListener("click", function () {
    const phoneNumber = "15332042"; // 전화번호
    window.location.href = `tel:${phoneNumber}`; // 전화 앱 실행
});

document.getElementById("msg").addEventListener("click", function () {
    const phoneNumber = "01052054651"; // 문자 받을 번호
    const message = encodeURIComponent("안녕하세요! 상봉 더샵 퍼스트월드 예약을 신청합니다."); // 전송할 메시지
    window.location.href = `sms:${phoneNumber}?body=${message}`; // 문자 앱 실행
});

/* 상단 전화 영역 클릭 */
// document.getElementById("call1").addEventListener("click", function () {
//     const phoneNumber = "15332042"; // 전화번호 (숫자만 입력)
//     window.location.href = `tel:${phoneNumber}`; // 전화 앱 실행
// });



// 사이드메뉴 열기/닫기 기능
const sideMenuIcon = document.getElementById('sideMenuIcon');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

// 사이드메뉴 토글 (메뉴 아이콘 클릭 시)
sideMenuIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // 클릭 이벤트가 전파되지 않도록 막음
    sideMenu.classList.toggle('open');
    overlay.style.visibility = sideMenu.classList.contains('open') ? 'visible' : 'hidden';
});

// 사이드메뉴 내부 클릭 시 전파 막기 (내부 클릭해도 닫히지 않도록)
sideMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});

// 전체 문서 클릭 시 (메뉴 외부 클릭하면 닫힘)
document.addEventListener('click', () => {
    if (sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
        overlay.style.visibility = 'hidden';
    }
});

// 오버레이 클릭 시에도 메뉴 닫기
overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.style.visibility = 'hidden';
});


// 상단 메인 로고 클릭시 홈으로 이동
// DOMContentLoaded 이벤트로 DOM 요소가 모두 로드된 후 실행되도록 합니다.
document.addEventListener('DOMContentLoaded', function () {
    // id가 "logoImage"인 이미지 요소를 선택합니다.
    const logoImage = document.getElementById('logoImage');

    // 이미지에 마우스 커서를 pointer로 변경하여 클릭 가능한 UI임을 표시합니다.
    logoImage.style.cursor = 'pointer';

    // 이미지에 클릭 이벤트 리스너를 추가합니다.
    logoImage.addEventListener('click', function () {
        // 원하는 링크로 이동합니다. 아래 URL을 원하는 링크로 변경하세요.
        window.location.href = './index.html';
    });
});

// 메인 메뉴에 각 영역 클릭 시 원하는 링크로 이동
// DOM이 모두 로드된 후 실행
document.addEventListener('DOMContentLoaded', function () {
    // .main_menu 내부의 각 메뉴 아이템을 선택 (두번째 단계의 div들)
    const menuItems = document.querySelectorAll('.main_menu > div > div');

    // 각 메뉴 아이템에 클릭 이벤트 리스너를 추가
    menuItems.forEach(function (item) {
        // 마우스 오버 시 클릭 가능함을 알리기 위한 커서 변경
        item.style.cursor = 'pointer';

        item.addEventListener('click', function () {
            // data-url 속성에 정의된 URL로 이동 (원하는 페이지로 변경하세요)
            const url = item.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // 서브메뉴 토글 함수
    function toggleSubmenu(event) {
        event.stopPropagation();
        var submenu = this.querySelector('.dropdown-content');
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            // 부모 요소에서 다른 서브메뉴 숨김
            var parentSubmenus = this.parentElement.querySelectorAll('.dropdown-content');
            parentSubmenus.forEach(function(submenu) {
                submenu.style.display = 'none';
            });

            submenu.style.display = "block";
        }
    }

    // 드롭다운 서브메뉴에 이벤트 리스너 추가
    var dropdownSubmenus = document.getElementsByClassName('dropdown-submenu');
    for (var i = 0; i < dropdownSubmenus.length; i++) {
        dropdownSubmenus[i].addEventListener('click', toggleSubmenu);
    }

    // 페이지를 클릭하면 모든 서브메뉴를 숨김
    document.body.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-submenu')) {
            var submenus = document.querySelectorAll('.dropdown-content');
            submenus.forEach(function(submenu) {
                submenu.style.display = 'none';
            });
        }
    });

    // 각 드롭다운에 대해
    document.querySelectorAll('.dropdown').forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.stopPropagation();

            // 먼저 모든 드롭다운 메뉴를 숨김
            document.querySelectorAll('.dropdown-content').forEach(function(element) {
                element.style.display = 'none';
            });

            // 클릭한 요소의 드롭다운 메뉴만 보이게 함
            this.querySelector('.dropdown-content').style.display = 'block';
        });   
    });

    // '전국여행'을 클릭했을 때의 이벤트 리스너
    document.querySelector("#provinces").addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            var province = event.target.dataset.province;
            loadCities(province);
        }
    });

    // 시/군/구 데이터 로드 함수
    function loadCities(province) {
        var cities;

        switch (province) {
            case "경기도":
                cities = ["고양시", "과천시", "광명시", "광주시", "구리시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시"
                , "시흥시", "안산시", "안성시", "안양시", "양주시", "여주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시"
                , "화성시"];
                break;
            case "강원도":
                cities = ["춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시", "홍천군", "횡성군", "영월군", "평창군", "정선군", "철원군", "화천군", "양구군"
                , "인제군", "고성군", "양양군"];
                break;
            case "충청북도":
                cities = ["청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"];
                break;
            // ... add more provinces as needed
            case "충청남도":
                cities = ["천안시", "공주시", "당진시", "보령시", "아산시", "서산시", "논산시", "계룡시", "금산군", "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군"];
                break;
            case "전라북도":
                cities = ["전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "완주시", "진안시", "무주군", "장수군", "임실군", "순창군", "고창군", "부안군"];
                break;
            case "전라남도":
                cities = ["목포시", "화순군", "여수시", "순천시", "나주시", "광양시", "담양군", "곡성군", "구례군", "고흥군", "보성군", "장흥군", "강진군", "해남군"
                , "영암군", "무안군", "함평군", "영광군", "장성군", "완도군", "진도군", "신안군"];
                break;
            case "경상북도":
                cities = ["포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "군위군", "의성군", "청송군", "영양군"
                , "영덕군", "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군", "울릉군"];
                break;
            case "경상남도":
                cities = ["창원시", "진주시", "통영시", "사천시", "김해시", "밀양시", "거제시", "양산시", "의령군", "함안군", "창녕군", "고성군", "남해군", "하동군"
                , "산청군", "함양군", "거창군", "합천군"];
                break;
        }

        var citiesBox = document.querySelector("#cities");
        citiesBox.innerHTML = "";  // 기존도시 제거
        for (var i = 0; i < cities.length; i++) {
            var city = document.createElement("a");
            city.href = "#";
            city.textContent = cities[i];
            citiesBox.appendChild(city);
        }
    }
});

//   { name: "창원시", url: "http://www.changwon.go.kr/" }
//    for (var i = 0; i < cities.length; i++) {
    // var city = document.createElement("a");
    // city.href = cities[i].url;
    // city.textContent = cities[i].name;
    // citiesBox.appendChild(city);
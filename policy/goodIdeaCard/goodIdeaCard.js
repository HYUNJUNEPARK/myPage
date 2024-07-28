const translations = {
    en: {
        line_h1: "Privacy Policy : Good Idea Card",
        line_p1: "'A demain' is the developer and distributor of the Android application 'BeGuard'.",

        line_h2: "Privacy Protection",
        line_p2: "This software does not collect, use, or share your personal information or stored data.",
        
        line_h3: "User Data Management",
        line_p3: "User data is stored on the user's Android device. The software does not share or transmit user data to others without consent.",
        
        line_h4: "Disclaimer",
        line_p4: "The user acknowledges that the software may have defects and may not meet all needs. The installation and use of the software are at the user's own risk. The developer is not responsible for any damages resulting from the use of the software.",
        
        line_h5: "Copyright",
        line_p5: "This software is owned by the developer. Modifications, decompiling, or deriving source code from any part of the software without the developer's consent are not permitted.",

        contactTitle: "Contact",
        contactDescription: "For inquiries, please contact us at "
    },
    ko: {
        line_h1: "개인 정보 처리 방침 : 좋은 생각 카드",
        line_p1: "'A demain' 은 안드로이드 애플리케이션 '좋은 생각 카드' 의 개발자이자 배포자입니다.",
    
        line_h2: "개인정보 보호",
        line_p2: "본 소프트웨어는 귀하의 개인 정보나 저장된 데이터에 대한 수집, 사용, 공유를 하지 않습니다.",

        line_h3: "사용자 데이터 관리",
        line_p3: "사용자 데이터는 사용자의 안드로이드 기기에 저장됩니다. 소프트웨어는 사용자 데이터를 동의 없이 다른 사용자에게 공유, 전송하지 않습니다.",

        line_h4: "면책조항",
        line_p4: "사용자는 소프트웨어가 결함이 있을 수 있고 모든 필요를 충족시키지 못할 수 있다는 점을 인지합니다. 소프트웨어의 설치 및 사용은 사용자 자신의 책임입니다. 개발자는 소프트웨어 사용으로 인한 어떠한 손해에 대해서도 책임을 지지 않습니다.",

        line_h5: "저작권",
        line_p5: "본 소프트웨어는 개발자에게 소유권이 있습니다. 소프트웨어 일부분을 개발자의 동의없이 수정, 디컴파일, 소스 코드 도출 등의 파생 작업을 허용하지 않습니다.",

        contactTitle: "연락처",
        contactDescription: "문의사항은 아래 이메일로 문의하시기 바랍니다.",
    }
};

function setLanguage(lang) {
    document.getElementById('line_h1').innerText = translations[lang].line_h1;
    document.getElementById('line_p1').innerText = translations[lang].line_p1;

    document.getElementById('line_h2').innerText = translations[lang].line_h2;
    document.getElementById('line_p2').innerText = translations[lang].line_p2;

    document.getElementById('line_h3').innerText = translations[lang].line_h3;
    document.getElementById('line_p3').innerText = translations[lang].line_p3;

    document.getElementById('line_h4').innerText = translations[lang].line_h4;
    document.getElementById('line_p4').innerText = translations[lang].line_p4;

    document.getElementById('line_h5').innerText = translations[lang].line_h5;
    document.getElementById('line_p5').innerText = translations[lang].line_p5;

    document.getElementById('contact-title').innerText = translations[lang].contactTitle;
    document.getElementById('contact-description').innerText = translations[lang].contactDescription;
}

function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the language from the query parameter or default to English
const language = getQueryParameter('lang') || 'en';
setLanguage(language);
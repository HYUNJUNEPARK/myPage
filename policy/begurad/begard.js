const translations = {
    en: {
        line_h1: "Privacy Policy : BeGuard",
        line_p1: "'A demain' is the developer and distributor of the Android application 'BeGuard'.",

        line_h2: "Privacy Policy",
        line_p2: "This Software does not collect, use, or share your personal information or stored data.",

        line_h3: "User Data Management",
        line_p3: "User data is encrypted and stored on the user's Android device. The Software does not share or transmit user data to other users.",

        line_h4: "Disclaimer and Limitation of Liability",
        line_p4: "Users acknowledge that the Software may have defects and may not meet all their needs. The installation and use of the Software are at the user's own risk. Users are responsible for any possible data loss. This Software is provided 'as is' without explicit or implied warranties. The Developer is not liable for any damages resulting from the use of the Software.",
    
        line_h5: "Copyright",
        line_p5: "The Software is owned by the Developer. No part of the Software may be modified, decompiled, or reverse-engineered to derive the source code without the Developer's consent.",

        contactTitle: "Contact",
        contactDescription: "For inquiries, please contact us at "
    },
    ko: {
        line_h1: "개인 정보 처리 방침 : BeGuard",
        line_p1: "'A demain' 은 안드로이드 애플리케이션 'BeGuard' 의 개발자이자 배포자입니다.",
    
        line_h2: "개인정보 보호",
        line_p2: "본 소프트웨어는 귀하의 개인 정보나 저장된 데이터에 대한 수집, 사용, 공유를 하지 않습니다.",

        line_h3: "사용자 데이터 관리",
        line_p3: "사용자 데이터는 사용자의 안드로이드 기기에 암호화되어 저장됩니다. 소프트웨어는 사용자 데이터를 다른 사용자에게 공유, 전송하지 않습니다.",

        line_h4: "면책조항, 책임제한",
        line_p4: "사용자는 소프트웨어가 결함이 있을 수 있고 모든 필요를 충족시키지 못할 수 있다는 점을 인지합니다. 소프트웨어의 설치 및 사용은 사용자 자신의 책임입니다. 사용자는 가능한 데이터 손실에 대한 책임이 있습니다. 본 소프트웨어는 명시적, 묵시적인 보증 없이 '있는 그대로' 제공됩니다. 제작자는 소프트웨어 사용으로 인한 어떠한 손해에 대해서도 책임을 지지 않습니다.",

        line_h5: "저작권",
        line_p5: "본 소프트웨어는 제작자에게 소유권이 있습니다. 소프트웨어 일부분을 제작자의 동의없이 수정, 디컴파일, 소스 코드 도출 등의 파생 작업을 허용하지 않습니다.",

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
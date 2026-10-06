/* =========================================================
   PORTFOLIO DASHBOARD
   MULTILINGUAL VERSION
========================================================= */


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    /* =====================================================
       HUNGARIAN
    ===================================================== */

    hu: {

        htmlLang: "hu",

        logo: "Vissza",

        nav: {
            home: "Főoldal",
            projects: "Projektek",
            cv: "CV",
            dashboard: "Dashboard"
        },

        hero: {
            eyebrow: "Weboldal",
            description:
                "Ez az én személyes oldalam, ahol mindent leírok magamról és főbb érdeklődési köreimről."
        },

        status: {
            online: "Online",
            offline: "Offline",
            invisible: "Láthatatlan"
        },

        buttons: {
            projects: "Projektek",
            cv: "CV"
        },

        clock: {
            localTime: "HELYI IDŐ"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Aktuális információk"
        },

        weather: {
            label: "IDŐJÁRÁS",
            wind: "💨 Szél",
            humidity: "💧 Páratartalom",
            refresh: "↻ Időjárás frissítése",
            loading: "Időjárási adatok betöltése...",
            unavailable: "Az időjárási adatok nem érhetők el.",
            location: "Helymeghatározás..."
        },

        quick: {
            label: "GYORS INFÓ",
            date: "Mai dátum",
            device: "Eszköz",
            birthday: "Születésnap",
            gender: "Nem",
            male: "Férfi",
            mobile: "Mobil",
            tablet: "Tablet",
            desktop: "Asztali",
            watch: "Okosóra"
        },

        contacts: {
            label: "ELÉRHETŐSÉGEK",
            email: "E-mail",
            phone: "Telefonszám",
            facebook: "Közösségi",
            web: "Weboldal",
            location: "Lakhely",
            locationValue: "Szolnok, Magyarország"
        },

        exchange: {
            label: "ÁRFOLYAMOK",
            title: "Devizák",
            loading: "Árfolyamok betöltése...",
            unavailable: "Az árfolyamok nem érhetők el.",
            updated: "Frissítve"
        },

        currency: {
            eur: "Euro",
            usd: "Amerikai dollár",
            gbp: "Angol font",
            chf: "Svájci frank"
        },

        projects: {
            eyebrow: "MUNKÁIM",
            title: "Projektek"
        },

        project: {

            viewer: {
                label: "Projekt",
                title: "Teljes projekt megtekintése",
                description:
                    "A szakdolgozati projektem teljes dokumentációjának megtekintéséhez kattints az alábbi gombra.",
                button: "Projekt megtekintése"
            }

        },

        cv: {

            eyebrow: "RÓLAM",
            title: "Curriculum Vitae",

            viewer: {
                label: "CURRICULUM VITAE",
                title: "Teljes CV megtekintése",
                description:
                    "A teljes önéletrajzom megtekintéséhez kattints az alábbi gombra.",
                button: "Teljes CV megtekintése"
            },

            viewTitle: "Teljes CV megtekintése",

            viewDescription:
                "A teljes önéletrajz megtekintéséhez kattints az alábbi gombra.",

            viewButton: "Teljes CV megtekintése →",
        },

        footer: {
            rights: "Minden jog fenntartva."
        },

        weatherCodes: {

            0: "Derült égbolt",
            1: "Túlnyomóan derült",
            2: "Részben felhős",
            3: "Borult",
            45: "Köd",
            48: "Zúzmarás köd",
            51: "Gyenge szitálás",
            53: "Szitálás",
            55: "Erős szitálás",
            61: "Gyenge eső",
            63: "Eső",
            65: "Erős eső",
            71: "Gyenge havazás",
            73: "Havazás",
            75: "Erős havazás",
            80: "Zápor",
            81: "Záporok",
            82: "Erős zápor",
            95: "Zivatar",
            96: "Zivatar jégesővel",
            99: "Erős zivatar"

        }

    },


    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        htmlLang: "en",

        logo: "Back to top",

        nav: {
            home: "Home",
            projects: "Projects",
            cv: "CV",
            dashboard: "Dashboard"
        },

        hero: {
            eyebrow: "Website",
            description:
                "This is my personal website where I share information about myself and my main areas of interest."
        },

        status: {
            online: "Online",
            offline: "Offline",
            invisible: "Invisible"
        },

        buttons: {
            projects: "Projects",
            cv: "CV"
        },

        clock: {
            localTime: "LOCAL TIME"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Current information"
        },

        weather: {
            label: "WEATHER",
            wind: "💨 Wind",
            humidity: "💧 Humidity",
            refresh: "↻ Refresh weather",
            loading: "Loading weather data...",
            unavailable: "Weather data is unavailable.",
            location: "Finding location..."
        },

        quick: {
            label: "QUICK INFO",
            date: "Today's date",
            device: "Device",
            birthday: "Birthday",
            gender: "Gender",
            male: "Male",
            mobile: "Mobile",
            tablet: "Tablet",
            desktop: "Desktop",
            watch: "Smartwatch"
        },

        contacts: {
            label: "CONTACT",
            email: "E-mail",
            phone: "Phone",
            facebook: "Community",
            web: "Website",
            location: "Location",
            locationValue: "Szolnok, Hungary"
        },

        exchange: {
            label: "EXCHANGE RATES",
            title: "Currencies",
            loading: "Loading exchange rates...",
            unavailable: "Exchange rates are unavailable.",
            updated: "Updated"
        },

        currency: {
            eur: "Euro",
            usd: "US Dollar",
            gbp: "British Pound",
            chf: "Swiss Franc"
        },

        projects: {
            eyebrow: "MY WORK",
            title: "Projects"
        },

        project: {

            viewer: {
                label: "Project",
                title: "View full project",
                description:
                    "Click the button below to view the complete documentation of my thesis project.",
                button: "View Project"
            }

        },

        cv: {

            eyebrow: "ABOUT ME",
            title: "Curriculum Vitae",

            viewer: {
                label: "CURRICULUM VITAE",
                title: "View Full CV",
                description:
                    "Click the button below to view my complete CV.",
                button: "View Full CV"
            },

            viewTitle: "View Full CV",

            viewDescription:
                "Click the button below to view my complete CV.",

            viewButton: "View Full CV →",
        },

        footer: {
            rights: "All rights reserved."
        },

        weatherCodes: {

            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Depositing rime fog",
            51: "Light drizzle",
            53: "Drizzle",
            55: "Heavy drizzle",
            61: "Light rain",
            63: "Rain",
            65: "Heavy rain",
            71: "Light snow",
            73: "Snow",
            75: "Heavy snow",
            80: "Rain showers",
            81: "Rain showers",
            82: "Heavy rain showers",
            95: "Thunderstorm",
            96: "Thunderstorm with hail",
            99: "Heavy thunderstorm"

        }

    },


    /* =====================================================
       GERMAN
    ===================================================== */

    de: {

        htmlLang: "de",

        logo: "Zurück nach oben",

        nav: {
            home: "Startseite",
            projects: "Projekte",
            cv: "Lebenslauf",
            dashboard: "Dashboard"
        },

        hero: {
            eyebrow: "Webseite",
            description:
                "Dies ist meine persönliche Webseite, auf der ich Informationen über mich und meine wichtigsten Interessen teile."
        },

        status: {
            online: "Online",
            offline: "Offline",
            invisible: "Unsichtbar"
        },

        buttons: {
            projects: "Projekte",
            cv: "Lebenslauf"
        },

        clock: {
            localTime: "LOKALE ZEIT"
        },

        dashboard: {
            eyebrow: "DASHBOARD",
            title: "Aktuelle Informationen"
        },

        weather: {
            label: "WETTER",
            wind: "💨 Wind",
            humidity: "💧 Luftfeuchtigkeit",
            refresh: "↻ Wetter aktualisieren",
            loading: "Wetterdaten werden geladen...",
            unavailable: "Wetterdaten sind nicht verfügbar.",
            location: "Standort wird ermittelt..."
        },

        quick: {
            label: "SCHNELLINFO",
            date: "Heutiges Datum",
            device: "Gerät",
            birthday: "Geburtstag",
            gender: "Geschlecht",
            male: "Männlich",
            mobile: "Mobil",
            tablet: "Tablet",
            desktop: "Desktop",
            watch: "Smartwatch"
        },

        contacts: {
            label: "KONTAKT",
            email: "E-Mail",
            phone: "Telefonnummer",
            facebook: "Gemeinschaft",
            web: "Webseite",
            location: "Wohnort",
            locationValue: "Szolnok, Ungarn"
        },

        exchange: {
            label: "WECHSELKURSE",
            title: "Währungen",
            loading: "Wechselkurse werden geladen...",
            unavailable: "Wechselkurse sind nicht verfügbar.",
            updated: "Aktualisiert"
        },

        currency: {
            eur: "Euro",
            usd: "US-Dollar",
            gbp: "Britisches Pfund",
            chf: "Schweizer Franken"
        },

        projects: {
            eyebrow: "MEINE ARBEIT",
            title: "Projekte"
        },

        project: {

            viewer: {
                label: "Projekt",
                title: "Vollständiges Projekt ansehen",
                description:
                    "Klicken Sie auf die Schaltfläche unten, um die vollständige Dokumentation meines Abschlussprojekts anzusehen.",
                button: "Projekt ansehen"
            }

        },

        cv: {

            eyebrow: "ÜBER MICH",
            title: "Lebenslauf",

            viewer: {
                label: "LEBENSLAUF",
                title: "Vollständigen Lebenslauf ansehen",
                description:
                    "Klicken Sie auf die Schaltfläche unten, um meinen vollständigen Lebenslauf anzusehen.",
                button: "Vollständigen Lebenslauf ansehen"
            },

            viewTitle: "Vollständigen Lebenslauf ansehen",

            viewDescription:
                "Klicken Sie auf die Schaltfläche unten, um meinen vollständigen Lebenslauf anzusehen.",

            viewButton: "Vollständigen Lebenslauf ansehen →",
        },

        footer: {
            rights: "Alle Rechte vorbehalten."
        },

        weatherCodes: {

            0: "Klarer Himmel",
            1: "Überwiegend klar",
            2: "Teilweise bewölkt",
            3: "Bedeckt",
            45: "Nebel",
            48: "Reifnebel",
            51: "Leichter Nieselregen",
            53: "Nieselregen",
            55: "Starker Nieselregen",
            61: "Leichter Regen",
            63: "Regen",
            65: "Starker Regen",
            71: "Leichter Schneefall",
            73: "Schneefall",
            75: "Starker Schneefall",
            80: "Regenschauer",
            81: "Regenschauer",
            82: "Starke Regenschauer",
            95: "Gewitter",
            96: "Gewitter mit Hagel",
            99: "Starkes Gewitter"

        }

    },


    /* =====================================================
       SLOVENIAN
    ===================================================== */

    sl: {

        htmlLang: "sl",

        logo: "Nazaj na vrh",

        nav: {
            home: "Domov",
            projects: "Projekti",
            cv: "Življenjepis",
            dashboard: "Nadzorna plošča"
        },

        hero: {
            eyebrow: "Spletna stran",
            description:
                "To je moja osebna spletna stran, kjer predstavljam informacije o sebi in svojih glavnih področjih zanimanja."
        },

        status: {
            online: "Na spletu",
            offline: "Brez povezave",
            invisible: "Neviden"
        },

        buttons: {
            projects: "Projekti",
            cv: "Življenjepis"
        },

        clock: {
            localTime: "LOKALNI ČAS"
        },

        dashboard: {
            eyebrow: "NADZORNA PLOŠČA",
            title: "Aktualne informacije"
        },

        weather: {
            label: "VREME",
            wind: "💨 Veter",
            humidity: "💧 Vlažnost",
            refresh: "↻ Osveži vreme",
            loading: "Nalaganje vremenskih podatkov...",
            unavailable: "Vremenski podatki niso na voljo.",
            location: "Iskanje lokacije..."
        },

        quick: {
            label: "HITRE INFORMACIJE",
            date: "Današnji datum",
            device: "Naprava",
            birthday: "Rojstni dan",
            gender: "Spol",
            male: "Moški",
            mobile: "Mobilni telefon",
            tablet: "Tablica",
            desktop: "Namizni računalnik",
            watch: "Pametna ura"
        },

        contacts: {
            label: "KONTAKT",
            email: "E-pošta",
            phone: "Telefonska številka",
            facebook: "Skupnost",
            web: "Spletna stran",
            location: "Prebivališče",
            locationValue: "Szolnok, Madžarska"
        },

        exchange: {
            label: "MENJALNI TEČAJI",
            title: "Valute",
            loading: "Nalaganje menjalnih tečajev...",
            unavailable: "Menjalni tečaji niso na voljo.",
            updated: "Posodobljeno"
        },

        currency: {
            eur: "Evro",
            usd: "Ameriški dolar",
            gbp: "Britanski funt",
            chf: "Švicarski frank"
        },

        projects: {
            eyebrow: "MOJE DELO",
            title: "Projekti"
        },

        project: {

            viewer: {
                label: "Projekta",
                title: "Ogled celotnega projekta",
                description:
                    "Za ogled celotne dokumentacije mojega diplomskega projekta kliknite spodnji gumb.",
                button: "Ogled projekta"
            }

        },

        cv: {

            eyebrow: "O MENI",
            title: "Življenjepis",

            viewer: {
                label: "ŽIVLJENJEPIS",
                title: "Ogled celotnega življenjepisa",
                description:
                    "Za ogled celotnega življenjepisa kliknite spodnji gumb.",
                button: "Ogled celotnega življenjepisa"
            },

            viewTitle: "Ogled celotnega življenjepisa",

            viewDescription:
                "Za ogled celotnega življenjepisa kliknite spodnji gumb.",

            viewButton: "Ogled celotnega življenjepisa →",
        },

        footer: {
            rights: "Vse pravice pridržane."
        },

        weatherCodes: {

            0: "Jasno nebo",
            1: "Pretežno jasno",
            2: "Delno oblačno",
            3: "Oblačno",
            45: "Megla",
            48: "Slana megla",
            51: "Rahlo rosenje",
            53: "Rosenje",
            55: "Močno rosenje",
            61: "Rahel dež",
            63: "Dež",
            65: "Močan dež",
            71: "Rahlo sneženje",
            73: "Sneženje",
            75: "Močno sneženje",
            80: "Plohe",
            81: "Plohe",
            82: "Močne plohe",
            95: "Nevihta",
            96: "Nevihta s točo",
            99: "Močna nevihta"

        }

    }

};


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

let currentLanguage =
    localStorage.getItem("language") || "hu";


function getTranslation(key) {

    const language =
        translations[currentLanguage];

    const parts =
        key.split(".");

    let value =
        language;

    for (const part of parts) {

        if (
            value &&
            Object.prototype.hasOwnProperty.call(
                value,
                part
            )
        ) {

            value = value[part];

        } else {

            return key;

        }

    }

    return value;

}


function updateTranslatedElements() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            const translation =
                getTranslation(key);

            if (translation !== key) {

                element.textContent =
                    translation;

            }

        });

}


function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage =
        language;

    localStorage.setItem(
        "language",
        language
    );

    document.documentElement.lang =
        translations[language].htmlLang;

    updateTranslatedElements();

    updateLanguageButton();

    updateClock();

    updateDeviceInfo();

    updateWeatherText();

    updateWeatherLocationText();

    updateExchangeText();

    updateStatusUI();

}


/* =========================================================
   LANGUAGE BUTTON
========================================================= */

function updateLanguageButton() {

    const currentLanguageElement =
        document.getElementById(
            "currentLanguage"
        );

    if (currentLanguageElement) {

        currentLanguageElement.textContent =
            currentLanguage.toUpperCase();

    }


    document
        .querySelectorAll(
            ".language-menu button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.language ===
                currentLanguage
            );

        });

}


const languageToggle =
    document.getElementById(
        "languageToggle"
    );

const languageSelector =
    document.querySelector(
        ".language-selector"
    );


if (
    languageToggle &&
    languageSelector
) {

    languageToggle.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            languageSelector.classList.toggle(
                "active"
            );

            languageToggle.setAttribute(
                "aria-expanded",
                languageSelector.classList.contains(
                    "active"
                )
            );

        }
    );

}


document
    .querySelectorAll(
        ".language-menu button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setLanguage(
                    button.dataset.language
                );

                if (languageSelector) {

                    languageSelector.classList.remove(
                        "active"
                    );

                }

                if (languageToggle) {

                    languageToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });


/* =========================================================
   STATUS SYSTEM
========================================================= */

const statusToggle =
    document.getElementById(
        "statusToggle"
    );

const statusMenu =
    document.getElementById(
        "statusMenu"
    );

const statusSelector =
    document.querySelector(
        ".status-selector"
    );

const statusText =
    document.getElementById(
        "statusText"
    );

const statusDot =
    document.getElementById(
        "statusDot"
    );


const statusTranslations = {
    online: "status.online",
    offline: "status.offline",
    invisible: "status.invisible"
};


let currentStatus =
    localStorage.getItem(
        "status"
    ) || "online";


function updateStatusUI() {

    if (!statusToggle || !statusText || !statusDot) {
        return;
    }


    const statusKey =
        statusTranslations[currentStatus] ||
        statusTranslations.online;


    statusText.textContent =
        getTranslation(statusKey);


    statusToggle.classList.remove(
        "status-online",
        "status-offline",
        "status-invisible"
    );


    statusToggle.classList.add(
        `status-${currentStatus}`
    );


    statusDot.classList.remove(
        "status-online",
        "status-offline",
        "status-invisible"
    );


    statusDot.classList.add(
        `status-${currentStatus}`
    );


    document
        .querySelectorAll(
            ".status-menu button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.status ===
                currentStatus
            );

        });

}


function setStatus(status) {

    if (
        ![
            "online",
            "offline",
            "invisible"
        ].includes(status)
    ) {
        return;
    }


    currentStatus =
        status;

    localStorage.setItem(
        "status",
        status
    );

    updateStatusUI();

}


if (
    statusToggle &&
    statusSelector
) {

    statusToggle.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            statusSelector.classList.toggle(
                "active"
            );

            statusToggle.setAttribute(
                "aria-expanded",
                statusSelector.classList.contains(
                    "active"
                )
            );

        }
    );

}


document
    .querySelectorAll(
        ".status-menu button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setStatus(
                    button.dataset.status
                );

                if (statusSelector) {

                    statusSelector.classList.remove(
                        "active"
                    );

                }

                if (statusToggle) {

                    statusToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });


/* =========================================================
   CLOSE DROPDOWNS
========================================================= */

document.addEventListener(
    "click",
    () => {

        if (languageSelector) {

            languageSelector.classList.remove(
                "active"
            );

        }


        if (languageToggle) {

            languageToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (statusSelector) {

            statusSelector.classList.remove(
                "active"
            );

        }


        if (statusToggle) {

            statusToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const themeIcon =
    document.getElementById(
        "themeIcon"
    );


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        if (themeIcon) {
            themeIcon.textContent = "☀";
        }

    } else {

        document.body.classList.remove("dark");

        if (themeIcon) {
            themeIcon.textContent = "☾";
        }

    }

}


const savedTheme =
    localStorage.getItem("theme") || "light";

applyTheme(savedTheme);


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.contains(
                    "dark"
                );

            const newTheme =
                isDark ? "light" : "dark";

            localStorage.setItem(
                "theme",
                newTheme
            );

            applyTheme(newTheme);

        }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const nav =
    document.getElementById(
        "nav"
    );


if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            nav.classList.toggle(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                nav.classList.contains(
                    "active"
                )
            );

        }
    );


    document
        .querySelectorAll(".nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   CLOCK
========================================================= */

const clockElement =
    document.getElementById(
        "clock"
    );

const dateElement =
    document.getElementById(
        "date"
    );

const timezoneElement =
    document.getElementById(
        "timezone"
    );

const todayInfo =
    document.getElementById(
        "todayInfo"
    );


function getLocale() {

    return {
        hu: "hu-HU",
        en: "en-GB",
        de: "de-DE",
        sl: "sl-SI"
    }[currentLanguage] || "hu-HU";

}


function updateClock() {

    const now =
        new Date();

    const locale =
        getLocale();


    if (clockElement) {

        clockElement.textContent =
            new Intl.DateTimeFormat(
                locale,
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            ).format(now);

    }


    const date =
        new Intl.DateTimeFormat(
            locale,
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        ).format(now);


    if (dateElement) {

        dateElement.textContent =
            date;

    }


    if (todayInfo) {

        todayInfo.textContent =
            date;

    }


    const timezone =
        Intl.DateTimeFormat()
            .resolvedOptions()
            .timeZone ||
        "Europe/Budapest";


    if (timezoneElement) {

        timezoneElement.textContent =
            timezone;

    }

}


updateClock();

setInterval(
    updateClock,
    1000
);


/* =========================================================
   DEVICE INFO
========================================================= */

const deviceInfo =
    document.getElementById(
        "deviceInfo"
    );

const deviceIcon =
    document.getElementById(
        "deviceIcon"
    );


function updateDeviceInfo() {

    if (!deviceInfo) {
        return;
    }


    const width =
        window.innerWidth;

    const userAgent =
        navigator.userAgent.toLowerCase();


    const isWatch =
        width <= 250 ||
        /watch|sm-watch|wear os|wearos/.test(
            userAgent
        );


    const isTablet =
        !isWatch &&
        (
            /ipad|tablet|android(?!.*mobile)/.test(
                userAgent
            ) ||
            (
                navigator.maxTouchPoints > 1 &&
                width > 650 &&
                width <= 1100
            )
        );


    const isMobile =
        !isWatch &&
        !isTablet &&
        (
            /iphone|ipod|android.*mobile|windows phone|mobile/.test(
                userAgent
            ) ||
            width <= 650
        );


    if (isWatch) {

        deviceInfo.textContent =
            getTranslation(
                "quick.watch"
            );

        if (deviceIcon) {
            deviceIcon.textContent = "⌚";
        }

    } else if (isMobile) {

        deviceInfo.textContent =
            getTranslation(
                "quick.mobile"
            );

        if (deviceIcon) {
            deviceIcon.textContent = "📱";
        }

    } else if (isTablet) {

        deviceInfo.textContent =
            getTranslation(
                "quick.tablet"
            );

        if (deviceIcon) {
            deviceIcon.textContent = "📲";
        }

    } else {

        deviceInfo.textContent =
            getTranslation(
                "quick.desktop"
            );

        if (deviceIcon) {
            deviceIcon.textContent = "💻";
        }

    }

}


updateDeviceInfo();

window.addEventListener(
    "resize",
    updateDeviceInfo
);


/* =========================================================
   WEATHER
========================================================= */

const weatherLocation =
    document.getElementById(
        "weatherLocation"
    );

const weatherIcon =
    document.getElementById(
        "weatherIcon"
    );

const temperature =
    document.getElementById(
        "temperature"
    );

const weatherDescription =
    document.getElementById(
        "weatherDescription"
    );

const wind =
    document.getElementById(
        "wind"
    );

const humidity =
    document.getElementById(
        "humidity"
    );

const lastUpdated =
    document.getElementById(
        "lastUpdated"
    );

const refreshWeather =
    document.getElementById(
        "refreshWeather"
    );


let weatherCoordinates = {

    latitude: 47.1747,

    longitude: 20.1940,

    name: "Szolnok"

};


/* =========================================================
   WEATHER CODE
========================================================= */

function weatherCodeInfo(code) {

    const icons = {

        0: "☀️",
        1: "🌤️",
        2: "⛅",
        3: "☁️",
        45: "🌫️",
        48: "🌫️",
        51: "🌦️",
        53: "🌦️",
        55: "🌧️",
        61: "🌦️",
        63: "🌧️",
        65: "🌧️",
        71: "🌨️",
        73: "❄️",
        75: "❄️",
        80: "🌦️",
        81: "🌧️",
        82: "⛈️",
        95: "⛈️",
        96: "⛈️",
        99: "⛈️"

    };


    return {

        text:
            translations[currentLanguage]
                .weatherCodes[code] ||
            "Unknown weather",

        icon:
            icons[code] ||
            "🌡️"

    };

}


/* =========================================================
   WEATHER TRANSLATION
========================================================= */

function updateWeatherText() {

    if (
        weatherDescription &&
        weatherDescription.dataset.apiLoaded !== "true"
    ) {

        weatherDescription.textContent =
            getTranslation(
                "weather.loading"
            );

    }

}


function updateWeatherLocationText() {

    if (!weatherLocation) {
        return;
    }

    if (
        weatherCoordinates.name ===
        "Aktuális hely"
    ) {

        weatherLocation.textContent =
            getCurrentLocationText();

    }

}


/* =========================================================
   LOCATION
========================================================= */

function getUserLocation() {

    return new Promise(resolve => {

        if (!navigator.geolocation) {

            console.warn(
                "Geolocation is not supported."
            );

            resolve();

            return;

        }


        navigator.geolocation.getCurrentPosition(

            position => {

                weatherCoordinates = {

                    latitude:
                        position.coords.latitude,

                    longitude:
                        position.coords.longitude,

                    name:
                        "Aktuális hely"

                };


                resolve();

            },

            error => {

                console.warn(
                    "Geolocation failed:",
                    error.message
                );

                resolve();

            },

            {

                enableHighAccuracy: false,

                timeout: 10000,

                maximumAge: 600000

            }

        );

    });

}


/* =========================================================
   WEATHER API
========================================================= */

async function loadWeather() {

    if (!weatherDescription) {
        return;
    }


    weatherDescription.dataset.apiLoaded =
        "false";


    weatherDescription.textContent =
        getTranslation(
            "weather.loading"
        );


    try {

        const url =
            "https://api.open-meteo.com/v1/forecast" +

            `?latitude=${weatherCoordinates.latitude}` +

            `&longitude=${weatherCoordinates.longitude}` +

            "&current=" +

            "temperature_2m," +

            "relative_humidity_2m," +

            "weather_code," +

            "wind_speed_10m" +

            "&timezone=auto";


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }


        const data =
            await response.json();


        if (!data.current) {

            throw new Error(
                "No current weather data."
            );

        }


        const current =
            data.current;


        const info =
            weatherCodeInfo(
                current.weather_code
            );


        if (weatherLocation) {

            weatherLocation.textContent =
                weatherCoordinates.name ===
                "Aktuális hely"
                    ? getCurrentLocationText()
                    : weatherCoordinates.name;

        }


        if (weatherIcon) {

            weatherIcon.textContent =
                info.icon;

        }


        if (temperature) {

            temperature.textContent =
                Math.round(
                    current.temperature_2m
                );

        }


        weatherDescription.textContent =
            info.text;

        weatherDescription.dataset.apiLoaded =
            "true";


        if (wind) {

            wind.textContent =
                `${Math.round(
                    current.wind_speed_10m
                )} km/h`;

        }


        if (humidity) {

            humidity.textContent =
                `${Math.round(
                    current.relative_humidity_2m
                )}%`;

        }


        if (lastUpdated) {

            lastUpdated.textContent =
                `${getTranslation(
                    "exchange.updated"
                )}: ${
                    new Date().toLocaleTimeString(
                        getLocale(),
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    )
                }`;

        }


    } catch (error) {

        console.error(
            "Weather error:",
            error
        );


        weatherDescription.textContent =
            getTranslation(
                "weather.unavailable"
            );

        weatherDescription.dataset.apiLoaded =
            "false";


        if (weatherLocation) {

            weatherLocation.textContent =
                weatherCoordinates.name ===
                "Aktuális hely"
                    ? getCurrentLocationText()
                    : weatherCoordinates.name;

        }


        if (temperature) {

            temperature.textContent =
                "--";

        }


        if (wind) {

            wind.textContent =
                "-- km/h";

        }


        if (humidity) {

            humidity.textContent =
                "--%";

        }

    }

}


function getCurrentLocationText() {

    const names = {

        hu: "Aktuális hely",
        en: "Current location",
        de: "Aktueller Standort",
        sl: "Trenutna lokacija"

    };

    return names[currentLanguage];

}


/* =========================================================
   INITIALIZE WEATHER
========================================================= */

async function initializeWeather() {

    await getUserLocation();

    await loadWeather();

}


initializeWeather();


/* =========================================================
   MANUAL WEATHER REFRESH
========================================================= */

if (refreshWeather) {

    refreshWeather.addEventListener(
        "click",
        async () => {

            refreshWeather.disabled =
                true;

            refreshWeather.textContent =
                "↻ ...";


            await loadWeather();


            refreshWeather.disabled =
                false;

            refreshWeather.textContent =
                getTranslation(
                    "weather.refresh"
                );

        }
    );

}


setInterval(
    loadWeather,
    10 * 60 * 1000
);


/* =========================================================
   EXCHANGE RATES
========================================================= */

const eurHuf =
    document.getElementById(
        "eurHuf"
    );

const usdHuf =
    document.getElementById(
        "usdHuf"
    );

const gbpHuf =
    document.getElementById(
        "gbpHuf"
    );

const chfHuf =
    document.getElementById(
        "chfHuf"
    );

const exchangeUpdated =
    document.getElementById(
        "exchangeUpdated"
    );


function updateExchangeText() {

    if (!exchangeUpdated) {
        return;
    }

    if (
        exchangeUpdated.textContent.includes("...") ||
        exchangeUpdated.textContent === ""
    ) {

        exchangeUpdated.textContent =
            getTranslation(
                "exchange.loading"
            );

    }

}


async function loadExchangeRates() {

    try {

        if (exchangeUpdated) {

            exchangeUpdated.textContent =
                getTranslation(
                    "exchange.loading"
                );

        }


        const currencies =
            await Promise.all([

                fetch(
                    "https://api.frankfurter.dev/v2/rate/eur/huf"
                ).then(response => {

                    if (!response.ok) {
                        throw new Error(
                            "EUR/HUF API error"
                        );
                    }

                    return response.json();

                }),

                fetch(
                    "https://api.frankfurter.dev/v2/rate/usd/huf"
                ).then(response => {

                    if (!response.ok) {
                        throw new Error(
                            "USD/HUF API error"
                        );
                    }

                    return response.json();

                }),

                fetch(
                    "https://api.frankfurter.dev/v2/rate/gbp/huf"
                ).then(response => {

                    if (!response.ok) {
                        throw new Error(
                            "GBP/HUF API error"
                        );
                    }

                    return response.json();

                }),

                fetch(
                    "https://api.frankfurter.dev/v2/rate/chf/huf"
                ).then(response => {

                    if (!response.ok) {
                        throw new Error(
                            "CHF/HUF API error"
                        );
                    }

                    return response.json();

                })

            ]);


        const eur =
            currencies[0].rate;

        const usd =
            currencies[1].rate;

        const gbp =
            currencies[2].rate;

        const chf =
            currencies[3].rate;


        if (eurHuf) {

            eurHuf.textContent =
                `${eur.toFixed(2)} Ft`;

        }


        if (usdHuf) {

            usdHuf.textContent =
                `${usd.toFixed(2)} Ft`;

        }


        if (gbpHuf) {

            gbpHuf.textContent =
                `${gbp.toFixed(2)} Ft`;

        }


        if (chfHuf) {

            chfHuf.textContent =
                `${chf.toFixed(2)} Ft`;

        }


        if (exchangeUpdated) {

            exchangeUpdated.textContent =
                `${getTranslation(
                    "exchange.updated"
                )}: ${
                    new Date().toLocaleTimeString(
                        getLocale(),
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    )
                }`;

        }


    } catch (error) {

        console.error(
            "Exchange rate error:",
            error
        );


        if (exchangeUpdated) {

            exchangeUpdated.textContent =
                getTranslation(
                    "exchange.unavailable"
                );

        }

    }

}


loadExchangeRates();


setInterval(
    loadExchangeRates,
    30 * 60 * 1000
);


/* =========================================================
   YEAR
========================================================= */

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

setLanguage(
    currentLanguage
);


/* =========================================================
   INITIAL STATUS
========================================================= */

setStatus(
    currentStatus
);

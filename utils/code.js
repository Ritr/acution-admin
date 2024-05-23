let countryList = [
    {
        "en": "Hongkong",
        "cn": "香港",
        "code": "+852"
    },
    {
        "en": "China",
        "cn": "中國内地",
        "code": "+86"
    },
    {
        "en": "Macao",
        "cn": "澳門",
        "code": "+853"
    },
    {
        "en": "Taiwan",
        "cn": "台灣",
        "code": "+886"
    },
    {
        "en": "Singapore",
        "cn": "新加坡",
        "code": "+65"
    },
    {
        "en": "Malaysia",
        "cn": "馬來西亞",
        "code": "+60"
    },
    {
        "en": "United States of America",
        "cn": "美國",
        "code": "+1"
    },
    {
        "en": "Canada",
        "cn": "加拿大",
        "code": "+1"
    },
    {
        "en": "Bahamas",
        "cn": "巴哈馬",
        "code": "+1242"
    },
    {
        "en": "Barbados",
        "cn": "巴貝多",
        "code": "+1246"
    },
    {
        "en": "Anguilla",
        "cn": "安圭拉島",
        "code": "+1254"
    },
    {
        "en": "Antigua and Barbuda",
        "cn": "安地瓜與巴布達",
        "code": "+1268"
    },
    {
        "en": "Cayman Is",
        "cn": "開曼群島",
        "code": "+1345"
    },
    {
        "en": "Bermuda Is",
        "cn": "百慕達群島",
        "code": "+1441"
    },
    {
        "en": "Montserrat Is",
        "cn": "蒙特塞拉特島",
        "code": "+1664"
    },
    {
        "en": "Mariana Is",
        "cn": "馬裡亞那群島",
        "code": "+1670"
    },
    {
        "en": "Guam",
        "cn": "關島",
        "code": "+1671"
    },
    {
        "en": "Saint Lucia",
        "cn": "聖露西亞",
        "code": "+1758"
    },
    {
        "en": "St.Vincent",
        "cn": "聖文森",
        "code": "+1784"
    },
    {
        "en": "Saint Vincent",
        "cn": "聖文森島",
        "code": "+1784"
    },
    {
        "en": "Puerto Rico",
        "cn": "波多黎各",
        "code": "+1787"
    },
    {
        "en": "Trinidad and Tobago",
        "cn": "千里達及托巴哥",
        "code": "+1809"
    },
    {
        "en": "Grenada",
        "cn": "格林納達",
        "code": "+1809"
    },
    {
        "en": "Jamaica",
        "cn": "牙買加",
        "code": "+1876"
    },
    {
        "en": "Dominica Rep",
        "cn": "多明尼加共和國",
        "code": "+1890"
    },
    {
        "en": "Alaska(U.S.A)",
        "cn": "阿拉斯加",
        "code": "+1907"
    },
    {
        "en": "Egypt",
        "cn": "埃及",
        "code": "+20"
    },
    {
        "en": "Morocco",
        "cn": "摩洛哥",
        "code": "+212"
    },
    {
        "en": "Algeria",
        "cn": "阿爾及利亞",
        "code": "+213"
    },
    {
        "en": "Tunisia",
        "cn": "突尼斯",
        "code": "+216"
    },
    {
        "en": "Libya",
        "cn": "利比亞",
        "code": "+218"
    },
    {
        "en": "Gambia",
        "cn": "岡比亞",
        "code": "+220"
    },
    {
        "en": "Senegal",
        "cn": "塞內加爾",
        "code": "+221"
    },
    {
        "en": "Mali",
        "cn": "馬裡",
        "code": "+223"
    },
    {
        "en": "Guinea",
        "cn": "幾內亞",
        "code": "+224"
    },
    {
        "en": "Ivory Coast",
        "cn": "科特迪瓦",
        "code": "+225"
    },
    {
        "en": "Burkina Faso",
        "cn": "布吉納法索",
        "code": "+226"
    },
    {
        "en": "Niger",
        "cn": "尼日",
        "code": "+227"
    },
    {
        "en": "Togo",
        "cn": "多哥",
        "code": "+228"
    },
    {
        "en": "Benin",
        "cn": "貝南",
        "code": "+229"
    },
    {
        "en": "Mauritius",
        "cn": "毛里求斯",
        "code": "+230"
    },
    {
        "en": "Liberia",
        "cn": "利比里亞",
        "code": "+231"
    },
    {
        "en": "Sierra Leone",
        "cn": "塞拉利昂",
        "code": "+232"
    },
    {
        "en": "Uzbekistan",
        "cn": "烏茲別克",
        "code": "+233"
    },
    {
        "en": "Ghana",
        "cn": "加納",
        "code": "+233"
    },
    {
        "en": "Nigeria",
        "cn": "奈及利亞",
        "code": "+234"
    },
    {
        "en": "Chad",
        "cn": "乍得",
        "code": "+235"
    },
    {
        "en": "Central African Republic",
        "cn": "中非共和國",
        "code": "+236"
    },
    {
        "en": "Cameroon",
        "cn": "喀麥隆",
        "code": "+237"
    },
    {
        "en": "Cape Verde",
        "cn": "佛得角",
        "code": "+238"
    },
    {
        "en": "Sao Tome and Principe",
        "cn": "聖多美和普林西比",
        "code": "+239"
    },
    {
        "en": "Gabon",
        "cn": "加彭",
        "code": "+241"
    },
    {
        "en": "Congo",
        "cn": "剛果",
        "code": "+242"
    },
    {
        "en": "Zaire",
        "cn": "扎伊爾",
        "code": "+243"
    },
    {
        "en": "Angola",
        "cn": "安哥拉",
        "code": "+244"
    },
    {
        "en": "Ascension",
        "cn": "阿森松",
        "code": "+247"
    },
    {
        "en": "Seychelles",
        "cn": "塞席爾",
        "code": "+248"
    },
    {
        "en": "Sudan",
        "cn": "蘇丹",
        "code": "+249"
    },
    {
        "en": "Ethiopia",
        "cn": "埃塞俄比亞","code": "+251"
    },
    {
        "en": "Somali",
        "cn": "索馬利亞",
        "code": "+252"
    },
    {
        "en": "Djibouti",
        "cn": "吉布地",
        "code": "+253"
    },
    {
        "en": "Kenya",
        "cn": "肯亞",
        "code": "+254"
    },
    {
        "en": "Tanzania",
        "cn": "坦尚尼亞",
        "code": "+255"
    },
    {
        "en": "Uganda",
        "cn": "烏幹達",
        "code": "+256"
    },
    {
        "en": "Burundi",
        "cn": "布隆迪",
        "code": "+257"
    },
    {
        "en": "Mozambique",
        "cn": "莫三比克",
        "code": "+258"
    },
    {
        "en": "Zambia",
        "cn": "尚比亞",
        "code": "+260"
    },
    {
        "en": "Madagascar",
        "cn": "馬達加斯加",
        "code": "+261"
    },
    {
        "en": "Reunion",
        "cn": "留尼旺",
        "code": "+262"
    },
    {
        "en": "Zimbabwe",
        "cn": "津巴布韋",
        "code": "+263"
    },
    {
        "en": "Namibia",
        "cn": "納米比亞",
        "code": "+264"
    },
    {
        "en": "Malawi",
        "cn": "馬拉威",
        "code": "+265"
    },
    {
        "en": "Lesotho",
        "cn": "賴索托",
        "code": "+266"
    },
    {
        "en": "Botswana",
        "cn": "波札那",
        "code": "+267"
    },
    {
        "en": "Swaziland",
        "cn": "史瓦濟蘭",
        "code": "+268"
    },
    {
        "en": "South Africa",
        "cn": "南非",
        "code": "+27"
    },
    {
        "en": "Aruba",
        "cn": "阿魯巴島",
        "code": "+297"
    },
    {
        "en": "Greece",
        "cn": "希臘",
        "code": "+30"
    },
    {
        "en": "Netherlands",
        "cn": "荷蘭",
        "code": "+31"
    },
    {
        "en": "Belgium",
        "cn": "比利時",
        "code": "+32"
    },
    {
        "en": "France",
        "cn": "法國",
        "code": "+33"
    },
    {
        "en": "Kyrgyzstan",
        "cn": "吉爾吉斯坦",
        "code": "+331"
    },
    {
        "en": "Spain",
        "cn": "西班牙",
        "code": "+34"
    },
    {
        "en": "Gibraltar",
        "cn": "直布羅陀",
        "code": "+350"
    },
    {
        "en": "Portugal",
        "cn": "葡萄牙",
        "code": "+351"
    },
    {
        "en": "Luxembourg",
        "cn": "盧森堡",
        "code": "+352"
    },
    {
        "en": "Ireland",
        "cn": "愛爾蘭",
        "code": "+353"
    },
    {
        "en": "Iceland",
        "cn": "冰島",
        "code": "+354"
    },
    {
        "en": "Albania",
        "cn": "阿爾巴尼亞",
        "code": "+355"
    },
    {
        "en": "Malta",
        "cn": "馬爾他",
        "code": "+356"
    },
    {
        "en": "Cyprus",
        "cn": "塞浦路斯",
        "code": "+357"
    },
    {
        "en": "Finland",
        "cn": "芬蘭",
        "code": "+358"
    },
    {
        "en": "Bulgaria",
        "cn": "保加利亞",
        "code": "+359"
    },
    {
        "en": "Hungary",
        "cn": "匈牙利",
        "code": "+36"
    },
    {
        "en": "Lithuania",
        "cn": "立陶宛",
        "code": "+370"
    },
    {
        "en": "Latvia",
        "cn": "拉脫維亞",
        "code": "+371"
    },
    {
        "en": "Estonia",
        "cn": "愛沙尼亞",
        "code": "+372"
    },
    {
        "en": "Moldova",
        "cn": "摩爾多瓦",
        "code": "+373"
    },
    {
        "en": "Armenia",
        "cn": "亞美尼亞",
        "code": "+374"
    },
    {
        "en": "Belarus",
        "cn": "白俄羅斯",
        "code": "+375"
    },
    {
        "en": "Andorra",
        "cn": "安道爾共和國",
        "code": "+376"
    },
    {
        "en": "Monaco",
        "cn": "摩納哥",
        "code": "+377"
    },
    {
        "en": "San Marino",
        "cn": "聖馬利諾",
        "code": "+378"
    },
    {
        "en": "Ukraine",
        "cn": "烏克蘭",
        "code": "+380"
    },
    {
        "en": "Yugoslavia",
        "cn": "南斯拉夫",
        "code": "+381"
    },
    {
        "en": "Republic of Croatia",
        "cn": "克羅埃西亞共和國",
        "code": "+385"
    },
    {
        "en": "Slovenia",
        "cn": "斯洛維尼亞",
        "code": "+386"
    },
    {
        "en": "Bosnia And Herzegovina",
        "cn": "波士尼亞與赫塞哥維納",
        "code": "+387"
    },
    {
        "en": "Italy",
        "cn": "義大利",
        "code": "+39"
    },
    {
        "en": "Romania",
        "cn": "羅馬尼亞",
        "code": "+40"
    },
    {
        "en": "Switzerland",
        "cn": "瑞士",
        "code": "+41"
    },
    {
        "en": "Czech Republic",
        "cn": "捷克",
        "code": "+420"
    },
    {
        "en": "Slovakia",
        "cn": "斯洛伐克",
        "code": "+421"
    },
    {
        "en": "Liechtenstein",
        "cn": "列支敦士登",
        "code": "+423"
    },
    {
        "en": "Austria",
        "cn": "奧地利",
        "code": "+43"
    },
    {
        "en": "United Kiongdom",
        "cn": "英國",
        "code": "+44"
    },
    {
        "en": "Denmark",
        "cn": "丹麥",
        "code": "+45"
    },
    {
        "en": "Sweden",
        "cn": "瑞典",
        "code": "+46"
    },
    {
        "en": "Norway",
        "cn": "挪威",
        "code": "+47"
    },
    {
        "en": "Poland",
        "cn": "波蘭",
        "code": "+48"
    },
    {
        "en": "Germany",
        "cn": "德國",
        "code": "+49"
    },
    {
        "en": "Belize",
        "cn": "伯利茲",
        "code": "+501"
    },
    {
        "en": "Guatemala",
        "cn": "瓜地馬拉",
        "code": "+502"
    },
    {
        "en": "EI Salvador",
        "cn": "薩爾瓦多",
        "code": "+503"
    },
    {
        "en": "Honduras",
        "cn": "宏都拉斯",
        "code": "+504"
    },
    {
        "en": "Nicaragua",
        "cn": "尼加拉瓜",
        "code": "+505"
    },
    {
        "en": "Costa Rica",
        "cn": "哥斯大黎加",
        "code": "+506"
    },
    {
        "en": "Panama",
        "cn": "巴拿馬",
        "code": "+507"
    },
    {
        "en": "Haiti",
        "cn": "海地",
        "code": "+509"
    },
    {
        "en": "Peru",
        "cn": "秘魯",
        "code": "+51"
    },
    {
        "en": "Mexico",
        "cn": "墨西哥",
        "code": "+52"
    },
    {
        "en": "Cuba",
        "cn": "古巴",
        "code": "+53"
    },
    {
        "en": "Argentina",
        "cn": "阿根廷",
        "code": "+54"
    },
    {
        "en": "Brazil",
        "cn": "巴西",
        "code": "+55"
    },
    {
        "en": "Chile",
        "cn": "智利",
        "code": "+56"
    },
    {
        "en": "Colombia",
        "cn": "哥倫比亞",
        "code": "+57"
    },
    {
        "en": "Venezuela",
        "cn": "委內瑞拉",
        "code": "+58"
    },
    {
        "en": "Bolivia",
        "cn": "玻利維亞",
        "code": "+591"
    },
    {
        "en": "Guyana",
        "cn": "圭亞那",
        "code": "+592"
    },
    {
        "en": "Ecuador",
        "cn": "厄瓜多",
        "code": "+593"
    },
    {
        "en": "French Guiana",
        "cn": "法屬圭亞那",
        "code": "+594"
    },
    {
        "en": "Paraguay",
        "cn": "巴拉圭",
        "code": "+595"
    },
    {
        "en": "Martinique",
        "cn": "馬提尼克",
        "code": "+596"
    },
    {
        "en": "Suriname",
        "cn": "蘇利南",
        "code": "+597"
    },
    {
        "en": "Uruguay",
        "cn": "烏拉圭",
        "code": "+598"
    },
    {
        "en": "Netheriands Antilles",
        "cn": "荷屬安的列斯",
        "code": "+599"
    },
    {
        "en": "Australia",
        "cn": "澳洲",
        "code": "+61"
    },
    {
        "en": "Indonesia",
        "cn": "印尼",
        "code": "+62"
    },
    {
        "en": "Philippines",
        "cn": "菲律賓",
        "code": "+63"
    },
    {
        "en": "New Zealand",
        "cn": "紐西蘭",
        "code": "+64"
    },

    {
        "en": "Thailand",
        "cn": "泰國",
        "code": "+66"
    },
    {
        "en": "Brunei",
        "cn": "汶萊",
        "code": "+673"
    },
    {
        "en": "Nauru",
        "cn": "諾魯",
        "code": "+674"
    },
    {
        "en": "Papua New Cuinea",
        "cn": "巴布亞紐幾內亞",
        "code": "+675"
    },
    {
        "en": "Tonga",
        "cn": "東加",
        "code": "+676"
    },
    {
        "en": "Solomon Is",
        "cn": "所羅門群島",
        "code": "+677"
    },
    {
        "en": "Fiji",
        "cn": "斐濟",
        "code": "+679"
    },
    {
        "en": "Cook Is",
        "cn": "庫克群島",
        "code": "+682"
    },
    {
        "en": "Samoa Eastern",
        "cn": "東薩摩亞(美)",
        "code": "+684"
    },
    {
        "en": "Samoa Western",
        "cn": "西薩摩亞",
        "code": "+685"
    },
    {
        "en": "French Polynesia",
        "cn": "法屬玻利尼西亞",
        "code": "+689"
    },
    {
        "en": "Russia",
        "cn": "俄羅斯",
        "code": "+7"
    },
    {
        "en": "Kazakhstan",
        "cn": "哈薩克",
        "code": "+7"
    },
    {
        "en": "Japan",
        "cn": "日本",
        "code": "+81"
    },
    {
        "en": "Korea",
        "cn": "韓國",
        "code": "+82"
    },
    {
        "en": "Vietnam",
        "cn": "越南",
        "code": "+84"
    },
    {
        "en": "North Korea",
        "cn": "北韓",
        "code": "+850"
    },
    {
        "en": "Cambodia",
        "cn": "柬埔寨",
        "code": "+855"
    },
    {
        "en": "Laos",
        "cn": "寮國",
        "code": "+856"
    },

    {
        "en": "Bangladesh",
        "cn": "孟加拉國",
        "code": "+880"
    },

    {
        "en": "Turkey",
        "cn": "土耳其",
        "code": "+90"
    },
    {
        "en": "India",
        "cn": "印度",
        "code": "+91"
    },
    {
        "en": "Pakistan",
        "cn": "巴基斯坦",
        "code": "+92"
    },
    {
        "en": "Afghanistan",
        "cn": "阿富汗",
        "code": "+93"
    },
    {
        "en": "SriLanka",
        "cn": "斯里蘭卡",
        "code": "+94"
    },
    {
        "en": "Burma",
        "cn": "緬甸",
        "code": "+95"
    },
    {
        "en": "Maldives",
        "cn": "馬爾地夫",
        "code": "+960"
    },
    {
        "en": "Lebanon",
        "cn": "黎巴嫩",
        "code": "+961"
    },
    {
        "en": "Jordan",
        "cn": "約旦",
        "code": "+962"
    },
    {
        "en": "Syria",
        "cn": "敘利亞",
        "code": "+963"
    },
    {
        "en": "Iraq",
        "cn": "伊拉克",
        "code": "+964"
    },
    {
        "en": "Kuwait",
        "cn": "科威特",
        "code": "+965"
    },
    {
        "en": "Saudi Arabia",
        "cn": "沙烏地阿拉伯",
        "code": "+966"
    },
    {
        "en": "Yemen",
        "cn": "也門",
        "code": "+967"
    },
    {
        "en": "Oman",
        "cn": "阿曼",
        "code": "+968"
    },
    {
        "en": "United Arab Emirates",
        "cn": "阿拉伯聯合大公國",
        "code": "+971"
    },
    {
        "en": "Israel",
        "cn": "以色列",
        "code": "+972"
    },
    {
        "en": "Bahrain",
        "cn": "巴林",
        "code": "+973"
    },
    {
        "en": "Qatar",
        "cn": "卡達",
        "code": "+974"
    },
    {
        "en": "Bhutan",
        "cn": "不丹",
        "code": "+975"
    },
    {
        "en": "Mongolia",
        "cn": "蒙古",
        "code": "+976"
    },
    {
        "en": "Nepal",
        "cn": "尼泊爾",
        "code": "+977"
    },
    {
        "en": "Iran",
        "cn": "伊朗",
        "code": "+98"
    },
    {
        "en": "Tajikstan",
        "cn": "塔吉克斯坦",
        "code": "+992"
    },
    {
        "en": "Turkmenistan",
        "cn": "土庫曼斯坦",
        "code": "+993"
    },
    {
        "en": "Azerbaijan",
        "cn": "亞塞拜然",
        "code": "+994"
    },
    {
        "en": "Georgia",
        "cn": "格魯吉亞",
        "code": "+995"
    }
]

export default countryList;
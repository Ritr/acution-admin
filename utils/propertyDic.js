const json = {
    landUse: [
        {
            "id": "1-1",
            "value": "Residential",
            "label1": "住宅",
            "label2": "住宅",
            "label3": "residential"
        },
        {
            "id": "1-2",
            "value": "Commercial",
            "label1": "工商業",
            "label2": "工商业",
            "label3": "commercial"
        },
        {
            "id": "1-3",
            "value": "Agricultural",
            "label1": "土地",
            "label2": "土地",
            "label3": "agricultural"
        }
    ],
    ownershipStatus: [
        {
            "id": "2-1",
            "value": "Complete",
            "label1": "業權良好",
            "label2": "业权良好",
            "label3": "complete"
        },
        {
            "id": "2-2",
            "value": "LostOrDestroyedDeed",
            "label1": "樓契不齊",
            "label2": "楼契不齐",
            "label3": "lost or destroyed deed"
        },
        {
            "id": "2-3",
            "value": "Encumbrance",
            "label1": "釘契樓",
            "label2": "钉契楼",
            "label3": "encumbrance"
        },
        {
            "id": "2-4",
            "value": "Stigmatized",
            "label1": "凶宅",
            "label2": "凶宅",
            "label3": "stigmatized"
        }
    ],
    propertyStatus: [
        {
            "id": "3-1",
            "value": "SubjectToTenancy",
            "label1": "連約",
            "label2": "连约",
            "label3": "subject to tenancy"
        },
        {
            "id": "3-2",
            "value": "VacantPossession",
            "label1": "交吉",
            "label2": "交吉",
            "label3": "vacant possession"
        }
    ],
    propertyType: [
        {
            "id": "4-1",
            "value": "Residential",
            "label1": "住宅",
            "label2": "住宅",
            "label3": "residential",
            "children": [
                {
                    "id": "4-1-1",
                    "value": "PrivateEstate",
                    "label1": "私人屋苑",
                    "label2": "私人屋苑",
                    "label3": "private estate"
                },
                {
                    "id": "4-1-2",
                    "value": "Mansion",
                    "label1": "洋樓",
                    "label2": "洋楼",
                    "label3": "mansion"
                },
                {
                    "id": "4-1-3",
                    "value": "Tonglau",
                    "label1": "唐樓",
                    "label2": "唐楼",
                    "label3": "tonglau"
                },
                {
                    "id": "4-1-4",
                    "value": "VillageHouse",
                    "label1": "村屋",
                    "label2": "村屋",
                    "label3": "village house"
                },
                {
                    "id": "4-1-5",
                    "value": "DetachedHouse",
                    "label1": "獨立屋",
                    "label2": "独立屋",
                    "label3": "detached house"
                },
                {
                    "id": "4-1-6",
                    "value": "PublicEstate",
                    "label1": "居屋/公屋",
                    "label2": "居屋/公屋",
                    "label3": "public estate"
                }
            ]
        },
        {
            "id": "4-2",
            "value": "Commercial",
            "label1": "商業",
            "label2": "商业",
            "label3": "commercial",
            "children": [
                {
                    "id": "4-2-1",
                    "value": "Bunk",
                    "label1": "地舖",
                    "label2": "地铺",
                    "label3": "bunk"
                },
                {
                    "id": "4-2-2",
                    "value": "OfficeBuilding",
                    "label1": "寫字樓",
                    "label2": "写字楼",
                    "label3": "office building"
                },
                {
                    "id": "4-2-3",
                    "value": "CommercialBuilding",
                    "label1": "商業大廈",
                    "label2": "商业大厦",
                    "label3": "commercial building"
                },
                {
                    "id": "4-2-4",
                    "value": "IndustrialBuilding",
                    "label1": "工業大廈",
                    "label2": "工业大厦",
                    "label3": "industrial building"
                }
            ]
        },
        {
            "id": "4-3",
            "value": "Agricultural",
            "label1": "土地/農地",
            "label2": "土地/农地",
            "label3": "agricultural"
        }
    ],
    region: [
        {
            "id": "5-1",
            "value": "HongKongIsland",
            "label1": "港島",
            "label2": "港岛",
            "label3": "hong kong island",
            "children": [
                {
                    "value": "CentralRegion",
                    "label1": "中環",
                    "label2": "中环",
                    "label3": "central region",
                    "children": [
                        {
                            "id": "5-1-1",
                            "value": "Central",
                            "label1": "中環",
                            "label2": "中环",
                            "label3": "central"
                        },
                        {
                            "id": "5-1-2",
                            "value": "Admiralty",
                            "label1": "金鐘",
                            "label2": "金钟",
                            "label3": "admiralty"
                        },
                        {
                            "id": "5-1-3",
                            "value": "MidLevels",
                            "label1": "半山",
                            "label2": "半山",
                            "label3": "mid levels"
                        },
                        {
                            "id": "5-1-4",
                            "value": "VictoriaPeak",
                            "label1": "太平山",
                            "label2": "太平山",
                            "label3": "victoria peak"
                        },
                        {
                            "id": "5-1-5",
                            "value": "SheungWan",
                            "label1": "上環",
                            "label2": "上环",
                            "label3": "sheung wan"
                        }
                    ]
                },
                {
                    "value": "WesternRegion",
                    "label1": "西區",
                    "label2": "西区",
                    "label3": "western region",
                    "children": [
                        {
                            "id": "5-1-6",
                            "value": "WestMidLevels",
                            "label1": "西半山",
                            "label2": "西半山",
                            "label3": "west mid levels"
                        },
                        {
                            "id": "5-1-7",
                            "value": "KennedyTown",
                            "label1": "堅尼地城",
                            "label2": "坚尼地城",
                            "label3": "kennedy town"
                        },
                        {
                            "id": "5-1-8",
                            "value": "SaiWan",
                            "label1": "西環",
                            "label2": "西环",
                            "label3": "sai wan"
                        },
                        {
                            "id": "5-1-9",
                            "value": "SaiYingPun",
                            "label1": "西營盤",
                            "label2": "西营盘",
                            "label3": "sai ying pun"
                        },
                        {
                            "id": "5-1-10",
                            "value": "ShekTongTsui",
                            "label1": "石塘咀",
                            "label2": "石塘咀",
                            "label3": "shek tong tsui"
                        },
                        {
                            "id": "5-1-11",
                            "value": "PokFuLam",
                            "label1": "薄扶林",
                            "label2": "薄扶林",
                            "label3": "pok fu lam"
                        }
                    ]
                },
                {
                    "value": "SouthernRegion",
                    "label1": "南區",
                    "label2": "南区",
                    "label3": "southern region",
                    "children": [
                        {
                            "id": "5-1-12",
                            "value": "Aberdeen",
                            "label1": "香港仔",
                            "label2": "香港仔",
                            "label3": "aberdeen"
                        },
                        {
                            "id": "5-1-13",
                            "value": "ApLeiChau",
                            "label1": "鴨脷洲",
                            "label2": "鸭脷洲",
                            "label3": "ap lei chau"
                        },
                        {
                            "id": "5-1-14",
                            "value": "Cyberport",
                            "label1": "數碼港",
                            "label2": "数码港",
                            "label3": "cyberport"
                        },
                        {
                            "id": "5-1-15",
                            "value": "Stanley",
                            "label1": "赤柱",
                            "label2": "赤柱",
                            "label3": "stanley"
                        },
                        {
                            "id": "5-1-16",
                            "value": "TaiTam",
                            "label1": "大潭",
                            "label2": "大潭",
                            "label3": "tai tam"
                        },
                        {
                            "id": "5-1-17",
                            "value": "ShekO",
                            "label1": "石澳",
                            "label2": "石澳",
                            "label3": "shek o"
                        },
                        {
                            "id": "5-1-18",
                            "value": "WongChukHang",
                            "label1": "黃竹坑",
                            "label2": "黄竹坑",
                            "label3": "wong chuk hang"
                        },
                        {
                            "id": "5-1-19",
                            "value": "RepulseBay",
                            "label1": "淺水灣",
                            "label2": "浅水湾",
                            "label3": "repulse bay"
                        },
                        {
                            "id": "5-1-20",
                            "value": "DeepWaterBay",
                            "label1": "深水灣",
                            "label2": "深水湾",
                            "label3": "deep water bay"
                        }
                    ]
                },
                {
                    "value": "EasternRegion",
                    "label1": "東區",
                    "label2": "东区",
                    "label3": "eastern region",
                    "children": [
                        {
                            "id": "5-1-21",
                            "value": "NorthPoint",
                            "label1": "北角",
                            "label2": "北角",
                            "label3": "north point"
                        },
                        {
                            "id": "5-1-22",
                            "value": "QuarryBay",
                            "label1": "鰂魚湧",
                            "label2": "鲗鱼涌",
                            "label3": "quarry bay"
                        },
                        {
                            "id": "5-1-23",
                            "value": "SaiWanHo",
                            "label1": "西灣河",
                            "label2": "西湾河",
                            "label3": "sai wan ho"
                        },
                        {
                            "id": "5-1-24",
                            "value": "ShauKeiWan",
                            "label1": "筲箕灣",
                            "label2": "筲箕湾",
                            "label3": "shau kei wan"
                        },
                        {
                            "id": "5-1-25",
                            "value": "SiuSaiWan",
                            "label1": "小西灣",
                            "label2": "小西湾",
                            "label3": "siu sai wan"
                        },
                        {
                            "id": "5-1-26",
                            "value": "ChaiWan",
                            "label1": "柴灣",
                            "label2": "柴湾",
                            "label3": "chai wan"
                        },
                        {
                            "id": "5-1-27",
                            "value": "EastMid-Levels",
                            "label1": "東半山",
                            "label2": "东半山",
                            "label3": "east mid-levels"
                        },
                        {
                            "id": "5-1-28",
                            "value": "FortressHill",
                            "label1": "砲台山",
                            "label2": "炮台山",
                            "label3": "fortress hill"
                        }
                    ]
                },
                {
                    "value": "WanChaiRegion",
                    "label1": "灣仔",
                    "label2": "湾仔",
                    "label3": "wan chai region",
                    "children": [
                        {
                            "id": "5-1-29",
                            "value": "TaiHang",
                            "label1": "大坑",
                            "label2": "大坑",
                            "label3": "tai hang"
                        },
                        {
                            "id": "5-1-30",
                            "value": "WanChai",
                            "label1": "灣仔",
                            "label2": "湾仔",
                            "label3": "wan chai"
                        },
                        {
                            "id": "5-1-31",
                            "value": "TinHau",
                            "label1": "天后",
                            "label2": "天后",
                            "label3": "tin hau"
                        },
                        {
                            "id": "5-1-32",
                            "value": "BraemarHill",
                            "label1": "寶馬山",
                            "label2": "宝马山",
                            "label3": "braemar hill"
                        },
                        {
                            "id": "5-1-33",
                            "value": "CausewayBay",
                            "label1": "銅鑼灣",
                            "label2": "铜锣湾",
                            "label3": "causeway bay"
                        },
                        {
                            "id": "5-1-34",
                            "value": "HappyValley",
                            "label1": "跑馬地",
                            "label2": "跑马地",
                            "label3": "happy valley"
                        },
                        {
                            "id": "5-1-35",
                            "value": "JardinesLookout",
                            "label1": "渣甸山",
                            "label2": "渣甸山",
                            "label3": "jardine's lookout"
                        }
                    ]
                }
            ]
        },
        {
            "id": "5-2",
            "value": "Kowloon",
            "label1": "九龍",
            "label2": "九龙",
            "label3": "kowloon",
            "children": [
                {
                    "value": "WestKowloonRegion",
                    "label1": "西九龍",
                    "label2": "西九龙",
                    "label3": "west kowloon region",
                    "children": [
                        {
                            "id": "5-2-1",
                            "value": "Austin",
                            "label1": "柯士甸",
                            "label2": "柯士甸",
                            "label3": "austin"
                        },
                        {
                            "id": "5-2-2",
                            "value": "WestKowloon",
                            "label1": "西九龍",
                            "label2": "西九龙",
                            "label3": "west kowloon"
                        }
                    ]
                },
                {
                    "value": "YauTsimMongRegion",
                    "label1": "油尖旺",
                    "label2": "油尖旺",
                    "label3": "yau tsim mong region",
                    "children": [
                        {
                            "id": "5-2-3",
                            "value": "TsimShaTsui",
                            "label1": "尖沙咀",
                            "label2": "尖沙咀",
                            "label3": "tsim sha tsui"
                        },
                        {
                            "id": "5-2-4",
                            "value": "Jordan",
                            "label1": "佐敦",
                            "label2": "佐敦",
                            "label3": "jordan"
                        },
                        {
                            "id": "5-2-5",
                            "value": "YauMaTei",
                            "label1": "油麻地",
                            "label2": "油麻地",
                            "label3": "yau ma tei"
                        },
                        {
                            "id": "5-2-6",
                            "value": "MongKok",
                            "label1": "旺角",
                            "label2": "旺角",
                            "label3": "mong kok"
                        },
                        {
                            "id": "5-2-7",
                            "value": "PrinceEdward",
                            "label1": "太子",
                            "label2": "太子",
                            "label3": "prince edward"
                        },
                        {
                            "id": "5-2-8",
                            "value": "TaiKokTsui",
                            "label1": "大角咀",
                            "label2": "大角咀",
                            "label3": "tai kok tsui"
                        }
                    ]
                },
                {
                    "value": "ShamShuiPoRegion",
                    "label1": "深水埗",
                    "label2": "深水埗",
                    "label3": "sham shui po region",
                    "children": [
                        {
                            "id": "5-2-9",
                            "value": "ShamShuiPo",
                            "label1": "深水埗",
                            "label2": "深水埗",
                            "label3": "sham shui po"
                        },
                        {
                            "id": "5-2-10",
                            "value": "CheungShaWan",
                            "label1": "長沙灣",
                            "label2": "长沙湾",
                            "label3": "cheung sha wan"
                        },
                        {
                            "id": "5-2-11",
                            "value": "LaiChiKok",
                            "label1": "荔枝角",
                            "label2": "荔枝角",
                            "label3": "lai chi kok"
                        }
                    ]
                },
                {
                    "value": "HoManTinRegion",
                    "label1": "何文田",
                    "label2": "何文田",
                    "label3": "ho man tin region",
                    "children": [
                        {
                            "id": "5-2-12",
                            "value": "HoManTin",
                            "label1": "何文田",
                            "label2": "何文田",
                            "label3": "ho man tin"
                        }
                    ]
                },
                {
                    "value": "WongTaiSinRegion",
                    "label1": "黃大仙",
                    "label2": "黄大仙",
                    "label3": "wong tai sin region",
                    "children": [
                        {
                            "id": "5-2-13",
                            "value": "WongTaiSin",
                            "label1": "黃大仙",
                            "label2": "黄大仙",
                            "label3": "wong tai sin"
                        },
                        {
                            "id": "5-2-14",
                            "value": "DiamondHill",
                            "label1": "鑽石山",
                            "label2": "钻石山",
                            "label3": "diamond hill"
                        },
                        {
                            "id": "5-2-15",
                            "value": "ChoiHung",
                            "label1": "彩虹",
                            "label2": "彩虹",
                            "label3": "choi hung"
                        },
                        {
                            "id": "5-2-16",
                            "value": "NgauChiWan",
                            "label1": "牛池灣",
                            "label2": "牛池湾",
                            "label3": "ngau chi wan"
                        },
                        {
                            "id": "5-2-17",
                            "value": "TszWanShan",
                            "label1": "慈雲山",
                            "label2": "慈云山",
                            "label3": "tsz wan shan"
                        }
                    ]
                },
                {
                    "value": "KowloonCityRegion",
                    "label1": "九龍城",
                    "label2": "九龙城",
                    "label3": "kowloon city region",
                    "children": [
                        {
                            "id": "5-2-18",
                            "value": "KowloonCity",
                            "label1": "九龍城",
                            "label2": "九龙城",
                            "label3": "kowloon city"
                        },
                        {
                            "id": "5-2-19",
                            "value": "KaiTak",
                            "label1": "啟德",
                            "label2": "启德",
                            "label3": "kai tak"
                        },
                        {
                            "id": "5-2-20",
                            "value": "MaTauWai",
                            "label1": "馬頭圍",
                            "label2": "马头围",
                            "label3": "ma tau wai"
                        },
                        {
                            "id": "5-2-21",
                            "value": "SanPoKong",
                            "label1": "新蒲崗",
                            "label2": "新蒲岗",
                            "label3": "san po kong"
                        },
                        {
                            "id": "5-2-22",
                            "value": "ToKwaWan",
                            "label1": "土瓜灣",
                            "label2": "土瓜湾",
                            "label3": "to kwa wan"
                        }
                    ]
                },
                {
                    "value": "KowloonTongRegion",
                    "label1": "九龍塘",
                    "label2": "九龙塘",
                    "label3": "kowloon tong region",
                    "children": [
                        {
                            "id": "5-2-23",
                            "value": "KowloonTong",
                            "label1": "九龍塘",
                            "label2": "九龙塘",
                            "label3": "kowloon tong"
                        },
                        {
                            "id": "5-2-24",
                            "value": "ShekKipMei",
                            "label1": "石硤尾",
                            "label2": "石硖尾",
                            "label3": "shek kip mei"
                        }
                    ]
                },
                {
                    "value": "KowloonBayRegion",
                    "label1": "九龍灣",
                    "label2": "九龙湾",
                    "label3": "kowloon bay region",
                    "children": [
                        {
                            "id": "5-2-25",
                            "value": "KowloonBay",
                            "label1": "九龍灣",
                            "label2": "九龙湾",
                            "label3": "kowloon bay"
                        },
                        {
                            "id": "5-2-26",
                            "value": "NgauTauKok",
                            "label1": "牛頭角",
                            "label2": "牛头角",
                            "label3": "ngau tau kok"
                        }
                    ]
                },
                {
                    "value": "KowloonRegion",
                    "label1": "九龍",
                    "label2": "九龙",
                    "label3": "kowloon region",
                    "children": [
                        {
                            "id": "5-2-27",
                            "value": "KowloonStation",
                            "label1": "九龍站",
                            "label2": "九龙站",
                            "label3": "kowloon station"
                        },
                        {
                            "id": "5-2-28",
                            "value": "Olympics",
                            "label1": "奧運",
                            "label2": "奥运",
                            "label3": "olympics"
                        }
                    ]
                },
                {
                    "value": "HungHomRegion",
                    "label1": "紅磡",
                    "label2": "红磡",
                    "label3": "hung hom region",
                    "children": [
                        {
                            "id": "5-2-29",
                            "value": "HungHom",
                            "label1": "紅磡",
                            "label2": "红磡",
                            "label3": "hung hom"
                        }
                    ]
                },
                {
                    "value": "KwunTongRegion",
                    "label1": "觀塘",
                    "label2": "观塘",
                    "label3": "kwun tong region",
                    "children": [
                        {
                            "id": "5-2-30",
                            "value": "KwunTong",
                            "label1": "觀塘",
                            "label2": "观塘",
                            "label3": "kwun tong"
                        },
                        {
                            "id": "5-2-31",
                            "value": "ChaKwoLing",
                            "label1": "茶果嶺",
                            "label2": "茶果岭",
                            "label3": "cha kwo ling"
                        },
                        {
                            "id": "5-2-32",
                            "value": "SauMauPing",
                            "label1": "秀茂坪",
                            "label2": "秀茂坪",
                            "label3": "sau mau ping"
                        }
                    ]
                },
                {
                    "value": "YauTongRegion",
                    "label1": "油塘",
                    "label2": "油塘",
                    "label3": "yau tong region",
                    "children": [
                        {
                            "id": "5-2-33",
                            "value": "YauTong",
                            "label1": "油塘",
                            "label2": "油塘",
                            "label3": "yau tong"
                        },
                        {
                            "id": "5-2-34",
                            "value": "LamTin",
                            "label1": "藍田",
                            "label2": "蓝田",
                            "label3": "lam tin"
                        },
                        {
                            "id": "5-2-35",
                            "value": "LeiYueMun",
                            "label1": "鯉魚門",
                            "label2": "鲤鱼门",
                            "label3": "lei yue mun"
                        }
                    ]
                }
            ]
        },
        {
            "id": "5-3",
            "value": "NewTerritories",
            "label1": "新界",
            "label2": "新界",
            "label3": "new territories",
            "children": [
                {
                    "value": "SaiKungRegion",
                    "label1": "西貢",
                    "label2": "西贡",
                    "label3": "sai kung region",
                    "children": [
                        {
                            "id": "5-3-1",
                            "value": "SaiKung",
                            "label1": "西貢",
                            "label2": "西贡",
                            "label3": "sai kung"
                        },
                        {
                            "id": "5-3-2",
                            "value": "ClearwaterBay",
                            "label1": "清水灣",
                            "label2": "清水湾",
                            "label3": "clearwater bay"
                        }
                    ]
                },
                {
                    "value": "TseungKwanORegion",
                    "label1": "將軍澳",
                    "label2": "将军澳",
                    "label3": "tseung kwan o region",
                    "children": [
                        {
                            "id": "5-3-3",
                            "value": "TseungKwanO",
                            "label1": "將軍澳",
                            "label2": "将军澳",
                            "label3": "tseung kwan o"
                        },
                        {
                            "id": "5-3-4",
                            "value": "LOHASPark",
                            "label1": "日出康城",
                            "label2": "日出康城",
                            "label3": "lohas park"
                        }
                    ]
                },
                {
                    "value": "ShaTinRegion",
                    "label1": "沙田",
                    "label2": "沙田",
                    "label3": "sha tin region",
                    "children": [
                        {
                            "id": "5-3-5",
                            "value": "MaOnShan",
                            "label1": "馬鞍山",
                            "label2": "马鞍山",
                            "label3": "ma on shan"
                        },
                        {
                            "id": "5-3-6",
                            "value": "ShaTin",
                            "label1": "沙田",
                            "label2": "沙田",
                            "label3": "sha tin"
                        },
                        {
                            "id": "5-3-7",
                            "value": "TaiWai",
                            "label1": "大圍",
                            "label2": "大围",
                            "label3": "tai wai"
                        },
                        {
                            "id": "5-3-8",
                            "value": "FoTan",
                            "label1": "火炭",
                            "label2": "火炭",
                            "label3": "fo tan"
                        }
                    ]
                },
                {
                    "value": "TaiPoRegion",
                    "label1": "大埔",
                    "label2": "大埔",
                    "label3": "tai po region",
                    "children": [
                        {
                            "id": "5-3-9",
                            "value": "TaiPo",
                            "label1": "大埔",
                            "label2": "大埔",
                            "label3": "tai po"
                        },
                        {
                            "id": "5-3-10",
                            "value": "TaiWo",
                            "label1": "太和",
                            "label2": "太和",
                            "label3": "tai wo"
                        }
                    ]
                },
                {
                    "value": "NorthernRegion",
                    "label1": "北區",
                    "label2": "北区",
                    "label3": "northern region",
                    "children": [
                        {
                            "id": "5-3-11",
                            "value": "Fanling",
                            "label1": "粉嶺",
                            "label2": "粉岭",
                            "label3": "fanling"
                        },
                        {
                            "id": "5-3-12",
                            "value": "SheungShui",
                            "label1": "上水",
                            "label2": "上水",
                            "label3": "sheung shui"
                        },
                        {
                            "id": "5-3-13",
                            "value": "ShaTauKok",
                            "label1": "沙頭角",
                            "label2": "沙头角",
                            "label3": "sha tau kok"
                        }
                    ]
                },
                {
                    "value": "TuenMunRegion",
                    "label1": "屯門",
                    "label2": "屯门",
                    "label3": "tuen mun region",
                    "children": [
                        {
                            "id": "5-3-14",
                            "value": "TuenMun",
                            "label1": "屯門",
                            "label2": "屯门",
                            "label3": "tuen mun"
                        },
                        {
                            "id": "5-3-15",
                            "value": "ShamTseng",
                            "label1": "深井",
                            "label2": "深井",
                            "label3": "sham tseng"
                        }
                    ]
                },
                {
                    "value": "YuenLongRegion",
                    "label1": "元朗",
                    "label2": "元朗",
                    "label3": "yuen long region",
                    "children": [
                        {
                            "id": "5-3-16",
                            "value": "YuenLong",
                            "label1": "元朗",
                            "label2": "元朗",
                            "label3": "yuen long"
                        }
                    ]
                },
                {
                    "value": "TinShuiWaiRegion",
                    "label1": "天水圍",
                    "label2": "天水围",
                    "label3": "tin shui wai region",
                    "children": [
                        {
                            "id": "5-3-17",
                            "value": "TinShuiWai",
                            "label1": "天水圍",
                            "label2": "天水围",
                            "label3": "tin shui wai"
                        }
                    ]
                },
                {
                    "value": "KwaiTsingRegion",
                    "label1": "葵青",
                    "label2": "葵青",
                    "label3": "kwai tsing region",
                    "children": [
                        {
                            "id": "5-3-18",
                            "value": "TaiWoHau",
                            "label1": "大窩口",
                            "label2": "大窝口",
                            "label3": "tai wo hau"
                        },
                        {
                            "id": "5-3-19",
                            "value": "KwaiChung",
                            "label1": "葵涌",
                            "label2": "葵涌",
                            "label3": "kwai chung"
                        },
                        {
                            "id": "5-3-20",
                            "value": "KwaiFong",
                            "label1": "葵芳",
                            "label2": "葵芳",
                            "label3": "kwai fong"
                        },
                        {
                            "id": "5-3-21",
                            "value": "TsingYi",
                            "label1": "青衣",
                            "label2": "青衣",
                            "label3": "tsing yi"
                        }
                    ]
                },
                {
                    "value": "TsuenWanRegion",
                    "label1": "荃灣",
                    "label2": "荃湾",
                    "label3": "tsuen wan region",
                    "children": [
                        {
                            "id": "5-3-22",
                            "value": "TsuenWan",
                            "label1": "荃灣",
                            "label2": "荃湾",
                            "label3": "tsuen wan"
                        }
                    ]
                }
            ]
        }

    ],
    auctionNature: [
        {
            "id": "6-1",
            "value": "ForeclosedProperty",
            "label1": "銀主盤",
            "label2": "银主盘",
            "label3": "foreclosed property"
        },
        {
            "id": "6-2",
            "value": "PrivateEntrustment",
            "label1": "私人委託",
            "label2": "私人委托",
            "label3": "private entrustment"
        },
        {
            "id": "6-3",
            "value": "JudicialOrder",
            "label1": "法庭命令",
            "label2": "法庭命令",
            "label3": "judicial order"
        }
    ],
    status: [
        // {
        //     "id": "7-1",
        //     "value": "InProgress",
        //     "label1": "正在進行",
        //     "label2": "正在进行",
        //     "label3": "in progress"
        // },
        // {
        //     "id": "7-2",
        //     "value": "AboutToStart",
        //     "label1": "即將開始",
        //     "label2": "即将开始",
        //     "label3": "about to start"
        // },
        // {
        //     "id": "7-3",
        //     "value": "Completed",
        //     "label1": "已結束",
        //     "label2": "已结束",
        //     "label3": "completed"
        // },
        {
            "id": "7-6",
            "value": "Auto",
            "label1": "自动",
            "label2": "自动",
            "label3": "auto"
        },
        {
            "id": "7-4",
            "value": "Aborted",
            "label1": "中止",
            "label2": "中止",
            "label3": "aborted"
        },
        {
            "id": "7-5",
            "value": "Cancelled",
            "label1": "撤回",
            "label2": "撤回",
            "label3": "cancelled"
        }
    ]
}

export default json;
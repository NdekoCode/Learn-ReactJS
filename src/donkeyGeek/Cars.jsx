import React from "react";

const Cars = ({ fill = "#000000", width }) => {
  return (
    <svg
      version={1.0}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 1280.000000 813.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,813.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M5535 8120 c-646 -17 -1237 -43 -1819 -80 l-310 -20 -50 -42 c-321
  -267 -611 -556 -820 -818 -188 -236 -296 -402 -514 -795 -80 -143 -146 -262
  -148 -264 -2 -2 -15 0 -29 3 -43 11 -55 57 -55 205 0 146 -8 176 -54 190 -120
  39 -385 40 -527 2 -157 -41 -273 -103 -306 -164 -26 -47 -26 -237 0 -288 62
  -125 229 -199 450 -199 90 0 95 1 101 23 17 67 119 140 211 151 l50 6 -68 -24
  c-38 -14 -78 -33 -89 -43 -26 -23 -48 -66 -48 -93 0 -18 6 -20 75 -20 72 0
  173 -15 187 -29 4 -3 -25 -42 -63 -86 -124 -141 -236 -279 -288 -355 -55 -79
  -68 -71 -27 15 24 51 127 195 165 229 12 11 21 23 21 27 0 10 -45 -16 -188
  -108 -321 -207 -601 -459 -1017 -912 l-169 -184 -48 -171 c-91 -320 -144 -630
  -155 -912 l-6 -160 59 -61 c55 -56 117 -95 204 -129 35 -14 35 -14 -23 -9 -73
  7 -150 36 -200 76 l-39 32 6 -84 c4 -46 22 -401 41 -789 19 -388 36 -725 37
  -749 l3 -45 70 -21 c39 -12 94 -34 123 -49 54 -28 137 -95 127 -104 -3 -3 -56
  21 -117 52 -62 32 -132 60 -155 63 l-41 5 -8 -78 c-11 -108 -9 -368 5 -489 24
  -215 54 -402 72 -454 47 -135 174 -282 292 -341 l68 -33 337 6 c185 4 567 10
  847 13 372 5 518 10 541 19 37 15 64 67 64 122 l0 40 -127 1 c-125 0 -226 15
  -323 47 l-45 14 80 -4 c182 -11 1621 -16 1880 -7 232 8 302 14 410 35 142 28
  311 51 505 68 176 16 3245 16 3420 0 194 -17 363 -40 505 -68 108 -21 178 -27
  410 -35 259 -9 1698 -4 1880 7 l80 4 -45 -14 c-96 -32 -198 -47 -322 -48
  l-128 -1 0 -39 c0 -55 27 -107 64 -122 23 -9 169 -14 541 -19 281 -3 662 -9
  847 -13 l337 -6 68 33 c118 59 245 206 292 341 18 52 48 239 72 454 14 121 16
  381 5 489 l-8 78 -41 -5 c-23 -3 -93 -31 -155 -63 -61 -31 -114 -55 -117 -52
  -10 9 73 76 127 104 29 15 85 37 123 49 l70 21 3 45 c1 24 18 361 37 749 19
  388 37 743 41 789 l6 84 -39 -32 c-50 -40 -127 -69 -200 -76 -58 -5 -58 -5
  -23 9 87 34 149 73 204 129 l59 61 -6 160 c-11 282 -64 591 -155 914 l-48 169
  -237 256 c-335 361 -547 557 -808 744 -194 139 -392 253 -308 177 38 -34 141
  -178 165 -229 41 -86 28 -94 -26 -16 -56 81 -122 163 -263 326 -53 61 -93 113
  -89 116 14 14 115 29 187 29 69 0 75 2 75 20 0 27 -22 70 -47 93 -11 9 -51 28
  -89 42 l-69 25 50 -6 c92 -11 194 -84 211 -151 6 -22 11 -23 103 -23 116 0
  213 20 295 59 76 36 122 80 154 149 22 48 24 64 20 150 -5 115 -19 148 -84
  193 -110 75 -266 118 -460 126 -199 8 -331 -16 -353 -63 -6 -15 -11 -79 -11
  -155 0 -146 -13 -194 -57 -205 -13 -4 -26 -5 -27 -3 -2 2 -50 87 -106 189
  -272 493 -393 678 -629 960 -163 196 -493 517 -747 728 l-50 42 -200 15 c-390
  29 -904 56 -1434 76 -369 13 -1825 19 -2225 9z m-2025 -138 c-73 -50 -107 -81
  -125 -114 -11 -20 -17 -39 -15 -41 3 -3 92 3 198 13 1396 134 3026 176 4332
  110 461 -23 974 -64 1365 -109 88 -10 162 -16 165 -14 2 2 -4 21 -15 41 -18
  32 -45 58 -125 115 -14 10 -3 7 26 -7 225 -109 610 -583 1064 -1311 111 -178
  323 -546 317 -551 -2 -2 -107 3 -233 11 -1963 124 -4473 153 -6599 75 -547
  -20 -1253 -55 -1614 -80 -79 -6 -146 -9 -148 -7 -10 10 271 484 451 762 396
  610 704 977 918 1095 59 33 76 38 38 12z m-900 -3167 c84 -192 154 -352 156
  -354 3 -3 81 -8 175 -12 170 -8 524 -35 567 -45 23 -5 28 -20 13 -43 -8 -12
  -51 -10 -282 13 -151 14 -323 30 -384 34 l-109 7 -148 370 c-132 330 -158 399
  -144 384 2 -2 72 -161 156 -354z m7595 -22 c-80 -202 -150 -371 -153 -374 -4
  -4 -86 -12 -182 -18 -96 -7 -257 -21 -358 -31 -230 -25 -229 -25 -237 1 -4 13
  -2 24 4 29 16 9 386 40 588 49 90 4 164 9 167 12 2 2 73 162 157 356 84 194
  155 350 157 348 2 -2 -62 -169 -143 -372z m-8675 -191 c339 -110 553 -151 920
  -174 l196 -12 321 -635 c348 -689 383 -765 527 -1156 53 -143 122 -325 153
  -405 195 -503 391 -822 684 -1111 l117 -116 103 -22 c326 -68 630 -94 1274
  -108 l350 -8 -200 -8 c-110 -4 -380 -6 -600 -3 -424 5 -575 16 -843 61 -169
  29 -154 19 -317 208 -342 396 -510 709 -770 1437 -106 295 -173 464 -250 627
  l-57 121 -92 6 c-50 3 -199 10 -331 16 -1035 46 -1803 140 -2116 261 -98 38
  -150 76 -194 141 -64 98 -67 228 -14 620 l22 158 166 54 c348 114 412 127 601
  122 l135 -3 215 -71z m10296 63 c102 -18 164 -35 395 -111 l166 -54 22 -158
  c53 -390 50 -523 -14 -620 -44 -65 -96 -103 -194 -141 -312 -120 -1083 -215
  -2116 -261 -132 -6 -281 -13 -331 -16 l-92 -6 -57 -121 c-82 -174 -129 -292
  -250 -626 -149 -412 -185 -501 -285 -706 -136 -278 -283 -500 -491 -740 -157
  -181 -142 -171 -314 -200 -261 -44 -425 -56 -845 -61 -217 -3 -485 -1 -595 3
  l-200 8 350 8 c641 14 950 40 1274 108 l103 22 117 116 c292 288 491 612 684
  1111 31 80 102 269 158 420 142 383 170 445 527 1151 l316 625 196 12 c361 23
  582 64 903 169 109 35 217 68 240 72 70 14 239 12 333 -4z m-6686 -45 c278
  -17 829 -67 937 -85 26 -5 41 -18 73 -64 25 -38 50 -63 69 -69 37 -13 37 -11
  55 -247 41 -520 25 -801 -55 -975 -42 -91 -71 -125 -134 -155 l-54 -27 -573
  -5 c-717 -7 -956 5 -1163 59 -360 94 -596 334 -685 697 -53 213 -47 520 13
  663 47 113 312 194 711 218 160 10 561 4 806 -10z m3497 -5 c230 -27 367 -64
  462 -125 66 -43 86 -76 106 -183 78 -418 -54 -853 -325 -1070 -69 -55 -143
  -100 -217 -131 -245 -102 -466 -121 -1321 -113 l-573 5 -57 28 c-97 49 -151
  151 -189 357 -23 125 -22 501 1 772 9 110 19 208 22 218 3 9 20 24 39 31 21 9
  43 31 59 59 15 25 33 51 41 57 32 27 729 90 1255 114 149 7 571 -5 697 -19z
  m-6232 -2810 c338 -19 967 -64 971 -68 2 -2 -2 -11 -9 -21 -13 -17 -28 -17
  -343 8 -520 41 -573 45 -914 57 -346 12 -663 3 -897 -26 -65 -8 -120 -15 -122
  -15 -2 0 14 -13 35 -29 82 -60 120 -126 130 -228 21 -199 -146 -356 -375 -352
  l-76 2 69 8 c89 12 144 37 205 94 127 119 127 311 0 434 -24 23 -54 44 -67 48
  -44 11 -269 -60 -360 -114 -26 -14 -69 -47 -96 -72 l-49 -46 24 43 c55 100
  175 186 319 230 79 24 227 49 365 62 143 13 872 4 1190 -15z m9162 15 c157
  -13 297 -36 383 -62 146 -45 266 -131 319 -229 l24 -44 -44 42 c-24 23 -71 58
  -104 78 -63 37 -246 101 -320 112 -42 5 -46 4 -98 -46 -134 -127 -137 -314 -6
  -436 61 -57 116 -82 205 -94 l69 -8 -77 -2 c-275 -4 -450 226 -347 458 23 52
  48 82 103 122 21 16 37 29 35 29 -2 0 -57 7 -122 15 -234 29 -551 38 -897 26
  -341 -12 -394 -16 -913 -57 -318 -25 -329 -25 -342 -7 -7 10 -12 19 -11 21 8
  8 989 70 1351 85 187 8 678 6 792 -3z m-7067 -180 c844 -59 1310 -74 2162 -67
  381 3 776 10 878 16 337 19 668 43 853 60 100 10 183 17 185 15 6 -4 -101
  -189 -151 -262 -102 -148 -205 -239 -301 -267 -133 -39 -456 -74 -891 -97
  -310 -16 -1423 -16 -1730 0 -547 29 -831 65 -942 118 -109 53 -227 187 -341
  391 -34 60 -62 113 -62 116 0 4 12 4 28 2 15 -3 155 -14 312 -25z m-2397 -187
  c-24 -2 -62 -2 -85 0 -24 2 -5 4 42 4 47 0 66 -2 43 -4z m8680 0 c-24 -2 -62
  -2 -85 0 -24 2 -5 4 42 4 47 0 66 -2 43 -4z m-7768 -34 l550 -22 27 -31 c15
  -17 27 -33 28 -37 0 -3 -65 3 -145 13 -193 23 -537 54 -825 73 -129 9 -296 20
  -370 25 l-135 9 160 -4 c88 -2 408 -13 710 -26z m7505 20 c-534 -33 -929 -65
  -1195 -97 -80 -10 -145 -16 -145 -13 1 4 13 20 28 37 l27 31 575 22 c316 12
  582 24 590 25 8 2 69 4 135 3 l120 0 -135 -8z m-6500 -683 c786 -47 1160 -56
  2380 -56 1312 0 1816 15 2743 78 105 7 107 7 107 -14 0 -20 -6 -21 -127 -27
  -71 -4 -254 -14 -408 -22 -822 -43 -1101 -49 -2320 -49 -1221 0 -1456 5 -2325
  50 -519 26 -515 26 -518 49 -3 20 0 20 105 13 59 -4 223 -14 363 -22z m-3213
  -172 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m11210 0 c-3 -3
  -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-10665 -44 c1009 -90 1262
  -105 1638 -97 295 6 456 26 595 72 45 15 -31 -35 -85 -56 -295 -113 -1119 -80
  -2555 104 -201 26 -51 17 407 -23z m10503 23 c-723 -92 -1259 -144 -1721 -164
  -474 -21 -811 16 -914 102 -21 17 -21 20 -5 14 140 -47 300 -66 600 -72 377
  -8 666 10 1620 97 434 39 627 50 420 23z"
        />
        <path
          d="M746 4365 c-95 -161 -100 -365 -14 -528 140 -262 469 -349 714 -188
  32 21 73 54 91 72 32 35 103 145 103 162 0 5 -23 -12 -52 -38 -320 -288 -829
  -45 -828 395 0 41 5 95 11 119 5 24 8 45 6 48 -3 2 -17 -17 -31 -42z"
        />
        <path
          d="M2173 3824 c-48 -106 -19 -252 66 -326 137 -121 345 -85 427 73 l15
  29 -46 -34 c-138 -106 -328 -60 -405 97 -29 60 -32 73 -28 141 2 42 2 76 0 76
  -2 0 -15 -25 -29 -56z"
        />
        <path
          d="M12025 4390 c17 -63 17 -215 0 -280 -59 -228 -263 -390 -490 -390
  -119 0 -251 52 -333 131 -23 23 -42 38 -42 35 0 -19 54 -107 91 -150 163 -184
  444 -221 648 -85 78 52 133 116 176 204 64 132 72 285 22 417 -27 71 -86 166
  -72 118z"
        />
        <path
          d="M10598 3804 c4 -68 1 -81 -28 -141 -48 -97 -131 -151 -235 -152 -70
  -1 -117 14 -170 55 l-46 34 15 -29 c46 -89 139 -145 240 -145 110 1 195 54
  245 156 41 81 43 167 6 246 -13 28 -25 52 -27 52 -2 0 -2 -34 0 -76z"
        />
        <path
          d="M3704 4313 c-9 -48 2 -216 22 -328 21 -120 66 -258 106 -324 43 -72
  61 -78 54 -20 -3 24 -13 175 -21 334 -9 160 -18 309 -21 333 l-5 42 -64 0 -64
  0 -7 -37z"
        />
        <path
          d="M3890 4313 c0 -49 41 -738 45 -750 5 -14 134 -87 142 -80 7 8 -42
  831 -51 846 -4 6 -34 11 -72 11 -63 0 -64 0 -64 -27z"
        />
        <path
          d="M4080 4283 c1 -117 49 -826 57 -833 13 -12 125 -51 131 -45 9 8 -41
  899 -51 913 -6 7 -34 12 -73 12 l-64 0 0 -47z"
        />
        <path
          d="M4270 4293 c0 -41 39 -756 46 -840 l6 -73 36 -10 c20 -6 53 -13 72
  -16 l35 -6 -23 474 c-13 260 -25 479 -27 486 -3 8 -27 12 -75 12 -70 0 -70 0
  -70 -27z"
        />
        <path
          d="M4460 4303 c0 -5 11 -222 25 -483 14 -261 25 -478 25 -481 0 -7 141
  -32 146 -26 5 4 -45 969 -51 985 -5 13 -145 18 -145 5z"
        />
        <path
          d="M6066 4303 l-39 -4 6 -132 c10 -256 40 -842 43 -846 2 -2 10 2 18 8
  26 21 55 97 76 198 39 185 38 592 -3 734 -14 48 -21 51 -101 42z"
        />
        <path
          d="M4655 4263 c2 -21 14 -243 26 -493 12 -250 25 -459 29 -463 4 -4 38
  -11 76 -14 l70 -6 -4 79 c-2 44 -14 270 -26 504 l-21 425 -78 3 -77 3 5 -38z"
        />
        <path
          d="M4854 4203 c3 -54 16 -282 27 -508 11 -225 22 -411 22 -412 1 -1 35
  -5 75 -8 l72 -8 0 39 c0 60 -49 976 -52 979 -2 1 -36 5 -77 9 l-74 6 7 -97z"
        />
        <path
          d="M5883 4293 c-33 -3 -53 -9 -53 -16 0 -7 11 -226 25 -487 14 -261 25
  -482 25 -490 0 -13 12 -15 68 -12 37 2 71 7 75 12 4 4 -3 228 -17 497 -14 269
  -26 493 -26 496 0 4 -10 6 -22 5 -13 -1 -47 -3 -75 -5z"
        />
        <path
          d="M5050 4238 c1 -79 48 -959 52 -962 9 -8 138 -14 142 -7 5 8 -43 988
  -49 1009 -3 8 -27 12 -75 12 l-70 0 0 -52z"
        />
        <path
          d="M5247 4283 c-4 -6 19 -483 45 -963 l3 -55 75 0 75 0 -3 40 c-1 22
  -11 229 -22 460 -11 231 -23 444 -26 473 l-5 52 -69 0 c-38 0 -71 -3 -73 -7z"
        />
        <path
          d="M5440 4263 c0 -16 11 -242 25 -503 14 -261 25 -478 25 -482 0 -5 34
  -8 75 -8 51 0 75 4 75 12 0 54 -51 986 -55 996 -3 8 -28 12 -75 12 -70 0 -70
  0 -70 -27z"
        />
        <path
          d="M5638 4283 c-6 -12 46 -1000 53 -1007 3 -4 37 -4 75 0 l69 6 -3 77
  c-2 42 -14 267 -26 501 l-21 425 -72 3 c-39 2 -73 -1 -75 -5z"
        />
        <path
          d="M8956 4318 c-3 -18 -12 -168 -21 -333 -8 -165 -18 -320 -21 -344 -7
  -58 11 -52 54 20 40 66 85 204 106 324 20 112 31 280 22 328 l-7 37 -64 0 -64
  0 -5 -32z"
        />
        <path
          d="M8774 4329 c-9 -15 -58 -838 -51 -846 8 -7 137 66 142 80 3 11 46
  721 45 760 0 14 -10 17 -64 17 -38 0 -68 -5 -72 -11z"
        />
        <path
          d="M8583 4323 c-8 -3 -13 -22 -13 -46 0 -23 -9 -227 -22 -454 -12 -227
  -19 -415 -16 -418 6 -6 117 32 131 45 8 7 56 723 57 838 l0 42 -62 -1 c-35 0
  -69 -3 -75 -6z"
        />
        <path
          d="M8385 4308 c-5 -16 -52 -952 -48 -957 3 -5 117 19 132 28 8 5 19 150
  36 447 14 241 25 451 25 467 0 27 0 27 -70 27 -48 0 -72 -4 -75 -12z"
        />
        <path
          d="M6642 4293 c-37 -72 -53 -529 -24 -712 22 -137 71 -261 104 -261 4 0
  8 35 8 78 0 42 4 142 9 222 17 263 35 670 30 674 -2 2 -30 7 -61 10 -49 6 -58
  5 -66 -11z"
        />
        <path
          d="M8195 4298 c-6 -17 -56 -980 -51 -985 2 -2 35 2 75 8 53 9 71 16 71
  28 0 9 11 223 25 476 14 253 25 466 25 473 0 8 -21 12 -70 12 -47 0 -72 -4
  -75 -12z"
        />
        <path
          d="M6816 4212 c-12 -166 -48 -913 -45 -917 2 -1 36 -5 75 -7 l72 -4 6
  116 c24 439 46 883 44 885 -2 1 -35 5 -74 9 l-72 6 -6 -88z"
        />
        <path
          d="M7853 4293 l-51 -4 -6 -72 c-8 -91 -46 -858 -46 -911 l0 -39 73 8
  c39 3 73 7 73 8 1 1 12 191 23 422 12 231 24 459 28 508 l6 87 -24 -2 c-13 -1
  -47 -3 -76 -5z"
        />
        <path
          d="M7996 4288 c-2 -7 -14 -218 -25 -468 -12 -250 -24 -473 -27 -494 l-5
  -39 72 6 c40 3 75 10 79 14 4 4 17 217 29 473 12 256 24 477 27 493 l6 27 -77
  0 c-52 0 -77 -4 -79 -12z"
        />
        <path
          d="M7016 4278 c-2 -7 -14 -218 -25 -468 -12 -250 -24 -471 -26 -491 l-5
  -36 72 -6 c40 -3 74 -4 77 -1 4 4 22 315 48 842 4 90 6 166 4 168 -2 2 -35 4
  -73 4 -46 0 -70 -4 -72 -12z"
        />
        <path
          d="M7216 4281 c-4 -6 -56 -927 -56 -994 0 -14 11 -17 75 -17 56 0 75 3
  75 13 0 12 25 489 46 885 l6 122 -70 0 c-39 0 -73 -4 -76 -9z"
        />
        <path
          d="M7406 4248 c-3 -24 -15 -236 -26 -473 -11 -236 -21 -448 -22 -470
  l-3 -40 75 0 75 0 12 240 c7 132 19 359 27 505 8 146 12 268 9 273 -2 4 -35 7
  -73 7 l-69 0 -5 -42z"
        />
        <path
          d="M7600 4258 c0 -18 -11 -247 -25 -508 -14 -261 -21 -477 -17 -481 4
  -4 37 -5 74 -2 l67 6 5 71 c8 95 46 850 46 904 l0 42 -75 0 -75 0 0 -32z"
        />
      </g>
    </svg>
  );
};

export default Cars;

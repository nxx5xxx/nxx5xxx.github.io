readme.md
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>포트폴리오 - 떼루아 와인아울렛</title>
    <!-- 검색엔진최적화(Serach Engine Optimization) : SEO(쎄오) -->
    <!-- 주제 -->
    <meta name="subject" content="떼루아 와인아울렛 벤치마킹 사이트">
    <!-- 검색어 -->
    <meta name="keywords" content="떼루아, 떼루아와인아울렛, 와인아울렛, 떼루아 와인아울렛,와인,술,맛집">
    <!-- 설명 -->
    <meta name="description" content="떼루아 와인아울렛은 와인을 저렴하게 구매할수 있습니다">
    <!-- 만든이 -->
    <meta name="author" content="nxx5xxx">
    <!-- 파비콘(인터넷에서 좌측 상단에 뜨는아이콘) png나 ico파일(절대주소) -->
    <!-- 핸드폰에서는 북마크아이콘이됨 (favi con) -->
    <link rel="shortcut icon" href=".\img\teruwaico.png">
    <!-- 오픈그래프 : 특정 url을 넣으면 그사이트에대한 정보(ex카카오톡 내에서 url넣을때 ) -->
    <meta name="og:site_name" content="사이트이름">
    <meta name="og:title" content="포트폴리오 - 떼루아와인아울렛">
    <meta name="og:description" content="떼루아 와인아울렛은 와인을 저렴하게 구매할수 있습니다">
    <meta name="og:url" content="https://nxx5xxx.github.io/web1">
    <meta name="og:image" content=".\img\sum1">
    <!-- 스타일 초기화 -->
    <!-- reset css cdn , normalize css cdn  -->
    <!-- 브라우저에 관계없이 통일되게 스타일을 뿌려줌 -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" rel="stylesheet">
    <!-- 기본폰트 -->
    <!-- WINDOW 폰트타입 TTF , MAC 폰트타입 OTF -지금은 둘다 혼용가능함 -->
    <!-- 윈도우 폰트위치 - c:\WINDOWS\FONTS - 응용프로그램용 폰트(사이즈가큼) - dafont에서 제공함 -->
    <!-- 웹용폰트가 사이즈가 작아서 그것을쓰는게 나음 : woff(Mac에서 개발),eot(microsoft)에서 개발) -->
    <!-- TTF는 표시를 점을 찍어서 그림 , OTF는 크기에따라 외곽을 생성하는 스타일이라 OTF가 깨끗함 -->
    <!-- cdn 구글웹폰트에서 갖고올것(한글만 취급하는 사이트는 눈누라는 사이트도있음)-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">    
    <style>
        * { margin: 0;padding: 0;}
        /*  margin : 테두리 바깥여백 , padding : 안여백
            margin : 10px 20px; 상하 10px 좌우 20px 
            margin : 10px 20px 30px 40px 상 10 우 20 하 30 좌 40 */
        /*  ex 크기가 400px박스(블록방식의태그) 를 좌/우 가운데로배치 
            width : 400px margin:10px auto;(상하 10px 좌우자동으로 가운데)     */
        /*  padding도 이와같은방식 
            세부속성 - margin-(top,bottom,left,right) : 상하좌우를 각 각 지정하는 속성
            반드시 통합속성과 세부속성을 같이 쓴다면, 통합속성부터 지정한후 세부속성
        */
        body{width: 100%; font-family: 'Noto Sans KR', sans-serif;}
        /* cursive는 2차폰트(알터네이트 텍스트 - 대체텍스트) */
        /* font-family:'1차폰트명'(띄어쓰기가 되어있으면 ''또는""해야함) ,2차폰트명,3차폰트명4~5~;}  */
        /* 3차폰트부터는 기본폰트를 적용함 (브라우저에서 기본적으로 제공하는폰트) */
        /* sans-serif(고딕계열), serif(명조계열), cursive(궁서), monospace(가로세로1:1비율폰트), fantasy(심볼기호) */
        ul{ list-style: none;}
        /* 목록기호 */
        a {text-decoration: none;}
        /* a태그(링크태그) 의 밑줄을 none값으로 바꿈 */
        img {border: none;}
        /* 익스플로어에서 이미지는 테두리 선이 생기는데 그것을 미연에 방지 */
        /* *~img 이 5가지는 자주쓰이는것이라 중요 */
        .box {margin: 10px; margin-top: 30px;}
        /* 위만 30 나머지는 10px씩*/
        .np{font-family: 'Noto Sans KR', sans-serif;}
        <!-- 바디영역에 들어가는것 -->
        .container {clear:both; width:100%;}
        /* hd=헤더 */
        .hd { clear:both; width: 100%}
        .tnb {clear : both; width: 100%; background-color: palevioletred; height: 35px;}
        .tnb_wrap {clear : both ; width:1280px ;margin: 0 auto ;height:20px}
        /* .left_tnb {float:left}
        .left_tnb li {float:left ; line-height: 30px;}
        .left_tnb li:first-child::after {content: "|"; color: #fff;margin-right: auto;}
        .left_tnb li a {margin: 20px;} */
        .right_tnb {float:right}
        .right_tnb li {float:left; line-height: 30px;}
        .right_tnb li a {margin: 20px;}
        .tnb ul li a { color: #fff; font-size: 0.9em;}
        /* .tnb ul li a:hover {color:red} */
        .right_tnb li a {background-size: auto; background-position: center center;}
        .right_tnb li a.sns1{background-image: url("./img/search.png");}
        .right_tnb li a.sns1:hover{background-image: url("./img/search_on.png");}
        .gnb {clear : both; width: 100%; height:120px; background-color: #fff; 
            border-bottom: 1px solid #333;}

    </style>
</head>
<body>
    <h1>떼루아 와인아울렛</h1>
    <a href="https://nxx5xxx.github.io">메인 - https://nxx5xxx.github.io</a>
    <!-- div.container>header.hd+div.content+footer.ft -->
        <div class="container">
        <header class="hd">
            <!-- nav.tnb>+nav.gnb -->
            <nav class="tnb">
                <!-- div.tnb_wrap -->
                <div class="tnb_wrap">
                <!-- ul.left_tnb>li*2>a{상단}
                    ul.right_tnb>li*3>a.sns$
                    <ul class="left_tnb">
                        <li><a href="">상단</a></li>
                        <li><a href="">상단</a></li>
                    </ul> -->
                    <ul class="right_tnb">
                        <li><a href="" class="sns1"></a></li>
                        <li><a href="" class="sns2"></a></li>
                        <li><a href="" class="sns3"></a></li>
                    </ul>
                </div>
            </nav>
            <nav class="gnb">
                <div class="gnb_wrap">
                </div>
            </nav>
        </header>
        <div class="content">
        </div>
        <footer class="ft">
        </footer>
    </div>
    <div class="fix_area">
    </div>


</body>
</html>

### CSS 테두리
-통합속성
border : 상/우/하/좌 의 테두리의 두께, 선모양, 선색 등을 지정
-border : 선두께, 선모양, 선색; (x-y : 세부속성)
-세부속성
border-left : 왼쪽테두리의 두께, 선모양, 선 색 등을 지정
      -right
      -top
      -bottom
      -width : 상/우/하/좌의 선 두께를 지정 (하나만 넣으면 다 4개 넣으면 저 순서대로)
      -width : 상하선두께 , 좌우선두께
border-style : solid(실설) , hidden(선없음), dashed(사각선), dotted(둥근점선), double, edge,,,, 선모양지정
      -style : 선모양 (하나만쓰면 4면이다  , 4개넣으면 상우하좌의 순서대로 들어감)
      -style : 상하선모양, 좌우선모양
border colie : 보더콜리
border-color : 색상16진코드(#~), 컬러명, rgb(), hsl();
-세세속성 []는 생략가능 |는 or 이중에 하나만 쓸수있다라는뜻
border-[left|right|top|bottom]-[width|style|color]
-마지막에 쓰는 속성으로 적용됨
-주의사항 : 기입시순서는 통합>세부>세세 순으로 기입해야 속성이 뒤죽박죽이안된다

### Css박스크기 계산방법 - 박스관련 속성
box-sizing | content-box | padding-box | border-box 보더박스가 제일 많이쓰임
설정하지 않는경우 content-box가 기본설정, 그밖에 border-box를 사용
content-box 크기 : 크기+패딩+보더+마진 (=크기+안쪽여백+선두께+바깥여백)
border-box 크기 : 크기+마진 (=크기+바깥여백)

ex) 선택자 { width:200px; height:300px;padding:10px; border:20px solid black; margin:40px}
위박스(설정안했으니 content-box임)의 적용크기 
    폭: 340 (200+(10*2)+(20*2)+(40*2))
    높이 : 300+20+40+80 = 440
선택자 { width:200px; height:300px;padding:10px; border:20px solid black; margin:40px; box-sizing:border-box;}
    보더박스 옵션을 넣으면 width안에 border와 padding을 200px안으로 밀어넣는다 , 높이도 마찬가지
    적용크기
    폭 : 200+(40*2)=280
    높이 : 300+80=380
    margin을 빼버리면 딱 달라붙게 설정이가능

### 배치 속성

### 위치 속성
position : static(정적) | relative | absolute | fixed
- static : 정적, 기본값으로 별도의 position 속성을 지정하지 않아도 static으로 됨
- relative : 상대적인 위치로 설정시에 필요하며, 위치 좌표를 부모 기준으로 정할 경우 활용
- 팁. left , top속성으로 주면 나중에 햇갈리니 ,margin을 이용하자
- absolute : 절대값을 이용하여 상단좌측 기준으로 x,y좌표를 0,0으로 잡고 사용됨 (그러므로 크기가 안맞을경우 겹칠수있음)
    -위치값은 auto , px, %로 지정가능
    left : 왼쪽 기준으로 부터의 위치
    right : 오른쪽 기준으로 부터의 위치
    top : 위쪽 기준
    bottom : 아래쪽 기준
    ※ x좌표 위치는 좌/우 중 하나만 기술하고, y좌표도 상,하 중 하나만 기술해야함
    -혹여나 top을 사용하다가 부득이하게 bottom좌표를 써야할 경우엔 top에 auto값을 걸어주면 된다

- fixed : 화면에 고정된 위치를 설정할 때 필요하며, 스크롤시 fixed된 요소는 스크롤되지않고 화면에 따라감.
- 팁 . static이나 relative일 경우는 margin으로 떨어진 거리를 지정하는게 좋다.
- 팁2. absolute ,fixed 일 경우 left/right, top/bottom으로 위치를 설정

### 레이어 속성
z-index : position이 absolute이거나 fixed일경우 겹쳤을때 순서(레이어)를 지정해주는것
숫자 정수로만 지정하며 숫자 큰것이 우선(맨앞)이 된다.

### 흐름(부동) 속성
float : left | right | both | none
float:left 왼쪽부터 쌓여라
- position이 static이 relative일 경우에 가능한 배치 흐름 속성
- float속성을 주고 margin left를 주면 각각의거리를 떨어뜨려줘도 되지않아서 활용적이다
-팁. ul li도 블록방식태그 메뉴를 가로로 해주기위해 ul li를 많이 쓴다

### 흐름 해제 속성
clear : left | right | both | none
- float 설정이 된 박스의 흐름 해제, float이 left로 설정되면 clear도 left로 써서 해제
left, right 모두해제시에는 both를 사용

## CS 가시 속성

### 출력속성
display : inline | block | inline-block | none
- 모든 태그 요소는 inline 또는 block이거나 inline-block 요소이다.
- inline : 위/아래 마진이나 패딩 설정이 불가능하고, img나 video등을 제외한
           input, a ,span, strong, em등은 크기지정이 불가능한 인라인 요소이다.
           블록요소를 인라인 요소로 변경시에 활용
- block : h, p, ul, ol, dl, li, dt, dd, div, section, ... 등은 대부분 크기지정이 가능한 블록요소.
          인라인요소를 블록요소로 변경시에 활용
- inline-block : 한 줄 안에 배치도 가능하고, 위/아래 마진/패딩 적용 가능, 크기 지정한 가시속성
- none : opacity와 visibility-hidden이랑 다르게 자리차지를 안함 (출력자체를 안함)
         =애니메이션 불가(서서히나타나기 불가 출력자체를 안해서)

### 불투명도 속성
opacity : 0~1의 정수 또는 실수를 사용하여 지정 (0 : 투명 ~ 1 : 불투명)
          애니메이션 가능 (서서히나타나기)

### 가시 속성
visibility : visible | hidden
- visible : 보이기
- hidden : 숨기기
- display : none과 달리 hidden을 하면, 안보이는 것 뿐이지 그 자리를 차지하고 있음.

### 넘침 속성
overflow : hidden | scroll | auto | visible(기본속성-보이기)
    hidden : 흘러 넘치는 부분을 숨김
    scroll : 콘텐츠의 사이즈가 더 크건 작건 무조건생김
    auto : 콘텐츠의 사이즈가 더 클때만 스크롤이 생김
    visible : 기본값으로 더 커도 콘텐츠를 모두 표시.

<!-- 세트로된 아이콘 : 스플릿아이콘 -->
용량이 절약된다.


margin: 0 auto (가운데로 몰림)
-크기가 없으면 가운데로 못옴
line-height(블록요소밖에 적용못함)
hover : 마우스 올렸을때
first-child::after
nth-child::after
display:block; -블록방식
글자들여쓰기 text-indent :9999px; 해도보일경우 overflow:hidden; -이상으로 흘러넘칠경우 숨겨라 ; bg-img: url(./img/search.png)

배경위치 옮기기 : background-position: -135px -134px ; (왼쪽으로 135픽셀 떙기고 아래로 134픽셀 땡김)

배경사이즈 줄이기 bg-size: 50% (만일 이것을 할경우 a태그의 사이즈가 줄어듬)
bg-size : px px (가로 세로)


<!-- 0322 -->
.main {clear : both; width: 100%; height:120px; background-color: #fff; }
.main_wrap { width : 1400px margin :0 auto}

.logo { display : block ; width : 100px; height: auto}
-> .logo { display : block ; width : 100px; height: 38px overflow:hidden;}
.logo img{ display:block; width:100% height:auto}
height가 오토면 width를 줄이면 height는 알아서 줄어든다

.gnb{float:left;}

<!--  -->
//width : 800px margin : 0 auto ; 할경우 float속성에 의해 가운데오기불가
방법1-> .gnb > ul(fr) { position: absolute; top:40px left:50%; width:800px; margin-left:-400;}
//위치는 absolte - 절대값 위에서 왼쪽에서 50%인곳위치 (가운데) 너비800주고 왼쪽으로 400만큼 땡긴다

방법2-> .logo { display : block ; width : 100px; height: 38px overflow:hidden; position:absoulte; top:40px; left: 0;}
.sitemap_btn{ display : block; position:absolute; top:0; right:0 sursor:pointer;}
//앱솔루트의 기준점은 0,0이지만 릴리티브로 걸면 부모태그의 위치를 기준점으로 잡힌다
->.main_wrap { width : 1400px margin :0 auto; position:relative}
->.gnb{position : relative또는 static}
.gnb > ul { width:800px; height:48px; border:1px solid #333; margin: 0 auto}

즉 좌 우 를 플롯주고 가운데를 앱솔루트 주거나
양쪽을 앱솔루트걸고 가운데 올것을 릴리티브를 걸기
<!--  -->

.gnb > ul > li {float:left}

.sitemap_btn{ display : block; float:right; cursor:pointer;}
.sitemap {position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:999;
bgolor: deeppink;display:none;}

/* vh : 기계값에따라 100vh는 위아래꽉참 100vw는 좌우꽉참 */
#sitemap_ck:checked ~ .sitemap  { display : block}
사이트맵ck가 체크되면 .sitemap의 디스플레이방식을 블록으로 출력한다
#sitemap_ck { display:none }
체크박스를 안보이게함

float 은 형제끼리의 배치.
ex ul>li*5>a 일경우 li에 float을 걸어야함

포지션을 지정하면 스태틱
플롯 클리어 마진

<!-- 0323 -->
메뉴바
 .sitemap_btn {display: block; position: absolute; cursor:pointer; top: 0px; right:0px; witdh: 20px height: 20px overflow:hidden; text-indent:-9999px
 bg-img:url("메뉴"); bg-size : 20px 40px; bg-position:center -20px}

 아울렛 소개 공지사항 한정수량 초특가 이달의 특가 이달의 와인 고객지원

.gnb {position:relative; margin-top:10px}
.gnb > ul {width: 500px; height: 48px; margin: 0 auto;}
.gnb > ul > li {float:left; width:20%; text-align:center; line-height:50px}
 .gnb > ul > li > a{font-size 1.3em; color: #333}
 .gnb > ul > li:hover > a {boder-bottom:2px solid 색상; color: 색상;}

 div.sub>ul.dp>li*4>a{회사소개}

 .sub { display : none; padding-top:20px; width: 1000px;}
.gnb>ul>li:hover > .sub{display:block}
와인아울렛 소개
아울렛 매장 구경하기
아울렛 찾아오시는 길
figure.vs>div.img_box>video[src="movie" muted autoplay]

.sub.item2{ mgargin-left:-240px;}
.sub.item3{margin-left: -320px;}
.sub.item4{margin-left: -480px;}
.sub.item5{margin-left: -640px;}
.sub > ul > li {float:left; width: 25%;}
.sub > ul >li >a {display : block ; color: #333; font-size:1.1em ;font-weight:500; }
.sub > ul > li:hover > a {color:}

<!-- 0329 -->

        <div class="content">
            <figure class="vs">
                <div class="img_box">
                    <video src="./movie/main.mp4" muted autoplay loop></video>
                </div>
            </figure>
        </div>

 /* 0329 */
        .vs{clear:both; position: relative; width: 100vw height:calc(100vh-135px); overflow:hidden;}
        .vs video {display:block; width: 100%;}
        <!--  -->

<!-- 0330 -->

            </figure>화면을 하나씩 .page class #page id //페이징이라함
            section.page#page$*3//페이지5개라>h2.page_title{페이지제목$}+div.page_wrap
            <section class="page" id="page1">
                <h2 class="page_title">페이지제목1</h2>
                <div class="page_wrap"></div>
            </section>
            <section class="page" id="page2">
                <h2 class="page_title">페이지제목2</h2>
                <div class="page_wrap"></div>
            </section>
            <section class="page" id="page3">
                <h2 class="page_title">페이지제목3</h2>
                <div class="page_wrap"></div>
            </section>
        </div>

        v는 디바이스의 v
        .page { clear:both; position:relative; width: 100vw; height:100vh}
        .page_wrap{ clear: borh; width:1400px//페이지위에값과 같이 ; margin: 0 auto; border: 1px solid #333//영역표시}
        .page_title{text-align : center;}
        #page1 { bgcolor }
        ~
        #page3
        </style>

        스크롤바 우마 검사
        html에 오버플로우

        overflow-x:hidden;
        body{width: 100%; font-family: 'Noto Sans KR', sans-serif;}
        -->
        body,html{width: 100%; font-family: 'Noto Sans KR', sans-serif; overflow-x: hidden;}

        pagewrap
        page_title{ font-size : px; padding-top: //가급적이면 배수로 1em;}
        1em은 글자사이즈의 100%

<!-- 0418 -->

푸터 슬라이더박스
            </figure>
            <section class="page" id="page1">
                <h2 class="page_title" style="visibility:hidden;">페이지제목</h2>
                <div class="page_wrap">
                    input[type=radio][name=pg_ra]#pg1_ra$*6.pg1_ra
                    <input type="radio" name="pg_ra" id="pg1_ra1" class="pg1_ra">
                    <input type="radio" name="pg_ra" id="pg1_ra2" class="pg1_ra">
                    <input type="radio" name="pg_ra" id="pg1_ra3" class="pg1_ra">
                    <input type="radio" name="pg_ra" id="pg1_ra4" class="pg1_ra">
                    <input type="radio" name="pg_ra" id="pg1_ra5" class="pg1_ra">
                    <input type="radio" name="pg_ra" id="pg1_ra6" class="pg1_ra">
                    <div class ="tit_box">
                    h3.sub_title{BUSINESS}+h2.main_title{SOLUTION}
                        <h3 class="sub_title">BUSINESS</h3>
                        <h2 class="main_title">SOLUTION</h2>
                        article>label[for=pg_ra$]{CJ프레시웨이}*6
                        <article class="pg1_btn_box">
                            <label for="pg_ra1" class="item1">CJ프레시웨이</label> 
                            <!-- 라디오버튼의 id를갖고 라벨의for가 적용된다 -->
                            <label for="pg_ra2" class="item2">식자재</label>
                            <label for="pg_ra3" class="item3">푸드</label>
                            <label for="pg_ra4" class="item4">상품구매</label>
                            <label for="pg_ra5" class="item5">~~</label>
                            <label for="pg_ra6" class="item6">~~~~</label>
                        </article>
                    </div>
            <!--  -->
                </div>
            </section>
            <section class="page" id="page2">
                <h2 class="page_title"><a>REAL REAVIEW</a></h2>
                <div class="page_wrap"></div>
            </section>
            <section class="page" id="page3">
                <h2 class="page_title">페이지제목3</h2>
                <div class="page_wrap"></div>
            </section>

        #page1 {background-color: #fff; color: black;}
        <!--  -->
        #page1 .sub_title {font-size:28px color:orange; font-weight: 100;}
        #page1 .main_title { font-size:48px color:black; font-weight: 700;}
        #page1 .pg1_btn_box { float:right; }
        #page1 .pg1_btn_box label { display : block; padding:0.8em; falot:left;
        border:1px solid #e1e1e1; border-radius:36px; margin:0.5rem; color:#999; cursor:pointer}
        <!-- border-radius는 모서리둥굴게 -->
        #page1 .pg1_btn_box label:hover { color : #fff ;bgcolor : #123456;}
        <!-- 인풋 pg1_ra1이 체크가 되면 -->
        #pg1_ra1 : checked ~ .tit_box .pg1_btn_box .item1 { color: #fff; background-color: #075d46}
        6번까지

        .ban_fr { clear:both; width}    
        .ban_fr .ban_box {width:600%}

        #page2 {background-color: white; color: black;}
        #page3 {background-color: #f4f4f4; color: black;}

(input[type=radio][name=pg_ra]#pg1_ra$.pg1_ra+label[for=pg1_ra$].item$)*6


div.ban_fr>ul.ban_box>li.item$>img.pic+(div.ban_tit_box>h2.ban_tit1+h2.ban_tit2+p.ban_com)

가상선택자는 content:"" 를 반드시 넣어야한다

white-space : nowrap; 한줄로표시
white-space : nowrap; overflow: hidden;text-overflow: ellispsis ; 크기를넘어가면 텍스트는 ,,,을표시

a태그는 인라인방식태그
인라인방식태그는 자식을 가질수없음
그래서 a태그를 블록방식으로 바꿔줘야함

padding-right:36px

박스사이징 : 내가 지정한 크기에 모두다 들어올수 있도록함(마진빼고)

가상선택자는(befor) 기본으로 인라인방식이라
디스플레이 블록으로 블로방식으로 바꿔줘야하며
content값을 넣어줘야함

레포에다가 마진 0

푸터는
1. 푸터네비, 우측 셀렉트탭
(nav.fnb>ul.fnb_box>li*5>a{메뉴$})+

(select.favorite>option{사이트$}*6)

2. 글자, 우측 메인메뉴


3. 왼쪽로고(a태그) 오른쪽 카피라이트

이중클래스 거는법
class="클래스명1 클래스명2"
띄어쓰기로 나눔

address태그때문에 글씨가 늬어지면
font-style : normal로 제대로 해줄 수 있다

셀렉트
<스크립트>
function favo(s){ --id가 favo
    var hs = s.value;
    if(hs!=""){ --
        window.open(hs,"팝업");
    }
}
</스크립트>

fix_area --우측에 따라다니는거
position을 fixed로 주고 z-index를 9999로 주면
항상위에 뿌려짐
bgcolor rgba로 255,255,255,0.75로 하면 불투명도가 들어감

컬러질라에서 CMYK코드를 RGB코드로 바꿔준다

모듈화
.css파일로저장

외부스타일일 경우 @charset "UTF-8"; 를 반드시 첫머리에 넣어줘야함
헤더하고 푸터의 스타일을 잘내기하여
오려온 스타일을 붙여넣기한다
link태그에 의해 불러온다
<link rel="stylesheet" href="모듈이름.css">
를 넣으면 바로 적용됨



<a href="sub1.html#page1">
<a href="sub1.html#page2">
<a href="sub1.html#page3">

이렇게 하면 <section class="page" id="page1">
#page1은 아이디가 있는곳을 의미한다
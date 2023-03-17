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
    </style>
</head>
<body>
    <h1>떼루아 와인아울렛</h1>
    <a href="https://nxx5xxx.github.io">메인 - https://nxx5xxx.github.io</a>
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
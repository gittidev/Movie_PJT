# SSAFY_영화추천서비스_관통pjt
 2024_05_16 ~2024_05_23

## 0. 서비스명
### Marsh Movie
- 서비스 설명
    - 쉬는 시간(Snack Time)에 간편하게 영화 추천을 받을 수 있는 서비스입니다.
- 컨셉
    - 마쉬멜로의 마쉬(Marsh)와 영화(Movie)의 합성어
    - 캠핑장에 온 캠퍼(Camper)가 모닥불에 둘러 앉아 이야기를 나누는 컨셉(Potluck)

## 1.팀원 정보 및 업무 분담 내역
- 박보람 [ FRONT ] (Front: 80% / Back: 20%)
    - CSS, Bootstrap4, Vue.js
    - TMDB api를 활용한 영화 정보 조회 및 검색
    - 커뮤니티 CRUD 기능 구현
    - 리뷰 추천(핫 리뷰) 기능 구현

- 박동민 [ BACK ] (Front: 20% / Back: 80%)
    - Django API Server, API를 활용한 Data Seeding(DB) 구현
    - 유저 정보 관리 기능 구현(회원가입/탈퇴, 로그인/로그아웃, 프로필 페이지)
    - 커뮤니티 CRUD 기능 구현
    - 랜덤 영화 추천 기능, 챗봇(GPT)에게 영화 추천받는 기능 구현
    - 그 외 Backend 관련 작업

  
## 2. 기획의도 및 목표
- 영화 정보를 조회할 수 있다.
    - TMDB 데이터와 API를 기반으로 오늘의 영화를 조회할 수 있다.
    - TMDB 데이터와 API를 기반으로 고전 명작을 추천받을 수 있다.
    - 자체 데이터베이스를 활용하여 장르별 영화를 추천받을 수 있다.
- 영화 정보를 검색할 수 있다.
    - TMDB API기반으로 영화 정보를 검색할 수 있다.
- 커뮤니티 기능을 이용할 수 있다.
    - 본인이 좋아요한 목록을 바탕으로 Pot이라는 커뮤니티 글을 게시할 수 있다.
    - 게시글 생성 후 똑같은 영화를 좋아요한 유저들끼리 댓글을 통해 소통할 수 있다.
    - 생성만 가능하고, 댓글 수정은 할 수 없다.(한 번 뱉은 말은 다시 담을 수 없음에서 착안)
    - 커뮤니티 글에 좋아요와 싫어요를 할 수 있다.(본인이 체크한 결과 확인 가능)
- 추천 기능
    - 베스트리뷰 추천(핫 리뷰)
        - 생성된 커뮤니티 중 좋아요를 가장 많이 받은 순서대로 영화를 추천한다.
    - 랜덤 추천
        - DB의 크기를 계산 후 해당 범위 내에서 숫자 1개를 랜덤으로 추출하여 그 숫자를 기반으로 영화를 추천한다.
    - 챗봇 추천
        - 장르, 나이, 성별, 오늘의 기분을 입력하여 챗봇에게 영화를 추천받는다.
-
-

## 3. 개발환경
- Python
    - Python 3.6.7
    - django 2.1.8
- Javscript
    - ECMA5 +
    - Vue.js
      -라이브러리 :  
- Database
    - sqlite3
   

## 4. 개요
- 본 서비스는 TMDB API를 활용하여 데이터를 수집, 가공하여 데이터 베이스에 저장하였다.
- 웹서비스를 위주로 반응형 웹은 고려하지 않았으며, 최신 UI 기술 도입에 초점을 두었다.
- Django REST Framework를 활용하여 URL 렌더링 및 기본 템플릿을 사용하였으며 메인 기능은 하나의 페이지에서 Vue.js 를 사용, SPA 유사하게 구현하였다.
- 영화 추천의 경우 주어진 영화와 비슷한 영화를 추천하는 방식으로 설계되었다

- DB ERD


- Components

- 요구사항 명세


- 프로젝트 구조
   <details>
       <summary>코드 확인</summary>
       <div markdown>

         // 수정 전
         def filter_genre(request):
         genre = request.GET.get('genre')
         movies = list(Movie.objects.filter(genres_id=genre).values())
         context = {
             'movies': movies,
         }
         return JsonResponse(context)
   
         // 수정 후
         def filter_genre(request):
         genre = request.GET.get('genre')
         movies = list(Movie.objects.filter(genres__id=genre).values())
         context = {
             'movies': movies,
         }
         return JsonResponse(context)
   </detail>


-

## 영화 추천 기능(기능 상세 설명)
- 
- 
- 
- 
: json viewer를 활용할것
##### 2.이중 for문에서 List 초기화 하기
: for문을 기준으로 어느 부분에서 list와 dictionary를 초기화해야할지 감이 잡히지 않았다.

## 배운점 및 느낀점






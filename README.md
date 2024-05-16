# SSAFY_영화추천서비스_관통pjt
 2024_05_16 ~2024_05_23



## 1.팀원 정보 및 업무 분담 내역
- 박보람 [ FRONT ] 
    - CSS, Bootstrap4, Vue.js
- 박동민 [ BACK ] 
    - Django API Server, API를 활용한 Data Seeding 구현

  
## 2. 기획의도 및 목표
-
-
-
-
-
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


- 프로젝트 구성
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
    </div>
</detail>




## 영화 추천 기능
- 
- 
- 
- 
: json viewer를 활용할것
##### 2.이중 for문에서 List 초기화 하기
: for문을 기준으로 어느 부분에서 list와 dictionary를 초기화해야할지 감이 잡히지 않았다.

## 배운점 및 느낀점






# Movie_PJT
영화관통pjt

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

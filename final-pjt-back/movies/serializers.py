from rest_framework import serializers
from .models import Community, Movie


# 영화 전체 정보 가져오기
class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

# 생성된 커뮤니티 전체 목록 가져오기
class CommunityListSerializer(serializers.ModelSerializer):
    movie_title = serializers.CharField(source='movie.title', read_only=True)
    movie_poster = serializers.SerializerMethodField()

    class Meta:
        model = Community
        fields = '__all__'

    def get_movie_poster(self, obj):
        base_url = "https://image.tmdb.org/t/p/w500"
        poster_path = obj.movie.poster_path
        return f"{base_url}{poster_path}"


class CommunitySerializer(serializers.ModelSerializer):
    movie_title = serializers.CharField(source='movie.title', read_only=True)
    class Meta:
        model = Community
        fields = '__all__'



class CommunityCreateSerializer(serializers.ModelSerializer):
    movie_title = serializers.CharField(source='movie.title', read_only=True)
    class Meta:
        model = Community
        exclude = ['like_users']
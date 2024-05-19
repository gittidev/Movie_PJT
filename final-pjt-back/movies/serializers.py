from rest_framework import serializers
from .models import Community, Movie


class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = '__all__'


class CommunityListSerializer(serializers.ModelSerializer):
    movie_title = serializers.CharField(source='movie.title', read_only=True)
    movie_poster = serializers.CharField()

    class Meta:
        model = Community
        fields = '__all__'

    def get_movie_poster(self, obj):
        base_url = "https://image.tmdb.org/t/p/w500"
        poster_path = obj.movie.poster_path
        return f"{base_url}{poster_path}"


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = '__all__'

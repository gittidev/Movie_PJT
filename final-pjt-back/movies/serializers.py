from rest_framework import serializers
from .models import Community, Movie


class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'


class CommunityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ('id', 'title')


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = '__all__'

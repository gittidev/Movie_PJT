from rest_framework import serializers
from .models import Community


class CommunityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = ('id', 'title')


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = '__all__'

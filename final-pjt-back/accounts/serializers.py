# accounts/serializers.py
from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model
from .models import User

User = get_user_model()

class CustomUserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = '__all__'


class CustomRegisterSerializer(RegisterSerializer):
# 필요한 필드들을 추가합니다.
        email = serializers.EmailField(required=False, allow_blank=True)
        nickname = serializers.CharField(
        required=False,
        allow_blank=True,
        max_length=50
        )
        def get_cleaned_data(self):
            return {
                'username': self.validated_data.get('username', ''),
                'password1': self.validated_data.get('password1', ''),
                # 필드 추가
                'email': self.validated_data.get('email', ''),
                'nickname': self.validated_data.get('nickname', ''),
            }

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'nickname', 'profile_image')
    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None
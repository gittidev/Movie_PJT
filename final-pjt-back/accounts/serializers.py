# accounts/serializers.py
from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import User

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

# from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404, get_list_or_404
from accounts.serializers import CustomUserSerializer

from rest_framework.views import APIView
from django.contrib.auth import get_user_model


# 회원 탈퇴 기능(final_pjt의 urls.py와 연동)
User = get_user_model()

# 회원삭제 기능
class UserDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        user = request.user
        user.delete()
        return Response({"detail": "User account deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
    
    
# 사용자 상태 관리를 위한, 로그인여부, 사용자 정보 전달용 함수
@api_view(['GET'])
def CustomUserDetailView(request):
    user = request.user
    if user.is_authenticated:
        serializer = CustomUserSerializer(user)
        return Response(serializer.data)
    else:
        return Response({"error": "권한이 없습니다"}, status=401)

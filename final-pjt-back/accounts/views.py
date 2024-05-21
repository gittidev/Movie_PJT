# from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404, get_list_or_404
from accounts.serializers import CustomUserSerializer, UserProfileSerializer

from rest_framework.views import APIView
from django.contrib.auth import get_user_model

#  추가로 필요한 기능, 회원정보 수정, 회원 비밀번호 변경


# 회원 탈퇴 기능(final_pjt의 urls.py와 연동)
User = get_user_model()

# 회원삭제 기능
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_user(request):
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

#  프로필 유저 정보 전달하기
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile_detail(request, user_pk):
    profileuser = User.objects.get(pk=user_pk)
    if request.user.is_authenticated:
        serializer = CustomUserSerializer(profileuser)
        return Response(serializer.data)
    else:
        return Response({"error": "권한이 없습니다"}, status=401)

# 유저 프로필 정보 수정
# PUT = 전체 객체 전달하는 방식
# PATCH = 일부 객체만 전달하여 수정하는 방식
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    user = request.user
    serializer = UserProfileSerializer(user, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
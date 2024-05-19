from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import CommunityListSerializer, CommunitySerializer, MovieListSerializer
from .models import Community, Movie

from rest_framework.views import APIView
from django.contrib.auth import get_user_model

# 영화목록 가져오기/로그인 하지 않아도 가져올수 있음
@api_view(['GET'])
def movies_list(request):
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)

# 커뮤니티 목록 가져오기
@api_view(['GET', 'POST'])
def community_list(request):
    if request.method == 'GET':
        communities = Community.objects.all()
        serializer = CommunityListSerializer(communities, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        if not request.user.is_authenticated:
            return Response({'detail': 'Authentication credentials were not provided.'}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = CommunitySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def community_detail(request, community_pk):
    community = get_object_or_404(Community, pk=community_pk)

    if request.method == 'GET':
        serializer = CommunitySerializer(community)
        print(serializer.data)
        return Response(serializer.data)



# 영화별 좋아요 기능 추가
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def movie_likes(request, movie_pk):
    movie = Movie.objects.get(pk=movie_pk)
    if request.user in movie.like_users.all():
        movie.like_users.remove(request.user)
        liked = False
    else:
        movie.like_users.add(request.user)
        liked = True
    return Response({'liked': liked, 'likes_count': movie.like_users.count()}, status=status.HTTP_200_OK)

# 회원 탈퇴 기능(final_pjt의 urls.py와 연동)
User = get_user_model()

class UserDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        user = request.user
        user.delete()
        return Response({"detail": "User account deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
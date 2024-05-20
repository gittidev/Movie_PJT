# from rest_framework import viewsets
import random
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import CommunityListSerializer, CommunitySerializer, CommunityCreateSerializer, MovieListSerializer, MovieCreateSerializer
from .models import Community, Movie

from rest_framework.views import APIView
from django.contrib.auth import get_user_model

User = get_user_model()

# 영화목록 가져오기/로그인 하지 않아도 가져올수 있음
@api_view(['GET'])
def movies_list(request):
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


# 커뮤니티 목록 가져오기
@api_view(['GET'])
def community_list(request):
    if request.method == 'GET':
        communities = Community.objects.all()
        serializer = CommunityListSerializer(communities, many=True)
        return Response(serializer.data)


# 커뮤니티 생성하기
@api_view(['POST'])
def create_community(request):
    if request.method == 'POST':
        serializer = CommunityCreateSerializer (data=request.data)
        if not request.user.is_authenticated:
            return Response({'detail': 'Authentication credentials were not provided.'}, status=status.HTTP_401_UNAUTHORIZED)
        
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 커뮤니티 수정 삭제
@api_view(['GET', 'PUT', 'DELETE'])
def community_detail(request, community_pk):
    community = get_object_or_404(Community, pk=community_pk)

    if request.method == 'GET':
        serializer = CommunitySerializer(community)
        print(serializer.data)
        return Response(serializer.data)

    elif request.method == 'PUT':
        if not request.user.is_authenticated:
            return Response({'detail': '자격 증명 인증(Authentication credentials)이(가) 필요합니다.'}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = CommunitySerializer(community, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    elif request.method == 'DELETE':
        if not request.user.is_authenticated:
            return Response({'detail': '자격 증명 인증(Authentication credentials)이(가) 필요합니다.'}, status=status.HTTP_401_UNAUTHORIZED)
        community.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# 영화별 좋아요 기능 추가
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def movie_likes(request, movie_id):
    movie = Movie.objects.get(movie_id=movie_id)
    if request.user in movie.like_users.all():
        movie.like_users.remove(request.user)
        liked = False
    else:
        movie.like_users.add(request.user)
        liked = True
    return Response({'liked': liked, 'likes_count': movie.like_users.count()}, status=status.HTTP_200_OK)


## 좋아요한 영화 가져오기[Pot 생성용 필터링]
@api_view(['GET'])
def get_like_movies(request):
    user = request.user
    if not user.is_authenticated:
        return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)

    my_like_movies = user.like_movies.all()
    if my_like_movies.exists():
        serializer = MovieListSerializer(my_like_movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'No movies found'}, status=status.HTTP_404_NOT_FOUND)

##영화 Detail로 들어갈때 DB에 추가하는 기능
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def db_check(request, movie_id):
    try:
        movie = Movie.objects.get(movie_id=movie_id)
        return Response({'message': 'Movie already exists.'}, status=status.HTTP_200_OK)
    except Movie.DoesNotExist:
        serializer = MovieCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

## 랜덤 영화 추천 기능
@api_view(['GET'])
def random_recommend(request):
    movies = Movie.objects.all()
    if movies.exists():
        random_movie = random.choice(movies)
        response_data = {
            'movie_id': random_movie.movie_id
        }
        return Response(response_data)
    else:
        return Response({'error': 'No movies found'}, status=404)
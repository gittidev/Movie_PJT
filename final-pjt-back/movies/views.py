from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import CommunityListSerializer, CommunitySerializer, MovieListSerializer
from .models import Community, Movie

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




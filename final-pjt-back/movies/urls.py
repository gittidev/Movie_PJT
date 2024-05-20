from django.urls import path
from . import views

urlpatterns = [
    path('communities/', views.community_list),
    path('communities/<int:community_pk>/', views.community_detail),
    path('communities/create/', views.create_community),
    path('movies/', views.movies_list),
    path('movies/likes/', views.get_like_movies),  #좋아요한 영화가져오기
    path('<int:movie_id>/likes/', views.movie_likes),
    path('random_recommend/', views.random_recommend), 
]

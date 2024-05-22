from django.urls import path
from . import views

urlpatterns = [
    path('communities/', views.community_list),
    path('communities/<int:community_pk>/', views.community_detail),
    path('communities/create/', views.create_community), #커뮤니티 생성하기
    path('movies/', views.movies_list),
    path('movies/<int:movie_id>/', views.movie_detail),
    path('movies/likes/', views.get_like_movies),  #좋아요한 영화가져오기
    path('<int:movie_id>/likes/', views.movie_likes),
    path('random_recommend/', views.random_recommend),
    path('db_check/<int:movie_id>/', views.db_check), #DB와 OPEN API 비교하여 영화 정보 저장하기
    path('communities/<int:community_pk>/comments/', views.comment_list),
    path('communities/<int:community_pk>/comments/create/', views.comment_create),
    path('comments/<int:comment_pk>/delete/', views.comment_delete),
    path('<int:community_pk>/likes/', views.community_likes),
    path('<int:community_pk>/dislikes/', views.community_dislikes),
]

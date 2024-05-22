from django.urls import path
from . import views

urlpatterns = [
    path('profile/update/<int:user_pk>/', views.update_profile, name='profile-update'),
    path('change-password/', views.change_password, name='change_password'),
    path('user/liked-movies/', views.user_liked_movies, name='user-liked-movies'),
    path('user/created-communities/', views.user_created_communities, name='user-created-communities'),
]

from django.urls import path
from . import views

urlpatterns = [
    path('communities/', views.community_list),
    path('communities/<int:community_pk>/', views.community_detail),
    path('movies/', views.movies_list),
]

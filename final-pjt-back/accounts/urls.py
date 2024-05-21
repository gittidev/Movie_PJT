from django.urls import path
from .views import update_profile

urlpatterns = [
    path('profile/update/', update_profile, name='profile-update'),
]

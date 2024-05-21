from django.urls import path
from .views import update_profile, change_password

urlpatterns = [
    path('profile/update/', update_profile, name='profile-update'),
    path('change-password/', change_password, name='change_password'),
]

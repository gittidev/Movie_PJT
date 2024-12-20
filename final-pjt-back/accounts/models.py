from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    nickname= models.CharField(max_length=50, default='별명')
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
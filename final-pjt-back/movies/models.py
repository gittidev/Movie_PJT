from django.db import models
from django.conf import settings
from accounts.models import User

# Create your models here.
class Movie(models.Model):
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_movies')
    adult = models.BooleanField()
    movie_id = models.IntegerField()
    backdrop_path = models.TextField()
    genre_ids = models.TextField()
    overview = models.TextField()
    poster_path = models.TextField()
    release_date = models.DateField()
    original_title = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    vote_average = models.FloatField()

class Community(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ManyToManyField(settings.AUTH_USER_MODEL, symmetrical=False, related_name='myCommunity')
    title = models.CharField(max_length=30)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    like_dislike= models.BooleanField(default = True)

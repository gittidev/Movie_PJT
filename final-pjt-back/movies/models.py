from django.db import models
from django.conf import settings
from accounts.models import User

# Create your models here.
class Movie(models.Model):
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_movies')
    adult = models.BooleanField()
    movie_id = models.IntegerField()
    backdrop_path = models.TextField(null=True)
    genre_ids = models.TextField()
    overview = models.TextField(null=True)
    poster_path = models.TextField(null=True)
    release_date = models.TextField(null=True)
    original_title = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    vote_average = models.FloatField(null=True)

class Community(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    create_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_communities')


class Comment(models.Model):
    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    like_dislike= models.BooleanField(default = True)

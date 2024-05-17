from django.db import models
from django.conf import settings

# Create your models here.
class Movie(models.Model):
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
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # posi_naga = models.BooleanField()

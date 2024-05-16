from django.db import models
from django.conf import settings

# Create your models here.
class Movies(models.Model):
    movie_id = models.IntegerField()
    adult = models.BooleanField(default=False)
    backdrop_path = models.TextField()
    genre_ids = models.TextField()
    overview = models.TextField()
    poster_path = models.TextField()
    release_date = models.DateField()
    title = models.CharField(max_length=200)
    vote_average = models.FloatField()

class Communities(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Comments(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    posi_naga = models.BooleanField()

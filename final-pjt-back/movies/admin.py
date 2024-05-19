from django.contrib import admin
from .models import Movie, Community, Comment

# Register your models here.
admin.site.register(Movie)
admin.site.register(Community)
admin.site.register(Comment)

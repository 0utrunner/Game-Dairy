from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('', views.all),
    path('', views.beatup),
    path('', views.fighter),
    path('', views.platformer),
    path('', views.puzzle),
    path('', views.racing),
    path('', views.rpg),
]
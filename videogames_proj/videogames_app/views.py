from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests as HTTP_Client

def home(request):
    homepage = open('static/index.html').read()
    return HttpResponse(homepage) 

def all(request):
    return HttpResponse('All games')

def beatup(request):
    return HttpResponse("Beat 'em Up games")

def fighter(request):
    return HttpResponse('Fighting games')

def platformer(request):
    return HttpResponse('Platformer games')

def puzzle(request):
    return HttpResponse('Puzzle games')

def racing(request):
    return HttpResponse('Racing games')

def rpg(request):
    return HttpResponse('RPG games')
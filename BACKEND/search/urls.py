from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    # path('mypageProfile', views.mypageProfile, name="mypageProfile"),
    # path('mypageGrade/<int:userIdx>', views.mypageGrade, name="mypageGrade"),

    # path('auth/', include('rest_auth.urls')),
    # path('registration', include('rest_auth.registration.urls')),

    path('filtering/apply', views.applyFilterling.as_view()),
    path('filtering/first', views.firstFilterling.as_view()),
    path('search/', views.search.as_view()),

]

from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

     #path('auth/', include('rest_auth.urls')),
     #path('registration', include('rest_auth.registration.urls')),
     
     #[POST]마이페이지-개인정보
     path('mypage/', views.mypageProfileView.as_view()),
     
     #[GET]마이페이지-개인정보
     path('mypage/<int:userIdx>', views.mypageProfileView.as_view()),
     
     #[POST]마이페이지-등급정보
     path('mypage/grade', views.mypageGradeView.as_view()),
     
     #[GET]마이페이지-등급정보
     path('mypage/grade/<int:userIdx>', views.mypageGradeView.as_view()),
     
    path('signup/', views.Signup.as_view()),
     path('login/', views.Login.as_view()),
     path('logout/', views.Logout.as_view()),

]

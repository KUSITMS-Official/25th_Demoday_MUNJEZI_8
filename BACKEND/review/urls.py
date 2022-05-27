from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    #[POST] REVIEW 
    path('reviews/<int:pk>', views.reviewPostView.as_view()),
    
    #[GET] REVIEW GET
    path('review/<int:bookIdx>', views.reviewGetView.as_view()),
    
    #[GET] BOOK GET
    path('books/<int:bookIdx>', views.BookView.as_view()),

    path('<int:pk>', views.test.as_view()),

]
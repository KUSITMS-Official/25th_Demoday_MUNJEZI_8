from django.db import models
from django.contrib.auth.models import User
from search.models import Subject
from search.models import Book
from django.core.validators import MaxValueValidator, MinValueValidator



class Tag(models.Model):
    subject = models.ForeignKey(Subject, on_delete = models.CASCADE, db_column="subject") #공통태그, 국어태그 
    tag = models.CharField(max_length=30)

class Review(models.Model):
    userIdx = models.ForeignKey(User, on_delete = models.CASCADE, db_column="userIdx")
    bookIdx = models.ForeignKey(Book, on_delete = models.CASCADE, db_column="bookIdx")
    level = models.IntegerField() #1=쉬움, 2-보통, 3-어려움
    content = models.TextField()
    img = models.ImageField(blank=True, null=True, upload_to="review") #사진 업로드 있어서 일단 추가해둠
    tagSame = models.TextField() #['dddd','dddd','dddddd']
    tagSub = models.TextField()

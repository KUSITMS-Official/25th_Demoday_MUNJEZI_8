from django.db import models
from django.contrib.auth.models import User

class Subject(models.Model):
    subject = models.CharField(max_length=45)
    sub_subject = models.IntegerField()
    
class Book(models.Model):
    userIdx = models.ForeignKey(User, on_delete = models.CASCADE, db_column="userIdx")
    subjectIdx = models.ForeignKey(Subject, on_delete = models.CASCADE, db_column="subjectIdx")
    title = models.CharField(max_length=50)
    brand = models.IntegerField()
    writer = models.CharField(max_length=50, null=True)
    price = models.IntegerField()
    pageCnt = models.IntegerField()
    questionCnt = models.IntegerField()
    viewCnt = models.IntegerField(default=0)
    reviewCnt = models.IntegerField(default=0)
    questionType = models.IntegerField(default=0)
    level = models.IntegerField(null=True, default=None)
    tagSame = models.CharField(max_length=100, null=True)
    tagSubject = models.CharField(max_length=100, null=True)
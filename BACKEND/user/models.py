from doctest import master
from django.db import models
from django.contrib.auth.models import User
from search.models import Subject

STATUS_CHOICE = (
    ('고등학생', '고등학생'),
    ('n수생', 'n수생'),
    ('대학생', '대학생'),
    ('과외선생님','과외선생님'),
    ('학원 아르바이트','학원 아르바이트'),
    ('무직','무직'),
    ('기타','기타')
)

class Grade(models.Model):
    userIdx = models.ForeignKey(User, on_delete = models.CASCADE, db_column="userIdx")
    korGrade = models.IntegerField()
    mathGrade = models.IntegerField()
    engGrade = models.IntegerField()
    s1Grade = models.IntegerField()
    s2Grade = models.IntegerField()
    hisGrade = models.IntegerField()

class Profile(models.Model):
    userIdx = models.ForeignKey(User, on_delete = models.CASCADE, db_column="userIdx")
    gradeIdx = models.ForeignKey(Grade, on_delete = models.CASCADE, db_column="gradeIdx", null=True)
    userName = models.CharField(max_length=10)
    userStatus = models.CharField(max_length=10, choices = STATUS_CHOICE)
    address = models.TextField()
    reviewPoint = models.IntegerField(default=0)
    gender = models.IntegerField()
    phoneNum = models.IntegerField()



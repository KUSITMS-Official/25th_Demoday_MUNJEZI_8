#from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, status
from .serializers import *
from .models import *
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated

#마이페이지_개인정보 보여주기 (restAPI 활용 VER.)
class mypageProfileView(APIView):
    
    def post(self, request):
        pro_serializer = profileSerializer(data = request.data)
        if pro_serializer.is_valid():
            pro_serializer.save()
            return Response(pro_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(pro_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    
    def get(self,request, **kwargs):
        user = kwargs.get('userIdx')
        pro_Serializer = profileSerializer(Profile.objects.get(userIdx=user))
        return Response(pro_Serializer.data) 


    
#마이페이지_개인정보 중 성적 보여주기 (restAPI 활용 VER.2)
class mypageGradeView(APIView):

    def post(self, request):
        grade_serializer = gradeSerializer(data = request.data)
        if grade_serializer.is_valid():
            grade_serializer.save()
            return Response(grade_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(grade_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self,request, **kwargs) :
        user = kwargs.get('userIdx')
        grade_Serializer = gradeSerializer(Grade.objects.get(userIdx=user))
        return Response(grade_Serializer.data)
    
    
#마이페이지_개인정보 수정하기 (1)

# def mypageModify(request):
#     user = request.user
#     profile = Profile.objects.get(userIdx=user)


    

    

#마이페이지_개인정보 수정하기 (2 - 성적기입페이지)




from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

from django.contrib.auth.models import User
from . import models

class Signup(APIView):
    def post(self, request):
        user = User.objects.create_user(username=request.data['id'], password=request.data['password'])
        user.save()
        profile = models.Profile(userIdx=user, userName=request.data['userName'], phoneNum=request.data['phoneNum'],
                                 gender=request.data['gender'], userStatus=request.data['userStatus'],
                                 address=request.data['address'])
        profile.save()
        token = Token.objects.create(user=user)
        return Response({"Token": token.key})


class Login(APIView):
    def post(self, request):
        user = authenticate(username=request.data['id'], password=request.data['password'])
        if user is not None:
            try:
                token = Token.objects.get(user=user)
            except Token.DoesNotExist:
                token = Token.objects.create(user=user)
            return Response({"Token": token.key})
        else:
            return Response(status=401)

class Logout(APIView):
    @permission_classes(([IsAuthenticated]))
    #permissions_classes = [IsAuthenticated]
    def get(self, request):
        if request.user.is_authenticated:
            print(request.user)
            request.user.auth_token.delete()
        return Response({"success": ("Successfully logged out.")}, status=200)

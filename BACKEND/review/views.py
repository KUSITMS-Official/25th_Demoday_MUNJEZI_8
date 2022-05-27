from django.shortcuts import render
from django.shortcuts import render
# from django.contrib.auth.models import Review
from django.test import tag
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, status
from search.serializers import bookSerializer

from user.models import Profile 
from .serializers import *
from .models import *
from search.models import *
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
import json
# from django.contrib.auth.models import Tag
# Create your views here.


#Review post 
class reviewPostView(APIView):
    
    def post(self, request, pk): 
            
        #userIdx = request.user.id #User index
        userIdx = request.POST.get('userIdx')
        bookIdx = pk #Book index
        level = request.POST.get('level') #Level (쉬움 = 1, 보통 = 2, 어려움 = 3)
        content = request.POST.get('content') #Content (Review 내용)
        img = request.POST.get('img') #Image data
        
        tag_Same = request.POST.getlist('tagSame') #공통태그
        tagSameMap = map(int, tag_Same)
        tagSame = json.dumps(list(tagSameMap)) #공통태그 list
        
        
        tag_Sub = request.POST.getlist('tagSub') #과목태그
        tagSubMap = map(int,tag_Sub)
        tagSub = json.dumps(list(tagSubMap)) #과목태그 list 

        
        rev_serializer = reviewSerializer(data={'userIdx' : userIdx, 'bookIdx': bookIdx, 'level' : level, 'content' : content, 
                                                'img' : img, 'tagSame' : tagSame, 'tagSub' : tagSub})
        #reviewSerializer에 review관련 data 입력
        
        if rev_serializer.is_valid(): #유효한 값들이 review DB에 입력됐을 시,
            rev_serializer.save() #review 저장
            saveLevel(pk)
            saveTag(pk)
            return Response(rev_serializer.data, status=status.HTTP_201_CREATED)
            #review data 불러오기 및 201 코드 반환
        else:
            return Response(rev_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
            #유효하지 않은 값들이 review DB에 입력됐을시, 400 ERROR 코드 반환



class reviewGetView(APIView):
    
    def get(self,request, bookIdx):
        reviews = Review.objects.filter(bookIdx=bookIdx)
        rev_serializer = reviewSerializer(reviews,many=True)
        return Response(rev_serializer.data) 
    
    
class BookView(APIView):

    def get(self,request, bookIdx):
        book_serializer = bookSerializer(Book.objects.get(id=bookIdx))
        return Response(book_serializer.data) 

def saveLevel(id): #리뷰 등록시 상중하에서 가장 많은 거 book에 저장
    reviews = Review.objects.filter(bookIdx = id)
    print(reviews)
    book = Book.objects.get(id = id)

    level =[0,0,0]

    for review in reviews:
        if review.level == 1:
            level[0] += 1
        elif review.level == 2:
            level[1] += 1
        elif review.level == 3:
            level[2] += 1
    book.level = level.index(max(level))+1
    book.save()

def saveTag(id): #book 태그 저장 + 내림차순 정렬
    tagdic = {}
    tagSubdic = {}

    book = Book.objects.get(id = id)
    reviews = Review.objects.filter(bookIdx=id)

    print('dd')
    for review in reviews:
        tags= review.tagSame
        for tag in tags:
            if tag>= '1' and tag<= '9':
                if tag in tagdic:
                    tagdic[tag] += 1
                else:
                    tagdic[tag] = 1

        subtags = review.tagSub #과목별태그
        for tag in subtags:
            if tag>= '1' and tag<= '9':
                if tag in tagSubdic:
                    tagSubdic[tag] += 1
                else:
                    tagSubdic[tag] = 1

    tagdic = sorted(tagdic.items(), key=lambda x: x[1], reverse=True)
    tagSubdic = sorted(tagSubdic.items(), key=lambda x: x[1], reverse=True)

    tagSame = ''
    tagSub = ''
    for i in range(len(tagdic)):
        tagSame += tagdic[i][0]
    for i in range(len(tagSubdic)):
        tagSub += tagSubdic[i][0]
    book.tagSame = tagSame
    book.tagSubject = tagSub
    book.save()


class test(APIView):
    def get(self, request, pk):
        saveTag(pk)
        return Response(status=200)
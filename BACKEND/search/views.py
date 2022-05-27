from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import *
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db.models import Q
from .serializers import *
# Create your views here.
'''
세부 과목 및 유형 : 국어 -> 언매화작등등
문제 유형 : 개념, 응용, 기출, 개념위주, 문제위주
난의도 : 쉬움 보통 어려움
출판사 : ebs, 메가스터디, 마더텅, 수겸출판사, 희망에듀
태그 : 해설이 잘되어있는, 해설영상포함, 다양한문제풀이방법이있는, 빠른정답직지가 있는---> 과목별로 달라짐
'''

class search(APIView):
    def get(self, request):
        title = request.GET.get('title', '')
        if title:
            books = Book.objects.filter(title__contains = title)
            serializer = titleSerializer(books, many=True)
            return Response(serializer.data, status=200)
        else:
            return Response({"message : 검색 결과가 없습니다."}, status=404)



class applyFilterling(APIView):
    def get(self, request):
        #필터 조건 받아오기
        subSubject = request.GET.getlist('subjectIdx.sub_subject', None) #세부과목
        questionType = request.GET.getlist('questionType', None) #문제유형
        level = request.GET.getlist('level', None) #난의도
        tagSame= request.GET.getlist('tagSame', None) # 공통태그
        tagSubject = request.GET.getlist('tagSubject', None) #과목별 태그
        #빈칸 제거
        subSubject = list(filter(None,subSubject))
        questionType = list(filter(None,questionType))
        level = list(filter(None,level))
        tagSame = list(filter(None,tagSame))
        tagSubject = list(filter(None,tagSubject))
        #Q객체 사용하여 조건 추가
        bookCondition = Q()
        if subSubject:
            bookCondition.add(Q(subjectIdx__in=subSubject), Q.AND)
        if questionType:
            bookCondition.add(Q(questionType__in=questionType), Q.AND)
        if level:
            bookCondition.add(Q(level__in=level), Q.AND)
        if tagSame:
            for tag in tagSame:
                bookCondition.add(Q(tagSame__contains=tag), Q.AND)
        if tagSubject:
            for tag in tagSame:
                bookCondition.add(Q(tagSubject__contains=tag), Q.AND)
        #필터링 한 데이터 get
        books = Book.objects.filter(bookCondition).distinct()
        serializer = bookSerializer(books, many = True)
        return Response(serializer.data, status=200)




class firstFilterling(APIView):
    def get(self, request):
        #별점높은순, 리뷰많은순 2, 저장많은순, 낮은가격순 4, 높은가격순 5
        orderling = request.GET.get('orderling')

        books = Book.objects.all()
        if orderling == '2': #리뷰많은순
            books = Book.objects.all().order_by('-reviewCnt')
        elif orderling == '4':
            books = Book.objects.all().order_by('price')
        elif orderling == '5':
            books = Book.objects.all().order_by('-price')
        serializer = bookSerializer(books, many=True)
        return Response(serializer.data, status=200)



from rest_framework import serializers
from .models import *

class bookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id',)

class titleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('title', )

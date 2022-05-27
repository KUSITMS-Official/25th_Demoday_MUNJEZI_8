from rest_framework import serializers
from .models import *

class reviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        

class tagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
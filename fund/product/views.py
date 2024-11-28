from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from django.utils import timezone
from datetime import timedelta
from .serializers import *
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import AccessToken
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions, status
from django.db.models import Q
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer   
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegistrationSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

class RegistrationView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user_email =  user['user'].email
           
            user_in = user['user']

            refresh = RefreshToken.for_user(user_in)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
               
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



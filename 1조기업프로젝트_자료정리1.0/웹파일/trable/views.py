from django.shortcuts import render
from django.http import HttpResponse
from django.core.paginator import Paginator

# Create your views here.

# 메인페이지
def main(request) :
    return render(request,
                  "trableapp/main.html")


### 로그인페이지
def login(request) :
    return render(request,
                  "trableapp/login.html")

### 회원가입페이지 
def signup(request) :
    return render(request,
                  "trableapp/signup.html")

### 전국페이지 
def side(request) :
    return render(request,
                  "trableapp/side.html")

#상세 페이지
def MI(request) :
    return render(request,
                  "trableapp/more_information.html")




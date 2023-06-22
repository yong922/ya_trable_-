from django.urls import path




from . import views

urlpatterns = [
    ### http://127.0.0.1:8000/main/main
    path('', views.main),
    path('login/', views.login),
    path('signup/', views.signup),
    path('side/', views.side),
    path('mi/', views.MI),
]
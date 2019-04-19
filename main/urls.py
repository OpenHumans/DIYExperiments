from django.urls import path

from . import views

urlpatterns = [
    path(r'', views.index, name='index'),
    path(r'dashboard/', views.dashboard, name='dashboard'),
    path(r'logout/', views.logout_user, name='logout'),
    path(r'about/', views.about, name='about'),
]

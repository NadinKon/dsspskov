from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('articles/', views.ArticleListView.as_view(), name='article_list'),
    # path('article/<int:pk>/', views.ArticleDetailView.as_view(), name='article_detail'),
    # path('services/', views.ServiceListView.as_view(), name='service_list'),
    # path('service/<int:pk>/', views.ServiceDetailView.as_view(), name='service_detail'),
    # path('contact/', views.ContactView.as_view(), name='contact'),
]

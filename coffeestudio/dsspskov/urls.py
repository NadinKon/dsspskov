from django.urls import path
from . import views


urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('about/', views.AboutTextView.as_view(), name='about'),
    path('service/', views.ServiceView.as_view(), name='service'),
    path('catalog/', views.CatalogView.as_view(), name='catalog'),
    path('objects/', views.ObjectsListView.as_view(), name='objects'),
    path('news/', views.NewsListView.as_view(), name='news'),
    path('article/', views.NewsDetailView.as_view(), name='article'),
    path('production/', views.ProductionView.as_view(), name='production'),
    path('contacts/', views.ContactView.as_view(), name='contacts'),
]
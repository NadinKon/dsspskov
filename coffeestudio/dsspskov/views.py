from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.generic.base import View
from .models import *
from .forms import FeedbackForm

class IndexView(View):
    def get(self, request):
        about_text = AboutText.objects.first()
        news = NewsList.objects.filter(is_published=True)[:3]
        form = FeedbackForm()
        context = {
            'about_text': about_text,
            'news': news,
            'form': form
        }
        return render(request, 'dsspskov/index.html', context)

    def post(self, request):
        form = FeedbackForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')

        about_text = AboutText.objects.first()
        news = NewsList.objects.filter(is_published=True)[:3]
        context = {
            'about_text': about_text,
            'news': news,
            'form': form
        }
        return render(request, 'dsspskov/index.html', context)


class AboutTextView(View):
    def get(self, request):
        about_text = AboutText.objects.first()
        return render(request, 'dsspskov/about.html', {'about_text': about_text})


class ServiceView(View):
    def get(self, request):
        # posts = Service.objects.all()
        return render(request, 'dsspskov/service.html')


class CatalogView(View):
    def get(self, request):
        return render(request, 'dsspskov/catalog.html')


class ObjectsListView(View):
    def get(self, request):
        return render(request, 'dsspskov/objects.html')


class NewsListView(View):
    def get(self, request):
        news = NewsList.objects.filter(is_published=True)
        return render(request, 'dsspskov/list.html', {'news': news})


class NewsDetailView(View):
    def get(self, request, pk):
        # article = NewsList.objects.get(id=pk)
        return render(request, 'dsspskov/article.html', {'article': article})


class ProductionView(View):
    def get(self, request):
        return render(request, 'dsspskov/production.html')


class ContactView(View):
    def get(self, request):
        return render(request, 'dsspskov/contacts.html')


def page_not_found(request, exception):
    return render(request, 'dsspskov/404.html')
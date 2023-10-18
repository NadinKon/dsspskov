from django.contrib import admin
from .models import *

@admin.register(NewsList)
class NewsListAdmin(admin.ModelAdmin):
    list_display = ['title', 'content', 'photo', 'time_create', 'is_published']
    list_editable = ['is_published']
    list_filter = ['is_published', 'time_create']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'text', 'time_create']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(AboutText)
class AboutTextAdmin(admin.ModelAdmin):
    list_display = ['title', 'description']


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'message']

from django.db import models

class NewsList(models.Model):
    title = models.CharField(max_length=255, verbose_name='Заголовок')
    content = models.TextField(blank=True, verbose_name='Текст статьи')
    photo = models.ImageField(upload_to="photos/%Y/%m/%d/", verbose_name='Фото', blank=True)
    time_create = models.DateTimeField(auto_now_add=True, verbose_name='Время создания')
    is_published = models.BooleanField(default=True, verbose_name='Опубликовано')
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return f'{self.title}, {self.content}'

    class Meta:
        verbose_name = 'Статьи'
        verbose_name_plural = 'Статьи'


class Service(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название')
    text = models.TextField(blank=True, verbose_name='Описание')
    time_create = models.DateTimeField(auto_now_add=True, verbose_name='Время создания')
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name='URL')

    def __str__(self):
        return f'{self.name}, {self.text}'

    class Meta:
        verbose_name = 'Услуги'
        verbose_name_plural = 'Услуги'


class AboutText(models.Model):
    title = models.CharField(max_length=255, verbose_name='Заголовок')
    description = models.TextField(blank=True, verbose_name='Описание')

    def __str__(self):
        return f'{self.title}, {self.description}'

    class Meta:
        verbose_name = 'О нас'
        verbose_name_plural = 'О нас'


class Feedback(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    phone = models.CharField(max_length=18, verbose_name='Телефон')
    email = models.EmailField(blank=True, null=True, verbose_name='Почта')
    message = models.TextField(blank=True, verbose_name='Сообщение')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Обратная связь'



